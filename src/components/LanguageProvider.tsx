"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionaries, LOCALE, LOCALES, type Locale } from "@/lib/i18n";

const LanguageContext = createContext<{ locale:Locale; setLocale:(locale:Locale)=>void; dictionary:(typeof dictionaries)[Locale] } | undefined>(undefined);
const STORAGE_KEY = "lidya-locale";
const MANUAL_STORAGE_KEY = "lidya-locale-manual";
const SCROLL_STORAGE_KEY = "lidya-language-scroll-y";

function stripLocalePrefix(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && (LOCALES as readonly string[]).includes(parts[0])) parts.shift();
  return parts.length ? `/${parts.join("/")}` : "/";
}

export function LanguageProvider({ children, initialLocale = LOCALE }: { children:ReactNode; initialLocale?:Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocaleState(initialLocale);
    localStorage.setItem(STORAGE_KEY, initialLocale);
    document.documentElement.lang = initialLocale;
    document.cookie = `${STORAGE_KEY}=${initialLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;

    const savedScrollY = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (savedScrollY !== null) {
      sessionStorage.removeItem(SCROLL_STORAGE_KEY);
      const scrollY = Number(savedScrollY);
      if (Number.isFinite(scrollY)) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => window.scrollTo({ top: scrollY, left: 0, behavior: "auto" }));
        });
      }
    }
  }, [initialLocale]);

  function setLocale(newLocale: Locale) {
    if (!LOCALES.includes(newLocale) || newLocale === locale) return;
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    localStorage.setItem(MANUAL_STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
    document.cookie = `${STORAGE_KEY}=${newLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    document.cookie = `${MANUAL_STORAGE_KEY}=${newLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent("lidya-language-change", { detail:{ locale:newLocale } }));

    const basePath = stripLocalePrefix(window.location.pathname);
    const nextPath = `/${newLocale}${basePath === "/" ? "" : basePath}`;
    if (nextPath !== window.location.pathname) {
      sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
      window.location.assign(`${nextPath}${window.location.search}${window.location.hash}`);
    }
  }

  const value = useMemo(() => ({ locale, setLocale, dictionary:dictionaries[locale] }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
