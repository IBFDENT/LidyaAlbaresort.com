"use client";

import Script from "next/script";
import { useCallback, useEffect } from "react";
import {
  COOKIE_CONSENT_READY_EVENT,
  readCookieConsent,
  type CookieConsentRecord,
} from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID = "G-CEQD4H76NZ";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  if (typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }

  return window.gtag;
}

function applyConsent(analytics: boolean, marketing: boolean, sendPageView = false) {
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });

  if (analytics && sendPageView) {
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    });
  }
}

function applyStoredConsent(sendPageView = false) {
  const consent = readCookieConsent();
  applyConsent(Boolean(consent?.analytics), Boolean(consent?.marketing), sendPageView);
}

export default function GoogleAnalytics() {
  const handleGoogleTagLoad = useCallback(() => {
    const gtag = ensureGtag();
    if (!gtag) return;

    gtag("js", new Date());

    const consent = readCookieConsent();
    applyConsent(Boolean(consent?.analytics), Boolean(consent?.marketing), false);

    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: Boolean(consent?.analytics),
    });

    if (consent?.analytics) {
      window.setTimeout(() => {
        applyStoredConsent(true);
      }, 300);
    }
  }, []);

  useEffect(() => {
    const handleConsentReady = (event: Event) => {
      const consent = (event as CustomEvent<CookieConsentRecord>).detail;
      if (!consent) return;

      applyConsent(Boolean(consent.analytics), Boolean(consent.marketing), Boolean(consent.analytics));

      if (consent.analytics) {
        window.setTimeout(() => applyStoredConsent(true), 250);
      }
    };

    window.addEventListener(COOKIE_CONSENT_READY_EVENT, handleConsentReady);

    // Always re-apply the persisted choice after hydration. This closes the
    // race where the cookie runtime can emit its ready event before this
    // component has attached its listener.
    applyStoredConsent(false);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_READY_EVENT, handleConsentReady);
    };
  }, []);

  return (
    <>
      <Script id="lidya-google-consent" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 2000
          });
        `}
      </Script>

      <Script
        id="lidya-google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={handleGoogleTagLoad}
      />
    </>
  );
}
