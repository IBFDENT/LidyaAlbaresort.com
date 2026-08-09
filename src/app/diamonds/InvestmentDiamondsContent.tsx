"use client";

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

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";
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

const SUMMARY_ICONS = [
  DiamondIcon,
  GemClusterIcon,
  ShieldCheckIcon,
  GlobeIcon,
  TrendUpIcon,
];

type DiamondPoint = (typeof FOUR_CS)[number];

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
  locale: Locale;
  tone?: "white" | "ivory";
  expertiseLabel: string;
  selectionLabel: string;
  valuesLabel: string;
};

const DIAMOND_COPY: Record<
  Locale,
  {
    hero: {
      since: string;
      eyebrowRight: string;
      statement: string;
      statementAccent: string;
      imageAlt: string;
    };
    intro: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
    };
    editorial: {
      expertiseLabel: string;
      selectionLabel: string;
      valuesLabel: string;
    };
    trust: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      points: {
        title: string;
        text: string;
      }[];
      closing: string;
      closingAccent: string;
    };
    summary: {
      eyebrow: string;
      title: string;
      titleAccent: string;
    };
  }
> = {
  en: {
    hero: {
      since: "LIDYA · SINCE 1989",
      eyebrowRight: "Light perfected",
      statement: "Beauty catches the eye.",
      statementAccent: "Quality withstands scrutiny.",
      imageAlt: "Investment diamonds by LIDYA JEWELRY",
    },
    intro: {
      eyebrow: "Diamond Expertise",
      title: "Every diamond begins with",
      titleAccent: "measurable quality.",
      description:
        "A fine diamond is more than brilliance alone. Proportion, grading, rarity and certification all contribute to its character and long-term value.",
    },
    editorial: {
      expertiseLabel: "Diamond Expertise",
      selectionLabel: "LIDYA Diamond Selection",
      valuesLabel: "Precision · Rarity · Confidence",
    },
    trust: {
      eyebrow: "Certified Confidence",
      title: "Rarity deserves",
      titleAccent: "independent proof.",
      description:
        "Certification, transparency and independent grading provide the foundation for informed diamond selection.",
      points: [
        {
          title: "Certified",
          text:
            "Independent grading documents the measurable characteristics of the stone.",
        },
        {
          title: "Traceable",
          text:
            "Clear documentation supports confidence in origin, identity and quality.",
        },
        {
          title: "Selected",
          text:
            "Numbers matter, but final selection still depends on expert human judgement.",
        },
      ],
      closing: "Brilliance attracts attention.",
      closingAccent: "Confidence comes from knowledge.",
    },
    summary: {
      eyebrow: "Diamond Fundamentals",
      title: "Five things worth",
      titleAccent: "understanding clearly.",
    },
  },

  de: {
    hero: {
      since: "LIDYA · SEIT 1989",
      eyebrowRight: "Perfektioniertes Licht",
      statement: "Schönheit zieht den Blick an.",
      statementAccent: "Qualität hält genauer Prüfung stand.",
      imageAlt: "Investmentdiamanten von LIDYA JEWELRY",
    },
    intro: {
      eyebrow: "Diamant-Expertise",
      title: "Jeder Diamant beginnt mit",
      titleAccent: "messbarer Qualität.",
      description:
        "Ein feiner Diamant ist mehr als nur Brillanz. Proportion, Bewertung, Seltenheit und Zertifizierung tragen alle zu seinem Charakter und langfristigen Wert bei.",
    },
    editorial: {
      expertiseLabel: "Diamant-Expertise",
      selectionLabel: "LIDYA Diamantenauswahl",
      valuesLabel: "Präzision · Seltenheit · Vertrauen",
    },
    trust: {
      eyebrow: "Zertifizierte Sicherheit",
      title: "Seltenheit verdient",
      titleAccent: "unabhängigen Nachweis.",
      description:
        "Zertifizierung, Transparenz und unabhängige Bewertung bilden die Grundlage für eine fundierte Diamantenauswahl.",
      points: [
        {
          title: "Zertifiziert",
          text:
            "Eine unabhängige Bewertung dokumentiert die messbaren Eigenschaften des Steins.",
        },
        {
          title: "Nachvollziehbar",
          text:
            "Klare Dokumentation schafft Vertrauen in Herkunft, Identität und Qualität.",
        },
        {
          title: "Ausgewählt",
          text:
            "Zahlen sind wichtig, doch die endgültige Auswahl hängt weiterhin von fachkundigem menschlichem Urteil ab.",
        },
      ],
      closing: "Brillanz zieht Aufmerksamkeit an.",
      closingAccent: "Vertrauen entsteht durch Wissen.",
    },
    summary: {
      eyebrow: "Grundlagen von Diamanten",
      title: "Fünf Dinge, die man",
      titleAccent: "klar verstehen sollte.",
    },
  },

  tr: {
    hero: {
      since: "LIDYA · 1989'DAN BERİ",
      eyebrowRight: "Mükemmelleştirilmiş ışık",
      statement: "Güzellik gözü yakalar.",
      statementAccent: "Kalite incelemeye dayanır.",
      imageAlt: "LIDYA JEWELRY yatırım pırlantaları",
    },
    intro: {
      eyebrow: "Pırlanta Uzmanlığı",
      title: "Her pırlanta",
      titleAccent: "ölçülebilir kaliteyle başlar.",
      description:
        "Kaliteli bir pırlanta yalnızca parlaklıktan ibaret değildir. Oran, derecelendirme, nadirlik ve sertifikasyon; karakterine ve uzun vadeli değerine birlikte katkıda bulunur.",
    },
    editorial: {
      expertiseLabel: "Pırlanta Uzmanlığı",
      selectionLabel: "LIDYA Pırlanta Seçimi",
      valuesLabel: "Hassasiyet · Nadirlik · Güven",
    },
    trust: {
      eyebrow: "Sertifikalı Güven",
      title: "Nadirlik",
      titleAccent: "bağımsız kanıtı hak eder.",
      description:
        "Sertifikasyon, şeffaflık ve bağımsız derecelendirme bilinçli pırlanta seçiminin temelini oluşturur.",
      points: [
        {
          title: "Sertifikalı",
          text:
            "Bağımsız derecelendirme, taşın ölçülebilir özelliklerini belgeler.",
        },
        {
          title: "İzlenebilir",
          text:
            "Açık dokümantasyon; köken, kimlik ve kalite konusunda güven sağlar.",
        },
        {
          title: "Seçilmiş",
          text:
            "Rakamlar önemlidir, ancak son seçim hâlâ uzman insan değerlendirmesine dayanır.",
        },
      ],
      closing: "Parlaklık dikkat çeker.",
      closingAccent: "Güven bilgiden gelir.",
    },
    summary: {
      eyebrow: "Pırlanta Temelleri",
      title: "Açıkça anlaşılması gereken",
      titleAccent: "beş önemli konu.",
    },
  },

  sk: {
    hero: {
      since: "LIDYA · OD ROKU 1989",
      eyebrowRight: "Dokonalosť svetla",
      statement: "Krása upúta pohľad.",
      statementAccent: "Kvalita obstojí pri dôkladnom skúmaní.",
      imageAlt: "Investičné diamanty LIDYA JEWELRY",
    },
    intro: {
      eyebrow: "Diamantová expertíza",
      title: "Každý diamant začína",
      titleAccent: "merateľnou kvalitou.",
      description:
        "Kvalitný diamant je viac než len brilancia. Proporcie, hodnotenie, vzácnosť a certifikácia spoločne určujú jeho charakter aj dlhodobú hodnotu.",
    },
    editorial: {
      expertiseLabel: "Diamantová expertíza",
      selectionLabel: "Výber diamantov LIDYA",
      valuesLabel: "Presnosť · Vzácnosť · Dôvera",
    },
    trust: {
      eyebrow: "Certifikovaná dôvera",
      title: "Vzácnosť si zaslúži",
      titleAccent: "nezávislé potvrdenie.",
      description:
        "Certifikácia, transparentnosť a nezávislé hodnotenie tvoria základ informovaného výberu diamantu.",
      points: [
        {
          title: "Certifikované",
          text:
            "Nezávislé hodnotenie dokumentuje merateľné vlastnosti kameňa.",
        },
        {
          title: "Dohľadateľné",
          text:
            "Jasná dokumentácia podporuje dôveru v pôvod, identitu a kvalitu.",
        },
        {
          title: "Vybrané",
          text:
            "Čísla sú dôležité, no konečný výber stále závisí od odborného ľudského posúdenia.",
        },
      ],
      closing: "Brilancia priťahuje pozornosť.",
      closingAccent: "Dôvera prichádza s poznaním.",
    },
    summary: {
      eyebrow: "Základy diamantov",
      title: "Päť vecí, ktorým sa oplatí",
      titleAccent: "jasne rozumieť.",
    },
  },

  cs: {
    hero: {
      since: "LIDYA · OD ROKU 1989",
      eyebrowRight: "Dokonalost světla",
      statement: "Krása upoutá pohled.",
      statementAccent: "Kvalita obstojí při důkladném zkoumání.",
      imageAlt: "Investiční diamanty LIDYA JEWELRY",
    },
    intro: {
      eyebrow: "Diamantová expertiza",
      title: "Každý diamant začíná",
      titleAccent: "měřitelnou kvalitou.",
      description:
        "Kvalitní diamant je víc než jen brilance. Proporce, hodnocení, vzácnost a certifikace společně určují jeho charakter i dlouhodobou hodnotu.",
    },
    editorial: {
      expertiseLabel: "Diamantová expertiza",
      selectionLabel: "Výběr diamantů LIDYA",
      valuesLabel: "Přesnost · Vzácnost · Důvěra",
    },
    trust: {
      eyebrow: "Certifikovaná důvěra",
      title: "Vzácnost si zaslouží",
      titleAccent: "nezávislé potvrzení.",
      description:
        "Certifikace, transparentnost a nezávislé hodnocení tvoří základ informovaného výběru diamantu.",
      points: [
        {
          title: "Certifikované",
          text:
            "Nezávislé hodnocení dokumentuje měřitelné vlastnosti kamene.",
        },
        {
          title: "Dohledatelné",
          text:
            "Jasná dokumentace podporuje důvěru v původ, identitu a kvalitu.",
        },
        {
          title: "Vybrané",
          text:
            "Čísla jsou důležitá, ale konečný výběr stále závisí na odborném lidském posouzení.",
        },
      ],
      closing: "Brilance přitahuje pozornost.",
      closingAccent: "Důvěra přichází s poznáním.",
    },
    summary: {
      eyebrow: "Základy diamantů",
      title: "Pět věcí, kterým stojí za to",
      titleAccent: "jasně rozumět.",
    },
  },

  hu: {
    hero: {
      since: "LIDYA · 1989 ÓTA",
      eyebrowRight: "Tökéletesített fény",
      statement: "A szépség megragadja a tekintetet.",
      statementAccent: "A minőség kiállja az alapos vizsgálatot.",
      imageAlt: "LIDYA JEWELRY befektetési gyémántok",
    },
    intro: {
      eyebrow: "Gyémántszakértelem",
      title: "Minden gyémánt",
      titleAccent: "mérhető minőséggel kezdődik.",
      description:
        "Egy kiváló gyémánt több puszta ragyogásnál. Az arányok, a minősítés, a ritkaság és a tanúsítás egyaránt hozzájárul karakteréhez és hosszú távú értékéhez.",
    },
    editorial: {
      expertiseLabel: "Gyémántszakértelem",
      selectionLabel: "LIDYA gyémántválogatás",
      valuesLabel: "Pontosság · Ritkaság · Bizalom",
    },
    trust: {
      eyebrow: "Tanúsított bizalom",
      title: "A ritkaság megérdemli",
      titleAccent: "a független bizonyítást.",
      description:
        "A tanúsítás, az átláthatóság és a független minősítés biztosítja a megalapozott gyémántválasztás alapját.",
      points: [
        {
          title: "Tanúsított",
          text:
            "A független minősítés dokumentálja a kő mérhető tulajdonságait.",
        },
        {
          title: "Nyomon követhető",
          text:
            "Az egyértelmű dokumentáció bizalmat ad az eredet, az azonosság és a minőség tekintetében.",
        },
        {
          title: "Válogatott",
          text:
            "A számok fontosak, de a végső kiválasztás továbbra is szakértő emberi megítélést igényel.",
        },
      ],
      closing: "A ragyogás felkelti a figyelmet.",
      closingAccent: "A bizalom a tudásból fakad.",
    },
    summary: {
      eyebrow: "A gyémánt alapjai",
      title: "Öt dolog, amelyet érdemes",
      titleAccent: "világosan megérteni.",
    },
  },

  pl: {
    hero: {
      since: "LIDYA · OD 1989 ROKU",
      eyebrowRight: "Światło doprowadzone do perfekcji",
      statement: "Piękno przyciąga wzrok.",
      statementAccent: "Jakość wytrzymuje dokładną ocenę.",
      imageAlt: "Diamenty inwestycyjne LIDYA JEWELRY",
    },
    intro: {
      eyebrow: "Ekspertyza diamentów",
      title: "Każdy diament zaczyna się od",
      titleAccent: "mierzalnej jakości.",
      description:
        "Wyjątkowy diament to więcej niż sam blask. Proporcje, klasyfikacja, rzadkość i certyfikacja wspólnie wpływają na jego charakter oraz długoterminową wartość.",
    },
    editorial: {
      expertiseLabel: "Ekspertyza diamentów",
      selectionLabel: "Selekcja diamentów LIDYA",
      valuesLabel: "Precyzja · Rzadkość · Zaufanie",
    },
    trust: {
      eyebrow: "Certyfikowane zaufanie",
      title: "Rzadkość zasługuje na",
      titleAccent: "niezależne potwierdzenie.",
      description:
        "Certyfikacja, przejrzystość i niezależna klasyfikacja stanowią podstawę świadomego wyboru diamentu.",
      points: [
        {
          title: "Certyfikowane",
          text:
            "Niezależna ocena dokumentuje mierzalne cechy kamienia.",
        },
        {
          title: "Identyfikowalne",
          text:
            "Jasna dokumentacja wspiera zaufanie do pochodzenia, tożsamości i jakości.",
        },
        {
          title: "Wyselekcjonowane",
          text:
            "Liczby są ważne, ale ostateczny wybór nadal zależy od eksperckiej oceny człowieka.",
        },
      ],
      closing: "Blask przyciąga uwagę.",
      closingAccent: "Zaufanie wynika z wiedzy.",
    },
    summary: {
      eyebrow: "Podstawy diamentów",
      title: "Pięć rzeczy, które warto",
      titleAccent: "dobrze rozumieć.",
    },
  },
};

function EditorialSection({
  eyebrow,
  title,
  roman,
  points,
  images,
  startNumber,
  locale,
  tone = "white",
  expertiseLabel,
  selectionLabel,
  valuesLabel,
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
              {expertiseLabel}
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
                    reverse
                      ? "lg:order-2 lg:col-span-7"
                      : "lg:col-span-7"
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
                        {selectionLabel}
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
                    {String(number).padStart(2, "0")}
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

export default function InvestmentDiamondsContent() {
  const { locale } = useLanguage();
  const copy = DIAMOND_COPY[locale];

  const t = (key: keyof typeof DIAMONDS_TEXT) =>
    localized(DIAMONDS_TEXT[key], locale);

  const section2Start = 1 + FOUR_CS.length;
  const section3Start = section2Start + BEYOND_FOUR_CS.length;

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[900px] overflow-hidden bg-plum-dark text-brand-white lg:min-h-screen">
          <Image
            src="/images/diamonds/diamonds-herou.png"
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/68 via-plum-dark/26 to-plum-dark/5" />

          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/42 via-transparent to-plum-dark/10" />

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
                    {copy.hero.since}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-4 lg:col-start-9 lg:pb-2">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                  {copy.hero.eyebrowRight}
                </span>

                <p
                  className="mt-6 max-w-[470px] font-display text-3xl italic leading-tight md:text-4xl lg:text-[2.65rem]"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.hero.statement}

                  <span
                    className="block"
                    style={{ color: "#E8D8B5" }}
                  >
                    {copy.hero.statementAccent}
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
                  {copy.intro.eyebrow}
                </span>

                <h2
                  className="mt-6 max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.intro.title}

                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    {copy.intro.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  {copy.intro.description}
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
          locale={locale}
          expertiseLabel={copy.editorial.expertiseLabel}
          selectionLabel={copy.editorial.selectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
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
          locale={locale}
          expertiseLabel={copy.editorial.expertiseLabel}
          selectionLabel={copy.editorial.selectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
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
          locale={locale}
          expertiseLabel={copy.editorial.expertiseLabel}
          selectionLabel={copy.editorial.selectionLabel}
          valuesLabel={copy.editorial.valuesLabel}
        />

        {/* DARK TRUST SECTION */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-brand-white/[0.03] blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 border-b border-brand-white/12 pb-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  {copy.trust.eyebrow}
                </span>

                <h2
                  className="max-w-[950px] font-display text-4xl leading-[0.97] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.trust.title}

                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    {copy.trust.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {copy.trust.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              {copy.trust.points.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-brand-white/12 py-9 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
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
                {copy.trust.closing}

                <span style={{ color: "#E8D8B5" }}>
                  {" "}
                  {copy.trust.closingAccent}
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
                className="mx-auto mt-6 max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.summary.title}

                <span
                  className="block italic"
                  style={{ color: "#C8A96A" }}
                >
                  {copy.summary.titleAccent}
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