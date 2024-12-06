import {auth} from '@/auth';

const PROTECTED_URL = ['/success'];

const NOT_PROTECTED_URL = ['/', '/auth/signin', '/auth/signup'];

export default auth((req) => {
  // 로그 아웃 상태에서 protected 라우트에 접근
  if (!req.auth && !NOT_PROTECTED_URL.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  // 로그인 상태에서 로그인 페이지 or 회원가입 페이지 접근
  if (req.auth && !PROTECTED_URL.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/success', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
