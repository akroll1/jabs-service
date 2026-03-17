import { timingSafeEqual } from "crypto";
import type { NextFunction, Request, Response } from "express";

function secretsMatch(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export const cloudfrontSecretMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const EXPECTED_SECRET = process.env.CLOUDFRONT_SECRET;

  if (!EXPECTED_SECRET) {
    console.error("🚨 FATAL: CLOUDFRONT_SECRET is not set in environment.");
    return res.status(500).json({ error: "Server Configuration Error" });
  }

  const isLocal =
    process.env.IS_OFFLINE === "true" || process.env.NODE_ENV === "development";

  if (isLocal) {
    return next();
  }

  const rawHeader = req.headers["x-origin-secret"];
  const receivedSecret = Array.isArray(rawHeader) ? rawHeader[0] : rawHeader;

  if (!receivedSecret || !secretsMatch(receivedSecret, EXPECTED_SECRET)) {
    console.warn(
      JSON.stringify({
        level: "WARN",
        message: `🛑 BLOCKED: Secret Mismatch. IP: ${req.ip}`,
      })
    );

    return res.status(403).json({
      error: "Forbidden",
      message: "Direct access restricted.",
    });
  }

  next();
};
