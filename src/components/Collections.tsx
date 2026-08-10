"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { COLLECTIONS, localized } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const CATEGORY_LINKS: Partial<Record<string, string>> = {
  pearls: "/pearls",
  wedding: "/wedding-rings",
  brilliants: "/brilliants",
  design: "/design",
  bespoke: "/bespoke",
};

const CARD_LAYOUTS = [
  "md:col-span-7 md:row-span-2 min-h-[520px] lg:min-h-[640px]",
  "md:col-span-5 md:row-span-2 min-h-[520px] lg:min-h-[640px]",
  "md:col-span-5 min-h-[420px] lg:min-h-[500px]",
  "md:col-span-7 min-h-[420px] lg:min-h-[500px]",
  "md:col-span-6 min-h-[420px] lg:min-h-[500px]",
  "md:col-span-6 min-h-[420px] lg:min-h-[500px]",
];

const EDITORIAL_COPY: Record<
  Locale,
  {
    before: string;
    accent: string;
    after: string;
  }
> = {
  en: {
    before: "Jewellery shaped by craftsmanship,",
    accent: "character",
    after: "and enduring beauty.",
  },
  de: {
    before: "Schmuck geprägt von Handwerkskunst,",
    accent: "Charakter",
    after: "und zeitloser Schönheit.",
  },
  tr: {
    before: "Ustalıkla şekillenen mücevherler,",
    accent: "karakter",
    after: "ve kalıcı güzellik.",
  },
  sk: {
    before: "Šperky formované remeselným umením,",
    accent: "charakterom",
    after: "a trvalou krásou.",
  },
  cs: {
    before: "Šperky formované řemeslným uměním,",
    accent: "charakterem",
    after: "a trvalou krásou.",
  },
  hu: {
    before: "Ékszerek, amelyeket a kézművesség,",
    accent: "karakter",
    after: "és az időtálló szépség formál.",
  },
  pl: {
    before: "Biżuteria kształtowana przez kunszt,",
    accent: "charakter",
    after: "i ponadczasowe piękno.",
  },
  ru: {
    before: "Украшения, созданные мастерством,",
    accent: "характером",
    after: "и непреходящей красотой.",
  },
  nl: {
    before: "Sieraden gevormd door vakmanschap,",
    accent: "karakter",
    after: "en blijvende schoonheid.",
  },
  da: {
    before: "Smykker formet af håndværk,",
    accent: "karakter",
    after: "og varig skønhed.",
  },
  fi: {
    before: "Koruja, joita muovaavat käsityötaito,",
    accent: "luonne",
    after: "ja ajaton kauneus.",
  },
  sv: {
    before: "Smycken formade av hantverk,",
    accent: "karaktär",
    after: "och bestående skönhet.",
  },
  fr: {
    before: "Des bijoux façonnés par le savoir-faire,",
    accent: "le caractère",
    after: "et une beauté durable.",
  },
  it: {
    before: "Gioielli plasmati dall’artigianalità,",
    accent: "dal carattere",
    after: "e da una bellezza duratura.",
  },
  es: {
    before: "Joyas moldeadas por la artesanía,",
    accent: "el carácter",
    after: "y una belleza duradera.",
  },
};

export default function Collections() {
  const { dictionary: dict, locale } = useLanguage();

  const editorial = EDITORIAL_COPY[locale];

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40"
    >
      {/* Very subtle decorative background detail */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* SECTION INTRO */}
        <div className="mb-16 grid items-end gap-8 md:mb-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold">
              {dict.collections.eyebrow}
            </span>

            <h2 className="max-w-[850px] font-display text-5xl leading-[0.95] tracking-[-0.025em] text-plum-dark md:text-6xl lg:text-7xl">
              {dict.collections.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-grey md:text-base">
              {dict.collections.sub}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-plum-dark/55">
                LIDYA · {dict.strip.since}
              </span>
            </div>
          </div>
        </div>

        {/* EDITORIAL COLLECTION GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          {COLLECTIONS.map((collection, index) => {
            const href = CATEGORY_LINKS[collection.id] ?? "/#catalog";

            const layout =
              CARD_LAYOUTS[index] ??
              "md:col-span-6 min-h-[420px] lg:min-h-[500px]";

            return (
              <Link
                key={collection.id}
                href={href}
                className={`cat-card group relative block overflow-hidden bg-plum-dark ${layout}`}
              >
                {/* IMAGE */}
                <Image
                  src={collection.image}
                  alt={localized(collection.name, locale)}
                  fill
                  sizes="
                    (min-width: 1280px) 60vw,
                    (min-width: 768px) 55vw,
                    100vw
                  "
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                />

                {/* CINEMATIC GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/90 via-plum-dark/12 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

                {/* SUBTLE DARKENING */}
                <div className="absolute inset-0 bg-plum-dark/5 transition-colors duration-700 group-hover:bg-plum-dark/15" />

                {/* NUMBER */}
                <span className="absolute right-5 top-5 z-10 text-[0.62rem] font-semibold tracking-[0.22em] text-brand-white/60 md:right-7 md:top-7">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-10">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    {dict.nav.collections}
                  </span>

                  <div className="mt-3 flex items-end justify-between gap-5">
                    <div>
                      <h3 className="font-display text-3xl leading-none text-brand-white md:text-4xl lg:text-[2.8rem]">
                        {localized(collection.name, locale)}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-brand-white/70">
                        {localized(collection.description, locale)}
                      </p>
                    </div>

                    {/* ARROW */}
                    <span className="mb-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-white/30 text-brand-white transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-plum-dark md:flex">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-500 group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14" />
                        <path d="m14 7 5 5-5 5" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* GOLD HOVER LINE */}
                <span className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* EDITORIAL BRAND BREAK */}
        <div className="mx-auto mt-24 max-w-[1050px] text-center md:mt-32">
          <span className="mx-auto mb-8 block h-px w-14 bg-gold" />

          <p className="font-display text-3xl italic leading-tight text-plum-dark md:text-4xl lg:text-5xl">
            {editorial.before}{" "}
            <span className="text-gold">{editorial.accent}</span>{" "}
            {editorial.after}
          </p>
        </div>
      </div>
    </section>
  );
}