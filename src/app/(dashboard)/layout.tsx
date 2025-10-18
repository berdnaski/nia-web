'use client';

import React, { useEffect } from 'react';
import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading, logout, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, loading, router]);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <header className="p-4 border-b border-neutral-800 flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold">Dashboard</span>
          {user && <span className="ml-4 text-neutral-400">Olá, {user.name}</span>}
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
        >
          Logout
        </button>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
