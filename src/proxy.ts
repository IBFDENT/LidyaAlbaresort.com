import { NextRequest, NextResponse } from "next/server";
import { ADMIN_ACCESS_COOKIE, ADMIN_REFRESH_COOKIE } from "@/lib/admin-auth";
import { DEFAULT_LOCALE, isLocale, PUBLIC_ROUTES } from "@/lib/international-seo";

const LOCALE_COOKIE = "lidya-locale";
const MANUAL_LOCALE_COOKIE = "lidya-locale-manual";

const COUNTRY_LOCALE: Record<string, string> = {
  DE: "de",
  AT: "de",
  SK: "sk",
  CZ: "cs",
  TR: "tr",
  HU: "hu",
  PL: "pl",
  RU: "ru",
  NL: "nl",
  DK: "da",
  FI: "fi",
  SE: "sv",
  FR: "fr",
  IT: "it",
  ES: "es",
  GB: "en",
  IE: "en",
  US: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
};

function isPublicPath(pathname: string) {
  return (PUBLIC_ROUTES as readonly string[]).includes(pathname);
}

function browserLocale(request: NextRequest) {
  const accepted = request.headers.get("accept-language")?.toLowerCase() || "";
  const candidate = accepted
    .split(",")
    .map((part) => part.trim().split(";")[0].split("-")[0])
    .find((code) => isLocale(code));

  return candidate && isLocale(candidate) ? candidate : null;
}

function countryLocale(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (!country) return null;

  const candidate = COUNTRY_LOCALE[country];
  return candidate && isLocale(candidate) ? candidate : null;
}

function preferredLocale(request: NextRequest) {
  // A language explicitly selected by the visitor always wins.
  const manual = request.cookies.get(MANUAL_LOCALE_COOKIE)?.value;
  if (manual && isLocale(manual)) return manual;

  // For a first visit to the bare domain, prefer the visitor's country.
  // Example: a visitor in Germany opens lidyaalbaresort.com -> /de.
  const byCountry = countryLocale(request);
  if (byCountry) return byCountry;

  // If Vercel cannot determine the country, use the browser preference.
  const byBrowser = browserLocale(request);
  if (byBrowser) return byBrowser;

  // Final safe fallback for international traffic.
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/auth/")) return NextResponse.next();

  const hasAccess = Boolean(request.cookies.get(ADMIN_ACCESS_COOKIE)?.value);
  const hasRefresh = Boolean(request.cookies.get(ADMIN_REFRESH_COOKIE)?.value);

  if (pathname.startsWith("/admin") && !hasAccess && !hasRefresh) return NextResponse.redirect(new URL("/admin/login", request.url));
  if (pathname.startsWith("/api/admin") && !hasAccess && !hasRefresh) return NextResponse.json({ error:"Unauthorized" }, { status:401 });

  if (pathname.startsWith("/admin") || pathname.startsWith("/client") || pathname.startsWith("/api/")) return NextResponse.next();

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-lidya-locale", first);
    const response = NextResponse.next({ request:{ headers:requestHeaders } });
    response.cookies.set(LOCALE_COOKIE, first, { path:"/", maxAge:31536000, sameSite:"lax" });
    return response;
  }

  if (isPublicPath(pathname)) {
    const locale = preferredLocale(request);
    const target = request.nextUrl.clone();
    target.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|woff2?|ttf|otf)$).*)"],
};
