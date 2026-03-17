import { Router, Request, Response } from 'express';
import { JabType } from '@/common';
import { JabsService } from '@/services/jabs/jabs.service';
import { verifyUnsubscribeToken } from '@/libs/unsubscribe-token';
import { sendWelcomeEmailSES, sendCornerInviteEmailSES } from '@/services/jabs/ses.service';
import { Config } from '../../../config';

const router = Router();
const jabsService = new JabsService();
const validJabTypes = new Set(Object.values(JabType));

// ============================================================
// Named handler functions — shared by HTTP router and direct Lambda invocation
// ============================================================

export async function subscribeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, type, ...rest } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!type || !validJabTypes.has(type)) return { statusCode: 400, message: 'Missing or invalid field: type' };

  const created = await jabsService.subscribeToType({ email, type, ...rest });

  if (!created) return { statusCode: 500, message: 'Failed to create jab subscription.' };

  return { statusCode: 201, message: 'Subscribed!' };
}

export async function unsubscribeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { token } = body;

  if (!token) return { statusCode: 400, message: 'Missing required field: token' };

  const payload = verifyUnsubscribeToken(token, Config.UNSUBSCRIBE_SECRET);

  if (!payload) return { statusCode: 401, message: 'Invalid or expired unsubscribe token' };

  await jabsService.unsubscribeFromType(payload.email, payload.type);

  return { statusCode: 200, message: 'Unsubscribed!' };
}

// Internal variant — skips token verification for trusted Lambda-to-Lambda calls
export async function internalUnsubscribeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, type } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!type || !validJabTypes.has(type)) return { statusCode: 400, message: 'Missing or invalid field: type' };

  await jabsService.unsubscribeFromType(email, type as JabType);

  return { statusCode: 200, message: 'Unsubscribed!' };
}

export async function welcomeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };

  await sendWelcomeEmailSES(email);

  return { statusCode: 200, message: 'Welcome email sent.' };
}

export async function cornerInviteHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, cornerName, inviterName } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!cornerName) return { statusCode: 400, message: 'Missing required field: cornerName' };

  await sendCornerInviteEmailSES({ email, cornerName, inviterName });

  return { statusCode: 200, message: 'Corner invite email sent.' };
}

// ============================================================
// HTTP router — delegates to named handlers
// ============================================================

// POST /jabs/subscribe
router.post('/subscribe', async (req: Request, res: Response) => {
  const result = await subscribeHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

// DELETE /jabs/unsubscribe
router.delete('/unsubscribe', async (req: Request, res: Response) => {
  const result = await unsubscribeHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

// POST /jabs/welcome
router.post('/welcome', async (req: Request, res: Response) => {
  const result = await welcomeHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

// POST /jabs/corner-invite
router.post('/corner-invite', async (req: Request, res: Response) => {
  const result = await cornerInviteHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

export default router;
