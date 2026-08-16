"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NAV_ITEMS, type NavItem } from "@/lib/nav";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderTone = "auto" | "light" | "hero";

function DesktopNavItem({
  item,
  dict,
}: {
  item: NavItem;
  dict: ReturnType<typeof useLanguage>["dictionary"];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="whitespace-nowrap transition-colors duration-300 hover:text-gold"
      >
        {dict.nav[item.labelKey]}
      </Link>
    );
  }

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <div className="flex items-center gap-1.5">
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          className="whitespace-nowrap transition-colors duration-300 hover:text-gold"
        >
          {dict.nav[item.labelKey]}
        </Link>

        <button
          type="button"
          aria-label={`Open ${dict.nav[item.labelKey]} menu`}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex items-center justify-center transition-colors duration-300 hover:text-gold"
        >
          <svg
            viewBox="0 0 12 8"
            width="9"
            height="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M1 1.5L6 6.5L11 1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-4 w-[220px] overflow-hidden border border-brand-white/10 bg-plum-dark/95 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.75)] backdrop-blur-xl"
        >
          {item.children.map((child, index) => (
            <Link
              key={`${child.href}-${index}`}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="group relative block border-b border-brand-white/[0.07] px-5 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-brand-white/75 transition-all duration-300 last:border-b-0 hover:bg-brand-white/[0.04] hover:text-gold"
            >
              <span className="relative z-10">{dict.nav[child.labelKey]}</span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ tone = "auto" }: { tone?: HeaderTone }) {
  const { dictionary: dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

  useEffect(() => {
    const updateHeaderState = () => {
      if (tone === "hero") {
        const hero = document.getElementById("home");

        if (hero) {
          const rect = hero.getBoundingClientRect();
          setScrolled(rect.bottom <= 92);
          return;
        }

        setScrolled(window.scrollY > Math.max(window.innerHeight - 110, 120));
        return;
      }

      setScrolled(window.scrollY > 40);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    const frame = window.requestAnimationFrame(updateHeaderState);
    const timer = window.setTimeout(updateHeaderState, 350);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [tone]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
        setMobileSubOpen(null);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileSubOpen(null);
  };

  const headerOnLightBackground = tone === "light" || scrolled || menuOpen;
  const heroHeader = tone === "hero" && !headerOnLightBackground;

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        headerOnLightBackground
          ? "bg-ivory/95 py-3 shadow-[0_1px_0_rgba(27,11,32,0.08)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <Link
          href="/"
          aria-label="LIDYA JEWELRY — Home"
          className="shrink-0"
          onClick={closeMobileMenu}
        >
          <Image
            src="/images/logo.png"
            alt="LIDYA JEWELRY"
            width={220}
            height={90}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              headerOnLightBackground
                ? "h-[39px] sm:h-[42px]"
                : heroHeader
                  ? "h-[42px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.28)] sm:h-[46px]"
                  : "h-[42px] brightness-[2.8] saturate-0 sm:h-[46px]"
            }`}
          />
        </Link>

        <nav
          className={`hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.14em] xl:flex ${
            headerOnLightBackground ? "text-plum-dark" : "text-brand-white"
          }`}
        >
          {NAV_ITEMS.map((item, index) => (
            <DesktopNavItem
              key={`${item.href}-${item.labelKey}-${index}`}
              item={item}
              dict={dict}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />

          <Link
            href="/contact"
            className={`hidden items-center justify-center border px-6 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 lg:inline-flex ${
              headerOnLightBackground
                ? "border-plum-dark/40 text-plum-dark hover:bg-plum-dark hover:text-brand-white"
                : "border-brand-white/55 text-brand-white hover:border-gold hover:bg-gold hover:text-plum-dark"
            }`}
          >
            {dict.nav.book}
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((value) => !value);
              if (menuOpen) setMobileSubOpen(null);
            }}
            className="relative flex h-10 w-10 items-center justify-center xl:hidden"
          >
            <span className="relative block h-[18px] w-[28px]">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full origin-center transition-all duration-300 ${
                  headerOnLightBackground ? "bg-plum-dark" : "bg-brand-white"
                } ${menuOpen ? "top-[8px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[8px] h-[1.5px] w-full transition-all duration-300 ${
                  headerOnLightBackground ? "bg-plum-dark" : "bg-brand-white"
                } ${menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-center transition-all duration-300 ${
                  headerOnLightBackground ? "bg-plum-dark" : "bg-brand-white"
                } ${menuOpen ? "bottom-[8px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${
          menuOpen ? "max-h-[calc(100dvh-64px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-3 max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-plum-dark/10 bg-ivory px-5 pb-10 pt-4 text-center text-plum-dark shadow-[0_18px_45px_-25px_rgba(27,11,32,0.3)] sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[720px]">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={`mobile-${item.href}-${item.labelKey}-${index}`}
                className="border-b border-plum-dark/10 last:border-b-0"
              >
                {item.children?.length ? (
                  <>
                    <div className="flex items-center justify-center py-5">
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-gold"
                      >
                        {dict.nav[item.labelKey]}
                      </Link>

                      <button
                        type="button"
                        aria-label={`Open ${dict.nav[item.labelKey]} submenu`}
                        aria-expanded={mobileSubOpen === index}
                        onClick={() =>
                          setMobileSubOpen((current) => (current === index ? null : index))
                        }
                        className="ml-3 flex h-8 w-8 items-center justify-center"
                      >
                        <svg
                          viewBox="0 0 12 8"
                          width="10"
                          height="7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          className={`transition-transform duration-300 ${
                            mobileSubOpen === index ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <path d="M1 1.5L6 6.5L11 1.5" />
                        </svg>
                      </button>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ${
                        mobileSubOpen === index
                          ? "grid-rows-[1fr] pb-4 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mx-auto max-w-[420px] border-y border-gold/20 py-2">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={`${child.href}-${childIndex}`}
                              href={child.href}
                              className="block py-3 text-center text-[0.68rem] font-medium uppercase tracking-[0.14em] text-plum-dark/60 transition-colors hover:text-gold"
                              onClick={closeMobileMenu}
                            >
                              {dict.nav[child.labelKey]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-gold"
                    onClick={closeMobileMenu}
                  >
                    {dict.nav[item.labelKey]}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-7">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mx-auto inline-flex min-h-[52px] w-full max-w-[300px] items-center justify-center gap-5 bg-gold px-7 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-colors hover:bg-gold-light"
              >
                {dict.nav.book}
                <span>→</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
