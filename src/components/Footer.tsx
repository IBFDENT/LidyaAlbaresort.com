"use client";

import Image from "next/image";
import Link from "next/link";
import ProtectedEmail from "@/components/ProtectedEmail";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { dictionary: dict } = useLanguage();

  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer id="site-footer" className="relative overflow-hidden bg-plum-dark text-brand-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="border-b border-brand-white/12 py-16 text-center md:py-20 lg:text-left">
          <Image src="/images/logo.png" alt="LIDYA JEWELRY" width={520} height={220} className="mx-auto h-[96px] w-auto object-contain brightness-[3.2] saturate-0 md:h-[112px] lg:mx-0" />
          <p className="mt-8 font-display text-4xl italic text-[#F5EFE6] md:text-5xl">Jewellery of lasting value.</p>
          <p className="mt-2 font-display text-3xl italic text-[#E8D8B5] md:text-4xl">Since 1989.</p>
        </div>

        <div className="grid gap-12 py-14 text-center md:grid-cols-2 lg:grid-cols-12 lg:text-left">
          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">Navigate</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/#collections" className="hover:text-gold">{dict.nav.collections}</Link>
              <Link href="/#services" className="hover:text-gold">{dict.nav.services}</Link>
              <Link href="/#about" className="hover:text-gold">{dict.nav.about}</Link>
              <Link href="/#boutiques" className="hover:text-gold">{dict.nav.boutiques}</Link>
              <Link href="/#contact" className="hover:text-gold">{dict.nav.contact}</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">Boutiques</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <span>LIDYA JEWELLERY — Manavgat</span>
              <span>Hotel Alba Resort</span>
              <span>Hotel Alba Royal</span>
              <span>Hotel Alba Queen</span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">Contact</h5>
            <p className="mt-6 text-sm leading-6 text-brand-white/60">One official address for jewellery, service, bespoke work and private appointments.</p>
            <ProtectedEmail className="mt-4 inline-block text-sm text-[#E8D8B5] transition-colors hover:text-gold" />
            <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-brand-white/65 lg:justify-start">
              <a href="tel:+905325672777" className="hover:text-gold">Victor</a>
              <a href="tel:+905378278599" className="hover:text-gold">Vierka</a>
              <a href="tel:+905376694584" className="hover:text-gold">Benny</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">Legal</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/privacy" className="hover:text-gold">Privacy</Link>
              <Link href="/terms" className="hover:text-gold">Terms</Link>
              <button type="button" onClick={openCookieSettings} className="hover:text-gold">Cookie Settings</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-brand-white/12 py-9 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65">
            <a href="https://www.instagram.com/tanirzafer?igsh=MWs5ZTh5bzA0a3p5Ng==" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a>
            <a href="https://www.facebook.com/lidyaalbajewellery/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook</a>
          </div>
          <Link href="/#contact" className="border border-brand-white/25 px-7 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] hover:border-gold hover:bg-gold hover:text-plum-dark">Private appointment</Link>
        </div>
      </div>

      <div className="border-t border-brand-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-8 text-center text-[0.68rem] text-brand-white/45 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          © {year} FraPa Technologies. All rights reserved. · LIDYA Jewellery since 1989
        </div>
      </div>
    </footer>
  );
}
