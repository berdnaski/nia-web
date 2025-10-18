'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuthStore } from '@/features/auth/store/authStore';

type AuthContextType = {
  user: ReturnType<typeof useAuthStore> extends { user: infer U } ? U : any;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, avatarUrl?: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, loading, init, login, register, logout } = useAuthStore();

  useEffect(() => {
    init();
  }, [init]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
