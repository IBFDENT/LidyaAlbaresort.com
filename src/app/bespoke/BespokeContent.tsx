"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCTA from "@/components/category/CategoryCTA";

import { GemClusterIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";

import { localized } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

import {
  PHASE_1_STEPS,
  PHASE_2_STEPS,
  PHASE_3_STEPS,
  type BespokeStep,
} from "@/lib/bespoke";

type Phase = {
  eyebrow: string;
  title: string;
  number: string;
  steps: BespokeStep[];
  startNumber: number;
};

const BESPOKE_COPY: Record<
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
    intro: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
    };
    phaseLabels: {
      phase1Eyebrow: string;
      phase1Title: string;
      phase2Eyebrow: string;
      phase2Title: string;
      phase3Eyebrow: string;
      phase3Title: string;
      phaseWord: string;
      atelierLabel: string;
      handcrafted: string;
    };
    atelier: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      points: {
        title: string;
        text: string;
      }[];
      closingBefore: string;
      closingAccent: string;
    };
    cta: {
      title: string;
      sub: string;
    };
  }
> = {
  en: {
    hero: {
      eyebrow: "Bespoke",
      title: "Jewellery created around you",
      lead:
        "From the first conversation to the final polish, every bespoke piece is developed individually in our own workshop with attention to proportion, material, character and meaning.",
      since: "LIDYA ATELIER · SINCE 1989",
      statementEyebrow: "Made for one",
      statementBefore: "Your idea begins the story.",
      statementAccent: "Our hands give it form.",
      imageAlt:
        "Bespoke jewellery design process with ring sketch, finished ring and jewellery tools",
    },
    intro: {
      eyebrow: "The Bespoke Journey",
      title: "From first conversation",
      titleAccent: "to a piece that belongs only to you.",
      description:
        "Every bespoke commission moves through our workshop with attention to proportion, material, technique and the person for whom it is being created.",
    },
    phaseLabels: {
      phase1Eyebrow: "The Beginning",
      phase1Title: "Idea, consultation and design",
      phase2Eyebrow: "The Making",
      phase2Title: "From material to form",
      phase3Eyebrow: "The Finish",
      phase3Title: "Setting, polishing and delivery",
      phaseWord: "Phase",
      atelierLabel: "Bespoke Atelier",
      handcrafted: "Handcrafted by LIDYA",
    },
    atelier: {
      eyebrow: "The LIDYA Atelier",
      title: "Not selected from a collection.",
      titleAccent: "Created around a person.",
      description:
        "Bespoke jewellery is an exchange of ideas, experience and craftsmanship. Every decision is made with the final wearer in mind.",
      points: [
        {
          title: "Personal",
          text:
            "Every commission begins with the person, not the product.",
        },
        {
          title: "Handcrafted",
          text:
            "The piece moves through our own workshop from concept to finish.",
        },
        {
          title: "One of One",
          text:
            "Created to carry a story that no ready-made piece can repeat.",
        },
      ],
      closingBefore: "The most personal jewellery",
      closingAccent: "begins before it exists.",
    },
    cta: {
      title: "Begin your bespoke piece with a private consultation",
      sub:
        "Tell us what you have in mind and we will guide you through design, material, proportion and craftsmanship to create a piece that belongs only to you.",
    },
  },

  de: {
    hero: {
      eyebrow: "Maßanfertigung",
      title: "Schmuck, der um Sie herum entsteht",
      lead:
        "Vom ersten Gespräch bis zur abschließenden Politur wird jedes maßgefertigte Schmuckstück individuell in unserer eigenen Werkstatt entwickelt — mit besonderer Aufmerksamkeit für Proportion, Material, Charakter und Bedeutung.",
      since: "LIDYA ATELIER · SEIT 1989",
      statementEyebrow: "Für eine Person",
      statementBefore: "Ihre Idee beginnt die Geschichte.",
      statementAccent: "Unsere Hände geben ihr Form.",
      imageAlt:
        "Maßgefertigter Schmuckprozess mit Ringskizze, fertigem Ring und Schmuckwerkzeugen",
    },
    intro: {
      eyebrow: "Der Weg zur Maßanfertigung",
      title: "Vom ersten Gespräch",
      titleAccent: "zu einem Schmuckstück, das nur Ihnen gehört.",
      description:
        "Jede Maßanfertigung durchläuft unsere Werkstatt mit besonderer Aufmerksamkeit für Proportion, Material, Technik und die Person, für die sie geschaffen wird.",
    },
    phaseLabels: {
      phase1Eyebrow: "Der Anfang",
      phase1Title: "Idee, Beratung und Entwurf",
      phase2Eyebrow: "Die Fertigung",
      phase2Title: "Vom Material zur Form",
      phase3Eyebrow: "Die Vollendung",
      phase3Title: "Fassen, Polieren und Übergabe",
      phaseWord: "Phase",
      atelierLabel: "Bespoke Atelier",
      handcrafted: "Handgefertigt von LIDYA",
    },
    atelier: {
      eyebrow: "Das LIDYA Atelier",
      title: "Nicht aus einer Kollektion gewählt.",
      titleAccent: "Für einen Menschen geschaffen.",
      description:
        "Maßgefertigter Schmuck entsteht im Austausch von Ideen, Erfahrung und Handwerkskunst. Jede Entscheidung wird mit Blick auf die Person getroffen, die das Schmuckstück später trägt.",
      points: [
        {
          title: "Persönlich",
          text:
            "Jede Anfertigung beginnt mit dem Menschen, nicht mit dem Produkt.",
        },
        {
          title: "Handgefertigt",
          text:
            "Das Schmuckstück entsteht vom ersten Entwurf bis zur Fertigstellung in unserer eigenen Werkstatt.",
        },
        {
          title: "Ein Unikat",
          text:
            "Geschaffen, um eine Geschichte zu tragen, die kein fertiges Schmuckstück wiederholen kann.",
        },
      ],
      closingBefore: "Der persönlichste Schmuck",
      closingAccent: "beginnt, bevor er existiert.",
    },
    cta: {
      title: "Beginnen Sie Ihr Unikat mit einer privaten Beratung",
      sub:
        "Erzählen Sie uns von Ihrer Idee. Wir begleiten Sie durch Design, Material, Proportion und Handwerkskunst bis zu einem Schmuckstück, das nur Ihnen gehört.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Özel Tasarım",
      title: "Size göre yaratılan mücevherler",
      lead:
        "İlk görüşmeden son cilaya kadar her özel tasarım parça, kendi atölyemizde oran, malzeme, karakter ve anlam dikkate alınarak size özel olarak geliştirilir.",
      since: "LIDYA ATELIER · 1989'DAN BERİ",
      statementEyebrow: "Tek kişi için",
      statementBefore: "Hikâye sizin fikrinizle başlar.",
      statementAccent: "Bizim ellerimiz ona biçim verir.",
      imageAlt:
        "Yüzük çizimi, tamamlanmış yüzük ve mücevher araçlarıyla özel tasarım süreci",
    },
    intro: {
      eyebrow: "Özel Tasarım Yolculuğu",
      title: "İlk görüşmeden",
      titleAccent: "yalnızca size ait bir parçaya.",
      description:
        "Her özel tasarım çalışma; oran, malzeme, teknik ve tasarımın kimin için üretildiği dikkate alınarak atölyemizde ilerler.",
    },
    phaseLabels: {
      phase1Eyebrow: "Başlangıç",
      phase1Title: "Fikir, danışmanlık ve tasarım",
      phase2Eyebrow: "Üretim",
      phase2Title: "Malzemeden forma",
      phase3Eyebrow: "Son Dokunuş",
      phase3Title: "Taş yerleştirme, parlatma ve teslim",
      phaseWord: "Aşama",
      atelierLabel: "Özel Tasarım Atölyesi",
      handcrafted: "LIDYA tarafından el işçiliğiyle üretildi",
    },
    atelier: {
      eyebrow: "LIDYA Atölyesi",
      title: "Bir koleksiyondan seçilmez.",
      titleAccent: "Bir kişi etrafında yaratılır.",
      description:
        "Özel tasarım mücevher; fikir, deneyim ve ustalığın birleşimidir. Her karar, onu taşıyacak kişi düşünülerek verilir.",
      points: [
        {
          title: "Kişisel",
          text:
            "Her çalışma ürünle değil, kişiyle başlar.",
        },
        {
          title: "El İşçiliği",
          text:
            "Parça fikirden son işçiliğe kadar kendi atölyemizde ilerler.",
        },
        {
          title: "Tek ve Eşsiz",
          text:
            "Hazır hiçbir parçanın tekrar edemeyeceği bir hikâyeyi taşımak için yaratılır.",
        },
      ],
      closingBefore: "En kişisel mücevher",
      closingAccent: "daha var olmadan önce başlar.",
    },
    cta: {
      title: "Özel tasarım parçanıza özel bir görüşmeyle başlayın",
      sub:
        "Aklınızdaki fikri bizimle paylaşın; yalnızca size ait bir parça yaratmak için tasarım, malzeme, oran ve işçilik sürecinde size rehberlik edelim.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Zákazková výroba",
      title: "Šperk vytvorený okolo vás",
      lead:
        "Od prvého rozhovoru až po záverečné leštenie vzniká každý zákazkový šperk individuálne v našej vlastnej dielni, s dôrazom na proporcie, materiál, charakter a význam.",
      since: "LIDYA ATELIER · OD ROKU 1989",
      statementEyebrow: "Vytvorené pre jedného",
      statementBefore: "Váš nápad začína príbeh.",
      statementAccent: "Naše ruky mu dávajú formu.",
      imageAlt:
        "Proces zákazkovej výroby šperku s nákresom prsteňa, hotovým prsteňom a šperkárskymi nástrojmi",
    },
    intro: {
      eyebrow: "Cesta zákazkového šperku",
      title: "Od prvého rozhovoru",
      titleAccent: "k šperku, ktorý patrí iba vám.",
      description:
        "Každá zákazková výroba prechádza našou dielňou s dôrazom na proporcie, materiál, techniku a človeka, pre ktorého vzniká.",
    },
    phaseLabels: {
      phase1Eyebrow: "Začiatok",
      phase1Title: "Nápad, konzultácia a návrh",
      phase2Eyebrow: "Výroba",
      phase2Title: "Od materiálu k forme",
      phase3Eyebrow: "Dokončenie",
      phase3Title: "Osadenie, leštenie a odovzdanie",
      phaseWord: "Fáza",
      atelierLabel: "Bespoke Atelier",
      handcrafted: "Ručne vyrobené LIDYA",
    },
    atelier: {
      eyebrow: "Ateliér LIDYA",
      title: "Nie vybrané z kolekcie.",
      titleAccent: "Vytvorené okolo človeka.",
      description:
        "Zákazkový šperk je výmenou nápadov, skúseností a remeselnosti. Každé rozhodnutie robíme s ohľadom na človeka, ktorý ho bude nosiť.",
      points: [
        {
          title: "Osobné",
          text:
            "Každá zákazka začína človekom, nie produktom.",
        },
        {
          title: "Ručne vyrobené",
          text:
            "Šperk prechádza našou vlastnou dielňou od konceptu až po finálne dokončenie.",
        },
        {
          title: "Jediný svojho druhu",
          text:
            "Vytvorený tak, aby niesol príbeh, ktorý žiadny hotový šperk nedokáže zopakovať.",
        },
      ],
      closingBefore: "Najosobnejší šperk",
      closingAccent: "začína ešte predtým, než existuje.",
    },
    cta: {
      title: "Začnite svoj zákazkový šperk súkromnou konzultáciou",
      sub:
        "Povedzte nám svoju predstavu a prevedieme vás dizajnom, materiálom, proporciami aj remeselným spracovaním až k šperku, ktorý bude patriť iba vám.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Zakázková výroba",
      title: "Šperk vytvořený kolem vás",
      lead:
        "Od prvního rozhovoru až po závěrečné leštění vzniká každý zakázkový šperk individuálně v naší vlastní dílně, s důrazem na proporce, materiál, charakter a význam.",
      since: "LIDYA ATELIER · OD ROKU 1989",
      statementEyebrow: "Vytvořeno pro jednoho",
      statementBefore: "Váš nápad začíná příběh.",
      statementAccent: "Naše ruce mu dávají formu.",
      imageAlt:
        "Proces zakázkové výroby šperku s nákresem prstenu, hotovým prstenem a šperkařskými nástroji",
    },
    intro: {
      eyebrow: "Cesta zakázkového šperku",
      title: "Od prvního rozhovoru",
      titleAccent: "ke šperku, který patří jen vám.",
      description:
        "Každá zakázková výroba prochází naší dílnou s důrazem na proporce, materiál, techniku a člověka, pro kterého vzniká.",
    },
    phaseLabels: {
      phase1Eyebrow: "Začátek",
      phase1Title: "Nápad, konzultace a návrh",
      phase2Eyebrow: "Výroba",
      phase2Title: "Od materiálu k formě",
      phase3Eyebrow: "Dokončení",
      phase3Title: "Osazení, leštění a předání",
      phaseWord: "Fáze",
      atelierLabel: "Bespoke Atelier",
      handcrafted: "Ručně vyrobeno LIDYA",
    },
    atelier: {
      eyebrow: "Ateliér LIDYA",
      title: "Nevybráno z kolekce.",
      titleAccent: "Vytvořeno kolem člověka.",
      description:
        "Zakázkový šperk je výměnou nápadů, zkušeností a řemesla. Každé rozhodnutí děláme s ohledem na člověka, který jej bude nosit.",
      points: [
        {
          title: "Osobní",
          text:
            "Každá zakázka začíná člověkem, ne produktem.",
        },
        {
          title: "Ručně vyrobené",
          text:
            "Šperk prochází naší vlastní dílnou od konceptu až po finální dokončení.",
        },
        {
          title: "Jediný svého druhu",
          text:
            "Vytvořený tak, aby nesl příběh, který žádný hotový šperk nedokáže zopakovat.",
        },
      ],
      closingBefore: "Nejosobnější šperk",
      closingAccent: "začíná ještě předtím, než existuje.",
    },
    cta: {
      title: "Začněte svůj zakázkový šperk soukromou konzultací",
      sub:
        "Řekněte nám svou představu a provedeme vás designem, materiálem, proporcemi i řemeslným zpracováním až ke šperku, který bude patřit jen vám.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Egyedi készítés",
      title: "Ékszer, amely Önhöz igazodik",
      lead:
        "Az első beszélgetéstől az utolsó polírozásig minden egyedi ékszer saját műhelyünkben készül, külön figyelemmel az arányokra, az anyagra, a karakterre és a jelentésre.",
      since: "LIDYA ATELIER · 1989 ÓTA",
      statementEyebrow: "Egyetlen embernek",
      statementBefore: "Az Ön ötlete indítja el a történetet.",
      statementAccent: "A mi kezünk ad neki formát.",
      imageAlt:
        "Egyedi ékszerkészítési folyamat gyűrűrajzzal, kész gyűrűvel és ékszerész szerszámokkal",
    },
    intro: {
      eyebrow: "Az egyedi ékszer útja",
      title: "Az első beszélgetéstől",
      titleAccent: "egy csak Önhöz tartozó ékszerig.",
      description:
        "Minden egyedi megrendelés saját műhelyünkön halad végig, figyelembe véve az arányokat, az anyagot, a technikát és azt az embert, akinek készül.",
    },
    phaseLabels: {
      phase1Eyebrow: "A kezdet",
      phase1Title: "Ötlet, konzultáció és tervezés",
      phase2Eyebrow: "Az elkészítés",
      phase2Title: "Az anyagtól a formáig",
      phase3Eyebrow: "A befejezés",
      phase3Title: "Foglalás, polírozás és átadás",
      phaseWord: "Fázis",
      atelierLabel: "Bespoke Atelier",
      handcrafted: "Kézzel készítette a LIDYA",
    },
    atelier: {
      eyebrow: "A LIDYA műhely",
      title: "Nem egy kollekcióból választva.",
      titleAccent: "Egy ember köré tervezve.",
      description:
        "Az egyedi ékszer ötletek, tapasztalat és kézművesség találkozása. Minden döntést a leendő viselő szem előtt tartásával hozunk meg.",
      points: [
        {
          title: "Személyes",
          text:
            "Minden megrendelés az emberrel kezdődik, nem a termékkel.",
        },
        {
          title: "Kézzel készített",
          text:
            "Az ékszer a koncepciótól a kész darabig saját műhelyünkben készül.",
        },
        {
          title: "Egyetlen példány",
          text:
            "Olyan történet hordozására készül, amelyet egy kész termék sem tud megismételni.",
        },
      ],
      closingBefore: "A legszemélyesebb ékszer",
      closingAccent: "már azelőtt elkezdődik, hogy létezne.",
    },
    cta: {
      title: "Kezdje egyedi ékszerét privát konzultációval",
      sub:
        "Mondja el elképzelését, és végigvezetjük a tervezés, anyagválasztás, arányok és kézművesség folyamatán, hogy valóban csak Önhöz tartozó ékszer szülessen.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Na zamówienie",
      title: "Biżuteria tworzona wokół Ciebie",
      lead:
        "Od pierwszej rozmowy po końcowe polerowanie każda biżuteria na zamówienie powstaje indywidualnie w naszej własnej pracowni, z dbałością o proporcje, materiał, charakter i znaczenie.",
      since: "LIDYA ATELIER · OD 1989 ROKU",
      statementEyebrow: "Stworzone dla jednej osoby",
      statementBefore: "Twój pomysł rozpoczyna historię.",
      statementAccent: "Nasze ręce nadają mu formę.",
      imageAlt:
        "Proces tworzenia biżuterii na zamówienie z projektem pierścionka, gotowym pierścionkiem i narzędziami jubilerskimi",
    },
    intro: {
      eyebrow: "Droga biżuterii na zamówienie",
      title: "Od pierwszej rozmowy",
      titleAccent: "do biżuterii, która należy tylko do Ciebie.",
      description:
        "Każde zamówienie przechodzi przez naszą pracownię z dbałością o proporcje, materiał, technikę i osobę, dla której jest tworzone.",
    },
    phaseLabels: {
      phase1Eyebrow: "Początek",
      phase1Title: "Pomysł, konsultacja i projekt",
      phase2Eyebrow: "Tworzenie",
      phase2Title: "Od materiału do formy",
      phase3Eyebrow: "Wykończenie",
      phase3Title: "Oprawa, polerowanie i przekazanie",
      phaseWord: "Etap",
      atelierLabel: "Bespoke Atelier",
      handcrafted: "Ręcznie wykonane przez LIDYA",
    },
    atelier: {
      eyebrow: "Pracownia LIDYA",
      title: "Nie wybrane z kolekcji.",
      titleAccent: "Stworzone wokół człowieka.",
      description:
        "Biżuteria na zamówienie jest wymianą pomysłów, doświadczenia i rzemiosła. Każda decyzja podejmowana jest z myślą o osobie, która będzie ją nosić.",
      points: [
        {
          title: "Osobiste",
          text:
            "Każde zamówienie zaczyna się od człowieka, nie od produktu.",
        },
        {
          title: "Ręcznie wykonane",
          text:
            "Biżuteria przechodzi przez naszą własną pracownię od koncepcji aż po wykończenie.",
        },
        {
          title: "Jedyna w swoim rodzaju",
          text:
            "Tworzona, aby nieść historię, której żaden gotowy produkt nie może powtórzyć.",
        },
      ],
      closingBefore: "Najbardziej osobista biżuteria",
      closingAccent: "zaczyna się, zanim jeszcze istnieje.",
    },
    cta: {
      title: "Rozpocznij swoją biżuterię na zamówienie od prywatnej konsultacji",
      sub:
        "Opowiedz nam o swoim pomyśle, a przeprowadzimy Cię przez projekt, materiały, proporcje i rzemiosło, aby stworzyć biżuterię należącą wyłącznie do Ciebie.",
    },
  },
};

function ProcessStep({
  step,
  number,
  reverse,
  locale,
  atelierLabel,
  handcraftedLabel,
}: {
  step: BespokeStep;
  number: number;
  reverse: boolean;
  locale: Locale;
  atelierLabel: string;
  handcraftedLabel: string;
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
              {atelierLabel}
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
          {localized(step.title, locale)}
        </h3>

        <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
          {localized(step.description, locale)}
        </p>

        <div className="mt-8 flex items-center gap-5">
          <span className="h-px w-10 bg-gold" />

          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
            {handcraftedLabel}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function BespokeContent() {
  const { locale } = useLanguage();
  const copy = BESPOKE_COPY[locale];

  const phases: Phase[] = [
    {
      eyebrow: copy.phaseLabels.phase1Eyebrow,
      title: copy.phaseLabels.phase1Title,
      number: "I",
      steps: PHASE_1_STEPS,
      startNumber: 1,
    },
    {
      eyebrow: copy.phaseLabels.phase2Eyebrow,
      title: copy.phaseLabels.phase2Title,
      number: "II",
      steps: PHASE_2_STEPS,
      startNumber: 4,
    },
    {
      eyebrow: copy.phaseLabels.phase3Eyebrow,
      title: copy.phaseLabels.phase3Title,
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
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          <Image
            src="/images/bespoke/hero-bespoke.png"
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[55%_50%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/88 via-[#F7F3EB]/52 to-[#F7F3EB]/08" />

          <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-[#F7F3EB]/35 to-transparent" />

          <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-white/25 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center text-gold">
                    <GemClusterIcon />
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

        {/* INTRO */}
        <section className="bg-brand-white py-20 md:py-24 lg:py-28">
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
                    {copy.phaseLabels.phaseWord} {phase.number}
                  </span>
                </div>
              </div>

              <div className="space-y-20 md:space-y-24 lg:space-y-32">
                {phase.steps.map((step, index) => (
                  <ProcessStep
                    key={`${step.image}-${index}`}
                    step={step}
                    number={phase.startNumber + index}
                    reverse={index % 2 === 1}
                    locale={locale}
                    atelierLabel={copy.phaseLabels.atelierLabel}
                    handcraftedLabel={copy.phaseLabels.handcrafted}
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
                  {copy.atelier.eyebrow}
                </span>

                <h2
                  className="max-w-[920px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.atelier.title}

                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    {copy.atelier.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {copy.atelier.description}
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-brand-white/12 md:grid-cols-3">
              {copy.atelier.points.map((item, index) => (
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

            <div className="mx-auto mt-16 max-w-[980px] text-center md:mt-20">
              <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

              <p
                className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#F5EFE6" }}
              >
                {copy.atelier.closingBefore}

                <span style={{ color: "#E8D8B5" }}>
                  {" "}
                  {copy.atelier.closingAccent}
                </span>
              </p>
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