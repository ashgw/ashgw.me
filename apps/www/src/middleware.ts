import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { env } from "@ashgw/env";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/blog")) {
    const targetBaseUrl = env.NEXT_PUBLIC_BLOG_URL;
    const cleanPath = pathname.replace(/^\/blog/, "");
    const targetUrl = `${targetBaseUrl}${cleanPath}${search}`;
    return NextResponse.redirect(targetUrl);
  }

  if (pathname.startsWith("/booking")) {
    const cleanPath = pathname.replace(/^\/booking/, "");
    const targetUrl = `https://cal.com/ashgw/default${cleanPath}${search}`;
    return NextResponse.redirect(targetUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*", "/booking/:path*"],
};
