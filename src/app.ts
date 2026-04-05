import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import jabsRouter from './controllers/jabs/jabs.controller';
import { atlasConnectionMiddleware, cloudfrontSecretMiddleware, corsMiddleware } from './middlewares';

const app = express();

app.use(helmet()); 
app.use(corsMiddleware);
app.use(cloudfrontSecretMiddleware);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(atlasConnectionMiddleware)

app.use('/jabs', jabsRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message ?? 'Internal Server Error' });
});

export default app;
