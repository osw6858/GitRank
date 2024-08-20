import {NextResponse} from 'next/server';
import {withAuth} from 'next-auth/middleware';

export default withAuth(function middleware(req) {
  const path = req.nextUrl.pathname;
  console.log('미들웨어 실행:', path, '토큰:', req.nextauth.token);

  if (req.nextauth.token && path === '/success') {
    return NextResponse.next();
  }
  if (!req.nextauth.token && path === '/') {
    return NextResponse.next();
  }

  if (req.nextauth.token) {
    return NextResponse.redirect(new URL('/success', req.url));
  } else {
    return NextResponse.redirect(new URL('/', req.url));
  }
});

export const config = {
  matcher: ['/success', '/'],
};
