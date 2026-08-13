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

type GoldWatchesCopy = {
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

const GOLD_WATCHES_COPY: Record<Locale, GoldWatchesCopy> = {
  de: {
    hero: {
      eyebrow: "Golduhren",
      title: "Zeit ausgedrückt in",
      titleAccent: "der Wärme des Goldes.",
      description:
        "Entdecken Sie Golduhren, ausgewählt für das Zusammenspiel von edlem Material, raffinierten Proportionen und zeitloser Präsenz. Von dezenten Klassikern bis zu markanten Statement-Uhren besitzt jeder Zeitmesser seinen eigenen Charakter.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Gold fängt das Licht ein.",
      statementAccent: "Charakter macht es zeitlos.",
      imageAlt:
        "Luxuriöse Golduhren in einer eleganten dunklen LIDYA Umgebung",
    },

    gallery: {
      eyebrow: "Die Golduhrenkollektion",
      title: "Golduhren ausgewählt für",
      titleAccent: "zeitlose Präsenz.",
      description:
        "Die Wärme von Gold verändert sich mit Oberfläche, Proportion und Detail. Entdecken Sie Zeitmesser mit ausgewogener Gestaltung, edlem Material und eigenständigem Charakter.",
      itemLabel: "Golduhren",
      closingText: "Von Natur aus kostbar.",
      closingAccent: "Durch Charakter persönlich.",
      captions: [
        "Goldene Klassik",
        "Raffiniertes Gold",
        "Warme Präsenz",
        "Zeitloses Zifferblatt",
        "Goldchronograph",
        "Signature Gold",
        "Modernes Erbe",
        "Edles Detail",
        "Statement Gold",
        "Goldene Eleganz",
      ],
      alts: [
        "Luxuriöse Golduhr mit klassischen Proportionen",
        "Raffinierte Golduhr in dunkler Umgebung",
        "Elegante Golduhr mit warmer polierter Oberfläche",
        "Golduhr mit zeitloser Zifferblattarchitektur",
        "Luxuriöser Goldchronograph",
        "Signature Golduhr von LIDYA",
        "Moderne Golduhr mit klassischer Inspiration",
        "Detail einer raffinierten Golduhr",
        "Ausdrucksstarke Golduhr",
        "Elegante Golduhr mit zeitlosem Charakter",
      ],
    },

    craft: {
      eyebrow: "Der Charakter des Goldes",
      title: "Eine Golduhr wird durch mehr als Edelmetall bestimmt",
      description:
        "Farbe, Proportion, Verarbeitung, Zifferblattarchitektur und Licht bestimmen gemeinsam die Wirkung einer Golduhr.",
      closingText: "Gold gibt der Zeit Wärme.",
      closingAccent: "Design gibt ihr Identität.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Proportion",
          description:
            "Durchmesser, Höhe, Armbandbalance und Zifferblattgröße bestimmen, ob Gold am Handgelenk dezent, selbstbewusst oder ausdrucksstark wirkt.",
        },
        {
          title: "Gold",
          description:
            "Farbe und Oberflächenstruktur des Goldes bestimmen Wärme, Reflexion und Ausdruck. Polierte, satinierte und strukturierte Flächen reagieren unterschiedlich auf Licht.",
        },
        {
          title: "Verarbeitung",
          description:
            "Kanten, Glieder, Lünette und Oberflächen zeigen ihre Qualität durch präzise Verarbeitung und saubere Übergänge.",
        },
        {
          title: "Charakter",
          description:
            "Zifferblatt, Farbe, Proportion und Details verwandeln wertvolles Material in eine persönliche Signatur.",
        },
      ],
    },

    cta: {
      title: "Gold entfaltet seinen Charakter am Handgelenk",
      sub:
        "Besuchen Sie LIDYA und erleben Sie unsere Golduhren persönlich. Entdecken Sie Wärme, Proportion und Verarbeitung und finden Sie den Zeitmesser, der wirklich zu Ihnen passt.",
    },
  },

  en: {
    hero: {
      eyebrow: "Gold Watches",
      title: "Time expressed in",
      titleAccent: "the warmth of gold.",
      description:
        "Discover gold watches selected for their balance of precious material, refined proportions and enduring presence. From understated classics to distinctive statement pieces, each watch carries its own character.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Gold captures the light.",
      statementAccent: "Character makes it timeless.",
      imageAlt:
        "Luxury gold watches presented in a dark refined LIDYA setting",
    },

    gallery: {
      eyebrow: "The Gold Watch Collection",
      title: "Gold watches chosen for",
      titleAccent: "enduring presence.",
      description:
        "The warmth of gold changes with every surface, proportion and detail. Explore watches selected for their balance of precious material, dial architecture and refined character.",
      itemLabel: "Gold Watches",
      closingText: "Precious by nature.",
      closingAccent: "Personal by character.",
      captions: [
        "Golden Classic",
        "Refined Gold",
        "Warm Presence",
        "Timeless Dial",
        "Gold Chronograph",
        "Signature Gold",
        "Modern Heritage",
        "Precious Detail",
        "Statement Gold",
        "Golden Elegance",
      ],
      alts: [
        "Luxury gold watch with classic proportions",
        "Refined gold wristwatch presented in a dark setting",
        "Elegant gold watch with warm polished finishing",
        "Gold watch with timeless dial architecture",
        "Luxury gold chronograph watch",
        "Signature gold timepiece by LIDYA",
        "Modern gold watch inspired by classic watchmaking",
        "Close view of a refined gold watch",
        "Distinctive statement gold watch",
        "Elegant gold wristwatch with timeless character",
      ],
    },

    craft: {
      eyebrow: "The Character of Gold",
      title: "A gold watch is defined by more than precious metal",
      description:
        "Its character comes from the relationship between colour, proportion, finishing, dial architecture and the way light travels across every surface.",
      closingText: "Gold gives time warmth.",
      closingAccent: "Design gives it identity.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Proportion",
          description:
            "Case diameter, thickness, bracelet balance and dial scale determine whether gold feels understated, confident or expressive on the wrist.",
        },
        {
          title: "Gold",
          description:
            "The colour and finish of gold create a distinctive warmth. Polished, brushed and textured surfaces each interact with light in a different way.",
        },
        {
          title: "Finishing",
          description:
            "Edges, links, bezels and surfaces reveal their quality through careful finishing and the precision with which individual elements meet.",
        },
        {
          title: "Character",
          description:
            "Dial colour, architecture, proportion and detail transform precious material into a watch with a personal identity.",
        },
      ],
    },

    cta: {
      title: "Gold reveals its true character on the wrist",
      sub:
        "Visit LIDYA and discover our gold watches in person. Experience their warmth, proportions and finishing and find the timepiece that feels naturally yours.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Altın Saatler",
      title: "Zamanın",
      titleAccent: "altının sıcaklığıyla ifadesi.",
      description:
        "Değerli malzeme, rafine oranlar ve zamansız duruş arasındaki dengeyle seçilen altın saatleri keşfedin. Sade klasiklerden güçlü karaktere sahip modellere kadar her saat kendine özgü bir ifade taşır.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Altın ışığı yakalar.",
      statementAccent: "Karakter onu zamansız kılar.",
      imageAlt:
        "Karanlık zarif LIDYA ortamında sunulan lüks altın saatler",
    },

    gallery: {
      eyebrow: "Altın Saat Koleksiyonu",
      title: "Altın saatler",
      titleAccent: "zamansız bir duruş için.",
      description:
        "Altının sıcaklığı her yüzey, oran ve detayla farklı bir ifade kazanır. Değerli malzeme, kadran mimarisi ve rafine karakter arasındaki dengeyi keşfedin.",
      itemLabel: "Altın Saatler",
      closingText: "Doğası gereği değerli.",
      closingAccent: "Karakteriyle kişisel.",
      captions: [
        "Altın Klasik",
        "Rafine Altın",
        "Sıcak Duruş",
        "Zamansız Kadran",
        "Altın Kronograf",
        "Signature Gold",
        "Modern Miras",
        "Değerli Detay",
        "Güçlü Altın",
        "Altın Zarafet",
      ],
      alts: [
        "Klasik oranlara sahip lüks altın saat",
        "Rafine altın kol saati",
        "Sıcak yüzeyli zarif altın saat",
        "Zamansız kadranlı altın saat",
        "Lüks altın kronograf",
        "LIDYA signature altın saat",
        "Klasik saatçilikten ilham alan modern altın saat",
        "Rafine altın saat detayı",
        "Güçlü karakterli altın saat",
        "Zarif altın kol saati",
      ],
    },

    craft: {
      eyebrow: "Altının Karakteri",
      title: "Altın bir saati yalnızca değerli metal tanımlamaz",
      description:
        "Renk, oran, yüzey işçiliği, kadran mimarisi ve ışığın yüzeylerdeki hareketi saatin gerçek karakterini oluşturur.",
      closingText: "Altın zamana sıcaklık verir.",
      closingAccent: "Tasarım ona kimlik kazandırır.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Oran",
          description:
            "Kasa çapı, kalınlık, bilezik dengesi ve kadran ölçeği saatin bilekte ne kadar sade, güçlü veya iddialı görüneceğini belirler.",
        },
        {
          title: "Altın",
          description:
            "Altının tonu ve yüzeyi ışıkla kurduğu ilişkiyi ve genel karakteri belirler. Parlak, fırçalanmış ve dokulu yüzeyler ışığı farklı biçimlerde yansıtır.",
        },
        {
          title: "İşçilik",
          description:
            "Kenarlar, bağlantılar, bezel ve yüzeyler hassas işçilik sayesinde gerçek kalitesini gösterir.",
        },
        {
          title: "Karakter",
          description:
            "Kadran rengi, mimarisi, oranları ve detayları değerli metali kişisel bir saate dönüştürür.",
        },
      ],
    },

    cta: {
      title: "Altının gerçek karakteri bilekte ortaya çıkar",
      sub:
        "LIDYA'yı ziyaret edin ve altın saatlerimizi yakından deneyimleyin. Size en doğal gelen oranları, yüzeyleri ve detayları keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Zlaté hodinky",
      title: "Čas vyjadrený",
      titleAccent: "teplom zlata.",
      description:
        "Objavte zlaté hodinky vybrané pre rovnováhu vzácneho materiálu, precíznych proporcií a nadčasovej prítomnosti. Od jemnej klasiky až po výrazné modely — každé hodinky nesú vlastný charakter.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Zlato zachytáva svetlo.",
      statementAccent: "Charakter mu dáva nadčasovosť.",
      imageAlt:
        "Luxusné zlaté hodinky prezentované v tmavom elegantnom prostredí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcia zlatých hodiniek",
      title: "Zlaté hodinky vybrané pre",
      titleAccent: "nadčasovú prítomnosť.",
      description:
        "Teplo zlata sa mení s každým povrchom, proporciou a detailom. Objavte hodinky vybrané pre rovnováhu vzácneho materiálu, architektúry ciferníka a osobitého charakteru.",
      itemLabel: "Zlaté hodinky",
      closingText: "Vzácne svojou podstatou.",
      closingAccent: "Osobné svojím charakterom.",
      captions: [
        "Zlatá klasika",
        "Rafinované zlato",
        "Teplá prítomnosť",
        "Nadčasový ciferník",
        "Zlatý chronograf",
        "Signature Gold",
        "Moderné dedičstvo",
        "Vzácny detail",
        "Výrazné zlato",
        "Zlatá elegancia",
      ],
      alts: [
        "Luxusné zlaté hodinky s klasickými proporciami",
        "Rafinované zlaté hodinky v tmavom prostredí",
        "Elegantné zlaté hodinky s teplým lešteným povrchom",
        "Zlaté hodinky s nadčasovou architektúrou ciferníka",
        "Luxusný zlatý chronograf",
        "Signature zlaté hodinky LIDYA",
        "Moderné zlaté hodinky inšpirované klasickým hodinárstvom",
        "Detail precízne spracovaných zlatých hodiniek",
        "Výrazné zlaté hodinky",
        "Elegantné zlaté hodinky s nadčasovým charakterom",
      ],
    },

    craft: {
      eyebrow: "Charakter zlata",
      title: "Zlaté hodinky neurčuje iba vzácny kov",
      description:
        "Ich charakter vzniká vo vzťahu farby, proporcií, povrchovej úpravy, architektúry ciferníka a spôsobu, akým svetlo prechádza po jednotlivých plochách.",
      closingText: "Zlato dáva času teplo.",
      closingAccent: "Dizajn mu dáva identitu.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Proporcie",
          description:
            "Priemer puzdra, hrúbka, vyváženie náramku a veľkosť ciferníka určujú, či zlato pôsobí decentne, sebavedomo alebo výrazne.",
        },
        {
          title: "Zlato",
          description:
            "Farba a povrch zlata vytvárajú jeho nezameniteľné teplo. Leštené, brúsené aj štruktúrované plochy pracujú so svetlom odlišným spôsobom.",
        },
        {
          title: "Spracovanie",
          description:
            "Hrany, články náramku, luneta a jednotlivé povrchy odhaľujú kvalitu hodiniek precíznosťou spracovania a čistotou spojenia detailov.",
        },
        {
          title: "Charakter",
          description:
            "Farba ciferníka, jeho architektúra, proporcie a detaily premieňajú vzácny materiál na osobité hodinky.",
        },
      ],
    },

    cta: {
      title: "Zlato ukáže svoj skutočný charakter na zápästí",
      sub:
        "Navštívte LIDYA a objavte naše zlaté hodinky osobne. Spoznajte ich teplo, proporcie a spracovanie a nájdite model, ktorý bude prirodzene patriť práve vám.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Zlaté hodinky",
      title: "Čas vyjádřený",
      titleAccent: "teplem zlata.",
      description:
        "Objevte zlaté hodinky vybrané pro rovnováhu vzácného materiálu, precizních proporcí a nadčasové přítomnosti. Od jemné klasiky až po výrazné modely — každé hodinky nesou vlastní charakter.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Zlato zachycuje světlo.",
      statementAccent: "Charakter mu dává nadčasovost.",
      imageAlt:
        "Luxusní zlaté hodinky v elegantním prostředí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekce zlatých hodinek",
      title: "Zlaté hodinky vybrané pro",
      titleAccent: "nadčasovou přítomnost.",
      description:
        "Teplo zlata se mění s každým povrchem, proporcí a detailem. Objevte hodinky vybrané pro rovnováhu vzácného materiálu, architektury ciferníku a osobitého charakteru.",
      itemLabel: "Zlaté hodinky",
      closingText: "Vzácné svou podstatou.",
      closingAccent: "Osobní svým charakterem.",
      captions: [
        "Zlatá klasika",
        "Rafinované zlato",
        "Teplá přítomnost",
        "Nadčasový ciferník",
        "Zlatý chronograf",
        "Signature Gold",
        "Moderní dědictví",
        "Vzácný detail",
        "Výrazné zlato",
        "Zlatá elegance",
      ],
      alts: [
        "Luxusní zlaté hodinky s klasickými proporcemi",
        "Rafinované zlaté hodinky",
        "Elegantní zlaté hodinky",
        "Zlaté hodinky s nadčasovým ciferníkem",
        "Luxusní zlatý chronograf",
        "Signature zlaté hodinky LIDYA",
        "Moderní zlaté hodinky",
        "Detail zlatých hodinek",
        "Výrazné zlaté hodinky",
        "Elegantní zlaté hodinky",
      ],
    },

    craft: {
      eyebrow: "Charakter zlata",
      title: "Zlaté hodinky neurčuje pouze vzácný kov",
      description:
        "Jejich charakter vzniká kombinací barvy, proporcí, povrchové úpravy, architektury ciferníku a práce světla.",
      closingText: "Zlato dává času teplo.",
      closingAccent: "Design mu dává identitu.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Proporce",
          description:
            "Průměr, tloušťka, vyvážení náramku a velikost ciferníku určují, jak hodinky působí na zápěstí.",
        },
        {
          title: "Zlato",
          description:
            "Barva a povrch zlata vytvářejí jeho nezaměnitelné teplo. Leštěné, broušené a strukturované plochy pracují se světlem odlišně.",
        },
        {
          title: "Zpracování",
          description:
            "Hrany, články, luneta a povrchy odhalují kvalitu přesností zpracování.",
        },
        {
          title: "Charakter",
          description:
            "Ciferník, barva, proporce a detail dávají hodinkám osobní identitu.",
        },
      ],
    },

    cta: {
      title: "Zlato ukáže svůj charakter na zápěstí",
      sub:
        "Navštivte LIDYA a objevte naše zlaté hodinky osobně. Poznejte jejich proporce, zpracování a charakter.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Aranyórák",
      title: "Az idő",
      titleAccent: "az arany melegségében.",
      description:
        "Fedezze fel a nemes anyag, a kifinomult arányok és az időtlen jelenlét alapján kiválasztott aranyórákat. A visszafogott klasszikusoktól a karakteres modellekig minden órának saját személyisége van.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "Az arany megragadja a fényt.",
      statementAccent: "A karakter időtlenné teszi.",
      imageAlt:
        "Luxus aranyórák elegáns LIDYA környezetben",
    },

    gallery: {
      eyebrow: "Aranyóra kollekció",
      title: "Aranyórák",
      titleAccent: "időtlen jelenléttel.",
      description:
        "Az arany melegsége minden felületen, arányban és részletben másképp jelenik meg. Fedezze fel az anyag, a számlap és a karakter egyensúlyát.",
      itemLabel: "Aranyórák",
      closingText: "Természeténél fogva értékes.",
      closingAccent: "Karakterében személyes.",
      captions: [
        "Arany klasszikus",
        "Kifinomult arany",
        "Meleg jelenlét",
        "Időtlen számlap",
        "Arany kronográf",
        "Signature Gold",
        "Modern örökség",
        "Értékes részlet",
        "Karakteres arany",
        "Arany elegancia",
      ],
      alts: [
        "Luxus aranyóra klasszikus arányokkal",
        "Kifinomult aranyóra",
        "Elegáns aranyóra",
        "Időtlen számlapú aranyóra",
        "Luxus arany kronográf",
        "LIDYA signature aranyóra",
        "Modern aranyóra",
        "Aranyóra részlet",
        "Karakteres aranyóra",
        "Elegáns aranyóra",
      ],
    },

    craft: {
      eyebrow: "Az arany karaktere",
      title: "Egy aranyórát nem csak a nemesfém határoz meg",
      description:
        "A szín, az arányok, a kidolgozás, a számlap és a fény együtt alakítják az óra karakterét.",
      closingText: "Az arany meleget ad az időnek.",
      closingAccent: "A design identitást ad neki.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Arányok",
          description:
            "A tok mérete, vastagsága, a karkötő egyensúlya és a számlap arányai meghatározzák a csuklón való jelenlétet.",
        },
        {
          title: "Arany",
          description:
            "Az arany színe és felülete egyedi kapcsolatot teremt a fénnyel. A polírozott, szálcsiszolt és strukturált felületek másként reagálnak a fényre.",
        },
        {
          title: "Kidolgozás",
          description:
            "Az élek, szemek, lünetta és felületek minőségét a precíz megmunkálás mutatja meg.",
        },
        {
          title: "Karakter",
          description:
            "A számlap színe, felépítése, arányai és részletei személyessé teszik a nemes anyagot.",
        },
      ],
    },

    cta: {
      title: "Az arany valódi karaktere a csuklón mutatkozik meg",
      sub:
        "Fedezze fel személyesen a LIDYA aranyóráit, és találja meg az Ön számára megfelelő arányokat, felületeket és részleteket.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki złote",
      title: "Czas wyrażony",
      titleAccent: "ciepłem złota.",
      description:
        "Odkryj złote zegarki wybrane ze względu na równowagę szlachetnego materiału, proporcji i ponadczasowej obecności. Od dyskretnych klasyków po bardziej wyraziste modele — każdy zegarek ma własny charakter.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Złoto zatrzymuje światło.",
      statementAccent: "Charakter czyni je ponadczasowym.",
      imageAlt:
        "Luksusowe złote zegarki w eleganckim otoczeniu LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcja złotych zegarków",
      title: "Złote zegarki wybrane dla",
      titleAccent: "ponadczasowej obecności.",
      description:
        "Ciepło złota zmienia się wraz z powierzchnią, proporcjami i detalem. Odkryj zegarki łączące szlachetny materiał, architekturę tarczy i indywidualny charakter.",
      itemLabel: "Złote zegarki",
      closingText: "Szlachetne z natury.",
      closingAccent: "Osobiste przez charakter.",
      captions: [
        "Złota klasyka",
        "Rafinowane złoto",
        "Ciepła obecność",
        "Ponadczasowa tarcza",
        "Złoty chronograf",
        "Signature Gold",
        "Nowoczesne dziedzictwo",
        "Szlachetny detal",
        "Wyraziste złoto",
        "Złota elegancja",
      ],
      alts: [
        "Luksusowy złoty zegarek",
        "Rafinowany złoty zegarek",
        "Elegancki złoty zegarek",
        "Złoty zegarek z ponadczasową tarczą",
        "Złoty chronograf",
        "Złoty zegarek LIDYA signature",
        "Nowoczesny złoty zegarek",
        "Detal złotego zegarka",
        "Wyrazisty złoty zegarek",
        "Elegancki złoty zegarek",
      ],
    },

    craft: {
      eyebrow: "Charakter złota",
      title: "Złoty zegarek to coś więcej niż szlachetny metal",
      description:
        "Kolor, proporcje, wykończenie, architektura tarczy i światło nadają zegarkowi indywidualny charakter.",
      closingText: "Złoto nadaje czasowi ciepło.",
      closingAccent: "Design nadaje mu tożsamość.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Proporcje",
          description:
            "Średnica, grubość, balans bransolety i skala tarczy określają obecność zegarka na nadgarstku.",
        },
        {
          title: "Złoto",
          description:
            "Kolor i sposób wykończenia złota definiują jego relację ze światłem. Powierzchnie polerowane, szczotkowane i strukturalne odbijają światło w różny sposób.",
        },
        {
          title: "Wykończenie",
          description:
            "Krawędzie, ogniwa, bezel i powierzchnie pokazują jakość poprzez precyzję wykonania.",
        },
        {
          title: "Charakter",
          description:
            "Tarcza, kolor, proporcje i detale nadają szlachetnemu materiałowi osobistą tożsamość.",
        },
      ],
    },

    cta: {
      title: "Prawdziwy charakter złota odkrywa się na nadgarstku",
      sub:
        "Odwiedź LIDYA i poznaj nasze złote zegarki osobiście. Odkryj proporcje, wykończenie i detale, które najlepiej do Ciebie pasują.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Золотые часы",
      title: "Время в",
      titleAccent: "тепле золота.",
      description:
        "Откройте золотые часы, выбранные за гармонию драгоценного материала, пропорций и вневременного характера. От сдержанной классики до выразительных моделей — каждая модель обладает собственной индивидуальностью.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Золото ловит свет.",
      statementAccent: "Характер делает его вечным.",
      imageAlt:
        "Роскошные золотые часы в элегантной обстановке LIDYA",
    },

    gallery: {
      eyebrow: "Коллекция золотых часов",
      title: "Золотые часы с",
      titleAccent: "вневременным характером.",
      description:
        "Тепло золота меняется с каждой поверхностью, пропорцией и деталью. Откройте часы, в которых драгоценный материал, архитектура циферблата и характер находятся в гармонии.",
      itemLabel: "Золотые часы",
      closingText: "Драгоценные по природе.",
      closingAccent: "Личные по характеру.",
      captions: [
        "Золотая классика",
        "Утончённое золото",
        "Тёплое присутствие",
        "Вневременной циферблат",
        "Золотой хронограф",
        "Signature Gold",
        "Современное наследие",
        "Драгоценная деталь",
        "Выразительное золото",
        "Золотая элегантность",
      ],
      alts: [
        "Роскошные золотые часы",
        "Утончённые золотые часы",
        "Элегантные золотые часы",
        "Золотые часы с классическим циферблатом",
        "Золотой хронограф",
        "Золотые часы LIDYA signature",
        "Современные золотые часы",
        "Деталь золотых часов",
        "Выразительные золотые часы",
        "Элегантные золотые часы",
      ],
    },

    craft: {
      eyebrow: "Характер золота",
      title: "Золотые часы определяет не только драгоценный металл",
      description:
        "Цвет, пропорции, отделка, архитектура циферблата и взаимодействие со светом формируют настоящий характер часов.",
      closingText: "Золото придаёт времени тепло.",
      closingAccent: "Дизайн придаёт ему индивидуальность.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Пропорции",
          description:
            "Диаметр, толщина корпуса, баланс браслета и масштаб циферблата определяют присутствие часов на запястье.",
        },
        {
          title: "Золото",
          description:
            "Цвет и обработка золота создают уникальную игру света. Полированные, матовые и текстурированные поверхности отражают свет по-разному.",
        },
        {
          title: "Отделка",
          description:
            "Края, звенья, безель и поверхности показывают качество точностью исполнения.",
        },
        {
          title: "Характер",
          description:
            "Циферблат, цвет, пропорции и детали превращают драгоценный материал в личную подпись.",
        },
      ],
    },

    cta: {
      title: "Истинный характер золота раскрывается на запястье",
      sub:
        "Познакомьтесь с золотыми часами LIDYA лично и найдите сочетание пропорций, отделки и деталей, которое подходит именно вам.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Gouden horloges",
      title: "Tijd uitgedrukt in",
      titleAccent: "de warmte van goud.",
      description:
        "Ontdek gouden horloges geselecteerd om hun balans tussen edel materiaal, verfijnde proporties en tijdloze uitstraling. Van ingetogen klassiekers tot uitgesproken modellen: elk horloge heeft zijn eigen karakter.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Goud vangt het licht.",
      statementAccent: "Karakter maakt het tijdloos.",
      imageAlt:
        "Luxueuze gouden horloges gepresenteerd in een verfijnde donkere LIDYA omgeving",
    },

    gallery: {
      eyebrow: "De collectie gouden horloges",
      title: "Gouden horloges gekozen voor",
      titleAccent: "tijdloze uitstraling.",
      description:
        "De warmte van goud verandert met elk oppervlak, elke verhouding en elk detail. Ontdek horloges geselecteerd om hun balans tussen edel materiaal, wijzerplaatarchitectuur en verfijnd karakter.",
      itemLabel: "Gouden horloges",
      closingText: "Van nature kostbaar.",
      closingAccent: "Persoonlijk door karakter.",
      captions: [
        "Gouden klassieker",
        "Verfijnd goud",
        "Warme uitstraling",
        "Tijdloze wijzerplaat",
        "Gouden chronograaf",
        "Signature Gold",
        "Modern erfgoed",
        "Kostbaar detail",
        "Statement in goud",
        "Gouden elegantie",
      ],
      alts: [
        "Luxueus gouden horloge met klassieke proporties",
        "Verfijnd gouden polshorloge in een donkere setting",
        "Elegant gouden horloge met warme gepolijste afwerking",
        "Gouden horloge met tijdloze wijzerplaatarchitectuur",
        "Luxueuze gouden chronograaf",
        "Signature gouden horloge van LIDYA",
        "Modern gouden horloge geïnspireerd op klassieke horlogerie",
        "Detail van een verfijnd gouden horloge",
        "Uitgesproken gouden horloge",
        "Elegant gouden polshorloge met tijdloos karakter",
      ],
    },

    craft: {
      eyebrow: "Het karakter van goud",
      title: "Een gouden horloge wordt door meer bepaald dan edelmetaal",
      description:
        "Het karakter ontstaat uit de relatie tussen kleur, proportie, afwerking, wijzerplaatarchitectuur en de manier waarop licht over elk oppervlak beweegt.",
      closingText: "Goud geeft tijd warmte.",
      closingAccent: "Design geeft het identiteit.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Proportie",
          description:
            "Diameter, dikte, balans van de band en schaal van de wijzerplaat bepalen of goud ingetogen, zelfverzekerd of uitgesproken om de pols voelt.",
        },
        {
          title: "Goud",
          description:
            "De kleur en afwerking van goud creëren een karakteristieke warmte. Gepolijste, geborstelde en gestructureerde oppervlakken reageren elk anders op licht.",
        },
        {
          title: "Afwerking",
          description:
            "Randen, schakels, lunetten en oppervlakken tonen hun kwaliteit door zorgvuldige afwerking en de precisie waarmee afzonderlijke onderdelen samenkomen.",
        },
        {
          title: "Karakter",
          description:
            "Kleur, architectuur, proportie en details van de wijzerplaat veranderen edel materiaal in een horloge met een persoonlijke identiteit.",
        },
      ],
    },

    cta: {
      title: "Goud toont zijn ware karakter om de pols",
      sub:
        "Bezoek LIDYA en ontdek onze gouden horloges persoonlijk. Ervaar hun warmte, proporties en afwerking en vind het horloge dat natuurlijk bij u past.",
    },
  },

  da: {
    hero: {
      eyebrow: "Guldure",
      title: "Tid udtrykt i",
      titleAccent: "guldets varme.",
      description:
        "Oplev guldure udvalgt for deres balance mellem ædelt materiale, raffinerede proportioner og tidløs tilstedeværelse. Fra diskrete klassikere til markante modeller har hvert ur sin egen karakter.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Guld fanger lyset.",
      statementAccent: "Karakter gør det tidløst.",
      imageAlt:
        "Luksuriøse guldure præsenteret i elegante mørke LIDYA omgivelser",
    },

    gallery: {
      eyebrow: "Kollektionen af guldure",
      title: "Guldure udvalgt for",
      titleAccent: "tidløs tilstedeværelse.",
      description:
        "Guldets varme ændrer sig med hver overflade, proportion og detalje. Oplev ure udvalgt for balancen mellem ædelt materiale, urskivens arkitektur og raffineret karakter.",
      itemLabel: "Guldure",
      closingText: "Ædle af natur.",
      closingAccent: "Personlige gennem karakter.",
      captions: [
        "Gylden klassiker",
        "Raffineret guld",
        "Varm tilstedeværelse",
        "Tidløs urskive",
        "Guldkronograf",
        "Signature Gold",
        "Moderne arv",
        "Ædel detalje",
        "Markant guld",
        "Gylden elegance",
      ],
      alts: [
        "Luksuriøst guldur med klassiske proportioner",
        "Raffineret guldur i mørke omgivelser",
        "Elegant guldur med varm poleret finish",
        "Guldur med tidløs urskivearkitektur",
        "Luksuriøs guldkronograf",
        "Signature guldur fra LIDYA",
        "Moderne guldur inspireret af klassisk urmageri",
        "Detalje af et raffineret guldur",
        "Markant guldur",
        "Elegant guldur med tidløs karakter",
      ],
    },

    craft: {
      eyebrow: "Guldets karakter",
      title: "Et guldur defineres af mere end ædelmetal",
      description:
        "Karakteren opstår i samspillet mellem farve, proportioner, finish, urskivens arkitektur og den måde lyset bevæger sig over overfladerne.",
      closingText: "Guld giver tiden varme.",
      closingAccent: "Design giver den identitet.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Proportioner",
          description:
            "Kassediameter, tykkelse, armbåndets balance og urskivens skala afgør, om guldet virker diskret, selvsikkert eller markant.",
        },
        {
          title: "Guld",
          description:
            "Guldets farve og finish skaber en særlig varme. Polerede, børstede og strukturerede overflader arbejder forskelligt med lyset.",
        },
        {
          title: "Finish",
          description:
            "Kanter, led, lynetter og overflader viser kvalitet gennem omhyggelig bearbejdning og præcis samling.",
        },
        {
          title: "Karakter",
          description:
            "Urskivens farve, arkitektur, proportioner og detaljer forvandler ædelt materiale til et personligt ur.",
        },
      ],
    },

    cta: {
      title: "Guld viser sin sande karakter på håndleddet",
      sub:
        "Besøg LIDYA og oplev vores guldure personligt. Mærk deres varme, proportioner og finish og find det ur, der føles naturligt som dit.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Kultakellot",
      title: "Aika ilmaistuna",
      titleAccent: "kullan lämmössä.",
      description:
        "Tutustu kultakelloihin, jotka on valittu jalon materiaalin, hienostuneiden mittasuhteiden ja ajattoman läsnäolon tasapainon perusteella. Hillityistä klassikoista näyttäviin malleihin jokaisella kellolla on oma luonteensa.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Kulta vangitsee valon.",
      statementAccent: "Luonne tekee siitä ajattoman.",
      imageAlt:
        "Ylellisiä kultakelloja hienostuneessa tummassa LIDYA ympäristössä",
    },

    gallery: {
      eyebrow: "Kultakellojen kokoelma",
      title: "Kultakelloja valittu niiden",
      titleAccent: "ajattoman läsnäolon vuoksi.",
      description:
        "Kullan lämpö muuttuu jokaisen pinnan, mittasuhteen ja yksityiskohdan mukana. Tutustu kelloihin, joissa jalometalli, kellotaulun arkkitehtuuri ja hienostunut luonne ovat tasapainossa.",
      itemLabel: "Kultakellot",
      closingText: "Luonnostaan arvokas.",
      closingAccent: "Luonteeltaan henkilökohtainen.",
      captions: [
        "Kultainen klassikko",
        "Hienostunut kulta",
        "Lämmin läsnäolo",
        "Ajaton kellotaulu",
        "Kultakronografi",
        "Signature Gold",
        "Moderni perintö",
        "Arvokas yksityiskohta",
        "Näyttävä kulta",
        "Kultainen eleganssi",
      ],
      alts: [
        "Ylellinen kultakello klassisilla mittasuhteilla",
        "Hienostunut kultakello tummassa ympäristössä",
        "Elegantti kultakello lämpimällä kiillotetulla pinnalla",
        "Kultakello ajattomalla kellotauluarkkitehtuurilla",
        "Ylellinen kultakronografi",
        "LIDYA signature kultakello",
        "Klassisesta kellonvalmistuksesta inspiroitunut moderni kultakello",
        "Hienostuneen kultakellon yksityiskohta",
        "Näyttävä kultakello",
        "Elegantti kultakello ajattomalla luonteella",
      ],
    },

    craft: {
      eyebrow: "Kullan luonne",
      title: "Kultakelloa määrittää paljon muukin kuin jalometalli",
      description:
        "Sen luonne syntyy värin, mittasuhteiden, viimeistelyn, kellotaulun arkkitehtuurin ja valon yhteisvaikutuksesta.",
      closingText: "Kulta antaa ajalle lämpöä.",
      closingAccent: "Muotoilu antaa sille identiteetin.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Mittasuhteet",
          description:
            "Kuoren halkaisija, paksuus, rannekkeen tasapaino ja kellotaulun mittakaava määrittävät kullan läsnäolon ranteessa.",
        },
        {
          title: "Kulta",
          description:
            "Kullan sävy ja viimeistely luovat tunnistettavan lämmön. Kiillotetut, harjatut ja kuvioidut pinnat heijastavat valoa eri tavoin.",
        },
        {
          title: "Viimeistely",
          description:
            "Reunat, linkit, kehät ja pinnat paljastavat laatunsa huolellisen viimeistelyn ja tarkan sovituksen kautta.",
        },
        {
          title: "Luonne",
          description:
            "Kellotaulun väri, rakenne, mittasuhteet ja yksityiskohdat muuttavat jalometallin henkilökohtaiseksi kelloksi.",
        },
      ],
    },

    cta: {
      title: "Kulta paljastaa todellisen luonteensa ranteessa",
      sub:
        "Tutustu LIDYA:n kultakelloihin henkilökohtaisesti ja löydä sinulle sopiva lämpö, mittasuhteet ja viimeistely.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Guldklockor",
      title: "Tid uttryckt i",
      titleAccent: "guldets värme.",
      description:
        "Upptäck guldklockor valda för balansen mellan ädelt material, raffinerade proportioner och tidlös närvaro. Från diskreta klassiker till uttrycksfulla modeller har varje klocka sin egen karaktär.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Guld fångar ljuset.",
      statementAccent: "Karaktär gör det tidlöst.",
      imageAlt:
        "Lyxiga guldklockor presenterade i en mörk och raffinerad LIDYA miljö",
    },

    gallery: {
      eyebrow: "Kollektionen av guldklockor",
      title: "Guldklockor valda för",
      titleAccent: "tidlös närvaro.",
      description:
        "Guldets värme förändras med varje yta, proportion och detalj. Upptäck klockor valda för balansen mellan ädelt material, urtavlans arkitektur och raffinerad karaktär.",
      itemLabel: "Guldklockor",
      closingText: "Ädla av naturen.",
      closingAccent: "Personliga genom karaktär.",
      captions: [
        "Gyllene klassiker",
        "Raffinerat guld",
        "Varm närvaro",
        "Tidlös urtavla",
        "Guldkronograf",
        "Signature Gold",
        "Modernt arv",
        "Dyrbar detalj",
        "Uttrycksfullt guld",
        "Gyllene elegans",
      ],
      alts: [
        "Lyxig guldklocka med klassiska proportioner",
        "Raffinerad guldklocka i mörk miljö",
        "Elegant guldklocka med varm polerad finish",
        "Guldklocka med tidlös urtavlearkitektur",
        "Lyxig guldkronograf",
        "LIDYA signature guldklocka",
        "Modern guldklocka inspirerad av klassisk urmakarkonst",
        "Detalj av en raffinerad guldklocka",
        "Uttrycksfull guldklocka",
        "Elegant guldklocka med tidlös karaktär",
      ],
    },

    craft: {
      eyebrow: "Guldets karaktär",
      title: "En guldklocka definieras av mer än ädelmetall",
      description:
        "Karaktären uppstår i samspelet mellan färg, proportioner, finish, urtavlans arkitektur och hur ljuset rör sig över varje yta.",
      closingText: "Guld ger tiden värme.",
      closingAccent: "Design ger den identitet.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Proportioner",
          description:
            "Boettens diameter, tjocklek, armbandets balans och urtavlans skala avgör hur guldet upplevs på handleden.",
        },
        {
          title: "Guld",
          description:
            "Guldets färg och finish skapar dess speciella värme. Polerade, borstade och strukturerade ytor möter ljuset på olika sätt.",
        },
        {
          title: "Finish",
          description:
            "Kanter, länkar, bezel och ytor visar sin kvalitet genom noggrann bearbetning och precision.",
        },
        {
          title: "Karaktär",
          description:
            "Urtavlans färg, arkitektur, proportioner och detaljer gör det ädla materialet personligt.",
        },
      ],
    },

    cta: {
      title: "Guld visar sin verkliga karaktär på handleden",
      sub:
        "Besök LIDYA och upplev våra guldklockor personligen. Upptäck värmen, proportionerna och finishen som känns rätt för dig.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres en or",
      title: "Le temps exprimé dans",
      titleAccent: "la chaleur de l'or.",
      description:
        "Découvrez des montres en or sélectionnées pour l'équilibre entre matière précieuse, proportions raffinées et présence intemporelle. Des classiques discrets aux pièces affirmées, chaque montre possède son propre caractère.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "L'or capture la lumière.",
      statementAccent: "Le caractère le rend intemporel.",
      imageAlt:
        "Montres en or de luxe présentées dans un univers LIDYA sombre et raffiné",
    },

    gallery: {
      eyebrow: "La collection de montres en or",
      title: "Des montres en or choisies pour",
      titleAccent: "leur présence intemporelle.",
      description:
        "La chaleur de l'or évolue avec chaque surface, proportion et détail. Découvrez des montres sélectionnées pour l'équilibre entre matière précieuse, architecture du cadran et caractère raffiné.",
      itemLabel: "Montres en or",
      closingText: "Précieuses par nature.",
      closingAccent: "Personnelles par caractère.",
      captions: [
        "Classique en or",
        "Or raffiné",
        "Présence chaleureuse",
        "Cadran intemporel",
        "Chronographe en or",
        "Signature Gold",
        "Héritage moderne",
        "Détail précieux",
        "Or de caractère",
        "Élégance dorée",
      ],
      alts: [
        "Montre en or de luxe aux proportions classiques",
        "Montre en or raffinée dans un décor sombre",
        "Montre en or élégante avec finition polie chaleureuse",
        "Montre en or avec architecture de cadran intemporelle",
        "Chronographe en or de luxe",
        "Montre en or signature LIDYA",
        "Montre en or moderne inspirée de l'horlogerie classique",
        "Détail d'une montre en or raffinée",
        "Montre en or de caractère",
        "Montre en or élégante au caractère intemporel",
      ],
    },

    craft: {
      eyebrow: "Le caractère de l'or",
      title: "Une montre en or se définit par bien plus que le métal précieux",
      description:
        "Son caractère naît de la relation entre couleur, proportions, finitions, architecture du cadran et manière dont la lumière traverse chaque surface.",
      closingText: "L'or donne de la chaleur au temps.",
      closingAccent: "Le design lui donne une identité.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Proportions",
          description:
            "Diamètre, épaisseur, équilibre du bracelet et échelle du cadran déterminent la présence de l'or au poignet.",
        },
        {
          title: "Or",
          description:
            "La couleur et la finition de l'or créent une chaleur distinctive. Les surfaces polies, satinées et texturées interagissent différemment avec la lumière.",
        },
        {
          title: "Finitions",
          description:
            "Arêtes, maillons, lunettes et surfaces révèlent leur qualité par la précision du travail et de l'assemblage.",
        },
        {
          title: "Caractère",
          description:
            "Couleur du cadran, architecture, proportions et détails transforment le métal précieux en une montre personnelle.",
        },
      ],
    },

    cta: {
      title: "L'or révèle son véritable caractère au poignet",
      sub:
        "Découvrez les montres en or LIDYA en personne et trouvez la chaleur, les proportions et les finitions qui vous correspondent.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi in oro",
      title: "Il tempo espresso nel",
      titleAccent: "calore dell'oro.",
      description:
        "Scoprite orologi in oro selezionati per l'equilibrio tra materiale prezioso, proporzioni raffinate e presenza senza tempo. Dai classici discreti ai modelli più decisi, ogni orologio possiede un carattere personale.",
      since: "LIDYA · DAL 1989",
      statementBefore: "L'oro cattura la luce.",
      statementAccent: "Il carattere lo rende senza tempo.",
      imageAlt:
        "Orologi in oro di lusso presentati in un raffinato ambiente scuro LIDYA",
    },

    gallery: {
      eyebrow: "La collezione di orologi in oro",
      title: "Orologi in oro scelti per",
      titleAccent: "una presenza senza tempo.",
      description:
        "Il calore dell'oro cambia con ogni superficie, proporzione e dettaglio. Scoprite orologi selezionati per l'equilibrio tra materiale prezioso, architettura del quadrante e carattere raffinato.",
      itemLabel: "Orologi in oro",
      closingText: "Preziosi per natura.",
      closingAccent: "Personali nel carattere.",
      captions: [
        "Classico in oro",
        "Oro raffinato",
        "Presenza calda",
        "Quadrante senza tempo",
        "Cronografo in oro",
        "Signature Gold",
        "Eredità moderna",
        "Dettaglio prezioso",
        "Oro di carattere",
        "Eleganza dorata",
      ],
      alts: [
        "Orologio in oro di lusso con proporzioni classiche",
        "Orologio in oro raffinato in ambiente scuro",
        "Elegante orologio in oro con finitura lucida calda",
        "Orologio in oro con architettura del quadrante senza tempo",
        "Cronografo in oro di lusso",
        "Orologio in oro signature LIDYA",
        "Orologio in oro moderno ispirato all'orologeria classica",
        "Dettaglio di un raffinato orologio in oro",
        "Orologio in oro di forte carattere",
        "Elegante orologio in oro dal carattere senza tempo",
      ],
    },

    craft: {
      eyebrow: "Il carattere dell'oro",
      title: "Un orologio in oro è definito da molto più del metallo prezioso",
      description:
        "Il suo carattere nasce dal rapporto tra colore, proporzioni, finiture, architettura del quadrante e movimento della luce sulle superfici.",
      closingText: "L'oro dona calore al tempo.",
      closingAccent: "Il design gli dà identità.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Proporzioni",
          description:
            "Diametro, spessore, equilibrio del bracciale e scala del quadrante determinano la presenza dell'oro al polso.",
        },
        {
          title: "Oro",
          description:
            "Colore e finitura dell'oro creano un calore distintivo. Superfici lucide, satinate e strutturate reagiscono alla luce in modi differenti.",
        },
        {
          title: "Finitura",
          description:
            "Bordi, maglie, lunette e superfici rivelano la qualità attraverso lavorazioni precise e curate.",
        },
        {
          title: "Carattere",
          description:
            "Colore del quadrante, architettura, proporzioni e dettagli trasformano il materiale prezioso in un orologio personale.",
        },
      ],
    },

    cta: {
      title: "L'oro rivela il suo vero carattere al polso",
      sub:
        "Scoprite personalmente gli orologi in oro LIDYA e trovate il calore, le proporzioni e le finiture che sentite davvero vostri.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes de oro",
      title: "El tiempo expresado en",
      titleAccent: "la calidez del oro.",
      description:
        "Descubra relojes de oro seleccionados por el equilibrio entre material precioso, proporciones refinadas y presencia atemporal. Desde clásicos discretos hasta modelos de fuerte personalidad, cada reloj posee su propio carácter.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "El oro captura la luz.",
      statementAccent: "El carácter lo hace atemporal.",
      imageAlt:
        "Relojes de oro de lujo presentados en un refinado entorno oscuro LIDYA",
    },

    gallery: {
      eyebrow: "La colección de relojes de oro",
      title: "Relojes de oro elegidos por",
      titleAccent: "su presencia atemporal.",
      description:
        "La calidez del oro cambia con cada superficie, proporción y detalle. Descubra relojes seleccionados por el equilibrio entre material precioso, arquitectura de la esfera y carácter refinado.",
      itemLabel: "Relojes de oro",
      closingText: "Preciosos por naturaleza.",
      closingAccent: "Personales por carácter.",
      captions: [
        "Clásico en oro",
        "Oro refinado",
        "Presencia cálida",
        "Esfera atemporal",
        "Cronógrafo de oro",
        "Signature Gold",
        "Herencia moderna",
        "Detalle precioso",
        "Oro de carácter",
        "Elegancia dorada",
      ],
      alts: [
        "Reloj de oro de lujo con proporciones clásicas",
        "Reloj de oro refinado en un entorno oscuro",
        "Elegante reloj de oro con acabado pulido cálido",
        "Reloj de oro con arquitectura de esfera atemporal",
        "Cronógrafo de oro de lujo",
        "Reloj de oro signature LIDYA",
        "Reloj de oro moderno inspirado en la relojería clásica",
        "Detalle de un refinado reloj de oro",
        "Reloj de oro de fuerte carácter",
        "Elegante reloj de oro con carácter atemporal",
      ],
    },

    craft: {
      eyebrow: "El carácter del oro",
      title: "Un reloj de oro se define por mucho más que el metal precioso",
      description:
        "Su carácter surge de la relación entre color, proporciones, acabados, arquitectura de la esfera y la forma en que la luz recorre cada superficie.",
      closingText: "El oro da calidez al tiempo.",
      closingAccent: "El diseño le da identidad.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Proporciones",
          description:
            "Diámetro, grosor, equilibrio del brazalete y escala de la esfera determinan cómo se siente el oro en la muñeca.",
        },
        {
          title: "Oro",
          description:
            "El color y el acabado del oro crean una calidez distintiva. Las superficies pulidas, satinadas y texturizadas interactúan con la luz de forma diferente.",
        },
        {
          title: "Acabado",
          description:
            "Bordes, eslabones, biseles y superficies muestran su calidad mediante un acabado cuidadoso y un ensamblaje preciso.",
        },
        {
          title: "Carácter",
          description:
            "El color de la esfera, su arquitectura, proporciones y detalles transforman el material precioso en un reloj personal.",
        },
      ],
    },

    cta: {
      title: "El oro revela su verdadero carácter en la muñeca",
      sub:
        "Descubra personalmente los relojes de oro LIDYA y encuentre la calidez, las proporciones y los acabados que mejor se adapten a usted.",
    },
  },
};

const GOLD_WATCH_IMAGES = [
  "/images/watches/gold-category/gold1.png",
  "/images/watches/gold-category/gold2.png",
  "/images/watches/gold-category/gold3.png",
  "/images/watches/gold-category/gold4.png",
  "/images/watches/gold-category/gold5.png",
  "/images/watches/gold-category/gold6.png",
  "/images/watches/gold-category/gold7.png",
  "/images/watches/gold-category/gold8.png",
  "/images/watches/gold-category/gold9.png",
  "/images/watches/gold-category/gold10.png",
];

function GoldWatchIcon() {
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
        r="8.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      <circle cx="24" cy="24" r="1.7" fill="currentColor" />

      <path
        d="M24 24V16M24 24l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GoldWatchesHero({
  copy,
}: {
  copy: GoldWatchesCopy["hero"];
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
        bg-[#0D0805]
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
          transition-[opacity,filter]
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
          src="/images/watches/gold-category/gold-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_50%]
            md:object-[60%_50%]
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
          from-[#080403]/95
          via-[#100805]/64
          to-[#100805]/8
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#070302]/94
          via-[#100805]/12
          to-[#100805]/12
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_68%_35%,rgba(221,179,94,0.16)_0%,rgba(221,179,94,0.04)_32%,transparent_60%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(4,2,1,0.20)_100%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[880px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#DDB35E]
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
              <GoldWatchIcon />
            </span>

            <span
              className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]"
              style={{
                color: "#DDB35E",
                WebkitTextFillColor: "#DDB35E",
              }}
            >
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[930px]
              font-display
              text-[3.15rem]
              leading-[0.94]
              tracking-[-0.04em]
              sm:text-[4rem]
              md:text-[5.35rem]
              lg:text-[6.3rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  drop-shadow-[0_3px_16px_rgba(0,0,0,0.32)]
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
                  color: "#FFF9EE",
                  WebkitTextFillColor: "#FFF9EE",
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
                  drop-shadow-[0_3px_16px_rgba(0,0,0,0.28)]
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
                  color: "#DDB35E",
                  WebkitTextFillColor: "#DDB35E",
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
                md:text-base
              "
              style={{
                color: "rgba(255,249,238,0.82)",
                WebkitTextFillColor:
                  "rgba(255,249,238,0.82)",
              }}
            >
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#DDB35E]" />

              <span
                className="text-[0.54rem] font-semibold uppercase tracking-[0.23em]"
                style={{
                  color: "rgba(255,249,238,0.62)",
                  WebkitTextFillColor:
                    "rgba(255,249,238,0.62)",
                }}
              >
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`
            mt-14
            border-t
            border-[#DDB35E]/25
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
              max-w-[1000px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]
              md:text-4xl
              lg:text-5xl
            "
            style={{
              color: "#FFF9EE",
              WebkitTextFillColor: "#FFF9EE",
            }}
          >
            {copy.statementBefore}{" "}
            <span
              style={{
                color: "#DDB35E",
                WebkitTextFillColor: "#DDB35E",
              }}
            >
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function GoldWatchesContent() {
  const { locale } = useLanguage();

  const copy = GOLD_WATCHES_COPY[locale];
  const english = GOLD_WATCHES_COPY.en;

  const galleryItems = GOLD_WATCH_IMAGES.map(
    (image, index) => ({
      image,

      caption:
        copy.gallery.captions[index] ??
        english.gallery.captions[index] ??
        "",

      alt:
        copy.gallery.alts[index] ??
        english.gallery.alts[index] ??
        "",
    })
  );

  return (
    <>
      <Header />

      <main>
        <GoldWatchesHero copy={copy.hero} />

        <CategoryGallery
          icon={<GoldWatchIcon />}
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