"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  points: GoldPoint[];
  tone?: "light" | "ivory";
  locale: Locale;
  sectionLabel: string;
  valuesLabel: string;
};

type InvestmentCopy = {
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
};

const SUMMARY_ICONS = [
  ShieldCheckIcon,
  TrendUpIcon,
  GemClusterIcon,
  ShieldCheckIcon,
  GlobeIcon,
];

const INVESTMENT_COPY: Record<Locale, InvestmentCopy> = {
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

  ru: {
    hero: {
      discover: "Откройте инвестиционное золото",
      enquiry: "Индивидуальный запрос",
      footerLine: "Золото · Ценность · Постоянство",
      imageAlt: "Слитки чистого золота и инвестиционные монеты",
    },

    intro: {
      eyebrow: "Инвестиционное золото",
      title: "Драгоценный металл.",
      accent: "Непреходящая ценность.",
      description:
        "Другая сторона LIDYA — прозрачность, происхождение, качество и персональный сервис в сфере физического золота.",
      since: "LIDYA · С 1989 ГОДА",
      statement: "Украшения несут эмоции.",
      statementAccent: "Золото также несёт постоянство.",
    },

    editorial: {
      sectionLabel: "Инвестиционное золото",
      valuesLabel: "Ценность · Прозрачность · Доверие",
    },

    section4: {
      description:
        "Инвестиционные решения требуют понятной информации, надёжных продуктов и индивидуального внимания.",
      closing: "Ценность должна быть понятной.",
      closingAccent: "Доверие необходимо заслужить.",
    },

    summary: {
      eyebrow: "Почему инвестиционное золото",
      title: "Пять принципов.",
      accent: "Один непреходящий материал.",
    },
  },

  nl: {
    hero: {
      discover: "Ontdek beleggingsgoud",
      enquiry: "Privéaanvraag",
      footerLine: "Goud · Waarde · Bestendigheid",
      imageAlt: "Fijngoudbaren en beleggingsmunten",
    },

    intro: {
      eyebrow: "Beleggingsgoud",
      title: "Edelmetaal.",
      accent: "Blijvende waarde.",
      description:
        "Een andere kant van LIDYA — gericht op transparantie, herkomst, kwaliteit en persoonlijke service rond fysiek goud.",
      since: "LIDYA · SINDS 1989",
      statement: "Sieraden dragen emotie.",
      statementAccent: "Goud draagt ook bestendigheid.",
    },

    editorial: {
      sectionLabel: "Beleggingsgoud",
      valuesLabel: "Waarde · Duidelijkheid · Vertrouwen",
    },

    section4: {
      description:
        "Beleggingsbeslissingen verdienen duidelijke informatie, betrouwbare producten en persoonlijke aandacht.",
      closing: "Waarde moet worden begrepen.",
      closingAccent: "Vertrouwen moet worden verdiend.",
    },

    summary: {
      eyebrow: "Waarom beleggingsgoud",
      title: "Vijf principes.",
      accent: "Eén tijdloos materiaal.",
    },
  },

  da: {
    hero: {
      discover: "Oplev investeringsguld",
      enquiry: "Privat forespørgsel",
      footerLine: "Guld · Værdi · Bestandighed",
      imageAlt: "Fine guldbarrer og investeringsmønter",
    },

    intro: {
      eyebrow: "Investeringsguld",
      title: "Ædelmetal.",
      accent: "Varig værdi.",
      description:
        "En anden side af LIDYA — med fokus på gennemsigtighed, oprindelse, kvalitet og personlig service omkring fysisk guld.",
      since: "LIDYA · SIDEN 1989",
      statement: "Smykker bærer følelser.",
      statementAccent: "Guld bærer også bestandighed.",
    },

    editorial: {
      sectionLabel: "Investeringsguld",
      valuesLabel: "Værdi · Klarhed · Tillid",
    },

    section4: {
      description:
        "Investeringsbeslutninger fortjener klar information, pålidelige produkter og personlig opmærksomhed.",
      closing: "Værdi skal forstås.",
      closingAccent: "Tillid skal fortjenes.",
    },

    summary: {
      eyebrow: "Hvorfor investeringsguld",
      title: "Fem principper.",
      accent: "Ét bestandigt materiale.",
    },
  },

  fi: {
    hero: {
      discover: "Tutustu sijoituskultaan",
      enquiry: "Yksityinen tiedustelu",
      footerLine: "Kulta · Arvo · Pysyvyys",
      imageAlt: "Hienokultaharkkoja ja sijoituskultakolikoita",
    },

    intro: {
      eyebrow: "Sijoituskulta",
      title: "Jalometalli.",
      accent: "Pysyvä arvo.",
      description:
        "LIDYAn toinen puoli — keskittyen läpinäkyvyyteen, alkuperään, laatuun ja henkilökohtaiseen palveluun fyysisen kullan ympärillä.",
      since: "LIDYA · VUODESTA 1989",
      statement: "Korut kantavat tunteita.",
      statementAccent: "Kulta kantaa myös pysyvyyttä.",
    },

    editorial: {
      sectionLabel: "Sijoituskulta",
      valuesLabel: "Arvo · Selkeys · Luottamus",
    },

    section4: {
      description:
        "Sijoituspäätökset ansaitsevat selkeää tietoa, luotettavia tuotteita ja henkilökohtaista palvelua.",
      closing: "Arvo on ymmärrettävä.",
      closingAccent: "Luottamus on ansaittava.",
    },

    summary: {
      eyebrow: "Miksi sijoituskulta",
      title: "Viisi periaatetta.",
      accent: "Yksi aikaa kestävä materiaali.",
    },
  },

  sv: {
    hero: {
      discover: "Upptäck investeringsguld",
      enquiry: "Privat förfrågan",
      footerLine: "Guld · Värde · Beständighet",
      imageAlt: "Finguldtackor och investeringsmynt",
    },

    intro: {
      eyebrow: "Investeringsguld",
      title: "Ädelmetall.",
      accent: "Bestående värde.",
      description:
        "En annan sida av LIDYA — med fokus på tydlighet, ursprung, kvalitet och personlig service kring fysiskt guld.",
      since: "LIDYA · SEDAN 1989",
      statement: "Smycken bär känslor.",
      statementAccent: "Guld bär också beständighet.",
    },

    editorial: {
      sectionLabel: "Investeringsguld",
      valuesLabel: "Värde · Tydlighet · Trygghet",
    },

    section4: {
      description:
        "Investeringsbeslut förtjänar tydlig information, pålitliga produkter och personlig uppmärksamhet.",
      closing: "Värde bör förstås.",
      closingAccent: "Förtroende måste förtjänas.",
    },

    summary: {
      eyebrow: "Varför investeringsguld",
      title: "Fem principer.",
      accent: "Ett bestående material.",
    },
  },

  fr: {
    hero: {
      discover: "Découvrir l’or d’investissement",
      enquiry: "Demande privée",
      footerLine: "Or · Valeur · Pérennité",
      imageAlt: "Lingots d’or fin et pièces d’investissement",
    },

    intro: {
      eyebrow: "Or d’investissement",
      title: "Métal précieux.",
      accent: "Valeur durable.",
      description:
        "Une autre facette de LIDYA — centrée sur la transparence, la provenance, la qualité et un service personnel autour de l’or physique.",
      since: "LIDYA · DEPUIS 1989",
      statement: "La joaillerie porte l’émotion.",
      statementAccent: "L’or porte aussi la permanence.",
    },

    editorial: {
      sectionLabel: "Or d’investissement",
      valuesLabel: "Valeur · Clarté · Confiance",
    },

    section4: {
      description:
        "Les décisions d’investissement méritent des informations claires, des produits fiables et une attention personnalisée.",
      closing: "La valeur doit être comprise.",
      closingAccent: "La confiance doit être méritée.",
    },

    summary: {
      eyebrow: "Pourquoi l’or d’investissement",
      title: "Cinq principes.",
      accent: "Un matériau intemporel.",
    },
  },

  it: {
    hero: {
      discover: "Scoprite l’oro da investimento",
      enquiry: "Richiesta privata",
      footerLine: "Oro · Valore · Permanenza",
      imageAlt: "Lingotti d’oro fino e monete da investimento",
    },

    intro: {
      eyebrow: "Oro da investimento",
      title: "Metallo prezioso.",
      accent: "Valore duraturo.",
      description:
        "Un lato diverso di LIDYA — dedicato a trasparenza, provenienza, qualità e servizio personale nel mondo dell’oro fisico.",
      since: "LIDYA · DAL 1989",
      statement: "I gioielli portano emozione.",
      statementAccent: "L’oro porta anche permanenza.",
    },

    editorial: {
      sectionLabel: "Oro da investimento",
      valuesLabel: "Valore · Chiarezza · Fiducia",
    },

    section4: {
      description:
        "Le decisioni di investimento meritano informazioni chiare, prodotti affidabili e attenzione personale.",
      closing: "Il valore deve essere compreso.",
      closingAccent: "La fiducia deve essere conquistata.",
    },

    summary: {
      eyebrow: "Perché l’oro da investimento",
      title: "Cinque principi.",
      accent: "Un materiale duraturo.",
    },
  },

  es: {
    hero: {
      discover: "Descubra el oro de inversión",
      enquiry: "Consulta privada",
      footerLine: "Oro · Valor · Permanencia",
      imageAlt: "Lingotes de oro fino y monedas de inversión",
    },

    intro: {
      eyebrow: "Oro de inversión",
      title: "Metal precioso.",
      accent: "Valor duradero.",
      description:
        "Otra faceta de LIDYA — centrada en la transparencia, la procedencia, la calidad y el servicio personal relacionado con el oro físico.",
      since: "LIDYA · DESDE 1989",
      statement: "La joyería transmite emoción.",
      statementAccent: "El oro también transmite permanencia.",
    },

    editorial: {
      sectionLabel: "Oro de inversión",
      valuesLabel: "Valor · Claridad · Confianza",
    },

    section4: {
      description:
        "Las decisiones de inversión merecen información clara, productos fiables y atención personalizada.",
      closing: "El valor debe comprenderse.",
      closingAccent: "La confianza debe ganarse.",
    },

    summary: {
      eyebrow: "Por qué oro de inversión",
      title: "Cinco principios.",
      accent: "Un material perdurable.",
    },
  },
};

function GoldEditorialSection({
  eyebrow,
  title,
  points,
  tone = "light",
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
        <div className="mx-auto mb-16 max-w-[1000px] border-b border-plum-dark/10 pb-12 text-center md:mb-20 md:pb-14 lg:mb-24">
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </span>

          <h2
            className="mx-auto mt-5 max-w-[850px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
            style={{ color: "#1B0B20" }}
          >
            {title}
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40 md:text-[0.58rem]">
              {sectionLabel}
            </span>

            <span className="h-px w-10 bg-gold" />
          </div>
        </div>

        <div className="space-y-20 md:space-y-24 lg:space-y-28">
          {points.map((point, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={`${index}-${localized(point.title, locale)}`}
                className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-14"
              >
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
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4a3515] via-[#1b0b20] to-[#0f0712] text-gold">
                        <TrendUpIcon />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/60 via-plum-dark/5 to-transparent" />

                    <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4 px-5 text-center md:bottom-8">
                      <span className="h-px w-9 bg-gold md:w-10" />

                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-brand-white/80 md:text-[0.58rem] md:tracking-[0.24em]">
                        LIDYA · {sectionLabel}
                      </span>

                      <span className="h-px w-9 bg-gold md:w-10" />
                    </div>

                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>

                <div
                  className={
                    reverse
                      ? "text-center lg:order-1 lg:col-span-5"
                      : "text-center lg:col-span-5"
                  }
                >
                  <span className="mx-auto block h-px w-12 bg-gold" />

                  <h3
                    className="mx-auto mt-7 max-w-[560px] font-display text-4xl leading-[0.98] tracking-[-0.025em] md:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {localized(point.title, locale)}
                  </h3>

                  <p className="mx-auto mt-6 max-w-[500px] text-sm leading-7 text-grey md:text-base">
                    {localized(point.description, locale)}
                  </p>

                  <div className="mt-8 flex items-center justify-center gap-4">
                    <span className="h-px w-9 bg-gold md:w-10" />

                    <span className="max-w-[340px] text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/45 md:text-[0.58rem] md:tracking-[0.22em]">
                      {valuesLabel}
                    </span>

                    <span className="h-px w-9 bg-gold md:w-10" />
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

  const copy: InvestmentCopy =
    INVESTMENT_COPY[locale] ?? INVESTMENT_COPY.en;

  const heroRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const pointerTarget = useRef({
    x: 0,
    y: 0,
  });

  const pointerCurrent = useRef({
    x: 0,
    y: 0,
  });

  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  const [heroLoaded, setHeroLoaded] = useState(false);

  const t = (key: string): string => {
    const value = GOLD_TEXT[key];

    if (!value) {
      return "";
    }

    return localized(value, locale);
  };

  useEffect(() => {
    const hero = heroRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!hero || !imageWrap || !content || !glow) {
      setHeroLoaded(true);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    const loadTimer = window.setTimeout(() => {
      setHeroLoaded(true);
    }, 70);

    if (reducedMotion || !finePointer) {
      return () => {
        window.clearTimeout(loadTimer);
      };
    }

    const updatePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) /
          Math.max(rect.width, 1) -
          0.5) *
        2;

      const y =
        ((event.clientY - rect.top) /
          Math.max(rect.height, 1) -
          0.5) *
        2;

      pointerTarget.current.x = Math.max(
        -1,
        Math.min(1, x)
      );

      pointerTarget.current.y = Math.max(
        -1,
        Math.min(1, y)
      );
    };

    const resetPointer = () => {
      pointerTarget.current.x = 0;
      pointerTarget.current.y = 0;
    };

    const updateScroll = () => {
      const rect = hero.getBoundingClientRect();

      const total = Math.max(
        hero.offsetHeight,
        1
      );

      const progress = Math.max(
        0,
        Math.min(
          1,
          Math.abs(Math.min(rect.top, 0)) / total
        )
      );

      scrollTarget.current = progress;
    };

    const animate = () => {
      pointerCurrent.current.x +=
        (pointerTarget.current.x -
          pointerCurrent.current.x) *
        0.045;

      pointerCurrent.current.y +=
        (pointerTarget.current.y -
          pointerCurrent.current.y) *
        0.045;

      scrollCurrent.current +=
        (scrollTarget.current -
          scrollCurrent.current) *
        0.065;

      const x = pointerCurrent.current.x;
      const y = pointerCurrent.current.y;
      const scroll = scrollCurrent.current;

      const imageX = x * 10;
      const imageY = y * 6 - scroll * 22;
      const imageScale =
        1.045 + scroll * 0.014;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      const contentX = x * -2;
      const contentY =
        y * -1.2 - scroll * 4;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      const glowX = 50 + x * 9;
      const glowY = 42 + y * 7;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(255,231,177,0.18) 0%,
          rgba(200,169,106,0.11) 18%,
          rgba(200,169,106,0.05) 31%,
          rgba(255,255,255,0) 54%
        )
      `;

      frameRef.current =
        requestAnimationFrame(animate);
    };

    hero.addEventListener(
      "pointermove",
      updatePointer
    );

    hero.addEventListener(
      "pointerleave",
      resetPointer
    );

    window.addEventListener(
      "scroll",
      updateScroll,
      {
        passive: true,
      }
    );

    updateScroll();

    frameRef.current =
      requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener(
        "pointermove",
        updatePointer
      );

      hero.removeEventListener(
        "pointerleave",
        resetPointer
      );

      window.removeEventListener(
        "scroll",
        updateScroll
      );

      if (frameRef.current !== null) {
        cancelAnimationFrame(
          frameRef.current
        );
      }

      window.clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          ref={heroRef}
          className="relative min-h-[760px] overflow-hidden bg-plum-dark pt-[108px] md:min-h-[900px] md:pt-36 lg:min-h-screen lg:pt-40"
        >
          {/* HERO IMAGE */}
          <div
            ref={imageWrapRef}
            className={`absolute inset-[-3%] will-change-transform transition-[opacity,filter,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              heroLoaded
                ? "opacity-100 blur-0"
                : "opacity-0 blur-[2px]"
            }`}
            style={{
              transform: heroLoaded
                ? "translate3d(0,0,0) scale(1.045)"
                : "translate3d(0,0,0) scale(1.08)",
            }}
          >
            <Image
              src="/images/investment-gold/investment-gold-hero.png"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* DARK OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-plum-dark/64 md:bg-plum-dark/58 lg:bg-plum-dark/52" />

          {/* LOWER SHADOW */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-dark/85 via-transparent to-plum-dark/28" />

          {/* DYNAMIC GOLD LIGHT */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute inset-0"
          />

          {/* SOFT STATIC GOLD LIGHT */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.08),transparent_55%)]" />

          {/* VIGNETTE */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(10,4,13,0.18)_100%)]" />

          {/* CONTENT */}
          <div
            ref={contentRef}
            className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] items-center justify-center px-6 pb-16 pt-12 text-center will-change-transform md:min-h-[760px] md:px-10 md:pb-20 lg:min-h-[calc(100vh-80px)] lg:px-16 lg:pb-24 xl:px-20"
          >
            <div className="mx-auto max-w-[960px]">
              {/* EYEBROW */}
              <div
                className={`flex items-center justify-center gap-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-4 ${
                  heroLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: "120ms",
                }}
              >
                <span className="flex h-10 w-10 items-center justify-center text-gold">
                  <TrendUpIcon />
                </span>

                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
                  {t("heroEyebrow")}
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="mx-auto mt-7 max-w-[980px] overflow-hidden font-display text-[2.9rem] leading-[0.92] tracking-[-0.04em] sm:text-[3.25rem] md:text-7xl lg:text-[6.5rem]"
                style={{ color: "#F5EFE6" }}
              >
                <span
                  className={`block transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    heroLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[28%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: "230ms",
                  }}
                >
                  {t("heroTitle")}
                </span>
              </h1>

              {/* LEAD */}
              <div
                className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  heroLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: "420ms",
                }}
              >
                <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-brand-white/70 md:mt-8 md:text-base">
                  {t("heroLead")}
                </p>
              </div>

              {/* BUTTONS */}
              <div
                className={`mt-9 flex flex-col items-center justify-center gap-5 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex-row sm:flex-wrap md:mt-10 ${
                  heroLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: "560ms",
                }}
              >
                <a
                  href="#gold-details"
                  className="group inline-flex min-w-[245px] items-center justify-center gap-6 bg-gold px-8 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-all duration-500 hover:bg-gold-light md:text-[0.66rem] md:tracking-[0.2em]"
                >
                  {copy.hero.discover}

                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>

                <a
                  href="/#contact"
                  className="group relative inline-flex items-center gap-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white md:text-[0.66rem] md:tracking-[0.2em]"
                >
                  {copy.hero.enquiry}

                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>

                  <span className="absolute bottom-1 left-0 h-px w-full bg-brand-white/35 transition-colors duration-500 group-hover:bg-gold" />
                </a>
              </div>

              {/* FOOTER LINE */}
              <div
                className={`mt-12 flex items-center justify-center gap-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:mt-14 ${
                  heroLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: "700ms",
                }}
              >
                <span className="h-px w-10 bg-gold/70 md:w-12" />

                <span className="text-[0.54rem] uppercase tracking-[0.25em] text-brand-white/45 md:text-[0.58rem] md:tracking-[0.3em]">
                  {copy.hero.footerLine}
                </span>

                <span className="h-px w-10 bg-gold/70 md:w-12" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section
          id="gold-details"
          className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-gold/7 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-[1000px] text-center">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.64rem] md:tracking-[0.32em]">
                {copy.intro.eyebrow}
              </span>

              <h2
                className="mx-auto mt-6 max-w-[950px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
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

              <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-grey md:text-base">
                {copy.intro.description}
              </p>

              <div className="mt-7 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-gold md:w-12" />

                <span className="text-[0.54rem] font-semibold uppercase tracking-[0.21em] text-plum-dark/45 md:text-[0.58rem] md:tracking-[0.24em]">
                  {copy.intro.since}
                </span>

                <span className="h-px w-10 bg-gold md:w-12" />
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-[1050px] border-t border-plum-dark/10 pt-12 text-center">
              <p
                className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
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

        {/* =====================================================
            SECTION 1
        ====================================================== */}
        <GoldEditorialSection
          eyebrow={t("section1Eyebrow")}
          title={t("section1Title")}
          points={[...SECTION_1_POINTS]}
          tone="light"
          locale={locale}
          sectionLabel={copy.editorial.sectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* =====================================================
            SECTION 2
        ====================================================== */}
        <GoldEditorialSection
          eyebrow={t("section2Eyebrow")}
          title={t("section2Title")}
          points={[...SECTION_2_POINTS]}
          tone="ivory"
          locale={locale}
          sectionLabel={copy.editorial.sectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* =====================================================
            SECTION 3
        ====================================================== */}
        <GoldEditorialSection
          eyebrow={t("section3Eyebrow")}
          title={t("section3Title")}
          points={[...SECTION_3_POINTS]}
          tone="light"
          locale={locale}
          sectionLabel={copy.editorial.sectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* =====================================================
            DARK TRUST SECTION
        ====================================================== */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-[1000px] text-center">
              <span className="mb-5 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
                {t("section4Eyebrow")}
              </span>

              <h2
                className="mx-auto max-w-[950px] font-display text-4xl leading-[0.97] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                style={{ color: "#F5EFE6" }}
              >
                {t("section4Title")}
              </h2>

              <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-brand-white/55 md:text-base">
                {copy.section4.description}
              </p>

              <span className="mx-auto mt-9 block h-px w-14 bg-gold" />
            </div>

            <div className="mx-auto mt-14 grid max-w-[1200px] border-t border-brand-white/12 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {SECTION_4_POINTS.map((point, index) => (
                <div
                  key={`${index}-${localized(point.title, locale)}`}
                  className="group border-b border-brand-white/12 px-3 py-10 text-center md:border-r md:px-7 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <div className="mx-auto flex h-10 items-center justify-center">
                    <span className="h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
                  </div>

                  <h3
                    className="mt-5 font-display text-2xl md:text-3xl"
                    style={{ color: "#F5EFE6" }}
                  >
                    {localized(point.title, locale)}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[320px] text-sm leading-7 text-brand-white/60">
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

        {/* =====================================================
            SUMMARY
        ====================================================== */}
        <section className="bg-ivory py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto mb-14 max-w-[900px] text-center">
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

              <span className="mx-auto mt-8 block h-px w-14 bg-gold" />
            </div>

            <div className="grid border-t border-plum-dark/10 md:grid-cols-2 lg:grid-cols-5">
              {SUMMARY_POINTS.map((summary, index) => {
                const Icon =
                  SUMMARY_ICONS[index % SUMMARY_ICONS.length];

                return (
                  <div
                    key={`${index}-${localized(summary, locale)}`}
                    className="group border-b border-plum-dark/10 px-4 py-9 text-center md:border-r md:px-6 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center text-gold transition-transform duration-500 group-hover:-translate-y-1">
                      <Icon />
                    </div>

                    <span className="mx-auto mt-7 block h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />

                    <p
                      className="mx-auto mt-5 max-w-[240px] font-display text-xl leading-snug md:text-2xl"
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

        {/* =====================================================
            CTA
        ====================================================== */}
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