"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type ChildrensWatchesCopy = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    since: string;
    statementBefore: string;
    statementAccent: string;
    imageAlt: string;
  };

  gallery: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    itemLabel: string;
    closingText: string;
    closingAccent: string;
    captions: string[];
    alts: string[];
  };

  craft: {
    eyebrow: string;
    title: string;
    description: string;
    closingText: string;
    closingAccent: string;
    since: string;
    points: {
      title: string;
      description: string;
    }[];
  };

  cta: {
    title: string;
    sub: string;
  };
};

const CHILDRENS_WATCHES_COPY: Record<
  Locale,
  ChildrensWatchesCopy
> = {
  en: {
    hero: {
      eyebrow: "Children's Watches",
      title: "First watches for",
      titleAccent: "small, important moments.",
      description:
        "Thoughtful, playful and comfortable watches for younger wearers — selected to accompany everyday discoveries, first achievements and moments worth remembering.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Time brings new stories.",
      statementAccent: "Some stay with us forever.",
      imageAlt:
        "Children's watches presented in a warm and elegant LIDYA setting",
    },

    gallery: {
      eyebrow: "The Children's Watch Collection",
      title: "Watches chosen for",
      titleAccent: "everyday adventures.",
      description:
        "From playful colours to timeless details, each watch is selected with comfort, clarity and individual character in mind.",
      itemLabel: "Children's Watches",
      closingText: "Every day brings something new.",
      closingAccent: "Every moment can become a memory.",
      captions: [
        "First Watch",
        "Playful Colour",
        "Everyday Companion",
        "Classic Detail",
        "Soft Pastels",
        "Bright Character",
        "Young Explorer",
        "Blue Edition",
        "Sporty Moment",
        "Joyful Time",
      ],
      alts: [
        "Children's first watch in a refined setting",
        "Colourful children's wristwatch",
        "Comfortable everyday children's watch",
        "Children's watch with classic details",
        "Pastel coloured children's watch",
        "Bright and playful children's watch",
        "Children's watch for everyday adventures",
        "Blue children's wristwatch",
        "Sport-inspired children's watch",
        "Playful children's timepiece presented by LIDYA",
      ],
    },

    craft: {
      eyebrow: "Made for Growing Moments",
      title:
        "A child's first watch can become part of the memories they keep",
      description:
        "Comfort, readability, durability and personality matter when choosing a watch for a younger wearer. The right watch should feel natural, easy and special.",
      closingText: "Time teaches us to notice moments.",
      closingAccent: "Memories teach us to keep them.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Comfort",
          description:
            "Lightweight proportions, comfortable straps and thoughtful sizing help a watch sit naturally on a younger wrist.",
        },
        {
          title: "Clarity",
          description:
            "Clear dials, readable markers and intuitive details make learning and reading time easier and more enjoyable.",
        },
        {
          title: "Durability",
          description:
            "Everyday life is full of movement. Materials and construction should be ready for school days, weekends and new discoveries.",
        },
        {
          title: "Character",
          description:
            "Colour, shape and playful details allow a child's watch to feel personal and become something they are proud to wear.",
        },
      ],
    },

    cta: {
      title: "Choose their first watch together",
      sub:
        "Visit LIDYA and discover children's watches in person. Find the size, colour and character that feels right for their first special timepiece.",
    },
  },

  de: {
    hero: {
      eyebrow: "Kinderuhren",
      title: "Die erste Uhr für",
      titleAccent: "kleine, große Momente.",
      description:
        "Durchdachte, verspielte und bequeme Uhren für jüngere Träger — ausgewählt für tägliche Entdeckungen, erste Erfolge und unvergessliche Momente.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Zeit bringt neue Geschichten.",
      statementAccent: "Manche bleiben für immer.",
      imageAlt:
        "Kinderuhren in einer warmen und eleganten LIDYA Umgebung",
    },

    gallery: {
      eyebrow: "Die Kinderuhrenkollektion",
      title: "Uhren ausgewählt für",
      titleAccent: "alltägliche Abenteuer.",
      description:
        "Von verspielten Farben bis zu zeitlosen Details wird jede Uhr mit Blick auf Komfort, Übersichtlichkeit und persönlichen Charakter ausgewählt.",
      itemLabel: "Kinderuhren",
      closingText: "Jeder Tag bringt etwas Neues.",
      closingAccent: "Jeder Moment kann Erinnerung werden.",
      captions: [
        "Die erste Uhr",
        "Verspielte Farbe",
        "Täglicher Begleiter",
        "Klassisches Detail",
        "Sanfte Pastelltöne",
        "Fröhlicher Charakter",
        "Kleine Entdecker",
        "Blue Edition",
        "Sportlicher Moment",
        "Zeit für Freude",
      ],
      alts: [
        "Erste Kinderuhr in eleganter Umgebung",
        "Farbige Kinderarmbanduhr",
        "Bequeme Kinderuhr für jeden Tag",
        "Kinderuhr mit klassischen Details",
        "Kinderuhr in Pastellfarben",
        "Fröhliche farbige Kinderuhr",
        "Kinderuhr für tägliche Abenteuer",
        "Blaue Kinderarmbanduhr",
        "Sportlich inspirierte Kinderuhr",
        "Verspielte Kinderuhr von LIDYA",
      ],
    },

    craft: {
      eyebrow: "Für wachsende Momente",
      title:
        "Die erste Uhr eines Kindes kann Teil wertvoller Erinnerungen werden",
      description:
        "Komfort, Lesbarkeit, Haltbarkeit und Persönlichkeit spielen bei der Wahl einer Kinderuhr eine wichtige Rolle.",
      closingText: "Zeit lehrt uns, Momente wahrzunehmen.",
      closingAccent: "Erinnerungen lehren uns, sie zu bewahren.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Komfort",
          description:
            "Leichte Proportionen, angenehme Armbänder und passende Größen sorgen für natürlichen Tragekomfort.",
        },
        {
          title: "Übersichtlichkeit",
          description:
            "Klare Zifferblätter und gut lesbare Markierungen erleichtern das Lernen und Ablesen der Zeit.",
        },
        {
          title: "Haltbarkeit",
          description:
            "Der Alltag ist voller Bewegung. Materialien und Konstruktion sollten Schule, Freizeit und Abenteuer begleiten können.",
        },
        {
          title: "Charakter",
          description:
            "Farben, Formen und spielerische Details machen eine Kinderuhr persönlich und besonders.",
        },
      ],
    },

    cta: {
      title: "Wählen Sie gemeinsam die erste Uhr",
      sub:
        "Besuchen Sie LIDYA und entdecken Sie Kinderuhren persönlich. Finden Sie Größe, Farbe und Charakter für den ersten besonderen Zeitmesser.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Çocuk Saatleri",
      title: "Küçük ama büyük",
      titleAccent: "anlar için ilk saatler.",
      description:
        "Genç kullanıcılar için düşünülmüş, eğlenceli ve rahat saatler — günlük keşiflere, ilk başarılara ve unutulmayacak anlara eşlik etmek için seçildi.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Zaman yeni hikâyeler getirir.",
      statementAccent: "Bazıları sonsuza kadar kalır.",
      imageAlt:
        "Sıcak ve zarif LIDYA ortamında çocuk saatleri",
    },

    gallery: {
      eyebrow: "Çocuk Saat Koleksiyonu",
      title: "Her günün",
      titleAccent: "macerası için saatler.",
      description:
        "Eğlenceli renklerden zamansız detaylara kadar her model rahatlık, okunabilirlik ve kişisel karakter düşünülerek seçilir.",
      itemLabel: "Çocuk Saatleri",
      closingText: "Her gün yeni bir şey getirir.",
      closingAccent: "Her an bir hatıraya dönüşebilir.",
      captions: [
        "İlk Saat",
        "Eğlenceli Renk",
        "Günlük Arkadaş",
        "Klasik Detay",
        "Pastel Tonlar",
        "Canlı Karakter",
        "Genç Kaşif",
        "Mavi Seri",
        "Sportif An",
        "Neşeli Zaman",
      ],
      alts: [
        "Çocuklar için ilk saat",
        "Renkli çocuk kol saati",
        "Rahat günlük çocuk saati",
        "Klasik detaylı çocuk saati",
        "Pastel tonlu çocuk saati",
        "Canlı renkli çocuk saati",
        "Macera için çocuk saati",
        "Mavi çocuk kol saati",
        "Sportif çocuk saati",
        "LIDYA çocuk saati",
      ],
    },

    craft: {
      eyebrow: "Büyüyen Anlar İçin",
      title:
        "Bir çocuğun ilk saati sakladığı anıların bir parçası olabilir",
      description:
        "Rahatlık, okunabilirlik, dayanıklılık ve kişilik genç kullanıcılar için saat seçerken önemlidir.",
      closingText: "Zaman anları fark etmeyi öğretir.",
      closingAccent: "Anılar onları saklamayı öğretir.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Rahatlık",
          description:
            "Hafif yapı, rahat kayışlar ve doğru ölçüler saatin küçük bilekte doğal durmasını sağlar.",
        },
        {
          title: "Okunabilirlik",
          description:
            "Net kadranlar ve kolay okunabilen işaretler zamanı öğrenmeyi daha keyifli hale getirir.",
        },
        {
          title: "Dayanıklılık",
          description:
            "Okul, oyun ve keşiflerle dolu günler için sağlam malzeme ve yapı önemlidir.",
        },
        {
          title: "Karakter",
          description:
            "Renkler, şekiller ve eğlenceli detaylar saati kişisel hale getirir.",
        },
      ],
    },

    cta: {
      title: "İlk saatlerini birlikte seçin",
      sub:
        "LIDYA'yı ziyaret edin ve çocuk saatlerini yakından keşfedin. Onlara uygun boyutu, rengi ve karakteri birlikte bulun.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Detské hodinky",
      title: "Prvé hodinky pre",
      titleAccent: "malé veľké okamihy.",
      description:
        "Premyslené, hravé a pohodlné hodinky pre mladších nositeľov — vybrané tak, aby sprevádzali každodenné objavy, prvé úspechy aj chvíle, na ktoré sa nezabúda.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Čas prináša nové príbehy.",
      statementAccent: "Niektoré si pamätáme navždy.",
      imageAlt:
        "Detské hodinky prezentované v príjemnom a elegantnom prostredí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcia detských hodiniek",
      title: "Hodinky vybrané pre",
      titleAccent: "každodenné dobrodružstvá.",
      description:
        "Od hravých farieb po nadčasové detaily — každý model vyberáme s dôrazom na pohodlie, prehľadnosť a osobitý charakter.",
      itemLabel: "Detské hodinky",
      closingText: "Každý deň prináša niečo nové.",
      closingAccent: "Každý okamih sa môže stať spomienkou.",
      captions: [
        "Prvé hodinky",
        "Hravé farby",
        "Každodenný spoločník",
        "Klasický detail",
        "Jemné pastelové tóny",
        "Farebný charakter",
        "Malý objaviteľ",
        "Modrá edícia",
        "Športový okamih",
        "Čas radosti",
      ],
      alts: [
        "Prvé detské hodinky v elegantnom prostredí",
        "Farebné detské náramkové hodinky",
        "Pohodlné detské hodinky na každý deň",
        "Detské hodinky s klasickými detailmi",
        "Detské hodinky v pastelových farbách",
        "Hravé farebné detské hodinky",
        "Detské hodinky pre každodenné dobrodružstvá",
        "Modré detské náramkové hodinky",
        "Športovo ladené detské hodinky",
        "Hravé detské hodinky LIDYA",
      ],
    },

    craft: {
      eyebrow: "Pre okamihy, ktoré rastú s nimi",
      title:
        "Prvé hodinky sa môžu stať súčasťou spomienok, ktoré si dieťa uchová",
      description:
        "Pri výbere hodiniek pre mladších nositeľov záleží na pohodlí, prehľadnosti, odolnosti aj osobnosti. Tie správne by mali pôsobiť prirodzene, jednoducho a zároveň výnimočne.",
      closingText: "Čas nás učí vnímať okamihy.",
      closingAccent: "Spomienky nás učia uchovať si ich.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Pohodlie",
          description:
            "Ľahké proporcie, pohodlné remienky a správna veľkosť pomáhajú hodinkám prirodzene sedieť na menšom zápästí.",
        },
        {
          title: "Prehľadnosť",
          description:
            "Čisté ciferníky, dobre čitateľné značky a intuitívne detaily uľahčujú učenie a čítanie času.",
        },
        {
          title: "Odolnosť",
          description:
            "Každodenný život je plný pohybu. Materiály a konštrukcia by mali zvládnuť školu, voľný čas aj nové dobrodružstvá.",
        },
        {
          title: "Charakter",
          description:
            "Farby, tvary a hravé detaily dávajú detským hodinkám osobnosť a robia z nich niečo, čo dieťa rado nosí.",
        },
      ],
    },

    cta: {
      title: "Vyberte ich prvé hodinky spoločne",
      sub:
        "Navštívte LIDYA a objavte detské hodinky osobne. Nájdite veľkosť, farbu a charakter, ktoré budú správne pre ich prvé výnimočné hodinky.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Dětské hodinky",
      title: "První hodinky pro",
      titleAccent: "malé velké okamžiky.",
      description:
        "Promyšlené, hravé a pohodlné hodinky pro mladší nositele — vybrané tak, aby doprovázely každodenní objevy, první úspěchy i chvíle, na které se nezapomíná.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Čas přináší nové příběhy.",
      statementAccent: "Některé si pamatujeme navždy.",
      imageAlt:
        "Dětské hodinky prezentované v příjemném prostředí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekce dětských hodinek",
      title: "Hodinky vybrané pro",
      titleAccent: "každodenní dobrodružství.",
      description:
        "Od hravých barev po nadčasové detaily vybíráme každý model s důrazem na pohodlí, přehlednost a osobitý charakter.",
      itemLabel: "Dětské hodinky",
      closingText: "Každý den přináší něco nového.",
      closingAccent: "Každý okamžik se může stát vzpomínkou.",
      captions: [
        "První hodinky",
        "Hravé barvy",
        "Každodenní společník",
        "Klasický detail",
        "Jemné pastelové tóny",
        "Barevný charakter",
        "Malý objevitel",
        "Modrá edice",
        "Sportovní okamžik",
        "Čas radosti",
      ],
      alts: [
        "První dětské hodinky",
        "Barevné dětské náramkové hodinky",
        "Pohodlné dětské hodinky pro každý den",
        "Dětské hodinky s klasickými detaily",
        "Dětské hodinky v pastelových barvách",
        "Hravé barevné dětské hodinky",
        "Dětské hodinky pro dobrodružství",
        "Modré dětské hodinky",
        "Sportovně laděné dětské hodinky",
        "Dětské hodinky LIDYA",
      ],
    },

    craft: {
      eyebrow: "Pro okamžiky, které rostou s nimi",
      title:
        "První hodinky se mohou stát součástí vzpomínek, které si dítě uchová",
      description:
        "Při výběru hodinek pro mladší nositele záleží na pohodlí, přehlednosti, odolnosti i osobnosti.",
      closingText: "Čas nás učí vnímat okamžiky.",
      closingAccent: "Vzpomínky nás učí uchovat si je.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Pohodlí",
          description:
            "Lehké proporce, pohodlné řemínky a správná velikost pomáhají hodinkám přirozeně sedět.",
        },
        {
          title: "Přehlednost",
          description:
            "Čisté ciferníky a dobře čitelné značky usnadňují učení a čtení času.",
        },
        {
          title: "Odolnost",
          description:
            "Materiály a konstrukce by měly zvládnout školu, volný čas i nová dobrodružství.",
        },
        {
          title: "Charakter",
          description:
            "Barvy, tvary a hravé detaily dávají dětským hodinkám osobnost.",
        },
      ],
    },

    cta: {
      title: "Vyberte jejich první hodinky společně",
      sub:
        "Navštivte LIDYA a objevte dětské hodinky osobně. Najděte správnou velikost, barvu a charakter.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Gyermekórák",
      title: "Az első óra",
      titleAccent: "a kis nagy pillanatokhoz.",
      description:
        "Átgondolt, játékos és kényelmes órák fiatalabb viselők számára — mindennapi felfedezésekhez, első sikerekhez és emlékezetes pillanatokhoz.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "Az idő új történeteket hoz.",
      statementAccent: "Néhány örökre velünk marad.",
      imageAlt:
        "Gyermekórák elegáns LIDYA környezetben",
    },

    gallery: {
      eyebrow: "Gyermekóra kollekció",
      title: "Órák",
      titleAccent: "mindennapi kalandokhoz.",
      description:
        "A játékos színektől az időtlen részletekig minden modellt a kényelem, az olvashatóság és az egyéni karakter alapján választunk.",
      itemLabel: "Gyermekórák",
      closingText: "Minden nap valami újat hoz.",
      closingAccent: "Minden pillanat emlékké válhat.",
      captions: [
        "Első óra",
        "Játékos színek",
        "Mindennapi társ",
        "Klasszikus részlet",
        "Pasztell árnyalatok",
        "Vidám karakter",
        "Kis felfedező",
        "Kék kiadás",
        "Sportos pillanat",
        "Örömteli idő",
      ],
      alts: [
        "Első gyermekóra",
        "Színes gyermekóra",
        "Kényelmes gyermekóra",
        "Klasszikus gyermekóra",
        "Pasztell gyermekóra",
        "Vidám gyermekóra",
        "Gyermekóra kalandokhoz",
        "Kék gyermekóra",
        "Sportos gyermekóra",
        "LIDYA gyermekóra",
      ],
    },

    craft: {
      eyebrow: "A növekvő pillanatokhoz",
      title:
        "Az első óra azoknak az emlékeknek a része lehet, amelyeket egy gyermek megőriz",
      description:
        "A kényelem, olvashatóság, tartósság és személyiség mind fontos szempont.",
      closingText: "Az idő megtanít észrevenni a pillanatokat.",
      closingAccent: "Az emlékek megtanítanak megőrizni őket.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Kényelem",
          description:
            "A könnyű arányok és kényelmes szíjak természetes viseletet biztosítanak.",
        },
        {
          title: "Olvashatóság",
          description:
            "A tiszta számlap és jól látható jelölések könnyebbé teszik az idő leolvasását.",
        },
        {
          title: "Tartósság",
          description:
            "Az anyagoknak készen kell állniuk az iskolára, játékra és kalandokra.",
        },
        {
          title: "Karakter",
          description:
            "A színek és játékos részletek személyessé teszik az órát.",
        },
      ],
    },

    cta: {
      title: "Válasszák ki együtt az első órát",
      sub:
        "Látogassanak el a LIDYA-hoz, és találják meg a megfelelő méretet, színt és karaktert.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki dziecięce",
      title: "Pierwszy zegarek na",
      titleAccent: "małe wielkie chwile.",
      description:
        "Przemyślane, radosne i wygodne zegarki dla młodszych użytkowników — wybrane z myślą o codziennych odkryciach, pierwszych sukcesach i niezapomnianych chwilach.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Czas przynosi nowe historie.",
      statementAccent: "Niektóre zostają z nami na zawsze.",
      imageAlt:
        "Zegarki dziecięce w eleganckim otoczeniu LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcja zegarków dziecięcych",
      title: "Zegarki wybrane na",
      titleAccent: "codzienne przygody.",
      description:
        "Od radosnych kolorów po ponadczasowe detale — każdy model wybieramy pod kątem wygody, czytelności i charakteru.",
      itemLabel: "Zegarki dziecięce",
      closingText: "Każdy dzień przynosi coś nowego.",
      closingAccent: "Każda chwila może stać się wspomnieniem.",
      captions: [
        "Pierwszy zegarek",
        "Radosny kolor",
        "Codzienny towarzysz",
        "Klasyczny detal",
        "Pastelowe odcienie",
        "Kolorowy charakter",
        "Mały odkrywca",
        "Niebieska edycja",
        "Sportowa chwila",
        "Czas radości",
      ],
      alts: [
        "Pierwszy zegarek dziecięcy",
        "Kolorowy zegarek dziecięcy",
        "Wygodny zegarek dziecięcy",
        "Klasyczny zegarek dziecięcy",
        "Pastelowy zegarek dziecięcy",
        "Radosny zegarek dziecięcy",
        "Zegarek dziecięcy na przygody",
        "Niebieski zegarek dziecięcy",
        "Sportowy zegarek dziecięcy",
        "Zegarek dziecięcy LIDYA",
      ],
    },

    craft: {
      eyebrow: "Dla chwil, które rosną razem z nimi",
      title:
        "Pierwszy zegarek może stać się częścią wspomnień, które dziecko zachowa",
      description:
        "Wygoda, czytelność, trwałość i osobisty charakter są kluczowe przy wyborze dziecięcego zegarka.",
      closingText: "Czas uczy zauważać chwile.",
      closingAccent: "Wspomnienia uczą je zachowywać.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Wygoda",
          description:
            "Lekka konstrukcja i wygodny pasek pomagają zegarkowi naturalnie leżeć na nadgarstku.",
        },
        {
          title: "Czytelność",
          description:
            "Czytelna tarcza ułatwia naukę i odczytywanie czasu.",
        },
        {
          title: "Trwałość",
          description:
            "Materiały powinny być gotowe na szkołę, zabawę i codzienne przygody.",
        },
        {
          title: "Charakter",
          description:
            "Kolory i detale pozwalają wyrazić indywidualną osobowość.",
        },
      ],
    },

    cta: {
      title: "Wybierzcie razem pierwszy zegarek",
      sub:
        "Odwiedź LIDYA i znajdź odpowiedni rozmiar, kolor i charakter pierwszego wyjątkowego zegarka.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Детские часы",
      title: "Первые часы для",
      titleAccent: "маленьких больших моментов.",
      description:
        "Продуманные, яркие и удобные часы для юных владельцев — для ежедневных открытий, первых успехов и моментов, которые остаются в памяти.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Время приносит новые истории.",
      statementAccent: "Некоторые остаются навсегда.",
      imageAlt:
        "Детские часы в элегантной атмосфере LIDYA",
    },

    gallery: {
      eyebrow: "Коллекция детских часов",
      title: "Часы для",
      titleAccent: "каждодневных приключений.",
      description:
        "От ярких цветов до классических деталей — каждая модель выбирается с учётом комфорта, читаемости и характера.",
      itemLabel: "Детские часы",
      closingText: "Каждый день приносит что-то новое.",
      closingAccent: "Каждый момент может стать воспоминанием.",
      captions: [
        "Первые часы",
        "Яркий цвет",
        "На каждый день",
        "Классическая деталь",
        "Пастельные оттенки",
        "Яркий характер",
        "Юный исследователь",
        "Синяя серия",
        "Спортивный момент",
        "Время радости",
      ],
      alts: [
        "Первые детские часы",
        "Яркие детские часы",
        "Удобные детские часы",
        "Классические детские часы",
        "Детские часы пастельного цвета",
        "Цветные детские часы",
        "Детские часы для приключений",
        "Синие детские часы",
        "Спортивные детские часы",
        "Детские часы LIDYA",
      ],
    },

    craft: {
      eyebrow: "Для растущих моментов",
      title:
        "Первые часы могут стать частью воспоминаний, которые ребёнок сохранит",
      description:
        "Комфорт, читаемость, долговечность и индивидуальность особенно важны при выборе часов для ребёнка.",
      closingText: "Время учит замечать моменты.",
      closingAccent: "Воспоминания учат сохранять их.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Комфорт",
          description:
            "Лёгкий корпус и удобный ремешок помогают часам естественно сидеть на запястье.",
        },
        {
          title: "Читаемость",
          description:
            "Понятный циферблат делает изучение времени простым и приятным.",
        },
        {
          title: "Надёжность",
          description:
            "Часы должны быть готовы к школе, играм и повседневным приключениям.",
        },
        {
          title: "Характер",
          description:
            "Цвета и детали помогают сделать часы по-настоящему личными.",
        },
      ],
    },

    cta: {
      title: "Выберите первые часы вместе",
      sub:
        "Посетите LIDYA и найдите подходящий размер, цвет и характер первых особенных часов.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Kinderhorloges",
      title: "Het eerste horloge voor",
      titleAccent: "kleine, grote momenten.",
      description:
        "Doordachte, speelse en comfortabele horloges voor jonge dragers — gekozen voor dagelijkse ontdekkingen, eerste successen en momenten om te onthouden.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Tijd brengt nieuwe verhalen.",
      statementAccent: "Sommige blijven voor altijd.",
      imageAlt:
        "Kinderhorloges in een elegante LIDYA omgeving",
    },

    gallery: {
      eyebrow: "De kinderhorlogecollectie",
      title: "Horloges gekozen voor",
      titleAccent: "dagelijkse avonturen.",
      description:
        "Van speelse kleuren tot tijdloze details: elk model wordt gekozen voor comfort, leesbaarheid en karakter.",
      itemLabel: "Kinderhorloges",
      closingText: "Elke dag brengt iets nieuws.",
      closingAccent: "Elk moment kan een herinnering worden.",
      captions: [
        "Eerste horloge",
        "Speelse kleur",
        "Dagelijkse metgezel",
        "Klassiek detail",
        "Pasteltinten",
        "Vrolijk karakter",
        "Jonge ontdekker",
        "Blauwe editie",
        "Sportief moment",
        "Tijd voor plezier",
      ],
      alts: [
        "Eerste kinderhorloge",
        "Kleurrijk kinderhorloge",
        "Comfortabel kinderhorloge",
        "Klassiek kinderhorloge",
        "Pastelkleurig kinderhorloge",
        "Speels kinderhorloge",
        "Kinderhorloge voor avontuur",
        "Blauw kinderhorloge",
        "Sportief kinderhorloge",
        "LIDYA kinderhorloge",
      ],
    },

    craft: {
      eyebrow: "Voor momenten die meegroeien",
      title:
        "Een eerste horloge kan deel worden van herinneringen die een kind bewaart",
      description:
        "Comfort, leesbaarheid, duurzaamheid en persoonlijkheid zijn belangrijk bij het kiezen van een kinderhorloge.",
      closingText: "Tijd leert ons momenten opmerken.",
      closingAccent: "Herinneringen leren ons ze bewaren.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Comfort",
          description:
            "Lichte proporties en comfortabele bandjes zorgen voor een natuurlijke pasvorm.",
        },
        {
          title: "Leesbaarheid",
          description:
            "Heldere wijzerplaten maken leren klokkijken eenvoudiger.",
        },
        {
          title: "Duurzaamheid",
          description:
            "Een kinderhorloge moet klaar zijn voor school, spel en avontuur.",
        },
        {
          title: "Karakter",
          description:
            "Kleur en speelse details maken het horloge persoonlijk.",
        },
      ],
    },

    cta: {
      title: "Kies samen het eerste horloge",
      sub:
        "Bezoek LIDYA en ontdek de juiste maat, kleur en stijl voor hun eerste bijzondere horloge.",
    },
  },

  da: {
    hero: {
      eyebrow: "Børneure",
      title: "Det første ur til",
      titleAccent: "små, store øjeblikke.",
      description:
        "Gennemtænkte, legende og komfortable ure til yngre brugere — udvalgt til hverdagens opdagelser, første succeser og øjeblikke, der huskes.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Tiden bringer nye historier.",
      statementAccent: "Nogle bliver hos os for altid.",
      imageAlt:
        "Børneure i elegante LIDYA omgivelser",
    },

    gallery: {
      eyebrow: "Kollektionen af børneure",
      title: "Ure udvalgt til",
      titleAccent: "hverdagens eventyr.",
      description:
        "Fra legende farver til tidløse detaljer vælges hvert ur med fokus på komfort, læsbarhed og personlighed.",
      itemLabel: "Børneure",
      closingText: "Hver dag bringer noget nyt.",
      closingAccent: "Hvert øjeblik kan blive et minde.",
      captions: [
        "Det første ur",
        "Legende farve",
        "Hverdagens ledsager",
        "Klassisk detalje",
        "Pastelfarver",
        "Farverig karakter",
        "Lille opdagelsesrejsende",
        "Blå udgave",
        "Sportsligt øjeblik",
        "Tid til glæde",
      ],
      alts: [
        "Første børneur",
        "Farverigt børneur",
        "Komfortabelt børneur",
        "Klassisk børneur",
        "Pastelfarvet børneur",
        "Legende børneur",
        "Børneur til eventyr",
        "Blåt børneur",
        "Sportsligt børneur",
        "LIDYA børneur",
      ],
    },

    craft: {
      eyebrow: "Til øjeblikke, der vokser med dem",
      title:
        "Det første ur kan blive en del af de minder, et barn tager med sig",
      description:
        "Komfort, læsbarhed, holdbarhed og personlighed er vigtige elementer.",
      closingText: "Tiden lærer os at lægge mærke til øjeblikke.",
      closingAccent: "Minder lærer os at bevare dem.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Komfort",
          description:
            "Lette proportioner og behagelige remme giver en naturlig pasform.",
        },
        {
          title: "Læsbarhed",
          description:
            "Tydelige urskiver gør det lettere at lære klokken.",
        },
        {
          title: "Holdbarhed",
          description:
            "Uret skal kunne følge med skole, leg og eventyr.",
        },
        {
          title: "Karakter",
          description:
            "Farver og legende detaljer gør uret personligt.",
        },
      ],
    },

    cta: {
      title: "Vælg det første ur sammen",
      sub:
        "Besøg LIDYA og find den rigtige størrelse, farve og karakter til deres første særlige ur.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Lasten kellot",
      title: "Ensimmäinen kello",
      titleAccent: "pieniin suuriin hetkiin.",
      description:
        "Harkittuja, leikkisiä ja mukavia kelloja nuoremmille käyttäjille — arjen löytöihin, ensimmäisiin onnistumisiin ja muistettaviin hetkiin.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Aika tuo uusia tarinoita.",
      statementAccent: "Jotkut jäävät mieleen ikuisesti.",
      imageAlt:
        "Lasten kelloja elegantissa LIDYA ympäristössä",
    },

    gallery: {
      eyebrow: "Lasten kellomallisto",
      title: "Kelloja",
      titleAccent: "jokapäiväisiin seikkailuihin.",
      description:
        "Leikkisistä väreistä ajattomiin yksityiskohtiin jokainen malli valitaan mukavuuden, selkeyden ja persoonallisuuden perusteella.",
      itemLabel: "Lasten kellot",
      closingText: "Jokainen päivä tuo jotain uutta.",
      closingAccent: "Jokaisesta hetkestä voi tulla muisto.",
      captions: [
        "Ensimmäinen kello",
        "Leikkisä väri",
        "Arjen kumppani",
        "Klassinen yksityiskohta",
        "Pastellisävyt",
        "Värikäs luonne",
        "Pieni tutkimusmatkailija",
        "Sininen versio",
        "Urheilullinen hetki",
        "Iloinen aika",
      ],
      alts: [
        "Ensimmäinen lasten kello",
        "Värikäs lasten kello",
        "Mukava lasten kello",
        "Klassinen lasten kello",
        "Pastellivärinen lasten kello",
        "Leikkisä lasten kello",
        "Lasten kello seikkailuihin",
        "Sininen lasten kello",
        "Urheilullinen lasten kello",
        "LIDYA lasten kello",
      ],
    },

    craft: {
      eyebrow: "Kasvaviin hetkiin",
      title:
        "Ensimmäinen kello voi olla osa muistoja, jotka lapsi säilyttää",
      description:
        "Mukavuus, luettavuus, kestävyys ja persoonallisuus ovat tärkeitä.",
      closingText: "Aika opettaa huomaamaan hetket.",
      closingAccent: "Muistot opettavat säilyttämään ne.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Mukavuus",
          description:
            "Kevyet mittasuhteet ja mukava ranneke tekevät kellosta miellyttävän käyttää.",
        },
        {
          title: "Selkeys",
          description:
            "Selkeä kellotaulu helpottaa kellonajan oppimista.",
        },
        {
          title: "Kestävyys",
          description:
            "Kellon tulee kestää koulua, leikkiä ja seikkailuja.",
        },
        {
          title: "Luonne",
          description:
            "Värit ja yksityiskohdat tekevät kellosta henkilökohtaisen.",
        },
      ],
    },

    cta: {
      title: "Valitkaa ensimmäinen kello yhdessä",
      sub:
        "Tutustukaa LIDYA:n lasten kelloihin ja löytäkää oikea koko, väri ja luonne.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Barnklockor",
      title: "Den första klockan för",
      titleAccent: "små, stora ögonblick.",
      description:
        "Genomtänkta, lekfulla och bekväma klockor för yngre bärare — utvalda för vardagens upptäckter, första framgångar och minnesvärda stunder.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Tiden ger nya berättelser.",
      statementAccent: "Vissa stannar för alltid.",
      imageAlt:
        "Barnklockor presenterade i elegant LIDYA miljö",
    },

    gallery: {
      eyebrow: "Kollektionen av barnklockor",
      title: "Klockor valda för",
      titleAccent: "vardagens äventyr.",
      description:
        "Från lekfulla färger till tidlösa detaljer väljs varje modell med fokus på komfort, tydlighet och personlighet.",
      itemLabel: "Barnklockor",
      closingText: "Varje dag ger något nytt.",
      closingAccent: "Varje ögonblick kan bli ett minne.",
      captions: [
        "Första klockan",
        "Lekfull färg",
        "Vardaglig följeslagare",
        "Klassisk detalj",
        "Pastelltoner",
        "Färgstark karaktär",
        "Liten upptäckare",
        "Blå utgåva",
        "Sportigt ögonblick",
        "Tid för glädje",
      ],
      alts: [
        "Första barnklockan",
        "Färgglad barnklocka",
        "Bekväm barnklocka",
        "Klassisk barnklocka",
        "Pastellfärgad barnklocka",
        "Lekfull barnklocka",
        "Barnklocka för äventyr",
        "Blå barnklocka",
        "Sportig barnklocka",
        "LIDYA barnklocka",
      ],
    },

    craft: {
      eyebrow: "För ögonblick som växer med dem",
      title:
        "Den första klockan kan bli en del av de minnen barnet bär med sig",
      description:
        "Komfort, tydlighet, hållbarhet och personlighet är viktiga vid valet av barnklocka.",
      closingText: "Tiden lär oss att se ögonblicken.",
      closingAccent: "Minnen lär oss att bevara dem.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Komfort",
          description:
            "Lätta proportioner och bekväma remmar gör klockan naturlig på handleden.",
        },
        {
          title: "Tydlighet",
          description:
            "Tydliga urtavlor gör det enklare att lära sig tiden.",
        },
        {
          title: "Hållbarhet",
          description:
            "Klockan ska vara redo för skola, lek och äventyr.",
        },
        {
          title: "Karaktär",
          description:
            "Färg och lekfulla detaljer gör klockan personlig.",
        },
      ],
    },

    cta: {
      title: "Välj den första klockan tillsammans",
      sub:
        "Besök LIDYA och hitta rätt storlek, färg och karaktär för deras första speciella klocka.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres enfant",
      title: "La première montre pour",
      titleAccent: "les petits grands moments.",
      description:
        "Des montres pensées, ludiques et confortables pour les plus jeunes — choisies pour accompagner les découvertes, les premières réussites et les moments inoubliables.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "Le temps apporte de nouvelles histoires.",
      statementAccent: "Certaines restent pour toujours.",
      imageAlt:
        "Montres enfant présentées dans un univers élégant LIDYA",
    },

    gallery: {
      eyebrow: "La collection de montres enfant",
      title: "Des montres choisies pour",
      titleAccent: "les aventures du quotidien.",
      description:
        "Des couleurs ludiques aux détails intemporels, chaque modèle est choisi pour son confort, sa lisibilité et son caractère.",
      itemLabel: "Montres enfant",
      closingText: "Chaque jour apporte quelque chose de nouveau.",
      closingAccent: "Chaque instant peut devenir un souvenir.",
      captions: [
        "Première montre",
        "Couleur ludique",
        "Compagne du quotidien",
        "Détail classique",
        "Tons pastel",
        "Caractère coloré",
        "Petit explorateur",
        "Édition bleue",
        "Moment sportif",
        "Temps de joie",
      ],
      alts: [
        "Première montre enfant",
        "Montre enfant colorée",
        "Montre enfant confortable",
        "Montre enfant classique",
        "Montre enfant pastel",
        "Montre enfant ludique",
        "Montre enfant pour l'aventure",
        "Montre enfant bleue",
        "Montre enfant sportive",
        "Montre enfant LIDYA",
      ],
    },

    craft: {
      eyebrow: "Pour les moments qui grandissent avec eux",
      title:
        "Une première montre peut devenir une partie des souvenirs qu'un enfant garde",
      description:
        "Confort, lisibilité, durabilité et personnalité sont essentiels.",
      closingText: "Le temps nous apprend à remarquer les moments.",
      closingAccent: "Les souvenirs nous apprennent à les conserver.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Confort",
          description:
            "Des proportions légères et un bracelet confortable assurent un porté naturel.",
        },
        {
          title: "Lisibilité",
          description:
            "Un cadran clair facilite l'apprentissage de l'heure.",
        },
        {
          title: "Durabilité",
          description:
            "La montre doit être prête pour l'école, le jeu et les aventures.",
        },
        {
          title: "Caractère",
          description:
            "Couleurs et détails ludiques rendent la montre personnelle.",
        },
      ],
    },

    cta: {
      title: "Choisissez ensemble sa première montre",
      sub:
        "Découvrez les montres enfant LIDYA et trouvez la taille, la couleur et le caractère qui lui correspondent.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi per bambini",
      title: "Il primo orologio per",
      titleAccent: "piccoli grandi momenti.",
      description:
        "Orologi pensati, giocosi e confortevoli per i più giovani — scelti per accompagnare scoperte quotidiane, primi successi e momenti da ricordare.",
      since: "LIDYA · DAL 1989",
      statementBefore: "Il tempo porta nuove storie.",
      statementAccent: "Alcune restano per sempre.",
      imageAlt:
        "Orologi per bambini presentati in un elegante ambiente LIDYA",
    },

    gallery: {
      eyebrow: "La collezione di orologi per bambini",
      title: "Orologi scelti per",
      titleAccent: "le avventure di ogni giorno.",
      description:
        "Dai colori giocosi ai dettagli senza tempo, ogni modello è scelto per comfort, leggibilità e carattere.",
      itemLabel: "Orologi per bambini",
      closingText: "Ogni giorno porta qualcosa di nuovo.",
      closingAccent: "Ogni momento può diventare un ricordo.",
      captions: [
        "Primo orologio",
        "Colore giocoso",
        "Compagno quotidiano",
        "Dettaglio classico",
        "Toni pastello",
        "Carattere colorato",
        "Piccolo esploratore",
        "Edizione blu",
        "Momento sportivo",
        "Tempo di gioia",
      ],
      alts: [
        "Primo orologio per bambini",
        "Orologio colorato per bambini",
        "Orologio comodo per bambini",
        "Orologio classico per bambini",
        "Orologio pastello per bambini",
        "Orologio giocoso per bambini",
        "Orologio per bambini per avventure",
        "Orologio blu per bambini",
        "Orologio sportivo per bambini",
        "Orologio per bambini LIDYA",
      ],
    },

    craft: {
      eyebrow: "Per momenti che crescono con loro",
      title:
        "Il primo orologio può diventare parte dei ricordi che un bambino conserva",
      description:
        "Comfort, leggibilità, resistenza e personalità sono importanti nella scelta.",
      closingText: "Il tempo insegna a notare i momenti.",
      closingAccent: "I ricordi insegnano a conservarli.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Comfort",
          description:
            "Proporzioni leggere e cinturini confortevoli rendono l'orologio naturale al polso.",
        },
        {
          title: "Leggibilità",
          description:
            "Quadranti chiari rendono più semplice imparare a leggere l'ora.",
        },
        {
          title: "Resistenza",
          description:
            "L'orologio deve essere pronto per scuola, gioco e avventure.",
        },
        {
          title: "Carattere",
          description:
            "Colori e dettagli giocosi rendono ogni orologio personale.",
        },
      ],
    },

    cta: {
      title: "Scegliete insieme il primo orologio",
      sub:
        "Scoprite gli orologi per bambini LIDYA e trovate misura, colore e carattere più adatti.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes infantiles",
      title: "El primer reloj para",
      titleAccent: "pequeños grandes momentos.",
      description:
        "Relojes pensados, divertidos y cómodos para los más jóvenes — elegidos para acompañar descubrimientos cotidianos, primeros logros y momentos inolvidables.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "El tiempo trae nuevas historias.",
      statementAccent: "Algunas permanecen para siempre.",
      imageAlt:
        "Relojes infantiles presentados en un elegante entorno LIDYA",
    },

    gallery: {
      eyebrow: "La colección de relojes infantiles",
      title: "Relojes elegidos para",
      titleAccent: "aventuras cotidianas.",
      description:
        "Desde colores divertidos hasta detalles atemporales, cada modelo se elige por comodidad, legibilidad y carácter.",
      itemLabel: "Relojes infantiles",
      closingText: "Cada día trae algo nuevo.",
      closingAccent: "Cada momento puede convertirse en recuerdo.",
      captions: [
        "Primer reloj",
        "Color divertido",
        "Compañero diario",
        "Detalle clásico",
        "Tonos pastel",
        "Carácter colorido",
        "Pequeño explorador",
        "Edición azul",
        "Momento deportivo",
        "Tiempo de alegría",
      ],
      alts: [
        "Primer reloj infantil",
        "Reloj infantil colorido",
        "Reloj infantil cómodo",
        "Reloj infantil clásico",
        "Reloj infantil pastel",
        "Reloj infantil divertido",
        "Reloj infantil para aventuras",
        "Reloj infantil azul",
        "Reloj infantil deportivo",
        "Reloj infantil LIDYA",
      ],
    },

    craft: {
      eyebrow: "Para momentos que crecen con ellos",
      title:
        "El primer reloj puede convertirse en parte de los recuerdos que un niño conserva",
      description:
        "Comodidad, legibilidad, resistencia y personalidad son importantes al elegir un reloj infantil.",
      closingText: "El tiempo enseña a notar los momentos.",
      closingAccent: "Los recuerdos enseñan a conservarlos.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Comodidad",
          description:
            "Proporciones ligeras y correas cómodas hacen que el reloj se adapte naturalmente.",
        },
        {
          title: "Legibilidad",
          description:
            "Una esfera clara facilita aprender y leer la hora.",
        },
        {
          title: "Resistencia",
          description:
            "El reloj debe estar preparado para el colegio, los juegos y las aventuras.",
        },
        {
          title: "Carácter",
          description:
            "Colores y detalles divertidos hacen que el reloj sea personal.",
        },
      ],
    },

    cta: {
      title: "Elijan juntos su primer reloj",
      sub:
        "Descubra los relojes infantiles LIDYA y encuentre el tamaño, color y carácter adecuados.",
    },
  },
};

const CHILDREN_WATCH_IMAGES = [
  "/images/watches/children-category/children1.png",
  "/images/watches/children-category/children2.png",
  "/images/watches/children-category/children3.png",
  "/images/watches/children-category/children4.png",
  "/images/watches/children-category/children5.png",
  "/images/watches/children-category/children6.png",
  "/images/watches/children-category/children7.png",
  "/images/watches/children-category/children8.png",
  "/images/watches/children-category/children9.png",
  "/images/watches/children-category/children10.png",
];

function WatchIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M18 3h12l2 8H16l2-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M16 37h16l-2 8H18l-2-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="24"
        cy="24"
        r="13"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="24"
        cy="24"
        r="1.7"
        fill="currentColor"
      />

      <path
        d="M24 24V16M24 24l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChildrensWatchesHero({
  copy,
}: {
  copy: ChildrensWatchesCopy["hero"];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaded(true);
    }, 60);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      return;
    }

    let frame: number | null = null;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewport - rect.top) /
            Math.max(viewport + rect.height, 1)
        )
      );

      const translateY = (progress - 0.5) * 18;
      const scale = 1.045 + progress * 0.012;

      image.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
      `;

      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) {
        return;
      }

      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        min-h-[760px]
        items-end
        overflow-hidden
        bg-[#120B0D]
        pt-[100px]
        md:min-h-[860px]
        lg:min-h-[920px]
      "
    >
      <div
        ref={imageRef}
        className={`
          absolute
          inset-[-2%]
          will-change-transform
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            loaded
              ? "opacity-100 blur-0"
              : "opacity-0 blur-[2px]"
          }
        `}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.045)"
            : "translate3d(0,0,0) scale(1.08)",
        }}
      >
        <Image
          src="/images/watches/children-category/children-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[56%_50%]
            md:object-[57%_50%]
            lg:object-center
          "
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#10070C]/92
          via-[#120B0D]/52
          to-[#120B0D]/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0E080A]/92
          via-[#120B0D]/10
          to-[#120B0D]/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_68%_38%,rgba(230,195,125,0.10)_0%,rgba(230,195,125,0.025)_32%,transparent_58%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[900px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#E6C37D]
              transition-all
              duration-[1000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "120ms",
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center md:h-10 md:w-10">
              <WatchIcon />
            </span>

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[980px]
              font-display
              text-[3.1rem]
              leading-[0.94]
              tracking-[-0.04em]
              text-[#FFF9F2]
              sm:text-[3.8rem]
              md:text-[5rem]
              lg:text-[5.9rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  text-[#FFF9F2]
                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[34%] opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "220ms",
                }}
              >
                {copy.title}
              </span>
            </span>

            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  italic
                  text-[#E6C37D]
                  transition-all
                  duration-[1300ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[34%] opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "330ms",
                }}
              >
                {copy.titleAccent}
              </span>
            </span>
          </h1>

          <div
            className={`
              mt-7
              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "500ms",
            }}
          >
            <p
              className="
                max-w-[660px]
                text-sm
                leading-7
                text-white/78
                md:text-base
              "
            >
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D6B36A]" />

              <span className="text-[0.54rem] font-semibold uppercase tracking-[0.23em] text-white/60">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`
            mt-14
            border-t
            border-white/15
            pt-8
            transition-all
            duration-[1250ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:mt-20
            md:pt-10
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
          style={{
            transitionDelay: "680ms",
          }}
        >
          <p
            className="
              max-w-[980px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              text-[#FFF9F2]
              md:text-4xl
              lg:text-5xl
            "
          >
            {copy.statementBefore}{" "}
            <span className="text-[#E6C37D]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ChildrensWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    CHILDRENS_WATCHES_COPY[locale] ??
    CHILDRENS_WATCHES_COPY.en;

  const galleryItems = CHILDREN_WATCH_IMAGES.map(
    (image, index) => ({
      image,

      caption:
        copy.gallery.captions[index] ??
        CHILDRENS_WATCHES_COPY.en.gallery.captions[index] ??
        "",

      alt:
        copy.gallery.alts[index] ??
        CHILDRENS_WATCHES_COPY.en.gallery.alts[index] ??
        "",
    })
  );

  return (
    <>
      <Header />

      <main>
        <ChildrensWatchesHero copy={copy.hero} />

        <CategoryGallery
          icon={<WatchIcon />}
          eyebrow={copy.gallery.eyebrow}
          title={copy.gallery.title}
          titleAccent={copy.gallery.titleAccent}
          description={copy.gallery.description}
          itemLabel={copy.gallery.itemLabel}
          closingText={copy.gallery.closingText}
          closingAccent={copy.gallery.closingAccent}
          items={galleryItems}
        />

        <CategoryCraft
          eyebrow={copy.craft.eyebrow}
          title={copy.craft.title}
          description={copy.craft.description}
          points={copy.craft.points}
          closingText={copy.craft.closingText}
          closingAccent={copy.craft.closingAccent}
          since={copy.craft.since}
        />

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