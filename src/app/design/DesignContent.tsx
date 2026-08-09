"use client";

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

import { useLanguage } from "@/components/LanguageProvider";
import { localized } from "@/lib/content";
import { SEASONS } from "@/lib/design";
import type { Locale } from "@/lib/i18n";

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

const DESIGN_COPY: Record<
  Locale,
  {
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
      since: string;
      statementEyebrow: string;
      statementBefore: string;
      statementAccent: string;
      imageAlt: string;
    };
    seasons: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      itemLabel: string;
      handmade: string;
      closingBefore: string;
      closingAccent: string;
    };
    philosophy: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      points: {
        title: string;
        text: string;
      }[];
    };
    cta: {
      title: string;
      sub: string;
    };
  }
> = {
  en: {
    hero: {
      eyebrow: "Design",
      title: "Designed to change with the season",
      lead:
        "Every season brings a new LIDYA collection — designed and handcrafted in-house with its own mood, character and point of view.",
      since: "LIDYA · SINCE 1989",
      statementEyebrow: "Designed in-house",
      statementBefore: "One philosophy.",
      statementAccent: "Four seasonal expressions.",
      imageAlt:
        "LIDYA jewellery collection arranged on natural stone with rings, earrings, bracelets and necklaces",
    },
    seasons: {
      eyebrow: "Four Seasons",
      title: "Designed for the",
      titleAccent: "rhythm of the year.",
      description:
        "Each season brings a new mood, new details and a different expression of the same LIDYA craftsmanship.",
      itemLabel: "Seasonal Collection",
      handmade: "Designed & handcrafted by LIDYA",
      closingBefore: "Design changes with the season.",
      closingAccent: "Craftsmanship does not.",
    },
    philosophy: {
      eyebrow: "Our Design Philosophy",
      title: "Created to feel individual,",
      titleAccent: "never ordinary.",
      description:
        "Every LIDYA design begins with proportion, character and the desire to create jewellery that feels personal from the first moment it is worn.",
      points: [
        {
          title: "Original",
          text: "Designed in-house with its own identity and point of view.",
        },
        {
          title: "Handcrafted",
          text: "Created with attention to proportion, detail and finish.",
        },
        {
          title: "Personal",
          text: "Jewellery designed to become part of the person who wears it.",
        },
      ],
    },
    cta: {
      title: "Discover the latest LIDYA designs in person",
      sub:
        "Visit us privately and explore the seasonal collections, materials and details that make every LIDYA design individual.",
    },
  },

  de: {
    hero: {
      eyebrow: "Design",
      title: "Design, das sich mit den Jahreszeiten verändert",
      lead:
        "Jede Saison bringt eine neue LIDYA Kollektion — im eigenen Haus entworfen und handgefertigt, mit eigener Stimmung, eigenem Charakter und eigener Handschrift.",
      since: "LIDYA · SEIT 1989",
      statementEyebrow: "Im eigenen Haus entworfen",
      statementBefore: "Eine Philosophie.",
      statementAccent: "Vier saisonale Ausdrucksformen.",
      imageAlt:
        "LIDYA Schmuckkollektion mit Ringen, Ohrringen, Armbändern und Halsketten auf Naturstein",
    },
    seasons: {
      eyebrow: "Vier Jahreszeiten",
      title: "Entworfen für den",
      titleAccent: "Rhythmus des Jahres.",
      description:
        "Jede Saison bringt eine neue Stimmung, neue Details und einen anderen Ausdruck derselben LIDYA Handwerkskunst.",
      itemLabel: "Saisonale Kollektion",
      handmade: "Entworfen & handgefertigt von LIDYA",
      closingBefore: "Design verändert sich mit der Saison.",
      closingAccent: "Handwerkskunst nicht.",
    },
    philosophy: {
      eyebrow: "Unsere Designphilosophie",
      title: "Geschaffen, um individuell zu wirken,",
      titleAccent: "niemals gewöhnlich.",
      description:
        "Jedes LIDYA Design beginnt mit Proportion, Charakter und dem Wunsch, Schmuck zu schaffen, der sich vom ersten Moment des Tragens an persönlich anfühlt.",
      points: [
        {
          title: "Original",
          text: "Im eigenen Haus entworfen, mit eigener Identität und eigener Haltung.",
        },
        {
          title: "Handgefertigt",
          text: "Mit besonderer Aufmerksamkeit für Proportion, Detail und Verarbeitung gefertigt.",
        },
        {
          title: "Persönlich",
          text: "Schmuck, der dazu geschaffen ist, Teil der Persönlichkeit seines Trägers zu werden.",
        },
      ],
    },
    cta: {
      title: "Entdecken Sie die neuesten LIDYA Designs persönlich",
      sub:
        "Besuchen Sie uns zu einem privaten Termin und entdecken Sie saisonale Kollektionen, Materialien und Details, die jedes LIDYA Design einzigartig machen.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Tasarım",
      title: "Mevsimlerle birlikte değişen tasarım",
      lead:
        "Her sezon yeni bir LIDYA koleksiyonu getirir — kendi bünyemizde tasarlanır ve el işçiliğiyle hazırlanır; her biri kendi ruhuna, karakterine ve bakış açısına sahiptir.",
      since: "LIDYA · 1989'DAN BERİ",
      statementEyebrow: "Kendi bünyemizde tasarlandı",
      statementBefore: "Tek bir felsefe.",
      statementAccent: "Dört mevsimsel ifade.",
      imageAlt:
        "Doğal taş üzerinde yüzük, küpe, bileklik ve kolyelerden oluşan LIDYA mücevher koleksiyonu",
    },
    seasons: {
      eyebrow: "Dört Mevsim",
      title: "Yılın",
      titleAccent: "ritmine göre tasarlandı.",
      description:
        "Her mevsim yeni bir ruh, yeni detaylar ve aynı LIDYA işçiliğinin farklı bir ifadesini getirir.",
      itemLabel: "Mevsim Koleksiyonu",
      handmade: "LIDYA tarafından tasarlandı & el işçiliğiyle üretildi",
      closingBefore: "Tasarım mevsimlerle değişir.",
      closingAccent: "İşçilik değişmez.",
    },
    philosophy: {
      eyebrow: "Tasarım Felsefemiz",
      title: "Kişisel hissettirmek için yaratıldı,",
      titleAccent: "asla sıradan değil.",
      description:
        "Her LIDYA tasarımı; oran, karakter ve ilk takıldığı andan itibaren kişisel hissettiren mücevherler yaratma isteğiyle başlar.",
      points: [
        {
          title: "Özgün",
          text: "Kendi kimliği ve bakış açısıyla LIDYA bünyesinde tasarlanır.",
        },
        {
          title: "El İşçiliği",
          text: "Oran, detay ve bitiş kalitesine özen gösterilerek hazırlanır.",
        },
        {
          title: "Kişisel",
          text: "Onu takan kişinin bir parçası olmak üzere tasarlanan mücevherler.",
        },
      ],
    },
    cta: {
      title: "En yeni LIDYA tasarımlarını yakından keşfedin",
      sub:
        "Özel bir randevuyla bizi ziyaret edin ve her LIDYA tasarımını özgün kılan mevsimsel koleksiyonları, malzemeleri ve detayları keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Dizajn",
      title: "Dizajn, ktorý sa mení s ročnými obdobiami",
      lead:
        "Každá sezóna prináša novú kolekciu LIDYA — navrhnutú a ručne vyrobenú u nás, s vlastnou náladou, charakterom a osobitým pohľadom.",
      since: "LIDYA · OD ROKU 1989",
      statementEyebrow: "Navrhnuté u nás",
      statementBefore: "Jedna filozofia.",
      statementAccent: "Štyri sezónne podoby.",
      imageAlt:
        "Kolekcia šperkov LIDYA s prsteňmi, náušnicami, náramkami a náhrdelníkmi na prírodnom kameni",
    },
    seasons: {
      eyebrow: "Štyri ročné obdobia",
      title: "Navrhnuté pre",
      titleAccent: "rytmus roka.",
      description:
        "Každé ročné obdobie prináša novú náladu, nové detaily a inú podobu tej istej remeselnej kvality LIDYA.",
      itemLabel: "Sezónna kolekcia",
      handmade: "Navrhnuté & ručne vyrobené LIDYA",
      closingBefore: "Dizajn sa mení s ročnými obdobiami.",
      closingAccent: "Remeselnosť zostáva.",
    },
    philosophy: {
      eyebrow: "Naša filozofia dizajnu",
      title: "Vytvorené tak, aby pôsobilo osobito,",
      titleAccent: "nikdy obyčajne.",
      description:
        "Každý dizajn LIDYA začína proporciou, charakterom a túžbou vytvárať šperky, ktoré pôsobia osobne od prvého momentu, keď si ich človek nasadí.",
      points: [
        {
          title: "Originálne",
          text: "Navrhnuté u nás s vlastnou identitou a osobitým pohľadom.",
        },
        {
          title: "Ručne vyrobené",
          text: "Vytvorené s dôrazom na proporcie, detail a precízne spracovanie.",
        },
        {
          title: "Osobné",
          text: "Šperky navrhnuté tak, aby sa stali súčasťou človeka, ktorý ich nosí.",
        },
      ],
    },
    cta: {
      title: "Objavte najnovšie dizajny LIDYA osobne",
      sub:
        "Navštívte nás počas súkromného termínu a objavte sezónne kolekcie, materiály a detaily, ktoré robia každý dizajn LIDYA jedinečným.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Design",
      title: "Design, který se mění s ročními obdobími",
      lead:
        "Každá sezóna přináší novou kolekci LIDYA — navrženou a ručně vyrobenou u nás, s vlastní náladou, charakterem a osobitým pohledem.",
      since: "LIDYA · OD ROKU 1989",
      statementEyebrow: "Navrženo u nás",
      statementBefore: "Jedna filozofie.",
      statementAccent: "Čtyři sezónní podoby.",
      imageAlt:
        "Kolekce šperků LIDYA s prsteny, náušnicemi, náramky a náhrdelníky na přírodním kameni",
    },
    seasons: {
      eyebrow: "Čtyři roční období",
      title: "Navrženo pro",
      titleAccent: "rytmus roku.",
      description:
        "Každé roční období přináší novou náladu, nové detaily a jinou podobu stejné řemeslné kvality LIDYA.",
      itemLabel: "Sezónní kolekce",
      handmade: "Navrženo & ručně vyrobeno LIDYA",
      closingBefore: "Design se mění s ročními obdobími.",
      closingAccent: "Řemeslo zůstává.",
    },
    philosophy: {
      eyebrow: "Naše filozofie designu",
      title: "Vytvořeno tak, aby působilo osobitě,",
      titleAccent: "nikdy obyčejně.",
      description:
        "Každý design LIDYA začíná proporcí, charakterem a touhou vytvářet šperky, které působí osobně od prvního okamžiku, kdy si je člověk nasadí.",
      points: [
        {
          title: "Originální",
          text: "Navrženo u nás s vlastní identitou a osobitým pohledem.",
        },
        {
          title: "Ručně vyrobené",
          text: "Vytvořeno s důrazem na proporce, detail a precizní zpracování.",
        },
        {
          title: "Osobní",
          text: "Šperky navržené tak, aby se staly součástí člověka, který je nosí.",
        },
      ],
    },
    cta: {
      title: "Objevte nejnovější designy LIDYA osobně",
      sub:
        "Navštivte nás během soukromého termínu a objevte sezónní kolekce, materiály a detaily, které dělají každý design LIDYA jedinečným.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Design",
      title: "Design, amely az évszakokkal változik",
      lead:
        "Minden évszak új LIDYA kollekciót hoz — saját műhelyünkben tervezve és kézzel készítve, önálló hangulattal, karakterrel és látásmóddal.",
      since: "LIDYA · 1989 ÓTA",
      statementEyebrow: "Házon belül tervezve",
      statementBefore: "Egy filozófia.",
      statementAccent: "Négy évszakos megjelenés.",
      imageAlt:
        "LIDYA ékszerkollekció gyűrűkkel, fülbevalókkal, karkötőkkel és nyakláncokkal természetes kövön",
    },
    seasons: {
      eyebrow: "Négy évszak",
      title: "Az év",
      titleAccent: "ritmusára tervezve.",
      description:
        "Minden évszak új hangulatot, új részleteket és ugyanazon LIDYA kézművesség másfajta kifejezését hozza.",
      itemLabel: "Szezonális kollekció",
      handmade: "A LIDYA tervezi & kézzel készíti",
      closingBefore: "A design változik az évszakokkal.",
      closingAccent: "A kézművesség nem.",
    },
    philosophy: {
      eyebrow: "Designfilozófiánk",
      title: "Egyedinek alkotva,",
      titleAccent: "soha nem hétköznapinak.",
      description:
        "Minden LIDYA design az arányokkal, a karakterrel és azzal a szándékkal kezdődik, hogy az ékszer már az első viselés pillanatától személyesnek érződjön.",
      points: [
        {
          title: "Eredeti",
          text: "Házon belül tervezve, saját identitással és önálló látásmóddal.",
        },
        {
          title: "Kézzel készített",
          text: "Az arányokra, részletekre és kidolgozásra fordított figyelemmel készül.",
        },
        {
          title: "Személyes",
          text: "Olyan ékszer, amely annak az embernek a részévé válik, aki viseli.",
        },
      ],
    },
    cta: {
      title: "Fedezze fel személyesen a legújabb LIDYA designokat",
      sub:
        "Látogasson el hozzánk privát időpontban, és fedezze fel a szezonális kollekciókat, anyagokat és részleteket, amelyek minden LIDYA designt egyedivé tesznek.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Design",
      title: "Design, który zmienia się wraz z porami roku",
      lead:
        "Każdy sezon przynosi nową kolekcję LIDYA — projektowaną i wykonywaną ręcznie przez nas, z własnym nastrojem, charakterem i osobistym punktem widzenia.",
      since: "LIDYA · OD 1989 ROKU",
      statementEyebrow: "Projektowane przez LIDYA",
      statementBefore: "Jedna filozofia.",
      statementAccent: "Cztery sezonowe odsłony.",
      imageAlt:
        "Kolekcja biżuterii LIDYA z pierścionkami, kolczykami, bransoletkami i naszyjnikami na naturalnym kamieniu",
    },
    seasons: {
      eyebrow: "Cztery pory roku",
      title: "Projektowane zgodnie z",
      titleAccent: "rytmem roku.",
      description:
        "Każda pora roku przynosi nowy nastrój, nowe detale i inną odsłonę tego samego kunsztu LIDYA.",
      itemLabel: "Kolekcja sezonowa",
      handmade: "Projektowane & wykonywane ręcznie przez LIDYA",
      closingBefore: "Design zmienia się wraz z porami roku.",
      closingAccent: "Rzemiosło pozostaje.",
    },
    philosophy: {
      eyebrow: "Nasza filozofia designu",
      title: "Tworzone tak, aby było indywidualne,",
      titleAccent: "nigdy zwyczajne.",
      description:
        "Każdy projekt LIDYA zaczyna się od proporcji, charakteru i pragnienia tworzenia biżuterii, która od pierwszej chwili noszenia staje się osobista.",
      points: [
        {
          title: "Oryginalne",
          text: "Projektowane przez nas z własną tożsamością i punktem widzenia.",
        },
        {
          title: "Ręcznie wykonane",
          text: "Tworzone z dbałością o proporcje, detal i wykończenie.",
        },
        {
          title: "Osobiste",
          text: "Biżuteria zaprojektowana tak, aby stała się częścią osoby, która ją nosi.",
        },
      ],
    },
    cta: {
      title: "Odkryj najnowsze projekty LIDYA osobiście",
      sub:
        "Odwiedź nas podczas prywatnego spotkania i odkryj sezonowe kolekcje, materiały i detale, które nadają każdemu projektowi LIDYA indywidualny charakter.",
    },
  },
};

export default function DesignContent() {
  const { locale } = useLanguage();
  const copy = DESIGN_COPY[locale];

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          <Image
            src="/images/design/hero-design.png"
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/88 via-[#F7F3EB]/34 to-transparent" />

          <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-brand-white/16 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center text-gold">
                    <BlossomIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    {copy.hero.eyebrow}
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[980px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.hero.title}
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
                  {copy.hero.lead}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                    {copy.hero.since}
                  </span>
                </div>
              </div>
            </div>

            {/* HERO STATEMENT */}
            <div className="border-t border-plum-dark/10 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    {copy.hero.statementEyebrow}
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {copy.hero.statementBefore}
                    <span style={{ color: "#C8A96A" }}>
                      {" "}
                      {copy.hero.statementAccent}
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
                  {copy.seasons.eyebrow}
                </span>

                <h2
                  className="mt-6 max-w-[850px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.seasons.title}

                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    {copy.seasons.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  {copy.seasons.description}
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
                      className={
                        reverse
                          ? "lg:order-2 lg:col-span-7"
                          : "lg:col-span-7"
                      }
                    >
                      <div className="group relative aspect-[5/4] overflow-hidden bg-ivory">
                        {season.image ? (
                          <Image
                            src={season.image}
                            alt={
                              season.imageAlt ??
                              localized(season.name, locale)
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
                            {copy.seasons.itemLabel}
                          </span>
                        </div>
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
                        {localized(season.name, locale)}
                      </h3>

                      <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
                        {localized(season.description, locale)}
                      </p>

                      <div className="mt-8 flex items-center gap-5">
                        <span className="h-px w-10 bg-gold" />

                        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
                          {copy.seasons.handmade}
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
                {copy.seasons.closingBefore}

                <span style={{ color: "#C8A96A" }}>
                  {" "}
                  {copy.seasons.closingAccent}
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
                  {copy.philosophy.eyebrow}
                </span>

                <h2
                  className="max-w-[900px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.philosophy.title}

                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    {copy.philosophy.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {copy.philosophy.description}
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-brand-white/12 md:grid-cols-3">
              {copy.philosophy.points.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-brand-white/12 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
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
          </div>
        </section>

        {/* CTA */}
        <CategoryCTA
          title={copy.cta.title}
          sub={copy.cta.sub}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}