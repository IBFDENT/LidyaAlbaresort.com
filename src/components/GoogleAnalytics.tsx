"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_READY_EVENT,
  hasAnalyticsConsent,
  type CookieConsentRecord,
} from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-CEQD4H76NZ";

const SCRIPT_ID = "lidya-google-analytics";

function initialiseGoogleAnalytics() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (hasAnalyticsConsent()) initialiseGoogleAnalytics();

    const handleConsentReady = (event: Event) => {
      const consent = (event as CustomEvent<CookieConsentRecord>).detail;
      if (consent?.analytics) initialiseGoogleAnalytics();
    };

    window.addEventListener(COOKIE_CONSENT_READY_EVENT, handleConsentReady);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_READY_EVENT, handleConsentReady);
    };
  }, []);

  return null;
}
