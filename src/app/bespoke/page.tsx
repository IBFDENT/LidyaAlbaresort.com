import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCTA from "@/components/category/CategoryCTA";

import { GemClusterIcon } from "@/components/category/icons";

import { LOCALE } from "@/lib/i18n";
import { localized } from "@/lib/content";

import {
  BESPOKE_TEXT,
  PHASE_1_STEPS,
  PHASE_2_STEPS,
  PHASE_3_STEPS,
  type BespokeStep,
} from "@/lib/bespoke";

export const metadata: Metadata = {
  title: "Bespoke — LIDYA JEWELRY",
  description:
    "Bespoke jewellery commissions at LIDYA JEWELRY — from first consultation and sketch to casting, setting, polishing and delivery, all handcrafted in our own workshop.",
};

type Phase = {
  eyebrow: string;
  title: string;
  number: string;
  steps: BespokeStep[];
  startNumber: number;
};

function ProcessStep({
  step,
  number,
  reverse,
}: {
  step: BespokeStep;
  number: number;
  reverse: boolean;
}) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
      {/* IMAGE */}
      <div
        className={
          reverse
            ? "lg:order-2 lg:col-span-7"
            : "lg:col-span-7"
        }
      >
        <div className="group relative aspect-[5/4] overflow-hidden bg-ivory">
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/38 via-transparent to-transparent" />

          <span className="absolute right-6 top-6 text-[0.58rem] font-semibold tracking-[0.22em] text-brand-white/75 md:right-8 md:top-8">
            {String(number).padStart(2, "0")}
          </span>

          <div className="absolute bottom-6 left-6 flex items-center gap-4 md:bottom-8 md:left-8">
            <span className="h-px w-10 bg-brand-white/60" />

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/75">
              Bespoke Atelier
            </span>
          </div>

          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
        </div>
      </div>

      {/* TEXT */}
      <div
        className={
          reverse
            ? "lg:order-1 lg:col-span-5"
            : "lg:col-span-5"
        }
      >
        <span className="text-[0.6rem] font-semibold tracking-[0.24em] text-gold">
          {String(number).padStart(2, "0")}
        </span>

        <h3
          className="mt-6 max-w-lg font-display text-4xl leading-[0.98] tracking-[-0.025em] md:text-5xl"
          style={{ color: "#1B0B20" }}
        >
          {localized(step.title, LOCALE)}
        </h3>

        <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
          {localized(step.description, LOCALE)}
        </p>

        <div className="mt-8 flex items-center gap-5">
          <span className="h-px w-10 bg-gold" />

          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
            Handcrafted by LIDYA
          </span>
        </div>
      </div>
    </article>
  );
}

export default function BespokePage() {
  const t = (key: keyof typeof BESPOKE_TEXT) =>
    localized(BESPOKE_TEXT[key], LOCALE);

  const phases: Phase[] = [
    {
      eyebrow: t("phase1Eyebrow"),
      title: t("phase1Title"),
      number: "I",
      steps: PHASE_1_STEPS,
      startNumber: 1,
    },
    {
      eyebrow: t("phase2Eyebrow"),
      title: t("phase2Title"),
      number: "II",
      steps: PHASE_2_STEPS,
      startNumber: 4,
    },
    {
      eyebrow: t("phase3Eyebrow"),
      title: t("phase3Title"),
      number: "III",
      steps: PHASE_3_STEPS,
      startNumber: 9,
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ivory pt-36 md:pt-40 lg:pt-44">
          <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center text-gold">
                    <GemClusterIcon />
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
                    LIDYA ATELIER · SINCE 1989
                  </span>
                </div>
              </div>
            </div>

            {/* HERO STATEMENT */}
            <div className="border-t border-plum-dark/10 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    Made for one
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    Your idea begins the story.
                    <span style={{ color: "#C8A96A" }}>
                      {" "}
                      Our hands give it form.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO TO PROCESS */}
        <section className="bg-brand-white py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 border-b border-plum-dark/10 pb-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  The Bespoke Journey
                </span>

                <h2
                  className="mt-6 max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  From first conversation
                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    to a piece that belongs only to you.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  Every bespoke commission moves through our workshop with
                  attention to proportion, material, technique and the person
                  for whom it is being created.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHASES */}
        {phases.map((phase, phaseIndex) => (
          <section
            key={phase.number}
            className={
              phaseIndex % 2 === 0
                ? "bg-brand-white py-20 md:py-28 lg:py-32"
                : "bg-ivory py-20 md:py-28 lg:py-32"
            }
          >
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
              {/* PHASE HEADER */}
              <div className="mb-16 grid gap-8 border-b border-plum-dark/10 pb-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-2">
                  <span
                    className="font-display text-6xl italic md:text-7xl"
                    style={{ color: "#E8D8B5" }}
                  >
                    {phase.number}
                  </span>
                </div>

                <div className="lg:col-span-7">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    {phase.eyebrow}
                  </span>

                  <h2
                    className="mt-5 max-w-[800px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {phase.title}
                  </h2>
                </div>

                <div className="lg:col-span-3 lg:text-right">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
                    Phase {phase.number}
                  </span>
                </div>
              </div>

              {/* STEPS */}
              <div className="space-y-20 md:space-y-24 lg:space-y-32">
                {phase.steps.map((step, index) => (
                  <ProcessStep
                    key={`${step.image}-${index}`}
                    step={step}
                    number={phase.startNumber + index}
                    reverse={index % 2 === 1}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* DARK ATELIER STATEMENT */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  The LIDYA Atelier
                </span>

                <h2
                  className="max-w-[920px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Not selected from a collection.
                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    Created around a person.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  Bespoke jewellery is an exchange of ideas, experience and
                  craftsmanship. Every decision is made with the final wearer
                  in mind.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-brand-white/12 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Personal",
                  text: "Every commission begins with the person, not the product.",
                },
                {
                  number: "02",
                  title: "Handcrafted",
                  text: "The piece moves through our own workshop from concept to finish.",
                },
                {
                  number: "03",
                  title: "One of One",
                  text: "Created to carry a story that no ready-made piece can repeat.",
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

            <div className="mx-auto mt-16 max-w-[980px] text-center md:mt-20">
              <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

              <p
                className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#F5EFE6" }}
              >
                The most personal jewellery
                <span style={{ color: "#E8D8B5" }}>
                  {" "}
                  begins before it exists.
                </span>
              </p>
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