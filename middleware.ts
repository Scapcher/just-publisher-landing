import { NextResponse, type NextRequest } from "next/server";

const SESSION_COOKIE = "jp_admin";

export function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === "/admin/login";
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;

  const isAuthed = !!secret && session === secret;

  if (!isAuthed && !isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  if (isAuthed && isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/apps";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
