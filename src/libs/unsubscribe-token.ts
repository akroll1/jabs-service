import { createHmac, timingSafeEqual } from "crypto";
import { JabType } from "@/common";

const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

interface UnsubscribePayload {
  email: string;
  type: JabType;
  exp: number;
}

function base64urlEncode(value: string): string {
  return Buffer.from(value).toString("base64url");
}

function base64urlDecode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

/**
 * Generates a signed unsubscribe token to embed in email links.
 * Format: base64url(JSON payload) + "." + HMAC-SHA256 signature
 */
export function generateUnsubscribeToken(email: string, type: JabType, secret: string): string {
  const payload: UnsubscribePayload = {
    email: email.toLowerCase().trim(),
    type,
    exp: Date.now() + TOKEN_TTL_MS,
  };
  const encodedPayload = base64urlEncode(JSON.stringify(payload));
  const signature = sign(encodedPayload, secret);
  return `${encodedPayload}.${signature}`;
}

/**
 * Verifies a signed unsubscribe token.
 * Returns the payload if valid and not expired, otherwise null.
 */
export function verifyUnsubscribeToken(
  token: string,
  secret: string
): UnsubscribePayload | null {
  const dotIndex = token.lastIndexOf(".");
  if (dotIndex === -1) return null;

  const encodedPayload = token.slice(0, dotIndex);
  const receivedSignature = token.slice(dotIndex + 1);

  // Constant-time comparison to prevent timing attacks
  const expectedSignature = sign(encodedPayload, secret);
  try {
    const received = Buffer.from(receivedSignature, "hex");
    const expected = Buffer.from(expectedSignature, "hex");
    if (received.length !== expected.length) return null;
    if (!timingSafeEqual(received, expected)) return null;
  } catch {
    return null;
  }

  let payload: UnsubscribePayload;
  try {
    payload = JSON.parse(base64urlDecode(encodedPayload));
  } catch {
    return null;
  }

  if (Date.now() > payload.exp) return null;

  return payload;
}
