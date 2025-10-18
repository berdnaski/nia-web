import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get('token');
  const token = tokenCookie?.value;
  const url = req.nextUrl.clone();

  if (!token && !url.pathname.startsWith('/auth')) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (token && url.pathname.startsWith('/auth')) {
    url.pathname = '/onboarding';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/onboarding/:path*', '/auth/:path*'],
};
