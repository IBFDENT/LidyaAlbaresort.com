"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import PearlsCinematicHero from "@/components/category/PearlsCinematicHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { PearlIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type PearlsCopy = {
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

const PEARLS_COPY: Record<Locale, PearlsCopy> = {
  en: {
    gallery: {
      eyebrow: "The Pearl Collection",
      title: "Pearls chosen for",
      titleAccent: "their quiet beauty.",
      description:
        "From classic strands to contemporary pearl jewellery, every piece is selected for lustre, harmony and the natural character that makes each pearl unique.",
      itemLabel: "Pearl Collection",
      closingText: "Formed slowly by nature.",
      closingAccent: "Chosen carefully by hand.",
      captions: [
        "Strand Necklace",
        "Pearl Pendant",
        "Pendant Detail",
        "Pearl Bracelet",
        "Adjustable Bracelet",
        "Drop Earrings",
        "Stud Earrings",
        "Pearl Bangle",
        "Clasp Detail",
        "Pearl Ring",
      ],
      alts: [
        "Pearl strand necklace with a diamond-set gold clasp",
        "Single pearl pendant with a diamond accent on a gold chain",
        "Pearl and diamond pendant resting on natural stone",
        "Pearl bracelet with a pavé gold and diamond bead",
        "Pearl bracelet with an adjustable gold chain clasp",
        "Pearl drop earrings on diamond-set gold hoops",
        "Pearl stud earrings with a diamond accent",
        "Gold bangle with a pearl and diamond charm",
        "Close view of a pearl necklace's diamond-set clasp",
        "Pearl ring with diamond-set leaf motifs in gold",
      ],
    },

    craft: {
      eyebrow: "The Beauty Is in the Detail",
      title: "What gives a fine pearl its unmistakable presence",
      description:
        "The beauty of a pearl is revealed through light, surface, colour and balance. Each detail contributes to the character of the finished piece.",
      closingText: "A natural jewel.",
      closingAccent: "Refined by careful selection.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Lustre",
          description:
            "A fine pearl seems to glow from within. Its surface reflects light with clarity and depth, creating the luminous presence that makes exceptional pearls immediately recognisable.",
        },
        {
          title: "Orient",
          description:
            "Beneath the surface, the finest pearls reveal subtle overtones of rose, silver, cream and green. This delicate play of colour gives every pearl its own individual character.",
        },
        {
          title: "Nacre",
          description:
            "Layer upon layer of nacre creates the depth, softness and lasting beauty of a pearl. Rich nacre gives a pearl the radiance that continues to reveal itself over time.",
        },
        {
          title: "Harmony",
          description:
            "A beautiful strand is never assembled by numbers alone. Pearls are carefully brought together for balance of size, colour, shape and lustre, so the finished piece feels naturally complete.",
        },
      ],
    },

    cta: {
      title: "Discover the beauty of pearls in person",
      sub:
        "Pearls reveal their true character in movement and light. Visit us privately and experience their lustre, colour and individuality for yourself.",
    },
  },

  de: {
    gallery: {
      eyebrow: "Die Perlenkollektion",
      title: "Perlen ausgewählt für",
      titleAccent: "ihre stille Schönheit.",
      description:
        "Von klassischen Perlenketten bis zu modernen Schmuckstücken wird jede Kreation nach Lüster, Harmonie und dem natürlichen Charakter ausgewählt, der jede Perle einzigartig macht.",
      itemLabel: "Perlenkollektion",
      closingText: "Langsam von der Natur geformt.",
      closingAccent: "Sorgfältig von Hand ausgewählt.",
      captions: [
        "Perlenkette",
        "Perlenanhänger",
        "Anhänger-Detail",
        "Perlenarmband",
        "Verstellbares Armband",
        "Tropfenohrringe",
        "Ohrstecker",
        "Perlenreif",
        "Verschluss-Detail",
        "Perlenring",
      ],
      alts: [
        "Perlenkette mit diamantbesetztem Goldverschluss",
        "Einzelner Perlenanhänger mit Diamantakzent an einer Goldkette",
        "Perlen- und Diamantanhänger auf Naturstein",
        "Perlenarmband mit pavébesetzter Gold- und Diamantkugel",
        "Perlenarmband mit verstellbarem Goldkettenverschluss",
        "Perlen-Tropfenohrringe an diamantbesetzten Goldcreolen",
        "Perlen-Ohrstecker mit Diamantakzent",
        "Goldreif mit Perlen- und Diamantanhänger",
        "Nahaufnahme des diamantbesetzten Verschlusses einer Perlenkette",
        "Perlenring mit diamantbesetzten Blattmotiven aus Gold",
      ],
    },

    craft: {
      eyebrow: "Die Schönheit liegt im Detail",
      title:
        "Was einer feinen Perle ihre unverwechselbare Ausstrahlung verleiht",
      description:
        "Die Schönheit einer Perle zeigt sich durch Licht, Oberfläche, Farbe und Balance. Jedes Detail trägt zum Charakter des fertigen Schmuckstücks bei.",
      closingText: "Ein Juwel der Natur.",
      closingAccent: "Veredelt durch sorgfältige Auswahl.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Lüster",
          description:
            "Eine feine Perle scheint von innen heraus zu leuchten. Ihre Oberfläche reflektiert Licht mit Klarheit und Tiefe und erzeugt jene Leuchtkraft, an der außergewöhnliche Perlen sofort erkennbar sind.",
        },
        {
          title: "Orient",
          description:
            "Unter der Oberfläche zeigen feinste Perlen zarte Nuancen von Rosé, Silber, Creme und Grün. Dieses feine Farbspiel verleiht jeder Perle ihren ganz eigenen Charakter.",
        },
        {
          title: "Perlmutt",
          description:
            "Schicht um Schicht aufgebautes Perlmutt verleiht einer Perle Tiefe, Weichheit und dauerhafte Schönheit. Reiches Perlmutt schenkt ihr eine Ausstrahlung, die sich mit der Zeit immer weiter offenbart.",
        },
        {
          title: "Harmonie",
          description:
            "Eine schöne Perlenkette entsteht niemals allein nach Zahlen. Die Perlen werden sorgfältig nach Größe, Farbe, Form und Lüster zusammengestellt, damit das fertige Schmuckstück vollkommen ausgewogen wirkt.",
        },
      ],
    },

    cta: {
      title: "Entdecken Sie die Schönheit der Perlen persönlich",
      sub:
        "Perlen entfalten ihren wahren Charakter in Bewegung und Licht. Besuchen Sie uns privat und erleben Sie Lüster, Farbe und Individualität selbst.",
    },
  },

  tr: {
    gallery: {
      eyebrow: "İnci Koleksiyonu",
      title: "Sessiz güzellikleri için",
      titleAccent: "seçilmiş inciler.",
      description:
        "Klasik inci dizilerinden çağdaş tasarımlara kadar her parça; parlaklığı, uyumu ve her inciyi benzersiz kılan doğal karakteri için seçilir.",
      itemLabel: "İnci Koleksiyonu",
      closingText: "Doğa tarafından yavaşça şekillendirildi.",
      closingAccent: "Özenle elde seçildi.",
      captions: [
        "Dizi İnci Kolye",
        "İnci Kolye Ucu",
        "Kolye Ucu Detayı",
        "İnci Bileklik",
        "Ayarlanabilir Bileklik",
        "Sallantılı Küpeler",
        "İnci Küpeler",
        "İnci Bilezik",
        "Kilit Detayı",
        "İnci Yüzük",
      ],
      alts: [
        "Pırlanta işlemeli altın klipsli inci kolye",
        "Altın zincir üzerinde pırlanta detaylı tek inci kolye ucu",
        "Doğal taş üzerinde inci ve pırlanta kolye ucu",
        "Pavé altın ve pırlanta boncuklu inci bileklik",
        "Ayarlanabilir altın zincir klipsli inci bileklik",
        "Pırlanta işlemeli altın halkalarda sallantılı inci küpeler",
        "Pırlanta detaylı inci küpeler",
        "İnci ve pırlanta detaylı altın bilezik",
        "İnci kolyenin pırlanta işlemeli klipsinin yakın görünümü",
        "Altın üzerinde pırlanta yaprak motifli inci yüzük",
      ],
    },

    craft: {
      eyebrow: "Güzellik Detaylarda",
      title: "İnce bir inciye benzersiz karakterini veren nedir",
      description:
        "Bir incinin güzelliği ışık, yüzey, renk ve denge ile ortaya çıkar. Her detay tamamlanmış parçanın karakterine katkıda bulunur.",
      closingText: "Doğal bir mücevher.",
      closingAccent: "Özenli seçimle rafine edildi.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Parlaklık",
          description:
            "İyi bir inci adeta içten ışıldar. Yüzeyi ışığı netlik ve derinlikle yansıtır ve olağanüstü incileri ilk bakışta ayırt ettiren o parlaklığı oluşturur.",
        },
        {
          title: "Renk Oyunu",
          description:
            "En kaliteli inciler yüzeylerinin altında pembe, gümüş, krem ve yeşil tonlarda zarif yansımalar gösterir. Bu hassas renk oyunu her inciye kendine özgü bir karakter kazandırır.",
        },
        {
          title: "Sedef Tabakası",
          description:
            "Katman katman oluşan sedef, incinin derinliğini, yumuşaklığını ve kalıcı güzelliğini yaratır. Zengin sedef yapısı zamanla kendini daha da belli eden bir ışıltı verir.",
        },
        {
          title: "Uyum",
          description:
            "Güzel bir inci dizisi yalnızca ölçülere göre oluşturulmaz. İnciler boyut, renk, şekil ve parlaklık açısından özenle eşleştirilir; böylece tamamlanmış parça doğal bir bütünlük taşır.",
        },
      ],
    },

    cta: {
      title: "İncilerin güzelliğini yakından keşfedin",
      sub:
        "İnciler gerçek karakterlerini hareket ve ışık içinde gösterir. Bizi özel bir randevuyla ziyaret edin ve parlaklıklarını, renklerini ve özgünlüklerini kendiniz deneyimleyin.",
    },
  },

  sk: {
    gallery: {
      eyebrow: "Kolekcia perál",
      title: "Perly vybrané pre",
      titleAccent: "ich tichú krásu.",
      description:
        "Od klasických perlových náhrdelníkov až po moderné šperky je každý kus vybraný podľa lesku, harmónie a prirodzeného charakteru, ktorý robí každú perlu jedinečnou.",
      itemLabel: "Kolekcia perál",
      closingText: "Pomaly formované prírodou.",
      closingAccent: "Starostlivo vybrané ručne.",
      captions: [
        "Perlový náhrdelník",
        "Perlový prívesok",
        "Detail prívesku",
        "Perlový náramok",
        "Nastaviteľný náramok",
        "Visiace náušnice",
        "Puzetové náušnice",
        "Perlový obručový náramok",
        "Detail zapínania",
        "Perlový prsteň",
      ],
      alts: [
        "Perlový náhrdelník s diamantovým zlatým zapínaním",
        "Jedna perla s diamantovým detailom na zlatej retiazke",
        "Perlový a diamantový prívesok položený na prírodnom kameni",
        "Perlový náramok so zlatou a diamantovou pavé guľôčkou",
        "Perlový náramok s nastaviteľným zlatým retiazkovým zapínaním",
        "Visiace perlové náušnice na diamantových zlatých kruhoch",
        "Perlové puzetové náušnice s diamantovým detailom",
        "Zlatý obručový náramok s perlou a diamantovým príveskom",
        "Detail diamantového zapínania perlového náhrdelníka",
        "Perlový prsteň s diamantovými listovými motívmi v zlate",
      ],
    },

    craft: {
      eyebrow: "Krása sa ukrýva v detaile",
      title: "Čo dáva výnimočnej perle jej nezameniteľný charakter",
      description:
        "Krása perly sa odhaľuje vo svetle, povrchu, farbe a rovnováhe. Každý detail prispieva k charakteru hotového šperku.",
      closingText: "Prírodný klenot.",
      closingAccent: "Zdokonalený starostlivým výberom.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Lesk",
          description:
            "Kvalitná perla akoby žiarila zvnútra. Jej povrch odráža svetlo s čistotou a hĺbkou a vytvára žiarivý efekt, podľa ktorého výnimočné perly okamžite spoznáte.",
        },
        {
          title: "Orient",
          description:
            "Pod povrchom najkvalitnejších perál sa objavujú jemné odtiene ružovej, striebornej, krémovej a zelenej. Táto subtílna hra farieb dáva každej perle jedinečný charakter.",
        },
        {
          title: "Perleť",
          description:
            "Vrstva po vrstve vytvorená perleť dodáva perle hĺbku, jemnosť a trvalú krásu. Bohatá perleť vytvára žiaru, ktorá sa s časom odhaľuje stále viac.",
        },
        {
          title: "Harmónia",
          description:
            "Krásny perlový náhrdelník nevzniká iba podľa čísel. Perly sa starostlivo kombinujú podľa veľkosti, farby, tvaru a lesku tak, aby hotový šperk pôsobil prirodzene vyvážene.",
        },
      ],
    },

    cta: {
      title: "Objavte krásu perál osobne",
      sub:
        "Perly odhaľujú svoj skutočný charakter v pohybe a svetle. Navštívte nás súkromne a zažite ich lesk, farbu a jedinečnosť na vlastné oči.",
    },
  },

  cs: {
    gallery: {
      eyebrow: "Kolekce perel",
      title: "Perly vybrané pro",
      titleAccent: "jejich tichou krásu.",
      description:
        "Od klasických perlových náhrdelníků až po moderní šperky je každý kus vybírán podle lesku, harmonie a přirozeného charakteru, který činí každou perlu jedinečnou.",
      itemLabel: "Kolekce perel",
      closingText: "Pomalu formované přírodou.",
      closingAccent: "Pečlivě vybírané ručně.",
      captions: [
        "Perlový náhrdelník",
        "Perlový přívěsek",
        "Detail přívěsku",
        "Perlový náramek",
        "Nastavitelný náramek",
        "Visací náušnice",
        "Puzetové náušnice",
        "Perlový pevný náramek",
        "Detail zapínání",
        "Perlový prsten",
      ],
      alts: [
        "Perlový náhrdelník s diamantovým zlatým zapínáním",
        "Jedna perla s diamantovým detailem na zlatém řetízku",
        "Perlový a diamantový přívěsek položený na přírodním kameni",
        "Perlový náramek se zlatou a diamantovou pavé kuličkou",
        "Perlový náramek s nastavitelným zlatým řetízkovým zapínáním",
        "Visací perlové náušnice na diamantových zlatých kruzích",
        "Perlové puzetové náušnice s diamantovým detailem",
        "Zlatý pevný náramek s perlou a diamantovým přívěskem",
        "Detail diamantového zapínání perlového náhrdelníka",
        "Perlový prsten s diamantovými listovými motivy ve zlatě",
      ],
    },

    craft: {
      eyebrow: "Krása se skrývá v detailu",
      title: "Co dává jemné perle její nezaměnitelný charakter",
      description:
        "Krása perly se odhaluje ve světle, povrchu, barvě a rovnováze. Každý detail přispívá k charakteru hotového šperku.",
      closingText: "Přírodní klenot.",
      closingAccent: "Zdokonalený pečlivým výběrem.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Lesk",
          description:
            "Kvalitní perla jako by zářila zevnitř. Její povrch odráží světlo s čistotou a hloubkou a vytváří jas, podle kterého výjimečné perly okamžitě poznáte.",
        },
        {
          title: "Orient",
          description:
            "Pod povrchem nejkvalitnějších perel se objevují jemné odstíny růžové, stříbrné, krémové a zelené. Tato subtilní hra barev dává každé perle jedinečný charakter.",
        },
        {
          title: "Perleť",
          description:
            "Vrstva po vrstvě vytvořená perleť dodává perle hloubku, jemnost a trvalou krásu. Bohatá perleť vytváří záři, která se postupně odhaluje v čase.",
        },
        {
          title: "Harmonie",
          description:
            "Krásný perlový náhrdelník nevzniká jen podle čísel. Perly se pečlivě kombinují podle velikosti, barvy, tvaru a lesku tak, aby hotový šperk působil přirozeně vyváženě.",
        },
      ],
    },

    cta: {
      title: "Objevte krásu perel osobně",
      sub:
        "Perly odhalují svůj skutečný charakter v pohybu a světle. Navštivte nás soukromě a zažijte jejich lesk, barvu a jedinečnost na vlastní oči.",
    },
  },

  hu: {
    gallery: {
      eyebrow: "Gyöngykollekció",
      title: "Gyöngyök, amelyeket",
      titleAccent: "visszafogott szépségükért választunk.",
      description:
        "A klasszikus gyöngysoroktól a kortárs ékszerekig minden darabot fénye, harmóniája és természetes karaktere alapján választunk ki.",
      itemLabel: "Gyöngykollekció",
      closingText: "Lassan formálja a természet.",
      closingAccent: "Gondosan, kézzel válogatva.",
      captions: [
        "Gyöngysor",
        "Gyöngy medál",
        "Medál részlet",
        "Gyöngy karkötő",
        "Állítható karkötő",
        "Lógó fülbevaló",
        "Bedugós fülbevaló",
        "Gyöngy merev karkötő",
        "Kapocs részlet",
        "Gyöngy gyűrű",
      ],
      alts: [
        "Gyöngysor gyémántberakásos aranykapoccsal",
        "Egyetlen gyöngy medál gyémánt részlettel aranyláncon",
        "Gyöngy és gyémánt medál természetes kövön",
        "Gyöngy karkötő pavé arany- és gyémántgyönggyel",
        "Gyöngy karkötő állítható aranyláncos kapoccsal",
        "Lógó gyöngy fülbevaló gyémántberakásos aranykarikákon",
        "Gyöngy bedugós fülbevaló gyémánt részlettel",
        "Arany merev karkötő gyöngy és gyémánt függővel",
        "Gyöngysor gyémántberakásos kapcsának közeli részlete",
        "Gyöngy gyűrű gyémántberakásos arany levélmotívumokkal",
      ],
    },

    craft: {
      eyebrow: "A szépség a részletekben rejlik",
      title:
        "Mitől lesz egy finom gyöngy megjelenése összetéveszthetetlen",
      description:
        "A gyöngy szépsége a fényben, a felületben, a színben és az egyensúlyban mutatkozik meg. Minden részlet hozzájárul a kész ékszer karakteréhez.",
      closingText: "A természet ékszere.",
      closingAccent: "Gondos válogatással finomítva.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Fény",
          description:
            "Egy finom gyöngy szinte belülről ragyog. Felülete tisztán és mélyen veri vissza a fényt, létrehozva azt a különleges ragyogást, amely azonnal felismerhetővé teszi a kivételes gyöngyöket.",
        },
        {
          title: "Színjáték",
          description:
            "A legszebb gyöngyök felszíne alatt rózsaszín, ezüst, krém és zöld finom árnyalatai jelennek meg. Ez a visszafogott színjáték minden gyöngynek egyedi karaktert ad.",
        },
        {
          title: "Gyöngyház",
          description:
            "A gyöngyház rétegei adják a gyöngy mélységét, lágyságát és tartós szépségét. A gazdag gyöngyház olyan ragyogást eredményez, amely idővel egyre inkább kibontakozik.",
        },
        {
          title: "Harmónia",
          description:
            "Egy szép gyöngysor nem pusztán méretek alapján áll össze. A gyöngyöket méret, szín, forma és fény szerint gondosan párosítják, hogy a kész ékszer természetesen kiegyensúlyozott legyen.",
        },
      ],
    },

    cta: {
      title: "Fedezze fel személyesen a gyöngyök szépségét",
      sub:
        "A gyöngyök valódi karakterüket mozgásban és fényben mutatják meg. Látogasson el hozzánk privát időpontban, és tapasztalja meg ragyogásukat, színüket és egyediségüket.",
    },
  },

  pl: {
    gallery: {
      eyebrow: "Kolekcja pereł",
      title: "Perły wybrane ze względu na",
      titleAccent: "ich dyskretne piękno.",
      description:
        "Od klasycznych sznurów pereł po współczesną biżuterię — każdy element wybieramy ze względu na połysk, harmonię i naturalny charakter.",
      itemLabel: "Kolekcja pereł",
      closingText: "Powoli formowane przez naturę.",
      closingAccent: "Starannie wybierane ręcznie.",
      captions: [
        "Naszyjnik z pereł",
        "Wisiorek z perłą",
        "Detal wisiorka",
        "Bransoletka z pereł",
        "Regulowana bransoletka",
        "Kolczyki wiszące",
        "Kolczyki sztyfty",
        "Sztywna bransoletka z perłą",
        "Detal zapięcia",
        "Pierścionek z perłą",
      ],
      alts: [
        "Naszyjnik z pereł z diamentowym złotym zapięciem",
        "Pojedyncza perła z diamentowym akcentem na złotym łańcuszku",
        "Wisiorek z perłą i diamentem na naturalnym kamieniu",
        "Bransoletka z pereł ze złotą i diamentową kulką pavé",
        "Bransoletka z pereł z regulowanym złotym zapięciem łańcuszkowym",
        "Wiszące kolczyki z pereł na diamentowych złotych kołach",
        "Kolczyki z pereł z diamentowym akcentem",
        "Złota sztywna bransoletka z perłą i diamentową zawieszką",
        "Zbliżenie diamentowego zapięcia naszyjnika z pereł",
        "Pierścionek z perłą i diamentowymi motywami liści w złocie",
      ],
    },

    craft: {
      eyebrow: "Piękno tkwi w detalu",
      title: "Co nadaje szlachetnej perle jej niepowtarzalny charakter",
      description:
        "Piękno perły objawia się w świetle, powierzchni, kolorze i harmonii. Każdy detal wpływa na charakter gotowej biżuterii.",
      closingText: "Naturalny klejnot.",
      closingAccent: "Udoskonalony starannym wyborem.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Połysk",
          description:
            "Dobra perła zdaje się świecić od środka. Jej powierzchnia odbija światło z czystością i głębią, tworząc blask, po którym wyjątkowe perły można rozpoznać od razu.",
        },
        {
          title: "Orient",
          description:
            "Pod powierzchnią najlepszych pereł pojawiają się subtelne odcienie różu, srebra, kremu i zieleni. Ta delikatna gra kolorów nadaje każdej perle indywidualny charakter.",
        },
        {
          title: "Masa perłowa",
          description:
            "Warstwa po warstwie masa perłowa tworzy głębię, miękkość i trwałe piękno perły. Bogata masa perłowa nadaje jej blask, który z czasem ujawnia się jeszcze pełniej.",
        },
        {
          title: "Harmonia",
          description:
            "Piękny sznur pereł nie powstaje wyłącznie na podstawie wymiarów. Perły są starannie dobierane pod względem wielkości, koloru, kształtu i połysku.",
        },
      ],
    },

    cta: {
      title: "Odkryj piękno pereł osobiście",
      sub:
        "Perły pokazują swój prawdziwy charakter w ruchu i świetle. Odwiedź nas podczas prywatnego spotkania i przekonaj się o ich połysku, kolorze i indywidualności.",
    },
  },

  ru: {
    gallery: {
      eyebrow: "Коллекция жемчуга",
      title: "Жемчуг, выбранный за",
      titleAccent: "его сдержанную красоту.",
      description:
        "От классических жемчужных нитей до современных украшений — каждое изделие выбирается за блеск, гармонию и природный характер.",
      itemLabel: "Коллекция жемчуга",
      closingText: "Медленно создано природой.",
      closingAccent: "Тщательно отобрано вручную.",
      captions: [
        "Жемчужное ожерелье",
        "Жемчужный кулон",
        "Деталь кулона",
        "Жемчужный браслет",
        "Регулируемый браслет",
        "Серьги-подвески",
        "Серьги-пусеты",
        "Жемчужный браслет",
        "Деталь застёжки",
        "Кольцо с жемчугом",
      ],
      alts: [
        "Жемчужное ожерелье с золотой застёжкой, украшенной бриллиантами",
        "Кулон с одной жемчужиной и бриллиантовым акцентом на золотой цепочке",
        "Кулон с жемчугом и бриллиантом на натуральном камне",
        "Жемчужный браслет с золотой бусиной pavé и бриллиантами",
        "Жемчужный браслет с регулируемой золотой застёжкой",
        "Жемчужные серьги-подвески на золотых кольцах с бриллиантами",
        "Жемчужные серьги-пусеты с бриллиантовым акцентом",
        "Золотой браслет с жемчугом и бриллиантовой подвеской",
        "Крупный план украшенной бриллиантами застёжки жемчужного ожерелья",
        "Кольцо с жемчугом и золотыми мотивами листьев, украшенными бриллиантами",
      ],
    },

    craft: {
      eyebrow: "Красота в деталях",
      title: "Что придаёт прекрасной жемчужине её неповторимый характер",
      description:
        "Красота жемчуга раскрывается через свет, поверхность, цвет и гармонию. Каждая деталь влияет на характер готового украшения.",
      closingText: "Драгоценность природы.",
      closingAccent: "Совершенствуется тщательным отбором.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Блеск",
          description:
            "Качественная жемчужина словно светится изнутри. Её поверхность отражает свет с глубиной и чистотой, создавая характерное сияние.",
        },
        {
          title: "Ориент",
          description:
            "Под поверхностью лучших жемчужин проявляются тонкие оттенки розового, серебристого, кремового и зелёного.",
        },
        {
          title: "Перламутр",
          description:
            "Слой за слоем перламутр создаёт глубину, мягкость и долговечную красоту жемчужины.",
        },
        {
          title: "Гармония",
          description:
            "Жемчужины тщательно подбираются по величине, цвету, форме и блеску, чтобы готовое украшение выглядело естественно и гармонично.",
        },
      ],
    },

    cta: {
      title: "Откройте красоту жемчуга лично",
      sub:
        "Жемчуг раскрывает свой настоящий характер в движении и свете. Посетите нас в рамках индивидуальной встречи.",
    },
  },

  nl: {
    gallery: {
      eyebrow: "De parelcollectie",
      title: "Parels geselecteerd om",
      titleAccent: "hun ingetogen schoonheid.",
      description:
        "Van klassieke parelsnoeren tot eigentijdse sieraden: elk stuk wordt geselecteerd op glans, harmonie en natuurlijk karakter.",
      itemLabel: "Parelcollectie",
      closingText: "Langzaam gevormd door de natuur.",
      closingAccent: "Zorgvuldig met de hand geselecteerd.",
      captions: [
        "Parelsnoer",
        "Parelhanger",
        "Detail van hanger",
        "Parelarmband",
        "Verstelbare armband",
        "Hangende oorbellen",
        "Parelstekers",
        "Parelarmband",
        "Detail van sluiting",
        "Parelring",
      ],
      alts: [
        "Parelsnoer met goudkleurige diamanten sluiting",
        "Enkele parelhanger met diamantaccent aan een gouden ketting",
        "Parel- en diamanthanger op natuursteen",
        "Parelarmband met een gouden pavé kraal met diamanten",
        "Parelarmband met verstelbare gouden kettingsluiting",
        "Hangende pareloorbellen aan gouden ringen met diamanten",
        "Parelstekers met diamantaccent",
        "Gouden armband met parel- en diamanten bedel",
        "Close-up van de diamanten sluiting van een parelsnoer",
        "Parelring met diamanten bladmotieven in goud",
      ],
    },

    craft: {
      eyebrow: "Schoonheid zit in het detail",
      title: "Wat een fijne parel haar onmiskenbare uitstraling geeft",
      description:
        "De schoonheid van een parel wordt zichtbaar in licht, oppervlak, kleur en balans. Elk detail draagt bij aan het karakter van het uiteindelijke sieraad.",
      closingText: "Een juweel van de natuur.",
      closingAccent: "Verfijnd door zorgvuldige selectie.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Glans",
          description:
            "Een fijne parel lijkt van binnenuit te stralen. Het oppervlak weerspiegelt licht met helderheid en diepte.",
        },
        {
          title: "Oriënt",
          description:
            "Onder het oppervlak tonen de mooiste parels subtiele nuances van roze, zilver, crème en groen.",
        },
        {
          title: "Parelmoer",
          description:
            "Laag na laag parelmoer creëert de diepte, zachtheid en blijvende schoonheid van een parel.",
        },
        {
          title: "Harmonie",
          description:
            "Parels worden zorgvuldig gecombineerd op grootte, kleur, vorm en glans, zodat het uiteindelijke sieraad natuurlijk in balans voelt.",
        },
      ],
    },

    cta: {
      title: "Ontdek de schoonheid van parels persoonlijk",
      sub:
        "Parels tonen hun ware karakter in beweging en licht. Bezoek ons tijdens een privéafspraak en ervaar zelf hun glans, kleur en individualiteit.",
    },
  },

  da: {
    gallery: {
      eyebrow: "Perlekollektionen",
      title: "Perler udvalgt for",
      titleAccent: "deres stille skønhed.",
      description:
        "Fra klassiske perlekæder til moderne smykker vælges hvert stykke for glans, harmoni og naturlig karakter.",
      itemLabel: "Perlekollektion",
      closingText: "Langsomt formet af naturen.",
      closingAccent: "Omhyggeligt udvalgt i hånden.",
      captions: [
        "Perlekæde",
        "Perlevedhæng",
        "Detalje af vedhæng",
        "Perlearmbånd",
        "Justerbart armbånd",
        "Hængende øreringe",
        "Perleørestikker",
        "Perlearmring",
        "Detalje af lås",
        "Perlering",
      ],
      alts: [
        "Perlekæde med diamantbesat guldlås",
        "Enkelt perlevedhæng med diamantdetalje på guldkæde",
        "Perle- og diamantvedhæng på natursten",
        "Perlearmbånd med pavébesat guld- og diamantperle",
        "Perlearmbånd med justerbar guldkædelås",
        "Hængende perleøreringe på diamantbesatte guldringe",
        "Perleørestikker med diamantdetalje",
        "Guldarmring med perle- og diamantvedhæng",
        "Nærbillede af diamantbesat lås på en perlekæde",
        "Perlering med diamantbesatte bladmotiver i guld",
      ],
    },

    craft: {
      eyebrow: "Skønheden ligger i detaljen",
      title: "Det, der giver en fin perle dens umiskendelige udstråling",
      description:
        "En perles skønhed viser sig gennem lys, overflade, farve og balance. Hver detalje bidrager til det færdige smykkes karakter.",
      closingText: "En juvel fra naturen.",
      closingAccent: "Forfinet gennem omhyggelig udvælgelse.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Glans",
          description:
            "En fin perle synes at lyse indefra. Overfladen reflekterer lyset med klarhed og dybde.",
        },
        {
          title: "Orient",
          description:
            "Under overfladen afslører de fineste perler subtile nuancer af rosa, sølv, creme og grøn.",
        },
        {
          title: "Perlemor",
          description:
            "Lag på lag af perlemor skaber perlens dybde, blødhed og varige skønhed.",
        },
        {
          title: "Harmoni",
          description:
            "Perlerne udvælges omhyggeligt efter størrelse, farve, form og glans.",
        },
      ],
    },

    cta: {
      title: "Oplev perlernes skønhed personligt",
      sub:
        "Perler viser deres sande karakter i bevægelse og lys. Besøg os til en privat aftale og oplev deres glans, farve og individualitet.",
    },
  },

  fi: {
    gallery: {
      eyebrow: "Helmikokoelma",
      title: "Helmet valittu niiden",
      titleAccent: "hillityn kauneuden vuoksi.",
      description:
        "Klassisista helminauhoista moderneihin koruihin jokainen kappale valitaan kiillon, harmonian ja luonnollisen luonteen perusteella.",
      itemLabel: "Helmikokoelma",
      closingText: "Luonnon hitaasti muovaama.",
      closingAccent: "Huolellisesti käsin valittu.",
      captions: [
        "Helminauha",
        "Helmiriipus",
        "Riipuksen yksityiskohta",
        "Helmirannekoru",
        "Säädettävä rannekoru",
        "Riippuvat korvakorut",
        "Helminappikorvakorut",
        "Helmirannerengas",
        "Lukon yksityiskohta",
        "Helmisormus",
      ],
      alts: [
        "Helminauha timantein koristellulla kultalukolla",
        "Yksittäinen helmiriipus timanttiyksityiskohdalla kultaketjussa",
        "Helmi- ja timanttiriipus luonnonkiven päällä",
        "Helmirannekoru pavé-kulta- ja timanttihelmellä",
        "Helmirannekoru säädettävällä kultaketjulukolla",
        "Riippuvat helmikorvakorut timantein koristelluissa kultarenkaissa",
        "Helminappikorvakorut timanttiyksityiskohdalla",
        "Kultainen rannerengas helmi- ja timanttikoristeella",
        "Lähikuva helminauhan timantein koristellusta lukosta",
        "Helmisormus timantein koristelluilla kultaisilla lehtiaiheilla",
      ],
    },

    craft: {
      eyebrow: "Kauneus on yksityiskohdissa",
      title: "Mikä antaa hienolle helmelle sen tunnistettavan olemuksen",
      description:
        "Helmen kauneus näkyy valossa, pinnassa, värissä ja tasapainossa. Jokainen yksityiskohta vaikuttaa valmiin korun luonteeseen.",
      closingText: "Luonnon jalokivi.",
      closingAccent: "Huolellisen valinnan viimeistelemä.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Kiilto",
          description:
            "Hieno helmi näyttää hehkuvan sisältäpäin. Sen pinta heijastaa valoa kirkkaasti ja syvältä.",
        },
        {
          title: "Orient",
          description:
            "Hienoimpien helmien pinnan alla näkyy hienovaraisia vaaleanpunaisen, hopean, kerman ja vihreän sävyjä.",
        },
        {
          title: "Helmiäinen",
          description:
            "Kerros kerrokselta muodostuva helmiäinen luo helmen syvyyden, pehmeyden ja kestävän kauneuden.",
        },
        {
          title: "Harmonia",
          description:
            "Helmet valitaan huolellisesti koon, värin, muodon ja kiillon mukaan.",
        },
      ],
    },

    cta: {
      title: "Tutustu helmien kauneuteen henkilökohtaisesti",
      sub:
        "Helmet paljastavat todellisen luonteensa liikkeessä ja valossa. Vieraile luonamme yksityisellä tapaamisella.",
    },
  },

  sv: {
    gallery: {
      eyebrow: "Pärlkollektionen",
      title: "Pärlor valda för",
      titleAccent: "sin diskreta skönhet.",
      description:
        "Från klassiska pärlhalsband till samtida smycken väljs varje del för lyster, harmoni och naturlig karaktär.",
      itemLabel: "Pärlkollektion",
      closingText: "Långsamt formad av naturen.",
      closingAccent: "Omsorgsfullt handplockad.",
      captions: [
        "Pärlhalsband",
        "Pärlhänge",
        "Detalj av hänge",
        "Pärlarmband",
        "Justerbart armband",
        "Hängande örhängen",
        "Pärlstift",
        "Pärlarmring",
        "Detalj av lås",
        "Pärlring",
      ],
      alts: [
        "Pärlhalsband med diamantbesatt guldlås",
        "Enkelt pärlhänge med diamantdetalj på guldkedja",
        "Pärl- och diamanthänge på natursten",
        "Pärlarmband med pavébesatt guld- och diamantpärla",
        "Pärlarmband med justerbart guldkedjelås",
        "Hängande pärlörhängen på diamantbesatta guldringar",
        "Pärlstift med diamantdetalj",
        "Guldarmring med pärl- och diamantberlock",
        "Närbild av ett pärlhalsbands diamantbesatta lås",
        "Pärlring med diamantbesatta bladmotiv i guld",
      ],
    },

    craft: {
      eyebrow: "Skönheten finns i detaljerna",
      title: "Det som ger en fin pärla dess omisskännliga närvaro",
      description:
        "En pärlas skönhet syns i ljuset, ytan, färgen och balansen. Varje detalj bidrar till det färdiga smyckets karaktär.",
      closingText: "En juvel från naturen.",
      closingAccent: "Förfinad genom omsorgsfullt urval.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Lyster",
          description:
            "En fin pärla tycks lysa inifrån. Ytan reflekterar ljuset med klarhet och djup.",
        },
        {
          title: "Orient",
          description:
            "Under ytan avslöjar de finaste pärlorna subtila nyanser av rosa, silver, crème och grönt.",
        },
        {
          title: "Pärlemor",
          description:
            "Lager efter lager av pärlemor skapar pärlans djup, mjukhet och varaktiga skönhet.",
        },
        {
          title: "Harmoni",
          description:
            "Pärlorna väljs noggrant efter storlek, färg, form och lyster.",
        },
      ],
    },

    cta: {
      title: "Upptäck pärlornas skönhet personligen",
      sub:
        "Pärlor visar sin verkliga karaktär i rörelse och ljus. Besök oss vid ett privat möte.",
    },
  },

  fr: {
    gallery: {
      eyebrow: "La collection de perles",
      title: "Des perles choisies pour",
      titleAccent: "leur beauté discrète.",
      description:
        "Des rangs classiques aux bijoux contemporains, chaque pièce est choisie pour son lustre, son harmonie et son caractère naturel.",
      itemLabel: "Collection de perles",
      closingText: "Lentement façonnée par la nature.",
      closingAccent: "Soigneusement sélectionnée à la main.",
      captions: [
        "Collier de perles",
        "Pendentif perle",
        "Détail du pendentif",
        "Bracelet de perles",
        "Bracelet ajustable",
        "Boucles pendantes",
        "Puces d’oreilles",
        "Jonc avec perle",
        "Détail du fermoir",
        "Bague perle",
      ],
      alts: [
        "Collier de perles avec fermoir en or serti de diamants",
        "Pendentif avec une perle et un accent de diamant sur chaîne en or",
        "Pendentif perle et diamant posé sur une pierre naturelle",
        "Bracelet de perles avec bille en or pavée de diamants",
        "Bracelet de perles avec fermoir réglable en chaîne d’or",
        "Boucles d’oreilles pendantes en perles sur anneaux en or sertis de diamants",
        "Puces d’oreilles en perles avec accent de diamant",
        "Jonc en or avec perle et pendentif diamant",
        "Gros plan du fermoir serti de diamants d’un collier de perles",
        "Bague en perle avec motifs de feuilles en or sertis de diamants",
      ],
    },

    craft: {
      eyebrow: "La beauté réside dans le détail",
      title: "Ce qui donne à une perle fine sa présence incomparable",
      description:
        "La beauté d’une perle se révèle dans la lumière, la surface, la couleur et l’équilibre. Chaque détail contribue au caractère du bijou fini.",
      closingText: "Un joyau de la nature.",
      closingAccent: "Affiné par une sélection attentive.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Lustre",
          description:
            "Une perle fine semble rayonner de l’intérieur. Sa surface reflète la lumière avec clarté et profondeur.",
        },
        {
          title: "Orient",
          description:
            "Sous leur surface, les plus belles perles révèlent de subtiles nuances de rose, d’argent, de crème et de vert.",
        },
        {
          title: "Nacre",
          description:
            "Couche après couche, la nacre crée la profondeur, la douceur et la beauté durable d’une perle.",
        },
        {
          title: "Harmonie",
          description:
            "Les perles sont soigneusement assorties par taille, couleur, forme et lustre.",
        },
      ],
    },

    cta: {
      title: "Découvrez la beauté des perles en personne",
      sub:
        "Les perles révèlent leur véritable caractère dans le mouvement et la lumière. Venez les découvrir lors d’un rendez-vous privé.",
    },
  },

  it: {
    gallery: {
      eyebrow: "La collezione di perle",
      title: "Perle scelte per",
      titleAccent: "la loro bellezza discreta.",
      description:
        "Dalle classiche collane ai gioielli contemporanei, ogni pezzo viene scelto per lucentezza, armonia e carattere naturale.",
      itemLabel: "Collezione di perle",
      closingText: "Formata lentamente dalla natura.",
      closingAccent: "Selezionata con cura a mano.",
      captions: [
        "Collana di perle",
        "Pendente con perla",
        "Dettaglio del pendente",
        "Bracciale di perle",
        "Bracciale regolabile",
        "Orecchini pendenti",
        "Orecchini a lobo",
        "Bracciale rigido con perla",
        "Dettaglio della chiusura",
        "Anello con perla",
      ],
      alts: [
        "Collana di perle con chiusura in oro e diamanti",
        "Pendente con singola perla e dettaglio in diamante su catena d’oro",
        "Pendente con perla e diamante su pietra naturale",
        "Bracciale di perle con elemento pavé in oro e diamanti",
        "Bracciale di perle con chiusura regolabile in catena d’oro",
        "Orecchini pendenti con perle su cerchi d’oro e diamanti",
        "Orecchini a lobo con perla e dettaglio in diamante",
        "Bracciale rigido in oro con perla e charm in diamante",
        "Dettaglio ravvicinato della chiusura in diamanti di una collana di perle",
        "Anello con perla e motivi a foglia in oro e diamanti",
      ],
    },

    craft: {
      eyebrow: "La bellezza è nei dettagli",
      title: "Ciò che dona a una perla fine la sua presenza inconfondibile",
      description:
        "La bellezza di una perla si rivela attraverso luce, superficie, colore ed equilibrio. Ogni dettaglio contribuisce al carattere del gioiello finito.",
      closingText: "Un gioiello della natura.",
      closingAccent: "Raffinato da una selezione attenta.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Lucentezza",
          description:
            "Una perla fine sembra brillare dall’interno. La sua superficie riflette la luce con chiarezza e profondità.",
        },
        {
          title: "Oriente",
          description:
            "Sotto la superficie, le perle più pregiate rivelano delicate sfumature di rosa, argento, crema e verde.",
        },
        {
          title: "Madreperla",
          description:
            "Strato dopo strato, la madreperla crea profondità, morbidezza e bellezza duratura.",
        },
        {
          title: "Armonia",
          description:
            "Le perle vengono abbinate con cura per dimensione, colore, forma e lucentezza.",
        },
      ],
    },

    cta: {
      title: "Scoprite di persona la bellezza delle perle",
      sub:
        "Le perle rivelano il loro vero carattere nel movimento e nella luce. Venite a trovarci con un appuntamento privato.",
    },
  },

  es: {
    gallery: {
      eyebrow: "La colección de perlas",
      title: "Perlas elegidas por",
      titleAccent: "su belleza discreta.",
      description:
        "Desde collares clásicos hasta joyas contemporáneas, cada pieza se selecciona por su lustre, armonía y carácter natural.",
      itemLabel: "Colección de perlas",
      closingText: "Formada lentamente por la naturaleza.",
      closingAccent: "Seleccionada cuidadosamente a mano.",
      captions: [
        "Collar de perlas",
        "Colgante de perla",
        "Detalle del colgante",
        "Pulsera de perlas",
        "Pulsera ajustable",
        "Pendientes colgantes",
        "Pendientes de botón",
        "Brazalete con perla",
        "Detalle del cierre",
        "Anillo con perla",
      ],
      alts: [
        "Collar de perlas con cierre de oro engastado con diamantes",
        "Colgante con una perla y detalle de diamante en cadena de oro",
        "Colgante de perla y diamante sobre piedra natural",
        "Pulsera de perlas con cuenta de oro pavé y diamantes",
        "Pulsera de perlas con cierre ajustable de cadena de oro",
        "Pendientes colgantes de perlas en aros de oro con diamantes",
        "Pendientes de botón con perla y detalle de diamante",
        "Brazalete de oro con perla y colgante de diamante",
        "Primer plano del cierre con diamantes de un collar de perlas",
        "Anillo con perla y motivos de hojas de oro con diamantes",
      ],
    },

    craft: {
      eyebrow: "La belleza está en los detalles",
      title: "Lo que da a una perla fina su presencia inconfundible",
      description:
        "La belleza de una perla se revela a través de la luz, la superficie, el color y el equilibrio. Cada detalle contribuye al carácter de la pieza terminada.",
      closingText: "Una joya de la naturaleza.",
      closingAccent: "Refinada mediante una selección cuidadosa.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Lustre",
          description:
            "Una perla fina parece brillar desde su interior. Su superficie refleja la luz con claridad y profundidad.",
        },
        {
          title: "Oriente",
          description:
            "Bajo la superficie, las mejores perlas revelan delicados matices de rosa, plata, crema y verde.",
        },
        {
          title: "Nácar",
          description:
            "Capa tras capa, el nácar crea la profundidad, la suavidad y la belleza duradera de una perla.",
        },
        {
          title: "Armonía",
          description:
            "Las perlas se combinan cuidadosamente por tamaño, color, forma y lustre.",
        },
      ],
    },

    cta: {
      title: "Descubra la belleza de las perlas en persona",
      sub:
        "Las perlas revelan su verdadero carácter con el movimiento y la luz. Visítenos en una cita privada.",
    },
  },
};

const PEARL_IMAGES = [
  "/images/pearls/pearl-01.jpg",
  "/images/pearls/pearl-02.jpg",
  "/images/pearls/pearl-03.jpg",
  "/images/pearls/pearl-04.jpg",
  "/images/pearls/pearl-05.jpg",
  "/images/pearls/pearl-06.jpg",
  "/images/pearls/pearl-07.jpg",
  "/images/pearls/pearl-08.jpg",
  "/images/pearls/pearl-09.jpg",
  "/images/pearls/pearl-10.jpg",
];

export default function PearlsContent() {
  const { locale } = useLanguage();

  const copy = PEARLS_COPY[locale] ?? PEARLS_COPY.en;

  const galleryItems = PEARL_IMAGES.map((image, index) => ({
    image,
    caption:
      copy.gallery.captions[index] ??
      PEARLS_COPY.en.gallery.captions[index] ??
      "",
    alt:
      copy.gallery.alts[index] ??
      PEARLS_COPY.en.gallery.alts[index] ??
      "",
  }));

  return (
    <>
      <Header />

      <main>
        <PearlsCinematicHero />

        <CategoryGallery
          icon={<PearlIcon />}
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