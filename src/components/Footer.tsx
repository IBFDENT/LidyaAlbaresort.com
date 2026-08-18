"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import ProtectedEmail from "@/components/ProtectedEmail";
import { useLanguage } from "@/components/LanguageProvider";
import { FOOTER_COPY } from "@/lib/footer-copy";

export default function Footer() {
  const year = new Date().getFullYear();
  const { dictionary: dict, locale } = useLanguage();
  const c = FOOTER_COPY[locale];
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const openCookieSettings = () => window.dispatchEvent(new Event("open-cookie-settings"));

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = newsletterEmail.trim();
    if (!email) return setNewsletterMessage(c.newsletterEnterEmail);
    if (!newsletterConsent) return setNewsletterMessage(c.newsletterConsentError);
    setNewsletterSubmitting(true);
    setNewsletterMessage("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, source: "footer", consent: true }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || c.newsletterUnable);
      setNewsletterMessage(data.duplicate ? c.newsletterDuplicate : c.newsletterWelcome);
      setNewsletterEmail("");
      setNewsletterConsent(false);
    } catch (error) {
      setNewsletterMessage(error instanceof Error && error.message ? error.message : c.newsletterUnable);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <footer id="site-footer" className="relative overflow-hidden bg-plum-dark text-brand-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="border-b border-brand-white/12 py-16 text-center md:py-20 lg:text-left">
          <Link href="/" aria-label="LIDYA Jewellery — Home" className="inline-block">
            <Image src="/images/logo.png" alt="LIDYA Jewellery" width={520} height={220} className="mx-auto h-[96px] w-auto object-contain md:h-[112px] lg:mx-0" />
          </Link>
          <p className="mt-8 font-display text-4xl italic text-[#F5EFE6] md:text-5xl">{c.tagline}</p>
          <p className="mt-2 font-display text-3xl italic text-[#E8D8B5] md:text-4xl">{c.since}</p>
        </div>

        <div className="border-b border-brand-white/12 py-12 md:py-14">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">{c.privateList}</p>
              <h4 className="mt-4 font-display text-3xl italic text-white md:text-4xl">{c.privateListTitle}</h4>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-brand-white/55 lg:mx-0">{c.privateListLead}</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="w-full">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-newsletter-email" className="sr-only">{c.emailAddress}</label>
                <input id="footer-newsletter-email" type="email" autoComplete="email" required value={newsletterEmail} onChange={(e)=>{setNewsletterEmail(e.target.value);setNewsletterMessage("");}} placeholder={c.emailAddress} className="min-h-[54px] flex-1 border border-brand-white/20 bg-transparent px-5 text-sm text-brand-white outline-none transition-colors placeholder:text-brand-white/35 focus:border-gold" />
                <button disabled={newsletterSubmitting} type="submit" className="min-h-[54px] bg-gold px-7 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark hover:bg-gold-light disabled:cursor-wait disabled:opacity-60">{newsletterSubmitting ? c.joining : c.joinPrivateList}</button>
              </div>
              <label className="mt-3 flex cursor-pointer items-start gap-3 text-[0.7rem] leading-5 text-brand-white/45">
                <input type="checkbox" checked={newsletterConsent} onChange={(e)=>setNewsletterConsent(e.target.checked)} className="mt-1 accent-[#c9a45c]" />
                <span>{c.consentPrefix} <Link href="/privacy" className="text-brand-white/65 underline underline-offset-4 hover:text-gold">{c.privacyPolicy}</Link>.</span>
              </label>
              {newsletterMessage && <p className="mt-3 text-[0.72rem] text-[#E8D8B5]" aria-live="polite">{newsletterMessage}</p>}
            </form>
          </div>
        </div>

        <div className="grid gap-12 py-14 text-center md:grid-cols-2 lg:grid-cols-[1fr_1.15fr_1.05fr_1fr_1.35fr_.8fr] lg:gap-8 lg:text-left">
          <div>
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">{c.navigate}</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/collections" className="hover:text-gold">{dict.nav.collections}</Link>
              <Link href="/services" className="hover:text-gold">{dict.nav.services}</Link>
              <Link href="/about" className="hover:text-gold">{dict.nav.about}</Link>
              <Link href="/boutiques" className="hover:text-gold">{dict.nav.boutiques}</Link>
              <Link href="/contact" className="hover:text-gold">{dict.nav.contact}</Link>
            </div>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">{c.boutiques}</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/boutiques" className="hover:text-gold">LIDYA JEWELLERY — Manavgat</Link>
              <a href="https://www.albahotels.com.tr/en/resort-en/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Hotel Alba Resort</a>
              <a href="https://www.albahotels.com.tr/en/royal-en/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Hotel Alba Royal</a>
              <a href="https://www.albahotels.com.tr/en/queen-en/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Hotel Alba Queen</a>
            </div>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">{c.experiences}</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/private-visit" className="hover:text-gold">{c.privateVisit}</Link>
              <Link href="/coppa-beach-club" className="hover:text-gold">Coppa Beach Club</Link>
            </div>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">{c.myLidya}</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/client" className="hover:text-gold">{c.clientCentre}</Link>
              <Link href="/client" className="hover:text-gold">{c.signInRegister}</Link>
              <Link href="/services" className="hover:text-gold">{c.serviceRequests}</Link>
              <Link href="/contact" className="hover:text-gold">{c.appointments}</Link>
            </div>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">{c.contact}</h5>
            <p className="mt-6 text-sm leading-6 text-brand-white/60">{c.contactLead}</p>
            <ProtectedEmail className="mt-4 inline-block text-sm text-[#E8D8B5] transition-colors hover:text-gold" />
            <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-brand-white/65 lg:justify-start">
              <a href="tel:+905325672777" className="hover:text-gold">Victor</a>
              <a href="tel:+905378278599" className="hover:text-gold">Vierka</a>
              <a href="tel:+905376694584" className="hover:text-gold">Benny</a>
            </div>
          </div>

          <div>
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">{c.legal}</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/privacy" className="hover:text-gold">{c.privacy}</Link>
              <Link href="/terms" className="hover:text-gold">{c.terms}</Link>
              <button type="button" onClick={openCookieSettings} className="hover:text-gold">{c.cookieSettings}</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-brand-white/12 py-9 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65">
            <a href="https://www.instagram.com/tanirzafer?igsh=MWs5ZTh5bzA0a3p5Ng==" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a>
            <a href="https://www.facebook.com/lidyaalbajewellery/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook</a>
          </div>
          <Link href="/contact" className="border border-brand-white/25 px-7 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] hover:border-gold hover:bg-gold hover:text-plum-dark">{c.privateAppointment}</Link>
        </div>
      </div>

      <div className="border-t border-brand-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-8 text-center text-[0.68rem] text-brand-white/45 sm:px-6 md:flex-row md:px-10 md:text-left lg:px-16 xl:px-20">
          <p>© {year} FraPa Technologies. {c.allRightsReserved} · LIDYA Jewellery since 1989</p>
          <Link href="/admin" className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-brand-white/30 hover:text-gold">{c.staffLogin}</Link>
        </div>
      </div>
    </footer>
  );
}
