import express, { NextFunction, Request, Response } from 'express';
import { Config } from '../config';
import { getCorsOrigin } from './libs/get-cors-origin';
import { validateCloudFrontSecret } from './functions/jabs-service/helpers';
import { connectToAtlas } from './libs/connect-to-atlas';
import jabsRouter from './controllers/jabs/jabs.controller';

const app = express();

app.use(express.json());

// ============================================================
// Security headers
// ============================================================
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none';");
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// ============================================================
// CORS
// ============================================================
app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin || '';
  const corsOrigin = getCorsOrigin(origin);

  if (corsOrigin) {
    res.setHeader('Access-Control-Allow-Origin', corsOrigin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Origin-Secret, x-origin-secret, X-Requested-With, Origin, Referrer-Policy, User-Agent');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

// ============================================================
// CloudFront origin secret validation
// ============================================================
app.use((req: Request, res: Response, next: NextFunction) => {
  const secretIsValid = validateCloudFrontSecret(
    req.headers as Record<string, string>,
    Config.CLOUDFRONT_SECRET
  );

  if (!secretIsValid) {
    console.warn(`🛑 Blocked Spoofed Request. IP: ${req.ip}`);
    return res.status(403).json({ message: 'Forbidden: Invalid Origin Secret' });
  }

  next();
});

// ============================================================
// DB connection
// ============================================================
app.use(async (_req: Request, _res: Response, next: NextFunction) => {
  try {
    await connectToAtlas();
    next();
  } catch (err) {
    next(err);
  }
});

// ============================================================
// Routes
// ============================================================
app.use('/jabs', jabsRouter);

// ============================================================
// Error handler
// ============================================================
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message ?? 'Internal Server Error' });
});

export default app;
