export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
export const TOKEN_COOKIE = 'token';
export const COOKIE_OPTIONS = {
  sameSite: 'Lax' as const,
  secure: process.env.NODE_ENV === 'production',
};
