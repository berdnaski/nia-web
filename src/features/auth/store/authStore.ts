import { create } from 'zustand';
import { AuthUser, loginService, registerService, logoutService } from '../services/authService';
import { getTokenCookie } from '@/lib/cookies';
import { jwtDecode } from 'jwt-decode';

type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  init: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, avatarUrl?: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: true,

  init: () => {
    const token = getTokenCookie();
    if (token) {
      try {
        const payload: any = jwtDecode(token);
        set({
          user: {
            id: payload.sub,
            name: payload.name ?? '',
            email: payload.email ?? '',
            avatarUrl: payload.avatarUrl ?? undefined,
          },
          isAuthenticated: true,
          loading: false,
        });
      } catch (err) {
        set({ user: null, isAuthenticated: false, loading: false });
      }
    } else {
      set({ user: null, isAuthenticated: false, loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const res = await loginService(email, password);
      set({ user: res.user, isAuthenticated: true, loading: false });
    } catch (err) {
      set({ loading: false });
      throw err;
    }
  },

  register: async (name, email, password, avatarUrl) => {
    set({ loading: true });
    try {
      await registerService(name, email, password, avatarUrl);
      set({ loading: false });
    } catch (err) {
      set({ loading: false });
      throw err;
    }
  },

  logout: () => {
    logoutService();
    set({ user: null, isAuthenticated: false });
  },
}));
