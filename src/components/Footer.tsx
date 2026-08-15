"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import ProtectedEmail from "@/components/ProtectedEmail";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { dictionary: dict } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    setNewsletterMessage(
      "Thank you. The LIDYA Private List will be connected to the member system next."
    );
  };

  return (
    <footer id="site-footer" className="relative overflow-hidden bg-plum-dark text-brand-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="border-b border-brand-white/12 py-16 text-center md:py-20 lg:text-left">
          <Link href="/" aria-label="LIDYA Jewellery — Home" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="LIDYA Jewellery"
              width={520}
              height={220}
              className="mx-auto h-[96px] w-auto object-contain md:h-[112px] lg:mx-0"
            />
          </Link>
          <p className="mt-8 font-display text-4xl italic text-[#F5EFE6] md:text-5xl">
            Jewellery of lasting value.
          </p>
          <p className="mt-2 font-display text-3xl italic text-[#E8D8B5] md:text-4xl">
            Since 1989.
          </p>
        </div>

        <div className="border-b border-brand-white/12 py-12 md:py-14">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                The LIDYA Private List
              </p>
              <h4 className="mt-4 font-display text-3xl italic text-[#F5EFE6] md:text-4xl">
                Private previews. New collections. Personal invitations.
              </h4>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-brand-white/55 lg:mx-0">
                Receive selected collection previews, jewellery stories, investment insights and private LIDYA invitations.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="w-full">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(event) => {
                    setNewsletterEmail(event.target.value);
                    if (newsletterMessage) setNewsletterMessage("");
                  }}
                  placeholder="Email address"
                  className="min-h-[54px] flex-1 border border-brand-white/20 bg-transparent px-5 text-sm text-brand-white outline-none transition-colors placeholder:text-brand-white/35 focus:border-gold"
                />
                <button
                  type="submit"
                  className="min-h-[54px] bg-gold px-7 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-colors hover:bg-gold-light"
                >
                  Join the Private List
                </button>
              </div>
              <div className="mt-3 flex flex-col items-center justify-between gap-2 text-center text-[0.7rem] leading-5 text-brand-white/40 sm:flex-row sm:text-left">
                <p>
                  By subscribing, you agree to our {" "}
                  <Link href="/privacy" className="text-brand-white/60 underline underline-offset-4 hover:text-gold">
                    Privacy Policy
                  </Link>
                  .
                </p>
                {newsletterMessage && (
                  <p className="text-[#E8D8B5]" aria-live="polite">
                    {newsletterMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="grid gap-12 py-14 text-center md:grid-cols-2 lg:grid-cols-15 lg:text-left">
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

          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">My LIDYA</h5>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-brand-white/70 lg:items-start">
              <Link href="/client" className="hover:text-gold">Client Centre</Link>
              <Link href="/client" className="hover:text-gold">Sign in / Register</Link>
              <Link href="/services" className="hover:text-gold">Service Requests</Link>
              <Link href="/contact" className="hover:text-gold">Appointments</Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">Contact</h5>
            <p className="mt-6 text-sm leading-6 text-brand-white/60">
              One official address for jewellery, service, bespoke work and private appointments.
            </p>
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
          <Link href="/#contact" className="border border-brand-white/25 px-7 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] hover:border-gold hover:bg-gold hover:text-plum-dark">
            Private appointment
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-8 text-center text-[0.68rem] text-brand-white/45 sm:px-6 md:flex-row md:px-10 md:text-left lg:px-16 xl:px-20">
          <p>© {year} FraPa Technologies. All rights reserved. · LIDYA Jewellery since 1989</p>
          <Link
            href="/admin"
            className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-brand-white/30 transition-colors hover:text-gold"
          >
            Staff Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
