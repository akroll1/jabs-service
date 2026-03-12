import { Router, Request, Response } from 'express';
import { JabType } from '@/common';
import { JabsService } from '@/services/jabs/jabs.service';
import { verifyUnsubscribeToken } from '@/libs/unsubscribe-token';
import { Config } from '../../../config';

const router = Router();
const jabsService = new JabsService();
const validJabTypes = new Set(Object.values(JabType));

// PUT /jabs/subscribe
router.put('/subscribe', async (req: Request, res: Response) => {
  const { email, type, ...rest } = req.body ?? {};

  if (!email) {
    return res.status(400).json({ message: 'Missing required field: email' });
  }

  if (!type || !validJabTypes.has(type)) {
    return res.status(400).json({ message: 'Missing or invalid field: type' });
  }

  const created = await jabsService.subscribeToType({ email, type, ...rest });

  if (!created) {
    return res.status(500).json({ message: 'Failed to create jab subscription.' });
  }

  return res.status(200).json({ message: 'Subscribed!' });
});

// PUT /jabs/unsubscribe
router.put('/unsubscribe', async (req: Request, res: Response) => {
  const { token } = req.body ?? {};

  if (!token) {
    return res.status(400).json({ message: 'Missing required field: token' });
  }

  const payload = verifyUnsubscribeToken(token, Config.UNSUBSCRIBE_SECRET);

  if (!payload) {
    return res.status(401).json({ message: 'Invalid or expired unsubscribe token' });
  }

  await jabsService.unsubscribeFromType(payload.email, payload.type);

  return res.status(200).json({ message: 'Unsubscribed!' });
});

export default router;
