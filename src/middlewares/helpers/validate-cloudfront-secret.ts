import type { IncomingHttpHeaders } from "http";

export const validateCloudFrontSecret = (
  headers: IncomingHttpHeaders,
  envSecret?: string
): boolean => {
  const receivedSecret = headers["x-origin-secret"];

  if (!envSecret && receivedSecret) return false;

  if (receivedSecret && receivedSecret !== envSecret) return false;

  return true;
};
