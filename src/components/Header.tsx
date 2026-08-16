"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, type NavItem } from "@/lib/nav";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderTone = "auto" | "light" | "hero";

function DesktopNavItem({ item, dict }: { item: NavItem; dict: ReturnType<typeof useLanguage>["dictionary"] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const outside = (e: MouseEvent) => { if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", outside);
    return () => { document.removeEventListener("mousedown", outside); if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);
  if (!item.children?.length) return <Link href={item.href} className="whitespace-nowrap transition-colors duration-300 hover:text-gold">{dict.nav[item.labelKey]}</Link>;
  return <div ref={rootRef} className="relative" onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); }} onMouseLeave={() => { closeTimer.current = setTimeout(() => setOpen(false), 150); }}>
    <div className="flex items-center gap-1.5"><Link href={item.href} onClick={() => setOpen(false)} className="whitespace-nowrap transition-colors duration-300 hover:text-gold">{dict.nav[item.labelKey]}</Link><button type="button" aria-expanded={open} onClick={() => setOpen(v => !v)} className="flex items-center justify-center hover:text-gold"><svg viewBox="0 0 12 8" width="9" height="6" fill="none" stroke="currentColor" strokeWidth="1.4" className={open ? "rotate-180" : ""}><path d="M1 1.5L6 6.5L11 1.5" /></svg></button></div>
    {open && <div className="absolute left-0 top-full mt-4 w-[220px] overflow-hidden border border-brand-white/10 bg-plum-dark/95 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.75)]">{item.children.map((child,index)=><Link key={`${child.href}-${index}`} href={child.href} onClick={()=>setOpen(false)} className="block border-b border-brand-white/[0.07] px-5 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-brand-white/75 transition-colors hover:text-gold">{dict.nav[child.labelKey]}</Link>)}</div>}
  </div>;
}

export default function Header({ tone = "auto" }: { tone?: HeaderTone }) {
  const { dictionary: dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);
  useEffect(() => {
    const update = () => {
      if (tone === "hero") { const hero = document.getElementById("home"); setScrolled(hero ? hero.getBoundingClientRect().bottom <= 84 : false); return; }
      setScrolled(window.scrollY > 40);
    };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update); window.addEventListener("pageshow", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); window.removeEventListener("pageshow", update); };
  }, [tone]);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  const close = () => { setMenuOpen(false); setMobileSubOpen(null); };
  const light = tone === "light" || menuOpen || scrolled;
  const heroHeader = tone === "hero" && !light;
  return <header data-hero-active={heroHeader ? "true" : "false"} className={`site-header fixed left-0 right-0 top-0 z-50 ${light ? "bg-ivory py-3 shadow-[0_1px_0_rgba(27,11,32,0.08)] transition-[background-color,box-shadow,padding] duration-300" : "bg-transparent py-5 shadow-none"}`} style={heroHeader ? { backgroundColor: "transparent", backdropFilter: "none", WebkitBackdropFilter: "none", boxShadow: "none" } : undefined}>
    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <Link href="/" aria-label="LIDYA JEWELRY — Home" className="shrink-0" onClick={close}><Image src="/images/logo.png" alt="LIDYA JEWELRY" width={220} height={90} priority className={`w-auto object-contain ${light ? "h-[39px] sm:h-[42px]" : "h-[42px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.28)] sm:h-[46px]"}`} /></Link>
      <nav className={`hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.14em] xl:flex ${light ? "text-plum-dark" : "text-brand-white"}`}>{NAV_ITEMS.map((item,index)=><DesktopNavItem key={`${item.href}-${index}`} item={item} dict={dict}/>)}</nav>
      <div className="flex items-center gap-3 sm:gap-4"><LanguageSwitcher/><Link href="/contact" className={`hidden items-center justify-center border px-6 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] transition-colors lg:inline-flex ${light ? "border-plum-dark/40 text-plum-dark hover:bg-plum-dark hover:text-brand-white" : "border-brand-white/55 text-brand-white hover:border-gold hover:bg-gold hover:text-plum-dark"}`}>{dict.nav.book}</Link><button type="button" aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)} className="relative flex h-10 w-10 items-center justify-center xl:hidden"><span className="text-xl">☰</span></button></div>
    </div>
    {menuOpen && <nav className="mt-3 max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-plum-dark/10 bg-ivory px-5 pb-10 pt-4 text-center text-plum-dark xl:hidden">{NAV_ITEMS.map((item,index)=><div key={index} className="border-b border-plum-dark/10">{item.children?.length ? <><div className="flex items-center justify-center py-5"><Link href={item.href} onClick={close} className="text-[0.72rem] font-semibold uppercase tracking-[0.16em]">{dict.nav[item.labelKey]}</Link><button className="ml-3" onClick={()=>setMobileSubOpen(mobileSubOpen===index?null:index)}>⌄</button></div>{mobileSubOpen===index && item.children.map((child,i)=><Link key={i} href={child.href} onClick={close} className="block py-3 text-[0.68rem] uppercase tracking-[0.14em] text-plum-dark/60">{dict.nav[child.labelKey]}</Link>)}</> : <Link href={item.href} onClick={close} className="block py-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">{dict.nav[item.labelKey]}</Link>}</div>)}<Link href="/contact" onClick={close} className="mx-auto mt-7 inline-flex min-h-[52px] w-full max-w-[300px] items-center justify-center bg-gold px-7 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark">{dict.nav.book}</Link></nav>}
  </header>;
}
