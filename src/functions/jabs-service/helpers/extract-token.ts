export const extractToken = (headers: any): string | null => {
    const authHeader = headers['Authorization'] || headers['authorization'];
    if (!authHeader) return null;
    return authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
}