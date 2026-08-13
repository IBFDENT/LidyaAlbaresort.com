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

type BrilliantWatchesCopy = {
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

const BRILLIANT_WATCHES_COPY: Record<
  Locale,
  BrilliantWatchesCopy
> = {
  en: {
    hero: {
      eyebrow: "Brilliant-set Watches",
      title: "Time illuminated by",
      titleAccent: "precision and light.",
      description:
        "Discover watches where brilliant-cut stones transform every movement of the wrist into light. Refined proportions, precise setting and considered design give each timepiece its own unmistakable character.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Light reveals every detail.",
      statementAccent: "Precision gives it brilliance.",
      imageAlt:
        "Luxury brilliant-set watch presented in a refined LIDYA setting",
    },

    gallery: {
      eyebrow: "The Brilliant-set Watch Collection",
      title: "Watches selected for",
      titleAccent: "light and refinement.",
      description:
        "Each timepiece balances dial architecture, proportion and carefully placed brilliant-cut stones. Discover watches where jewellery craftsmanship and watchmaking meet.",
      itemLabel: "Brilliant-set Watches",
      closingText: "Cut to capture light.",
      closingAccent: "Set to reveal character.",
      captions: [
        "Brilliant Classic",
        "Luminous Dial",
        "Refined Setting",
        "Brilliant Bezel",
        "Elegant Presence",
        "Light in Motion",
        "Precious Detail",
        "Signature Brilliance",
        "Radiant Character",
        "Brilliant Elegance",
      ],
      alts: [
        "Luxury brilliant-set watch with refined proportions",
        "Brilliant-set watch with luminous dial",
        "Elegant watch with precisely set brilliant-cut stones",
        "Luxury watch with brilliant-set bezel",
        "Refined brilliant-set wristwatch",
        "Brilliant watch reflecting light in motion",
        "Close detail of brilliant-set watch",
        "Signature brilliant-set watch by LIDYA",
        "Radiant luxury watch with brilliant-cut stones",
        "Elegant brilliant-set timepiece",
      ],
    },

    craft: {
      eyebrow: "The Art of Brilliance",
      title:
        "Brilliance begins with precision long before the watch reaches the wrist",
      description:
        "Stone selection, cut, spacing and setting determine how light travels across a watch. When each detail is balanced correctly, brilliance becomes part of the design rather than decoration alone.",
      closingText: "Light creates presence.",
      closingAccent: "Craft gives it meaning.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Brilliant Cut",
          description:
            "The brilliant cut is designed to return light with intensity. Its proportions and facets create the sparkle that gives the watch its luminous presence.",
        },
        {
          title: "Setting",
          description:
            "Precise stone setting determines alignment, security and the rhythm of light across the case, bezel or bracelet.",
        },
        {
          title: "Proportion",
          description:
            "The relationship between stone size, case architecture and dial design determines whether brilliance feels subtle or expressive.",
        },
        {
          title: "Finishing",
          description:
            "Polished metal, refined edges and carefully finished surfaces work together with the stones to create depth and contrast.",
        },
      ],
    },

    cta: {
      title: "Brilliance is best discovered in motion",
      sub:
        "Visit LIDYA and experience brilliant-set watches in person. See how light, proportion and stone setting change with every movement of the wrist.",
    },
  },

  de: {
    hero: {
      eyebrow: "Uhren mit Brillanten",
      title: "Zeit erleuchtet durch",
      titleAccent: "Präzision und Licht.",
      description:
        "Entdecken Sie Uhren, bei denen brillantgeschliffene Steine jede Bewegung des Handgelenks in Licht verwandeln. Präzise Fassung, ausgewogene Proportionen und raffiniertes Design verleihen jedem Zeitmesser seinen eigenen Charakter.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Licht offenbart jedes Detail.",
      statementAccent: "Präzision verleiht ihm Brillanz.",
      imageAlt:
        "Luxuriöse Uhr mit Brillanten in einer eleganten LIDYA Umgebung",
    },

    gallery: {
      eyebrow: "Die Kollektion mit Brillanten",
      title: "Uhren ausgewählt für",
      titleAccent: "Licht und Raffinesse.",
      description:
        "Jeder Zeitmesser verbindet Zifferblattarchitektur, Proportion und präzise gefasste Brillanten.",
      itemLabel: "Uhren mit Brillanten",
      closingText: "Geschliffen, um Licht einzufangen.",
      closingAccent: "Gefasst, um Charakter zu zeigen.",
      captions: [
        "Brillante Klassik",
        "Leuchtendes Zifferblatt",
        "Raffinierte Fassung",
        "Brillantlünette",
        "Elegante Präsenz",
        "Licht in Bewegung",
        "Edles Detail",
        "Signature Brillanz",
        "Strahlender Charakter",
        "Brillante Eleganz",
      ],
      alts: [
        "Luxuriöse Uhr mit Brillanten",
        "Uhr mit Brillanten und leuchtendem Zifferblatt",
        "Elegante Uhr mit präzise gefassten Brillanten",
        "Luxusuhr mit Brillantlünette",
        "Raffinierte Uhr mit Brillanten",
        "Brillantuhr im Licht",
        "Detail einer Uhr mit Brillanten",
        "Signature Brillantuhr von LIDYA",
        "Strahlende Luxusuhr mit Brillanten",
        "Eleganter Zeitmesser mit Brillanten",
      ],
    },

    craft: {
      eyebrow: "Die Kunst der Brillanz",
      title:
        "Brillanz beginnt mit Präzision lange bevor die Uhr am Handgelenk getragen wird",
      description:
        "Auswahl, Schliff, Abstand und Fassung der Steine bestimmen, wie sich das Licht über die Uhr bewegt.",
      closingText: "Licht schafft Präsenz.",
      closingAccent: "Handwerk gibt ihr Bedeutung.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Brillantschliff",
          description:
            "Der Brillantschliff ist darauf ausgelegt, Licht intensiv zurückzuwerfen und eine unverwechselbare Leuchtkraft zu erzeugen.",
        },
        {
          title: "Fassung",
          description:
            "Eine präzise Fassung bestimmt Ausrichtung, Sicherheit und den Rhythmus des Lichts.",
        },
        {
          title: "Proportion",
          description:
            "Das Verhältnis von Stein, Gehäuse und Zifferblatt bestimmt, ob die Brillanz dezent oder ausdrucksstark wirkt.",
        },
        {
          title: "Verarbeitung",
          description:
            "Polierte Metalle, saubere Kanten und raffinierte Oberflächen schaffen Tiefe und Kontrast.",
        },
      ],
    },

    cta: {
      title: "Brillanz erlebt man am besten in Bewegung",
      sub:
        "Besuchen Sie LIDYA und erleben Sie Uhren mit Brillanten persönlich.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Pırlantalı Saatler",
      title: "Zaman",
      titleAccent: "ışık ve hassasiyetle aydınlanır.",
      description:
        "Pırlanta kesim taşların bileğin her hareketinde ışığı yansıttığı saatleri keşfedin. Hassas taş yerleştirme, dengeli oranlar ve rafine tasarım her saate benzersiz bir karakter kazandırır.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Işık her detayı ortaya çıkarır.",
      statementAccent: "Hassasiyet ona parlaklık verir.",
      imageAlt:
        "LIDYA ortamında sunulan lüks pırlantalı saat",
    },

    gallery: {
      eyebrow: "Pırlantalı Saat Koleksiyonu",
      title: "Işık ve",
      titleAccent: "zarafet için seçilen saatler.",
      description:
        "Her saat kadran mimarisi, oranlar ve özenle yerleştirilmiş pırlanta kesim taşlar arasında hassas bir denge kurar.",
      itemLabel: "Pırlantalı Saatler",
      closingText: "Işığı yakalamak için kesildi.",
      closingAccent: "Karakteri göstermek için yerleştirildi.",
      captions: [
        "Pırlanta Klasik",
        "Işıltılı Kadran",
        "Rafine Taş Yerleşimi",
        "Pırlantalı Bezel",
        "Zarif Duruş",
        "Hareket Halinde Işık",
        "Değerli Detay",
        "Signature Işıltı",
        "Parlak Karakter",
        "Pırlanta Zarafeti",
      ],
      alts: [
        "Lüks pırlantalı saat",
        "Işıltılı kadranlı pırlantalı saat",
        "Hassas taş yerleşimli zarif saat",
        "Pırlantalı bezelli lüks saat",
        "Rafine pırlantalı kol saati",
        "Işığı yansıtan pırlantalı saat",
        "Pırlantalı saat detayı",
        "LIDYA signature pırlantalı saat",
        "Parlak karakterli lüks saat",
        "Zarif pırlantalı saat",
      ],
    },

    craft: {
      eyebrow: "Işıltı Sanatı",
      title:
        "Işıltı, saat bileğe ulaşmadan çok önce hassasiyetle başlar",
      description:
        "Taş seçimi, kesim, aralık ve yerleştirme ışığın saat üzerinde nasıl hareket edeceğini belirler.",
      closingText: "Işık duruş yaratır.",
      closingAccent: "Ustalık ona anlam verir.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Pırlanta Kesim",
          description:
            "Pırlanta kesim ışığı güçlü şekilde geri yansıtmak ve yoğun bir parlaklık yaratmak için tasarlanmıştır.",
        },
        {
          title: "Taş Yerleşimi",
          description:
            "Hassas taş yerleşimi hizalama, güvenlik ve ışık ritmini belirler.",
        },
        {
          title: "Oran",
          description:
            "Taş boyutu, kasa mimarisi ve kadran arasındaki ilişki saatin karakterini belirler.",
        },
        {
          title: "İşçilik",
          description:
            "Parlatılmış metal ve rafine yüzeyler taşlarla birlikte derinlik ve kontrast yaratır.",
        },
      ],
    },

    cta: {
      title: "Işıltı en iyi hareket halinde keşfedilir",
      sub:
        "LIDYA'yı ziyaret edin ve pırlantalı saatlerimizi bileğinizde deneyimleyin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Hodinky s briliantmi",
      title: "Čas rozžiarený",
      titleAccent: "presnosťou a svetlom.",
      description:
        "Objavte hodinky, v ktorých briliantovo brúsené kamene premieňajú každý pohyb zápästia na svetlo. Precízne osadenie, vyvážené proporcie a premyslený dizajn dávajú každému modelu nezameniteľný charakter.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Svetlo odhaľuje každý detail.",
      statementAccent: "Presnosť mu dáva brilanciu.",
      imageAlt:
        "Luxusné hodinky s briliantmi prezentované v elegantnom prostredí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcia hodiniek s briliantmi",
      title: "Hodinky vybrané pre",
      titleAccent: "svetlo a rafinovanosť.",
      description:
        "Každý model spája architektúru ciferníka, proporcie a precízne osadené briliantovo brúsené kamene. Objavte miesto, kde sa stretáva hodinárstvo so šperkárskym remeslom.",
      itemLabel: "Hodinky s briliantmi",
      closingText: "Brúsené tak, aby zachytili svetlo.",
      closingAccent: "Osadené tak, aby odhalili charakter.",
      captions: [
        "Briliantová klasika",
        "Žiarivý ciferník",
        "Precízne osadenie",
        "Briliantová luneta",
        "Elegantná prítomnosť",
        "Svetlo v pohybe",
        "Vzácny detail",
        "Signature brilancia",
        "Žiarivý charakter",
        "Briliantová elegancia",
      ],
      alts: [
        "Luxusné hodinky s briliantmi",
        "Hodinky s briliantmi a žiarivým ciferníkom",
        "Elegantné hodinky s precízne osadenými briliantmi",
        "Luxusné hodinky s briliantovou lunetou",
        "Rafinované hodinky s briliantmi",
        "Hodinky s briliantmi odrážajúce svetlo",
        "Detail hodiniek s briliantmi",
        "Signature hodinky s briliantmi LIDYA",
        "Žiarivé luxusné hodinky s briliantmi",
        "Elegantné hodinky osadené briliantmi",
      ],
    },

    craft: {
      eyebrow: "Umenie brilancie",
      title:
        "Brilancia začína presnosťou dávno predtým, než sa hodinky dostanú na zápästie",
      description:
        "Výber kameňov, výbrus, rozostupy a spôsob osadenia určujú, ako svetlo prechádza po povrchu hodiniek. Keď sú všetky detaily v rovnováhe, brilancia sa stáva súčasťou dizajnu.",
      closingText: "Svetlo vytvára prítomnosť.",
      closingAccent: "Remeslo jej dáva význam.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Briliantový výbrus",
          description:
            "Briliantový výbrus je navrhnutý tak, aby maximálne vracal svetlo. Presné proporcie a fazety vytvárajú intenzívnu brilanciu.",
        },
        {
          title: "Osadenie",
          description:
            "Precízne osadenie určuje zarovnanie, bezpečnosť kameňov a rytmus svetla na lunete, puzdre či náramku.",
        },
        {
          title: "Proporcie",
          description:
            "Vzťah medzi veľkosťou kameňov, architektúrou puzdra a ciferníkom určuje, či brilancia pôsobí jemne alebo výrazne.",
        },
        {
          title: "Spracovanie",
          description:
            "Leštený kov, čisté hrany a precízne povrchy spolu s kameňmi vytvárajú hĺbku, kontrast a svetelnú hru.",
        },
      ],
    },

    cta: {
      title: "Brilanciu najlepšie objavíte v pohybe",
      sub:
        "Navštívte LIDYA a spoznajte hodinky s briliantmi osobne. Sledujte, ako sa svetlo, proporcie a osadenie menia s každým pohybom zápästia.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Hodinky s brilianty",
      title: "Čas rozzářený",
      titleAccent: "přesností a světlem.",
      description:
        "Objevte hodinky, v nichž briliantově broušené kameny proměňují každý pohyb zápěstí ve světlo.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Světlo odhaluje každý detail.",
      statementAccent: "Přesnost mu dává brilanci.",
      imageAlt:
        "Luxusní hodinky s brilianty v elegantním prostředí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekce hodinek s brilianty",
      title: "Hodinky vybrané pro",
      titleAccent: "světlo a rafinovanost.",
      description:
        "Každý model spojuje proporce, architekturu ciferníku a precizně osazené brilianty.",
      itemLabel: "Hodinky s brilianty",
      closingText: "Broušené pro zachycení světla.",
      closingAccent: "Osazené pro odhalení charakteru.",
      captions: [
        "Briliantová klasika",
        "Zářivý ciferník",
        "Precizní osazení",
        "Briliantová luneta",
        "Elegantní přítomnost",
        "Světlo v pohybu",
        "Vzácný detail",
        "Signature brilance",
        "Zářivý charakter",
        "Briliantová elegance",
      ],
      alts: [
        "Luxusní hodinky s brilianty",
        "Hodinky s brilianty a zářivým ciferníkem",
        "Elegantní hodinky s precizně osazenými brilianty",
        "Luxusní hodinky s briliantovou lunetou",
        "Rafinované hodinky s brilianty",
        "Briliantové hodinky odrážející světlo",
        "Detail hodinek s brilianty",
        "Signature hodinky s brilianty LIDYA",
        "Zářivé luxusní hodinky",
        "Elegantní hodinky s brilianty",
      ],
    },

    craft: {
      eyebrow: "Umění brilance",
      title:
        "Brilance začíná přesností dávno předtím, než se hodinky dostanou na zápěstí",
      description:
        "Výběr kamenů, brus, rozestupy a osazení určují, jak světlo pracuje s povrchem hodinek.",
      closingText: "Světlo vytváří přítomnost.",
      closingAccent: "Řemeslo jí dává význam.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Briliantový brus",
          description:
            "Briliantový brus maximalizuje návrat světla a vytváří intenzivní zář.",
        },
        {
          title: "Osazení",
          description:
            "Přesné osazení určuje zarovnání, bezpečnost kamenů a rytmus světla.",
        },
        {
          title: "Proporce",
          description:
            "Vztah mezi kamenem, pouzdrem a ciferníkem určuje celkový výraz.",
        },
        {
          title: "Zpracování",
          description:
            "Leštěné plochy a čisté hrany vytvářejí s kameny hloubku a kontrast.",
        },
      ],
    },

    cta: {
      title: "Brilanci nejlépe objevíte v pohybu",
      sub:
        "Navštivte LIDYA a poznejte hodinky s brilianty osobně.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Briliáns órák",
      title: "Az idő ragyogása",
      titleAccent: "pontosságban és fényben.",
      description:
        "Fedezze fel az órákat, ahol a briliáns csiszolású kövek minden mozdulatot fénnyé alakítanak.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "A fény minden részletet felfed.",
      statementAccent: "A pontosság ragyogást ad neki.",
      imageAlt:
        "Luxus briliáns óra elegáns LIDYA környezetben",
    },

    gallery: {
      eyebrow: "Briliáns órakollekció",
      title: "Órák",
      titleAccent: "fényhez és kifinomultsághoz.",
      description:
        "Minden óra a számlap, az arányok és a precízen foglalt kövek egyensúlyára épül.",
      itemLabel: "Briliáns órák",
      closingText: "A fény befogadására csiszolva.",
      closingAccent: "A karakter megmutatására foglalva.",
      captions: [
        "Briliáns klasszikus",
        "Ragyogó számlap",
        "Precíz foglalás",
        "Briliáns lünetta",
        "Elegáns jelenlét",
        "Fény mozgásban",
        "Értékes részlet",
        "Signature ragyogás",
        "Sugárzó karakter",
        "Briliáns elegancia",
      ],
      alts: [
        "Luxus briliáns óra",
        "Briliáns óra ragyogó számlappal",
        "Precízen foglalt kövekkel díszített óra",
        "Briliáns lünettás luxusóra",
        "Kifinomult briliáns óra",
        "Fényt tükröző briliáns óra",
        "Briliáns óra részlete",
        "LIDYA signature briliáns óra",
        "Sugárzó luxusóra",
        "Elegáns briliáns időmérő",
      ],
    },

    craft: {
      eyebrow: "A ragyogás művészete",
      title:
        "A ragyogás pontossággal kezdődik jóval azelőtt, hogy az óra csuklóra kerül",
      description:
        "A kövek kiválasztása, csiszolása, elhelyezése és foglalása határozza meg a fény játékát.",
      closingText: "A fény jelenlétet ad.",
      closingAccent: "A mesterség jelentést ad neki.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Briliáns csiszolás",
          description:
            "A briliáns csiszolás célja a fény maximális visszaverése.",
        },
        {
          title: "Foglalás",
          description:
            "A precíz foglalás biztosítja az igazítást és a fény ritmusát.",
        },
        {
          title: "Arányok",
          description:
            "A kő, a tok és a számlap kapcsolata alakítja a megjelenést.",
        },
        {
          title: "Kidolgozás",
          description:
            "A polírozott fém és a precíz felületek kontrasztot teremtenek.",
        },
      ],
    },

    cta: {
      title: "A ragyogás mozgás közben mutatkozik meg igazán",
      sub:
        "Fedezze fel személyesen a LIDYA briliáns óráit.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki z brylantami",
      title: "Czas rozświetlony",
      titleAccent: "precyzją i światłem.",
      description:
        "Odkryj zegarki, w których brylantowo szlifowane kamienie zamieniają każdy ruch nadgarstka w światło.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Światło odkrywa każdy detal.",
      statementAccent: "Precyzja nadaje mu blask.",
      imageAlt:
        "Luksusowy zegarek z brylantami w eleganckim otoczeniu LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcja zegarków z brylantami",
      title: "Zegarki wybrane dla",
      titleAccent: "światła i elegancji.",
      description:
        "Każdy model łączy proporcje, architekturę tarczy i precyzyjnie oprawione brylanty.",
      itemLabel: "Zegarki z brylantami",
      closingText: "Szlifowane, aby chwytać światło.",
      closingAccent: "Oprawione, aby ukazać charakter.",
      captions: [
        "Brylantowa klasyka",
        "Lśniąca tarcza",
        "Precyzyjna oprawa",
        "Brylantowy bezel",
        "Elegancka obecność",
        "Światło w ruchu",
        "Szlachetny detal",
        "Signature blask",
        "Promienny charakter",
        "Brylantowa elegancja",
      ],
      alts: [
        "Luksusowy zegarek z brylantami",
        "Zegarek z brylantami i lśniącą tarczą",
        "Elegancki zegarek z precyzyjnie oprawionymi brylantami",
        "Luksusowy zegarek z brylantowym bezelem",
        "Rafinowany zegarek z brylantami",
        "Zegarek z brylantami odbijający światło",
        "Detal zegarka z brylantami",
        "Zegarek LIDYA signature z brylantami",
        "Promienny luksusowy zegarek",
        "Elegancki zegarek z brylantami",
      ],
    },

    craft: {
      eyebrow: "Sztuka blasku",
      title:
        "Blask zaczyna się od precyzji na długo przed założeniem zegarka na nadgarstek",
      description:
        "Dobór kamieni, szlif, rozmieszczenie i oprawa decydują o sposobie, w jaki światło porusza się po zegarku.",
      closingText: "Światło buduje obecność.",
      closingAccent: "Rzemiosło nadaje jej znaczenie.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Szlif brylantowy",
          description:
            "Szlif brylantowy maksymalizuje odbicie światła i tworzy intensywny blask.",
        },
        {
          title: "Oprawa",
          description:
            "Precyzyjna oprawa zapewnia wyrównanie, bezpieczeństwo i rytm światła.",
        },
        {
          title: "Proporcje",
          description:
            "Relacja między kamieniem, kopertą i tarczą określa charakter zegarka.",
        },
        {
          title: "Wykończenie",
          description:
            "Polerowany metal i dopracowane powierzchnie tworzą głębię i kontrast.",
        },
      ],
    },

    cta: {
      title: "Blask najlepiej odkrywa się w ruchu",
      sub:
        "Odwiedź LIDYA i poznaj zegarki z brylantami osobiście.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Часы с бриллиантами",
      title: "Время, наполненное",
      titleAccent: "светом и точностью.",
      description:
        "Откройте часы, в которых бриллиантовая огранка превращает каждое движение запястья в игру света.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Свет раскрывает каждую деталь.",
      statementAccent: "Точность придаёт ей блеск.",
      imageAlt:
        "Роскошные часы с бриллиантами в элегантной обстановке LIDYA",
    },

    gallery: {
      eyebrow: "Коллекция часов с бриллиантами",
      title: "Часы, выбранные ради",
      titleAccent: "света и утончённости.",
      description:
        "Каждая модель сочетает архитектуру циферблата, пропорции и точно закреплённые камни.",
      itemLabel: "Часы с бриллиантами",
      closingText: "Огранены, чтобы ловить свет.",
      closingAccent: "Закреплены, чтобы раскрыть характер.",
      captions: [
        "Бриллиантовая классика",
        "Сияющий циферблат",
        "Точная закрепка",
        "Бриллиантовый безель",
        "Элегантное присутствие",
        "Свет в движении",
        "Драгоценная деталь",
        "Signature сияние",
        "Сияющий характер",
        "Бриллиантовая элегантность",
      ],
      alts: [
        "Роскошные часы с бриллиантами",
        "Часы с бриллиантами и сияющим циферблатом",
        "Элегантные часы с точной закрепкой камней",
        "Роскошные часы с бриллиантовым безелем",
        "Утончённые часы с бриллиантами",
        "Часы с бриллиантами в движении",
        "Деталь часов с бриллиантами",
        "Фирменные часы LIDYA",
        "Сияющие роскошные часы",
        "Элегантные часы с бриллиантами",
      ],
    },

    craft: {
      eyebrow: "Искусство сияния",
      title:
        "Сияние начинается с точности задолго до того, как часы окажутся на запястье",
      description:
        "Выбор камней, огранка, расстояние и закрепка определяют движение света.",
      closingText: "Свет создаёт присутствие.",
      closingAccent: "Мастерство придаёт ему смысл.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Бриллиантовая огранка",
          description:
            "Бриллиантовая огранка создаёт интенсивное отражение света.",
        },
        {
          title: "Закрепка",
          description:
            "Точная закрепка обеспечивает выравнивание и безопасность камней.",
        },
        {
          title: "Пропорции",
          description:
            "Соотношение камней, корпуса и циферблата определяет характер.",
        },
        {
          title: "Отделка",
          description:
            "Полированный металл и точные поверхности создают глубину и контраст.",
        },
      ],
    },

    cta: {
      title: "Истинное сияние раскрывается в движении",
      sub:
        "Познакомьтесь с часами с бриллиантами LIDYA лично.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Horloges met briljanten",
      title: "Tijd verlicht door",
      titleAccent: "precisie en licht.",
      description:
        "Ontdek horloges waarin briljantgeslepen stenen iedere beweging van de pols in licht veranderen.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Licht onthult elk detail.",
      statementAccent: "Precisie geeft het schittering.",
      imageAlt:
        "Luxe horloge met briljanten in een elegante LIDYA omgeving",
    },

    gallery: {
      eyebrow: "De collectie met briljanten",
      title: "Horloges geselecteerd voor",
      titleAccent: "licht en verfijning.",
      description:
        "Elk horloge combineert proportie, wijzerplaatarchitectuur en nauwkeurig gezette briljanten.",
      itemLabel: "Horloges met briljanten",
      closingText: "Geslepen om licht te vangen.",
      closingAccent: "Gezet om karakter te tonen.",
      captions: [
        "Briljante klassieker",
        "Lichtgevende wijzerplaat",
        "Verfijnde zetting",
        "Briljanten lunette",
        "Elegante uitstraling",
        "Licht in beweging",
        "Kostbaar detail",
        "Signature schittering",
        "Stralend karakter",
        "Briljante elegantie",
      ],
      alts: [
        "Luxe horloge met briljanten",
        "Horloge met briljanten en lichte wijzerplaat",
        "Elegant horloge met nauwkeurig gezette briljanten",
        "Luxe horloge met briljanten lunette",
        "Verfijnd horloge met briljanten",
        "Horloge met briljanten in licht",
        "Detail van horloge met briljanten",
        "LIDYA signature horloge",
        "Stralend luxe horloge",
        "Elegant horloge met briljanten",
      ],
    },

    craft: {
      eyebrow: "De kunst van schittering",
      title:
        "Schittering begint met precisie lang voordat het horloge wordt gedragen",
      description:
        "Steenselectie, slijpvorm, afstand en zetting bepalen hoe het licht zich over het horloge beweegt.",
      closingText: "Licht creëert uitstraling.",
      closingAccent: "Vakmanschap geeft betekenis.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Briljantslijpsel",
          description:
            "De briljantslijpvorm maximaliseert de terugkeer van licht.",
        },
        {
          title: "Zetting",
          description:
            "Nauwkeurige zetting bepaalt uitlijning en veiligheid.",
        },
        {
          title: "Proportie",
          description:
            "De verhouding tussen steen, kast en wijzerplaat bepaalt de uitstraling.",
        },
        {
          title: "Afwerking",
          description:
            "Gepolijst metaal en verfijnde oppervlakken creëren diepte en contrast.",
        },
      ],
    },

    cta: {
      title: "Schittering ontdekt u het best in beweging",
      sub:
        "Bezoek LIDYA en ervaar horloges met briljanten persoonlijk.",
    },
  },

  da: {
    hero: {
      eyebrow: "Ure med brillanter",
      title: "Tid oplyst af",
      titleAccent: "præcision og lys.",
      description:
        "Oplev ure, hvor brillantslebne sten forvandler hver bevægelse til lys.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Lys afslører hver detalje.",
      statementAccent: "Præcision giver den glans.",
      imageAlt:
        "Luksuriøst ur med brillanter i elegant LIDYA miljø",
    },

    gallery: {
      eyebrow: "Kollektionen med brillanter",
      title: "Ure udvalgt for",
      titleAccent: "lys og raffinement.",
      description:
        "Hvert ur balancerer proportioner, urskivearkitektur og præcist satte brillanter.",
      itemLabel: "Ure med brillanter",
      closingText: "Slebet til at fange lyset.",
      closingAccent: "Fattet til at vise karakter.",
      captions: [
        "Brillant klassiker",
        "Lysende urskive",
        "Raffineret fatning",
        "Brillant bezel",
        "Elegant tilstedeværelse",
        "Lys i bevægelse",
        "Ædel detalje",
        "Signature glans",
        "Strålende karakter",
        "Brillant elegance",
      ],
      alts: [
        "Luksuriøst ur med brillanter",
        "Ur med brillanter og lysende urskive",
        "Elegant ur med præcist satte brillanter",
        "Luksusur med brillant bezel",
        "Raffineret ur med brillanter",
        "Brillant ur i lys",
        "Detalje af ur med brillanter",
        "LIDYA signature ur",
        "Strålende luksusur",
        "Elegant ur med brillanter",
      ],
    },

    craft: {
      eyebrow: "Kunsten i brillans",
      title:
        "Brillans begynder med præcision længe før uret når håndleddet",
      description:
        "Udvælgelse, slibning, afstand og fatning bestemmer lysets bevægelse.",
      closingText: "Lys skaber tilstedeværelse.",
      closingAccent: "Håndværk giver betydning.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Brillantslibning",
          description:
            "Brillantslibningen er skabt til at returnere mest muligt lys.",
        },
        {
          title: "Fatning",
          description:
            "Præcis fatning sikrer justering og sikkerhed.",
        },
        {
          title: "Proportioner",
          description:
            "Forholdet mellem sten, urkasse og urskive bestemmer udtrykket.",
        },
        {
          title: "Finish",
          description:
            "Polerede metaller og raffinerede flader skaber dybde.",
        },
      ],
    },

    cta: {
      title: "Brillans opleves bedst i bevægelse",
      sub:
        "Besøg LIDYA og oplev ure med brillanter personligt.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Briljantein koristellut kellot",
      title: "Aika valaistuna",
      titleAccent: "tarkkuudella ja valolla.",
      description:
        "Tutustu kelloihin, joissa briljanttihiotut kivet muuttavat jokaisen ranteen liikkeen valoksi.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Valo paljastaa jokaisen yksityiskohdan.",
      statementAccent: "Tarkkuus antaa sille säihkeen.",
      imageAlt:
        "Ylellinen briljantein koristeltu kello LIDYA ympäristössä",
    },

    gallery: {
      eyebrow: "Briljanttikellojen kokoelma",
      title: "Kelloja valittu",
      titleAccent: "valon ja hienostuneisuuden vuoksi.",
      description:
        "Jokainen kello tasapainottaa mittasuhteet, kellotaulun ja tarkasti asetetut briljantit.",
      itemLabel: "Briljanttikellot",
      closingText: "Hiottu vangitsemaan valo.",
      closingAccent: "Istutettu näyttämään luonne.",
      captions: [
        "Briljanttiklassikko",
        "Hohtava kellotaulu",
        "Tarkka istutus",
        "Briljanttikehä",
        "Elegantti läsnäolo",
        "Valo liikkeessä",
        "Arvokas yksityiskohta",
        "Signature säihke",
        "Säteilevä luonne",
        "Briljanttieleganssi",
      ],
      alts: [
        "Ylellinen briljanttikello",
        "Briljanttikello hohtavalla kellotaululla",
        "Elegantti kello tarkasti istutetuilla briljanteilla",
        "Luksuskello briljanttikehällä",
        "Hienostunut briljanttikello",
        "Valoa heijastava briljanttikello",
        "Briljanttikellon yksityiskohta",
        "LIDYA signature briljanttikello",
        "Säteilevä luksuskello",
        "Elegantti briljanttikello",
      ],
    },

    craft: {
      eyebrow: "Säihkeen taide",
      title:
        "Säihke alkaa tarkkuudesta jo kauan ennen kuin kello asetetaan ranteeseen",
      description:
        "Kivien valinta, hionta, etäisyys ja istutus määrittävät valon liikkeen.",
      closingText: "Valo luo läsnäolon.",
      closingAccent: "Käsityö antaa sille merkityksen.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Briljanttihionta",
          description:
            "Briljanttihionta maksimoi valon heijastumisen.",
        },
        {
          title: "Istutus",
          description:
            "Tarkka istutus varmistaa linjauksen ja turvallisuuden.",
        },
        {
          title: "Mittasuhteet",
          description:
            "Kiven, kuoren ja kellotaulun suhde määrittää kokonaisuuden.",
        },
        {
          title: "Viimeistely",
          description:
            "Kiillotettu metalli ja hienostuneet pinnat luovat kontrastia.",
        },
      ],
    },

    cta: {
      title: "Säihke paljastuu parhaiten liikkeessä",
      sub:
        "Tutustu LIDYA:n briljanttikelloihin henkilökohtaisesti.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Klockor med briljanter",
      title: "Tid upplyst av",
      titleAccent: "precision och ljus.",
      description:
        "Upptäck klockor där briljantslipade stenar förvandlar varje rörelse till ljus.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Ljuset avslöjar varje detalj.",
      statementAccent: "Precision ger den briljans.",
      imageAlt:
        "Lyxig klocka med briljanter i elegant LIDYA miljö",
    },

    gallery: {
      eyebrow: "Kollektionen med briljanter",
      title: "Klockor valda för",
      titleAccent: "ljus och förfining.",
      description:
        "Varje klocka balanserar proportioner, urtavla och noggrant infattade briljanter.",
      itemLabel: "Klockor med briljanter",
      closingText: "Slipade för att fånga ljuset.",
      closingAccent: "Infattade för att visa karaktär.",
      captions: [
        "Briljant klassiker",
        "Ljus urtavla",
        "Precisionsinfattning",
        "Briljant bezel",
        "Elegant närvaro",
        "Ljus i rörelse",
        "Värdefull detalj",
        "Signature briljans",
        "Strålande karaktär",
        "Briljant elegans",
      ],
      alts: [
        "Lyxig klocka med briljanter",
        "Klocka med briljanter och ljus urtavla",
        "Elegant klocka med precist infattade briljanter",
        "Lyxklocka med briljant bezel",
        "Raffinerad klocka med briljanter",
        "Briljantklocka i ljus",
        "Detalj av briljantklocka",
        "LIDYA signature klocka",
        "Strålande lyxklocka",
        "Elegant klocka med briljanter",
      ],
    },

    craft: {
      eyebrow: "Konsten i briljans",
      title:
        "Briljans börjar med precision långt innan klockan når handleden",
      description:
        "Val, slipning, avstånd och infattning avgör hur ljuset rör sig över klockan.",
      closingText: "Ljus skapar närvaro.",
      closingAccent: "Hantverk ger mening.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Briljantslipning",
          description:
            "Briljantslipningen är skapad för maximal ljusreflektion.",
        },
        {
          title: "Infattning",
          description:
            "Precisionsinfattning skapar säkerhet och korrekt linjering.",
        },
        {
          title: "Proportioner",
          description:
            "Relationen mellan sten, boett och urtavla bestämmer uttrycket.",
        },
        {
          title: "Finish",
          description:
            "Polerad metall och raffinerade ytor skapar djup och kontrast.",
        },
      ],
    },

    cta: {
      title: "Briljans upptäcks bäst i rörelse",
      sub:
        "Besök LIDYA och upplev klockor med briljanter personligen.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres serties de brillants",
      title: "Le temps illuminé par",
      titleAccent: "la précision et la lumière.",
      description:
        "Découvrez des montres où les pierres taille brillant transforment chaque mouvement du poignet en lumière.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "La lumière révèle chaque détail.",
      statementAccent: "La précision lui donne son éclat.",
      imageAlt:
        "Montre de luxe sertie de brillants dans l'univers LIDYA",
    },

    gallery: {
      eyebrow: "La collection de montres à brillants",
      title: "Des montres choisies pour",
      titleAccent: "la lumière et le raffinement.",
      description:
        "Chaque montre équilibre proportions, architecture du cadran et sertissage précis.",
      itemLabel: "Montres à brillants",
      closingText: "Taillés pour capturer la lumière.",
      closingAccent: "Sertis pour révéler le caractère.",
      captions: [
        "Classique brillant",
        "Cadran lumineux",
        "Sertissage raffiné",
        "Lunette brillante",
        "Présence élégante",
        "Lumière en mouvement",
        "Détail précieux",
        "Éclat signature",
        "Caractère rayonnant",
        "Élégance brillante",
      ],
      alts: [
        "Montre de luxe sertie de brillants",
        "Montre à brillants avec cadran lumineux",
        "Montre élégante avec sertissage précis",
        "Montre de luxe avec lunette sertie",
        "Montre raffinée à brillants",
        "Montre brillante dans la lumière",
        "Détail d'une montre à brillants",
        "Montre signature LIDYA",
        "Montre de luxe rayonnante",
        "Montre élégante sertie de brillants",
      ],
    },

    craft: {
      eyebrow: "L'art de l'éclat",
      title:
        "L'éclat commence par la précision bien avant que la montre ne soit portée",
      description:
        "La sélection, la taille, l'espacement et le sertissage déterminent la circulation de la lumière.",
      closingText: "La lumière crée la présence.",
      closingAccent: "Le savoir-faire lui donne du sens.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Taille brillant",
          description:
            "La taille brillant maximise le retour de lumière.",
        },
        {
          title: "Sertissage",
          description:
            "Un sertissage précis garantit alignement et sécurité.",
        },
        {
          title: "Proportions",
          description:
            "Le rapport entre pierre, boîtier et cadran définit l'expression.",
        },
        {
          title: "Finition",
          description:
            "Les métaux polis et les surfaces raffinées créent profondeur et contraste.",
        },
      ],
    },

    cta: {
      title: "L'éclat se découvre pleinement en mouvement",
      sub:
        "Découvrez les montres à brillants LIDYA lors d'une visite privée.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi con brillanti",
      title: "Il tempo illuminato da",
      titleAccent: "precisione e luce.",
      description:
        "Scoprite orologi in cui le pietre taglio brillante trasformano ogni movimento del polso in luce.",
      since: "LIDYA · DAL 1989",
      statementBefore: "La luce rivela ogni dettaglio.",
      statementAccent: "La precisione gli dona brillantezza.",
      imageAlt:
        "Orologio di lusso con brillanti in elegante ambiente LIDYA",
    },

    gallery: {
      eyebrow: "La collezione di orologi con brillanti",
      title: "Orologi scelti per",
      titleAccent: "luce e raffinatezza.",
      description:
        "Ogni orologio combina proporzioni, architettura del quadrante e incastonatura precisa.",
      itemLabel: "Orologi con brillanti",
      closingText: "Tagliati per catturare la luce.",
      closingAccent: "Incastonati per rivelare il carattere.",
      captions: [
        "Classico brillante",
        "Quadrante luminoso",
        "Incastonatura raffinata",
        "Lunetta brillante",
        "Presenza elegante",
        "Luce in movimento",
        "Dettaglio prezioso",
        "Brillantezza signature",
        "Carattere radioso",
        "Eleganza brillante",
      ],
      alts: [
        "Orologio di lusso con brillanti",
        "Orologio con brillanti e quadrante luminoso",
        "Orologio elegante con brillanti incastonati con precisione",
        "Orologio di lusso con lunetta di brillanti",
        "Orologio raffinato con brillanti",
        "Orologio brillante nella luce",
        "Dettaglio di orologio con brillanti",
        "Orologio signature LIDYA",
        "Orologio di lusso radioso",
        "Orologio elegante con brillanti",
      ],
    },

    craft: {
      eyebrow: "L'arte della brillantezza",
      title:
        "La brillantezza nasce dalla precisione molto prima che l'orologio arrivi al polso",
      description:
        "Selezione, taglio, distanza e incastonatura determinano il movimento della luce.",
      closingText: "La luce crea presenza.",
      closingAccent: "L'artigianato le dà significato.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Taglio brillante",
          description:
            "Il taglio brillante massimizza il ritorno della luce.",
        },
        {
          title: "Incastonatura",
          description:
            "L'incastonatura precisa garantisce allineamento e sicurezza.",
        },
        {
          title: "Proporzioni",
          description:
            "Il rapporto tra pietra, cassa e quadrante definisce l'espressione.",
        },
        {
          title: "Finitura",
          description:
            "Metallo lucido e superfici raffinate creano profondità e contrasto.",
        },
      ],
    },

    cta: {
      title: "La brillantezza si scopre davvero in movimento",
      sub:
        "Scoprite personalmente gli orologi con brillanti LIDYA.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes con brillantes",
      title: "El tiempo iluminado por",
      titleAccent: "la precisión y la luz.",
      description:
        "Descubra relojes donde las piedras talla brillante transforman cada movimiento de la muñeca en luz.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "La luz revela cada detalle.",
      statementAccent: "La precisión le da brillo.",
      imageAlt:
        "Reloj de lujo con brillantes en elegante entorno LIDYA",
    },

    gallery: {
      eyebrow: "La colección de relojes con brillantes",
      title: "Relojes seleccionados por",
      titleAccent: "luz y refinamiento.",
      description:
        "Cada reloj combina proporciones, arquitectura de esfera y engaste preciso.",
      itemLabel: "Relojes con brillantes",
      closingText: "Tallados para capturar la luz.",
      closingAccent: "Engastados para revelar carácter.",
      captions: [
        "Clásico brillante",
        "Esfera luminosa",
        "Engaste refinado",
        "Bisel brillante",
        "Presencia elegante",
        "Luz en movimiento",
        "Detalle precioso",
        "Brillo signature",
        "Carácter radiante",
        "Elegancia brillante",
      ],
      alts: [
        "Reloj de lujo con brillantes",
        "Reloj con brillantes y esfera luminosa",
        "Reloj elegante con brillantes engastados con precisión",
        "Reloj de lujo con bisel de brillantes",
        "Reloj refinado con brillantes",
        "Reloj brillante bajo la luz",
        "Detalle de reloj con brillantes",
        "Reloj signature LIDYA",
        "Reloj de lujo radiante",
        "Reloj elegante con brillantes",
      ],
    },

    craft: {
      eyebrow: "El arte del brillo",
      title:
        "El brillo comienza con precisión mucho antes de llegar a la muñeca",
      description:
        "La selección, el corte, la separación y el engaste determinan cómo se mueve la luz.",
      closingText: "La luz crea presencia.",
      closingAccent: "La artesanía le da significado.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Talla brillante",
          description:
            "La talla brillante maximiza el retorno de la luz.",
        },
        {
          title: "Engaste",
          description:
            "El engaste preciso garantiza alineación y seguridad.",
        },
        {
          title: "Proporciones",
          description:
            "La relación entre piedra, caja y esfera define la expresión.",
        },
        {
          title: "Acabado",
          description:
            "El metal pulido y las superficies refinadas crean profundidad y contraste.",
        },
      ],
    },

    cta: {
      title: "El brillo se descubre mejor en movimiento",
      sub:
        "Visite LIDYA y descubra personalmente nuestros relojes con brillantes.",
    },
  },
};

const BRILLIANT_WATCH_IMAGES = [
  "/images/watches/brilliant-category/brilliant-watch1.png",
  "/images/watches/brilliant-category/brilliant-watch2.png",
  "/images/watches/brilliant-category/brilliant-watch3.png",
  "/images/watches/brilliant-category/brilliant-watch4.png",
  "/images/watches/brilliant-category/brilliant-watch5.png",
  "/images/watches/brilliant-category/brilliant-watch6.png",
  "/images/watches/brilliant-category/brilliant-watch7.png",
  "/images/watches/brilliant-category/brilliant-watch8.png",
  "/images/watches/brilliant-category/brilliant-watch9.png",
  "/images/watches/brilliant-category/brilliant-watch10.png",
];

function BrilliantWatchIcon() {
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
        opacity="0.45"
      />

      <circle cx="24" cy="24" r="1.6" fill="currentColor" />

      <path
        d="M24 24V16M24 24l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M35 8l1.2 2.8L39 12l-2.8 1.2L35 16l-1.2-2.8L31 12l2.8-1.2L35 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrilliantWatchesHero({
  copy,
}: {
  copy: BrilliantWatchesCopy["hero"];
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
        bg-[#100A12]
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
          src="/images/watches/brilliant-category/brilliant-watch-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_center]
            md:object-[60%_center]
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
          from-[#100712]/96
          via-[#170D19]/68
          to-[#170D19]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0D0710]/96
          via-[#170D19]/12
          to-[#170D19]/18
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_68%_38%,rgba(220,190,125,0.14)_0%,rgba(220,190,125,0.03)_30%,transparent_58%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[900px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#D8B96B]
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
              <BrilliantWatchIcon />
            </span>

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[950px]
              font-display
              text-[3.15rem]
              leading-[0.94]
              tracking-[-0.04em]
              sm:text-[4rem]
              md:text-[5.35rem]
              lg:text-[6.2rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  !text-[#F9F5EE]
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
                  !text-[#D8B96B]
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
            <p className="max-w-[680px] text-sm leading-7 !text-white/75 md:text-base">
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D8B96B]" />

              <span className="text-[0.54rem] font-semibold uppercase tracking-[0.23em] !text-white/55">
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
              max-w-[1000px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              !text-[#F9F5EE]
              md:text-4xl
              lg:text-5xl
            "
          >
            {copy.statementBefore}{" "}
            <span className="!text-[#D8B96B]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function BrilliantWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    BRILLIANT_WATCHES_COPY[locale] ??
    BRILLIANT_WATCHES_COPY.en;

  const galleryItems = BRILLIANT_WATCH_IMAGES.map(
    (image, index) => ({
      image,

      caption:
        copy.gallery.captions[index] ??
        BRILLIANT_WATCHES_COPY.en.gallery.captions[index] ??
        "",

      alt:
        copy.gallery.alts[index] ??
        BRILLIANT_WATCHES_COPY.en.gallery.alts[index] ??
        "",
    })
  );

  return (
    <>
      <Header />

      <main>
        <BrilliantWatchesHero copy={copy.hero} />

        <CategoryGallery
          icon={<BrilliantWatchIcon />}
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