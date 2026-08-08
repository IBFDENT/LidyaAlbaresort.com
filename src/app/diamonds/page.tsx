import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCTA from "@/components/category/CategoryCTA";

import {
  DiamondIcon,
  ShieldCheckIcon,
  TrendUpIcon,
  GlobeIcon,
  GemClusterIcon,
} from "@/components/category/icons";

import { LOCALE } from "@/lib/i18n";
import { localized } from "@/lib/content";

import {
  DIAMONDS_TEXT,
  FOUR_CS,
  FOUR_CS_IMAGES,
  BEYOND_FOUR_CS,
  BEYOND_FOUR_CS_IMAGES,
  INVESTMENT_PRINCIPLES,
  INVESTMENT_PRINCIPLES_IMAGES,
  SUMMARY_POINTS,
} from "@/lib/investmentDiamonds";

export const metadata: Metadata = {
  title: "Investment Diamonds — LIDYA JEWELRY",
  description:
    "Certified, independently graded diamonds for private, portable, long-term investment — the Four Cs, additional value factors and what to look for, explained by LIDYA JEWELRY.",
};

const SUMMARY_ICONS = [
  DiamondIcon,
  GemClusterIcon,
  ShieldCheckIcon,
  GlobeIcon,
  TrendUpIcon,
];

type DiamondPoint = {
  title: Record<string, string>;
  description: Record<string, string>;
};

type DiamondImage = {
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
};

type EditorialSectionProps = {
  eyebrow: string;
  title: string;
  roman: string;
  points: readonly DiamondPoint[];
  images: readonly DiamondImage[];
  startNumber: number;
  tone?: "white" | "ivory";
};

function EditorialSection({
  eyebrow,
  title,
  roman,
  points,
  images,
  startNumber,
  tone = "white",
}: EditorialSectionProps) {
  return (
    <section
      className={
        tone === "ivory"
          ? "bg-ivory py-20 md:py-28 lg:py-32"
          : "bg-brand-white py-20 md:py-28 lg:py-32"
      }
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* HEADER */}
        <div className="mb-16 grid gap-8 border-b border-plum-dark/10 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
            <span
              className="font-display text-6xl italic leading-none md:text-7xl"
              style={{ color: "#E8D8B5" }}
            >
              {roman}
            </span>
          </div>

          <div className="lg:col-span-7">
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </span>

            <h2
              className="mt-5 max-w-[860px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {title}
            </h2>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
              Diamond Expertise
            </span>
          </div>
        </div>

        {/* POINTS */}
        <div className="space-y-20 md:space-y-24 lg:space-y-28">
          {points.map((point, index) => {
            const image = images[index];
            const reverse = index % 2 === 1;
            const number = startNumber + index;

            return (
              <article
                key={`${roman}-${index}`}
                className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14"
              >
                {/* IMAGE */}
                <div
                  className={
                    reverse ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"
                  }
                >
                  <div className="group relative aspect-[5/4] overflow-hidden bg-[#EEEAE2]">
                    {image?.image ? (
                      <Image
                        src={image.image}
                        alt={image.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F1EA] via-[#E5E0D8] to-[#CFC8BD] text-gold">
                        <DiamondIcon />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/30 via-transparent to-transparent" />

                    <span className="absolute right-6 top-6 text-[0.58rem] font-semibold tracking-[0.22em] text-brand-white/80 md:right-8 md:top-8">
                      {String(number).padStart(2, "0")}
                    </span>

                    <div className="absolute bottom-6 left-6 flex items-center gap-4 md:bottom-8 md:left-8">
                      <span className="h-px w-10 bg-brand-white/60" />

                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/80">
                        LIDYA Diamond Selection
                      </span>
                    </div>

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className={
                    reverse ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"
                  }
                >
                  <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                    {String(number).padStart(2, "0")}
                  </span>

                  <h3
                    className="mt-6 max-w-lg font-display text-4xl leading-[0.98] tracking-[-0.025em] md:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {localized(point.title, LOCALE)}
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
                    {localized(point.description, LOCALE)}
                  </p>

                  <div className="mt-8 flex items-center gap-5">
                    <span className="h-px w-10 bg-gold" />

                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
                      Precision · Rarity · Confidence
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function DiamondsPage() {
  const t = (key: keyof typeof DIAMONDS_TEXT) =>
    localized(DIAMONDS_TEXT[key], LOCALE);

  const section2Start = 1 + FOUR_CS.length;
  const section3Start = section2Start + BEYOND_FOUR_CS.length;

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[900px] overflow-hidden bg-plum-dark text-brand-white lg:min-h-screen">
          {/* HERO IMAGE */}
          <Image
            src="/images/diamonds/diamonds-herou.png"
            alt="Investment diamonds by LIDYA JEWELRY"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* HERO OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/68 via-plum-dark/26 to-plum-dark/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/42 via-transparent to-plum-dark/10" />

          {/* subtle left-side readability glow */}
          <div className="pointer-events-none absolute -left-40 top-1/3 h-[620px] w-[620px] rounded-full bg-plum-dark/30 blur-3xl" />

          <div className="relative mx-auto flex min-h-[900px] max-w-[1440px] items-end px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-40 lg:min-h-screen lg:px-16 lg:pb-20 lg:pt-44 xl:px-20">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              {/* LEFT */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center text-gold">
                    <DiamondIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    {t("heroEyebrow")}
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[900px] font-display text-5xl leading-[0.91] tracking-[-0.04em] md:text-6xl lg:text-[5.7rem]"
                  style={{ color: "#F5EFE6" }}
                >
                  {t("heroTitle")}
                </h1>

                <p className="mt-7 max-w-[620px] text-sm leading-7 text-brand-white/65 md:text-base">
                  {t("heroLead")}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/45">
                    LIDYA · SINCE 1989
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-4 lg:col-start-9 lg:pb-2">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                  Light perfected
                </span>

                <p
                  className="mt-6 max-w-[470px] font-display text-3xl italic leading-tight md:text-4xl lg:text-[2.65rem]"
                  style={{ color: "#F5EFE6" }}
                >
                  Beauty catches the eye.
                  <span
                    className="block"
                    style={{ color: "#E8D8B5" }}
                  >
                    Quality withstands scrutiny.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative overflow-hidden bg-brand-white py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 border-b border-plum-dark/10 pb-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  Diamond Expertise
                </span>

                <h2
                  className="mt-6 max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  Every diamond begins with
                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    measurable quality.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  A fine diamond is more than brilliance alone. Proportion,
                  grading, rarity and certification all contribute to its
                  character and long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR Cs */}
        <EditorialSection
          eyebrow={t("fourCsEyebrow")}
          title={t("fourCsTitle")}
          roman="I"
          points={FOUR_CS}
          images={FOUR_CS_IMAGES}
          startNumber={1}
          tone="white"
        />

        {/* BEYOND 4Cs */}
        <EditorialSection
          eyebrow={t("beyondEyebrow")}
          title={t("beyondTitle")}
          roman="II"
          points={BEYOND_FOUR_CS}
          images={BEYOND_FOUR_CS_IMAGES}
          startNumber={section2Start}
          tone="ivory"
        />

        {/* INVESTMENT PRINCIPLES */}
        <EditorialSection
          eyebrow={t("principlesEyebrow")}
          title={t("principlesTitle")}
          roman="III"
          points={INVESTMENT_PRINCIPLES}
          images={INVESTMENT_PRINCIPLES_IMAGES}
          startNumber={section3Start}
          tone="white"
        />

        {/* DARK TRUST SECTION */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-brand-white/[0.03] blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 border-b border-brand-white/12 pb-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  Certified Confidence
                </span>

                <h2
                  className="max-w-[950px] font-display text-4xl leading-[0.97] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Rarity deserves
                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    independent proof.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  Certification, transparency and independent grading provide
                  the foundation for informed diamond selection.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Certified",
                  text: "Independent grading documents the measurable characteristics of the stone.",
                },
                {
                  number: "02",
                  title: "Traceable",
                  text: "Clear documentation supports confidence in origin, identity and quality.",
                },
                {
                  number: "03",
                  title: "Selected",
                  text: "Numbers matter, but final selection still depends on expert human judgement.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-b border-brand-white/12 py-9 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
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

            <div className="mx-auto mt-16 max-w-[980px] text-center md:mt-20">
              <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

              <p
                className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#F5EFE6" }}
              >
                Brilliance attracts attention.
                <span style={{ color: "#E8D8B5" }}>
                  {" "}
                  Confidence comes from knowledge.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="bg-ivory py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mb-12 text-center">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Diamond Fundamentals
              </span>

              <h2
                className="mx-auto mt-6 max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                style={{ color: "#1B0B20" }}
              >
                Five things worth
                <span
                  className="block italic"
                  style={{ color: "#C8A96A" }}
                >
                  understanding clearly.
                </span>
              </h2>
            </div>

            <div className="grid border-t border-plum-dark/10 md:grid-cols-2 lg:grid-cols-5">
              {SUMMARY_POINTS.map((summary, index) => {
                const Icon = SUMMARY_ICONS[index % SUMMARY_ICONS.length];

                return (
                  <div
                    key={`${index}-${localized(summary, LOCALE)}`}
                    className="group border-b border-plum-dark/10 py-8 md:border-r md:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                  >
                    <div className="flex h-10 w-10 items-center justify-center text-gold">
                      <Icon />
                    </div>

                    <span className="mt-8 block text-[0.56rem] font-semibold tracking-[0.22em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="mt-4 font-display text-xl leading-snug md:text-2xl"
                      style={{ color: "#1B0B20" }}
                    >
                      {localized(summary, LOCALE)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CategoryCTA title={t("ctaTitle")} sub={t("ctaSub")} />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}