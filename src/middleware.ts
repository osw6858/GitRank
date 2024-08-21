import {NextResponse} from 'next/server';
import {withAuth} from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    const {pathname} = req.nextUrl;
    const isAuthenticated = !!req.nextauth.token;

    if (pathname === '/' && isAuthenticated) {
      return NextResponse.redirect(new URL('/success', req.url));
    }

    if (pathname !== '/' && !isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({token, req}) => {
        const {pathname} = req.nextUrl;
        return pathname === '/' || !!token;
      },
    },
  },
);

export const config = {
  matcher: ['/', '/success', '/profile'],
};
