import { ALLOWED_ORIGINS } from 'src/constants';

export const getCorsOrigin = (origin: string): string => {
    const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : '';
    if (!corsOrigin) return '';
    return corsOrigin;
}