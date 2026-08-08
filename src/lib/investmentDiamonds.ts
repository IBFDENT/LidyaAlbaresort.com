import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

export type ValuePoint = {
  title: LocalizedText;
  description: LocalizedText;
  /** Supporting infographic image — currently English-only (text is baked into
   *  the graphic itself). See note in diamonds/page.tsx for the i18n caveat. */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
};

// ---------------------------------------------------------------------------
// Section headers
// ---------------------------------------------------------------------------

export const DIAMONDS_TEXT: Record<string, LocalizedText> = {
  heroEyebrow: {
    de: "Investmentdiamanten",
    en: "Investment Diamonds",
    tr: "Yatırımlık Pırlantalar",
    sk: "Investičné diamanty",
    cs: "Investiční diamanty",
    hu: "Befektetési gyémántok",
    pl: "Diamenty inwestycyjne",
  },
  heroTitle: {
    de: "Wie sich der Wert eines Diamanten bestimmt",
    en: "How a Diamond's Value Is Determined",
    tr: "Bir Pırlantanın Değeri Nasıl Belirlenir",
    sk: "Ako sa určuje hodnota diamantu",
    cs: "Jak se určuje hodnota diamantu",
    hu: "Hogyan határozzák meg egy gyémánt értékét",
    pl: "Jak określa się wartość diamentu",
  },
  heroLead: {
    de: "Der Wert eines Diamanten ergibt sich aus den vier C und mehreren weiteren Faktoren. Jeder Stein, den wir anbieten, ist unabhängig zertifiziert — als Schmuckstück getragen oder lose als private, portable Wertanlage gehalten.",
    en: "A diamond's value is shaped by the Four Cs plus several additional factors. Every stone we offer is independently certified — worn as jewellery, or held loose as a private, portable store of value.",
    tr: "Bir pırlantanın değeri Dört C ve birkaç ek faktörle belirlenir. Sunduğumuz her taş bağımsız olarak sertifikalandırılmıştır — takı olarak takılabilir ya da özel, taşınabilir bir değer saklama aracı olarak tutulabilir.",
    sk: "Hodnota diamantu je daná kombináciou 4C a niekoľkých ďalších faktorov. Každý kameň, ktorý ponúkame, je nezávisle certifikovaný — nosený ako šperk, alebo držaný voľne ako súkromná, prenosná úschova hodnoty.",
    cs: "Hodnota diamantu je daná kombinací 4C a několika dalších faktorů. Každý kámen, který nabízíme, je nezávisle certifikovaný — nošený jako šperk, nebo držený volně jako soukromá, přenosná úschova hodnoty.",
    hu: "Egy gyémánt értékét a Négy C és több további tényező alakítja. Minden általunk kínált kő független tanúsítvánnyal rendelkezik — ékszerként viselhető, vagy foglalatlanul, magánjellegű, hordozható értékmegőrzőként tartható.",
    pl: "Wartość diamentu wyznaczają Cztery C oraz kilka dodatkowych czynników. Każdy oferowany przez nas kamień posiada niezależny certyfikat — noszony jako biżuteria lub przechowywany luzem jako prywatna, przenośna forma lokaty wartości.",
  },

  fourCsEyebrow: {
    de: "Die vier C",
    en: "The Four Cs",
    tr: "Dört C",
    sk: "4C",
    cs: "4C",
    hu: "A négy C",
    pl: "Cztery C",
  },
  fourCsTitle: {
    de: "Die grundlegenden Kriterien zur Bewertung eines Diamanten",
    en: "The Basic Criteria for Valuing a Diamond",
    tr: "Bir Pırlantayı Değerlendirmenin Temel Kriterleri",
    sk: "Základné kritériá hodnotenia diamantu",
    cs: "Základní kritéria hodnocení diamantu",
    hu: "A gyémánt értékelésének alapkritériumai",
    pl: "Podstawowe kryteria oceny diamentu",
  },

  beyondEyebrow: {
    de: "Über die vier C hinaus",
    en: "Beyond the Four Cs",
    tr: "Dört C'nin Ötesinde",
    sk: "Ďalšie faktory",
    cs: "Další faktory",
    hu: "A négy C-n túl",
    pl: "Poza czterema C",
  },
  beyondTitle: {
    de: "Weitere Faktoren, die den Wert beeinflussen",
    en: "Additional Factors That Influence Value",
    tr: "Değeri Etkileyen Ek Faktörler",
    sk: "Ďalšie faktory ovplyvňujúce hodnotu diamantu",
    cs: "Další faktory ovlivňující hodnotu diamantu",
    hu: "A gyémánt értékét befolyásoló további tényezők",
    pl: "Dodatkowe czynniki wpływające na wartość",
  },

  principlesEyebrow: {
    de: "Investitionsprinzipien",
    en: "Investment Principles",
    tr: "Yatırım İlkeleri",
    sk: "Investičné princípy",
    cs: "Investiční principy",
    hu: "Befektetési alapelvek",
    pl: "Zasady inwestowania",
  },
  principlesTitle: {
    de: "Worauf es bei Investmentdiamanten ankommt",
    en: "What Matters Most for Investment Diamonds",
    tr: "Yatırımlık Pırlantalarda En Önemli Nokta",
    sk: "Čo je dôležité pri investičných diamantoch",
    cs: "Co je důležité u investičních diamantů",
    hu: "Mi számít a legtöbbet a befektetési gyémántoknál",
    pl: "Co jest najważniejsze w diamentach inwestycyjnych",
  },

  ctaTitle: {
    de: "Sprechen Sie mit uns über Investmentdiamanten",
    en: "Speak With Us About Investment Diamonds",
    tr: "Yatırımlık Pırlantalar Hakkında Bizimle Konuşun",
    sk: "Porozprávajte sa s nami o investičných diamantoch",
    cs: "Promluvte si s námi o investičních diamantech",
    hu: "Beszéljen velünk a befektetési gyémántokról",
    pl: "Porozmawiaj z nami o diamentach inwestycyjnych",
  },
  ctaSub: {
    de: "Jeder Stein, den wir anbieten, ist unabhängig zertifiziert. Vereinbaren Sie einen privaten Termin, um aktuelle Verfügbarkeit, Zertifizierung und Preise zu besprechen.",
    en: "Every stone we offer is independently certified. Book a private appointment to discuss current availability, certification and pricing.",
    tr: "Sunduğumuz her taş bağımsız olarak sertifikalandırılmıştır. Mevcut stok, sertifikasyon ve fiyatlandırmayı görüşmek için özel bir randevu alın.",
    sk: "Každý kameň, ktorý ponúkame, je nezávisle certifikovaný. Dohodnite si súkromné stretnutie, kde prebereme aktuálnu dostupnosť, certifikáciu a cenu.",
    cs: "Každý kámen, který nabízíme, je nezávisle certifikovaný. Domluvte si soukromou schůzku, kde probereme aktuální dostupnost, certifikaci a cenu.",
    hu: "Minden általunk kínált kő független tanúsítvánnyal rendelkezik. Foglaljon privát időpontot az aktuális elérhetőség, tanúsítás és árazás megbeszéléséhez.",
    pl: "Każdy oferowany przez nas kamień posiada niezależny certyfikat. Umów się na prywatne spotkanie, aby omówić dostępność, certyfikację i cenę.",
  },
};

// ---------------------------------------------------------------------------
// The Four Cs
// ---------------------------------------------------------------------------

export const FOUR_CS: ValuePoint[] = [
  {
    title: {
      de: "Karat (Gewicht)",
      en: "Carat (Weight)",
      tr: "Karat (Ağırlık)",
      sk: "Karát (váha)",
      cs: "Karát (váha)",
      hu: "Karát (súly)",
      pl: "Karat (waga)",
    },
    description: {
      de: "Das Gewicht ist der wichtigste Preisfaktor. Mit steigendem Gewicht steigt der Preis exponentiell, nicht linear.",
      en: "Weight is the single most significant factor affecting price. Value rises exponentially, not linearly, as carat weight increases.",
      tr: "Ağırlık, fiyatı etkileyen en önemli faktördür. Karat arttıkça değer doğrusal değil, katlanarak artar.",
      sk: "Váha je najdôležitejším faktorom ovplyvňujúcim cenu. S rastúcou váhou rastie cena exponenciálne, nie lineárne.",
      cs: "Váha je nejdůležitějším faktorem ovlivňujícím cenu. S rostoucí váhou roste cena exponenciálně, nikoli lineárně.",
      hu: "A súly a legfontosabb tényező, amely befolyásolja az árat. Az érték exponenciálisan, nem lineárisan nő a karátsúllyal.",
      pl: "Waga to najważniejszy czynnik wpływający na cenę. Wartość rośnie wykładniczo, a nie liniowo wraz z wagą w karatach.",
    },
  },
  {
    title: {
      de: "Farbe",
      en: "Colour",
      tr: "Renk",
      sk: "Farba",
      cs: "Barva",
      hu: "Szín",
      pl: "Kolor",
    },
    description: {
      de: "Fehlende Farbe bedeutet höheren Wert. Diamanten der Stufen D–F sind farblos und am begehrtesten; jede Stufe darunter zeigt einen sichtbaren Farbstich.",
      en: "Absence of colour means higher value. Diamonds graded D–F are colourless and most sought after; each grade down reveals a visible tint.",
      tr: "Renksizlik daha yüksek değer demektir. D–F derecelendirilen pırlantalar renksizdir ve en çok aranılanlardır; her alt derece görünür bir ton içerir.",
      sk: "Absencia farby znamená vyššiu hodnotu. Diamanty v stupňoch D–F sú bezfarebné a najžiadanejšie; s každým ďalším stupňom je viditeľný nádych farby.",
      cs: "Absence barvy znamená vyšší hodnotu. Diamanty ve stupních D–F jsou bezbarvé a nejžádanější; s každým dalším stupněm je vidět nádech barvy.",
      hu: "A szín hiánya magasabb értéket jelent. A D–F fokozatú gyémántok színtelenek és a legkeresettebbek; minden lejjebbi fokozat látható árnyalatot mutat.",
      pl: "Brak koloru oznacza wyższą wartość. Diamenty w skali D–F są bezbarwne i najbardziej pożądane; każdy niższy stopień ujawnia widoczny odcień.",
    },
  },
  {
    title: {
      de: "Reinheit",
      en: "Clarity",
      tr: "Berraklık",
      sk: "Čistota",
      cs: "Čistota",
      hu: "Tisztaság",
      pl: "Czystość",
    },
    description: {
      de: "Die Menge und Größe innerer und äußerer Merkmale. Je weniger Einschlüsse, desto seltener und wertvoller; die Reinheit wird bei 10-facher Vergrößerung bewertet.",
      en: "The amount and size of internal and surface characteristics. The fewer the inclusions, the rarer and more valuable the stone; clarity is graded under 10x magnification.",
      tr: "İç ve yüzey özelliklerinin miktarı ve boyutu. İnklüzyon ne kadar azsa taş o kadar nadir ve değerlidir; berraklık 10x büyütme altında derecelendirilir.",
      sk: "Množstvo a veľkosť vnútorných a povrchových chýb. Čím menej inklúzií diamant má, tým je vzácnejší a hodnotnejší; čistota sa hodnotí pri 10-násobnom zväčšení.",
      cs: "Množství a velikost vnitřních a povrchových znaků. Čím méně inkluzí diamant má, tím je vzácnější a hodnotnější; čistota se hodnotí při 10násobném zvětšení.",
      hu: "A belső és felületi jellemzők mennyisége és mérete. Minél kevesebb a zárvány, annál ritkább és értékesebb a kő; a tisztaságot 10x-es nagyítás alatt osztályozzák.",
      pl: "Ilość i wielkość cech wewnętrznych i powierzchniowych. Im mniej inkluzji, tym kamień rzadszy i cenniejszy; czystość ocenia się pod 10-krotnym powiększeniem.",
    },
  },
  {
    title: {
      de: "Schliff",
      en: "Cut",
      tr: "Kesim",
      sk: "Brus",
      cs: "Brus",
      hu: "Csiszolás",
      pl: "Szlif",
    },
    description: {
      de: "Die Qualität des Schliffs bestimmt Brillanz und Feuer. Es ist das einzige C, das vollständig von Menschenhand geformt wird — ein idealer Schliff maximiert Lichtreflexion und Funkeln.",
      en: "The quality of the cut determines a diamond's brilliance and sparkle. It is the only C shaped entirely by human skill — an ideal cut maximises light return, fire and scintillation.",
      tr: "Kesim kalitesi, pırlantanın parlaklığını ve ışıltısını belirler. Tamamen insan becerisiyle şekillenen tek C'dir — ideal bir kesim ışık yansımasını, ateşi ve parıltıyı en üst düzeye çıkarır.",
      sk: "Kvalita brusu ovplyvňuje lesk a trblietanie diamantu. Je to jediné C, ktoré je celé v rukách človeka — ideálny brus maximalizuje lesk, oheň a scintiláciu (iskru).",
      cs: "Kvalita brusu ovlivňuje lesk a třpyt diamantu. Je to jediné C, které je zcela v rukou člověka — ideální brus maximalizuje lesk, oheň a scintilaci.",
      hu: "A csiszolás minősége határozza meg a gyémánt ragyogását és csillogását. Ez az egyetlen C, amelyet teljes egészében emberi kéz alakít — az ideális csiszolás maximalizálja a fényvisszaverést és a csillogást.",
      pl: "Jakość szlifu decyduje o blasku i skrzeniu diamentu. To jedyne C w pełni ukształtowane ludzką ręką — idealny szlif maksymalizuje odbicie światła i ogień.",
    },
  },
];

export const FOUR_CS_IMAGES: {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}[] = [
  {
    image: "/images/diamonds/four-cs/carat.jpg",
    imageWidth: 1075,
    imageHeight: 1005,
    imageAlt:
      "Diamond carat weight comparison chart, 0.25ct to 5.00ct",
  },
  {
    image: "/images/diamonds/four-cs/colour.jpg",
    imageWidth: 1046,
    imageHeight: 1004,
    imageAlt:
      "Diamond colour grading scale from D (colourless) to I (light yellow)",
  },
  {
    image: "/images/diamonds/four-cs/clarity.jpg",
    imageWidth: 1063,
    imageHeight: 781,
    imageAlt:
      "Diamond clarity grading scale from Flawless to Included",
  },
  {
    image: "/images/diamonds/four-cs/cut.jpg",
    imageWidth: 1206,
    imageHeight: 845,
    imageAlt:
      "Diamond cut grading scale from Excellent to Poor, showing light performance",
  },
];

// ---------------------------------------------------------------------------
// Beyond the Four Cs
// ---------------------------------------------------------------------------

export const BEYOND_FOUR_CS: ValuePoint[] = [
  {
    title: {
      de: "Fluoreszenz",
      en: "Fluorescence",
      tr: "Floresans",
      sk: "Fluorescencia",
      cs: "Fluorescence",
      hu: "Fluoreszcencia",
      pl: "Fluorescencja",
    },
    description: {
      de: "Manche Diamanten leuchten unter UV-Licht blau. Geringe bis keine Fluoreszenz ist in der Regel am begehrtesten.",
      en: "Some diamonds glow blue under UV light. Little to no fluorescence is generally the most desirable and valuable.",
      tr: "Bazı pırlantalar UV ışık altında mavi parlar. Genellikle az ya da hiç floresans olmaması en çok tercih edilendir.",
      sk: "Niektoré diamanty žiaria pod UV svetlom modro. Slabá až žiadna fluorescencia je najžiadanejšia.",
      cs: "Některé diamanty září pod UV světlem modře. Slabá až žádná fluorescence je nejžádanější.",
      hu: "Egyes gyémántok kék fénnyel világítanak UV fény alatt. Általában a gyenge vagy nulla fluoreszcencia a legkívánatosabb.",
      pl: "Niektóre diamenty świecą na niebiesko pod światłem UV. Słaba lub żadna fluorescencja jest zwykle najbardziej pożądana.",
    },
  },
  {
    title: {
      de: "Form (Fancy Shape)",
      en: "Shape (Fancy Cuts)",
      tr: "Şekil (Fantezi Kesimler)",
      sk: "Tvar (Fancy Shape)",
      cs: "Tvar (Fancy Shape)",
      hu: "Forma (Fancy csiszolás)",
      pl: "Kształt (fancy cut)",
    },
    description: {
      de: "Runde Diamanten sind am wertvollsten. Fancy-Formen können mehr sichtbare Größe fürs Geld bieten, doch die Preisbildung hängt stark von der Nachfrage ab.",
      en: "Round brilliants are the most valuable shape. Fancy shapes can offer more visible size for the price, but pricing depends heavily on demand.",
      tr: "Yuvarlak pırlantalar en değerli şekildir. Fantezi kesimler fiyata göre daha büyük görünebilir, ancak fiyatlandırma büyük ölçüde talebe bağlıdır.",
      sk: "Okrúhle diamanty sú najvzácnejšie. Fancy tvary môžu mať nižšiu cenu za karát, ale záleží najmä na dopyte.",
      cs: "Kulaté diamanty jsou nejvzácnější. Fancy tvary mohou mít nižší cenu za karát, ale hodně záleží na poptávce.",
      hu: "A kerek briliánsok a legértékesebb formák. A fancy formák nagyobb látható méretet kínálhatnak az árhoz képest, de az árazás erősen a kereslettől függ.",
      pl: "Okrągły brylant to najcenniejszy kształt. Fancy cuty mogą oferować większy widoczny rozmiar za cenę, ale wycena mocno zależy od popytu.",
    },
  },
  {
    title: {
      de: "Symmetrie & Politur",
      en: "Symmetry & Polish",
      tr: "Simetri ve Parlatma",
      sk: "Symetria a polírovanie",
      cs: "Symetrie a leštění",
      hu: "Szimmetria és polírozás",
      pl: "Symetria i polerowanie",
    },
    description: {
      de: "Hohe Symmetrie und feine Politur verbessern den Lichtdurchgang durch den Stein und steigern Brillanz und Wert.",
      en: "High symmetry and fine polish improve how light travels through a stone, increasing brilliance and overall value.",
      tr: "Yüksek simetri ve ince parlatma, ışığın taş içinden geçişini iyileştirerek parlaklığı ve genel değeri artırır.",
      sk: "Vysoká symetria a leštenie zlepšujú prechod svetla diamantom, čo zvyšuje jeho briliancu a hodnotu.",
      cs: "Vysoká symetrie a leštění zlepšují průchod světla diamantem, což zvyšuje jeho brilanci a hodnotu.",
      hu: "A magas fokú szimmetria és a finom polírozás javítja a fény áthaladását a kövön, növelve a ragyogást és az összértéket.",
      pl: "Wysoka symetria i staranne polerowanie poprawiają przenikanie światła przez kamień, zwiększając jego blask i wartość.",
    },
  },
  {
    title: {
      de: "Zertifikat",
      en: "Certificate",
      tr: "Sertifika",
      sk: "Certifikát",
      cs: "Certifikát",
      hu: "Tanúsítvány",
      pl: "Certyfikat",
    },
    description: {
      de: "Ein Diamant mit Zertifikat eines anerkannten Labors (GIA, HRD, IGI) genießt höheres Vertrauen und einen stärkeren Wiederverkaufswert.",
      en: "A diamond certified by a recognised laboratory — GIA, HRD or IGI — carries higher trust and stronger resale value.",
      tr: "Tanınmış bir laboratuvar (GIA, HRD veya IGI) tarafından sertifikalandırılmış bir pırlanta, daha yüksek güven ve daha güçlü yeniden satış değeri taşır.",
      sk: "Diamant s certifikátom od uznávaných laboratórií (GIA, HRD, IGI) má vyššiu dôveryhodnosť a hodnotu.",
      cs: "Diamant s certifikátem od uznávaných laboratoří (GIA, HRD, IGI) má vyšší důvěryhodnost a hodnotu.",
      hu: "Az elismert laboratórium — GIA, HRD vagy IGI — által tanúsított gyémánt nagyobb bizalmat és erősebb viszonteladási értéket képvisel.",
      pl: "Diament certyfikowany przez uznane laboratorium — GIA, HRD lub IGI — cieszy się większym zaufaniem i wyższą wartością odsprzedaży.",
    },
  },
  {
    title: {
      de: "Herkunft",
      en: "Origin",
      tr: "Menşei",
      sk: "Pôvod diamantu",
      cs: "Původ diamantu",
      hu: "Származási hely",
      pl: "Pochodzenie",
    },
    description: {
      de: "Die Herkunft (z. B. Kanada, Botswana, Russland) kann den wahrgenommenen Wert und die Rückverfolgbarkeit beeinflussen, besonders bei größeren, hochwertigen Steinen.",
      en: "Provenance can affect perceived value and traceability, particularly for larger and higher-value stones.",
      tr: "Menşei, özellikle daha büyük ve yüksek değerli taşlarda algılanan değeri ve izlenebilirliği etkileyebilir.",
      sk: "Pôvod (napr. Kanada, Botswana, Rusko) môže ovplyvniť vnímanú hodnotu a atraktivitu, najmä pri väčších kameňoch.",
      cs: "Původ (např. Kanada, Botswana, Rusko) může ovlivnit vnímanou hodnotu a atraktivitu, zejména u větších kamenů.",
      hu: "A származási hely (pl. Kanada, Botswana, Oroszország) befolyásolhatja az érzékelt értéket és a nyomon követhetőséget, különösen a nagyobb, értékesebb köveknél.",
      pl: "Pochodzenie (np. Kanada, Botswana, Rosja) może wpływać na postrzeganą wartość i identyfikowalność, zwłaszcza w przypadku większych kamieni.",
    },
  },
];

export const BEYOND_FOUR_CS_IMAGES: {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}[] = [
  {
    image: "/images/diamonds/beyond/fluorescence.jpg",
    imageWidth: 1102,
    imageHeight: 702,
    imageAlt:
      "Diamond fluorescence levels under UV light, from none to very strong",
  },
  {
    image: "/images/diamonds/beyond/shape.jpg",
    imageWidth: 1097,
    imageHeight: 887,
    imageAlt:
      "Round brilliant diamond compared to fancy shapes: oval, cushion, radiant, emerald, pear, marquise",
  },
  {
    image: "/images/diamonds/beyond/symmetry-polish.jpg",
    imageWidth: 1090,
    imageHeight: 812,
    imageAlt:
      "Comparison of excellent versus poor diamond symmetry and polish, and their effect on light return",
  },
  {
    image: "/images/diamonds/beyond/certificate.jpg",
    imageWidth: 1176,
    imageHeight: 778,
    imageAlt:
      "Sample diamond grading certificates from GIA, HRD Antwerp and IGI",
  },
  {
    image: "/images/diamonds/beyond/origin.jpg",
    imageWidth: 1166,
    imageHeight: 806,
    imageAlt:
      "A diamond's journey from ethical sourcing through cutting, certification and transport to final ownership",
  },
];

// ---------------------------------------------------------------------------
// Investment principles
// ---------------------------------------------------------------------------

export const INVESTMENT_PRINCIPLES: ValuePoint[] = [
  {
    title: {
      de: "Hohe Qualität",
      en: "High Quality",
      tr: "Yüksek Kalite",
      sk: "Vysoká kvalita",
      cs: "Vysoká kvalita",
      hu: "Magas minőség",
      pl: "Wysoka jakość",
    },
    description: {
      de: "Achten Sie auf Diamanten mit Farbe D–F, Reinheit IF–VVS1 und Schliffbewertung Excellent.",
      en: "Focus on diamonds with D–F colour, IF–VVS1 clarity, and an Excellent cut grade.",
      tr: "D–F renk, IF–VVS1 berraklık ve Excellent kesim derecesine sahip pırlantalara odaklanın.",
      sk: "Zamerajte sa na diamanty s parametrami D–F (farba), IF–VVS1 (čistota) a Excellent (brus).",
      cs: "Zaměřte se na diamanty s parametry D–F (barva), IF–VVS1 (čistota) a Excellent (brus).",
      hu: "Koncentráljon a D–F színű, IF–VVS1 tisztaságú, Excellent csiszolású gyémántokra.",
      pl: "Wybieraj diamenty o kolorze D–F, czystości IF–VVS1 i szlifie ocenionym jako Excellent.",
    },
  },
  {
    title: {
      de: "Größere Karatgewichte",
      en: "Larger Carat Weights",
      tr: "Daha Büyük Karat Ağırlıkları",
      sk: "Väčšie karátové váhy",
      cs: "Větší karátové váhy",
      hu: "Nagyobb karátsúly",
      pl: "Większa waga w karatach",
    },
    description: {
      de: "Diamanten ab 1 Karat halten ihren Wert tendenziell besser, insbesondere ab 3 Karat.",
      en: "Diamonds of 1 carat and above tend to hold their value better, especially above 3 carats.",
      tr: "1 karat ve üzeri pırlantalar değerlerini daha iyi korur, özellikle 3 karatın üzerinde.",
      sk: "Diamanty od 1 ct a viac si držia hodnotu lepšie, najmä nad 3 ct.",
      cs: "Diamanty od 1 ct a více si drží hodnotu lépe, zejména nad 3 ct.",
      hu: "Az 1 karátos és afeletti gyémántok jobban megőrzik értéküket, különösen 3 karát felett.",
      pl: "Diamenty od 1 karata wzwyż lepiej utrzymują wartość, zwłaszcza powyżej 3 karatów.",
    },
  },
  {
    title: {
      de: "Zertifizierung & Nachweisbarkeit",
      en: "Certification & Verifiability",
      tr: "Sertifikasyon ve Doğrulanabilirlik",
      sk: "Certifikát a overiteľnosť",
      cs: "Certifikát a ověřitelnost",
      hu: "Tanúsítás és ellenőrizhetőség",
      pl: "Certyfikacja i weryfikowalność",
    },
    description: {
      de: "Kaufen Sie stets Diamanten mit international anerkanntem Zertifikat.",
      en: "Always buy diamonds with an internationally recognised certificate.",
      tr: "Her zaman uluslararası tanınan bir sertifikaya sahip pırlantalar satın alın.",
      sk: "Vždy kupujte diamanty s medzinárodným certifikátom od renomovaných laboratórií.",
      cs: "Vždy kupujte diamanty s mezinárodním certifikátem od renomovaných laboratoří.",
      hu: "Mindig nemzetközileg elismert tanúsítvánnyal rendelkező gyémántot vásároljon.",
      pl: "Zawsze kupuj diamenty z uznawanym międzynarodowo certyfikatem.",
    },
  },
  {
    title: {
      de: "Liquidität",
      en: "Liquidity",
      tr: "Likidite",
      sk: "Likvidita",
      cs: "Likvidita",
      hu: "Likviditás",
      pl: "Płynność",
    },
    description: {
      de: "Runde Diamanten hervorragender Qualität lassen sich auf dem globalen Markt am leichtesten wiederverkaufen.",
      en: "Round diamonds of outstanding quality are the easiest to resell on the global market.",
      tr: "Üstün kaliteli yuvarlak pırlantalar, küresel piyasada yeniden satılması en kolay olanlardır.",
      sk: "Okrúhle diamanty s vynikajúcou kvalitou sú najľahšie predajné na globálnom trhu.",
      cs: "Kulaté diamanty s vynikající kvalitou se nejsnáze prodávají na globálním trhu.",
      hu: "A kiváló minőségű kerek gyémántok a legkönnyebben eladhatók a globális piacon.",
      pl: "Okrągłe diamenty o doskonałej jakości najłatwiej odsprzedać na globalnym rynku.",
    },
  },
];

export const INVESTMENT_PRINCIPLES_IMAGES: {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}[] = [
  {
    image: "/images/diamonds/principles/high-quality.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Focus on excellence: D–F colour, IF–VVS1 clarity, Excellent cut",
  },
  {
    image: "/images/diamonds/principles/carat-weight.jpg",
    imageWidth: 1090,
    imageHeight: 812,
    imageAlt:
      "Diamond size guide and value retention versus carat weight chart",
  },
  {
    image: "/images/diamonds/principles/certification.jpg",
    imageWidth: 947,
    imageHeight: 766,
    imageAlt:
      "Why certification matters: independent, trusted, globally recognised, better resale value",
  },
  {
    image: "/images/diamonds/principles/liquidity.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Why round diamonds of outstanding quality are easier to resell on the global market",
  },
];

// ---------------------------------------------------------------------------
// Summary strip
// ---------------------------------------------------------------------------

export const SUMMARY_POINTS: LocalizedText[] = [
  {
    de: "Diamantwert = 4C + weitere Faktoren",
    en: "Diamond value = the 4Cs + additional factors",
    tr: "Pırlanta değeri = 4C + ek faktörler",
    sk: "Hodnota diamantu = 4C + ďalšie faktory",
    cs: "Hodnota diamantu = 4C + další faktory",
    hu: "A gyémánt értéke = 4C + további tényezők",
    pl: "Wartość diamentu = 4C + dodatkowe czynniki",
  },
  {
    de: "Beste Investition = hohe Qualität + größeres Gewicht",
    en: "The best investment = high quality + larger weight",
    tr: "En iyi yatırım = yüksek kalite + daha büyük ağırlık",
    sk: "Najlepšia investícia = vysoká kvalita a väčšia váha",
    cs: "Nejlepší investice = vysoká kvalita a větší váha",
    hu: "A legjobb befektetés = magas minőség + nagyobb súly",
    pl: "Najlepsza inwestycja = wysoka jakość + większa waga",
  },
  {
    de: "Ein Zertifikat garantiert Echtheit und Wert",
    en: "A certificate guarantees authenticity and value",
    tr: "Bir sertifika özgünlüğü ve değeri garanti eder",
    sk: "Certifikát je zárukou pravosti a hodnoty",
    cs: "Certifikát je zárukou pravosti a hodnoty",
    hu: "A tanúsítvány garantálja a hitelességet és az értéket",
    pl: "Certyfikat gwarantuje autentyczność i wartość",
  },
  {
    de: "Der Diamantmarkt ist global und stabil",
    en: "The diamond market is global and stable",
    tr: "Pırlanta piyasası küreseldir ve istikrarlıdır",
    sk: "Trh s diamantmi je globálny a stabilný",
    cs: "Trh s diamanty je globální a stabilní",
    hu: "A gyémántpiac globális és stabil",
    pl: "Rynek diamentów jest globalny i stabilny",
  },
  {
    de: "Diamanten sind ein greifbarer, langfristiger Vermögenswert",
    en: "Diamonds are a tangible, long-term asset",
    tr: "Pırlantalar somut, uzun vadeli bir varlıktır",
    sk: "Diamanty sú hmatateľné aktívum s dlhodobou hodnotou",
    cs: "Diamanty jsou hmatatelné aktivum s dlouhodobou hodnotou",
    hu: "A gyémántok kézzelfogható, hosszú távú eszközök",
    pl: "Diamenty to namacalny, długoterminowy aktyw",
  },
];