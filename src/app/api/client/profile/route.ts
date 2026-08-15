import { NextRequest, NextResponse } from "next/server";
import { CLIENT_ACCESS_COOKIE, getSupabaseAuthConfig } from "@/lib/client-auth";
import { requireClientRequest } from "@/lib/client-user";

export async function PATCH(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = (await request.json()) as { fullName?: string; phone?: string };
    const fullName = body.fullName?.trim() || "";
    const phone = body.phone?.trim() || "";
    if (fullName.length > 120 || phone.length > 40) return NextResponse.json({ error: "Profile value is too long." }, { status: 400 });

    const accessToken = request.cookies.get(CLIENT_ACCESS_COOKIE)?.value;
    if (!accessToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { url, anonKey } = getSupabaseAuthConfig();
    const response = await fetch(`${url}/auth/v1/user`, {
      method: "PUT",
      headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ data: { ...(user.user_metadata || {}), full_name: fullName, phone } }),
      cache: "no-store",
    });
    const payload = await response.json();
    if (!response.ok) return NextResponse.json({ error: payload?.msg || payload?.message || "Unable to update profile." }, { status: response.status });
    return NextResponse.json({ user: payload });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update profile." }, { status: 500 });
  }
}
