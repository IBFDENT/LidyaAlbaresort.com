"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_READY_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  DEFAULT_COOKIE_PREFERENCES,
  isCurrentCookieConsent,
  writeCookieConsent,
  type CookiePreferences,
} from "@/lib/cookie-consent";

function normaliseStoredConsentBeforeEffects() {
  if (typeof window === "undefined") return;
  const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!stored) return;

  try {
    const parsed: unknown = JSON.parse(stored);
    if (!isCurrentCookieConsent(parsed)) {
      window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    }
  } catch {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  }
}

export default function CookieConsentRuntime() {
  normaliseStoredConsentBeforeEffects();

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed: unknown = JSON.parse(stored);
        if (isCurrentCookieConsent(parsed)) {
          window.dispatchEvent(
            new CustomEvent(COOKIE_CONSENT_READY_EVENT, { detail: parsed })
          );
        }
      } catch {
        window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
      }
    }

    const handleConsentUpdated = (event: Event) => {
      const detail = (event as CustomEvent<Partial<CookiePreferences>>).detail;
      const preferences: CookiePreferences = {
        necessary: true,
        analytics: Boolean(detail?.analytics ?? DEFAULT_COOKIE_PREFERENCES.analytics),
        marketing: Boolean(detail?.marketing ?? DEFAULT_COOKIE_PREFERENCES.marketing),
      };
      const record = writeCookieConsent(preferences);
      window.dispatchEvent(
        new CustomEvent(COOKIE_CONSENT_READY_EVENT, { detail: record })
      );
    };

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated);
    };
  }, []);

  return null;
}
