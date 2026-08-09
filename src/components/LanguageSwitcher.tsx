"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

const FLAGS: Record<Locale, string> = {
  de: "🇩🇪",
  en: "🇬🇧",
  tr: "🇹🇷",
  sk: "🇸🇰",
  cs: "🇨🇿",
  hu: "🇭🇺",
  pl: "🇵🇱",
};

const LOCALE_NAMES: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  tr: "Türkçe",
  sk: "Slovenčina",
  cs: "Čeština",
  hu: "Magyar",
  pl: "Polski",
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function changeLanguage(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-8 w-8 items-center justify-center rounded-sm text-xl leading-none transition-transform hover:scale-110"
      >
        <span aria-hidden>{FLAGS[locale]}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-sm border border-plum-dark/10 bg-brand-white py-1.5 shadow-[0_16px_36px_-12px_rgba(27,11,32,0.28)]"
        >
          {LOCALES.map((code) => (
            <button
              key={code}
              role="menuitem"
              type="button"
              onClick={() => changeLanguage(code)}
              className={`flex w-full items-center gap-3 px-3.5 py-2 text-left text-[0.78rem] transition-colors hover:bg-ivory ${
                code === locale
                  ? "text-gold font-semibold"
                  : "text-plum-dark"
              }`}
            >
              <span className="text-base leading-none" aria-hidden>
                {FLAGS[code]}
              </span>

              {LOCALE_NAMES[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}