"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import WeddingRingsCinematicHero from "@/components/category/WeddingRingsCinematicHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { RingIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type WeddingCopy = {
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
    since: string;
    closingText: string;
    closingAccent: string;
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

const WEDDING_COPY: Record<Locale, WeddingCopy> = {
  de: {
    gallery: {
      eyebrow: "Die Trauring-Kollektion",
      title: "Trauringe gemacht für",
      titleAccent: "ein gemeinsames Leben.",
      description:
        "Von zeitlosen Goldringen bis zu diamantbesetzten und modernen Designs wird jedes Paar mit Blick auf Proportion, Komfort und das Gefühl am Finger ausgewählt.",
      itemLabel: "Trauring-Kollektion",
      closingText: "Zwei Ringe. Ein Versprechen.",
      closingAccent: "Ein gemeinsames Leben liegt vor Ihnen.",
      captions: [
        "Klassisches Paar",
        "Zweifarbiges Pavé",
        "Solitär-Akzent",
        "Geflochtenes Roségold",
        "Diamant-Eternity",
        "Gelbgold-Paar",
        "Dreifarbiges Set",
        "Gerillter Ring",
        "Gedrehtes Pavé",
        "Rosé- & Weißgold",
      ],
      alts: [
        "Gebürsteter Goldring zusammen mit einem pavébesetzten Diamantring",
        "Trauringe aus Weißgold und Roségold mit Pavé-Diamanten",
        "Platinringe, einer davon mit einem einzelnen eingefassten Diamanten",
        "Roségoldringe, einer mit geflochtener Struktur",
        "Weißgoldringe, einer davon als vollständig diamantbesetzter Eternity-Ring",
        "Gelbgoldringe, einer mit einem einzelnen Diamantakzent",
        "Ringe aus Weiß- und Roségold mit Pavé-Diamanten",
        "Gerillter Gelbgoldring mit pavébesetztem Roségoldring",
        "Gerillter Gelbgoldring mit gedrehtem diamantbesetztem Roségoldring",
        "Weißgoldring mit Roségoldrille und gedrehtem Pavé-Ring",
      ],
    },
    craft: {
      eyebrow: "Für den Alltag gemacht",
      title:
        "Die Details, die zählen, wenn ein Ring jeden Tag getragen wird",
      description:
        "Ein Trauring wird Teil des täglichen Lebens. Komfort, Proportion, Material und persönliche Details sind wichtig, weil dieser Ring Sie viele Jahre begleiten soll.",
      since: "LIDYA · SEIT 1989",
      closingText: "Für den Hochzeitstag gemacht.",
      closingAccent: "Für jeden Tag danach gestaltet.",
      points: [
        {
          title: "Proportion",
          description:
            "Breite, Profil und Gewicht sollten sich ausgewogen an der Hand anfühlen. Der richtige Ring hat Präsenz, ohne jemals mit der Person zu konkurrieren, die ihn trägt.",
        },
        {
          title: "Komfort",
          description:
            "Ein Trauring ist nicht nur für einen besonderen Anlass gedacht. Innenprofil, Kanten und Passform werden für die unzähligen alltäglichen Stunden berücksichtigt, in denen er getragen wird.",
        },
        {
          title: "Material",
          description:
            "Platin sowie 18-karätiges Weiß-, Gelb- oder Roségold bringen jeweils einen eigenen Ton, ein eigenes Gewicht und einen eigenen Charakter mit.",
        },
        {
          title: "Persönliches Detail",
          description:
            "Ein Datum, Initialen oder eine private Botschaft können aus einem schönen Ring etwas machen, das nur den beiden Menschen gehört, die ihn gewählt haben.",
        },
      ],
    },
    cta: {
      title: "Wählen Sie die Ringe für jeden gemeinsamen Tag",
      sub:
        "Besuchen Sie uns gemeinsam zu einem privaten Termin und entdecken Sie Proportionen, Metalle, Oberflächen und Details, bis sich das richtige Paar unverkennbar nach Ihnen anfühlt.",
    },
  },

  en: {
    gallery: {
      eyebrow: "The Wedding Collection",
      title: "Wedding rings made for",
      titleAccent: "a lifetime together.",
      description:
        "From timeless gold bands to diamond-set and contemporary designs, each pair is chosen with attention to proportion, comfort and the way it feels on the hand.",
      itemLabel: "Wedding Collection",
      closingText: "Two rings. One promise.",
      closingAccent: "A lifetime still to come.",
      captions: [
        "Classic Pair",
        "Two-Tone Pavé",
        "Solitaire Accent",
        "Woven Rose Gold",
        "Diamond Eternity",
        "Yellow Gold Pair",
        "Tri-Colour Set",
        "Grooved Band",
        "Twisted Pavé",
        "Rose & White Gold",
      ],
      alts: [
        "Brushed gold band and pavé diamond band together",
        "White gold and rose gold pavé diamond wedding bands",
        "Platinum bands, one set with a single bezel diamond",
        "Rose gold bands, one with a woven textured pattern",
        "White gold bands, one set with a full diamond eternity band",
        "Yellow gold bands, one with a single diamond accent",
        "White and rose gold bands with pavé diamonds",
        "Yellow gold grooved band with a rose gold pavé diamond band",
        "Yellow gold grooved band with a twisted rose gold diamond band",
        "White gold band with a rose gold groove and twisted pavé band",
      ],
    },
    craft: {
      eyebrow: "Made to Live With You",
      title: "The details that matter when a ring is worn every day",
      description:
        "A wedding ring becomes part of everyday life. Comfort, proportion, material and personal detail matter because this is a piece designed to stay with you for years.",
      since: "LIDYA · SINCE 1989",
      closingText: "Made for the wedding day.",
      closingAccent: "Designed for every day after.",
      points: [
        {
          title: "Proportion",
          description:
            "Width, profile and weight should feel balanced on the hand. The right ring has presence without ever feeling like it is competing with the person wearing it.",
        },
        {
          title: "Comfort",
          description:
            "A wedding ring is not made for an occasion alone. Its inner profile, edges and fit are considered for the countless ordinary hours in which it will be worn.",
        },
        {
          title: "Material",
          description:
            "Platinum and 18k white, yellow or rose gold each bring a different tone, weight and character.",
        },
        {
          title: "Personal Detail",
          description:
            "A date, initials or a private message can turn a beautiful ring into something that belongs only to the two people who chose it.",
        },
      ],
    },
    cta: {
      title: "Choose the rings you will live with every day",
      sub:
        "Visit us together for a private appointment and explore proportions, metals, finishes and details until the right pair feels unmistakably yours.",
    },
  },

  tr: {
    gallery: {
      eyebrow: "Alyans Koleksiyonu",
      title: "Birlikte geçirilecek",
      titleAccent: "bir ömür için alyanslar.",
      description:
        "Zamansız altın alyanslardan pırlanta detaylı ve çağdaş tasarımlara kadar her çift, oran, konfor ve elde bıraktığı his dikkate alınarak seçilir.",
      itemLabel: "Alyans Koleksiyonu",
      closingText: "İki yüzük. Tek söz.",
      closingAccent: "Önünüzde bir ömür var.",
      captions: [
        "Klasik Çift",
        "İki Renk Pavé",
        "Tektaş Detayı",
        "Örgü Rose Altın",
        "Pırlanta Eternity",
        "Sarı Altın Çift",
        "Üç Renk Set",
        "Kanallı Alyans",
        "Burgulu Pavé",
        "Rose & Beyaz Altın",
      ],
      alts: [
        "Fırçalanmış altın alyans ve pavé pırlanta alyans birlikte",
        "Beyaz altın ve rose altın pavé pırlanta alyanslar",
        "Platin alyanslar, birinde tek bezel pırlanta",
        "Rose altın alyanslar, birinde örgü dokulu desen",
        "Beyaz altın alyanslar, birinde tam sıra pırlanta eternity tasarım",
        "Sarı altın alyanslar, birinde tek pırlanta detayı",
        "Pavé pırlantalı beyaz ve rose altın alyanslar",
        "Kanallı sarı altın alyans ve rose altın pavé pırlanta alyans",
        "Kanallı sarı altın alyans ve burgulu rose altın pırlanta alyans",
        "Rose altın kanallı beyaz altın alyans ve burgulu pavé alyans",
      ],
    },
    craft: {
      eyebrow: "Sizinle Yaşamak İçin",
      title: "Her gün takılan bir yüzükte önemli olan detaylar",
      description:
        "Bir alyans günlük hayatın parçası olur. Konfor, oran, malzeme ve kişisel detaylar önemlidir; çünkü bu parça yıllar boyunca sizinle kalmak için tasarlanmıştır.",
      since: "LIDYA · 1989'DAN BERİ",
      closingText: "Düğün günü için yapıldı.",
      closingAccent: "Sonraki her gün için tasarlandı.",
      points: [
        {
          title: "Oran",
          description:
            "Genişlik, profil ve ağırlık elde dengeli hissettirmelidir. Doğru alyans dikkat çekicidir ama onu takan kişinin önüne geçmez.",
        },
        {
          title: "Konfor",
          description:
            "Bir alyans yalnızca özel bir gün için yapılmaz. İç profili, kenarları ve oturuşu, takılacağı sayısız günlük saat düşünülerek tasarlanır.",
        },
        {
          title: "Malzeme",
          description:
            "Platin ile 18 ayar beyaz, sarı veya rose altın; her biri farklı ton, ağırlık ve karakter sunar.",
        },
        {
          title: "Kişisel Detay",
          description:
            "Bir tarih, baş harfler veya özel bir mesaj, güzel bir yüzüğü yalnızca onu seçen iki kişiye ait bir parçaya dönüştürebilir.",
        },
      ],
    },
    cta: {
      title: "Her gün yaşayacağınız alyansları seçin",
      sub:
        "Birlikte özel bir randevuya gelin; doğru çift size tamamen ait hissettirene kadar oranları, metalleri, yüzeyleri ve detayları keşfedin.",
    },
  },

  sk: {
    gallery: {
      eyebrow: "Kolekcia obrúčok",
      title: "Obrúčky vytvorené pre",
      titleAccent: "spoločný život.",
      description:
        "Od nadčasových zlatých obrúčok až po diamantové a moderné dizajny je každý pár vybraný s dôrazom na proporcie, pohodlie a pocit pri nosení.",
      itemLabel: "Kolekcia obrúčok",
      closingText: "Dva prstene. Jeden sľub.",
      closingAccent: "Celý spoločný život pred vami.",
      captions: [
        "Klasický pár",
        "Dvojfarebné pavé",
        "Solitérny detail",
        "Pletené ružové zlato",
        "Diamantová eternity",
        "Pár zo žltého zlata",
        "Trojfarebný set",
        "Drážkovaná obrúčka",
        "Skrútené pavé",
        "Ružové & biele zlato",
      ],
      alts: [
        "Brúsená zlatá obrúčka a pavé diamantová obrúčka spolu",
        "Obrúčky z bieleho a ružového zlata s pavé diamantmi",
        "Platinové obrúčky, jedna s jediným diamantom v lunetovom osadení",
        "Obrúčky z ružového zlata, jedna s pletenou textúrou",
        "Obrúčky z bieleho zlata, jedna s plným diamantovým eternity osadením",
        "Obrúčky zo žltého zlata, jedna s jediným diamantovým detailom",
        "Obrúčky z bieleho a ružového zlata s pavé diamantmi",
        "Drážkovaná obrúčka zo žltého zlata s pavé obrúčkou z ružového zlata",
        "Drážkovaná obrúčka zo žltého zlata so skrútenou diamantovou obrúčkou z ružového zlata",
        "Obrúčka z bieleho zlata s drážkou z ružového zlata a skrútenou pavé obrúčkou",
      ],
    },
    craft: {
      eyebrow: "Vytvorené pre spoločný život",
      title: "Detaily, na ktorých záleží pri každodennom nosení",
      description:
        "Obrúčka sa stáva súčasťou každodenného života. Pohodlie, proporcie, materiál a osobný detail sú dôležité, pretože tento šperk má zostať s vami celé roky.",
      since: "LIDYA · OD ROKU 1989",
      closingText: "Vytvorené pre svadobný deň.",
      closingAccent: "Navrhnuté pre každý deň potom.",
      points: [
        {
          title: "Proporcie",
          description:
            "Šírka, profil a hmotnosť by mali na ruke pôsobiť vyvážene. Správna obrúčka má charakter, ale nikdy neprebíja osobu, ktorá ju nosí.",
        },
        {
          title: "Pohodlie",
          description:
            "Obrúčka nie je určená len na jednu príležitosť. Jej vnútorný profil, hrany a veľkosť sa navrhujú s ohľadom na nespočetné bežné hodiny každodenného nosenia.",
        },
        {
          title: "Materiál",
          description:
            "Platina a 18-karátové biele, žlté alebo ružové zlato prinášajú odlišný tón, hmotnosť aj charakter.",
        },
        {
          title: "Osobný detail",
          description:
            "Dátum, iniciály alebo súkromný odkaz môžu z krásnej obrúčky vytvoriť niečo, čo patrí iba dvom ľuďom, ktorí si ju vybrali.",
        },
      ],
    },
    cta: {
      title: "Vyberte si obrúčky, s ktorými budete žiť každý deň",
      sub:
        "Príďte spolu na súkromný termín a objavujte proporcie, kovy, povrchy a detaily, kým ten správny pár nebude pôsobiť jednoznačne ako váš.",
    },
  },

  cs: {
    gallery: {
      eyebrow: "Kolekce snubních prstenů",
      title: "Snubní prsteny vytvořené pro",
      titleAccent: "společný život.",
      description:
        "Od nadčasových zlatých prstenů až po diamantové a moderní návrhy je každý pár vybírán s důrazem na proporce, pohodlí a pocit při nošení.",
      itemLabel: "Kolekce snubních prstenů",
      closingText: "Dva prsteny. Jeden slib.",
      closingAccent: "Celý společný život před vámi.",
      captions: [
        "Klasický pár",
        "Dvoubarevné pavé",
        "Solitérní detail",
        "Pletené růžové zlato",
        "Diamantová eternity",
        "Pár ze žlutého zlata",
        "Tříbarevný set",
        "Drážkovaný prsten",
        "Kroucené pavé",
        "Růžové & bílé zlato",
      ],
      alts: [
        "Broušený zlatý prsten a pavé diamantový prsten společně",
        "Snubní prsteny z bílého a růžového zlata s pavé diamanty",
        "Platinové prsteny, jeden s jediným diamantem v lunetovém zasazení",
        "Prsteny z růžového zlata, jeden s pletenou texturou",
        "Prsteny z bílého zlata, jeden s plným diamantovým eternity osazením",
        "Prsteny ze žlutého zlata, jeden s jediným diamantovým detailem",
        "Prsteny z bílého a růžového zlata s pavé diamanty",
        "Drážkovaný prsten ze žlutého zlata s pavé prstenem z růžového zlata",
        "Drážkovaný prsten ze žlutého zlata s krouceným diamantovým prstenem z růžového zlata",
        "Prsten z bílého zlata s drážkou z růžového zlata a krouceným pavé prstenem",
      ],
    },
    craft: {
      eyebrow: "Vytvořené pro společný život",
      title: "Detaily, na kterých záleží při každodenním nošení",
      description:
        "Snubní prsten se stává součástí každodenního života. Pohodlí, proporce, materiál a osobní detail jsou důležité, protože tento šperk má zůstat s vámi celé roky.",
      since: "LIDYA · OD ROKU 1989",
      closingText: "Vytvořené pro svatební den.",
      closingAccent: "Navržené pro každý den potom.",
      points: [
        {
          title: "Proporce",
          description:
            "Šířka, profil a hmotnost by měly na ruce působit vyváženě. Správný prsten má výraz, ale nikdy nepřebíjí osobu, která ho nosí.",
        },
        {
          title: "Pohodlí",
          description:
            "Snubní prsten není určen jen pro jednu příležitost. Jeho vnitřní profil, hrany a velikost se navrhují s ohledem na nespočet běžných hodin každodenního nošení.",
        },
        {
          title: "Materiál",
          description:
            "Platina a 18karátové bílé, žluté nebo růžové zlato přinášejí rozdílný tón, hmotnost i charakter.",
        },
        {
          title: "Osobní detail",
          description:
            "Datum, iniciály nebo soukromá zpráva mohou z krásného prstenu vytvořit něco, co patří pouze dvěma lidem, kteří si jej vybrali.",
        },
      ],
    },
    cta: {
      title: "Vyberte si prsteny, se kterými budete žít každý den",
      sub:
        "Přijďte spolu na soukromý termín a objevujte proporce, kovy, povrchy a detaily, dokud ten správný pár nebude působit jednoznačně jako váš.",
    },
  },

  hu: {
    gallery: {
      eyebrow: "Karikagyűrű-kollekció",
      title: "Karikagyűrűk egy",
      titleAccent: "közös életre.",
      description:
        "Az időtlen aranykarikáktól a gyémántberakásos és kortárs formákig minden párat az arányok, a kényelem és a kézen való viselés érzete alapján választunk.",
      itemLabel: "Karikagyűrű-kollekció",
      closingText: "Két gyűrű. Egy ígéret.",
      closingAccent: "Egy egész közös élet előttetek.",
      captions: [
        "Klasszikus pár",
        "Kétszínű pavé",
        "Szoliter részlet",
        "Fonott rozéarany",
        "Gyémánt eternity",
        "Sárgaarany pár",
        "Háromszínű szett",
        "Barázdált gyűrű",
        "Csavart pavé",
        "Rozé- & fehérarany",
      ],
      alts: [
        "Matt aranygyűrű és pavé gyémántgyűrű együtt",
        "Fehér- és rozéarany karikagyűrűk pavé gyémántokkal",
        "Platinagyűrűk, az egyikben egyetlen keretbe foglalt gyémánttal",
        "Rozéarany gyűrűk, az egyik fonott textúrával",
        "Fehérarany gyűrűk, az egyik teljes gyémánt eternity kialakítással",
        "Sárgaarany gyűrűk, az egyik egyetlen gyémánt részlettel",
        "Fehér- és rozéarany gyűrűk pavé gyémántokkal",
        "Barázdált sárgaarany gyűrű rozéarany pavé gyémántgyűrűvel",
        "Barázdált sárgaarany gyűrű csavart rozéarany gyémántgyűrűvel",
        "Fehérarany gyűrű rozéarany vájattal és csavart pavé gyűrűvel",
      ],
    },
    craft: {
      eyebrow: "Veletek élni tervezve",
      title: "A részletek, amelyek mindennapi viselésnél igazán számítanak",
      description:
        "A karikagyűrű a mindennapi élet részévé válik. A kényelem, az arány, az anyag és a személyes részletek azért fontosak, mert ez az ékszer éveken át veletek marad.",
      since: "LIDYA · 1989 ÓTA",
      closingText: "Az esküvő napjára készül.",
      closingAccent: "Minden utána következő napra tervezve.",
      points: [
        {
          title: "Arány",
          description:
            "A szélességnek, profilnak és súlynak kiegyensúlyozottan kell hatnia a kézen.",
        },
        {
          title: "Kényelem",
          description:
            "A karikagyűrű nem csupán egy alkalomra készül. Belső profilját, széleit és illeszkedését a hétköznapi viselés számtalan órájára tervezzük.",
        },
        {
          title: "Anyag",
          description:
            "A platina, valamint a 18 karátos fehér-, sárga- vagy rozéarany mind más tónust, súlyt és karaktert ad.",
        },
        {
          title: "Személyes részlet",
          description:
            "Egy dátum, monogram vagy privát üzenet egy szép gyűrűt olyasmivé tehet, ami kizárólag ahhoz a két emberhez tartozik, akik kiválasztották.",
        },
      ],
    },
    cta: {
      title: "Válasszátok ki a gyűrűket, amelyeket minden nap viselni fogtok",
      sub:
        "Látogassatok el együtt egy privát időpontra, és fedezzétek fel az arányokat, fémeket, felületeket és részleteket, amíg a megfelelő pár egyértelműen a tieteknek nem érződik.",
    },
  },

  pl: {
    gallery: {
      eyebrow: "Kolekcja obrączek",
      title: "Obrączki stworzone na",
      titleAccent: "wspólne życie.",
      description:
        "Od ponadczasowych złotych obrączek po modele z diamentami i nowoczesne wzory — każda para jest wybierana z uwzględnieniem proporcji, wygody i tego, jak układa się na dłoni.",
      itemLabel: "Kolekcja obrączek",
      closingText: "Dwie obrączki. Jedna obietnica.",
      closingAccent: "Całe wspólne życie przed Wami.",
      captions: [
        "Klasyczna para",
        "Dwukolorowe pavé",
        "Akcent soliterowy",
        "Pleciona różowa złota obrączka",
        "Diamentowa eternity",
        "Para z żółtego złota",
        "Zestaw trójkolorowy",
        "Rowkowana obrączka",
        "Skręcone pavé",
        "Różowe & białe złoto",
      ],
      alts: [
        "Szczotkowana złota obrączka i obrączka pavé z diamentami",
        "Obrączki z białego i różowego złota z diamentami pavé",
        "Platynowe obrączki, jedna z pojedynczym diamentem w oprawie bezel",
        "Obrączki z różowego złota, jedna z plecioną fakturą",
        "Obrączki z białego złota, jedna z pełnym diamentowym wzorem eternity",
        "Obrączki z żółtego złota, jedna z pojedynczym diamentowym akcentem",
        "Obrączki z białego i różowego złota z diamentami pavé",
        "Rowkowana obrączka z żółtego złota z obrączką pavé z różowego złota",
        "Rowkowana obrączka z żółtego złota ze skręconą diamentową obrączką z różowego złota",
        "Obrączka z białego złota z rowkiem z różowego złota i skręconą obrączką pavé",
      ],
    },
    craft: {
      eyebrow: "Stworzone do wspólnego życia",
      title: "Detale, które mają znaczenie przy codziennym noszeniu",
      description:
        "Obrączka staje się częścią codziennego życia. Wygoda, proporcje, materiał i osobiste detale są ważne, ponieważ to biżuteria zaprojektowana, aby pozostać z Wami przez lata.",
      since: "LIDYA · OD 1989 ROKU",
      closingText: "Stworzone na dzień ślubu.",
      closingAccent: "Zaprojektowane na każdy kolejny dzień.",
      points: [
        {
          title: "Proporcje",
          description:
            "Szerokość, profil i waga powinny być dobrze wyważone na dłoni.",
        },
        {
          title: "Wygoda",
          description:
            "Obrączka nie jest tworzona wyłącznie na jedną okazję. Jej wewnętrzny profil, krawędzie i dopasowanie są projektowane z myślą o codziennym noszeniu.",
        },
        {
          title: "Materiał",
          description:
            "Platyna oraz 18-karatowe białe, żółte i różowe złoto mają inny ton, wagę i charakter.",
        },
        {
          title: "Osobisty detal",
          description:
            "Data, inicjały lub prywatna wiadomość mogą sprawić, że piękna obrączka stanie się czymś należącym wyłącznie do dwóch osób, które ją wybrały.",
        },
      ],
    },
    cta: {
      title: "Wybierzcie obrączki, z którymi będziecie żyć każdego dnia",
      sub:
        "Odwiedźcie nas razem podczas prywatnego spotkania i poznajcie proporcje, metale, wykończenia oraz detale, aż właściwa para stanie się bezsprzecznie Wasza.",
    },
  },

  ru: {
    gallery: {
      eyebrow: "Коллекция обручальных колец",
      title: "Обручальные кольца для",
      titleAccent: "целой совместной жизни.",
      description:
        "От классических золотых колец до моделей с бриллиантами и современным дизайном — каждая пара подбирается с учётом пропорций, комфорта и ощущения на руке.",
      itemLabel: "Коллекция обручальных колец",
      closingText: "Два кольца. Одно обещание.",
      closingAccent: "Вся жизнь впереди.",
      captions: [
        "Классическая пара",
        "Двухцветное паве",
        "Акцент-солитер",
        "Плетёное розовое золото",
        "Бриллиантовая eternity",
        "Пара из жёлтого золота",
        "Трёхцветный комплект",
        "Кольцо с канавкой",
        "Закрученное паве",
        "Розовое и белое золото",
      ],
      alts: [
        "Матовая золотая обручальная кольцо и кольцо с бриллиантами паве",
        "Обручальные кольца из белого и розового золота с бриллиантами паве",
        "Платиновые кольца, одно с одиночным бриллиантом",
        "Кольца из розового золота с плетёной текстурой",
        "Кольца из белого золота с бриллиантовой дорожкой eternity",
        "Кольца из жёлтого золота с одиночным бриллиантом",
        "Кольца из белого и розового золота с бриллиантами паве",
        "Кольцо из жёлтого золота с канавкой и кольцо из розового золота с паве",
        "Кольцо из жёлтого золота с канавкой и закрученное кольцо из розового золота",
        "Кольцо из белого золота с розовой вставкой и закрученное паве",
      ],
    },
    craft: {
      eyebrow: "Созданы для жизни вместе",
      title: "Детали, которые важны при ежедневном ношении",
      description:
        "Обручальное кольцо становится частью повседневной жизни. Комфорт, пропорции, материал и личные детали важны, потому что это украшение остаётся с вами на долгие годы.",
      since: "LIDYA · С 1989 ГОДА",
      closingText: "Созданы для дня свадьбы.",
      closingAccent: "Продуманы для каждого дня после.",
      points: [
        {
          title: "Пропорции",
          description:
            "Ширина, профиль и вес должны ощущаться на руке гармонично и сбалансированно.",
        },
        {
          title: "Комфорт",
          description:
            "Обручальное кольцо создаётся не только для церемонии. Внутренний профиль, края и посадка рассчитаны на ежедневное ношение.",
        },
        {
          title: "Материал",
          description:
            "Платина и 18-каратное белое, жёлтое или розовое золото отличаются оттенком, весом и характером.",
        },
        {
          title: "Личная деталь",
          description:
            "Дата, инициалы или личное послание превращают красивое кольцо в нечто, принадлежащее только вам двоим.",
        },
      ],
    },
    cta: {
      title: "Выберите кольца, которые будут с вами каждый день",
      sub:
        "Приходите вместе на индивидуальную встречу и изучите пропорции, металлы, отделку и детали, пока не найдёте пару, которая ощущается именно вашей.",
    },
  },

  nl: {
    gallery: {
      eyebrow: "De trouwringencollectie",
      title: "Trouwringen gemaakt voor",
      titleAccent: "een leven samen.",
      description:
        "Van tijdloze gouden ringen tot diamanten en moderne ontwerpen: elk paar wordt gekozen met aandacht voor verhouding, comfort en hoe het op de hand aanvoelt.",
      itemLabel: "Trouwringencollectie",
      closingText: "Twee ringen. Eén belofte.",
      closingAccent: "Een heel leven samen voor jullie.",
      captions: [
        "Klassiek paar",
        "Tweekleurig pavé",
        "Solitair accent",
        "Gevlochten roségoud",
        "Diamond eternity",
        "Geelgouden paar",
        "Driekleurige set",
        "Ring met groef",
        "Gedraaid pavé",
        "Rosé- & witgoud",
      ],
      alts: [
        "Geborstelde gouden ring met pavé diamanten ring",
        "Witgouden en roségouden trouwringen met pavé diamanten",
        "Platina ringen, één met een enkele diamant",
        "Roségouden ringen met gevlochten textuur",
        "Witgouden ringen met volledige diamant eternity-band",
        "Geelgouden ringen met één diamantaccent",
        "Wit- en roségouden ringen met pavé diamanten",
        "Geelgouden ring met groef en roségouden pavé ring",
        "Geelgouden ring met groef en gedraaide roségouden diamanten ring",
        "Witgouden ring met roségouden groef en gedraaide pavé ring",
      ],
    },
    craft: {
      eyebrow: "Gemaakt om met u mee te leven",
      title: "De details die tellen wanneer een ring elke dag wordt gedragen",
      description:
        "Een trouwring wordt onderdeel van het dagelijks leven. Comfort, verhouding, materiaal en persoonlijke details zijn belangrijk omdat dit een sieraad is dat jarenlang meegaat.",
      since: "LIDYA · SINDS 1989",
      closingText: "Gemaakt voor de trouwdag.",
      closingAccent: "Ontworpen voor elke dag daarna.",
      points: [
        {
          title: "Verhouding",
          description:
            "Breedte, profiel en gewicht moeten gebalanceerd aanvoelen op de hand.",
        },
        {
          title: "Comfort",
          description:
            "Een trouwring is niet alleen voor één gelegenheid. Binnenzijde, randen en pasvorm zijn bedoeld voor dagelijks gebruik.",
        },
        {
          title: "Materiaal",
          description:
            "Platina en 18-karaats wit-, geel- of roségoud hebben elk hun eigen kleur, gewicht en karakter.",
        },
        {
          title: "Persoonlijk detail",
          description:
            "Een datum, initialen of een persoonlijke boodschap kan een mooie ring veranderen in iets dat alleen van jullie twee is.",
        },
      ],
    },
    cta: {
      title: "Kies de ringen die u elke dag zult dragen",
      sub:
        "Kom samen langs voor een privéafspraak en ontdek verhoudingen, metalen, afwerkingen en details totdat het juiste paar onmiskenbaar als het uwe voelt.",
    },
  },

  da: {
    gallery: {
      eyebrow: "Vielsesringskollektionen",
      title: "Vielsesringe skabt til",
      titleAccent: "et helt liv sammen.",
      description:
        "Fra tidløse guldringe til diamantbesatte og moderne designs vælges hvert par med fokus på proportioner, komfort og hvordan det føles på hånden.",
      itemLabel: "Vielsesringskollektionen",
      closingText: "To ringe. Ét løfte.",
      closingAccent: "Et helt liv foran jer.",
      captions: [
        "Klassisk par",
        "Tofarvet pavé",
        "Solitær-detalje",
        "Flettet rosaguld",
        "Diamant eternity",
        "Par i gult guld",
        "Trefarvet sæt",
        "Ring med rille",
        "Snoet pavé",
        "Rosé- & hvidguld",
      ],
      alts: [
        "Børstet guldring med pavé diamantring",
        "Hvidgulds- og rosaguldsringe med pavé diamanter",
        "Platinringe, én med en enkelt diamant",
        "Rosaguldsringe med flettet struktur",
        "Hvidguldsringe med fuld diamant eternity",
        "Guldringe med en enkelt diamantdetalje",
        "Hvid- og rosaguldsringe med pavé diamanter",
        "Guldring med rille og rosaguldsring med pavé",
        "Guldring med rille og snoet rosaguldsring med diamanter",
        "Hvidguldsring med rosaguldsrille og snoet pavé-ring",
      ],
    },
    craft: {
      eyebrow: "Skabt til livet sammen",
      title: "Detaljerne der betyder noget, når ringen bæres hver dag",
      description:
        "En vielsesring bliver en del af hverdagen. Komfort, proportioner, materiale og personlige detaljer betyder noget, fordi ringen skal følge jer i mange år.",
      since: "LIDYA · SIDEN 1989",
      closingText: "Skabt til bryllupsdagen.",
      closingAccent: "Designet til hver dag bagefter.",
      points: [
        {
          title: "Proportioner",
          description:
            "Bredde, profil og vægt skal føles afbalanceret på hånden.",
        },
        {
          title: "Komfort",
          description:
            "En vielsesring er ikke kun skabt til én anledning. Inderside, kanter og pasform er tænkt til daglig brug.",
        },
        {
          title: "Materiale",
          description:
            "Platin og 18 kt. hvid-, gul- eller rosaguld har hver sin tone, vægt og karakter.",
        },
        {
          title: "Personlig detalje",
          description:
            "En dato, initialer eller en privat besked kan gøre en smuk ring til noget, der kun tilhører jer to.",
        },
      ],
    },
    cta: {
      title: "Vælg ringene, I skal leve med hver dag",
      sub:
        "Besøg os sammen til en privat aftale og udforsk proportioner, metaller, overflader og detaljer, indtil det rette par føles helt jeres.",
    },
  },

  fi: {
    gallery: {
      eyebrow: "Vihkisormusmallisto",
      title: "Vihkisormukset luotu",
      titleAccent: "yhteistä elämää varten.",
      description:
        "Ajattomista kultasormuksista timanttisormuksiin ja moderneihin muotoihin jokainen pari valitaan mittasuhteiden, mukavuuden ja käyttötuntuman perusteella.",
      itemLabel: "Vihkisormusmallisto",
      closingText: "Kaksi sormusta. Yksi lupaus.",
      closingAccent: "Koko yhteinen elämä edessä.",
      captions: [
        "Klassinen pari",
        "Kaksivärinen pavé",
        "Solitääriyksityiskohta",
        "Punottu ruusukulta",
        "Timantti eternity",
        "Keltakultainen pari",
        "Kolmivärinen setti",
        "Uritettu sormus",
        "Kierretty pavé",
        "Ruusu- & valkokulta",
      ],
      alts: [
        "Harjattu kultasormus ja pavé-timanttisormus",
        "Valko- ja ruusukultaiset vihkisormukset pavé-timanteilla",
        "Platinarenkaat, toisessa yksi timantti",
        "Ruusukultaiset sormukset punotulla pinnalla",
        "Valkokultaiset sormukset täydellä timantti eternity -rivillä",
        "Keltakultaiset sormukset yhdellä timanttiyksityiskohdalla",
        "Valko- ja ruusukultaiset sormukset pavé-timanteilla",
        "Uritettu keltakultainen sormus ja ruusukultainen pavé-sormus",
        "Uritettu keltakultainen sormus ja kierretty ruusukultainen timanttisormus",
        "Valkokultainen sormus ruusukultaisella uralla ja kierretty pavé-sormus",
      ],
    },
    craft: {
      eyebrow: "Luotu elämään kanssasi",
      title: "Yksityiskohdat, joilla on merkitystä päivittäisessä käytössä",
      description:
        "Vihkisormuksesta tulee osa arkea. Mukavuus, mittasuhteet, materiaali ja henkilökohtaiset yksityiskohdat ovat tärkeitä, koska sormus on tarkoitettu kestämään vuosia.",
      since: "LIDYA · VUODESTA 1989",
      closingText: "Luotu hääpäivää varten.",
      closingAccent: "Suunniteltu jokaiseen päivään sen jälkeen.",
      points: [
        {
          title: "Mittasuhteet",
          description:
            "Leveyden, profiilin ja painon tulee tuntua tasapainoiselta kädessä.",
        },
        {
          title: "Mukavuus",
          description:
            "Vihkisormus ei ole vain yhtä päivää varten. Sisäprofiili, reunat ja istuvuus suunnitellaan päivittäiseen käyttöön.",
        },
        {
          title: "Materiaali",
          description:
            "Platina sekä 18 karaatin valko-, kelta- ja ruusukulta tarjoavat kukin oman sävynsä, painonsa ja luonteensa.",
        },
        {
          title: "Henkilökohtainen yksityiskohta",
          description:
            "Päivämäärä, nimikirjaimet tai yksityinen viesti voi tehdä kauniista sormuksesta vain teille kahdelle kuuluvan.",
        },
      ],
    },
    cta: {
      title: "Valitkaa sormukset, joita käytätte joka päivä",
      sub:
        "Tulkaa yhdessä yksityiseen tapaamiseen ja tutustukaa mittasuhteisiin, metalleihin, viimeistelyihin ja yksityiskohtiin, kunnes oikea pari tuntuu täysin omalta.",
    },
  },

  sv: {
    gallery: {
      eyebrow: "Vigselringskollektionen",
      title: "Vigselringar skapade för",
      titleAccent: "ett helt liv tillsammans.",
      description:
        "Från tidlösa guldringar till diamantinfattade och moderna designer väljs varje par med fokus på proportion, komfort och känslan på handen.",
      itemLabel: "Vigselringskollektionen",
      closingText: "Två ringar. Ett löfte.",
      closingAccent: "Ett helt liv framför er.",
      captions: [
        "Klassiskt par",
        "Tvåfärgat pavé",
        "Solitärdetalj",
        "Flätat roséguld",
        "Diamant eternity",
        "Par i gult guld",
        "Trefärgat set",
        "Ring med spår",
        "Tvinnat pavé",
        "Rosé- & vitguld",
      ],
      alts: [
        "Borstad guldring och pavé-diamantring",
        "Vitgulds- och roséguldsringar med pavé-diamanter",
        "Platinaringar, en med en enda diamant",
        "Roséguldsringar med flätad struktur",
        "Vitguldsringar med full diamant eternity",
        "Guldringar med en enda diamantdetalj",
        "Vit- och roséguldsringar med pavé-diamanter",
        "Guldring med spår och roséguldsring med pavé",
        "Guldring med spår och tvinnad roséguldsring med diamanter",
        "Vitguldsring med roséguldsspår och tvinnad pavé-ring",
      ],
    },
    craft: {
      eyebrow: "Skapade för livet tillsammans",
      title: "Detaljerna som betyder något när ringen bärs varje dag",
      description:
        "En vigselring blir en del av vardagen. Komfort, proportion, material och personliga detaljer är viktiga eftersom ringen är tänkt att följa er i många år.",
      since: "LIDYA · SEDAN 1989",
      closingText: "Skapade för bröllopsdagen.",
      closingAccent: "Designade för varje dag därefter.",
      points: [
        {
          title: "Proportion",
          description:
            "Bredd, profil och vikt ska kännas balanserade på handen.",
        },
        {
          title: "Komfort",
          description:
            "En vigselring är inte bara skapad för en dag. Insida, kanter och passform är utformade för daglig användning.",
        },
        {
          title: "Material",
          description:
            "Platina samt 18K vitt, gult eller roséguld har alla sin egen ton, vikt och karaktär.",
        },
        {
          title: "Personlig detalj",
          description:
            "Ett datum, initialer eller ett privat meddelande kan göra en vacker ring till något som bara tillhör er två.",
        },
      ],
    },
    cta: {
      title: "Välj ringarna ni kommer att bära varje dag",
      sub:
        "Besök oss tillsammans för ett privat möte och utforska proportioner, metaller, ytbehandlingar och detaljer tills rätt par känns helt och hållet ert.",
    },
  },

  fr: {
    gallery: {
      eyebrow: "La collection alliances",
      title: "Des alliances conçues pour",
      titleAccent: "toute une vie à deux.",
      description:
        "Des anneaux en or intemporels aux modèles sertis de diamants et aux designs contemporains, chaque paire est choisie avec attention portée aux proportions, au confort et au ressenti au doigt.",
      itemLabel: "Collection alliances",
      closingText: "Deux alliances. Une promesse.",
      closingAccent: "Toute une vie à venir.",
      captions: [
        "Paire classique",
        "Pavé bicolore",
        "Accent solitaire",
        "Or rose tressé",
        "Éternité diamant",
        "Paire en or jaune",
        "Ensemble tricolore",
        "Anneau rainuré",
        "Pavé torsadé",
        "Or rose & or blanc",
      ],
      alts: [
        "Alliance en or brossé avec alliance pavée de diamants",
        "Alliances en or blanc et or rose avec diamants pavé",
        "Alliances en platine, dont une avec un diamant unique",
        "Alliances en or rose avec texture tressée",
        "Alliances en or blanc avec tour complet de diamants",
        "Alliances en or jaune avec détail diamant",
        "Alliances en or blanc et rose avec diamants pavé",
        "Alliance en or jaune rainurée avec alliance pavée en or rose",
        "Alliance en or jaune rainurée avec alliance torsadée en or rose et diamants",
        "Alliance en or blanc avec rainure en or rose et alliance pavée torsadée",
      ],
    },
    craft: {
      eyebrow: "Conçues pour vivre avec vous",
      title: "Les détails qui comptent lorsqu’une alliance est portée chaque jour",
      description:
        "Une alliance devient une partie de la vie quotidienne. Le confort, les proportions, le matériau et les détails personnels comptent parce que ce bijou est conçu pour rester avec vous pendant des années.",
      since: "LIDYA · DEPUIS 1989",
      closingText: "Créées pour le jour du mariage.",
      closingAccent: "Pensées pour tous les jours qui suivent.",
      points: [
        {
          title: "Proportions",
          description:
            "La largeur, le profil et le poids doivent être équilibrés sur la main.",
        },
        {
          title: "Confort",
          description:
            "Une alliance n’est pas conçue pour une seule occasion. Son profil intérieur, ses bords et son ajustement sont pensés pour le quotidien.",
        },
        {
          title: "Matériau",
          description:
            "Le platine et l’or blanc, jaune ou rose 18 carats possèdent chacun leur propre tonalité, poids et caractère.",
        },
        {
          title: "Détail personnel",
          description:
            "Une date, des initiales ou un message privé peuvent transformer une belle alliance en quelque chose qui n’appartient qu’à vous deux.",
        },
      ],
    },
    cta: {
      title: "Choisissez les alliances que vous porterez chaque jour",
      sub:
        "Venez ensemble pour un rendez-vous privé et découvrez proportions, métaux, finitions et détails jusqu’à ce que la paire idéale vous ressemble pleinement.",
    },
  },

  it: {
    gallery: {
      eyebrow: "La collezione fedi",
      title: "Fedi nuziali create per",
      titleAccent: "una vita insieme.",
      description:
        "Dalle classiche fedi in oro ai modelli con diamanti e ai design contemporanei, ogni coppia viene scelta considerando proporzioni, comfort e sensazione sulla mano.",
      itemLabel: "Collezione fedi",
      closingText: "Due anelli. Una promessa.",
      closingAccent: "Una vita intera ancora da vivere.",
      captions: [
        "Coppia classica",
        "Pavé bicolore",
        "Dettaglio solitario",
        "Oro rosa intrecciato",
        "Eternity di diamanti",
        "Coppia in oro giallo",
        "Set tricolore",
        "Fede scanalata",
        "Pavé intrecciato",
        "Oro rosa & bianco",
      ],
      alts: [
        "Fede in oro satinato con fede pavé di diamanti",
        "Fedi in oro bianco e rosa con diamanti pavé",
        "Fedi in platino, una con un singolo diamante",
        "Fedi in oro rosa con trama intrecciata",
        "Fedi in oro bianco con giro completo di diamanti",
        "Fedi in oro giallo con singolo dettaglio diamantato",
        "Fedi in oro bianco e rosa con diamanti pavé",
        "Fede in oro giallo scanalata con fede pavé in oro rosa",
        "Fede in oro giallo scanalata con fede intrecciata in oro rosa e diamanti",
        "Fede in oro bianco con scanalatura in oro rosa e fede pavé intrecciata",
      ],
    },
    craft: {
      eyebrow: "Create per vivere con voi",
      title: "I dettagli che contano quando un anello viene indossato ogni giorno",
      description:
        "Una fede entra a far parte della vita quotidiana. Comfort, proporzioni, materiale e dettagli personali sono importanti perché questo gioiello è pensato per accompagnarvi per anni.",
      since: "LIDYA · DAL 1989",
      closingText: "Create per il giorno del matrimonio.",
      closingAccent: "Pensate per ogni giorno successivo.",
      points: [
        {
          title: "Proporzioni",
          description:
            "Larghezza, profilo e peso devono risultare equilibrati sulla mano.",
        },
        {
          title: "Comfort",
          description:
            "Una fede non è fatta solo per un’occasione. Profilo interno, bordi e vestibilità sono pensati per l’uso quotidiano.",
        },
        {
          title: "Materiale",
          description:
            "Platino e oro bianco, giallo o rosa 18 carati hanno ciascuno una tonalità, un peso e un carattere diversi.",
        },
        {
          title: "Dettaglio personale",
          description:
            "Una data, delle iniziali o un messaggio privato possono trasformare una bella fede in qualcosa che appartiene soltanto a voi due.",
        },
      ],
    },
    cta: {
      title: "Scegliete le fedi che indosserete ogni giorno",
      sub:
        "Venite insieme per un appuntamento privato e scoprite proporzioni, metalli, finiture e dettagli finché la coppia giusta non vi sembrerà davvero vostra.",
    },
  },

  es: {
    gallery: {
      eyebrow: "La colección de alianzas",
      title: "Alianzas creadas para",
      titleAccent: "toda una vida juntos.",
      description:
        "Desde alianzas de oro atemporales hasta modelos con diamantes y diseños contemporáneos, cada pareja se elige prestando atención a las proporciones, la comodidad y la sensación en la mano.",
      itemLabel: "Colección de alianzas",
      closingText: "Dos anillos. Una promesa.",
      closingAccent: "Toda una vida por delante.",
      captions: [
        "Pareja clásica",
        "Pavé bicolor",
        "Acento solitario",
        "Oro rosa trenzado",
        "Eternity de diamantes",
        "Pareja de oro amarillo",
        "Set tricolor",
        "Anillo acanalado",
        "Pavé retorcido",
        "Oro rosa & blanco",
      ],
      alts: [
        "Alianza de oro cepillado con alianza pavé de diamantes",
        "Alianzas de oro blanco y rosa con diamantes pavé",
        "Alianzas de platino, una con un solo diamante",
        "Alianzas de oro rosa con textura trenzada",
        "Alianzas de oro blanco con aro completo de diamantes",
        "Alianzas de oro amarillo con un detalle de diamante",
        "Alianzas de oro blanco y rosa con diamantes pavé",
        "Alianza de oro amarillo acanalada con alianza pavé de oro rosa",
        "Alianza de oro amarillo acanalada con alianza retorcida de oro rosa y diamantes",
        "Alianza de oro blanco con canal de oro rosa y alianza pavé retorcida",
      ],
    },
    craft: {
      eyebrow: "Creadas para vivir con vosotros",
      title: "Los detalles que importan cuando un anillo se lleva cada día",
      description:
        "Una alianza se convierte en parte de la vida cotidiana. La comodidad, las proporciones, el material y los detalles personales importan porque esta pieza está diseñada para acompañaros durante años.",
      since: "LIDYA · DESDE 1989",
      closingText: "Creadas para el día de la boda.",
      closingAccent: "Diseñadas para todos los días después.",
      points: [
        {
          title: "Proporción",
          description:
            "La anchura, el perfil y el peso deben sentirse equilibrados en la mano.",
        },
        {
          title: "Comodidad",
          description:
            "Una alianza no se crea solo para una ocasión. Su interior, bordes y ajuste están pensados para el uso diario.",
        },
        {
          title: "Material",
          description:
            "El platino y el oro blanco, amarillo o rosa de 18 quilates aportan cada uno un tono, peso y carácter distintos.",
        },
        {
          title: "Detalle personal",
          description:
            "Una fecha, unas iniciales o un mensaje privado pueden convertir una hermosa alianza en algo que pertenece únicamente a vosotros dos.",
        },
      ],
    },
    cta: {
      title: "Elegid las alianzas que llevaréis cada día",
      sub:
        "Visitadnos juntos para una cita privada y descubrid proporciones, metales, acabados y detalles hasta que la pareja adecuada se sienta completamente vuestra.",
    },
  },
};

const WEDDING_IMAGES = [
  "/images/wedding-rings/ring-01.jpg",
  "/images/wedding-rings/ring-02.jpg",
  "/images/wedding-rings/ring-03.jpg",
  "/images/wedding-rings/ring-04.jpg",
  "/images/wedding-rings/ring-05.jpg",
  "/images/wedding-rings/ring-06.jpg",
  "/images/wedding-rings/ring-07.jpg",
  "/images/wedding-rings/ring-08.jpg",
  "/images/wedding-rings/ring-09.jpg",
  "/images/wedding-rings/ring-10.jpg",
];

export default function WeddingRingsContent() {
  const { locale } = useLanguage();

  const copy =
    WEDDING_COPY[locale] ?? WEDDING_COPY.en;

  const galleryItems = WEDDING_IMAGES.map((image, index) => ({
    image,
    caption:
      copy.gallery.captions[index] ??
      WEDDING_COPY.en.gallery.captions[index] ??
      copy.gallery.itemLabel,
    alt:
      copy.gallery.alts[index] ??
      WEDDING_COPY.en.gallery.alts[index] ??
      copy.gallery.itemLabel,
  }));

  return (
    <>
      <Header />

      <main>
        <WeddingRingsCinematicHero />

        <CategoryGallery
          icon={<RingIcon />}
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
          since={copy.craft.since}
          closingText={copy.craft.closingText}
          closingAccent={copy.craft.closingAccent}
          points={copy.craft.points}
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