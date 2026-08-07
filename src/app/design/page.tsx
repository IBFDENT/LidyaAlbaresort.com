import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCTA from "@/components/category/CategoryCTA";
import PlaceholderImage from "@/components/category/PlaceholderImage";

import {
  BlossomIcon,
  SunIcon,
  LeafIcon,
  SnowflakeIcon,
} from "@/components/category/icons";

import { LOCALE } from "@/lib/i18n";
import { localized } from "@/lib/content";
import { DESIGN_TEXT, SEASONS } from "@/lib/design";

export const metadata: Metadata = {
  title: "Design — LIDYA JEWELRY",
  description:
    "Designed and handcrafted in-house at LIDYA JEWELRY — a new collection every season. Discover the Spring, Summer, Autumn and Winter collections.",
};

const SEASON_ICONS = {
  spring: BlossomIcon,
  summer: SunIcon,
  autumn: LeafIcon,
  winter: SnowflakeIcon,
} as const;

const SEASON_NUMBERS = {
  spring: "01",
  summer: "02",
  autumn: "03",
  winter: "04",
} as const;

export default function DesignPage() {
  const t = (key: keyof typeof DESIGN_TEXT) =>
    localized(DESIGN_TEXT[key], LOCALE);

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ivory pt-36 md:pt-40 lg:pt-44">
          <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-gold/7 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center text-gold">
                    <BlossomIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    {t("heroEyebrow")}
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[980px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  {t("heroTitle")}
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  {t("heroLead")}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/45">
                    LIDYA · SINCE 1989
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-plum-dark/10 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    Designed in-house
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    One philosophy.
                    <span style={{ color: "#C8A96A" }}>
                      {" "}
                      Four seasonal expressions.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEASONS */}
        <section className="bg-brand-white py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mb-14 grid gap-8 border-b border-plum-dark/10 pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  {t("sectionEyebrow")}
                </span>

                <h2
                  className="mt-6 max-w-[850px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  Designed for the
                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    rhythm of the year.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  Each season brings a new mood, new details and a different
                  expression of the same LIDYA craftsmanship.
                </p>
              </div>
            </div>

            <div className="space-y-20 md:space-y-24 lg:space-y-32">
              {SEASONS.map((season, index) => {
                const Icon = SEASON_ICONS[season.id];
                const number = SEASON_NUMBERS[season.id];
                const reverse = index % 2 === 1;

                return (
                  <article
                    key={season.id}
                    className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
                  >
                    {/* IMAGE */}
                    <div
                      className={`${
                        reverse
                          ? "lg:order-2 lg:col-span-7"
                          : "lg:col-span-7"
                      }`}
                    >
                      <div className="group relative aspect-[5/4] overflow-hidden bg-ivory">
                        {season.image ? (
                          <Image
                            src={season.image}
                            alt={
                              season.imageAlt ??
                              localized(season.name, LOCALE)
                            }
                            fill
                            sizes="(min-width: 1024px) 58vw, 100vw"
                            className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                          />
                        ) : (
                          <PlaceholderImage
                            icon={<Icon />}
                            className="h-full w-full"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/35 via-transparent to-transparent" />

                        <span className="absolute right-6 top-6 text-[0.56rem] font-semibold tracking-[0.22em] text-brand-white/80">
                          {number}
                        </span>

                        <div className="absolute bottom-6 left-6 flex items-center gap-4">
                          <span className="h-px w-10 bg-brand-white/60" />
                          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/80">
                            Seasonal Collection
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <div
                      className={`${
                        reverse
                          ? "lg:order-1 lg:col-span-5"
                          : "lg:col-span-5"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center text-gold">
                          <Icon />
                        </span>

                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                          {number}
                        </span>
                      </div>

                      <h3
                        className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl"
                        style={{ color: "#1B0B20" }}
                      >
                        {localized(season.name, LOCALE)}
                      </h3>

                      <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
                        {localized(season.description, LOCALE)}
                      </p>

                      <div className="mt-8 flex items-center gap-5">
                        <span className="h-px w-10 bg-gold" />
                        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
                          Designed & handcrafted by LIDYA
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CLOSING STATEMENT */}
            <div className="mx-auto mt-24 max-w-[1000px] text-center md:mt-32">
              <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

              <p
                className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#1B0B20" }}
              >
                Design changes with the season.
                <span style={{ color: "#C8A96A" }}>
                  {" "}
                  Craftsmanship does not.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* DARK DESIGN PHILOSOPHY */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  Our Design Philosophy
                </span>

                <h2
                  className="max-w-[900px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Created to feel individual,
                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    never ordinary.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  Every LIDYA design begins with proportion, character and the
                  desire to create jewellery that feels personal from the first
                  moment it is worn.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-brand-white/12 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Original",
                  text: "Designed in-house with its own identity and point of view.",
                },
                {
                  number: "02",
                  title: "Handcrafted",
                  text: "Created with attention to proportion, detail and finish.",
                },
                {
                  number: "03",
                  title: "Personal",
                  text: "Jewellery designed to become part of the person who wears it.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-b border-brand-white/12 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                    {item.number}
                  </span>

                  <h3
                    className="mt-7 font-display text-2xl md:text-3xl"
                    style={{ color: "#F5EFE6" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CategoryCTA
          title={t("ctaTitle")}
          sub={t("ctaSub")}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}