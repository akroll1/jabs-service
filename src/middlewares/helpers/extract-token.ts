export const extractToken = (headers: any): string | null => {
  const rawHeader = headers.Authorization || headers.authorization;

  if (!rawHeader) return null;

  // 🛡️ HANDLE EXPRESS ARRAY QUIRK
  const authHeader = Array.isArray(rawHeader) ? rawHeader[0] : rawHeader;

  return authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
};
