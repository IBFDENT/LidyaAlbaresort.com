"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const FOOTER_COPY: Record<
  Locale,
  {
    hero1: string;
    hero2: string;
    description: string;
    navigate: string;
    boutiques: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    follow: string;
    privateAppointment: string;
    rights: string;
    since: string;
  }
> = {
  en: {
    hero1: "Jewellery of lasting value.",
    hero2: "Since 1989.",
    description:
      "Handcrafted jewellery, personal service and enduring craftsmanship in Manavgat and selected Alba Hotels.",
    navigate: "Navigate",
    boutiques: "Boutiques",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookie Settings",
    follow: "Follow LIDYA",
    privateAppointment: "Private appointment",
    rights: "All rights reserved.",
    since: "Since 1989",
  },
  de: {
    hero1: "Schmuck von bleibendem Wert.",
    hero2: "Seit 1989.",
    description:
      "Handgefertigter Schmuck, persönlicher Service und beständige Handwerkskunst in Manavgat und ausgewählten Alba Hotels.",
    navigate: "Navigation",
    boutiques: "Boutiquen",
    contact: "Kontakt",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    cookies: "Cookie-Einstellungen",
    follow: "LIDYA folgen",
    privateAppointment: "Privattermin",
    rights: "Alle Rechte vorbehalten.",
    since: "Seit 1989",
  },
  tr: {
    hero1: "Kalıcı değere sahip mücevherler.",
    hero2: "1989'dan beri.",
    description:
      "Manavgat ve seçili Alba Otellerinde el yapımı mücevherler, kişisel hizmet ve kalıcı işçilik.",
    navigate: "Gezinme",
    boutiques: "Butikler",
    contact: "İletişim",
    legal: "Yasal",
    privacy: "Gizlilik",
    terms: "Şartlar",
    cookies: "Çerez Ayarları",
    follow: "LIDYA'yı takip edin",
    privateAppointment: "Özel randevu",
    rights: "Tüm hakları saklıdır.",
    since: "1989'dan beri",
  },
  sk: {
    hero1: "Šperky s trvalou hodnotou.",
    hero2: "Od roku 1989.",
    description:
      "Ručne vyrábané šperky, osobný servis a poctivá remeselnosť v Manavgate a vo vybraných hoteloch Alba.",
    navigate: "Navigácia",
    boutiques: "Butiky",
    contact: "Kontakt",
    legal: "Právne informácie",
    privacy: "Ochrana súkromia",
    terms: "Podmienky",
    cookies: "Nastavenia cookies",
    follow: "Sledujte LIDYA",
    privateAppointment: "Súkromný termín",
    rights: "Všetky práva vyhradené.",
    since: "Od roku 1989",
  },
  cs: {
    hero1: "Šperky s trvalou hodnotou.",
    hero2: "Od roku 1989.",
    description:
      "Ručně vyráběné šperky, osobní servis a poctivé řemeslo v Manavgatu a ve vybraných hotelech Alba.",
    navigate: "Navigace",
    boutiques: "Butiky",
    contact: "Kontakt",
    legal: "Právní informace",
    privacy: "Ochrana soukromí",
    terms: "Podmínky",
    cookies: "Nastavení cookies",
    follow: "Sledujte LIDYA",
    privateAppointment: "Soukromý termín",
    rights: "Všechna práva vyhrazena.",
    since: "Od roku 1989",
  },
  hu: {
    hero1: "Maradandó értékű ékszerek.",
    hero2: "1989 óta.",
    description:
      "Kézzel készített ékszerek, személyes szolgáltatás és időtálló kézművesség Manavgatban és a kiválasztott Alba szállodákban.",
    navigate: "Navigáció",
    boutiques: "Butikok",
    contact: "Kapcsolat",
    legal: "Jogi információk",
    privacy: "Adatvédelem",
    terms: "Feltételek",
    cookies: "Cookie-beállítások",
    follow: "Kövesse a LIDYA-t",
    privateAppointment: "Privát időpont",
    rights: "Minden jog fenntartva.",
    since: "1989 óta",
  },
  pl: {
    hero1: "Biżuteria o trwałej wartości.",
    hero2: "Od 1989 roku.",
    description:
      "Ręcznie wykonana biżuteria, indywidualna obsługa i trwałe rzemiosło w Manavgat oraz w wybranych hotelach Alba.",
    navigate: "Nawigacja",
    boutiques: "Butiki",
    contact: "Kontakt",
    legal: "Informacje prawne",
    privacy: "Prywatność",
    terms: "Warunki",
    cookies: "Ustawienia cookies",
    follow: "Obserwuj LIDYA",
    privateAppointment: "Prywatne spotkanie",
    rights: "Wszelkie prawa zastrzeżone.",
    since: "Od 1989 roku",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { dictionary: dict, locale } = useLanguage();
  const copy = FOOTER_COPY[locale];

  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-plum-dark text-brand-white"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* BRAND FINALE */}
        <div className="border-b border-brand-white/12 py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Image
                src="/images/logo.png"
                alt="LIDYA JEWELRY"
                width={520}
                height={220}
                className="h-[96px] w-auto object-contain brightness-[3.2] saturate-0 md:h-[112px]"
              />

              <div className="mt-8 max-w-[900px]">
                <p
                  className="font-display text-4xl italic leading-[1.02] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.hero1}
                </p>

                <p
                  className="mt-2 font-display text-3xl italic leading-[1.02] md:text-4xl lg:text-5xl"
                  style={{ color: "#E8D8B5" }}
                >
                  {copy.hero2}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                LIDYA JEWELRY
              </span>

              <p className="mt-4 max-w-sm text-sm leading-6 text-brand-white/65 lg:ml-auto">
                {copy.description}
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER NAV */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {copy.navigate}
            </h5>

            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-white/70">
              <Link
                href="/#collections"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.collections}
              </Link>

              <Link
                href="/#services"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.services}
              </Link>

              <Link
                href="/bespoke"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.bespoke}
              </Link>

              <Link
                href="/#boutiques"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.boutiques}
              </Link>

              <Link
                href="/#contact"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.contact}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {copy.boutiques}
            </h5>

            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-white/70">
              <span className="cursor-default text-brand-white/70">
                LIDYA JEWELLERY — Manavgat
              </span>

              <a
                href="https://www.albahotels.com.tr/en/resort-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Hotel Alba Resort
              </a>

              <a
                href="https://www.albahotels.com.tr/en/royal-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Hotel Alba Royal
              </a>

              <a
                href="https://www.albahotels.com.tr/en/queen-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Hotel Alba Queen
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {copy.contact}
            </h5>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <p
                  className="font-display text-xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Zafer (Victor)
                </p>

                <a
                  href="tel:+905325672777"
                  className="mt-2 block text-sm text-brand-white/70 transition-colors hover:text-gold"
                >
                  +90 532 567 27 77
                </a>

                <a
                  href="mailto:albalidya@hotmail.com"
                  className="mt-1 block text-sm text-brand-white/55 transition-colors hover:text-gold"
                >
                  albalidya@hotmail.com
                </a>
              </div>

              <div>
                <p
                  className="font-display text-xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Vierka
                </p>

                <a
                  href="tel:+905378278599"
                  className="mt-2 block text-sm text-brand-white/70 transition-colors hover:text-gold"
                >
                  +90 537 827 85 99
                </a>

                <a
                  href="mailto:vierakocaker@hotmail.com"
                  className="mt-1 block text-sm text-brand-white/55 transition-colors hover:text-gold"
                >
                  vierakocaker@hotmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {copy.legal}
            </h5>

            <div className="mt-6 flex flex-col items-start gap-3 text-sm text-brand-white/70">
              <Link
                href="/privacy"
                className="transition-colors hover:text-gold"
              >
                {copy.privacy}
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-gold"
              >
                {copy.terms}
              </Link>

              <button
                type="button"
                onClick={openCookieSettings}
                className="text-left transition-colors hover:text-gold"
              >
                {copy.cookies}
              </button>
            </div>
          </div>
        </div>

        {/* SOCIAL + APPOINTMENT */}
        <div className="grid gap-8 border-t border-brand-white/12 py-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {copy.follow}
            </span>

            <div className="mt-4 flex flex-wrap items-start gap-6">
              <a
                href="https://www.instagram.com/tanirzafer?igsh=MWs5ZTh5bzA0a3p5Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Instagram
              </a>

              <span className="mt-[0.45rem] h-px w-5 bg-brand-white/15" />

              <a
                href="https://www.facebook.com/lidyaalbajewellery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Facebook
              </a>

              <span className="mt-[0.45rem] h-px w-5 bg-brand-white/15" />

              <details className="group relative">
                <summary className="cursor-pointer list-none text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65 transition-colors hover:text-gold [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2">
                    WhatsApp
                    <span className="text-[0.55rem] transition-transform duration-300 group-open:rotate-180">
                      ▾
                    </span>
                  </span>
                </summary>

                <div className="absolute bottom-full left-0 z-50 mb-3 min-w-[210px] border border-brand-white/15 bg-plum-dark/95 p-2 shadow-2xl backdrop-blur-md">
                  <a
                    href="https://wa.me/905325672777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between gap-5 px-4 py-3 transition-colors hover:bg-brand-white/[0.06]"
                  >
                    <div>
                      <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-gold">
                        WhatsApp
                      </span>

                      <span className="mt-1 block text-sm text-brand-white/80">
                        Zafer (Victor)
                      </span>
                    </div>

                    <span className="text-brand-white/40 transition-all group-hover/link:translate-x-1 group-hover/link:text-gold">
                      →
                    </span>
                  </a>

                  <div className="mx-4 h-px bg-brand-white/10" />

                  <a
                    href="https://wa.me/905378278599"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between gap-5 px-4 py-3 transition-colors hover:bg-brand-white/[0.06]"
                  >
                    <div>
                      <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-gold">
                        WhatsApp
                      </span>

                      <span className="mt-1 block text-sm text-brand-white/80">
                        Vierka
                      </span>
                    </div>

                    <span className="text-brand-white/40 transition-all group-hover/link:translate-x-1 group-hover/link:text-gold">
                      →
                    </span>
                  </a>
                </div>
              </details>
            </div>
          </div>

          <div className="md:text-right">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-6 border border-brand-white/25 px-7 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-plum-dark"
            >
              {copy.privateAppointment}
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-brand-white/10">
        <div className="relative mx-auto max-w-[1440px] px-6 py-8 text-[0.68rem] text-brand-white/45 md:px-10 lg:px-16 xl:px-20">
          <div className="text-center">
            <span>
              © {year} FraPa Technologies. All rights reserved.
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 sm:absolute sm:right-6 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 md:right-10 lg:right-16 xl:right-20">
            <span className="h-px w-8 bg-gold/60" />

            <span className="uppercase tracking-[0.22em]">
              {copy.since}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}