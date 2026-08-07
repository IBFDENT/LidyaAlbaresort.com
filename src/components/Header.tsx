"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, type NavItem } from "@/lib/nav";
import { getDictionary } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const dict = getDictionary();

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  if (!item.children?.length) {
    return (
      <Link href={item.href} className="whitespace-nowrap hover:text-gold transition-colors">
        {dict.nav[item.labelKey]}
      </Link>
    );
  }

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      ref={rootRef}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 whitespace-nowrap hover:text-gold transition-colors"
      >
        {dict.nav[item.labelKey]}
        <svg
          viewBox="0 0 12 8"
          width="9"
          height="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1.5L6 6.5L11 1.5" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-3 w-48 overflow-hidden rounded-sm border border-plum-dark/10 bg-brand-white py-1.5 shadow-[0_16px_36px_-12px_rgba(27,11,32,0.28)]"
        >
          {item.children.map((child, i) => (
            <Link
              key={`${child.href}-${i}`}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2 text-[0.78rem] text-plum-dark transition-colors hover:bg-ivory hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {dict.nav[child.labelKey]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

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
        <Link href="/#home" aria-label="LIDYA JEWELRY — Home" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="LIDYA JEWELRY"
            width={141}
            height={44}
            className="h-11 w-auto bg-brand-white px-2 py-1 rounded-sm shadow-sm"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6 text-[0.72rem] font-medium tracking-wide text-plum-dark shrink-0">
          {NAV_ITEMS.map((item, i) => (
            <DesktopNavItem key={`${item.href}-${item.labelKey}-${i}`} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
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

          <LanguageSwitcher />

          <button className="btn-magnetic hidden lg:inline-flex items-center justify-center rounded-sm border border-plum-dark px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-plum-dark hover:text-brand-white">
            {dict.nav.book}
          </button>

          <button
            aria-label="Menu"
            className="flex xl:hidden flex-col gap-[5px] w-[26px]"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="h-[1.5px] w-full bg-plum-dark" />
            <span className="h-[1.5px] w-full bg-plum-dark" />
            <span className="h-[1.5px] w-full bg-plum-dark" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="xl:hidden mx-auto max-w-[1320px] px-6 pt-6 pb-4 flex flex-col gap-1 text-plum-dark">
          {NAV_ITEMS.map((item, i) => (
            <div key={`m-${item.href}-${item.labelKey}-${i}`}>
              {item.children?.length ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2.5 text-sm tracking-wide"
                    onClick={() => setMobileSubOpen((v) => (v === i ? null : i))}
                  >
                    {dict.nav[item.labelKey]}
                    <svg
                      viewBox="0 0 12 8"
                      width="10"
                      height="7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      className={`transition-transform ${mobileSubOpen === i ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" />
                    </svg>
                  </button>
                  {mobileSubOpen === i && (
                    <div className="flex flex-col gap-1 border-l border-plum-dark/10 pl-4 pb-2">
                      {item.children.map((child, ci) => (
                        <Link
                          key={`${child.href}-${ci}`}
                          href={child.href}
                          className="py-1.5 text-[0.85rem] text-plum-dark/80"
                          onClick={() => setMenuOpen(false)}
                        >
                          {dict.nav[child.labelKey]}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm tracking-wide"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav[item.labelKey]}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
