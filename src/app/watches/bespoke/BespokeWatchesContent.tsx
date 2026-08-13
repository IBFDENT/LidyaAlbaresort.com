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

type BespokeWatchesCopy = {
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
    steps: string[];
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

const BESPOKE_WATCHES_COPY: Record<
  Locale,
  BespokeWatchesCopy
> = {
  en: {
    hero: {
      eyebrow: "Bespoke Watches",
      title: "From the first idea to",
      titleAccent: "a watch made for you.",
      description:
        "A bespoke LIDYA watch begins long before the first component is assembled. From the initial hand-drawn sketch and technical construction to machining, finishing, regulation and personal delivery, every stage contributes to the final character of the timepiece.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Every detail follows a process.",
      statementAccent: "Every watch begins with a person.",
      imageAlt:
        "The beginning of the LIDYA bespoke watchmaking process",
    },

    gallery: {
      eyebrow: "From Idea to Wrist",
      title: "25 steps to",
      titleAccent: "a unique timepiece.",
      description:
        "Follow the creation of a bespoke LIDYA watch from the first hand-drawn idea through technical development, manufacturing, assembly, testing, certification and personal delivery.",
      itemLabel: "LIDYA Watchmaking Process",
      closingText: "Behind every detail is a process.",
      closingAccent: "Behind every watch is a person.",
      steps: [
        "Initial Idea and Hand Sketch",
        "Detailed Technical Drawing",
        "CAD / 3D Construction",
        "Material Selection",
        "Case Manufacturing",
        "Milling and Machining",
        "Hand Grinding and Polishing",
        "Dial Manufacturing",
        "Application of Indices and LIDYA Logo",
        "Diamond Setting Where Applicable",
        "Movement Production and Inspection",
        "Hand Assembly of the Movement",
        "Hand Setting",
        "Installing the Movement into the Case",
        "Sapphire Crystal Installation",
        "Crown and Gasket Assembly",
        "Bracelet Production and Assembly",
        "Complete Assembly",
        "Precision Regulation",
        "Pressure and Water-Resistance Testing",
        "Visual Inspection Under Magnification",
        "Final Hand Polishing",
        "Certificate and Serial Number",
        "Placement in the Luxury LIDYA Box",
        "Personal Delivery to the Client",
      ],
    },

    craft: {
      eyebrow: "The Art of Bespoke Watchmaking",
      title:
        "A personal watch is created through precision, patience and individual decisions",
      description:
        "Bespoke watchmaking combines design, engineering, materials, hand-finishing and quality control. Every stage has a purpose, and every decision brings the finished watch closer to the person for whom it is being created.",
      closingText: "Craft gives the watch form.",
      closingAccent: "Personality gives it meaning.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Design",
          description:
            "The process begins with an idea that is gradually translated from a hand sketch into technical drawings and precise three-dimensional construction.",
        },
        {
          title: "Manufacturing",
          description:
            "Case, dial, components and bracelet are created through carefully controlled machining, finishing and manual work.",
        },
        {
          title: "Assembly",
          description:
            "The movement, hands, crystal, crown, seals and exterior components are assembled step by step with careful attention to alignment and function.",
        },
        {
          title: "Control",
          description:
            "Regulation, pressure testing, visual inspection, final polishing and certification ensure the completed watch meets the intended standard.",
        },
      ],
    },

    cta: {
      title: "Your watch can begin with a conversation",
      sub:
        "Visit LIDYA and discover how an individual idea can develop into a finished timepiece created around your preferences, materials and personal details.",
    },
  },

  de: {
    hero: {
      eyebrow: "Uhren nach Maß",
      title: "Von der ersten Idee bis zur",
      titleAccent: "Uhr für Sie.",
      description:
        "Eine maßgefertigte LIDYA Uhr entsteht lange vor der eigentlichen Montage. Von der ersten Handskizze und technischen Konstruktion über Bearbeitung und Veredelung bis zur Regulierung und persönlichen Übergabe trägt jeder Schritt zum Charakter des Zeitmessers bei.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Hinter jedem Detail steht ein Prozess.",
      statementAccent: "Hinter jeder Uhr steht ein Mensch.",
      imageAlt:
        "Beginn des individuellen LIDYA Uhrmacherprozesses",
    },

    gallery: {
      eyebrow: "Von der Idee ans Handgelenk",
      title: "25 Schritte zu",
      titleAccent: "einem einzigartigen Zeitmesser.",
      description:
        "Begleiten Sie die Entstehung einer individuellen LIDYA Uhr von der ersten Handskizze über technische Entwicklung, Fertigung und Montage bis zu Prüfung, Zertifizierung und persönlicher Übergabe.",
      itemLabel: "LIDYA Herstellungsprozess",
      closingText: "Hinter jedem Detail steht ein Prozess.",
      closingAccent: "Hinter jeder Uhr steht ein Mensch.",
      steps: [
        "Erste Idee und Handskizze",
        "Detaillierte technische Zeichnung",
        "CAD- / 3D-Konstruktion",
        "Materialauswahl",
        "Herstellung des Gehäuses",
        "Fräsen und Bearbeiten",
        "Manuelles Schleifen und Polieren",
        "Herstellung des Zifferblatts",
        "Anbringen der Indizes und des LIDYA Logos",
        "Diamantbesatz bei entsprechendem Modell",
        "Herstellung und Kontrolle des Uhrwerks",
        "Manuelle Montage des Uhrwerks",
        "Setzen der Zeiger",
        "Einsetzen des Uhrwerks in das Gehäuse",
        "Montage des Saphirglases",
        "Montage von Krone und Dichtungen",
        "Herstellung und Montage des Armbands",
        "Komplette Montage",
        "Regulierung der Ganggenauigkeit",
        "Druck- und Wasserdichtigkeitsprüfung",
        "Visuelle Kontrolle unter Vergrößerung",
        "Finale Handpolitur",
        "Zertifikat und Seriennummer",
        "Einlegen in die luxuriöse LIDYA Box",
        "Persönliche Übergabe an den Kunden",
      ],
    },

    craft: {
      eyebrow: "Die Kunst individueller Uhrmacherei",
      title:
        "Eine persönliche Uhr entsteht durch Präzision, Geduld und individuelle Entscheidungen",
      description:
        "Individuelle Uhrmacherei verbindet Gestaltung, Technik, Materialien, Handarbeit und Qualitätskontrolle zu einem zusammenhängenden Prozess.",
      closingText: "Handwerk gibt der Uhr Form.",
      closingAccent: "Persönlichkeit gibt ihr Bedeutung.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Design",
          description:
            "Eine erste Idee wird von der Handskizze Schritt für Schritt in technische Zeichnungen und eine präzise dreidimensionale Konstruktion übersetzt.",
        },
        {
          title: "Fertigung",
          description:
            "Gehäuse, Zifferblatt, Komponenten und Armband entstehen durch kontrollierte Bearbeitung, Veredelung und Handarbeit.",
        },
        {
          title: "Montage",
          description:
            "Uhrwerk, Zeiger, Glas, Krone, Dichtungen und äußere Bauteile werden sorgfältig zusammengefügt.",
        },
        {
          title: "Kontrolle",
          description:
            "Regulierung, Druckprüfung, Sichtkontrolle, Endpolitur und Zertifizierung sichern die Qualität der fertigen Uhr.",
        },
      ],
    },

    cta: {
      title: "Ihre Uhr kann mit einem Gespräch beginnen",
      sub:
        "Besuchen Sie LIDYA und entdecken Sie, wie aus einer persönlichen Idee ein individueller Zeitmesser entstehen kann.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Özel Tasarım Saatler",
      title: "İlk fikirden",
      titleAccent: "size özel saate.",
      description:
        "Özel bir LIDYA saati, montajdan çok önce başlar. İlk el çiziminden teknik tasarıma, üretimden finisaja, hassasiyet ayarından kişisel teslimata kadar her aşama saatin karakterini oluşturur.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Her detayın arkasında bir süreç vardır.",
      statementAccent: "Her saatin arkasında bir insan vardır.",
      imageAlt:
        "LIDYA özel saat üretim sürecinin başlangıcı",
    },

    gallery: {
      eyebrow: "Fikirden Bileğe",
      title: "Benzersiz bir saat için",
      titleAccent: "25 adım.",
      description:
        "Özel bir LIDYA saatinin ilk el çiziminden teknik geliştirmeye, üretimden montaja, testten sertifikaya ve kişisel teslimata uzanan yolculuğunu keşfedin.",
      itemLabel: "LIDYA Saat Üretim Süreci",
      closingText: "Her detayın arkasında bir süreç vardır.",
      closingAccent: "Her saatin arkasında bir insan vardır.",
      steps: [
        "İlk Fikir ve El Çizimi",
        "Detaylı Teknik Çizim",
        "CAD / 3D Konstrüksiyon",
        "Malzeme Seçimi",
        "Kasa Üretimi",
        "Frezeleme ve İşleme",
        "Elle Taşlama ve Parlatma",
        "Kadran Üretimi",
        "İndekslerin ve LIDYA Logosunun Uygulanması",
        "Uygun Modellerde Elmas Yerleştirme",
        "Mekanizma Üretimi ve Kontrolü",
        "Mekanizmanın Elle Montajı",
        "Akrep ve Yelkovanın Takılması",
        "Mekanizmanın Kasaya Yerleştirilmesi",
        "Safir Cam Montajı",
        "Kurma Kolu ve Contaların Montajı",
        "Bilezik Üretimi ve Montajı",
        "Tam Montaj",
        "Hassasiyet Ayarı",
        "Basınç ve Su Geçirmezlik Testi",
        "Büyüteç Altında Görsel Kontrol",
        "Son Elle Parlatma",
        "Sertifika ve Seri Numarası",
        "Lüks LIDYA Kutusuna Yerleştirme",
        "Müşteriye Kişisel Teslimat",
      ],
    },

    craft: {
      eyebrow: "Özel Saatçilik Sanatı",
      title:
        "Kişisel bir saat hassasiyet, sabır ve bireysel seçimlerle doğar",
      description:
        "Özel saatçilik; tasarım, mühendislik, malzeme, el işçiliği ve kalite kontrolünü tek bir süreçte birleştirir.",
      closingText: "Ustalık saate biçim verir.",
      closingAccent: "Kişilik ona anlam verir.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Tasarım",
          description:
            "İlk fikir, el çiziminden teknik çizime ve hassas üç boyutlu konstrüksiyona dönüştürülür.",
        },
        {
          title: "Üretim",
          description:
            "Kasa, kadran, parçalar ve bilezik kontrollü işleme ve el işçiliğiyle oluşturulur.",
        },
        {
          title: "Montaj",
          description:
            "Mekanizma, ibreler, cam, kurma kolu ve diğer parçalar adım adım monte edilir.",
        },
        {
          title: "Kontrol",
          description:
            "Hassasiyet ayarı, basınç testi, görsel kontrol, son parlatma ve sertifikasyon tamamlanır.",
        },
      ],
    },

    cta: {
      title: "Saatiniz bir sohbetle başlayabilir",
      sub:
        "LIDYA'yı ziyaret edin ve kişisel bir fikrin size özel tamamlanmış bir saate nasıl dönüşebileceğini keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Hodinky na zákazku",
      title: "Od prvotnej myšlienky až po",
      titleAccent: "hodinky vytvorené pre vás.",
      description:
        "Hodinky LIDYA na zákazku vznikajú dávno pred samotnou montážou. Od prvotnej ručnej skice a technickej konštrukcie cez obrábanie, brúsenie a kompletizáciu až po reguláciu, kontrolu a osobné odovzdanie — každý krok vytvára charakter výsledných hodiniek.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Za každým detailom stojí proces.",
      statementAccent: "Za každými hodinkami stojí človek.",
      imageAlt:
        "Začiatok procesu výroby hodiniek LIDYA na zákazku",
    },

    gallery: {
      eyebrow: "Od myšlienky po zápästie",
      title: "25 krokov k",
      titleAccent: "jedinečným hodinkám.",
      description:
        "Sledujte vznik hodiniek LIDYA na zákazku od prvotnej ručnej skice cez technický vývoj, výrobu, montáž a testovanie až po certifikáciu a osobné odovzdanie zákazníkovi.",
      itemLabel: "Proces výroby LIDYA",
      closingText: "Za každým detailom stojí proces.",
      closingAccent: "Za každými hodinkami stojí človek.",
      steps: [
        "Prvotná myšlienka a ručná skica",
        "Detailný technický návrh",
        "CAD / 3D konštrukcia",
        "Výber materiálu",
        "Výroba puzdra",
        "Frézovanie a obrábanie",
        "Ručné brúsenie a leštenie",
        "Výroba ciferníka",
        "Aplikácia indexov a loga LIDYA",
        "Osádzanie diamantov pri príslušnom modeli",
        "Výroba a kontrola strojčeka",
        "Ručná montáž mechanizmu",
        "Osadenie ručičiek",
        "Vloženie strojčeka do puzdra",
        "Montáž zafírového skla",
        "Montáž korunky a tesnení",
        "Výroba a montáž náramku",
        "Kompletné zostavenie",
        "Regulácia presnosti",
        "Tlaková a vodotesnostná skúška",
        "Vizuálna kontrola pod lupou",
        "Finálne ručné leštenie",
        "Certifikát a sériové číslo",
        "Uloženie do luxusného LIDYA boxu",
        "Osobné odovzdanie zákazníkovi",
      ],
    },

    craft: {
      eyebrow: "Umenie hodiniek na zákazku",
      title:
        "Osobné hodinky vznikajú spojením presnosti, trpezlivosti a individuálnych rozhodnutí",
      description:
        "Výroba hodiniek na zákazku prepája dizajn, technickú konštrukciu, výber materiálov, precíznu výrobu, ručné spracovanie a kontrolu kvality. Každý krok má svoje miesto a význam.",
      closingText: "Remeslo dáva hodinkám formu.",
      closingAccent: "Osobnosť im dáva význam.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Návrh",
          description:
            "Proces začína prvotnou predstavou, ktorá sa z ručnej skice postupne mení na detailný technický návrh a presnú 3D konštrukciu.",
        },
        {
          title: "Výroba",
          description:
            "Puzdro, ciferník, jednotlivé komponenty a náramok vznikajú kombináciou presného obrábania, ručného brúsenia a povrchového spracovania.",
        },
        {
          title: "Montáž",
          description:
            "Strojček, ručičky, zafírové sklo, korunka, tesnenia a ďalšie komponenty sa postupne spájajú do kompletných hodiniek.",
        },
        {
          title: "Kontrola",
          description:
            "Regulácia presnosti, tlaková skúška, kontrola pod lupou, finálne leštenie a certifikácia uzatvárajú celý výrobný proces.",
        },
      ],
    },

    cta: {
      title: "Vaše hodinky môžu začať rozhovorom",
      sub:
        "Navštívte LIDYA a objavte, ako sa môže osobná predstava premeniť na hotové hodinky vytvorené podľa vašich materiálov, proporcií a detailov.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Hodinky na zakázku",
      title: "Od první myšlenky až po",
      titleAccent: "hodinky vytvořené pro vás.",
      description:
        "Hodinky LIDYA na zakázku vznikají dlouho před samotnou montáží. Od ruční skici a technické konstrukce přes obrábění, dokončování a kompletaci až po regulaci, kontrolu a osobní předání.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Za každým detailem stojí proces.",
      statementAccent: "Za každými hodinkami stojí člověk.",
      imageAlt:
        "Začátek procesu výroby hodinek LIDYA na zakázku",
    },

    gallery: {
      eyebrow: "Od myšlenky po zápěstí",
      title: "25 kroků k",
      titleAccent: "jedinečným hodinkám.",
      description:
        "Sledujte vznik hodinek LIDYA od první ruční skici přes technický vývoj, výrobu a montáž až po testování, certifikaci a osobní předání.",
      itemLabel: "Proces výroby LIDYA",
      closingText: "Za každým detailem stojí proces.",
      closingAccent: "Za každými hodinkami stojí člověk.",
      steps: [
        "Prvotní myšlenka a ruční skica",
        "Detailní technický návrh",
        "CAD / 3D konstrukce",
        "Výběr materiálu",
        "Výroba pouzdra",
        "Frézování a obrábění",
        "Ruční broušení a leštění",
        "Výroba ciferníku",
        "Aplikace indexů a loga LIDYA",
        "Osazování diamantů u příslušného modelu",
        "Výroba a kontrola strojku",
        "Ruční montáž mechanismu",
        "Osazení ručiček",
        "Vložení strojku do pouzdra",
        "Montáž safírového skla",
        "Montáž korunky a těsnění",
        "Výroba a montáž náramku",
        "Kompletní sestavení",
        "Regulace přesnosti",
        "Tlaková a vodotěsnostní zkouška",
        "Vizuální kontrola pod lupou",
        "Finální ruční leštění",
        "Certifikát a sériové číslo",
        "Uložení do luxusního boxu LIDYA",
        "Osobní předání zákazníkovi",
      ],
    },

    craft: {
      eyebrow: "Umění hodinek na zakázku",
      title:
        "Osobní hodinky vznikají spojením přesnosti, trpělivosti a individuálních rozhodnutí",
      description:
        "Výroba na zakázku propojuje design, technickou konstrukci, materiály, výrobu, ruční zpracování a kontrolu kvality.",
      closingText: "Řemeslo dává hodinkám formu.",
      closingAccent: "Osobnost jim dává význam.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Návrh",
          description:
            "Prvotní myšlenka se postupně mění z ruční skici v technický návrh a přesnou 3D konstrukci.",
        },
        {
          title: "Výroba",
          description:
            "Pouzdro, ciferník, komponenty a náramek vznikají kombinací přesného obrábění a ruční práce.",
        },
        {
          title: "Montáž",
          description:
            "Strojek, ručičky, safírové sklo, korunka a další komponenty se postupně spojují.",
        },
        {
          title: "Kontrola",
          description:
            "Regulace, tlaková zkouška, vizuální kontrola, leštění a certifikace dokončují proces.",
        },
      ],
    },

    cta: {
      title: "Vaše hodinky mohou začít rozhovorem",
      sub:
        "Navštivte LIDYA a objevte cestu od osobní představy k hotovým hodinkám na zakázku.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Egyedi órák",
      title: "Az első ötlettől",
      titleAccent: "az Ön számára készült óráig.",
      description:
        "Egy egyedi LIDYA óra jóval az összeszerelés előtt kezdődik. A kézi vázlattól és műszaki tervezéstől a megmunkáláson, finiselésen és összeszerelésen át a szabályozásig és személyes átadásig minden lépés alakítja az órát.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "Minden részlet mögött folyamat áll.",
      statementAccent: "Minden óra mögött egy ember áll.",
      imageAlt:
        "A LIDYA egyedi órakészítési folyamatának kezdete",
    },

    gallery: {
      eyebrow: "Az ötlettől a csuklóig",
      title: "25 lépés egy",
      titleAccent: "egyedi órához.",
      description:
        "Kövesse végig egy egyedi LIDYA óra útját a kézi vázlattól a műszaki fejlesztésen és gyártáson át a tesztelésig, tanúsításig és személyes átadásig.",
      itemLabel: "LIDYA órakészítési folyamat",
      closingText: "Minden részlet mögött folyamat áll.",
      closingAccent: "Minden óra mögött egy ember áll.",
      steps: [
        "Első ötlet és kézi vázlat",
        "Részletes műszaki terv",
        "CAD / 3D konstrukció",
        "Anyagválasztás",
        "A tok gyártása",
        "Marás és megmunkálás",
        "Kézi csiszolás és polírozás",
        "A számlap gyártása",
        "Indexek és LIDYA logó felhelyezése",
        "Gyémántfoglalás az adott modellen",
        "A szerkezet gyártása és ellenőrzése",
        "A szerkezet kézi összeszerelése",
        "A mutatók felhelyezése",
        "A szerkezet tokba helyezése",
        "Zafírüveg beépítése",
        "Korona és tömítések szerelése",
        "A karkötő gyártása és szerelése",
        "Teljes összeszerelés",
        "Pontosságszabályozás",
        "Nyomás- és vízállósági teszt",
        "Vizuális ellenőrzés nagyítás alatt",
        "Végső kézi polírozás",
        "Tanúsítvány és sorozatszám",
        "Elhelyezés a luxus LIDYA dobozban",
        "Személyes átadás az ügyfélnek",
      ],
    },

    craft: {
      eyebrow: "Az egyedi órakészítés művészete",
      title:
        "Egy személyes óra pontosságból, türelemből és egyéni döntésekből születik",
      description:
        "Az egyedi órakészítés a tervezést, mérnöki munkát, anyagokat, kézi kidolgozást és minőség-ellenőrzést egyetlen folyamattá kapcsolja.",
      closingText: "A mesterség formát ad az órának.",
      closingAccent: "A személyiség jelentést ad neki.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Tervezés",
          description:
            "Az első ötlet kézi vázlatból műszaki rajzzá és pontos 3D konstrukcióvá alakul.",
        },
        {
          title: "Gyártás",
          description:
            "A tok, számlap és alkatrészek precíz megmunkálással és kézi finiseléssel készülnek.",
        },
        {
          title: "Összeszerelés",
          description:
            "A szerkezet, mutatók, üveg, korona és egyéb részek fokozatosan egyesülnek.",
        },
        {
          title: "Ellenőrzés",
          description:
            "A szabályozás, nyomáspróba, vizuális ellenőrzés és tanúsítás zárja a folyamatot.",
        },
      ],
    },

    cta: {
      title: "Az Ön órája egy beszélgetéssel kezdődhet",
      sub:
        "Fedezze fel a LIDYA-nál, hogyan válhat egy személyes elképzelés elkészült egyedi órává.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki na zamówienie",
      title: "Od pierwszego pomysłu do",
      titleAccent: "zegarka stworzonego dla Ciebie.",
      description:
        "Zegarek LIDYA na zamówienie zaczyna powstawać długo przed montażem. Od ręcznego szkicu i konstrukcji technicznej przez obróbkę i wykończenie aż po regulację, kontrolę i osobiste przekazanie.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Za każdym detalem stoi proces.",
      statementAccent: "Za każdym zegarkiem stoi człowiek.",
      imageAlt:
        "Początek procesu tworzenia zegarka LIDYA na zamówienie",
    },

    gallery: {
      eyebrow: "Od pomysłu do nadgarstka",
      title: "25 kroków do",
      titleAccent: "wyjątkowego zegarka.",
      description:
        "Poznaj drogę zegarka LIDYA od ręcznego szkicu przez rozwój techniczny, produkcję i montaż aż po testy, certyfikację i osobiste przekazanie.",
      itemLabel: "Proces produkcji LIDYA",
      closingText: "Za każdym detalem stoi proces.",
      closingAccent: "Za każdym zegarkiem stoi człowiek.",
      steps: [
        "Pierwszy pomysł i ręczny szkic",
        "Szczegółowy projekt techniczny",
        "Konstrukcja CAD / 3D",
        "Wybór materiału",
        "Produkcja koperty",
        "Frezowanie i obróbka",
        "Ręczne szlifowanie i polerowanie",
        "Produkcja tarczy",
        "Aplikacja indeksów i logo LIDYA",
        "Oprawa diamentów w odpowiednim modelu",
        "Produkcja i kontrola mechanizmu",
        "Ręczny montaż mechanizmu",
        "Montaż wskazówek",
        "Umieszczenie mechanizmu w kopercie",
        "Montaż szkła szafirowego",
        "Montaż koronki i uszczelek",
        "Produkcja i montaż bransolety",
        "Kompletne złożenie",
        "Regulacja dokładności",
        "Test ciśnieniowy i wodoodporności",
        "Kontrola wizualna pod lupą",
        "Końcowe ręczne polerowanie",
        "Certyfikat i numer seryjny",
        "Umieszczenie w luksusowym pudełku LIDYA",
        "Osobiste przekazanie klientowi",
      ],
    },

    craft: {
      eyebrow: "Sztuka zegarmistrzostwa na zamówienie",
      title:
        "Osobisty zegarek powstaje dzięki precyzji, cierpliwości i indywidualnym decyzjom",
      description:
        "Proces łączy projektowanie, konstrukcję, materiały, produkcję, ręczne wykończenie i kontrolę jakości.",
      closingText: "Rzemiosło nadaje zegarkowi formę.",
      closingAccent: "Osobowość nadaje mu znaczenie.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Projekt",
          description:
            "Pomysł przechodzi drogę od ręcznego szkicu do technicznego projektu i konstrukcji 3D.",
        },
        {
          title: "Produkcja",
          description:
            "Koperta, tarcza, komponenty i bransoleta powstają dzięki precyzyjnej obróbce i pracy ręcznej.",
        },
        {
          title: "Montaż",
          description:
            "Mechanizm, wskazówki, szkło, koronka i pozostałe elementy są składane etapami.",
        },
        {
          title: "Kontrola",
          description:
            "Regulacja, testy, kontrola wizualna, polerowanie i certyfikacja kończą proces.",
        },
      ],
    },

    cta: {
      title: "Twój zegarek może zacząć się od rozmowy",
      sub:
        "Odwiedź LIDYA i odkryj, jak osobisty pomysł może zostać przekształcony w gotowy zegarek na zamówienie.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Часы на заказ",
      title: "От первой идеи до",
      titleAccent: "часов, созданных для вас.",
      description:
        "Часы LIDYA на заказ начинают создаваться задолго до сборки. От ручного эскиза и технического проектирования до обработки, отделки, регулировки, контроля и личной передачи клиенту.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "За каждой деталью стоит процесс.",
      statementAccent: "За каждыми часами стоит человек.",
      imageAlt:
        "Начало процесса создания часов LIDYA на заказ",
    },

    gallery: {
      eyebrow: "От идеи до запястья",
      title: "25 шагов к",
      titleAccent: "уникальным часам.",
      description:
        "Проследите путь часов LIDYA от первого ручного эскиза через техническую разработку, производство, сборку и испытания до сертификации и личной передачи.",
      itemLabel: "Процесс производства LIDYA",
      closingText: "За каждой деталью стоит процесс.",
      closingAccent: "За каждыми часами стоит человек.",
      steps: [
        "Первая идея и ручной эскиз",
        "Подробный технический проект",
        "CAD / 3D конструкция",
        "Выбор материала",
        "Изготовление корпуса",
        "Фрезеровка и механическая обработка",
        "Ручная шлифовка и полировка",
        "Изготовление циферблата",
        "Установка индексов и логотипа LIDYA",
        "Закрепка бриллиантов для соответствующей модели",
        "Изготовление и проверка механизма",
        "Ручная сборка механизма",
        "Установка стрелок",
        "Установка механизма в корпус",
        "Монтаж сапфирового стекла",
        "Монтаж заводной головки и уплотнений",
        "Изготовление и монтаж браслета",
        "Полная сборка",
        "Регулировка точности",
        "Испытание давлением и на водонепроницаемость",
        "Визуальный контроль под увеличением",
        "Финальная ручная полировка",
        "Сертификат и серийный номер",
        "Размещение в роскошном боксе LIDYA",
        "Личная передача клиенту",
      ],
    },

    craft: {
      eyebrow: "Искусство индивидуального часового дела",
      title:
        "Персональные часы создаются благодаря точности, терпению и индивидуальным решениям",
      description:
        "Процесс объединяет дизайн, инженерию, материалы, производство, ручную отделку и контроль качества.",
      closingText: "Мастерство придаёт часам форму.",
      closingAccent: "Личность придаёт им смысл.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Проектирование",
          description:
            "Идея развивается от ручного эскиза до технического чертежа и точной 3D конструкции.",
        },
        {
          title: "Производство",
          description:
            "Корпус, циферблат и компоненты создаются сочетанием точной обработки и ручной работы.",
        },
        {
          title: "Сборка",
          description:
            "Механизм, стрелки, стекло, заводная головка и другие детали собираются поэтапно.",
        },
        {
          title: "Контроль",
          description:
            "Регулировка, испытания, визуальный контроль, полировка и сертификация завершают процесс.",
        },
      ],
    },

    cta: {
      title: "Ваши часы могут начаться с разговора",
      sub:
        "Посетите LIDYA и узнайте, как личная идея может превратиться в готовые часы на заказ.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Horloges op maat",
      title: "Van het eerste idee tot",
      titleAccent: "een horloge voor u.",
      description:
        "Een LIDYA-horloge op maat begint lang vóór de montage. Van handschets en technische constructie tot bewerking, afwerking, regulatie, controle en persoonlijke overhandiging.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Achter elk detail zit een proces.",
      statementAccent: "Achter elk horloge staat een persoon.",
      imageAlt:
        "Begin van het LIDYA-proces voor horloges op maat",
    },

    gallery: {
      eyebrow: "Van idee tot pols",
      title: "25 stappen naar",
      titleAccent: "een uniek horloge.",
      description:
        "Volg het ontstaan van een LIDYA-horloge van de eerste handschets via technische ontwikkeling, productie en montage tot tests, certificering en persoonlijke overhandiging.",
      itemLabel: "LIDYA productieproces",
      closingText: "Achter elk detail zit een proces.",
      closingAccent: "Achter elk horloge staat een persoon.",
      steps: [
        "Eerste idee en handschets",
        "Gedetailleerd technisch ontwerp",
        "CAD / 3D-constructie",
        "Materiaalkeuze",
        "Productie van de kast",
        "Frezen en bewerken",
        "Handmatig slijpen en polijsten",
        "Productie van de wijzerplaat",
        "Aanbrengen van indexen en LIDYA-logo",
        "Diamantzetting waar van toepassing",
        "Productie en controle van het uurwerk",
        "Handmatige montage van het uurwerk",
        "Plaatsen van de wijzers",
        "Plaatsen van het uurwerk in de kast",
        "Montage van saffierglas",
        "Montage van kroon en afdichtingen",
        "Productie en montage van de band",
        "Volledige assemblage",
        "Regulatie van de nauwkeurigheid",
        "Druk- en waterdichtheidstest",
        "Visuele controle onder vergroting",
        "Finale handpolijsting",
        "Certificaat en serienummer",
        "Plaatsing in de luxe LIDYA-box",
        "Persoonlijke overhandiging aan de klant",
      ],
    },

    craft: {
      eyebrow: "De kunst van maatwerk",
      title:
        "Een persoonlijk horloge ontstaat uit precisie, geduld en individuele keuzes",
      description:
        "Maatwerk combineert ontwerp, techniek, materialen, productie, handafwerking en kwaliteitscontrole.",
      closingText: "Vakmanschap geeft het horloge vorm.",
      closingAccent: "Persoonlijkheid geeft betekenis.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Ontwerp",
          description:
            "Een eerste idee wordt ontwikkeld van handschets naar technisch ontwerp en precieze 3D-constructie.",
        },
        {
          title: "Productie",
          description:
            "Kast, wijzerplaat en onderdelen worden vervaardigd met nauwkeurige bewerking en handwerk.",
        },
        {
          title: "Montage",
          description:
            "Uurwerk, wijzers, glas, kroon en andere onderdelen worden zorgvuldig samengebracht.",
        },
        {
          title: "Controle",
          description:
            "Regulatie, druktest, visuele controle, polijsten en certificering sluiten het proces af.",
        },
      ],
    },

    cta: {
      title: "Uw horloge kan beginnen met een gesprek",
      sub:
        "Bezoek LIDYA en ontdek hoe een persoonlijk idee kan uitgroeien tot een volledig horloge op maat.",
    },
  },

  da: {
    hero: {
      eyebrow: "Skræddersyede ure",
      title: "Fra den første idé til",
      titleAccent: "et ur skabt til dig.",
      description:
        "Et skræddersyet LIDYA-ur begynder længe før den endelige samling. Fra håndskitse og teknisk konstruktion til bearbejdning, finish, regulering, kontrol og personlig levering.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Bag hver detalje ligger en proces.",
      statementAccent: "Bag hvert ur står et menneske.",
      imageAlt:
        "Begyndelsen på LIDYA-processen for skræddersyede ure",
    },

    gallery: {
      eyebrow: "Fra idé til håndled",
      title: "25 trin til",
      titleAccent: "et unikt ur.",
      description:
        "Følg skabelsen af et LIDYA-ur fra den første håndskitse gennem teknisk udvikling, produktion og samling til test, certificering og personlig levering.",
      itemLabel: "LIDYA produktionsproces",
      closingText: "Bag hver detalje ligger en proces.",
      closingAccent: "Bag hvert ur står et menneske.",
      steps: [
        "Første idé og håndskitse",
        "Detaljeret teknisk tegning",
        "CAD / 3D-konstruktion",
        "Valg af materiale",
        "Fremstilling af urkassen",
        "Fræsning og bearbejdning",
        "Manuel slibning og polering",
        "Fremstilling af urskiven",
        "Montering af indeks og LIDYA-logo",
        "Diamantfatning på relevante modeller",
        "Fremstilling og kontrol af urværket",
        "Manuel samling af urværket",
        "Montering af visere",
        "Placering af urværket i kassen",
        "Montering af safirglas",
        "Montering af krone og pakninger",
        "Fremstilling og montering af armbånd",
        "Komplet samling",
        "Regulering af præcision",
        "Tryk- og vandtæthedstest",
        "Visuel kontrol under forstørrelse",
        "Endelig håndpolering",
        "Certifikat og serienummer",
        "Placering i luksuriøs LIDYA-boks",
        "Personlig levering til kunden",
      ],
    },

    craft: {
      eyebrow: "Kunsten i skræddersyet urmageri",
      title:
        "Et personligt ur skabes gennem præcision, tålmodighed og individuelle valg",
      description:
        "Skræddersyet urmageri forener design, teknik, materialer, produktion, håndfinish og kvalitetskontrol.",
      closingText: "Håndværk giver uret form.",
      closingAccent: "Personlighed giver det betydning.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Design",
          description:
            "Den første idé udvikles fra håndskitse til teknisk tegning og præcis 3D-konstruktion.",
        },
        {
          title: "Produktion",
          description:
            "Kasse, urskive og komponenter skabes gennem præcis bearbejdning og håndarbejde.",
        },
        {
          title: "Samling",
          description:
            "Urværk, visere, glas, krone og øvrige komponenter samles trin for trin.",
        },
        {
          title: "Kontrol",
          description:
            "Regulering, trykprøvning, visuel kontrol, polering og certificering afslutter processen.",
        },
      ],
    },

    cta: {
      title: "Dit ur kan begynde med en samtale",
      sub:
        "Besøg LIDYA og oplev, hvordan en personlig idé kan udvikles til et færdigt skræddersyet ur.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Mittatilauskellot",
      title: "Ensimmäisestä ideasta",
      titleAccent: "sinulle tehtyyn kelloon.",
      description:
        "LIDYA-mittatilauskello alkaa kauan ennen kokoonpanoa. Käsin tehdystä luonnoksesta ja teknisestä suunnittelusta koneistukseen, viimeistelyyn, säätöön, tarkastukseen ja henkilökohtaiseen luovutukseen.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Jokaisen yksityiskohdan takana on prosessi.",
      statementAccent: "Jokaisen kellon takana on ihminen.",
      imageAlt:
        "LIDYA-mittatilauskellon valmistusprosessin alku",
    },

    gallery: {
      eyebrow: "Ideasta ranteeseen",
      title: "25 vaihetta",
      titleAccent: "ainutlaatuiseen kelloon.",
      description:
        "Seuraa LIDYA-kellon syntyä käsin tehdystä luonnoksesta tekniseen kehitykseen, valmistukseen ja kokoonpanoon sekä testeihin, sertifiointiin ja henkilökohtaiseen luovutukseen.",
      itemLabel: "LIDYA valmistusprosessi",
      closingText: "Jokaisen yksityiskohdan takana on prosessi.",
      closingAccent: "Jokaisen kellon takana on ihminen.",
      steps: [
        "Ensimmäinen idea ja käsin tehty luonnos",
        "Yksityiskohtainen tekninen suunnitelma",
        "CAD / 3D-rakenne",
        "Materiaalin valinta",
        "Kuoren valmistus",
        "Jyrsintä ja koneistus",
        "Käsinhionta ja kiillotus",
        "Kellotaulun valmistus",
        "Indeksien ja LIDYA-logon asennus",
        "Timanttien istutus soveltuvaan malliin",
        "Koneiston valmistus ja tarkastus",
        "Koneiston käsinkokoonpano",
        "Viisarien asennus",
        "Koneiston asentaminen kuoreen",
        "Safiirilasin asennus",
        "Nupin ja tiivisteiden asennus",
        "Rannekkeen valmistus ja asennus",
        "Täydellinen kokoonpano",
        "Käyntitarkkuuden säätö",
        "Paine- ja vesitiiviystesti",
        "Visuaalinen tarkastus suurennuksella",
        "Lopullinen käsinkiillotus",
        "Sertifikaatti ja sarjanumero",
        "Sijoittaminen ylelliseen LIDYA-laatikkoon",
        "Henkilökohtainen luovutus asiakkaalle",
      ],
    },

    craft: {
      eyebrow: "Mittatilauskellon valmistuksen taito",
      title:
        "Henkilökohtainen kello syntyy tarkkuudesta, kärsivällisyydestä ja yksilöllisistä päätöksistä",
      description:
        "Mittatilauskellon valmistus yhdistää suunnittelun, tekniikan, materiaalit, valmistuksen, käsin viimeistelyn ja laadunvalvonnan.",
      closingText: "Käsityö antaa kellolle muodon.",
      closingAccent: "Persoonallisuus antaa sille merkityksen.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Suunnittelu",
          description:
            "Ensimmäinen idea kehittyy käsin tehdystä luonnoksesta tekniseksi suunnitelmaksi ja tarkaksi 3D-rakenteeksi.",
        },
        {
          title: "Valmistus",
          description:
            "Kuori, kellotaulu ja komponentit syntyvät tarkalla koneistuksella ja käsityöllä.",
        },
        {
          title: "Kokoonpano",
          description:
            "Koneisto, viisarit, lasi, nuppi ja muut osat yhdistetään vaiheittain.",
        },
        {
          title: "Valvonta",
          description:
            "Säätö, painekoe, visuaalinen tarkastus, kiillotus ja sertifiointi viimeistelevät prosessin.",
        },
      ],
    },

    cta: {
      title: "Kellosi voi alkaa keskustelusta",
      sub:
        "Tutustu LIDYA:lla siihen, miten henkilökohtainen idea voi muuttua valmiiksi mittatilauskelloksi.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Skräddarsydda klockor",
      title: "Från den första idén till",
      titleAccent: "en klocka skapad för dig.",
      description:
        "En skräddarsydd LIDYA-klocka börjar långt före monteringen. Från handskiss och teknisk konstruktion till bearbetning, finish, reglering, kontroll och personlig överlämning.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Bakom varje detalj finns en process.",
      statementAccent: "Bakom varje klocka finns en människa.",
      imageAlt:
        "Början av LIDYA-processen för skräddarsydda klockor",
    },

    gallery: {
      eyebrow: "Från idé till handled",
      title: "25 steg till",
      titleAccent: "en unik klocka.",
      description:
        "Följ skapandet av en LIDYA-klocka från handskiss genom teknisk utveckling, tillverkning och montering till tester, certifiering och personlig överlämning.",
      itemLabel: "LIDYA tillverkningsprocess",
      closingText: "Bakom varje detalj finns en process.",
      closingAccent: "Bakom varje klocka finns en människa.",
      steps: [
        "Första idé och handskiss",
        "Detaljerad teknisk ritning",
        "CAD / 3D-konstruktion",
        "Materialval",
        "Tillverkning av boetten",
        "Fräsning och bearbetning",
        "Handslipning och polering",
        "Tillverkning av urtavlan",
        "Montering av index och LIDYA-logotyp",
        "Diamantinfattning på relevant modell",
        "Tillverkning och kontroll av urverket",
        "Handmontering av urverket",
        "Montering av visare",
        "Placering av urverket i boetten",
        "Montering av safirglas",
        "Montering av krona och tätningar",
        "Tillverkning och montering av armband",
        "Fullständig montering",
        "Reglering av precision",
        "Tryck- och vattentäthetstest",
        "Visuell kontroll under förstoring",
        "Slutlig handpolering",
        "Certifikat och serienummer",
        "Placering i lyxig LIDYA-box",
        "Personlig överlämning till kunden",
      ],
    },

    craft: {
      eyebrow: "Konsten i skräddarsytt urmakeri",
      title:
        "En personlig klocka skapas genom precision, tålamod och individuella beslut",
      description:
        "Skräddarsytt urmakeri förenar design, teknik, material, tillverkning, handfinish och kvalitetskontroll.",
      closingText: "Hantverk ger klockan form.",
      closingAccent: "Personlighet ger den mening.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Design",
          description:
            "Den första idén utvecklas från handskiss till teknisk ritning och exakt 3D-konstruktion.",
        },
        {
          title: "Tillverkning",
          description:
            "Boett, urtavla och komponenter skapas genom exakt bearbetning och handarbete.",
        },
        {
          title: "Montering",
          description:
            "Urverk, visare, glas, krona och övriga delar monteras steg för steg.",
        },
        {
          title: "Kontroll",
          description:
            "Reglering, trycktest, visuell kontroll, polering och certifiering avslutar processen.",
        },
      ],
    },

    cta: {
      title: "Din klocka kan börja med ett samtal",
      sub:
        "Besök LIDYA och upptäck hur en personlig idé kan utvecklas till en färdig skräddarsydd klocka.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres sur mesure",
      title: "De la première idée à",
      titleAccent: "une montre créée pour vous.",
      description:
        "Une montre LIDYA sur mesure commence bien avant son assemblage. Du premier croquis à la construction technique, puis à l'usinage, aux finitions, au réglage, au contrôle et à la remise personnelle.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "Derrière chaque détail se trouve un processus.",
      statementAccent: "Derrière chaque montre se trouve une personne.",
      imageAlt:
        "Début du processus de création d'une montre LIDYA sur mesure",
    },

    gallery: {
      eyebrow: "De l'idée au poignet",
      title: "25 étapes vers",
      titleAccent: "une montre unique.",
      description:
        "Suivez la création d'une montre LIDYA du premier croquis au développement technique, à la fabrication, à l'assemblage, aux tests, à la certification et à la remise personnelle.",
      itemLabel: "Processus de fabrication LIDYA",
      closingText: "Derrière chaque détail se trouve un processus.",
      closingAccent: "Derrière chaque montre se trouve une personne.",
      steps: [
        "Première idée et croquis à la main",
        "Dessin technique détaillé",
        "Construction CAD / 3D",
        "Sélection du matériau",
        "Fabrication du boîtier",
        "Fraisage et usinage",
        "Ponçage et polissage à la main",
        "Fabrication du cadran",
        "Application des index et du logo LIDYA",
        "Sertissage de diamants selon le modèle",
        "Fabrication et contrôle du mouvement",
        "Assemblage manuel du mouvement",
        "Pose des aiguilles",
        "Insertion du mouvement dans le boîtier",
        "Montage du verre saphir",
        "Montage de la couronne et des joints",
        "Fabrication et montage du bracelet",
        "Assemblage complet",
        "Réglage de la précision",
        "Test de pression et d'étanchéité",
        "Contrôle visuel sous grossissement",
        "Polissage final à la main",
        "Certificat et numéro de série",
        "Placement dans l'écrin LIDYA de luxe",
        "Remise personnelle au client",
      ],
    },

    craft: {
      eyebrow: "L'art de l'horlogerie sur mesure",
      title:
        "Une montre personnelle naît de la précision, de la patience et de décisions individuelles",
      description:
        "L'horlogerie sur mesure réunit design, ingénierie, matériaux, fabrication, finitions manuelles et contrôle qualité.",
      closingText: "Le savoir-faire donne forme à la montre.",
      closingAccent: "La personnalité lui donne du sens.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Conception",
          description:
            "L'idée initiale évolue d'un croquis manuel vers un dessin technique et une construction 3D précise.",
        },
        {
          title: "Fabrication",
          description:
            "Boîtier, cadran et composants sont réalisés par usinage précis et travail manuel.",
        },
        {
          title: "Assemblage",
          description:
            "Mouvement, aiguilles, verre, couronne et autres composants sont assemblés étape par étape.",
        },
        {
          title: "Contrôle",
          description:
            "Réglage, test de pression, inspection, polissage et certification finalisent le processus.",
        },
      ],
    },

    cta: {
      title: "Votre montre peut commencer par une conversation",
      sub:
        "Découvrez chez LIDYA comment une idée personnelle peut devenir une montre sur mesure entièrement réalisée.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi su misura",
      title: "Dalla prima idea a",
      titleAccent: "un orologio creato per voi.",
      description:
        "Un orologio LIDYA su misura nasce molto prima dell'assemblaggio. Dal primo schizzo alla progettazione tecnica, alla lavorazione, alla finitura, alla regolazione, al controllo e alla consegna personale.",
      since: "LIDYA · DAL 1989",
      statementBefore: "Dietro ogni dettaglio c'è un processo.",
      statementAccent: "Dietro ogni orologio c'è una persona.",
      imageAlt:
        "Inizio del processo di creazione di un orologio LIDYA su misura",
    },

    gallery: {
      eyebrow: "Dall'idea al polso",
      title: "25 passaggi verso",
      titleAccent: "un orologio unico.",
      description:
        "Seguite la creazione di un orologio LIDYA dal primo schizzo allo sviluppo tecnico, alla produzione e al montaggio, fino ai test, alla certificazione e alla consegna personale.",
      itemLabel: "Processo produttivo LIDYA",
      closingText: "Dietro ogni dettaglio c'è un processo.",
      closingAccent: "Dietro ogni orologio c'è una persona.",
      steps: [
        "Prima idea e schizzo a mano",
        "Disegno tecnico dettagliato",
        "Costruzione CAD / 3D",
        "Selezione del materiale",
        "Produzione della cassa",
        "Fresatura e lavorazione",
        "Levigatura e lucidatura manuale",
        "Produzione del quadrante",
        "Applicazione degli indici e del logo LIDYA",
        "Incastonatura dei diamanti dove prevista",
        "Produzione e controllo del movimento",
        "Assemblaggio manuale del movimento",
        "Montaggio delle lancette",
        "Inserimento del movimento nella cassa",
        "Montaggio del vetro zaffiro",
        "Montaggio della corona e delle guarnizioni",
        "Produzione e montaggio del bracciale",
        "Assemblaggio completo",
        "Regolazione della precisione",
        "Test di pressione e impermeabilità",
        "Controllo visivo sotto ingrandimento",
        "Lucidatura finale a mano",
        "Certificato e numero di serie",
        "Posizionamento nel box LIDYA di lusso",
        "Consegna personale al cliente",
      ],
    },

    craft: {
      eyebrow: "L'arte dell'orologeria su misura",
      title:
        "Un orologio personale nasce da precisione, pazienza e decisioni individuali",
      description:
        "L'orologeria su misura unisce design, ingegneria, materiali, produzione, finitura manuale e controllo qualità.",
      closingText: "L'artigianato dà forma all'orologio.",
      closingAccent: "La personalità gli dà significato.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Design",
          description:
            "L'idea iniziale evolve dallo schizzo manuale al disegno tecnico e alla precisa costruzione 3D.",
        },
        {
          title: "Produzione",
          description:
            "Cassa, quadrante e componenti vengono realizzati con lavorazioni precise e interventi manuali.",
        },
        {
          title: "Assemblaggio",
          description:
            "Movimento, lancette, vetro, corona e altri componenti vengono assemblati passo dopo passo.",
        },
        {
          title: "Controllo",
          description:
            "Regolazione, test di pressione, ispezione, lucidatura e certificazione completano il processo.",
        },
      ],
    },

    cta: {
      title: "Il vostro orologio può iniziare da una conversazione",
      sub:
        "Scoprite da LIDYA come un'idea personale può trasformarsi in un orologio su misura completo.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes a medida",
      title: "De la primera idea a",
      titleAccent: "un reloj creado para usted.",
      description:
        "Un reloj LIDYA a medida comienza mucho antes del ensamblaje. Desde el primer boceto y la construcción técnica hasta el mecanizado, acabado, regulación, control y entrega personal.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "Detrás de cada detalle hay un proceso.",
      statementAccent: "Detrás de cada reloj hay una persona.",
      imageAlt:
        "Inicio del proceso de creación de un reloj LIDYA a medida",
    },

    gallery: {
      eyebrow: "De la idea a la muñeca",
      title: "25 pasos hacia",
      titleAccent: "un reloj único.",
      description:
        "Siga la creación de un reloj LIDYA desde el primer boceto hasta el desarrollo técnico, fabricación, ensamblaje, pruebas, certificación y entrega personal.",
      itemLabel: "Proceso de fabricación LIDYA",
      closingText: "Detrás de cada detalle hay un proceso.",
      closingAccent: "Detrás de cada reloj hay una persona.",
      steps: [
        "Primera idea y boceto a mano",
        "Diseño técnico detallado",
        "Construcción CAD / 3D",
        "Selección del material",
        "Fabricación de la caja",
        "Fresado y mecanizado",
        "Lijado y pulido manual",
        "Fabricación de la esfera",
        "Aplicación de índices y logotipo LIDYA",
        "Engaste de diamantes cuando corresponda",
        "Fabricación y control del movimiento",
        "Montaje manual del movimiento",
        "Colocación de las agujas",
        "Inserción del movimiento en la caja",
        "Montaje del cristal de zafiro",
        "Montaje de corona y juntas",
        "Fabricación y montaje del brazalete",
        "Ensamblaje completo",
        "Regulación de precisión",
        "Prueba de presión y hermeticidad",
        "Control visual bajo aumento",
        "Pulido final a mano",
        "Certificado y número de serie",
        "Colocación en el estuche LIDYA de lujo",
        "Entrega personal al cliente",
      ],
    },

    craft: {
      eyebrow: "El arte de la relojería a medida",
      title:
        "Un reloj personal nace de precisión, paciencia y decisiones individuales",
      description:
        "La relojería a medida reúne diseño, ingeniería, materiales, fabricación, acabado manual y control de calidad.",
      closingText: "La artesanía da forma al reloj.",
      closingAccent: "La personalidad le da significado.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Diseño",
          description:
            "La idea inicial evoluciona desde un boceto manual hasta un diseño técnico y una construcción 3D precisa.",
        },
        {
          title: "Fabricación",
          description:
            "Caja, esfera y componentes se crean mediante mecanizado preciso y trabajo manual.",
        },
        {
          title: "Montaje",
          description:
            "Movimiento, agujas, cristal, corona y otros componentes se ensamblan paso a paso.",
        },
        {
          title: "Control",
          description:
            "Regulación, prueba de presión, inspección, pulido y certificación completan el proceso.",
        },
      ],
    },

    cta: {
      title: "Su reloj puede comenzar con una conversación",
      sub:
        "Descubra en LIDYA cómo una idea personal puede convertirse en un reloj completamente realizado a medida.",
    },
  },
};

/*
  Každý obrázok je tu vedome spárovaný
  s konkrétnym krokom výrobného procesu.

  stepIndex odkazuje na položku v copy.gallery.steps.

  Dva kroky nemajú samostatný obrázok:
  - stepIndex 13: vloženie strojčeka do puzdra
  - stepIndex 17: kompletné zostavenie

  bespoke-watch21.png zámerne NEPOUŽÍVAME.
*/
const BESPOKE_GALLERY_ITEMS = [
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch1.png",
    stepIndex: 0,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch2.png",
    stepIndex: 1,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch3.png",
    stepIndex: 2,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch4.png",
    stepIndex: 3,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch5.png",
    stepIndex: 4,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch6.png",
    stepIndex: 5,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch7.png",
    stepIndex: 6,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch8.png",
    stepIndex: 7,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch9.png",
    stepIndex: 8,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch10.png",
    stepIndex: 9,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch11.png",
    stepIndex: 10,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch12.png",
    stepIndex: 11,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch13.png",
    stepIndex: 12,
  },

  /*
    stepIndex 13:
    Vloženie strojčeka do puzdra

    Tento krok momentálne nemá samostatný obrázok.
  */

  {
    image:
      "/images/watches/bespoke-category/bespoke-watch14.png",
    stepIndex: 14,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch15.png",
    stepIndex: 15,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch16.png",
    stepIndex: 16,
  },

  /*
    stepIndex 17:
    Kompletné zostavenie

    Tento krok momentálne nemá samostatný obrázok.
  */

  {
    image:
      "/images/watches/bespoke-category/bespoke-watch17.png",
    stepIndex: 18,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch18.png",
    stepIndex: 19,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch19.png",
    stepIndex: 20,
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch20.png",
    stepIndex: 21,
  },

  /*
    bespoke-watch21.png
    ZÁMERNE VYNECHANÝ
  */

  {
    image:
      "/images/watches/bespoke-category/bespoke-watch22.png",
    stepIndex: 22,
  },

  /*
    Nový obrázok:
    Uloženie do luxusného LIDYA boxu
  */
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch24.png",
    stepIndex: 23,
  },

  /*
    Posledný krok:
    osobné odovzdanie zákazníkovi
  */
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch23.png",
    stepIndex: 24,
  },
];

function BespokeWatchIcon() {
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

      <path
        d="M34 10l5-5M35.5 5H39v3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BespokeWatchesHero({
  copy,
}: {
  copy: BespokeWatchesCopy["hero"];
}) {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const imageRef =
    useRef<HTMLDivElement | null>(null);

  const [loaded, setLoaded] =
    useState(false);

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

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    let frame: number | null = null;

    const update = () => {
      const rect =
        section.getBoundingClientRect();

      const viewport =
        window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewport - rect.top) /
            Math.max(
              viewport + rect.height,
              1
            )
        )
      );

      const translateY =
        (progress - 0.5) * 18;

      const scale =
        1.045 + progress * 0.012;

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

      frame =
        requestAnimationFrame(update);
    };

    update();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

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
          /*
            DOČASNÝ HERO.

            Keď neskôr pripravíš
            samostatný hero obrázok,
            zmeníme iba túto cestu.
          */
          src="/images/watches/bespoke-category/bespoke-watch1.png"
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

      {/* LEFT CINEMATIC SHADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#0D0710]/96
          via-[#160D18]/68
          to-[#160D18]/10
        "
      />

      {/* BOTTOM DEPTH */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0B070D]/96
          via-[#160D18]/12
          to-[#160D18]/18
        "
      />

      {/* SUBTLE GOLD LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_68%_37%,rgba(213,176,95,0.12)_0%,rgba(213,176,95,0.025)_30%,transparent_58%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[960px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#D5B05F]
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
              <BespokeWatchIcon />
            </span>

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[1040px]
              font-display
              text-[3.05rem]
              leading-[0.94]
              tracking-[-0.04em]
              sm:text-[3.9rem]
              md:text-[5.15rem]
              lg:text-[6rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  !text-[#FAF7F2]
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
                  !text-[#D5B05F]
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
            <p className="max-w-[720px] text-sm leading-7 !text-white/75 md:text-base">
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D5B05F]" />

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
              max-w-[1120px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              !text-[#FAF7F2]
              md:text-4xl
              lg:text-5xl
            "
          >
            {copy.statementBefore}{" "}

            <span className="!text-[#D5B05F]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function BespokeWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    BESPOKE_WATCHES_COPY[locale] ??
    BESPOKE_WATCHES_COPY.en;

  /*
    Tu už NEPÁRUJEME obrázky podľa ich
    jednoduchého poradia.

    Každý obrázok má vlastný stepIndex,
    takže caption vždy zodpovedá tomu,
    čo je reálne na fotografii.
  */
  const galleryItems =
    BESPOKE_GALLERY_ITEMS.map(
      ({ image, stepIndex }) => {
        const step =
          copy.gallery.steps[
            stepIndex
          ] ??
          BESPOKE_WATCHES_COPY.en
            .gallery.steps[
              stepIndex
            ] ??
          "";

        return {
          image,

          /*
            Bez číslovania.
            Zobrazí sa iba názov kroku.
          */
          caption: step,

          alt: `${copy.gallery.itemLabel} — ${step}`,
        };
      }
    );

  return (
    <>
      <Header />

      <main>
        <BespokeWatchesHero
          copy={copy.hero}
        />

        <CategoryGallery
          icon={<BespokeWatchIcon />}
          eyebrow={
            copy.gallery.eyebrow
          }
          title={copy.gallery.title}
          titleAccent={
            copy.gallery.titleAccent
          }
          description={
            copy.gallery.description
          }
          itemLabel={
            copy.gallery.itemLabel
          }
          closingText={
            copy.gallery.closingText
          }
          closingAccent={
            copy.gallery.closingAccent
          }
          items={galleryItems}
        />

        <CategoryCraft
          eyebrow={
            copy.craft.eyebrow
          }
          title={copy.craft.title}
          description={
            copy.craft.description
          }
          points={copy.craft.points}
          closingText={
            copy.craft.closingText
          }
          closingAccent={
            copy.craft.closingAccent
          }
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