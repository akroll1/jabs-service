import type { NextFunction, Request, Response } from "express";

const ALLOWED_ORIGINS = [
  "https://fightsync.app",
  "capacitor://localhost",
  "http://localhost:48931",
];

const ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS";
const ALLOWED_HEADERS =
  "Content-Type,Authorization,X-Fightsync-Auth,x-origin-secret";

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { origin } = req.headers;

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", ALLOWED_METHODS);
    res.setHeader("Access-Control-Allow-Headers", ALLOWED_HEADERS);

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
  }

  next();
};
