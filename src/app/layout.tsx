import './globals.css';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'sonner';
import { Figtree } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-figtree',
});

export const metadata = {
  title: 'Meu App',
  description: 'App integrado com NestJS auth',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={figtree.className}>
        <div className='bg-[#FFF4F9]'>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
        </div>
      </body>
    </html>
  );
}
