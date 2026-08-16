"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  COOKIE_CONSENT_READY_EVENT,
  hasAnalyticsConsent,
  type CookieConsentRecord,
} from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-CEQD4H76NZ";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(analytics: boolean, marketing: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });

  // A page_view may have been evaluated while analytics consent was denied.
  // Send one immediately after the visitor grants analytics consent so GA4
  // Realtime receives the current visit without requiring a reload.
  if (analytics) {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    });
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const handleConsentReady = (event: Event) => {
      const consent = (event as CustomEvent<CookieConsentRecord>).detail;
      if (!consent) return;
      updateGoogleConsent(Boolean(consent.analytics), Boolean(consent.marketing));
    };

    window.addEventListener(COOKIE_CONSENT_READY_EVENT, handleConsentReady);

    // Cover a consent choice that already existed before hydration.
    if (hasAnalyticsConsent()) {
      updateGoogleConsent(true, false);
    }

    return () => {
      window.removeEventListener(COOKIE_CONSENT_READY_EVENT, handleConsentReady);
    };
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

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
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        id="lidya-google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="lidya-google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
