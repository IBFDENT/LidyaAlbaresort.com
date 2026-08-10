"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

type BespokeCopy = {
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
};

const BESPOKE_COPY: Record<Locale, BespokeCopy> = {
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
          text: "Every commission begins with the person, not the product.",
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
          text: "Her çalışma ürünle değil, kişiyle başlar.",
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
          text: "Každá zákazka začína človekom, nie produktom.",
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
          text: "Každá zakázka začíná člověkem, ne produktem.",
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
          text: "Minden megrendelés az emberrel kezdődik, nem a termékkel.",
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
          text: "Każde zamówienie zaczyna się od człowieka, nie od produktu.",
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
      title:
        "Rozpocznij swoją biżuterię na zamówienie od prywatnej konsultacji",
      sub:
        "Opowiedz nam o swoim pomyśle, a przeprowadzimy Cię przez projekt, materiały, proporcje i rzemiosło, aby stworzyć biżuterię należącą wyłącznie do Ciebie.",
    },
  },

  ru: {
    hero: {
      eyebrow: "На заказ",
      title: "Украшение, созданное именно для вас",
      lead:
        "От первой беседы до финальной полировки каждое украшение на заказ создаётся индивидуально в нашей собственной мастерской с вниманием к пропорциям, материалу, характеру и смыслу.",
      since: "LIDYA ATELIER · С 1989 ГОДА",
      statementEyebrow: "Создано для одного",
      statementBefore: "Ваша идея начинает историю.",
      statementAccent: "Наши руки придают ей форму.",
      imageAlt:
        "Процесс создания украшения на заказ с эскизом кольца, готовым кольцом и ювелирными инструментами",
    },
    intro: {
      eyebrow: "Путь индивидуального украшения",
      title: "От первой беседы",
      titleAccent: "до украшения, принадлежащего только вам.",
      description:
        "Каждый индивидуальный заказ проходит через нашу мастерскую с вниманием к пропорциям, материалу, технике и человеку, для которого создаётся украшение.",
    },
    phaseLabels: {
      phase1Eyebrow: "Начало",
      phase1Title: "Идея, консультация и дизайн",
      phase2Eyebrow: "Создание",
      phase2Title: "От материала к форме",
      phase3Eyebrow: "Завершение",
      phase3Title: "Закрепка, полировка и передача",
      phaseWord: "Этап",
      atelierLabel: "Ателье LIDYA",
      handcrafted: "Ручная работа LIDYA",
    },
    atelier: {
      eyebrow: "Ателье LIDYA",
      title: "Не выбрано из коллекции.",
      titleAccent: "Создано вокруг человека.",
      description:
        "Украшение на заказ рождается из обмена идеями, опыта и мастерства. Каждое решение принимается с учётом человека, который будет его носить.",
      points: [
        {
          title: "Личное",
          text: "Каждый заказ начинается с человека, а не с изделия.",
        },
        {
          title: "Ручная работа",
          text:
            "Украшение проходит через нашу собственную мастерскую от идеи до финальной отделки.",
        },
        {
          title: "Единственное в своём роде",
          text:
            "Создано, чтобы нести историю, которую невозможно повторить готовым украшением.",
        },
      ],
      closingBefore: "Самое личное украшение",
      closingAccent: "начинается ещё до того, как оно существует.",
    },
    cta: {
      title: "Начните создание своего украшения с личной консультации",
      sub:
        "Расскажите нам о своей идее, и мы проведём вас через выбор дизайна, материала, пропорций и техники, чтобы создать украшение, принадлежащее только вам.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Maatwerk",
      title: "Sieraden die rondom u worden gecreëerd",
      lead:
        "Van het eerste gesprek tot de laatste polijstbeurt wordt ieder maatwerkstuk individueel ontwikkeld in ons eigen atelier, met aandacht voor verhoudingen, materiaal, karakter en betekenis.",
      since: "LIDYA ATELIER · SINDS 1989",
      statementEyebrow: "Voor één persoon",
      statementBefore: "Uw idee begint het verhaal.",
      statementAccent: "Onze handen geven het vorm.",
      imageAlt:
        "Proces voor maatwerksieraden met ringschets, afgewerkte ring en juweliersgereedschap",
    },
    intro: {
      eyebrow: "De reis van maatwerk",
      title: "Van het eerste gesprek",
      titleAccent: "tot een sieraad dat alleen van u is.",
      description:
        "Elke maatwerkopdracht doorloopt ons atelier met aandacht voor verhoudingen, materiaal, techniek en de persoon voor wie het sieraad wordt gemaakt.",
    },
    phaseLabels: {
      phase1Eyebrow: "Het begin",
      phase1Title: "Idee, advies en ontwerp",
      phase2Eyebrow: "Het maken",
      phase2Title: "Van materiaal naar vorm",
      phase3Eyebrow: "De afwerking",
      phase3Title: "Zetten, polijsten en overhandigen",
      phaseWord: "Fase",
      atelierLabel: "LIDYA Atelier",
      handcrafted: "Handgemaakt door LIDYA",
    },
    atelier: {
      eyebrow: "Het LIDYA Atelier",
      title: "Niet gekozen uit een collectie.",
      titleAccent: "Gecreëerd rondom een persoon.",
      description:
        "Maatwerksieraden ontstaan uit een uitwisseling van ideeën, ervaring en vakmanschap. Iedere beslissing wordt genomen met de toekomstige drager in gedachten.",
      points: [
        {
          title: "Persoonlijk",
          text: "Elke opdracht begint bij de persoon, niet bij het product.",
        },
        {
          title: "Handgemaakt",
          text:
            "Het sieraad doorloopt ons eigen atelier van concept tot afwerking.",
        },
        {
          title: "Uniek",
          text:
            "Gemaakt om een verhaal te dragen dat geen kant-en-klaar sieraad kan herhalen.",
        },
      ],
      closingBefore: "De meest persoonlijke sieraden",
      closingAccent: "beginnen voordat ze bestaan.",
    },
    cta: {
      title: "Begin uw maatwerkstuk met een privéconsultatie",
      sub:
        "Vertel ons wat u in gedachten heeft en wij begeleiden u bij ontwerp, materiaal, verhoudingen en vakmanschap om een sieraad te creëren dat alleen van u is.",
    },
  },

  da: {
    hero: {
      eyebrow: "Skræddersyet",
      title: "Smykker skabt omkring dig",
      lead:
        "Fra den første samtale til den sidste polering udvikles hvert skræddersyet smykke individuelt i vores eget værksted med fokus på proportioner, materiale, karakter og betydning.",
      since: "LIDYA ATELIER · SIDEN 1989",
      statementEyebrow: "Skabt til én",
      statementBefore: "Din idé begynder historien.",
      statementAccent: "Vores hænder giver den form.",
      imageAlt:
        "Proces for skræddersyet smykkedesign med ringskitse, færdig ring og guldsmedeværktøj",
    },
    intro: {
      eyebrow: "Rejsen til et unikt smykke",
      title: "Fra den første samtale",
      titleAccent: "til et smykke, der kun tilhører dig.",
      description:
        "Hver skræddersyet bestilling bevæger sig gennem vores værksted med fokus på proportioner, materiale, teknik og personen, som smykket skabes til.",
    },
    phaseLabels: {
      phase1Eyebrow: "Begyndelsen",
      phase1Title: "Idé, rådgivning og design",
      phase2Eyebrow: "Fremstillingen",
      phase2Title: "Fra materiale til form",
      phase3Eyebrow: "Afslutningen",
      phase3Title: "Fatning, polering og levering",
      phaseWord: "Fase",
      atelierLabel: "LIDYA Atelier",
      handcrafted: "Håndlavet af LIDYA",
    },
    atelier: {
      eyebrow: "LIDYA Atelier",
      title: "Ikke valgt fra en kollektion.",
      titleAccent: "Skabt omkring et menneske.",
      description:
        "Skræddersyede smykker er et samspil mellem idéer, erfaring og håndværk. Hver beslutning træffes med den kommende bærer for øje.",
      points: [
        {
          title: "Personligt",
          text: "Hver bestilling begynder med personen, ikke produktet.",
        },
        {
          title: "Håndlavet",
          text:
            "Smykket bevæger sig gennem vores eget værksted fra idé til færdiggørelse.",
        },
        {
          title: "Enestående",
          text:
            "Skabt til at bære en historie, som intet færdiglavet smykke kan gentage.",
        },
      ],
      closingBefore: "Det mest personlige smykke",
      closingAccent: "begynder, før det eksisterer.",
    },
    cta: {
      title: "Begynd dit skræddersyede smykke med en privat konsultation",
      sub:
        "Fortæl os om din idé, og vi guider dig gennem design, materialer, proportioner og håndværk for at skabe et smykke, der kun tilhører dig.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Mittatilaus",
      title: "Koru, joka luodaan juuri sinulle",
      lead:
        "Ensimmäisestä keskustelusta viimeiseen kiillotukseen jokainen mittatilauskoru kehitetään yksilöllisesti omassa työpajassamme huomioiden mittasuhteet, materiaali, luonne ja merkitys.",
      since: "LIDYA ATELIER · VUODESTA 1989",
      statementEyebrow: "Luotu yhdelle",
      statementBefore: "Sinun ideasi aloittaa tarinan.",
      statementAccent: "Meidän kätemme antavat sille muodon.",
      imageAlt:
        "Mittatilauskorun suunnitteluprosessi, jossa on sormusluonnos, valmis sormus ja kultasepän työkalut",
    },
    intro: {
      eyebrow: "Mittatilauskorun matka",
      title: "Ensimmäisestä keskustelusta",
      titleAccent: "koruun, joka kuuluu vain sinulle.",
      description:
        "Jokainen mittatilaustyö kulkee työpajamme läpi huomioiden mittasuhteet, materiaalin, tekniikan ja henkilön, jolle koru luodaan.",
    },
    phaseLabels: {
      phase1Eyebrow: "Alku",
      phase1Title: "Idea, konsultaatio ja suunnittelu",
      phase2Eyebrow: "Valmistus",
      phase2Title: "Materiaalista muotoon",
      phase3Eyebrow: "Viimeistely",
      phase3Title: "Istutus, kiillotus ja luovutus",
      phaseWord: "Vaihe",
      atelierLabel: "LIDYA Atelier",
      handcrafted: "LIDYAn käsintekemä",
    },
    atelier: {
      eyebrow: "LIDYA Atelier",
      title: "Ei valittu mallistosta.",
      titleAccent: "Luotu ihmisen ympärille.",
      description:
        "Mittatilauskoru syntyy ideoiden, kokemuksen ja käsityötaidon vuoropuhelusta. Jokainen päätös tehdään tulevaa käyttäjää ajatellen.",
      points: [
        {
          title: "Henkilökohtainen",
          text: "Jokainen työ alkaa ihmisestä, ei tuotteesta.",
        },
        {
          title: "Käsintehty",
          text:
            "Koru kulkee oman työpajamme läpi ideasta viimeistelyyn.",
        },
        {
          title: "Ainutlaatuinen",
          text:
            "Luotu kantamaan tarinaa, jota mikään valmis koru ei voi toistaa.",
        },
      ],
      closingBefore: "Henkilökohtaisin koru",
      closingAccent: "alkaa jo ennen kuin se on olemassa.",
    },
    cta: {
      title: "Aloita mittatilauskorusi yksityisellä tapaamisella",
      sub:
        "Kerro meille ideastasi, ja opastamme sinua suunnittelussa, materiaalien, mittasuhteiden ja käsityön valinnassa, jotta syntyy koru, joka kuuluu vain sinulle.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Skräddarsytt",
      title: "Smycken skapade omkring dig",
      lead:
        "Från det första samtalet till den sista poleringen utvecklas varje skräddarsytt smycke individuellt i vår egen verkstad med fokus på proportioner, material, karaktär och betydelse.",
      since: "LIDYA ATELIER · SEDAN 1989",
      statementEyebrow: "Skapat för en",
      statementBefore: "Din idé börjar berättelsen.",
      statementAccent: "Våra händer ger den form.",
      imageAlt:
        "Process för skräddarsydd smyckesdesign med ringskiss, färdig ring och guldsmedsverktyg",
    },
    intro: {
      eyebrow: "Resan till ett unikt smycke",
      title: "Från det första samtalet",
      titleAccent: "till ett smycke som bara tillhör dig.",
      description:
        "Varje skräddarsydd beställning går genom vår verkstad med fokus på proportioner, material, teknik och personen som smycket skapas för.",
    },
    phaseLabels: {
      phase1Eyebrow: "Början",
      phase1Title: "Idé, konsultation och design",
      phase2Eyebrow: "Tillverkningen",
      phase2Title: "Från material till form",
      phase3Eyebrow: "Finishen",
      phase3Title: "Infattning, polering och överlämning",
      phaseWord: "Fas",
      atelierLabel: "LIDYA Atelier",
      handcrafted: "Handgjort av LIDYA",
    },
    atelier: {
      eyebrow: "LIDYA Atelier",
      title: "Inte valt ur en kollektion.",
      titleAccent: "Skapat kring en person.",
      description:
        "Skräddarsydda smycken är ett möte mellan idéer, erfarenhet och hantverk. Varje beslut fattas med den framtida bäraren i åtanke.",
      points: [
        {
          title: "Personligt",
          text: "Varje beställning börjar med personen, inte produkten.",
        },
        {
          title: "Handgjort",
          text:
            "Smycket går genom vår egen verkstad från idé till färdigställande.",
        },
        {
          title: "Unikt",
          text:
            "Skapat för att bära en berättelse som inget färdigt smycke kan upprepa.",
        },
      ],
      closingBefore: "Det mest personliga smycket",
      closingAccent: "börjar innan det existerar.",
    },
    cta: {
      title: "Börja ditt skräddarsydda smycke med en privat konsultation",
      sub:
        "Berätta vad du har i åtanke så guidar vi dig genom design, material, proportioner och hantverk för att skapa ett smycke som bara tillhör dig.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Sur mesure",
      title: "Un bijou créé autour de vous",
      lead:
        "De la première conversation au polissage final, chaque pièce sur mesure est développée individuellement dans notre propre atelier, avec une attention particulière portée aux proportions, aux matériaux, au caractère et à la signification.",
      since: "ATELIER LIDYA · DEPUIS 1989",
      statementEyebrow: "Créé pour une seule personne",
      statementBefore: "Votre idée commence l’histoire.",
      statementAccent: "Nos mains lui donnent forme.",
      imageAlt:
        "Processus de création d’un bijou sur mesure avec croquis de bague, bague terminée et outils de joaillerie",
    },
    intro: {
      eyebrow: "Le parcours du sur-mesure",
      title: "De la première conversation",
      titleAccent: "à une pièce qui n’appartient qu’à vous.",
      description:
        "Chaque commande sur mesure traverse notre atelier avec une attention particulière portée aux proportions, aux matériaux, à la technique et à la personne pour laquelle elle est créée.",
    },
    phaseLabels: {
      phase1Eyebrow: "Le commencement",
      phase1Title: "Idée, consultation et création",
      phase2Eyebrow: "La fabrication",
      phase2Title: "De la matière à la forme",
      phase3Eyebrow: "La finition",
      phase3Title: "Sertissage, polissage et remise",
      phaseWord: "Étape",
      atelierLabel: "Atelier LIDYA",
      handcrafted: "Façonné à la main par LIDYA",
    },
    atelier: {
      eyebrow: "L’Atelier LIDYA",
      title: "Pas choisi dans une collection.",
      titleAccent: "Créé autour d’une personne.",
      description:
        "La joaillerie sur mesure est un échange d’idées, d’expérience et de savoir-faire. Chaque décision est prise en pensant à la personne qui portera la pièce.",
      points: [
        {
          title: "Personnel",
          text: "Chaque création commence par la personne, pas par le produit.",
        },
        {
          title: "Fait main",
          text:
            "La pièce traverse notre propre atelier, du concept jusqu’à la finition.",
        },
        {
          title: "Unique",
          text:
            "Créée pour porter une histoire qu’aucun bijou prêt à porter ne peut reproduire.",
        },
      ],
      closingBefore: "Le bijou le plus personnel",
      closingAccent: "commence avant même d’exister.",
    },
    cta: {
      title: "Commencez votre pièce sur mesure par une consultation privée",
      sub:
        "Parlez-nous de votre idée et nous vous guiderons à travers le design, les matériaux, les proportions et le savoir-faire afin de créer une pièce qui n’appartient qu’à vous.",
    },
  },

  it: {
    hero: {
      eyebrow: "Su misura",
      title: "Gioielli creati intorno a voi",
      lead:
        "Dalla prima conversazione alla lucidatura finale, ogni gioiello su misura viene sviluppato individualmente nel nostro laboratorio, con attenzione a proporzioni, materiali, carattere e significato.",
      since: "ATELIER LIDYA · DAL 1989",
      statementEyebrow: "Creato per una sola persona",
      statementBefore: "La vostra idea dà inizio alla storia.",
      statementAccent: "Le nostre mani le danno forma.",
      imageAlt:
        "Processo di creazione di gioielli su misura con schizzo dell’anello, anello finito e strumenti da gioielliere",
    },
    intro: {
      eyebrow: "Il percorso del su misura",
      title: "Dalla prima conversazione",
      titleAccent: "a un gioiello che appartiene soltanto a voi.",
      description:
        "Ogni commissione su misura attraversa il nostro laboratorio con attenzione alle proporzioni, ai materiali, alla tecnica e alla persona per cui viene creata.",
    },
    phaseLabels: {
      phase1Eyebrow: "L’inizio",
      phase1Title: "Idea, consulenza e design",
      phase2Eyebrow: "La realizzazione",
      phase2Title: "Dal materiale alla forma",
      phase3Eyebrow: "La finitura",
      phase3Title: "Incastonatura, lucidatura e consegna",
      phaseWord: "Fase",
      atelierLabel: "Atelier LIDYA",
      handcrafted: "Realizzato a mano da LIDYA",
    },
    atelier: {
      eyebrow: "L’Atelier LIDYA",
      title: "Non scelto da una collezione.",
      titleAccent: "Creato intorno a una persona.",
      description:
        "La gioielleria su misura nasce dall’incontro tra idee, esperienza e artigianalità. Ogni decisione viene presa pensando alla persona che indosserà il gioiello.",
      points: [
        {
          title: "Personale",
          text: "Ogni commissione parte dalla persona, non dal prodotto.",
        },
        {
          title: "Fatto a mano",
          text:
            "Il gioiello attraversa il nostro laboratorio dal concetto alla finitura.",
        },
        {
          title: "Unico",
          text:
            "Creato per raccontare una storia che nessun gioiello già pronto può ripetere.",
        },
      ],
      closingBefore: "Il gioiello più personale",
      closingAccent: "inizia prima ancora di esistere.",
    },
    cta: {
      title: "Iniziate il vostro gioiello su misura con una consulenza privata",
      sub:
        "Raccontateci la vostra idea e vi guideremo attraverso design, materiali, proporzioni e artigianalità per creare un gioiello che appartenga soltanto a voi.",
    },
  },

  es: {
    hero: {
      eyebrow: "A medida",
      title: "Joyas creadas en torno a usted",
      lead:
        "Desde la primera conversación hasta el pulido final, cada pieza a medida se desarrolla individualmente en nuestro propio taller, prestando atención a las proporciones, los materiales, el carácter y el significado.",
      since: "ATELIER LIDYA · DESDE 1989",
      statementEyebrow: "Creado para una persona",
      statementBefore: "Su idea comienza la historia.",
      statementAccent: "Nuestras manos le dan forma.",
      imageAlt:
        "Proceso de creación de joyería a medida con boceto de anillo, anillo terminado y herramientas de joyería",
    },
    intro: {
      eyebrow: "El viaje de una pieza a medida",
      title: "Desde la primera conversación",
      titleAccent: "hasta una joya que solo le pertenece a usted.",
      description:
        "Cada encargo a medida pasa por nuestro taller con atención a las proporciones, los materiales, la técnica y la persona para quien se está creando.",
    },
    phaseLabels: {
      phase1Eyebrow: "El comienzo",
      phase1Title: "Idea, consulta y diseño",
      phase2Eyebrow: "La creación",
      phase2Title: "Del material a la forma",
      phase3Eyebrow: "El acabado",
      phase3Title: "Engaste, pulido y entrega",
      phaseWord: "Fase",
      atelierLabel: "Atelier LIDYA",
      handcrafted: "Hecho a mano por LIDYA",
    },
    atelier: {
      eyebrow: "El Atelier LIDYA",
      title: "No se elige de una colección.",
      titleAccent: "Se crea alrededor de una persona.",
      description:
        "La joyería a medida es un intercambio de ideas, experiencia y artesanía. Cada decisión se toma pensando en la persona que llevará la pieza.",
      points: [
        {
          title: "Personal",
          text: "Cada encargo comienza con la persona, no con el producto.",
        },
        {
          title: "Hecho a mano",
          text:
            "La pieza pasa por nuestro propio taller desde el concepto hasta el acabado.",
        },
        {
          title: "Única",
          text:
            "Creada para llevar una historia que ninguna pieza ya terminada puede repetir.",
        },
      ],
      closingBefore: "La joya más personal",
      closingAccent: "comienza antes de existir.",
    },
    cta: {
      title: "Comience su pieza a medida con una consulta privada",
      sub:
        "Cuéntenos qué tiene en mente y le guiaremos a través del diseño, los materiales, las proporciones y la artesanía para crear una pieza que solo le pertenezca a usted.",
    },
  },
};

function ProcessStep({
  step,
  reverse,
  locale,
  atelierLabel,
  handcraftedLabel,
}: {
  step: BespokeStep;
  reverse: boolean;
  locale: Locale;
  atelierLabel: string;
  handcraftedLabel: string;
}) {
  return (
    <article className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-14">
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
            className="
              object-cover
              transition-transform
              duration-[1500ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.035]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/38 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4 px-5 text-center md:bottom-8">
            <span className="h-px w-9 bg-brand-white/60 md:w-10" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-brand-white/80 md:text-[0.58rem] md:tracking-[0.24em]">
              {atelierLabel}
            </span>

            <span className="h-px w-9 bg-brand-white/60 md:w-10" />
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
          className="
            mx-auto
            mt-7
            max-w-[560px]
            font-display
            text-4xl
            leading-[0.98]
            tracking-[-0.025em]
            md:text-5xl
          "
          style={{ color: "#1B0B20" }}
        >
          {localized(step.title, locale)}
        </h3>

        <p className="mx-auto mt-6 max-w-[500px] text-sm leading-7 text-grey md:text-base">
          {localized(step.description, locale)}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-9 bg-gold md:w-10" />

          <span className="max-w-[320px] text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/45 md:text-[0.58rem] md:tracking-[0.22em]">
            {handcraftedLabel}
          </span>

          <span className="h-px w-9 bg-gold md:w-10" />
        </div>
      </div>
    </article>
  );
}

export default function BespokeContent() {
  const { locale } = useLanguage();

  const copy =
    BESPOKE_COPY[locale] ?? BESPOKE_COPY.en;

  const [heroLoaded, setHeroLoaded] =
    useState(false);

  useEffect(() => {
    const frame =
      window.requestAnimationFrame(() => {
        setHeroLoaded(true);
      });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const phases = [
    {
      eyebrow: copy.phaseLabels.phase1Eyebrow,
      title: copy.phaseLabels.phase1Title,
      steps: PHASE_1_STEPS,
    },
    {
      eyebrow: copy.phaseLabels.phase2Eyebrow,
      title: copy.phaseLabels.phase2Title,
      steps: PHASE_2_STEPS,
    },
    {
      eyebrow: copy.phaseLabels.phase3Eyebrow,
      title: copy.phaseLabels.phase3Title,
      steps: PHASE_3_STEPS,
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          className="
            relative
            min-h-[760px]
            overflow-hidden
            bg-ivory
            pt-[108px]
            md:min-h-[900px]
            md:pt-40
            lg:min-h-[940px]
            lg:pt-44
          "
        >
          {/* HERO IMAGE */}
          <div
            className={`
              absolute
              inset-[-2%]
              transition-[opacity,transform,filter]
              duration-[1800ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              motion-reduce:transition-none
              ${
                heroLoaded
                  ? "scale-100 opacity-100 blur-0"
                  : "scale-[1.055] opacity-0 blur-[2px]"
              }
            `}
          >
            <Image
              src="/images/bespoke/hero-bespoke.png"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="
                object-cover
                object-[55%_50%]
                md:object-center
              "
            />
          </div>

          {/* READABILITY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[#F7F3EB]/74
              md:bg-[#F7F3EB]/56
              lg:bg-[#F7F3EB]/40
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F7F3EB]/16 via-transparent to-[#F7F3EB]/34" />

          <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-white/25 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            {/* HERO MAIN */}
            <div className="mx-auto max-w-[1080px] pb-12 text-center md:pb-16 lg:pb-20">
              {/* EYEBROW */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-[1000ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  md:gap-4
                  ${
                    heroLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "120ms",
                }}
              >
                <span className="flex h-9 w-9 items-center justify-center text-gold md:h-10 md:w-10">
                  <GemClusterIcon />
                </span>

                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
                  {copy.hero.eyebrow}
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="
                  mx-auto
                  mt-6
                  max-w-[980px]
                  overflow-hidden
                  font-display
                  text-[2.85rem]
                  leading-[0.93]
                  tracking-[-0.04em]
                  sm:text-[3.2rem]
                  md:mt-7
                  md:text-6xl
                  lg:text-[5.8rem]
                "
                style={{ color: "#1B0B20" }}
              >
                <span
                  className={`
                    block
                    transition-all
                    duration-[1250ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    motion-reduce:transition-none
                    ${
                      heroLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[28%] opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: "220ms",
                  }}
                >
                  {copy.hero.title}
                </span>
              </h1>

              {/* LEAD */}
              <div
                className={`
                  mx-auto
                  mt-7
                  transition-all
                  duration-[1100ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  md:mt-8
                  ${
                    heroLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "420ms",
                }}
              >
                <p className="mx-auto max-w-[640px] text-sm leading-7 text-[#645E5A] md:text-base">
                  {copy.hero.lead}
                </p>
              </div>

              {/* SINCE */}
              <div
                className={`
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-4
                  transition-all
                  duration-[1100ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  ${
                    heroLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "540ms",
                }}
              >
                <span className="h-px w-10 bg-gold md:w-12" />

                <span className="text-[0.53rem] font-semibold uppercase tracking-[0.21em] text-plum-dark/50 md:text-[0.58rem] md:tracking-[0.24em]">
                  {copy.hero.since}
                </span>

                <span className="h-px w-10 bg-gold md:w-12" />
              </div>
            </div>

            {/* =================================================
                HERO STATEMENT
            ================================================== */}
            <div
              className={`
                border-t
                border-plum-dark/10
                py-9
                text-center
                transition-all
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                motion-reduce:transition-none
                md:py-14
                lg:py-16
                ${
                  heroLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{
                transitionDelay: "680ms",
              }}
            >
              <div className="mx-auto max-w-[1000px]">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-gold md:text-[0.62rem] md:tracking-[0.3em]">
                  {copy.hero.statementEyebrow}
                </span>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-[950px]
                    font-display
                    text-[1.8rem]
                    italic
                    leading-[1.12]
                    md:text-4xl
                    lg:text-5xl
                  "
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
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-brand-white py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-[1000px] border-b border-plum-dark/10 pb-14 text-center md:pb-16">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.64rem] md:tracking-[0.32em]">
                {copy.intro.eyebrow}
              </span>

              <h2
                className="
                  mx-auto
                  mt-6
                  max-w-[900px]
                  font-display
                  text-4xl
                  leading-[0.96]
                  tracking-[-0.03em]
                  md:text-5xl
                  lg:text-6xl
                "
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

              <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-grey md:text-base">
                {copy.intro.description}
              </p>

              <span className="mx-auto mt-9 block h-px w-14 bg-gold" />
            </div>
          </div>
        </section>

        {/* =====================================================
            PHASES
        ====================================================== */}
        {phases.map((phase, phaseIndex) => (
          <section
            key={`${phase.eyebrow}-${phaseIndex}`}
            className={
              phaseIndex % 2 === 0
                ? "bg-brand-white py-20 md:py-28 lg:py-32"
                : "bg-ivory py-20 md:py-28 lg:py-32"
            }
          >
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
              <div className="mx-auto mb-16 max-w-[950px] border-b border-plum-dark/10 pb-12 text-center md:mb-20 md:pb-14 lg:mb-24">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                  {phase.eyebrow}
                </span>

                <h2
                  className="
                    mx-auto
                    mt-5
                    max-w-[820px]
                    font-display
                    text-4xl
                    leading-[0.98]
                    tracking-[-0.03em]
                    md:text-5xl
                    lg:text-6xl
                  "
                  style={{ color: "#1B0B20" }}
                >
                  {phase.title}
                </h2>

                <span className="mx-auto mt-8 block h-px w-14 bg-gold" />
              </div>

              <div className="space-y-20 md:space-y-24 lg:space-y-32">
                {phase.steps.map((step, index) => (
                  <ProcessStep
                    key={`${step.image}-${index}`}
                    step={step}
                    reverse={index % 2 === 1}
                    locale={locale}
                    atelierLabel={
                      copy.phaseLabels.atelierLabel
                    }
                    handcraftedLabel={
                      copy.phaseLabels.handcrafted
                    }
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* =====================================================
            DARK ATELIER STATEMENT
        ====================================================== */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-[1000px] text-center">
              <span className="mb-5 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
                {copy.atelier.eyebrow}
              </span>

              <h2
                className="
                  mx-auto
                  max-w-[920px]
                  font-display
                  text-4xl
                  leading-[0.98]
                  tracking-[-0.03em]
                  md:text-5xl
                  lg:text-6xl
                "
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

              <p className="mx-auto mt-7 max-w-[650px] text-sm leading-7 text-brand-white/55 md:text-base">
                {copy.atelier.description}
              </p>

              <span className="mx-auto mt-9 block h-px w-14 bg-gold" />
            </div>

            <div className="mx-auto mt-14 grid max-w-[1180px] border-t border-brand-white/12 md:mt-16 md:grid-cols-3">
              {copy.atelier.points.map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    border-b
                    border-brand-white/12
                    px-2
                    py-9
                    text-center
                    md:border-r
                    md:px-8
                    md:py-12
                    md:last:border-r-0
                  "
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center">
                    <span className="h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
                  </div>

                  <h3
                    className="mt-3 font-display text-2xl md:text-3xl"
                    style={{ color: "#F5EFE6" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[330px] text-sm leading-7 text-brand-white/60">
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

        {/* =====================================================
            CTA
        ====================================================== */}
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