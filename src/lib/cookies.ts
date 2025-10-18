import Cookies from 'js-cookie';
import { TOKEN_COOKIE, COOKIE_OPTIONS } from './constants';

export const saveTokenCookie = (token: string) => {
  Cookies.set(TOKEN_COOKIE, token, {
    sameSite: COOKIE_OPTIONS.sameSite,
    secure: COOKIE_OPTIONS.secure,
    expires: 7, 
    path: '/',
  });
};

export const getTokenCookie = () => {
  return Cookies.get(TOKEN_COOKIE);
};

export const removeTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE, { path: '/' });
};
