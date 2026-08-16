export const COOKIE_CONSENT_STORAGE_KEY = "lidya-cookie-consent";
export const COOKIE_CONSENT_VERSION = "1.0";
export const COOKIE_CONSENT_UPDATED_EVENT = "cookie-consent-updated";
export const COOKIE_CONSENT_READY_EVENT = "cookie-consent-ready";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentRecord = CookiePreferences & {
  version: string;
  updatedAt: string;
};

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function isCurrentCookieConsent(value: unknown): value is CookieConsentRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<CookieConsentRecord>;
  return (
    record.necessary === true &&
    typeof record.analytics === "boolean" &&
    typeof record.marketing === "boolean" &&
    record.version === COOKIE_CONSENT_VERSION &&
    typeof record.updatedAt === "string" &&
    Boolean(Date.parse(record.updatedAt))
  );
}

export function readCookieConsent(): CookieConsentRecord | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!stored) return null;
  try {
    const parsed: unknown = JSON.parse(stored);
    return isCurrentCookieConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeCookieConsent(preferences: CookiePreferences): CookieConsentRecord {
  const record: CookieConsentRecord = {
    necessary: true,
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
  }

  return record;
}

export function hasAnalyticsConsent(): boolean {
  return readCookieConsent()?.analytics === true;
}

export function hasMarketingConsent(): boolean {
  return readCookieConsent()?.marketing === true;
}
