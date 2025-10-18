import { api } from '@/lib/api';
import { saveTokenCookie, removeTokenCookie } from '@/lib/cookies';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string | null;
};

export type LoginResponse = {
  message?: string;
  user: AuthUser;
  access_token: string;
};

export async function loginService(email: string, password: string): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/auth/login', { email, password });
  saveTokenCookie(data.access_token);
  return data;
}

export async function registerService(
  name: string,
  email: string,
  password: string,
  avatarUrl?: string,
): Promise<{ message?: string; user: AuthUser; access_token?: string }>{
  const { data } = await api.post('/auth/register', { name, email, password, avatarUrl });
  if ((data as any).access_token) {
    saveTokenCookie((data as any).access_token);
  }
  return data;
}

export function logoutService() {
  removeTokenCookie();
}