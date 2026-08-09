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

const WEDDING_COPY: Record<
  Locale,
  {
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
            "Platinum and 18k white, yellow or rose gold each bring a different tone, weight and character. The choice should suit both your style and the way you intend to wear the ring.",
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
      title: "Die Details, die zählen, wenn ein Ring jeden Tag getragen wird",
      description:
        "Ein Trauring wird Teil des täglichen Lebens. Komfort, Proportion, Material und persönliche Details sind wichtig, weil dieser Ring Sie viele Jahre begleiten soll.",
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
            "Platin sowie 18-karätiges Weiß-, Gelb- oder Roségold bringen jeweils einen eigenen Ton, ein eigenes Gewicht und einen eigenen Charakter mit. Die Wahl sollte zu Ihrem Stil und Ihrer Art, den Ring zu tragen, passen.",
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
            "Platin ile 18 ayar beyaz, sarı veya rose altın; her biri farklı ton, ağırlık ve karakter sunar. Seçim hem stilinize hem de yüzüğü nasıl kullanacağınıza uygun olmalıdır.",
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
            "Platina a 18-karátové biele, žlté alebo ružové zlato prinášajú odlišný tón, hmotnosť aj charakter. Výber by mal zodpovedať vášmu štýlu aj spôsobu, akým chcete obrúčku nosiť.",
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
            "Platina a 18karátové bílé, žluté nebo růžové zlato přinášejí rozdílný tón, hmotnost i charakter. Volba by měla odpovídat vašemu stylu i způsobu, jakým chcete prsten nosit.",
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
      closingText: "Az esküvő napjára készül.",
      closingAccent: "Minden utána következő napra tervezve.",
      points: [
        {
          title: "Arány",
          description:
            "A szélességnek, profilnak és súlynak kiegyensúlyozottan kell hatnia a kézen. A megfelelő gyűrű karakteres, de soha nem nyomja el azt, aki viseli.",
        },
        {
          title: "Kényelem",
          description:
            "A karikagyűrű nem csupán egy alkalomra készül. Belső profilját, széleit és illeszkedését a hétköznapi viselés számtalan órájára tervezzük.",
        },
        {
          title: "Anyag",
          description:
            "A platina, valamint a 18 karátos fehér-, sárga- vagy rozéarany mind más tónust, súlyt és karaktert ad. A választásnak illeszkednie kell a stílusotokhoz és ahhoz, ahogyan viselni szeretnétek a gyűrűt.",
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
      closingText: "Stworzone na dzień ślubu.",
      closingAccent: "Zaprojektowane na każdy kolejny dzień.",
      points: [
        {
          title: "Proporcje",
          description:
            "Szerokość, profil i waga powinny być dobrze wyważone na dłoni. Odpowiednia obrączka ma charakter, ale nigdy nie dominuje nad osobą, która ją nosi.",
        },
        {
          title: "Wygoda",
          description:
            "Obrączka nie jest tworzona wyłącznie na jedną okazję. Jej wewnętrzny profil, krawędzie i dopasowanie są projektowane z myślą o niezliczonych zwyczajnych godzinach codziennego noszenia.",
        },
        {
          title: "Materiał",
          description:
            "Platyna oraz 18-karatowe białe, żółte i różowe złoto mają inny ton, wagę i charakter. Wybór powinien pasować zarówno do Waszego stylu, jak i sposobu, w jaki chcecie nosić obrączkę.",
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
  const copy = WEDDING_COPY[locale];

  const galleryItems = WEDDING_IMAGES.map((image, index) => ({
    image,
    caption: copy.gallery.captions[index],
    alt: copy.gallery.alts[index],
  }));

  return (
    <>
      <Header />

      <main>
        {/* CINEMATIC HERO */}
        <WeddingRingsCinematicHero />

        {/* COLLECTION GALLERY */}
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

        {/* CRAFT / QUALITY */}
        <CategoryCraft
          eyebrow={copy.craft.eyebrow}
          title={copy.craft.title}
          description={copy.craft.description}
          closingText={copy.craft.closingText}
          closingAccent={copy.craft.closingAccent}
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