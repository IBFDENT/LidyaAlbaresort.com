import { NextRequest, NextResponse } from "next/server";
import { ADMIN_ACCESS_COOKIE, ADMIN_REFRESH_COOKIE } from "@/lib/admin-auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/auth/")) {
    return NextResponse.next();
  }

  const hasAccess = Boolean(request.cookies.get(ADMIN_ACCESS_COOKIE)?.value);
  const hasRefresh = Boolean(request.cookies.get(ADMIN_REFRESH_COOKIE)?.value);

  if (pathname.startsWith("/admin") && !hasAccess && !hasRefresh) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (pathname.startsWith("/api/admin") && !hasAccess && !hasRefresh) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
