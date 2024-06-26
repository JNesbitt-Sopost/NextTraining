import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import type { NextRequest } from 'next/server'
 
export default NextAuth(authConfig).auth;

export function middleware(request: NextRequest) {
    // Middleware logic goes here
  }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};