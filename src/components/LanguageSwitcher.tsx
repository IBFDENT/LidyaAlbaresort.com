"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LOCALES, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

const FLAGS: Record<Locale, string> = { de:"🇩🇪", en:"🇬🇧", tr:"🇹🇷", sk:"🇸🇰", cs:"🇨🇿", hu:"🇭🇺", pl:"🇵🇱", ru:"🇷🇺", nl:"🇳🇱", da:"🇩🇰", fi:"🇫🇮", sv:"🇸🇪", fr:"🇫🇷", it:"🇮🇹", es:"🇪🇸" };
const LOCALE_NAMES: Record<Locale, string> = { de:"Deutsch", en:"English", tr:"Türkçe", sk:"Slovenčina", cs:"Čeština", hu:"Magyar", pl:"Polski", ru:"Русский", nl:"Nederlands", da:"Dansk", fi:"Suomi", sv:"Svenska", fr:"Français", it:"Italiano", es:"Español" };

type LanguageEntry = { slug?: string; metadata?: { meta1?: string } };

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState<Locale[] | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    fetch("/api/public/cms/languages", { cache: "no-store" })
      .then(async (r) => r.ok ? r.json() : null)
      .then((payload) => {
        const entries = (payload?.entries || []) as LanguageEntry[];
        if (!entries.length) return;
        const codes = entries.map((e) => String(e.metadata?.meta1 || e.slug || "").toLowerCase()).filter((code): code is Locale => (LOCALES as readonly string[]).includes(code));
        if (codes.length) setEnabled(Array.from(new Set(codes)));
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) { if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false); }
    function onKeyDown(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", onClickOutside); document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("mousedown", onClickOutside); document.removeEventListener("keydown", onKeyDown); };
  }, []);

  const visibleLocales = useMemo(() => enabled?.length ? LOCALES.filter((code) => enabled.includes(code)) : LOCALES, [enabled]);
  function changeLanguage(code: Locale) { setLocale(code); setOpen(false); }

  return <div className="relative" ref={rootRef}>
    <button type="button" aria-label="Change language" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((v) => !v)} className="flex h-8 w-8 items-center justify-center rounded-sm text-xl leading-none transition-transform hover:scale-110"><span aria-hidden>{FLAGS[locale]}</span></button>
    {open && <div role="menu" className="absolute right-0 top-full z-50 mt-2 max-h-[70vh] w-48 overflow-y-auto rounded-sm border border-plum-dark/10 bg-brand-white py-1.5 shadow-[0_16px_36px_-12px_rgba(27,11,32,0.28)]">
      {visibleLocales.map((code) => <button key={code} role="menuitem" type="button" onClick={() => changeLanguage(code)} className={`flex w-full items-center gap-3 px-3.5 py-2 text-left text-[0.78rem] transition-colors hover:bg-ivory ${code === locale ? "font-semibold text-gold" : "text-plum-dark"}`}><span className="text-base leading-none" aria-hidden>{FLAGS[code]}</span><span>{LOCALE_NAMES[code]}</span></button>)}
    </div>}
  </div>;
}
