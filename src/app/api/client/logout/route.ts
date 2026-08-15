import { NextResponse } from "next/server";
import { clearClientSessionCookies } from "@/lib/client-auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  clearClientSessionCookies(response);
  return response;
}
