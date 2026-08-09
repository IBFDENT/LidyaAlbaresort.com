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

const PEARLS_COPY: Record<
  Locale,
  {
    gallery: {
      captions: string[];
      alts: string[];
    };
    craft: {
      eyebrow: string;
      title: string;
      points: {
        title: string;
        description: string;
      }[];
    };
    cta: {
      title: string;
      sub: string;
    };
  }
> = {
  en: {
    gallery: {
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
      title: "Was einer feinen Perle ihre unverwechselbare Ausstrahlung verleiht",
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
        "Detail diamantového zapínání perlového náhrdelníku",
        "Perlový prsten s diamantovými listovými motivy ve zlatě",
      ],
    },
    craft: {
      eyebrow: "Krása se skrývá v detailu",
      title: "Co dává jemné perle její nezaměnitelný charakter",
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
      title: "Mitől lesz egy finom gyöngy megjelenése összetéveszthetetlen",
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
            "Piękny sznur pereł nie powstaje wyłącznie na podstawie wymiarów. Perły są starannie dobierane pod względem wielkości, koloru, kształtu i połysku, aby gotowy element wyglądał naturalnie i harmonijnie.",
        },
      ],
    },
    cta: {
      title: "Odkryj piękno pereł osobiście",
      sub:
        "Perły pokazują swój prawdziwy charakter w ruchu i świetle. Odwiedź nas podczas prywatnego spotkania i przekonaj się o ich połysku, kolorze i indywidualności.",
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
  const copy = PEARLS_COPY[locale];

  const galleryItems = PEARL_IMAGES.map((image, index) => ({
    image,
    caption: copy.gallery.captions[index],
    alt: copy.gallery.alts[index],
  }));

  return (
    <>
      <Header />

      <main>
        {/* CINEMATIC HERO */}
        <PearlsCinematicHero />

        {/* COLLECTION GALLERY */}
        <CategoryGallery
          icon={<PearlIcon />}
          items={galleryItems}
        />

        {/* CRAFT / QUALITY */}
        <CategoryCraft
          eyebrow={copy.craft.eyebrow}
          title={copy.craft.title}
          points={copy.craft.points}
        />

        {/* PRIVATE VIEWING CTA */}
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