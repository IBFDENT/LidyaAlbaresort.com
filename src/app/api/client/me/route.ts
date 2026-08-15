import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_ACCESS_COOKIE,
  CLIENT_REFRESH_COOKIE,
  getSupabaseAuthConfig,
  setClientSessionCookies,
} from "@/lib/client-auth";

async function fetchUser(url: string, anonKey: string, accessToken: string) {
  return fetch(`${url}/auth/v1/user`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });
}

export async function GET(request: NextRequest) {
  try {
    const { url, anonKey } = getSupabaseAuthConfig();
    const accessToken = request.cookies.get(CLIENT_ACCESS_COOKIE)?.value;

    if (accessToken) {
      const userResponse = await fetchUser(url, anonKey, accessToken);
      if (userResponse.ok) {
        return NextResponse.json({ user: await userResponse.json() });
      }
    }

    const refreshToken = request.cookies.get(CLIENT_REFRESH_COOKIE)?.value;
    if (!refreshToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

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
    if (!refreshResponse.ok || !session.access_token) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    const response = NextResponse.json({ user: session.user });
    setClientSessionCookies(response, session.access_token, session.refresh_token, session.expires_in || 3600);
    return response;
  } catch (error) {
    console.error("Client session error", error);
    return NextResponse.json({ error: "Session unavailable" }, { status: 500 });
  }
}
