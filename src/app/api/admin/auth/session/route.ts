import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_ACCESS_COOKIE,
  ADMIN_REFRESH_COOKIE,
  clearAdminSessionCookies,
  getSupabaseAuthConfig,
  setAdminSessionCookies,
  verifyAdminAccessToken,
} from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.cookies.get(ADMIN_ACCESS_COOKIE)?.value;

    if (accessToken) {
      const admin = await verifyAdminAccessToken(accessToken);
      if (admin) {
        return NextResponse.json({
          authenticated: true,
          user: {
            email: admin.user.email,
            name: admin.profile.full_name,
            role: admin.profile.role,
          },
        });
      }
    }

    const refreshToken = request.cookies.get(ADMIN_REFRESH_COOKIE)?.value;
    if (!refreshToken) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const { url, anonKey } = getSupabaseAuthConfig();
    const refreshResponse = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
      cache: "no-store",
    });

    const session = await refreshResponse.json();
    if (!refreshResponse.ok || !session?.access_token) {
      const response = NextResponse.json({ authenticated: false }, { status: 401 });
      clearAdminSessionCookies(response);
      return response;
    }

    const admin = await verifyAdminAccessToken(session.access_token);
    if (!admin) {
      const response = NextResponse.json({ authenticated: false }, { status: 403 });
      clearAdminSessionCookies(response);
      return response;
    }

    const response = NextResponse.json({
      authenticated: true,
      user: {
        email: admin.user.email,
        name: admin.profile.full_name,
        role: admin.profile.role,
      },
    });

    setAdminSessionCookies(
      response,
      session.access_token,
      session.refresh_token,
      session.expires_in || 3600
    );

    return response;
  } catch (error) {
    console.error("Admin session error", error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
