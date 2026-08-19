import { NextRequest } from "next/server";
import { CLIENT_ACCESS_COOKIE, getSupabaseAuthConfig } from "@/lib/client-auth";

export type AuthenticatedClient = {
  id: string;
  email?: string;
  phone?: string;
  user_metadata?: {
    full_name?: string;
    phone?: string;
    avatar_url?: string;
    preferred_language?: string;
  };
};

export async function requireClientRequest(request: NextRequest): Promise<AuthenticatedClient | null> {
  const accessToken = request.cookies.get(CLIENT_ACCESS_COOKIE)?.value;
  if (!accessToken) return null;

  const { url, anonKey } = getSupabaseAuthConfig();
  const response = await fetch(`${url}/auth/v1/user`, {
    headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (!response.ok) return null;
  return (await response.json()) as AuthenticatedClient;
}
