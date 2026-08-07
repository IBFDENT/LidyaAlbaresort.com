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
      if (
        rootRef.current &&
        !rootRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
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
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setOpen(true);
  };

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 whitespace-nowrap transition-colors duration-300 hover:text-gold"
      >
        {dict.nav[item.labelKey]}

        <svg
          viewBox="0 0 12 8"
          width="9"
          height="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M1 1.5L6 6.5L11 1.5" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="
            absolute
            left-0
            top-full
            mt-4
            w-[220px]
            overflow-hidden
            border
            border-brand-white/10
            bg-plum-dark/95
            shadow-[0_24px_60px_-25px_rgba(0,0,0,0.75)]
            backdrop-blur-xl
          "
        >
          {item.children.map((child, index) => (
            <Link
              key={`${child.href}-${index}`}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="
                group
                relative
                block
                border-b
                border-brand-white/[0.07]
                px-5
                py-4
                text-[0.68rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-brand-white/75
                transition-all
                duration-300
                last:border-b-0
                hover:bg-brand-white/[0.04]
                hover:text-gold
              "
            >
              <span className="relative z-10">
                {dict.nav[child.labelKey]}
              </span>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-gold
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
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
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/94 py-3 shadow-[0_1px_0_rgba(27,11,32,0.08)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
        {/* LOGO */}
        <Link
          href="/#home"
          aria-label="LIDYA JEWELRY — Home"
          className="shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="LIDYA JEWELRY"
            width={220}
            height={90}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled
                ? "h-[42px]"
                : "h-[46px] brightness-[2.8] saturate-0"
            }`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.14em] xl:flex ${
            scrolled
              ? "text-plum-dark"
              : "text-brand-white"
          }`}
        >
          {NAV_ITEMS.map((item, index) => (
            <DesktopNavItem
              key={`${item.href}-${item.labelKey}-${index}`}
              item={item}
            />
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Link
            href="/#contact"
            className={`hidden items-center justify-center border px-6 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 lg:inline-flex ${
              scrolled
                ? "border-plum-dark/40 text-plum-dark hover:bg-plum-dark hover:text-brand-white"
                : "border-brand-white/45 text-brand-white hover:border-gold hover:bg-gold hover:text-plum-dark"
            }`}
          >
            Private Appointment
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex w-[28px] flex-col gap-[5px] xl:hidden"
          >
            <span
              className={`h-[1.5px] w-full transition-colors ${
                scrolled ? "bg-plum-dark" : "bg-brand-white"
              }`}
            />

            <span
              className={`h-[1.5px] w-full transition-colors ${
                scrolled ? "bg-plum-dark" : "bg-brand-white"
              }`}
            />

            <span
              className={`h-[1.5px] w-full transition-colors ${
                scrolled ? "bg-plum-dark" : "bg-brand-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="mx-auto mt-4 max-w-[1440px] border-t border-plum-dark/10 bg-ivory px-6 pb-6 pt-5 text-plum-dark shadow-[0_18px_45px_-25px_rgba(27,11,32,0.3)] md:px-10 lg:px-16 xl:hidden">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={`mobile-${item.href}-${item.labelKey}-${index}`}
              className="border-b border-plum-dark/10 last:border-b-0"
            >
              {item.children?.length ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
                    onClick={() =>
                      setMobileSubOpen((current) =>
                        current === index ? null : index
                      )
                    }
                  >
                    {dict.nav[item.labelKey]}

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
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" />
                    </svg>
                  </button>

                  {mobileSubOpen === index && (
                    <div className="mb-3 border-l border-gold/40 pl-5">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={`${child.href}-${childIndex}`}
                          href={child.href}
                          className="block py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-plum-dark/65 transition-colors hover:text-gold"
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
                  className="block py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-gold"
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