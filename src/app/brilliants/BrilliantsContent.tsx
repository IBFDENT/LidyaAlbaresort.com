"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";
import BrilliantsCinematicHero from "@/components/category/BrilliantsCinematicHero";

import { GemClusterIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type BrilliantsCopy = {
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    since: string;
    statementEyebrow: string;
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

const BRILLIANTS_COPY: Record<Locale, BrilliantsCopy> = {
  en: {
    hero: {
      eyebrow: "Brilliants",
      title1: "Where Light",
      title2: "Becomes Jewellery",
      description:
        "The brilliant cut was created for one extraordinary purpose — to transform light into fire. Every stone in our collection is selected for the way it comes alive in motion, revealing flashes of brilliance with every movement.",
      since: "LIDYA · SINCE 1989",
      statementEyebrow: "The Art of Light",
      statementBefore: "Made to catch the light.",
      statementAccent: "Created to keep it.",
      imageAlt:
        "LIDYA Brilliants diamond jewellery collection arranged on champagne fabric and natural stone",
    },
    gallery: {
      eyebrow: "The Brilliants Collection",
      title: "Jewellery shaped by",
      titleAccent: "light and brilliance.",
      description:
        "From timeless solitaires to diamond-set bracelets, earrings and pendants, each piece is selected for the way its stones interact with light — elegant at rest, extraordinary in motion.",
      itemLabel: "Brilliants Collection",
      closingText: "Every movement catches the light.",
      closingAccent: "Every glance reveals something new.",
      captions: [
        "Solitaire Ring",
        "Stud Earrings",
        "Classic Solitaire",
        "Eternity Band",
        "Diamond Pendant",
        "Tennis Bracelet",
        "Eternity Detail",
        "Pavé Pendant",
        "Teardrop Halo",
        "The Set",
      ],
      alts: [
        "Brilliant-cut solitaire diamond ring",
        "Brilliant-cut diamond stud earrings",
        "Six-prong brilliant-cut solitaire diamond ring",
        "Brilliant-cut diamond eternity band",
        "Brilliant-cut diamond pendant necklace",
        "Brilliant-cut diamond tennis bracelet",
        "Brilliant-cut diamond eternity band shown at an angle",
        "Brilliant-cut diamond pendant with pavé-set bail",
        "Pear-shaped diamond pendant surrounded by a diamond halo",
        "Matching diamond ring, earrings and necklace set",
      ],
    },
    craft: {
      eyebrow: "The Beauty of Brilliance",
      title:
        "True brilliance begins with the way a diamond meets the light",
      description:
        "A beautiful diamond is more than its size. Cut, proportion, movement and setting work together to determine how vividly the stone returns light to the eye.",
      closingText: "Light reveals the brilliance.",
      closingAccent: "Time reveals its value.",
      points: [
        {
          title: "Cut",
          description:
            "The proportions and facets of a brilliant-cut diamond determine how light travels through the stone and returns to the eye. A beautiful cut gives a diamond its unmistakable life.",
        },
        {
          title: "Fire",
          description:
            "As light moves through the diamond, it separates into flashes of colour. This play of spectral light gives a fine brilliant its captivating fire.",
        },
        {
          title: "Scintillation",
          description:
            "The flashes of light and contrast seen as the diamond, the wearer or the light source moves — the quality that makes a stone feel alive rather than simply bright.",
        },
        {
          title: "Setting",
          description:
            "A considered setting protects the stone while allowing light to reach it freely. The jewellery should frame the diamond, never compete with it.",
        },
      ],
    },
    cta: {
      title: "Some brilliance has to be seen in person",
      sub:
        "A photograph can capture a diamond's form, but not the way it comes alive in light. Discover the Brilliants collection during a private visit to one of our boutiques.",
    },
  },

  de: {
    hero: {
      eyebrow: "Brillanten",
      title1: "Wo Licht",
      title2: "zu Schmuck wird",
      description:
        "Der Brillantschliff wurde für einen außergewöhnlichen Zweck geschaffen — Licht in Feuer zu verwandeln. Jeder Stein unserer Kollektion wird danach ausgewählt, wie lebendig er sich in Bewegung zeigt und bei jedem Moment neue Lichtreflexe offenbart.",
      since: "LIDYA · SEIT 1989",
      statementEyebrow: "Die Kunst des Lichts",
      statementBefore: "Geschaffen, um Licht einzufangen.",
      statementAccent: "Gemacht, um es zu bewahren.",
      imageAlt:
        "LIDYA Brillantenkollektion auf champagnerfarbenem Stoff und Naturstein arrangiert",
    },
    gallery: {
      eyebrow: "Die Brillanten-Kollektion",
      title: "Schmuck geprägt von",
      titleAccent: "Licht und Brillanz.",
      description:
        "Von zeitlosen Solitären bis zu diamantbesetzten Armbändern, Ohrringen und Anhängern wird jedes Schmuckstück danach ausgewählt, wie seine Steine mit dem Licht spielen — elegant in Ruhe, außergewöhnlich in Bewegung.",
      itemLabel: "Brillanten-Kollektion",
      closingText: "Jede Bewegung fängt das Licht ein.",
      closingAccent: "Jeder Blick zeigt etwas Neues.",
      captions: [
        "Solitär-Ring",
        "Ohrstecker",
        "Klassischer Solitär",
        "Eternity-Ring",
        "Diamantanhänger",
        "Tennisarmband",
        "Eternity-Detail",
        "Pavé-Anhänger",
        "Tropfen-Halo",
        "Das Set",
      ],
      alts: [
        "Solitär-Diamantring im Brillantschliff",
        "Diamant-Ohrstecker im Brillantschliff",
        "Solitär-Diamantring im Brillantschliff mit sechs Krappen",
        "Diamant-Eternity-Ring im Brillantschliff",
        "Diamantanhänger im Brillantschliff",
        "Diamant-Tennisarmband im Brillantschliff",
        "Diamant-Eternity-Ring aus schräger Perspektive",
        "Diamantanhänger mit pavébesetzter Öse",
        "Tropfenförmiger Diamantanhänger mit Diamant-Halo",
        "Passendes Set aus Diamantring, Ohrringen und Halskette",
      ],
    },
    craft: {
      eyebrow: "Die Schönheit der Brillanz",
      title:
        "Wahre Brillanz beginnt dort, wo der Diamant dem Licht begegnet",
      description:
        "Ein schöner Diamant ist mehr als seine Größe. Schliff, Proportion, Bewegung und Fassung bestimmen gemeinsam, wie intensiv der Stein das Licht zum Auge zurückwirft.",
      closingText: "Licht zeigt die Brillanz.",
      closingAccent: "Zeit zeigt den Wert.",
      points: [
        {
          title: "Schliff",
          description:
            "Proportionen und Facetten eines Brillanten bestimmen, wie das Licht durch den Stein wandert und zum Auge zurückkehrt. Ein hervorragender Schliff verleiht dem Diamanten sein unverwechselbares Leben.",
        },
        {
          title: "Feuer",
          description:
            "Wenn Licht durch den Diamanten fällt, zerlegt es sich in farbige Lichtblitze. Dieses Spektralfarbspiel verleiht einem feinen Brillanten sein faszinierendes Feuer.",
        },
        {
          title: "Szintillation",
          description:
            "Die Lichtblitze und Kontraste, die entstehen, wenn sich Diamant, Träger oder Lichtquelle bewegen — jene Eigenschaft, durch die ein Stein lebendig und nicht nur hell wirkt.",
        },
        {
          title: "Fassung",
          description:
            "Eine durchdachte Fassung schützt den Stein und lässt gleichzeitig möglichst viel Licht an ihn gelangen. Der Schmuck soll den Diamanten rahmen, niemals mit ihm konkurrieren.",
        },
      ],
    },
    cta: {
      title: "Manche Brillanz muss man persönlich erleben",
      sub:
        "Ein Foto kann die Form eines Diamanten zeigen, aber nicht, wie er im Licht lebendig wird. Entdecken Sie die Brillanten-Kollektion bei einem privaten Besuch in einer unserer Boutiquen.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Pırlantalar",
      title1: "Işığın",
      title2: "Mücevhere Dönüştüğü Yer",
      description:
        "Brilliant kesim tek bir olağanüstü amaç için yaratıldı — ışığı ateşe dönüştürmek. Koleksiyonumuzdaki her taş, hareket ettikçe canlanma ve her açıdan yeni ışıltılar gösterme özelliğine göre seçilir.",
      since: "LIDYA · 1989'DAN BERİ",
      statementEyebrow: "Işığın Sanatı",
      statementBefore: "Işığı yakalamak için yaratıldı.",
      statementAccent: "Onu korumak için tasarlandı.",
      imageAlt:
        "Şampanya kumaşı ve doğal taş üzerinde düzenlenmiş LIDYA pırlanta koleksiyonu",
    },
    gallery: {
      eyebrow: "Pırlanta Koleksiyonu",
      title: "Işık ve",
      titleAccent: "parlaklıkla şekillenen mücevherler.",
      description:
        "Zamansız tektaşlardan pırlanta işlemeli bilekliklere, küpelere ve kolyelere kadar her parça, taşlarının ışıkla etkileşimine göre seçilir — dururken zarif, hareket halinde olağanüstü.",
      itemLabel: "Pırlanta Koleksiyonu",
      closingText: "Her hareket ışığı yakalar.",
      closingAccent: "Her bakış yeni bir detay gösterir.",
      captions: [
        "Tektaş Yüzük",
        "Pırlanta Küpeler",
        "Klasik Tektaş",
        "Eternity Yüzük",
        "Pırlanta Kolye Ucu",
        "Tenis Bileklik",
        "Eternity Detayı",
        "Pavé Kolye Ucu",
        "Damla Halo",
        "Takım",
      ],
      alts: [
        "Brilliant kesim tektaş pırlanta yüzük",
        "Brilliant kesim pırlanta küpeler",
        "Altı tırnaklı brilliant kesim tektaş yüzük",
        "Brilliant kesim pırlanta eternity yüzük",
        "Brilliant kesim pırlanta kolye ucu",
        "Brilliant kesim pırlanta tenis bileklik",
        "Açılı görünümde pırlanta eternity yüzük",
        "Pavé taşlı bağlantıya sahip pırlanta kolye ucu",
        "Pırlanta halo ile çevrili damla kesim pırlanta kolye ucu",
        "Uyumlu pırlanta yüzük, küpe ve kolye takımı",
      ],
    },
    craft: {
      eyebrow: "Parlaklığın Güzelliği",
      title:
        "Gerçek parlaklık, pırlantanın ışıkla buluştuğu anda başlar",
      description:
        "Güzel bir pırlanta yalnızca büyüklüğüyle tanımlanmaz. Kesim, oran, hareket ve montür; taşın ışığı göze ne kadar canlı geri yansıttığını birlikte belirler.",
      closingText: "Işık parlaklığı gösterir.",
      closingAccent: "Zaman değerini gösterir.",
      points: [
        {
          title: "Kesim",
          description:
            "Brilliant kesim bir pırlantanın oranları ve fasetleri, ışığın taşın içinden nasıl geçtiğini ve göze nasıl geri döndüğünü belirler. Güzel bir kesim pırlantaya eşsiz canlılığını verir.",
        },
        {
          title: "Ateş",
          description:
            "Işık pırlantanın içinde ilerlerken renkli yansımalara ayrılır. Bu spektral ışık oyunu kaliteli bir pırlantaya büyüleyici ateşini verir.",
        },
        {
          title: "Işıltı",
          description:
            "Pırlanta, onu takan kişi veya ışık kaynağı hareket ettikçe görülen ışık ve kontrast parlamaları — taşı sadece parlak değil, canlı hissettiren özellik.",
        },
        {
          title: "Montür",
          description:
            "İyi tasarlanmış bir montür taşı korurken ışığın ona özgürce ulaşmasını sağlar. Mücevher pırlantayı çerçevelemeli, onunla yarışmamalıdır.",
        },
      ],
    },
    cta: {
      title: "Bazı ışıltılar yakından görülmelidir",
      sub:
        "Bir fotoğraf pırlantanın formunu gösterebilir, ancak ışıkta nasıl canlandığını gösteremez. Pırlanta koleksiyonunu butiklarımızdan birinde özel bir ziyaretle keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Brilianty",
      title1: "Keď sa svetlo",
      title2: "mení na šperk",
      description:
        "Briliantový výbrus vznikol s jediným výnimočným cieľom — premeniť svetlo na oheň. Každý kameň v našej kolekcii vyberáme podľa toho, ako ožíva v pohybe a ako pri každom pohybe odhaľuje nové záblesky.",
      since: "LIDYA · OD ROKU 1989",
      statementEyebrow: "Umenie svetla",
      statementBefore: "Vytvorené, aby zachytilo svetlo.",
      statementAccent: "Navrhnuté, aby si ho uchovalo.",
      imageAlt:
        "Kolekcia diamantových šperkov LIDYA naaranžovaná na šampanskom textile a prírodnom kameni",
    },
    gallery: {
      eyebrow: "Kolekcia briliantov",
      title: "Šperky formované",
      titleAccent: "svetlom a brilanciou.",
      description:
        "Od nadčasových solitérov až po diamantové náramky, náušnice a prívesky je každý šperk vybraný podľa toho, ako jeho kamene pracujú so svetlom — elegantný v pokoji, výnimočný v pohybe.",
      itemLabel: "Kolekcia briliantov",
      closingText: "Každý pohyb zachytí svetlo.",
      closingAccent: "Každý pohľad odhalí niečo nové.",
      captions: [
        "Solitérny prsteň",
        "Puzetové náušnice",
        "Klasický solitér",
        "Eternity prsteň",
        "Diamantový prívesok",
        "Tenisový náramok",
        "Detail eternity",
        "Pavé prívesok",
        "Kvapkový halo",
        "Súprava",
      ],
      alts: [
        "Solitérny diamantový prsteň s briliantovým výbrusom",
        "Puzetové diamantové náušnice s briliantovým výbrusom",
        "Šesťkrapňový solitérny diamantový prsteň",
        "Diamantový eternity prsteň",
        "Diamantový prívesok s briliantovým výbrusom",
        "Diamantový tenisový náramok",
        "Diamantový eternity prsteň z bočného uhla",
        "Diamantový prívesok s pavé osadeným očkom",
        "Kvapkový diamantový prívesok obklopený diamantovým halo",
        "Zladená súprava diamantového prsteňa, náušníc a náhrdelníka",
      ],
    },
    craft: {
      eyebrow: "Krása brilancie",
      title:
        "Skutočná brilancia začína tým, ako diamant pracuje so svetlom",
      description:
        "Krásny diamant nie je iba o veľkosti. Výbrus, proporcie, pohyb a osadenie spolu určujú, ako výrazne kameň vracia svetlo späť k oku.",
      closingText: "Svetlo odhaľuje brilanciu.",
      closingAccent: "Čas odhaľuje hodnotu.",
      points: [
        {
          title: "Výbrus",
          description:
            "Proporcie a fazety briliantového výbrusu určujú, ako svetlo prechádza kameňom a vracia sa späť k oku. Kvalitný výbrus dáva diamantu jeho nezameniteľný život.",
        },
        {
          title: "Oheň",
          description:
            "Keď svetlo prechádza diamantom, rozkladá sa na farebné záblesky. Táto hra spektrálneho svetla dáva kvalitnému briliantu jeho fascinujúci oheň.",
        },
        {
          title: "Scintilácia",
          description:
            "Záblesky svetla a kontrastu, ktoré vidíme pri pohybe diamantu, nositeľa alebo svetelného zdroja — vlastnosť, vďaka ktorej kameň pôsobí živo, nie iba jasne.",
        },
        {
          title: "Osadenie",
          description:
            "Premyslené osadenie chráni kameň a zároveň umožňuje svetlu, aby sa k nemu dostalo čo najvoľnejšie. Šperk má diamant rámovať, nie s ním súperiť.",
        },
      ],
    },
    cta: {
      title: "Niektorú brilanciu treba vidieť osobne",
      sub:
        "Fotografia dokáže zachytiť tvar diamantu, ale nie to, ako ožíva vo svetle. Objavte kolekciu Brilliants počas súkromnej návštevy jedného z našich butikov.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Brilianty",
      title1: "Když se světlo",
      title2: "mění ve šperk",
      description:
        "Briliantový brus vznikl s jediným výjimečným cílem — proměnit světlo v oheň. Každý kámen v naší kolekci vybíráme podle toho, jak ožívá v pohybu a jak při každém pohybu odhaluje nové záblesky.",
      since: "LIDYA · OD ROKU 1989",
      statementEyebrow: "Umění světla",
      statementBefore: "Vytvořeno, aby zachytilo světlo.",
      statementAccent: "Navrženo, aby si ho uchovalo.",
      imageAlt:
        "Kolekce diamantových šperků LIDYA naaranžovaná na šampaňské látce a přírodním kameni",
    },
    gallery: {
      eyebrow: "Kolekce briliantů",
      title: "Šperky formované",
      titleAccent: "světlem a brilancí.",
      description:
        "Od nadčasových solitérů až po diamantové náramky, náušnice a přívěsky je každý šperk vybírán podle toho, jak jeho kameny pracují se světlem — elegantní v klidu, výjimečný v pohybu.",
      itemLabel: "Kolekce briliantů",
      closingText: "Každý pohyb zachytí světlo.",
      closingAccent: "Každý pohled odhalí něco nového.",
      captions: [
        "Solitérní prsten",
        "Puzetové náušnice",
        "Klasický solitér",
        "Eternity prsten",
        "Diamantový přívěsek",
        "Tenisový náramek",
        "Detail eternity",
        "Pavé přívěsek",
        "Kapkový halo",
        "Souprava",
      ],
      alts: [
        "Solitérní diamantový prsten s briliantovým brusem",
        "Puzetové diamantové náušnice s briliantovým brusem",
        "Šestikrapnový solitérní diamantový prsten",
        "Diamantový eternity prsten",
        "Diamantový přívěsek s briliantovým brusem",
        "Diamantový tenisový náramek",
        "Diamantový eternity prsten z bočního úhlu",
        "Diamantový přívěsek s pavé osazeným očkem",
        "Kapkový diamantový přívěsek obklopený diamantovým halo",
        "Sladěná souprava diamantového prstenu, náušnic a náhrdelníku",
      ],
    },
    craft: {
      eyebrow: "Krása brilance",
      title:
        "Skutečná brilance začíná tím, jak diamant pracuje se světlem",
      description:
        "Krásný diamant není jen o velikosti. Brus, proporce, pohyb a osazení společně určují, jak výrazně kámen vrací světlo zpět k oku.",
      closingText: "Světlo odhaluje brilanci.",
      closingAccent: "Čas odhaluje hodnotu.",
      points: [
        {
          title: "Brus",
          description:
            "Proporce a fazety briliantového brusu určují, jak světlo prochází kamenem a vrací se zpět k oku. Kvalitní brus dává diamantu jeho nezaměnitelný život.",
        },
        {
          title: "Oheň",
          description:
            "Když světlo prochází diamantem, rozkládá se na barevné záblesky. Tato hra spektrálního světla dává kvalitnímu briliantu jeho fascinující oheň.",
        },
        {
          title: "Scintilace",
          description:
            "Záblesky světla a kontrastu viditelné při pohybu diamantu, nositele nebo světelného zdroje — vlastnost, díky které kámen působí živě, nejen jasně.",
        },
        {
          title: "Osazení",
          description:
            "Promyšlené osazení chrání kámen a zároveň umožňuje světlu, aby se k němu dostalo co nejvolněji. Šperk má diamant rámovat, ne s ním soupeřit.",
        },
      ],
    },
    cta: {
      title: "Některou brilanci je třeba vidět osobně",
      sub:
        "Fotografie dokáže zachytit tvar diamantu, ale ne to, jak ožívá ve světle. Objevte kolekci Brilliants během soukromé návštěvy jednoho z našich butiků.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Briliánsok",
      title1: "Ahol a fény",
      title2: "ékszerré válik",
      description:
        "A briliáns csiszolást egyetlen különleges célra alkották meg — hogy a fényt tűzzé változtassa. Kollekciónk minden kövét az alapján választjuk ki, hogyan kel életre mozgás közben, és hogyan villan fel minden egyes mozdulatnál.",
      since: "LIDYA · 1989 ÓTA",
      statementEyebrow: "A fény művészete",
      statementBefore: "A fény megragadására készült.",
      statementAccent: "Azért alkotva, hogy megőrizze.",
      imageAlt:
        "LIDYA briliáns ékszerkollekció pezsgőszínű anyagon és természetes kövön elrendezve",
    },
    gallery: {
      eyebrow: "A Briliáns Kollekció",
      title: "Ékszerek, amelyeket",
      titleAccent: "a fény és a ragyogás formál.",
      description:
        "Az időtlen szoliterektől a gyémántberakásos karkötőkig, fülbevalókig és medálokig minden darabot annak alapján választunk ki, hogyan reagálnak kövei a fényre — nyugalomban elegánsak, mozgásban rendkívüliek.",
      itemLabel: "Briliáns Kollekció",
      closingText: "Minden mozdulat megragadja a fényt.",
      closingAccent: "Minden pillantás valami újat mutat.",
      captions: [
        "Szoliter gyűrű",
        "Bedugós fülbevaló",
        "Klasszikus szoliter",
        "Eternity gyűrű",
        "Gyémánt medál",
        "Tenisz karkötő",
        "Eternity részlet",
        "Pavé medál",
        "Csepp halo",
        "A szett",
      ],
      alts: [
        "Briliáns csiszolású szoliter gyémántgyűrű",
        "Briliáns csiszolású gyémánt fülbevalók",
        "Hatlábú foglalatú szoliter gyémántgyűrű",
        "Briliáns csiszolású gyémánt eternity gyűrű",
        "Briliáns csiszolású gyémánt medál",
        "Briliáns csiszolású gyémánt tenisz karkötő",
        "Gyémánt eternity gyűrű oldalnézetből",
        "Gyémánt medál pavé foglalatú függesztéssel",
        "Körte alakú gyémánt medál gyémánt halo kerettel",
        "Egymáshoz illő gyémántgyűrű, fülbevaló és nyaklánc szett",
      ],
    },
    craft: {
      eyebrow: "A ragyogás szépsége",
      title:
        "Az igazi ragyogás ott kezdődik, ahol a gyémánt találkozik a fénnyel",
      description:
        "Egy szép gyémánt több a méreténél. A csiszolás, az arányok, a mozgás és a foglalat együtt határozzák meg, milyen intenzíven veri vissza a kő a fényt a szem felé.",
      closingText: "A fény felfedi a ragyogást.",
      closingAccent: "Az idő felfedi az értéket.",
      points: [
        {
          title: "Csiszolás",
          description:
            "A briliáns csiszolás arányai és fazettái határozzák meg, hogyan halad át a fény a kövön és hogyan tér vissza a szemhez. A kiváló csiszolás adja a gyémánt összetéveszthetetlen életét.",
        },
        {
          title: "Tűz",
          description:
            "Ahogy a fény áthalad a gyémánton, színes villanásokra bomlik. Ez a spektrális fényjáték adja a finom briliáns lenyűgöző tüzét.",
        },
        {
          title: "Szcintilláció",
          description:
            "A fény és a kontraszt villanásai, amelyek akkor jelennek meg, amikor a gyémánt, viselője vagy a fényforrás mozog — ettől válik a kő valóban élővé.",
        },
        {
          title: "Foglalat",
          description:
            "A jól megtervezett foglalat védi a követ, miközben szabad utat enged a fénynek. Az ékszernek kereteznie kell a gyémántot, nem versenyeznie vele.",
        },
      ],
    },
    cta: {
      title: "Van olyan ragyogás, amit személyesen kell látni",
      sub:
        "Egy fénykép megmutathatja a gyémánt formáját, de azt nem, hogyan kel életre a fényben. Fedezze fel a Briliáns kollekciót egy privát látogatás során butikjaink egyikében.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Brylanty",
      title1: "Gdzie światło",
      title2: "staje się biżuterią",
      description:
        "Szlif brylantowy powstał w jednym wyjątkowym celu — aby zamieniać światło w ogień. Każdy kamień w naszej kolekcji wybieramy ze względu na to, jak ożywa w ruchu i jak przy każdym poruszeniu ukazuje nowe błyski.",
      since: "LIDYA · OD 1989 ROKU",
      statementEyebrow: "Sztuka światła",
      statementBefore: "Stworzone, by łapać światło.",
      statementAccent: "Zaprojektowane, by je zatrzymać.",
      imageAlt:
        "Kolekcja biżuterii z brylantami LIDYA ułożona na tkaninie w kolorze szampana i naturalnym kamieniu",
    },
    gallery: {
      eyebrow: "Kolekcja Brilliants",
      title: "Biżuteria kształtowana przez",
      titleAccent: "światło i blask.",
      description:
        "Od ponadczasowych soliterów po bransoletki, kolczyki i wisiorki z diamentami — każdy element wybierany jest ze względu na sposób, w jaki kamienie współpracują ze światłem: eleganckie w bezruchu, niezwykłe w ruchu.",
      itemLabel: "Kolekcja Brilliants",
      closingText: "Każdy ruch łapie światło.",
      closingAccent: "Każde spojrzenie odkrywa coś nowego.",
      captions: [
        "Pierścionek soliter",
        "Kolczyki sztyfty",
        "Klasyczny soliter",
        "Obrączka eternity",
        "Diamentowy wisiorek",
        "Bransoletka tenisowa",
        "Detal eternity",
        "Wisiorek pavé",
        "Halo w kształcie kropli",
        "Komplet",
      ],
      alts: [
        "Pierścionek soliter z diamentem o szlifie brylantowym",
        "Kolczyki sztyfty z diamentami o szlifie brylantowym",
        "Pierścionek soliter z sześcioma łapkami",
        "Diamentowa obrączka eternity",
        "Diamentowy wisiorek o szlifie brylantowym",
        "Diamentowa bransoletka tenisowa",
        "Diamentowa obrączka eternity pokazana pod kątem",
        "Diamentowy wisiorek z pavé na uchwycie",
        "Wisiorek z diamentem w kształcie gruszki otoczonym halo z diamentów",
        "Dopasowany komplet pierścionka, kolczyków i naszyjnika z diamentami",
      ],
    },
    craft: {
      eyebrow: "Piękno blasku",
      title:
        "Prawdziwy blask zaczyna się w chwili, gdy diament spotyka światło",
      description:
        "Piękny diament to więcej niż jego rozmiar. Szlif, proporcje, ruch i oprawa wspólnie decydują o tym, jak intensywnie kamień oddaje światło.",
      closingText: "Światło pokazuje blask.",
      closingAccent: "Czas pokazuje wartość.",
      points: [
        {
          title: "Szlif",
          description:
            "Proporcje i fasety diamentu o szlifie brylantowym decydują o tym, jak światło przechodzi przez kamień i wraca do oka. Doskonały szlif nadaje diamentowi jego charakterystyczne życie.",
        },
        {
          title: "Ogień",
          description:
            "Gdy światło przechodzi przez diament, rozszczepia się na kolorowe błyski. Ta gra światła spektralnego nadaje wysokiej jakości brylantowi jego fascynujący ogień.",
        },
        {
          title: "Scyntylacja",
          description:
            "Błyski światła i kontrastu widoczne podczas ruchu diamentu, osoby noszącej go lub źródła światła — cecha, dzięki której kamień wydaje się żywy, a nie tylko jasny.",
        },
        {
          title: "Oprawa",
          description:
            "Dobrze zaprojektowana oprawa chroni kamień, jednocześnie pozwalając światłu swobodnie do niego docierać. Biżuteria powinna podkreślać diament, a nie z nim konkurować.",
        },
      ],
    },
    cta: {
      title: "Niektóry blask trzeba zobaczyć osobiście",
      sub:
        "Zdjęcie może pokazać formę diamentu, ale nie to, jak ożywa w świetle. Odkryj kolekcję Brilliants podczas prywatnej wizyty w jednym z naszych butików.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Бриллианты",
      title1: "Где свет",
      title2: "становится украшением",
      description:
        "Бриллиантовая огранка была создана с одной исключительной целью — превращать свет в огонь. Каждый камень в нашей коллекции отбирается по тому, как он оживает в движении и раскрывает новые вспышки блеска при каждом повороте.",
      since: "LIDYA · С 1989 ГОДА",
      statementEyebrow: "Искусство света",
      statementBefore: "Создано, чтобы ловить свет.",
      statementAccent: "Создано, чтобы сохранять его.",
      imageAlt:
        "Коллекция украшений LIDYA с бриллиантами, расположенная на ткани цвета шампанского и натуральном камне",
    },
    gallery: {
      eyebrow: "Коллекция бриллиантов",
      title: "Украшения, созданные",
      titleAccent: "светом и блеском.",
      description:
        "От классических солитеров до браслетов, серег и подвесок с бриллиантами — каждое украшение выбирается за то, как его камни взаимодействуют со светом: элегантны в покое и необыкновенны в движении.",
      itemLabel: "Коллекция бриллиантов",
      closingText: "Каждое движение ловит свет.",
      closingAccent: "Каждый взгляд открывает что-то новое.",
      captions: [
        "Кольцо-солитер",
        "Серьги-пусеты",
        "Классический солитер",
        "Кольцо Eternity",
        "Бриллиантовая подвеска",
        "Теннисный браслет",
        "Деталь Eternity",
        "Подвеска Pavé",
        "Каплевидный Halo",
        "Комплект",
      ],
      alts: [
        "Кольцо-солитер с бриллиантом круглой огранки",
        "Серьги-пусеты с бриллиантами круглой огранки",
        "Кольцо-солитер с бриллиантом в шестикраповой закрепке",
        "Кольцо Eternity с бриллиантами",
        "Подвеска с бриллиантом круглой огранки",
        "Теннисный браслет с бриллиантами",
        "Кольцо Eternity с бриллиантами под углом",
        "Бриллиантовая подвеска с ушком Pavé",
        "Подвеска с бриллиантом грушевидной формы в ореоле бриллиантов",
        "Комплект из бриллиантового кольца, серег и ожерелья",
      ],
    },
    craft: {
      eyebrow: "Красота блеска",
      title:
        "Истинный блеск начинается с того, как бриллиант встречается со светом",
      description:
        "Красота бриллианта определяется не только его размером. Огранка, пропорции, движение и закрепка вместе определяют, насколько выразительно камень возвращает свет.",
      closingText: "Свет раскрывает блеск.",
      closingAccent: "Время раскрывает ценность.",
      points: [
        {
          title: "Огранка",
          description:
            "Пропорции и грани бриллиантовой огранки определяют, как свет проходит через камень и возвращается к глазу. Прекрасная огранка придаёт бриллианту его неповторимую живость.",
        },
        {
          title: "Огонь",
          description:
            "Проходя через бриллиант, свет разделяется на цветные вспышки. Эта игра спектрального света создаёт завораживающий огонь качественного бриллианта.",
        },
        {
          title: "Сцинтилляция",
          description:
            "Вспышки света и контраста, возникающие при движении камня, его владельца или источника света, делают бриллиант живым, а не просто ярким.",
        },
        {
          title: "Закрепка",
          description:
            "Продуманная закрепка защищает камень и одновременно позволяет свету свободно проникать к нему. Украшение должно обрамлять бриллиант, а не конкурировать с ним.",
        },
      ],
    },
    cta: {
      title: "Некоторые бриллианты нужно увидеть лично",
      sub:
        "Фотография может передать форму бриллианта, но не то, как он оживает в свете. Откройте для себя коллекцию Brilliants во время частного визита в один из наших бутиков.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Briljanten",
      title1: "Waar licht",
      title2: "een sieraad wordt",
      description:
        "De briljantslijpvorm werd ontwikkeld met één uitzonderlijk doel — licht veranderen in vuur. Elke steen in onze collectie wordt geselecteerd op de manier waarop hij tot leven komt in beweging en bij iedere beweging nieuwe lichtflitsen onthult.",
      since: "LIDYA · SINDS 1989",
      statementEyebrow: "De kunst van licht",
      statementBefore: "Gemaakt om het licht te vangen.",
      statementAccent: "Ontworpen om het vast te houden.",
      imageAlt:
        "LIDYA-collectie met briljanten op champagnekleurige stof en natuursteen",
    },
    gallery: {
      eyebrow: "De Briljantencollectie",
      title: "Sieraden gevormd door",
      titleAccent: "licht en schittering.",
      description:
        "Van tijdloze solitaires tot met diamanten bezette armbanden, oorbellen en hangers: elk stuk wordt geselecteerd op de manier waarop de stenen met licht spelen — elegant in rust, buitengewoon in beweging.",
      itemLabel: "Briljantencollectie",
      closingText: "Elke beweging vangt het licht.",
      closingAccent: "Elke blik onthult iets nieuws.",
      captions: [
        "Solitairring",
        "Oorknopjes",
        "Klassieke solitair",
        "Eternityring",
        "Diamanten hanger",
        "Tennisarmband",
        "Eternity-detail",
        "Pavé-hanger",
        "Druppelvormige halo",
        "De set",
      ],
      alts: [
        "Solitairring met briljantgeslepen diamant",
        "Oorknopjes met briljantgeslepen diamanten",
        "Solitairring met briljantgeslepen diamant in zes griffen",
        "Eternityring met briljantgeslepen diamanten",
        "Hanger met briljantgeslepen diamant",
        "Tennisarmband met briljantgeslepen diamanten",
        "Eternityring met diamanten vanuit een hoek",
        "Diamanten hanger met pavé-bezette hangerlus",
        "Peervormige diamanten hanger met diamanten halo",
        "Bijpassende set van diamanten ring, oorbellen en ketting",
      ],
    },
    craft: {
      eyebrow: "De schoonheid van schittering",
      title:
        "Ware schittering begint bij de manier waarop een diamant het licht ontmoet",
      description:
        "Een mooie diamant is meer dan alleen zijn formaat. Slijpvorm, verhoudingen, beweging en zetting bepalen samen hoe krachtig de steen het licht terugkaatst.",
      closingText: "Licht onthult de schittering.",
      closingAccent: "Tijd onthult de waarde.",
      points: [
        {
          title: "Slijpvorm",
          description:
            "De verhoudingen en facetten van een briljantgeslepen diamant bepalen hoe licht door de steen reist en terugkeert naar het oog. Een prachtige slijpvorm geeft een diamant zijn karakteristieke levendigheid.",
        },
        {
          title: "Vuur",
          description:
            "Wanneer licht door de diamant beweegt, wordt het opgesplitst in kleurrijke flitsen. Dit spel van spectraal licht geeft een fijne briljant zijn fascinerende vuur.",
        },
        {
          title: "Scintillatie",
          description:
            "De licht- en contrastflitsen die zichtbaar worden wanneer de diamant, de drager of de lichtbron beweegt — de eigenschap waardoor een steen levendig aanvoelt.",
        },
        {
          title: "Zetting",
          description:
            "Een doordachte zetting beschermt de steen en laat tegelijk zoveel mogelijk licht toe. Het sieraad moet de diamant omlijsten, niet ermee concurreren.",
        },
      ],
    },
    cta: {
      title: "Sommige schittering moet u in het echt zien",
      sub:
        "Een foto kan de vorm van een diamant vastleggen, maar niet hoe hij tot leven komt in het licht. Ontdek de Briljantencollectie tijdens een privébezoek aan een van onze boutiques.",
    },
  },

  da: {
    hero: {
      eyebrow: "Brillanter",
      title1: "Hvor lys",
      title2: "bliver til smykker",
      description:
        "Brillantslibningen blev skabt med ét ekstraordinært formål — at forvandle lys til ild. Hver sten i vores kollektion udvælges efter, hvordan den kommer til live i bevægelse og afslører nye glimt ved hver bevægelse.",
      since: "LIDYA · SIDEN 1989",
      statementEyebrow: "Lysets kunst",
      statementBefore: "Skabt til at fange lyset.",
      statementAccent: "Skabt til at bevare det.",
      imageAlt:
        "LIDYA-kollektion med brillantsmykker arrangeret på champagnefarvet stof og natursten",
    },
    gallery: {
      eyebrow: "Brillantkollektionen",
      title: "Smykker formet af",
      titleAccent: "lys og brillans.",
      description:
        "Fra tidløse solitaire-ringe til diamantbesatte armbånd, øreringe og vedhæng udvælges hvert smykke efter den måde, stenene arbejder med lyset på — elegante i ro, ekstraordinære i bevægelse.",
      itemLabel: "Brillantkollektionen",
      closingText: "Hver bevægelse fanger lyset.",
      closingAccent: "Hvert blik afslører noget nyt.",
      captions: [
        "Solitaire-ring",
        "Ørestikker",
        "Klassisk solitaire",
        "Eternity-ring",
        "Diamantvedhæng",
        "Tennisarmbånd",
        "Eternity-detalje",
        "Pavé-vedhæng",
        "Dråbe-halo",
        "Sættet",
      ],
      alts: [
        "Solitaire-ring med brillantsleben diamant",
        "Ørestikker med brillantslebne diamanter",
        "Solitaire-ring med seks grabber og brillantsleben diamant",
        "Eternity-ring med brillantslebne diamanter",
        "Vedhæng med brillantsleben diamant",
        "Tennisarmbånd med brillantslebne diamanter",
        "Diamantbesat eternity-ring vist fra siden",
        "Diamantvedhæng med pavébesat øsken",
        "Dråbeformet diamantvedhæng omgivet af diamant-halo",
        "Matchende sæt med diamantring, øreringe og halskæde",
      ],
    },
    craft: {
      eyebrow: "Brillansens skønhed",
      title:
        "Ægte brillans begynder med den måde, diamanten møder lyset",
      description:
        "En smuk diamant handler om mere end størrelse. Slibning, proportioner, bevægelse og fatning afgør tilsammen, hvor levende stenen sender lyset tilbage.",
      closingText: "Lyset afslører brillansen.",
      closingAccent: "Tiden afslører værdien.",
      points: [
        {
          title: "Slibning",
          description:
            "Proportionerne og facetterne i en brillantsleben diamant bestemmer, hvordan lyset bevæger sig gennem stenen og vender tilbage til øjet. En smuk slibning giver diamanten dens særlige liv.",
        },
        {
          title: "Ild",
          description:
            "Når lys passerer gennem diamanten, opdeles det i farvede glimt. Dette spektrale lysspil giver en fin brillant dens fascinerende ild.",
        },
        {
          title: "Scintillation",
          description:
            "Glimtene af lys og kontrast, der opstår, når diamanten, bæreren eller lyskilden bevæger sig — kvaliteten, der får stenen til at virke levende.",
        },
        {
          title: "Fatning",
          description:
            "En gennemtænkt fatning beskytter stenen og giver samtidig lyset fri adgang. Smykket skal indramme diamanten, aldrig konkurrere med den.",
        },
      ],
    },
    cta: {
      title: "Nogle former for brillans skal opleves personligt",
      sub:
        "Et fotografi kan vise diamantens form, men ikke hvordan den kommer til live i lyset. Oplev Brillantkollektionen ved et privat besøg i en af vores boutiques.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Briljantit",
      title1: "Kun valo",
      title2: "muuttuu koruksi",
      description:
        "Briljanttihionta luotiin yhtä erityistä tarkoitusta varten — muuttamaan valo tuleksi. Jokainen mallistomme kivi valitaan sen perusteella, kuinka se herää eloon liikkeessä ja paljastaa uusia valonvälähdyksiä jokaisella liikkeellä.",
      since: "LIDYA · VUODESTA 1989",
      statementEyebrow: "Valon taide",
      statementBefore: "Luotu vangitsemaan valo.",
      statementAccent: "Suunniteltu säilyttämään se.",
      imageAlt:
        "LIDYA-briljanttikorujen mallisto aseteltuna samppanjanväriselle kankaalle ja luonnonkivelle",
    },
    gallery: {
      eyebrow: "Briljanttimallisto",
      title: "Valon ja",
      titleAccent: "säihkeen muotoilemia koruja.",
      description:
        "Ajattomista solitaire-sormuksista timantein koristeltuihin rannekoruihin, korvakoruihin ja riipuksiin — jokainen koru valitaan sen mukaan, miten sen kivet toimivat valon kanssa: levossa elegantteja, liikkeessä poikkeuksellisia.",
      itemLabel: "Briljanttimallisto",
      closingText: "Jokainen liike vangitsee valon.",
      closingAccent: "Jokainen katse paljastaa jotain uutta.",
      captions: [
        "Solitaire-sormus",
        "Nappikorvakorut",
        "Klassinen solitaire",
        "Eternity-sormus",
        "Timanttiriipus",
        "Tennisrannekoru",
        "Eternity-yksityiskohta",
        "Pavé-riipus",
        "Pisara-halo",
        "Setti",
      ],
      alts: [
        "Briljanttihiottu solitaire-timanttisormus",
        "Briljanttihiotut timanttiset nappikorvakorut",
        "Kuusikyntinen briljanttihiottu solitaire-sormus",
        "Briljanttihiottu timanttinen eternity-sormus",
        "Briljanttihiottu timanttiriipus",
        "Briljanttihiottu timanttinen tennisrannekoru",
        "Timanttinen eternity-sormus kulmasta kuvattuna",
        "Timanttiriipus pavé-istutetulla ripustuslenkillä",
        "Päärynänmuotoinen timanttiriipus timanttihalolla",
        "Yhteensopiva timanttisormus-, korvakoru- ja kaulakorusetti",
      ],
    },
    craft: {
      eyebrow: "Säihkeen kauneus",
      title:
        "Todellinen säihke alkaa siitä, miten timantti kohtaa valon",
      description:
        "Kaunis timantti on enemmän kuin kokonsa. Hionta, mittasuhteet, liike ja istutus yhdessä ratkaisevat, kuinka elävästi kivi heijastaa valoa takaisin silmään.",
      closingText: "Valo paljastaa säihkeen.",
      closingAccent: "Aika paljastaa arvon.",
      points: [
        {
          title: "Hionta",
          description:
            "Briljanttihiotun timantin mittasuhteet ja fasetit määräävät, miten valo kulkee kiven läpi ja palaa takaisin silmään. Kaunis hionta antaa timantille sen tunnistettavan elävyyden.",
        },
        {
          title: "Tuli",
          description:
            "Kun valo kulkee timantin läpi, se jakautuu värillisiksi välähdyksiksi. Tämä spektrisen valon leikki antaa hienolle briljantille sen kiehtovan tulen.",
        },
        {
          title: "Scintillaatio",
          description:
            "Valon ja kontrastin välähdykset, jotka näkyvät timantin, käyttäjän tai valonlähteen liikkuessa — ominaisuus, joka saa kiven tuntumaan elävältä.",
        },
        {
          title: "Istutus",
          description:
            "Huolellinen istutus suojaa kiveä ja antaa valolle mahdollisimman vapaan pääsyn siihen. Korun tulee kehystää timanttia, ei kilpailla sen kanssa.",
        },
      ],
    },
    cta: {
      title: "Jotkin säihkeet täytyy nähdä omin silmin",
      sub:
        "Valokuva voi näyttää timantin muodon, mutta ei sitä, kuinka se herää eloon valossa. Tutustu Briljanttimallistoon yksityisellä vierailulla yhdessä myymälöistämme.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Briljanter",
      title1: "Där ljus",
      title2: "blir till smycken",
      description:
        "Briljantslipningen skapades för ett enda extraordinärt syfte — att förvandla ljus till eld. Varje sten i vår kollektion väljs ut efter hur den vaknar till liv i rörelse och avslöjar nya ljusblixtar vid varje rörelse.",
      since: "LIDYA · SEDAN 1989",
      statementEyebrow: "Ljusets konst",
      statementBefore: "Skapad för att fånga ljuset.",
      statementAccent: "Skapad för att bevara det.",
      imageAlt:
        "LIDYA-kollektion med briljantsmycken arrangerad på champagnefärgat tyg och natursten",
    },
    gallery: {
      eyebrow: "Briljantkollektionen",
      title: "Smycken formade av",
      titleAccent: "ljus och briljans.",
      description:
        "Från tidlösa solitärer till diamantbesatta armband, örhängen och hängen väljs varje smycke ut efter hur stenarna samspelar med ljuset — elegant i vila, extraordinärt i rörelse.",
      itemLabel: "Briljantkollektionen",
      closingText: "Varje rörelse fångar ljuset.",
      closingAccent: "Varje blick avslöjar något nytt.",
      captions: [
        "Solitär-ring",
        "Stiftörhängen",
        "Klassisk solitär",
        "Eternity-ring",
        "Diamanthänge",
        "Tennisarmband",
        "Eternity-detalj",
        "Pavé-hänge",
        "Droppformat halo",
        "Setet",
      ],
      alts: [
        "Solitär-ring med briljantslipad diamant",
        "Stiftörhängen med briljantslipade diamanter",
        "Solitär-ring med sex klor och briljantslipad diamant",
        "Eternity-ring med briljantslipade diamanter",
        "Hänge med briljantslipad diamant",
        "Tennisarmband med briljantslipade diamanter",
        "Diamantbesatt eternity-ring sedd från sidan",
        "Diamanthänge med pavébesatt ögla",
        "Päronformat diamanthänge omgivet av diamant-halo",
        "Matchande set med diamantring, örhängen och halsband",
      ],
    },
    craft: {
      eyebrow: "Briljansens skönhet",
      title:
        "Äkta briljans börjar med hur diamanten möter ljuset",
      description:
        "En vacker diamant är mer än sin storlek. Slipning, proportioner, rörelse och infattning avgör tillsammans hur levande stenen återger ljuset.",
      closingText: "Ljuset avslöjar briljansen.",
      closingAccent: "Tiden avslöjar värdet.",
      points: [
        {
          title: "Slipning",
          description:
            "Proportionerna och fasetterna i en briljantslipad diamant avgör hur ljuset färdas genom stenen och återvänder till ögat. En vacker slipning ger diamanten dess omisskännliga liv.",
        },
        {
          title: "Eld",
          description:
            "När ljuset färdas genom diamanten delas det upp i färgade blixtar. Detta spektrala ljusspel ger en fin briljant dess fascinerande eld.",
        },
        {
          title: "Scintillation",
          description:
            "Blixtarna av ljus och kontrast som syns när diamanten, bäraren eller ljuskällan rör sig — egenskapen som gör att stenen känns levande.",
        },
        {
          title: "Infattning",
          description:
            "En genomtänkt infattning skyddar stenen samtidigt som ljuset får fri tillgång. Smycket ska rama in diamanten, aldrig konkurrera med den.",
        },
      ],
    },
    cta: {
      title: "Viss briljans måste upplevas på plats",
      sub:
        "Ett fotografi kan fånga diamantens form, men inte hur den vaknar till liv i ljuset. Upptäck Briljantkollektionen under ett privat besök i en av våra butiker.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Brillants",
      title1: "Quand la lumière",
      title2: "devient joaillerie",
      description:
        "La taille brillant a été créée dans un but extraordinaire — transformer la lumière en feu. Chaque pierre de notre collection est sélectionnée pour la façon dont elle prend vie en mouvement et révèle de nouveaux éclats à chaque geste.",
      since: "LIDYA · DEPUIS 1989",
      statementEyebrow: "L’art de la lumière",
      statementBefore: "Créé pour capter la lumière.",
      statementAccent: "Pensé pour la retenir.",
      imageAlt:
        "Collection de bijoux LIDYA sertis de brillants, disposée sur un tissu champagne et une pierre naturelle",
    },
    gallery: {
      eyebrow: "La collection Brillants",
      title: "Des bijoux façonnés par",
      titleAccent: "la lumière et l’éclat.",
      description:
        "Des solitaires intemporels aux bracelets, boucles d’oreilles et pendentifs sertis de diamants, chaque pièce est choisie pour la manière dont ses pierres dialoguent avec la lumière — élégante au repos, extraordinaire en mouvement.",
      itemLabel: "Collection Brillants",
      closingText: "Chaque mouvement capte la lumière.",
      closingAccent: "Chaque regard révèle quelque chose de nouveau.",
      captions: [
        "Bague solitaire",
        "Puces d’oreilles",
        "Solitaire classique",
        "Alliance Eternity",
        "Pendentif diamant",
        "Bracelet tennis",
        "Détail Eternity",
        "Pendentif pavé",
        "Halo poire",
        "La parure",
      ],
      alts: [
        "Bague solitaire avec diamant taille brillant",
        "Puces d’oreilles avec diamants taille brillant",
        "Bague solitaire à six griffes avec diamant taille brillant",
        "Alliance Eternity sertie de diamants taille brillant",
        "Pendentif avec diamant taille brillant",
        "Bracelet tennis serti de diamants taille brillant",
        "Alliance Eternity en diamants vue de biais",
        "Pendentif diamant avec bélière pavée",
        "Pendentif diamant en forme de poire entouré d’un halo de diamants",
        "Parure assortie avec bague, boucles d’oreilles et collier en diamants",
      ],
    },
    craft: {
      eyebrow: "La beauté de l’éclat",
      title:
        "La véritable brillance commence par la rencontre du diamant avec la lumière",
      description:
        "Un beau diamant ne se résume pas à sa taille. Taille, proportions, mouvement et sertissage déterminent ensemble la manière dont la pierre renvoie la lumière vers l’œil.",
      closingText: "La lumière révèle l’éclat.",
      closingAccent: "Le temps révèle la valeur.",
      points: [
        {
          title: "Taille",
          description:
            "Les proportions et les facettes d’un diamant taille brillant déterminent la façon dont la lumière traverse la pierre et revient vers l’œil. Une belle taille donne au diamant sa vie incomparable.",
        },
        {
          title: "Feu",
          description:
            "En traversant le diamant, la lumière se décompose en éclats colorés. Ce jeu de lumière spectrale donne à un beau brillant son feu captivant.",
        },
        {
          title: "Scintillation",
          description:
            "Les éclats de lumière et de contraste visibles lorsque le diamant, la personne qui le porte ou la source lumineuse bouge — la qualité qui donne l’impression que la pierre est vivante.",
        },
        {
          title: "Sertissage",
          description:
            "Un sertissage bien pensé protège la pierre tout en laissant la lumière l’atteindre librement. Le bijou doit encadrer le diamant, jamais rivaliser avec lui.",
        },
      ],
    },
    cta: {
      title: "Certaines brillances doivent être vues en personne",
      sub:
        "Une photographie peut montrer la forme d’un diamant, mais pas la manière dont il prend vie dans la lumière. Découvrez la collection Brillants lors d’une visite privée dans l’une de nos boutiques.",
    },
  },

  it: {
    hero: {
      eyebrow: "Brillanti",
      title1: "Dove la luce",
      title2: "diventa gioiello",
      description:
        "Il taglio brillante è stato creato per uno scopo straordinario — trasformare la luce in fuoco. Ogni pietra della nostra collezione viene scelta per il modo in cui prende vita nel movimento e rivela nuovi lampi di luce a ogni gesto.",
      since: "LIDYA · DAL 1989",
      statementEyebrow: "L’arte della luce",
      statementBefore: "Creato per catturare la luce.",
      statementAccent: "Pensato per conservarla.",
      imageAlt:
        "Collezione LIDYA di gioielli con brillanti disposta su tessuto color champagne e pietra naturale",
    },
    gallery: {
      eyebrow: "La collezione Brillanti",
      title: "Gioielli modellati da",
      titleAccent: "luce e brillantezza.",
      description:
        "Dai solitari senza tempo ai bracciali, orecchini e pendenti con diamanti, ogni gioiello viene scelto per il modo in cui le sue pietre interagiscono con la luce — elegante da fermo, straordinario in movimento.",
      itemLabel: "Collezione Brillanti",
      closingText: "Ogni movimento cattura la luce.",
      closingAccent: "Ogni sguardo rivela qualcosa di nuovo.",
      captions: [
        "Anello solitario",
        "Orecchini a bottone",
        "Solitario classico",
        "Anello Eternity",
        "Pendente con diamante",
        "Bracciale tennis",
        "Dettaglio Eternity",
        "Pendente pavé",
        "Halo a goccia",
        "Il set",
      ],
      alts: [
        "Anello solitario con diamante taglio brillante",
        "Orecchini a bottone con diamanti taglio brillante",
        "Anello solitario a sei griffe con diamante taglio brillante",
        "Anello Eternity con diamanti taglio brillante",
        "Pendente con diamante taglio brillante",
        "Bracciale tennis con diamanti taglio brillante",
        "Anello Eternity con diamanti visto di lato",
        "Pendente con diamante e contromaglia pavé",
        "Pendente con diamante a pera circondato da halo di diamanti",
        "Set coordinato con anello, orecchini e collana con diamanti",
      ],
    },
    craft: {
      eyebrow: "La bellezza della brillantezza",
      title:
        "La vera brillantezza nasce dal modo in cui il diamante incontra la luce",
      description:
        "Un bel diamante è molto più della sua dimensione. Taglio, proporzioni, movimento e incastonatura determinano insieme quanto intensamente la pietra restituisce la luce.",
      closingText: "La luce rivela la brillantezza.",
      closingAccent: "Il tempo rivela il valore.",
      points: [
        {
          title: "Taglio",
          description:
            "Le proporzioni e le faccette di un diamante taglio brillante determinano il percorso della luce attraverso la pietra e il suo ritorno all’occhio. Un taglio ben eseguito dona al diamante la sua inconfondibile vitalità.",
        },
        {
          title: "Fuoco",
          description:
            "Quando la luce attraversa il diamante, si separa in lampi di colore. Questo gioco di luce spettrale dona a un brillante di qualità il suo affascinante fuoco.",
        },
        {
          title: "Scintillazione",
          description:
            "I lampi di luce e contrasto visibili quando il diamante, chi lo indossa o la fonte luminosa si muove — la qualità che rende la pietra viva e non semplicemente luminosa.",
        },
        {
          title: "Incastonatura",
          description:
            "Un’incastonatura ben progettata protegge la pietra lasciando allo stesso tempo libero accesso alla luce. Il gioiello deve incorniciare il diamante, non competere con esso.",
        },
      ],
    },
    cta: {
      title: "Alcune brillantezze devono essere viste dal vivo",
      sub:
        "Una fotografia può mostrare la forma di un diamante, ma non il modo in cui prende vita nella luce. Scoprite la collezione Brillanti durante una visita privata in una delle nostre boutique.",
    },
  },

  es: {
    hero: {
      eyebrow: "Brillantes",
      title1: "Donde la luz",
      title2: "se convierte en joya",
      description:
        "La talla brillante fue creada con un propósito extraordinario — transformar la luz en fuego. Cada piedra de nuestra colección se selecciona por la forma en que cobra vida con el movimiento y revela nuevos destellos a cada gesto.",
      since: "LIDYA · DESDE 1989",
      statementEyebrow: "El arte de la luz",
      statementBefore: "Creado para atrapar la luz.",
      statementAccent: "Diseñado para conservarla.",
      imageAlt:
        "Colección LIDYA de joyas con brillantes dispuesta sobre tejido color champán y piedra natural",
    },
    gallery: {
      eyebrow: "La colección Brillantes",
      title: "Joyas moldeadas por",
      titleAccent: "la luz y el brillo.",
      description:
        "Desde solitarios atemporales hasta pulseras, pendientes y colgantes con diamantes, cada pieza se selecciona por la manera en que sus piedras interactúan con la luz — elegante en reposo, extraordinaria en movimiento.",
      itemLabel: "Colección Brillantes",
      closingText: "Cada movimiento atrapa la luz.",
      closingAccent: "Cada mirada revela algo nuevo.",
      captions: [
        "Anillo solitario",
        "Pendientes de botón",
        "Solitario clásico",
        "Anillo Eternity",
        "Colgante de diamante",
        "Pulsera tennis",
        "Detalle Eternity",
        "Colgante pavé",
        "Halo en forma de lágrima",
        "El conjunto",
      ],
      alts: [
        "Anillo solitario con diamante talla brillante",
        "Pendientes de botón con diamantes talla brillante",
        "Anillo solitario de seis garras con diamante talla brillante",
        "Anillo Eternity con diamantes talla brillante",
        "Colgante con diamante talla brillante",
        "Pulsera tennis con diamantes talla brillante",
        "Anillo Eternity con diamantes visto en ángulo",
        "Colgante de diamante con enganche pavé",
        "Colgante con diamante en forma de pera rodeado por halo de diamantes",
        "Conjunto a juego de anillo, pendientes y collar con diamantes",
      ],
    },
    craft: {
      eyebrow: "La belleza del brillo",
      title:
        "El verdadero brillo comienza con la forma en que el diamante se encuentra con la luz",
      description:
        "Un diamante hermoso es mucho más que su tamaño. La talla, las proporciones, el movimiento y el engaste determinan juntos cómo devuelve la piedra la luz al ojo.",
      closingText: "La luz revela el brillo.",
      closingAccent: "El tiempo revela su valor.",
      points: [
        {
          title: "Talla",
          description:
            "Las proporciones y facetas de un diamante talla brillante determinan cómo viaja la luz por la piedra y regresa al ojo. Una gran talla aporta al diamante su inconfundible vida.",
        },
        {
          title: "Fuego",
          description:
            "Cuando la luz atraviesa el diamante, se separa en destellos de color. Este juego de luz espectral aporta a un buen brillante su cautivador fuego.",
        },
        {
          title: "Centelleo",
          description:
            "Los destellos de luz y contraste visibles cuando se mueve el diamante, quien lo lleva o la fuente de luz — la cualidad que hace que una piedra parezca viva.",
        },
        {
          title: "Engaste",
          description:
            "Un engaste cuidadosamente diseñado protege la piedra y permite que la luz llegue a ella libremente. La joya debe enmarcar el diamante, nunca competir con él.",
        },
      ],
    },
    cta: {
      title: "Hay brillos que deben verse en persona",
      sub:
        "Una fotografía puede mostrar la forma de un diamante, pero no cómo cobra vida bajo la luz. Descubra la colección Brillantes durante una visita privada a una de nuestras boutiques.",
    },
  },
};

const BRILLIANT_IMAGES = [
  "/images/brilliants/brilliant-01.jpg",
  "/images/brilliants/brilliant-02.jpg",
  "/images/brilliants/brilliant-03.jpg",
  "/images/brilliants/brilliant-04.jpg",
  "/images/brilliants/brilliant-05.jpg",
  "/images/brilliants/brilliant-06.jpg",
  "/images/brilliants/brilliant-07.jpg",
  "/images/brilliants/brilliant-08.jpg",
  "/images/brilliants/brilliant-09.jpg",
  "/images/brilliants/brilliant-10.jpg",
];

export default function BrilliantsContent() {
  const { locale } = useLanguage();

  const copy =
    BRILLIANTS_COPY[locale] ?? BRILLIANTS_COPY.en;

  const galleryItems = BRILLIANT_IMAGES.map((image, index) => ({
    image,
    caption:
      copy.gallery.captions[index] ??
      BRILLIANTS_COPY.en.gallery.captions[index] ??
      "",
    alt:
      copy.gallery.alts[index] ??
      BRILLIANTS_COPY.en.gallery.alts[index] ??
      "",
  }));

  return (
    <>
      <Header />

      <main>
        <BrilliantsCinematicHero />

        <CategoryGallery
          icon={<GemClusterIcon />}
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
          since={copy.hero.since}
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