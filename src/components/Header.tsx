"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";
import { getDictionary, LOCALES, LOCALE } from "@/lib/i18n";

const dict = getDictionary();

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-lg shadow-[0_1px_0_rgba(27,11,32,0.06)] py-3"
          : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-6 flex items-center justify-between">
        <Link href="#home" aria-label="LIDYA JEWELRY — Home" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="LIDYA JEWELRY"
            width={141}
            height={44}
            className="h-11 w-auto bg-brand-white px-2 py-1 rounded-sm shadow-sm"
            priority
          />
        </Link>

        <nav className="hidden 2xl:flex gap-4 text-[0.7rem] tracking-wide text-plum-dark shrink-0">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={`${item.href}-${item.labelKey}-${i}`}
              href={item.href}
              className="whitespace-nowrap hover:text-gold transition-colors"
            >
              {dict.nav[item.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden md:flex w-8 h-8 items-center justify-center text-plum-dark hover:text-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            aria-label="Wishlist"
            className="hidden md:flex relative w-8 h-8 items-center justify-center text-plum-dark hover:text-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21s-7.5-4.6-10-9.3C.4 8 2 4.5 5.6 4c2-.3 3.7.6 4.9 2.2C11.7 4.6 13.4 3.7 15.4 4c3.6.5 5.2 4 3.6 7.7C16.5 16.4 12 21 12 21z" />
            </svg>
          </button>
          <button className="btn-magnetic hidden lg:inline-flex items-center justify-center rounded-sm border border-plum-dark px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-plum-dark hover:text-brand-white">
            {dict.nav.book}
          </button>

          <div className="hidden lg:flex flex-wrap gap-1 text-[0.62rem] font-bold tracking-wide max-w-[150px]">
            {LOCALES.map((code) => (
              <button
                key={code}
                className={`px-1 uppercase ${
                  code === LOCALE ? "text-gold" : "text-grey hover:text-plum-dark"
                }`}
                aria-current={code === LOCALE}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            aria-label="Menu"
            className="flex 2xl:hidden flex-col gap-[5px] w-[26px]"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="h-[1.5px] w-full bg-plum-dark" />
            <span className="h-[1.5px] w-full bg-plum-dark" />
            <span className="h-[1.5px] w-full bg-plum-dark" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="2xl:hidden mx-auto max-w-[1320px] px-6 pt-6 pb-4 flex flex-col gap-4 text-plum-dark">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={`m-${item.href}-${item.labelKey}-${i}`}
              href={item.href}
              className="text-sm tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {dict.nav[item.labelKey]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
