"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { GemClusterIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const BRILLIANTS_COPY: Record<
  Locale,
  {
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
  }
> = {
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
  const copy = BRILLIANTS_COPY[locale];

  const galleryItems = BRILLIANT_IMAGES.map((image, index) => ({
    image,
    caption: copy.gallery.captions[index],
    alt: copy.gallery.alts[index],
  }));

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          {/* HERO IMAGE */}
          <Image
            src="/images/brilliants/hero-brilliants.png"
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* LIGHT CINEMATIC OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/40 to-transparent" />

          {/* SUBTLE AMBIENT LIGHT */}
          <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-white/18 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            {/* HERO CONTENT */}
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              {/* LEFT */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center text-gold">
                    <GemClusterIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    {copy.hero.eyebrow}
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[820px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.hero.title1}
                  <span className="block">
                    {copy.hero.title2}
                  </span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
                  {copy.hero.description}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                    {copy.hero.since}
                  </span>
                </div>
              </div>
            </div>

            {/* HERO STATEMENT */}
            <div className="border-t border-plum-dark/10 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    {copy.hero.statementEyebrow}
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {copy.hero.statementBefore}
                    <span style={{ color: "#A98242" }}>
                      {" "}
                      {copy.hero.statementAccent}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTION GALLERY */}
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