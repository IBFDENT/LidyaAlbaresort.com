"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCTA from "@/components/category/CategoryCTA";

import {
  ShieldCheckIcon,
  TrendUpIcon,
  GemClusterIcon,
  GlobeIcon,
} from "@/components/category/icons";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";
import { localized } from "@/lib/content";

import {
  GOLD_TEXT,
  SECTION_1_POINTS,
  SECTION_2_POINTS,
  SECTION_3_POINTS,
  SECTION_4_POINTS,
  SUMMARY_POINTS,
} from "@/lib/investmentGold";

type GoldPoint =
  | (typeof SECTION_1_POINTS)[number]
  | (typeof SECTION_2_POINTS)[number]
  | (typeof SECTION_3_POINTS)[number];

type GoldSectionProps = {
  eyebrow: string;
  title: string;
  number: string;
  points: GoldPoint[];
  tone?: "light" | "ivory";
  startNumber: number;
  locale: Locale;
  sectionLabel: string;
  valuesLabel: string;
};

const SUMMARY_ICONS = [
  ShieldCheckIcon,
  TrendUpIcon,
  GemClusterIcon,
  ShieldCheckIcon,
  GlobeIcon,
];

const INVESTMENT_COPY: Record<
  Locale,
  {
    hero: {
      discover: string;
      enquiry: string;
      footerLine: string;
      imageAlt: string;
    };
    intro: {
      eyebrow: string;
      title: string;
      accent: string;
      description: string;
      since: string;
      statement: string;
      statementAccent: string;
    };
    editorial: {
      sectionLabel: string;
      valuesLabel: string;
    };
    section4: {
      description: string;
      closing: string;
      closingAccent: string;
    };
    summary: {
      eyebrow: string;
      title: string;
      accent: string;
    };
  }
> = {
  en: {
    hero: {
      discover: "Discover Investment Gold",
      enquiry: "Private Enquiry",
      footerLine: "Gold · Value · Permanence",
      imageAlt: "Fine gold bars and investment coins",
    },
    intro: {
      eyebrow: "Investment Gold",
      title: "Precious metal.",
      accent: "Enduring value.",
      description:
        "A different side of LIDYA — focused on clarity, provenance, quality and personal service around physical gold.",
      since: "LIDYA · SINCE 1989",
      statement: "Jewellery carries emotion.",
      statementAccent: "Gold also carries permanence.",
    },
    editorial: {
      sectionLabel: "Investment Gold",
      valuesLabel: "Value · Clarity · Confidence",
    },
    section4: {
      description:
        "Investment decisions deserve clear information, trusted products and personal attention.",
      closing: "Value should be understood.",
      closingAccent: "Trust should be earned.",
    },
    summary: {
      eyebrow: "Why Investment Gold",
      title: "Five principles.",
      accent: "One enduring material.",
    },
  },

  de: {
    hero: {
      discover: "Investmentgold entdecken",
      enquiry: "Private Anfrage",
      footerLine: "Gold · Wert · Beständigkeit",
      imageAlt: "Feingoldbarren und Anlagemünzen",
    },
    intro: {
      eyebrow: "Investmentgold",
      title: "Edelmetall.",
      accent: "Bleibender Wert.",
      description:
        "Eine andere Seite von LIDYA — mit Fokus auf Transparenz, Herkunft, Qualität und persönlichen Service rund um physisches Gold.",
      since: "LIDYA · SEIT 1989",
      statement: "Schmuck trägt Emotionen.",
      statementAccent: "Gold trägt auch Beständigkeit.",
    },
    editorial: {
      sectionLabel: "Investmentgold",
      valuesLabel: "Wert · Klarheit · Vertrauen",
    },
    section4: {
      description:
        "Investitionsentscheidungen verdienen klare Informationen, vertrauenswürdige Produkte und persönliche Betreuung.",
      closing: "Wert sollte verstanden werden.",
      closingAccent: "Vertrauen muss verdient werden.",
    },
    summary: {
      eyebrow: "Warum Investmentgold",
      title: "Fünf Prinzipien.",
      accent: "Ein beständiges Material.",
    },
  },

  tr: {
    hero: {
      discover: "Yatırım Altınını Keşfedin",
      enquiry: "Özel Bilgi Talebi",
      footerLine: "Altın · Değer · Kalıcılık",
      imageAlt: "Saf altın külçeleri ve yatırım altınları",
    },
    intro: {
      eyebrow: "Yatırım Altını",
      title: "Değerli metal.",
      accent: "Kalıcı değer.",
      description:
        "LIDYA'nın farklı bir yönü — fiziksel altın konusunda şeffaflık, kaynak, kalite ve kişisel hizmete odaklanır.",
      since: "LIDYA · 1989'DAN BERİ",
      statement: "Mücevher duygu taşır.",
      statementAccent: "Altın aynı zamanda kalıcılık taşır.",
    },
    editorial: {
      sectionLabel: "Yatırım Altını",
      valuesLabel: "Değer · Şeffaflık · Güven",
    },
    section4: {
      description:
        "Yatırım kararları açık bilgi, güvenilir ürünler ve kişisel ilgi gerektirir.",
      closing: "Değer anlaşılmalıdır.",
      closingAccent: "Güven kazanılmalıdır.",
    },
    summary: {
      eyebrow: "Neden Yatırım Altını",
      title: "Beş ilke.",
      accent: "Tek bir kalıcı malzeme.",
    },
  },

  sk: {
    hero: {
      discover: "Objaviť investičné zlato",
      enquiry: "Súkromná konzultácia",
      footerLine: "Zlato · Hodnota · Trvácnosť",
      imageAlt: "Rýdze zlaté tehličky a investičné mince",
    },
    intro: {
      eyebrow: "Investičné zlato",
      title: "Vzácny kov.",
      accent: "Trvalá hodnota.",
      description:
        "Iná stránka LIDYA — zameraná na transparentnosť, pôvod, kvalitu a osobný servis pri fyzickom zlate.",
      since: "LIDYA · OD ROKU 1989",
      statement: "Šperk nesie emóciu.",
      statementAccent: "Zlato nesie aj trvácnosť.",
    },
    editorial: {
      sectionLabel: "Investičné zlato",
      valuesLabel: "Hodnota · Jasnosť · Dôvera",
    },
    section4: {
      description:
        "Investičné rozhodnutia si zaslúžia jasné informácie, dôveryhodné produkty a osobný prístup.",
      closing: "Hodnote treba rozumieť.",
      closingAccent: "Dôveru si treba zaslúžiť.",
    },
    summary: {
      eyebrow: "Prečo investičné zlato",
      title: "Päť princípov.",
      accent: "Jeden trvácny materiál.",
    },
  },

  cs: {
    hero: {
      discover: "Objevit investiční zlato",
      enquiry: "Soukromá konzultace",
      footerLine: "Zlato · Hodnota · Trvalost",
      imageAlt: "Ryzí zlaté slitky a investiční mince",
    },
    intro: {
      eyebrow: "Investiční zlato",
      title: "Vzácný kov.",
      accent: "Trvalá hodnota.",
      description:
        "Jiná stránka LIDYA — zaměřená na transparentnost, původ, kvalitu a osobní servis kolem fyzického zlata.",
      since: "LIDYA · OD ROKU 1989",
      statement: "Šperk nese emoci.",
      statementAccent: "Zlato nese také trvalost.",
    },
    editorial: {
      sectionLabel: "Investiční zlato",
      valuesLabel: "Hodnota · Jasnost · Důvěra",
    },
    section4: {
      description:
        "Investiční rozhodnutí si zaslouží jasné informace, důvěryhodné produkty a osobní přístup.",
      closing: "Hodnotě je třeba rozumět.",
      closingAccent: "Důvěru je třeba si zasloužit.",
    },
    summary: {
      eyebrow: "Proč investiční zlato",
      title: "Pět principů.",
      accent: "Jeden trvalý materiál.",
    },
  },

  hu: {
    hero: {
      discover: "Befektetési arany felfedezése",
      enquiry: "Privát érdeklődés",
      footerLine: "Arany · Érték · Állandóság",
      imageAlt: "Finomarany rudak és befektetési érmék",
    },
    intro: {
      eyebrow: "Befektetési arany",
      title: "Nemesfém.",
      accent: "Tartós érték.",
      description:
        "A LIDYA egy másik oldala — az átláthatóságra, eredetre, minőségre és a fizikai aranyhoz kapcsolódó személyes szolgáltatásra összpontosítva.",
      since: "LIDYA · 1989 ÓTA",
      statement: "Az ékszer érzelmet hordoz.",
      statementAccent: "Az arany állandóságot is hordoz.",
    },
    editorial: {
      sectionLabel: "Befektetési arany",
      valuesLabel: "Érték · Átláthatóság · Bizalom",
    },
    section4: {
      description:
        "A befektetési döntések világos információt, megbízható termékeket és személyes figyelmet érdemelnek.",
      closing: "Az értéket érteni kell.",
      closingAccent: "A bizalmat ki kell érdemelni.",
    },
    summary: {
      eyebrow: "Miért befektetési arany",
      title: "Öt alapelv.",
      accent: "Egy időtálló anyag.",
    },
  },

  pl: {
    hero: {
      discover: "Odkryj złoto inwestycyjne",
      enquiry: "Prywatne zapytanie",
      footerLine: "Złoto · Wartość · Trwałość",
      imageAlt: "Sztabki czystego złota i monety inwestycyjne",
    },
    intro: {
      eyebrow: "Złoto inwestycyjne",
      title: "Metal szlachetny.",
      accent: "Trwała wartość.",
      description:
        "Inna strona LIDYA — skoncentrowana na przejrzystości, pochodzeniu, jakości i osobistej obsłudze związanej z fizycznym złotem.",
      since: "LIDYA · OD 1989 ROKU",
      statement: "Biżuteria niesie emocje.",
      statementAccent: "Złoto niesie także trwałość.",
    },
    editorial: {
      sectionLabel: "Złoto inwestycyjne",
      valuesLabel: "Wartość · Przejrzystość · Zaufanie",
    },
    section4: {
      description:
        "Decyzje inwestycyjne wymagają jasnych informacji, zaufanych produktów i osobistego podejścia.",
      closing: "Wartość należy rozumieć.",
      closingAccent: "Na zaufanie trzeba zasłużyć.",
    },
    summary: {
      eyebrow: "Dlaczego złoto inwestycyjne",
      title: "Pięć zasad.",
      accent: "Jeden trwały materiał.",
    },
  },
};

function GoldEditorialSection({
  eyebrow,
  title,
  number,
  points,
  tone = "light",
  startNumber,
  locale,
  sectionLabel,
  valuesLabel,
}: GoldSectionProps) {
  return (
    <section
      className={
        tone === "ivory"
          ? "bg-ivory py-20 md:py-28 lg:py-32"
          : "bg-brand-white py-20 md:py-28 lg:py-32"
      }
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 grid gap-8 border-b border-plum-dark/10 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
            <span
              className="font-display text-6xl italic leading-none md:text-7xl"
              style={{ color: "#E8D8B5" }}
            >
              {number}
            </span>
          </div>

          <div className="lg:col-span-7">
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </span>

            <h2
              className="mt-5 max-w-[820px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {title}
            </h2>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
              {sectionLabel}
            </span>
          </div>
        </div>

        <div className="space-y-20 md:space-y-24 lg:space-y-28">
          {points.map((point, index) => {
            const reverse = index % 2 === 1;
            const itemNumber = startNumber + index;

            return (
              <article
                key={`${itemNumber}-${localized(point.title, locale)}`}
                className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14"
              >
                {/* IMAGE */}
                <div
                  className={
                    reverse
                      ? "lg:order-2 lg:col-span-7"
                      : "lg:col-span-7"
                  }
                >
                  <div className="group relative aspect-[5/4] overflow-hidden bg-plum-dark">
                    {point.image ? (
                      <Image
                        src={point.image}
                        alt={
                          point.imageAlt ??
                          localized(point.title, locale)
                        }
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4a3515] via-[#1b0b20] to-[#0f0712]">
                        <TrendUpIcon />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/60 via-plum-dark/5 to-transparent" />

                    <span className="absolute right-6 top-6 text-[0.58rem] font-semibold tracking-[0.22em] text-brand-white/70 md:right-8 md:top-8">
                      {String(itemNumber).padStart(2, "0")}
                    </span>

                    <div className="absolute bottom-6 left-6 flex items-center gap-4 md:bottom-8 md:left-8">
                      <span className="h-px w-10 bg-gold" />

                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/75">
                        LIDYA · {sectionLabel}
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
                  <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                    {String(itemNumber).padStart(2, "0")}
                  </span>

                  <h3
                    className="mt-6 max-w-lg font-display text-4xl leading-[0.98] tracking-[-0.025em] md:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {localized(point.title, locale)}
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
                    {localized(point.description, locale)}
                  </p>

                  <div className="mt-8 flex items-center gap-5">
                    <span className="h-px w-10 bg-gold" />

                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
                      {valuesLabel}
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

export default function InvestmentGoldContent() {
  const { locale } = useLanguage();
  const copy = INVESTMENT_COPY[locale];

  const t = (key: keyof typeof GOLD_TEXT) =>
    localized(GOLD_TEXT[key], locale);

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[760px] overflow-hidden bg-plum-dark pt-32 md:pt-36 lg:min-h-screen lg:pt-40">
          <Image
            src="/images/investment-gold/investment-gold-hero.png"
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/95 via-plum-dark/65 to-plum-dark/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/80 via-transparent to-plum-dark/20" />

          <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1440px] items-end px-6 pb-20 md:px-10 md:pb-24 lg:min-h-[calc(100vh-80px)] lg:px-16 lg:pb-28 xl:px-20">
            <div className="max-w-[850px]">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center text-gold">
                  <TrendUpIcon />
                </span>

                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  {t("heroEyebrow")}
                </span>
              </div>

              <h1
                className="mt-8 max-w-[980px] font-display text-5xl leading-[0.9] tracking-[-0.035em] md:text-7xl lg:text-[6.5rem]"
                style={{ color: "#F5EFE6" }}
              >
                {t("heroTitle")}
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-brand-white/70 md:text-base">
                {t("heroLead")}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-7">
                <a
                  href="#gold-details"
                  className="group inline-flex items-center gap-6 bg-gold px-8 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light"
                >
                  {copy.hero.discover}

                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white"
                >
                  {copy.hero.enquiry}

                  <span>→</span>

                  <span className="absolute bottom-1 left-0 h-px w-full bg-brand-white/35 transition-colors duration-500 group-hover:bg-gold" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-4 md:flex lg:right-16">
            <span className="text-[0.58rem] uppercase tracking-[0.3em] text-brand-white/45">
              {copy.hero.footerLine}
            </span>

            <span className="h-px w-12 bg-gold/70" />
          </div>
        </section>

        {/* INTRO */}
        <section
          id="gold-details"
          className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-gold/7 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  {copy.intro.eyebrow}
                </span>

                <h2
                  className="mt-6 max-w-[950px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.intro.title}

                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    {copy.intro.accent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  {copy.intro.description}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/45">
                    {copy.intro.since}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-plum-dark/10 pt-12">
              <p
                className="max-w-[1050px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.intro.statement}

                <span style={{ color: "#C8A96A" }}>
                  {" "}
                  {copy.intro.statementAccent}
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION I */}
        <GoldEditorialSection
          eyebrow={t("section1Eyebrow")}
          title={t("section1Title")}
          number="I"
          points={[...SECTION_1_POINTS]}
          startNumber={1}
          tone="light"
          locale={locale}
          sectionLabel={copy.editorial.sectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* SECTION II */}
        <GoldEditorialSection
          eyebrow={t("section2Eyebrow")}
          title={t("section2Title")}
          number="II"
          points={[...SECTION_2_POINTS]}
          startNumber={1 + SECTION_1_POINTS.length}
          tone="ivory"
          locale={locale}
          sectionLabel={copy.editorial.sectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* SECTION III */}
        <GoldEditorialSection
          eyebrow={t("section3Eyebrow")}
          title={t("section3Title")}
          number="III"
          points={[...SECTION_3_POINTS]}
          startNumber={
            1 +
            SECTION_1_POINTS.length +
            SECTION_2_POINTS.length
          }
          tone="light"
          locale={locale}
          sectionLabel={copy.editorial.sectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* SECTION IV */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 border-b border-brand-white/12 pb-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  {t("section4Eyebrow")}
                </span>

                <h2
                  className="max-w-[950px] font-display text-4xl leading-[0.97] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {t("section4Title")}
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {copy.section4.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {SECTION_4_POINTS.map((point, index) => (
                <div
                  key={localized(point.title, locale)}
                  className="group border-b border-brand-white/12 py-9 md:border-r md:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-8 bg-brand-white/15 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
                  </div>

                  <h3
                    className="mt-8 font-display text-2xl md:text-3xl"
                    style={{ color: "#F5EFE6" }}
                  >
                    {localized(point.title, locale)}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
                    {localized(point.description, locale)}
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
                {copy.section4.closing}

                <span style={{ color: "#E8D8B5" }}>
                  {" "}
                  {copy.section4.closingAccent}
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
                {copy.summary.eyebrow}
              </span>

              <h2
                className="mx-auto mt-6 max-w-[850px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.summary.title}

                <span
                  className="block italic"
                  style={{ color: "#C8A96A" }}
                >
                  {copy.summary.accent}
                </span>
              </h2>
            </div>

            <div className="grid border-t border-plum-dark/10 md:grid-cols-2 lg:grid-cols-5">
              {SUMMARY_POINTS.map((summary, index) => {
                const Icon =
                  SUMMARY_ICONS[index % SUMMARY_ICONS.length];

                return (
                  <div
                    key={`${index}-${localized(summary, locale)}`}
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
                      {localized(summary, locale)}
                    </p>
                  </div>
                );
              })}
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