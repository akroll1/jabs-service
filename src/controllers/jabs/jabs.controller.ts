import { Router, Request, Response } from 'express';
import { feedbackHandler, subscribeHandler, unsubscribeHandler } from './controller-handlers';

const jabsRouter = Router();

// ============================================================
// HTTP router — direct-invoke-only routes (welcome, corner-invite) are not exposed here
// ============================================================

// POST /jabs/subscribe
jabsRouter.post('/subscribe', async (req: Request, res: Response) => {
  const result = await subscribeHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

// DELETE /jabs/unsubscribe
jabsRouter.delete('/unsubscribe', async (req: Request, res: Response) => {
  const result = await unsubscribeHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

// POST /jabs/feedback
jabsRouter.post('/feedback', async (req: Request, res: Response) => {
  const result = await feedbackHandler(req.body ?? {});
  return res.status(result.statusCode).json({ message: result.message });
});

export default jabsRouter;
