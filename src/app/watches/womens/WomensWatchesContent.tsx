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

type WomensWatchesCopy = {
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

const WOMENS_WATCHES_COPY: Record<Locale, WomensWatchesCopy> = {
  en: {
    hero: {
      eyebrow: "Women's Watches",
      title: "Timepieces of",
      titleAccent: "elegance and character.",
      description:
        "From refined everyday watches to jewellery-inspired designs, discover women's timepieces selected for proportion, detail, material and the way they come alive on the wrist.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Created to measure time.",
      statementAccent: "Chosen to become part of your story.",
      imageAlt:
        "Luxury women's watches presented in an elegant LIDYA setting",
    },

    gallery: {
      eyebrow: "The Women's Watch Collection",
      title: "Watches selected for",
      titleAccent: "individual elegance.",
      description:
        "Every watch carries its own balance of proportion, material, dial architecture and jewellery detail. Explore timepieces chosen to complement personal style with subtle confidence.",
      itemLabel: "Women's Watches",
      closingText: "Elegance gives time its expression.",
      closingAccent: "Character makes it personal.",
      captions: [
        "Diamond Elegance",
        "Modern Classic",
        "Rose Gold",
        "Refined Minimalism",
        "Jewellery Watch",
        "Timeless Steel",
        "Evening Elegance",
        "Contemporary Design",
        "Signature Detail",
        "LIDYA Selection",
      ],
      alts: [
        "Elegant women's watch with diamond details",
        "Classic women's luxury watch with refined proportions",
        "Women's rose gold watch in an elegant setting",
        "Minimalist women's watch with refined dial",
        "Jewellery-inspired women's luxury watch",
        "Women's steel watch with timeless proportions",
        "Elegant women's evening watch",
        "Contemporary women's watch with refined finishing",
        "Women's watch with distinctive signature details",
        "Luxury women's timepiece selected by LIDYA",
      ],
    },

    craft: {
      eyebrow: "The Art of a Fine Women's Watch",
      title: "A women's watch lives between watchmaking and jewellery",
      description:
        "Proportion, light, material, finishing and the relationship between case and wrist define how a watch feels. The finest pieces combine precision with effortless elegance.",
      closingText: "Precision measures time.",
      closingAccent: "Elegance gives it presence.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Proportion",
          description:
            "Case diameter, thickness, bracelet profile and balance determine how naturally a watch becomes part of the wrist.",
        },
        {
          title: "Materials",
          description:
            "Steel, gold, precious stones, mother-of-pearl and refined finishes create different expressions of light and character.",
        },
        {
          title: "Detail",
          description:
            "Dial architecture, stone setting, polished surfaces and subtle accents transform a timepiece into something deeply personal.",
        },
        {
          title: "Elegance",
          description:
            "The right watch does not compete with personal style. It complements it with confidence, balance and quiet distinction.",
        },
      ],
    },

    cta: {
      title: "The right watch is discovered on the wrist",
      sub:
        "Visit LIDYA and experience our women's watches in person. Explore proportions, materials and details and discover the timepiece that feels naturally yours.",
    },
  },

  de: {
    hero: {
      eyebrow: "Damenuhren",
      title: "Zeitmesser voller",
      titleAccent: "Eleganz und Charakter.",
      description:
        "Von raffinierten Alltagsuhren bis zu schmuckinspirierten Designs — entdecken Sie Damenuhren, ausgewählt nach Proportion, Detail, Material und ihrer Wirkung am Handgelenk.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Geschaffen, um Zeit zu messen.",
      statementAccent: "Ausgewählt, um Teil Ihrer Geschichte zu werden.",
      imageAlt:
        "Luxuriöse Damenuhren in einer eleganten LIDYA Umgebung",
    },

    gallery: {
      eyebrow: "Die Damenuhrenkollektion",
      title: "Uhren ausgewählt für",
      titleAccent: "individuelle Eleganz.",
      description:
        "Jede Uhr besitzt ihre eigene Balance aus Proportionen, Materialien, Zifferblattarchitektur und Schmuckdetails.",
      itemLabel: "Damenuhren",
      closingText: "Eleganz gibt der Zeit Ausdruck.",
      closingAccent: "Charakter macht sie persönlich.",
      captions: [
        "Diamant-Eleganz",
        "Moderner Klassiker",
        "Roségold",
        "Raffinierter Minimalismus",
        "Schmuckuhr",
        "Zeitloser Stahl",
        "Abendliche Eleganz",
        "Modernes Design",
        "Signature-Detail",
        "LIDYA Auswahl",
      ],
      alts: [
        "Elegante Damenuhr mit Diamantdetails",
        "Klassische Luxus-Damenuhr",
        "Roségoldene Damenuhr",
        "Minimalistische Damenuhr",
        "Schmuckinspirierte Damenuhr",
        "Zeitlose Damenuhr aus Stahl",
        "Elegante Damenuhr für den Abend",
        "Moderne Damenuhr",
        "Damenuhr mit charakteristischen Details",
        "Luxuriöse Damenuhr von LIDYA",
      ],
    },

    craft: {
      eyebrow: "Die Kunst einer feinen Damenuhr",
      title: "Eine Damenuhr bewegt sich zwischen Uhrmacherkunst und Schmuck",
      description:
        "Proportion, Licht, Material, Verarbeitung und das Zusammenspiel von Gehäuse und Handgelenk bestimmen den Charakter einer Uhr.",
      closingText: "Präzision misst die Zeit.",
      closingAccent: "Eleganz verleiht ihr Präsenz.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Proportion",
          description:
            "Gehäusedurchmesser, Höhe, Armbandprofil und Balance bestimmen, wie natürlich sich eine Uhr am Handgelenk anfühlt.",
        },
        {
          title: "Materialien",
          description:
            "Stahl, Gold, Edelsteine, Perlmutt und raffinierte Oberflächen schaffen unterschiedliche Ausdrucksformen.",
        },
        {
          title: "Details",
          description:
            "Zifferblattarchitektur, Steinbesatz und feine Akzente verwandeln einen Zeitmesser in etwas Persönliches.",
        },
        {
          title: "Eleganz",
          description:
            "Die richtige Uhr konkurriert nicht mit dem persönlichen Stil, sondern ergänzt ihn mit Balance und Selbstverständlichkeit.",
        },
      ],
    },

    cta: {
      title: "Die richtige Uhr entdeckt man am Handgelenk",
      sub:
        "Besuchen Sie LIDYA und erleben Sie unsere Damenuhren persönlich. Entdecken Sie Proportionen, Materialien und Details, die wirklich zu Ihnen passen.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Kadın Saatleri",
      title: "Zarafet ve",
      titleAccent: "karakter taşıyan saatler.",
      description:
        "Rafine günlük modellerden mücevher ilhamlı tasarımlara kadar, oranları, detayları, malzemeleri ve bilekteki duruşuyla seçilen kadın saatlerini keşfedin.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Zamanı ölçmek için yaratıldı.",
      statementAccent: "Hikâyenizin bir parçası olmak için seçildi.",
      imageAlt:
        "Elegant LIDYA ortamında sunulan lüks kadın saatleri",
    },

    gallery: {
      eyebrow: "Kadın Saat Koleksiyonu",
      title: "Bireysel zarafet için",
      titleAccent: "seçilmiş saatler.",
      description:
        "Her saat oran, malzeme, kadran mimarisi ve mücevher detayları arasında kendine özgü bir denge taşır.",
      itemLabel: "Kadın Saatleri",
      closingText: "Zarafet zamana ifade verir.",
      closingAccent: "Karakter onu kişisel kılar.",
      captions: [
        "Pırlanta Zarafeti",
        "Modern Klasik",
        "Rose Gold",
        "Rafine Minimalizm",
        "Mücevher Saat",
        "Zamansız Çelik",
        "Gece Zarafeti",
        "Çağdaş Tasarım",
        "İmza Detayı",
        "LIDYA Seçimi",
      ],
      alts: [
        "Pırlanta detaylı zarif kadın saati",
        "Klasik oranlara sahip lüks kadın saati",
        "Rose gold kadın saati",
        "Minimalist kadın saati",
        "Mücevher ilhamlı kadın saati",
        "Zamansız çelik kadın saati",
        "Zarif gece kadın saati",
        "Çağdaş kadın saati",
        "Özel detaylı kadın saati",
        "LIDYA tarafından seçilmiş kadın saati",
      ],
    },

    craft: {
      eyebrow: "İyi Bir Kadın Saatinin Sanatı",
      title: "Bir kadın saati saat ustalığı ile mücevher arasında yaşar",
      description:
        "Oran, ışık, malzeme, yüzey işçiliği ve kasanın bilekle ilişkisi saatin gerçek karakterini belirler.",
      closingText: "Hassasiyet zamanı ölçer.",
      closingAccent: "Zarafet ona duruş verir.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Oran",
          description:
            "Kasa çapı, kalınlık ve bilezik dengesi saatin bilekte ne kadar doğal durduğunu belirler.",
        },
        {
          title: "Malzemeler",
          description:
            "Çelik, altın, değerli taşlar, sedef ve rafine yüzeyler farklı ışık ve karakter ifadeleri yaratır.",
        },
        {
          title: "Detay",
          description:
            "Kadran yapısı, taş yerleştirme ve ince detaylar saati kişisel bir parçaya dönüştürür.",
        },
        {
          title: "Zarafet",
          description:
            "Doğru saat kişisel stille yarışmaz, onu doğal bir denge ve özgüvenle tamamlar.",
        },
      ],
    },

    cta: {
      title: "Doğru saat bilekte keşfedilir",
      sub:
        "LIDYA'yı ziyaret edin, kadın saatlerimizi yakından deneyimleyin ve size ait hissettiren modeli keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Dámske hodinky",
      title: "Hodinky plné",
      titleAccent: "elegancie a charakteru.",
      description:
        "Od jemných každodenných hodiniek až po modely inšpirované šperkom — objavte dámske hodinky vybrané podľa proporcií, detailov, materiálu a toho, ako pôsobia na zápästí.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Vytvorené na meranie času.",
      statementAccent: "Vybrané, aby sa stali súčasťou vášho príbehu.",
      imageAlt:
        "Luxusné dámske hodinky prezentované v elegantnom prostredí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcia dámskych hodiniek",
      title: "Hodinky vybrané pre",
      titleAccent: "osobitú eleganciu.",
      description:
        "Každé hodinky majú vlastnú rovnováhu proporcií, materiálov, architektúry ciferníka a šperkárskych detailov. Objavte modely, ktoré prirodzene dopĺňajú osobný štýl.",
      itemLabel: "Dámske hodinky",
      closingText: "Elegancia dáva času výraz.",
      closingAccent: "Charakter ho robí osobným.",
      captions: [
        "Diamantová elegancia",
        "Moderná klasika",
        "Ružové zlato",
        "Rafinovaný minimalizmus",
        "Šperkárske hodinky",
        "Nadčasová oceľ",
        "Večerná elegancia",
        "Súčasný dizajn",
        "Signature detail",
        "Výber LIDYA",
      ],
      alts: [
        "Elegantné dámske hodinky s diamantovými detailmi",
        "Luxusné dámske hodinky s klasickými proporciami",
        "Dámske hodinky z ružového zlata",
        "Minimalistické dámske hodinky",
        "Dámske hodinky inšpirované šperkom",
        "Nadčasové oceľové dámske hodinky",
        "Elegantné dámske hodinky na večer",
        "Moderné dámske hodinky s precíznym spracovaním",
        "Dámske hodinky s charakteristickým detailom",
        "Luxusné dámske hodinky vybrané LIDYA",
      ],
    },

    craft: {
      eyebrow: "Umenie výnimočných dámskych hodiniek",
      title: "Dámske hodinky sa pohybujú medzi hodinárstvom a šperkárstvom",
      description:
        "Proporcie, svetlo, materiál, spracovanie a vzťah medzi puzdrom a zápästím určujú, ako hodinky pôsobia. Tie najlepšie spájajú presnosť s prirodzenou eleganciou.",
      closingText: "Presnosť meria čas.",
      closingAccent: "Elegancia mu dáva prítomnosť.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Proporcie",
          description:
            "Priemer puzdra, hrúbka, profil náramku a celková rovnováha určujú, ako prirodzene hodinky sedia na zápästí.",
        },
        {
          title: "Materiály",
          description:
            "Oceľ, zlato, drahé kamene, perleť a jemne spracované povrchy vytvárajú rozdielne hry svetla a charakteru.",
        },
        {
          title: "Detail",
          description:
            "Architektúra ciferníka, osadenie kameňov a jemné akcenty premieňajú hodinky na niečo osobné.",
        },
        {
          title: "Elegancia",
          description:
            "Tie správne hodinky nesúťažia s osobným štýlom. Dopĺňajú ho rovnováhou, istotou a nenápadnou výnimočnosťou.",
        },
      ],
    },

    cta: {
      title: "Tie správne hodinky treba cítiť na zápästí",
      sub:
        "Navštívte LIDYA a spoznajte naše dámske hodinky osobne. Porovnajte proporcie, materiály a detaily a objavte model, ktorý bude pôsobiť prirodzene ako váš.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Dámské hodinky",
      title: "Hodinky plné",
      titleAccent: "elegance a charakteru.",
      description:
        "Od jemných každodenních hodinek až po modely inspirované šperkem — objevte dámské hodinky vybrané podle proporcí, detailů, materiálu a pocitu na zápěstí.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Vytvořené k měření času.",
      statementAccent: "Vybrané, aby se staly součástí vašeho příběhu.",
      imageAlt:
        "Luxusní dámské hodinky prezentované v elegantním prostředí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekce dámských hodinek",
      title: "Hodinky vybrané pro",
      titleAccent: "osobitou eleganci.",
      description:
        "Každé hodinky mají vlastní rovnováhu proporcí, materiálů, architektury ciferníku a šperkařských detailů.",
      itemLabel: "Dámské hodinky",
      closingText: "Elegance dává času výraz.",
      closingAccent: "Charakter ho činí osobním.",
      captions: [
        "Diamantová elegance",
        "Moderní klasika",
        "Růžové zlato",
        "Rafinovaný minimalismus",
        "Šperkové hodinky",
        "Nadčasová ocel",
        "Večerní elegance",
        "Současný design",
        "Signature detail",
        "Výběr LIDYA",
      ],
      alts: [
        "Elegantní dámské hodinky s diamanty",
        "Luxusní dámské hodinky s klasickými proporcemi",
        "Dámské hodinky z růžového zlata",
        "Minimalistické dámské hodinky",
        "Dámské hodinky inspirované šperkem",
        "Nadčasové ocelové dámské hodinky",
        "Elegantní večerní dámské hodinky",
        "Moderní dámské hodinky",
        "Dámské hodinky se signature detailem",
        "Luxusní dámské hodinky LIDYA",
      ],
    },

    craft: {
      eyebrow: "Umění výjimečných dámských hodinek",
      title: "Dámské hodinky se pohybují mezi hodinářstvím a šperkařstvím",
      description:
        "Proporce, světlo, materiál, zpracování a vztah mezi pouzdrem a zápěstím určují skutečný charakter hodinek.",
      closingText: "Přesnost měří čas.",
      closingAccent: "Elegance mu dává přítomnost.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Proporce",
          description:
            "Průměr pouzdra, tloušťka a rovnováha náramku určují, jak přirozeně hodinky sedí na zápěstí.",
        },
        {
          title: "Materiály",
          description:
            "Ocel, zlato, drahé kameny a perleť vytvářejí různé hry světla a charakteru.",
        },
        {
          title: "Detail",
          description:
            "Architektura ciferníku, osazení kamenů a jemné akcenty proměňují hodinky v osobní šperk.",
        },
        {
          title: "Elegance",
          description:
            "Správné hodinky osobní styl nepřekrývají, ale přirozeně ho doplňují.",
        },
      ],
    },

    cta: {
      title: "Ty správné hodinky je třeba cítit na zápěstí",
      sub:
        "Navštivte LIDYA a poznejte naše dámské hodinky osobně. Objevte proporce, materiály a detaily, které vám budou přirozeně patřit.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Női órák",
      title: "Időmérők",
      titleAccent: "eleganciával és karakterrel.",
      description:
        "A finom hétköznapi modellektől az ékszerek ihlette órákig fedezze fel a női órákat, amelyeket arányuk, részleteik és anyagaik alapján választunk.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "Az idő mérésére alkotva.",
      statementAccent: "Azért választva, hogy története részévé váljon.",
      imageAlt:
        "Luxus női órák elegáns LIDYA környezetben",
    },

    gallery: {
      eyebrow: "Női órakollekció",
      title: "Órák",
      titleAccent: "egyéni eleganciához.",
      description:
        "Minden óra saját egyensúlyt teremt az arányok, anyagok, számlap és ékszer részletek között.",
      itemLabel: "Női órák",
      closingText: "Az elegancia kifejezést ad az időnek.",
      closingAccent: "A karakter személyessé teszi.",
      captions: [
        "Gyémánt elegancia",
        "Modern klasszikus",
        "Rozéarany",
        "Finom minimalizmus",
        "Ékszeróra",
        "Időtlen acél",
        "Esti elegancia",
        "Kortárs design",
        "Signature részlet",
        "LIDYA válogatás",
      ],
      alts: [
        "Elegáns női óra gyémánt részletekkel",
        "Klasszikus luxus női óra",
        "Rozéarany női óra",
        "Minimalista női óra",
        "Ékszer ihlette női óra",
        "Időtlen acél női óra",
        "Elegáns esti női óra",
        "Kortárs női óra",
        "Signature részletekkel készült női óra",
        "LIDYA által válogatott női óra",
      ],
    },

    craft: {
      eyebrow: "Egy finom női óra művészete",
      title: "A női óra az órakészítés és az ékszer között él",
      description:
        "Az arányok, a fény, az anyagok és a csuklóval kialakított kapcsolat formálja az óra karakterét.",
      closingText: "A pontosság méri az időt.",
      closingAccent: "Az elegancia jelenlétet ad neki.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Arányok",
          description:
            "A tok átmérője, vastagsága és a szíj egyensúlya határozza meg a természetes illeszkedést.",
        },
        {
          title: "Anyagok",
          description:
            "Az acél, arany, drágakövek és gyöngyház különböző karaktert és fényhatást adnak.",
        },
        {
          title: "Részletek",
          description:
            "A számlap, a kőfoglalás és a finom részletek személyes ékszerré alakítják az órát.",
        },
        {
          title: "Elegancia",
          description:
            "A megfelelő óra természetesen egészíti ki a személyes stílust.",
        },
      ],
    },

    cta: {
      title: "A megfelelő órát a csuklón lehet igazán felfedezni",
      sub:
        "Látogasson el a LIDYA-hoz, és próbálja fel női óráinkat személyesen.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki damskie",
      title: "Czasomierze pełne",
      titleAccent: "elegancji i charakteru.",
      description:
        "Od subtelnych modeli codziennych po projekty inspirowane biżuterią — odkryj zegarki damskie wybierane pod względem proporcji, detali i materiałów.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Stworzone do mierzenia czasu.",
      statementAccent: "Wybrane, by stać się częścią Twojej historii.",
      imageAlt:
        "Luksusowe zegarki damskie w eleganckim otoczeniu LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcja zegarków damskich",
      title: "Zegarki wybrane dla",
      titleAccent: "indywidualnej elegancji.",
      description:
        "Każdy zegarek tworzy własną równowagę proporcji, materiałów, tarczy i jubilerskich detali.",
      itemLabel: "Zegarki damskie",
      closingText: "Elegancja nadaje czasowi wyraz.",
      closingAccent: "Charakter czyni go osobistym.",
      captions: [
        "Diamentowa elegancja",
        "Nowoczesna klasyka",
        "Różowe złoto",
        "Wyrafinowany minimalizm",
        "Zegarek jubilerski",
        "Ponadczasowa stal",
        "Wieczorowa elegancja",
        "Współczesny design",
        "Detal signature",
        "Wybór LIDYA",
      ],
      alts: [
        "Elegancki damski zegarek z diamentami",
        "Klasyczny luksusowy zegarek damski",
        "Damski zegarek z różowego złota",
        "Minimalistyczny zegarek damski",
        "Jubilerski zegarek damski",
        "Ponadczasowy stalowy zegarek damski",
        "Elegancki zegarek wieczorowy",
        "Współczesny zegarek damski",
        "Zegarek damski z detalem signature",
        "Luksusowy zegarek damski LIDYA",
      ],
    },

    craft: {
      eyebrow: "Sztuka wyjątkowego zegarka damskiego",
      title: "Zegarek damski znajduje się pomiędzy zegarmistrzostwem a biżuterią",
      description:
        "Proporcje, światło, materiał, wykończenie i relacja z nadgarstkiem definiują jego prawdziwy charakter.",
      closingText: "Precyzja mierzy czas.",
      closingAccent: "Elegancja nadaje mu obecność.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Proporcje",
          description:
            "Średnica koperty, grubość i balans bransolety decydują o naturalnym ułożeniu zegarka.",
        },
        {
          title: "Materiały",
          description:
            "Stal, złoto, kamienie szlachetne i masa perłowa tworzą różne efekty światła.",
        },
        {
          title: "Detal",
          description:
            "Architektura tarczy, oprawa kamieni i subtelne akcenty nadają zegarkowi osobisty charakter.",
        },
        {
          title: "Elegancja",
          description:
            "Właściwy zegarek naturalnie dopełnia indywidualny styl.",
        },
      ],
    },

    cta: {
      title: "Właściwy zegarek odkrywa się na nadgarstku",
      sub:
        "Odwiedź LIDYA i poznaj nasze zegarki damskie osobiście.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Женские часы",
      title: "Часы с",
      titleAccent: "элегантностью и характером.",
      description:
        "От утончённых повседневных моделей до часов, вдохновлённых ювелирным искусством — откройте женские часы, выбранные за пропорции, материалы и детали.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Созданы измерять время.",
      statementAccent: "Выбраны, чтобы стать частью вашей истории.",
      imageAlt:
        "Роскошные женские часы в элегантной обстановке LIDYA",
    },

    gallery: {
      eyebrow: "Коллекция женских часов",
      title: "Часы, выбранные для",
      titleAccent: "индивидуальной элегантности.",
      description:
        "Каждая модель сочетает собственный баланс пропорций, материалов, архитектуры циферблата и ювелирных деталей.",
      itemLabel: "Женские часы",
      closingText: "Элегантность придаёт времени выражение.",
      closingAccent: "Характер делает его личным.",
      captions: [
        "Бриллиантовая элегантность",
        "Современная классика",
        "Розовое золото",
        "Утончённый минимализм",
        "Ювелирные часы",
        "Вневременная сталь",
        "Вечерняя элегантность",
        "Современный дизайн",
        "Фирменная деталь",
        "Выбор LIDYA",
      ],
      alts: [
        "Элегантные женские часы с бриллиантами",
        "Классические роскошные женские часы",
        "Женские часы из розового золота",
        "Минималистичные женские часы",
        "Женские часы в ювелирном стиле",
        "Стальные женские часы",
        "Элегантные вечерние женские часы",
        "Современные женские часы",
        "Женские часы с фирменными деталями",
        "Женские часы LIDYA",
      ],
    },

    craft: {
      eyebrow: "Искусство прекрасных женских часов",
      title: "Женские часы находятся на пересечении часового и ювелирного искусства",
      description:
        "Пропорции, свет, материалы, отделка и ощущение на запястье определяют настоящий характер часов.",
      closingText: "Точность измеряет время.",
      closingAccent: "Элегантность придаёт ему присутствие.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Пропорции",
          description:
            "Размер корпуса и баланс браслета определяют естественность посадки.",
        },
        {
          title: "Материалы",
          description:
            "Сталь, золото, драгоценные камни и перламутр создают различные эффекты света.",
        },
        {
          title: "Детали",
          description:
            "Циферблат, закрепка камней и тонкие акценты делают часы личными.",
        },
        {
          title: "Элегантность",
          description:
            "Правильные часы естественно дополняют индивидуальный стиль.",
        },
      ],
    },

    cta: {
      title: "Правильные часы раскрываются на запястье",
      sub:
        "Посетите LIDYA и познакомьтесь с нашей коллекцией женских часов лично.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Dameshorloges",
      title: "Horloges met",
      titleAccent: "elegantie en karakter.",
      description:
        "Van verfijnde dagelijkse modellen tot ontwerpen geïnspireerd door juwelen — ontdek dameshorloges geselecteerd op proportie, detail en materiaal.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Gemaakt om tijd te meten.",
      statementAccent: "Gekozen om deel van uw verhaal te worden.",
      imageAlt:
        "Luxueuze dameshorloges in een elegante LIDYA omgeving",
    },

    gallery: {
      eyebrow: "De dameshorlogecollectie",
      title: "Horloges geselecteerd voor",
      titleAccent: "individuele elegantie.",
      description:
        "Elk horloge heeft een eigen balans van proporties, materialen, wijzerplaat en juwelendetails.",
      itemLabel: "Dameshorloges",
      closingText: "Elegantie geeft tijd expressie.",
      closingAccent: "Karakter maakt het persoonlijk.",
      captions: [
        "Diamant Elegantie",
        "Moderne Klassieker",
        "Roségoud",
        "Verfijnd Minimalisme",
        "Juweelhorloge",
        "Tijdloos Staal",
        "Avond Elegantie",
        "Modern Design",
        "Signature Detail",
        "LIDYA Selectie",
      ],
      alts: [
        "Elegant dameshorloge met diamanten",
        "Klassiek luxueus dameshorloge",
        "Dameshorloge in roségoud",
        "Minimalistisch dameshorloge",
        "Juweelachtig dameshorloge",
        "Tijdloos stalen dameshorloge",
        "Elegant avondhorloge",
        "Modern dameshorloge",
        "Dameshorloge met signature details",
        "LIDYA dameshorloge",
      ],
    },

    craft: {
      eyebrow: "De kunst van een fijn dameshorloge",
      title: "Een dameshorloge beweegt tussen horlogerie en juwelierskunst",
      description:
        "Proportie, licht, materiaal, afwerking en het gevoel om de pols bepalen het karakter.",
      closingText: "Precisie meet tijd.",
      closingAccent: "Elegantie geeft het aanwezigheid.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Proportie",
          description:
            "Diameter, dikte en balans bepalen hoe natuurlijk een horloge om de pols zit.",
        },
        {
          title: "Materialen",
          description:
            "Staal, goud, edelstenen en parelmoer creëren elk een eigen uitstraling.",
        },
        {
          title: "Detail",
          description:
            "Wijzerplaat, steenzetting en subtiele accenten maken het horloge persoonlijk.",
        },
        {
          title: "Elegantie",
          description:
            "Het juiste horloge vult persoonlijke stijl natuurlijk aan.",
        },
      ],
    },

    cta: {
      title: "Het juiste horloge ontdekt u om de pols",
      sub:
        "Bezoek LIDYA en ervaar onze dameshorloges persoonlijk.",
    },
  },

  da: {
    hero: {
      eyebrow: "Dameure",
      title: "Ure med",
      titleAccent: "elegance og karakter.",
      description:
        "Fra raffinerede hverdagsure til smykke-inspirerede designs — oplev dameure udvalgt efter proportioner, detaljer og materialer.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Skabt til at måle tiden.",
      statementAccent: "Udvalgt til at blive en del af din historie.",
      imageAlt:
        "Luksuriøse dameure i elegante LIDYA omgivelser",
    },

    gallery: {
      eyebrow: "Kollektionen af dameure",
      title: "Ure udvalgt for",
      titleAccent: "individuel elegance.",
      description:
        "Hvert ur har sin egen balance mellem proportioner, materialer, urskive og smykkedetaljer.",
      itemLabel: "Dameure",
      closingText: "Elegance giver tiden udtryk.",
      closingAccent: "Karakter gør den personlig.",
      captions: [
        "Diamant Elegance",
        "Moderne Klassiker",
        "Rosaguld",
        "Raffineret Minimalisme",
        "Smykkeur",
        "Tidløst Stål",
        "Aftenelegance",
        "Moderne Design",
        "Signature Detail",
        "LIDYA Udvalg",
      ],
      alts: [
        "Elegant dameur med diamanter",
        "Klassisk luksuriøst dameur",
        "Dameur i rosaguld",
        "Minimalistisk dameur",
        "Smykkeinspireret dameur",
        "Tidløst dameur i stål",
        "Elegant dameur til aftenen",
        "Moderne dameur",
        "Dameur med signature detaljer",
        "LIDYA dameur",
      ],
    },

    craft: {
      eyebrow: "Kunsten i et fint dameur",
      title: "Et dameur lever mellem urmageri og smykkekunst",
      description:
        "Proportioner, lys, materialer, finish og følelsen på håndleddet skaber urets karakter.",
      closingText: "Præcision måler tiden.",
      closingAccent: "Elegance giver den tilstedeværelse.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Proportioner",
          description:
            "Diameter, tykkelse og balance afgør, hvordan uret naturligt sidder på håndleddet.",
        },
        {
          title: "Materialer",
          description:
            "Stål, guld, ædelsten og perlemor skaber forskellige udtryk.",
        },
        {
          title: "Detaljer",
          description:
            "Urskive, stenfatning og fine detaljer gør uret personligt.",
        },
        {
          title: "Elegance",
          description:
            "Det rigtige ur supplerer personlig stil med naturlig balance.",
        },
      ],
    },

    cta: {
      title: "Det rigtige ur opdages på håndleddet",
      sub:
        "Besøg LIDYA og oplev vores dameure personligt.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Naisten kellot",
      title: "Kelloja, joissa on",
      titleAccent: "eleganssia ja luonnetta.",
      description:
        "Hienostuneista arkikelloista korujen inspiroimiin malleihin — tutustu naisten kelloihin, jotka on valittu mittasuhteiden, materiaalien ja yksityiskohtien perusteella.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Luotu mittaamaan aikaa.",
      statementAccent: "Valittu osaksi sinun tarinaasi.",
      imageAlt:
        "Ylellisiä naisten kelloja elegantissa LIDYA ympäristössä",
    },

    gallery: {
      eyebrow: "Naisten kellomallisto",
      title: "Kelloja valittu",
      titleAccent: "yksilölliseen eleganssiin.",
      description:
        "Jokaisessa kellossa on oma tasapainonsa mittasuhteiden, materiaalien, kellotaulun ja korumaisten yksityiskohtien välillä.",
      itemLabel: "Naisten kellot",
      closingText: "Eleganssi antaa ajalle ilmeen.",
      closingAccent: "Luonne tekee siitä henkilökohtaisen.",
      captions: [
        "Timanttieleganssi",
        "Moderni klassikko",
        "Ruusukulta",
        "Hienostunut minimalismi",
        "Korukello",
        "Ajaton teräs",
        "Iltaeleganssi",
        "Moderni design",
        "Signature-yksityiskohta",
        "LIDYA-valinta",
      ],
      alts: [
        "Elegantti naisten kello timanteilla",
        "Klassinen ylellinen naisten kello",
        "Naisten ruusukultainen kello",
        "Minimalistinen naisten kello",
        "Korujen inspiroima naisten kello",
        "Ajaton teräksinen naisten kello",
        "Elegantti iltakello",
        "Moderni naisten kello",
        "Naisten kello signature-yksityiskohdilla",
        "LIDYA naisten kello",
      ],
    },

    craft: {
      eyebrow: "Hienon naisten kellon taide",
      title: "Naisten kello elää kellotaidon ja korutaiteen välissä",
      description:
        "Mittasuhteet, valo, materiaalit, viimeistely ja tunne ranteessa luovat kellon luonteen.",
      closingText: "Tarkkuus mittaa aikaa.",
      closingAccent: "Eleganssi antaa sille läsnäolon.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Mittasuhteet",
          description:
            "Koko, paksuus ja tasapaino määrittävät luonnollisen istuvuuden.",
        },
        {
          title: "Materiaalit",
          description:
            "Teräs, kulta, jalokivet ja helmiäinen luovat erilaisia ilmeitä.",
        },
        {
          title: "Yksityiskohdat",
          description:
            "Kellotaulu, kivien istutus ja hienot yksityiskohdat tekevät kellosta henkilökohtaisen.",
        },
        {
          title: "Eleganssi",
          description:
            "Oikea kello täydentää henkilökohtaista tyyliä luonnollisesti.",
        },
      ],
    },

    cta: {
      title: "Oikea kello löytyy ranteesta",
      sub:
        "Tutustu LIDYA:n naisten kelloihin henkilökohtaisesti.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Damklockor",
      title: "Klockor med",
      titleAccent: "elegans och karaktär.",
      description:
        "Från raffinerade vardagsklockor till smyckesinspirerade modeller — upptäck damklockor valda efter proportioner, material och detaljer.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Skapade för att mäta tid.",
      statementAccent: "Valda för att bli en del av din berättelse.",
      imageAlt:
        "Lyxiga damklockor presenterade i elegant LIDYA miljö",
    },

    gallery: {
      eyebrow: "Kollektionen av damklockor",
      title: "Klockor valda för",
      titleAccent: "individuell elegans.",
      description:
        "Varje klocka har sin egen balans mellan proportioner, material, urtavla och smyckesdetaljer.",
      itemLabel: "Damklockor",
      closingText: "Elegans ger tiden uttryck.",
      closingAccent: "Karaktär gör den personlig.",
      captions: [
        "Diamantelegans",
        "Modern klassiker",
        "Roséguld",
        "Raffinerad minimalism",
        "Smyckesklocka",
        "Tidlöst stål",
        "Kvällselegans",
        "Modern design",
        "Signature-detalj",
        "LIDYA Selection",
      ],
      alts: [
        "Elegant damklocka med diamanter",
        "Klassisk lyxig damklocka",
        "Damklocka i roséguld",
        "Minimalistisk damklocka",
        "Smyckesinspirerad damklocka",
        "Tidlös damklocka i stål",
        "Elegant kvällsklocka",
        "Modern damklocka",
        "Damklocka med signature-detaljer",
        "LIDYA damklocka",
      ],
    },

    craft: {
      eyebrow: "Konsten i en fin damklocka",
      title: "En damklocka lever mellan urmakeri och smyckeskonst",
      description:
        "Proportioner, ljus, material, finish och känslan på handleden formar klockans identitet.",
      closingText: "Precision mäter tiden.",
      closingAccent: "Elegans ger den närvaro.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Proportioner",
          description:
            "Diameter, tjocklek och balans avgör hur naturligt klockan sitter.",
        },
        {
          title: "Material",
          description:
            "Stål, guld, ädelstenar och pärlemor skapar olika uttryck.",
        },
        {
          title: "Detaljer",
          description:
            "Urtavla, steninfattning och subtila detaljer gör klockan personlig.",
        },
        {
          title: "Elegans",
          description:
            "Den rätta klockan kompletterar personlig stil med naturlig balans.",
        },
      ],
    },

    cta: {
      title: "Den rätta klockan upptäcks på handleden",
      sub:
        "Besök LIDYA och upplev våra damklockor personligen.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres femme",
      title: "Des garde-temps avec",
      titleAccent: "élégance et caractère.",
      description:
        "Des montres raffinées du quotidien aux créations inspirées de la joaillerie — découvrez des montres femme sélectionnées pour leurs proportions, leurs matériaux et leurs détails.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "Créées pour mesurer le temps.",
      statementAccent: "Choisies pour devenir une part de votre histoire.",
      imageAlt:
        "Montres femme de luxe présentées dans un élégant univers LIDYA",
    },

    gallery: {
      eyebrow: "La collection de montres femme",
      title: "Des montres choisies pour",
      titleAccent: "une élégance personnelle.",
      description:
        "Chaque montre possède son propre équilibre entre proportions, matériaux, cadran et détails joailliers.",
      itemLabel: "Montres femme",
      closingText: "L'élégance donne son expression au temps.",
      closingAccent: "Le caractère le rend personnel.",
      captions: [
        "Élégance diamant",
        "Classique moderne",
        "Or rose",
        "Minimalisme raffiné",
        "Montre joaillière",
        "Acier intemporel",
        "Élégance du soir",
        "Design contemporain",
        "Détail signature",
        "Sélection LIDYA",
      ],
      alts: [
        "Montre femme élégante avec diamants",
        "Montre femme classique de luxe",
        "Montre femme en or rose",
        "Montre femme minimaliste",
        "Montre femme inspirée de la joaillerie",
        "Montre femme intemporelle en acier",
        "Montre femme élégante du soir",
        "Montre femme contemporaine",
        "Montre femme avec détails signature",
        "Montre femme LIDYA",
      ],
    },

    craft: {
      eyebrow: "L'art d'une belle montre femme",
      title: "Une montre femme se situe entre horlogerie et joaillerie",
      description:
        "Les proportions, la lumière, les matériaux, les finitions et la sensation au poignet façonnent son identité.",
      closingText: "La précision mesure le temps.",
      closingAccent: "L'élégance lui donne une présence.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Proportions",
          description:
            "Diamètre, épaisseur et équilibre déterminent la manière dont la montre repose naturellement au poignet.",
        },
        {
          title: "Matériaux",
          description:
            "Acier, or, pierres précieuses et nacre créent des expressions différentes.",
        },
        {
          title: "Détail",
          description:
            "Cadran, sertissage et accents subtils rendent chaque montre personnelle.",
        },
        {
          title: "Élégance",
          description:
            "La bonne montre complète naturellement le style personnel.",
        },
      ],
    },

    cta: {
      title: "La bonne montre se découvre au poignet",
      sub:
        "Découvrez nos montres femme chez LIDYA et trouvez celle qui vous correspond.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi da donna",
      title: "Segnatempo con",
      titleAccent: "eleganza e carattere.",
      description:
        "Dagli orologi raffinati per ogni giorno ai modelli ispirati alla gioielleria — scoprite orologi da donna selezionati per proporzioni, materiali e dettagli.",
      since: "LIDYA · DAL 1989",
      statementBefore: "Creati per misurare il tempo.",
      statementAccent: "Scelti per diventare parte della vostra storia.",
      imageAlt:
        "Orologi da donna di lusso presentati in un elegante ambiente LIDYA",
    },

    gallery: {
      eyebrow: "La collezione di orologi da donna",
      title: "Orologi scelti per",
      titleAccent: "un'eleganza personale.",
      description:
        "Ogni orologio possiede un equilibrio unico tra proporzioni, materiali, quadrante e dettagli di gioielleria.",
      itemLabel: "Orologi da donna",
      closingText: "L'eleganza dà espressione al tempo.",
      closingAccent: "Il carattere lo rende personale.",
      captions: [
        "Eleganza Diamante",
        "Classico Moderno",
        "Oro Rosa",
        "Minimalismo Raffinato",
        "Orologio Gioiello",
        "Acciaio Senza Tempo",
        "Eleganza da Sera",
        "Design Contemporaneo",
        "Dettaglio Signature",
        "Selezione LIDYA",
      ],
      alts: [
        "Elegante orologio da donna con diamanti",
        "Orologio da donna classico di lusso",
        "Orologio da donna in oro rosa",
        "Orologio da donna minimalista",
        "Orologio da donna ispirato alla gioielleria",
        "Orologio da donna in acciaio",
        "Elegante orologio da sera",
        "Orologio da donna contemporaneo",
        "Orologio da donna con dettagli signature",
        "Orologio da donna LIDYA",
      ],
    },

    craft: {
      eyebrow: "L'arte di un raffinato orologio da donna",
      title: "Un orologio da donna vive tra orologeria e gioielleria",
      description:
        "Proporzioni, luce, materiali, finiture e sensazione al polso determinano il vero carattere dell'orologio.",
      closingText: "La precisione misura il tempo.",
      closingAccent: "L'eleganza gli dà presenza.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Proporzioni",
          description:
            "Diametro, spessore e bilanciamento determinano come l'orologio si posa naturalmente sul polso.",
        },
        {
          title: "Materiali",
          description:
            "Acciaio, oro, pietre preziose e madreperla creano espressioni differenti.",
        },
        {
          title: "Dettaglio",
          description:
            "Quadrante, incastonatura e accenti raffinati rendono l'orologio personale.",
        },
        {
          title: "Eleganza",
          description:
            "L'orologio giusto completa naturalmente lo stile personale.",
        },
      ],
    },

    cta: {
      title: "L'orologio giusto si scopre al polso",
      sub:
        "Scoprite personalmente gli orologi da donna LIDYA.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes para mujer",
      title: "Relojes con",
      titleAccent: "elegancia y carácter.",
      description:
        "Desde relojes refinados para el día a día hasta diseños inspirados en la joyería — descubra relojes para mujer seleccionados por sus proporciones, materiales y detalles.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "Creados para medir el tiempo.",
      statementAccent: "Elegidos para formar parte de su historia.",
      imageAlt:
        "Relojes de lujo para mujer presentados en un elegante entorno LIDYA",
    },

    gallery: {
      eyebrow: "La colección de relojes para mujer",
      title: "Relojes seleccionados para",
      titleAccent: "una elegancia personal.",
      description:
        "Cada reloj tiene su propio equilibrio entre proporciones, materiales, esfera y detalles de joyería.",
      itemLabel: "Relojes para mujer",
      closingText: "La elegancia da expresión al tiempo.",
      closingAccent: "El carácter lo hace personal.",
      captions: [
        "Elegancia Diamante",
        "Clásico Moderno",
        "Oro Rosa",
        "Minimalismo Refinado",
        "Reloj Joya",
        "Acero Atemporal",
        "Elegancia de Noche",
        "Diseño Contemporáneo",
        "Detalle Signature",
        "Selección LIDYA",
      ],
      alts: [
        "Elegante reloj para mujer con diamantes",
        "Reloj clásico de lujo para mujer",
        "Reloj para mujer de oro rosa",
        "Reloj minimalista para mujer",
        "Reloj para mujer inspirado en la joyería",
        "Reloj de acero para mujer",
        "Elegante reloj de noche para mujer",
        "Reloj contemporáneo para mujer",
        "Reloj para mujer con detalles signature",
        "Reloj para mujer LIDYA",
      ],
    },

    craft: {
      eyebrow: "El arte de un gran reloj para mujer",
      title: "Un reloj para mujer vive entre la relojería y la joyería",
      description:
        "Las proporciones, la luz, los materiales, los acabados y la sensación en la muñeca definen su carácter.",
      closingText: "La precisión mide el tiempo.",
      closingAccent: "La elegancia le da presencia.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Proporciones",
          description:
            "Diámetro, grosor y equilibrio determinan cómo se adapta naturalmente a la muñeca.",
        },
        {
          title: "Materiales",
          description:
            "Acero, oro, piedras preciosas y nácar crean expresiones diferentes.",
        },
        {
          title: "Detalle",
          description:
            "Esfera, engaste y detalles sutiles convierten el reloj en algo personal.",
        },
        {
          title: "Elegancia",
          description:
            "El reloj adecuado complementa naturalmente el estilo personal.",
        },
      ],
    },

    cta: {
      title: "El reloj adecuado se descubre en la muñeca",
      sub:
        "Descubra personalmente los relojes para mujer de LIDYA.",
    },
  },
};

const WOMEN_WATCH_IMAGES = [
  "/images/watches/woman-category/woman1.png",
  "/images/watches/woman-category/woman2.png",
  "/images/watches/woman-category/woman3.png",
  "/images/watches/woman-category/woman4.png",
  "/images/watches/woman-category/woman5.png",
  "/images/watches/woman-category/woman6.png",
  "/images/watches/woman-category/woman7.png",
  "/images/watches/woman-category/woman8.png",
  "/images/watches/woman-category/woman9.png",
  "/images/watches/woman-category/woman10.png",
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

function WomensWatchesHero({
  copy,
}: {
  copy: WomensWatchesCopy["hero"];
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

      const translateY = (progress - 0.5) * 12;
      const scale = 1.035 + progress * 0.009;

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
        bg-[#170E13]
        pt-[96px]
        md:min-h-[840px]
        lg:min-h-[900px]
      "
    >
      <div
        ref={imageRef}
        className={`
          absolute
          inset-[-1.5%]
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
            ? "translate3d(0,0,0) scale(1.035)"
            : "translate3d(0,0,0) scale(1.065)",
        }}
      >
        <Image
          src="/images/watches/woman-category/woman-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[61%_50%]
            sm:object-[60%_50%]
            md:object-[59%_50%]
            lg:object-[58%_50%]
            xl:object-center
          "
        />
      </div>

      {/* soft cinematic shade behind the copy */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(18,7,15,0.92)_0%,rgba(18,7,15,0.80)_22%,rgba(18,7,15,0.52)_43%,rgba(18,7,15,0.16)_68%,rgba(18,7,15,0.02)_100%)]
        "
      />

      {/* bottom depth */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(0deg,rgba(15,6,12,0.82)_0%,rgba(15,6,12,0.34)_22%,rgba(15,6,12,0.06)_48%,transparent_70%)]
        "
      />

      {/* top restraint for header legibility */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-52
          bg-[linear-gradient(180deg,rgba(16,7,13,0.46)_0%,rgba(16,7,13,0.12)_52%,transparent_100%)]
        "
      />

      {/* warm jewellery glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_36%,rgba(220,183,111,0.10)_0%,rgba(220,183,111,0.025)_30%,transparent_56%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-16 lg:px-16 lg:pb-20 xl:px-20">
        <div className="max-w-[760px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#D8B66E]
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
            <span className="flex h-8 w-8 items-center justify-center md:h-9 md:w-9">
              <WatchIcon />
            </span>

            <span className="text-[0.56rem] font-semibold uppercase tracking-[0.31em] md:text-[0.62rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[760px]
              font-display
              text-[3.1rem]
              leading-[0.92]
              tracking-[-0.042em]
              text-[#F8F2E9]
              sm:text-[3.7rem]
              md:text-[4.75rem]
              lg:text-[5.65rem]
              xl:text-[6rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  text-[#F8F2E9]
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
                  text-[#D8B66E]
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
                max-w-[590px]
                text-[0.82rem]
                leading-6
                text-[#F8F2E9]/72
                md:text-[0.95rem]
                md:leading-7
              "
            >
              {copy.description}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.24em] text-[#F8F2E9]/50">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`
            mt-12
            max-w-[820px]
            border-t
            border-[#F8F2E9]/12
            pt-6
            transition-all
            duration-[1250ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:mt-14
            md:pt-7
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
              max-w-[780px]
              font-display
              text-[1.45rem]
              italic
              leading-[1.12]
              tracking-[-0.015em]
              text-[#F8F2E9]/95
              sm:text-[1.7rem]
              md:text-[2.15rem]
              lg:text-[2.55rem]
            "
          >
            {copy.statementBefore}{" "}
            <span className="text-[#D8B66E]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function WomensWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    WOMENS_WATCHES_COPY[locale] ??
    WOMENS_WATCHES_COPY.en;

  const galleryItems = WOMEN_WATCH_IMAGES.map(
    (image, index) => ({
      image,

      caption:
        copy.gallery.captions[index] ??
        WOMENS_WATCHES_COPY.en.gallery.captions[index] ??
        "",

      alt:
        copy.gallery.alts[index] ??
        WOMENS_WATCHES_COPY.en.gallery.alts[index] ??
        "",
    })
  );

  return (
    <>
      <Header />

      <main>
        <WomensWatchesHero copy={copy.hero} />

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