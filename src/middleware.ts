import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  sub: string;
  email?: string;
  onboardingCompletedAt?: string | null;
}

export function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get('token');
  const token = tokenCookie?.value;
  const url = req.nextUrl.clone();

  const isAuthRoute = 
    url.pathname.startsWith('/auth') ||
    url.pathname.startsWith('/login') ||
    url.pathname.startsWith('/register') ||
    url.pathname === '/';

  const isOnboardingRoute = url.pathname.startsWith('/onboarding');

  if (!token && !isAuthRoute) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (token && isAuthRoute) {
    try {
      const decoded = jwt.decode(token) as TokenPayload;
      
      if (decoded?.onboardingCompletedAt) {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
      } else {
        url.pathname = '/onboarding';
        return NextResponse.redirect(url);
      }
    } catch (error) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  if (token && !isAuthRoute) {
    try {
      const decoded = jwt.decode(token) as TokenPayload;
      if (!decoded?.onboardingCompletedAt && !isOnboardingRoute) {
        url.pathname = '/onboarding';
        return NextResponse.redirect(url);
      }
      
      if (decoded?.onboardingCompletedAt && isOnboardingRoute) {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
      }
    } catch (error) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/onboarding/:path*',
    '/dashboard/:path*',
    '/auth/:path*',
    '/login',
    '/register',
  ],
};
