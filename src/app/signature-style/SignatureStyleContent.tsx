"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import SignatureStyleCinematicHero from "@/components/category/SignatureStyleCinematicHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { GemClusterIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type SignatureStyleCopy = {
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

const SIGNATURE_STYLE_COPY: Record<Locale, SignatureStyleCopy> = {
  en: {
    gallery: {
      eyebrow: "Signature Style",
      title: "Jewellery chosen for",
      titleAccent: "its individuality.",
      description:
        "A distinctive detail, a pure line or an unexpected combination of materials. Every piece has a character of its own — one that truly comes alive when it meets the person who wears it.",
      itemLabel: "Signature Style",
      closingText: "Some jewellery complements your style.",
      closingAccent: "Other pieces define it.",
      captions: [
        "Two-Tone Ring",
        "Diamond Detail",
        "Signature Ring",
        "Gold Bracelet",
        "Statement Earrings",
        "Setting Detail",
        "Gold Pendant",
        "Sculptural Ring",
        "Diamond Accent",
        "Signature Detail",
      ],
      alts: [
        "Two-tone gold ring from the LIDYA Signature Style collection",
        "Close-up diamond detail in gold jewellery",
        "Distinctive gold and diamond signature ring",
        "Refined gold bracelet with sculptural detailing",
        "Statement gold earrings with diamond accents",
        "Close-up of precise diamond setting in gold",
        "Elegant gold pendant from the Signature Style collection",
        "Sculptural gold ring with a distinctive silhouette",
        "Diamond accent set into polished gold",
        "Close-up signature jewellery detail by LIDYA",
      ],
    },
    craft: {
      eyebrow: "Character Lives in the Detail",
      title: "What makes a piece unmistakably its own",
      description:
        "Character is created through proportion, material and detail. No single element defines a jewel on its own — it is the way they work together that gives a piece its distinctive presence.",
      closingText: "Design creates the jewel.",
      closingAccent: "You give it character.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Form",
          description:
            "Proportion creates the first impression. Clean lines or more expressive geometry give a jewel a presence that can be felt before its individual details are even noticed.",
        },
        {
          title: "Material",
          description:
            "Yellow and white gold, diamonds and precious materials create contrast and depth. Material is not merely the foundation of a jewel — it is part of its expression.",
        },
        {
          title: "Detail",
          description:
            "A precise setting, a polished edge or an unexpected accent. Small decisions are what separate a beautiful jewel from one that remains in memory.",
        },
        {
          title: "Character",
          description:
            "True character appears when a jewel meets the person who wears it. The same piece can feel completely different on someone else — and that individuality is precisely the point.",
        },
      ],
    },
    cta: {
      title: "Find the piece that feels unmistakably yours",
      sub:
        "Signature style cannot be understood from a photograph alone. Discover its materials, proportions and details in person and find the jewel you will naturally return to.",
    },
  },

  de: {
    gallery: {
      eyebrow: "Signature-Stil",
      title: "Schmuck ausgewählt für",
      titleAccent: "seine Individualität.",
      description:
        "Ein markantes Detail, eine klare Linie oder eine unerwartete Verbindung von Materialien. Jedes Schmuckstück besitzt seinen eigenen Charakter — und entfaltet ihn vollkommen an der Person, die es trägt.",
      itemLabel: "Signature-Stil",
      closingText: "Manche Schmuckstücke ergänzen Ihren Stil.",
      closingAccent: "Andere definieren ihn.",
      captions: [
        "Bicolor-Ring",
        "Diamantdetail",
        "Signature-Ring",
        "Goldarmband",
        "Statement-Ohrringe",
        "Fassungsdetail",
        "Goldanhänger",
        "Skulpturaler Ring",
        "Diamantakzent",
        "Signature-Detail",
      ],
      alts: [
        "Bicolor-Goldring aus der LIDYA Signature-Stil Kollektion",
        "Nahaufnahme eines Diamantdetails in Goldschmuck",
        "Markanter Signature-Ring aus Gold und Diamanten",
        "Elegantes Goldarmband mit skulpturalem Detail",
        "Ausdrucksstarke Goldohrringe mit Diamantakzenten",
        "Nahaufnahme einer präzisen Diamantfassung in Gold",
        "Eleganter Goldanhänger aus der Signature-Stil Kollektion",
        "Skulpturaler Goldring mit markanter Silhouette",
        "Diamantakzent in poliertem Gold",
        "Nahaufnahme eines charakteristischen LIDYA Schmuckdetails",
      ],
    },
    craft: {
      eyebrow: "Charakter liegt im Detail",
      title: "Was ein Schmuckstück unverwechselbar macht",
      description:
        "Charakter entsteht durch Proportion, Material und Detail. Kein einzelnes Element bestimmt ein Schmuckstück allein — erst ihr Zusammenspiel verleiht ihm seine unverwechselbare Präsenz.",
      closingText: "Design erschafft das Schmuckstück.",
      closingAccent: "Sie geben ihm Charakter.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Form",
          description:
            "Proportionen bestimmen den ersten Eindruck. Klare Linien oder ausdrucksstärkere Geometrien verleihen einem Schmuckstück Präsenz, noch bevor einzelne Details wahrgenommen werden.",
        },
        {
          title: "Material",
          description:
            "Gelb- und Weißgold, Diamanten und edle Materialien schaffen Kontrast und Tiefe. Material ist nicht nur die Grundlage eines Schmuckstücks — es ist Teil seines Ausdrucks.",
        },
        {
          title: "Detail",
          description:
            "Eine präzise Fassung, eine polierte Kante oder ein unerwarteter Akzent. Kleine Entscheidungen unterscheiden ein schönes Schmuckstück von einem, das in Erinnerung bleibt.",
        },
        {
          title: "Charakter",
          description:
            "Wahrer Charakter entsteht, wenn ein Schmuckstück auf die Person trifft, die es trägt. Dasselbe Stück kann an jedem Menschen anders wirken — genau darin liegt seine Individualität.",
        },
      ],
    },
    cta: {
      title: "Finden Sie das Schmuckstück, das unverwechselbar zu Ihnen gehört",
      sub:
        "Signature-Stil lässt sich nicht allein auf einem Foto erleben. Entdecken Sie Materialien, Proportionen und Details persönlich und finden Sie das Schmuckstück, zu dem Sie immer wieder zurückkehren.",
    },
  },

  tr: {
    gallery: {
      eyebrow: "İmza Stili",
      title: "Mücevherler",
      titleAccent: "özgünlükleri için seçildi.",
      description:
        "Belirgin bir detay, saf bir çizgi veya malzemelerin beklenmedik birlikteliği. Her parçanın kendine ait bir karakteri vardır — ve bu karakter onu taşıyan kişiyle buluştuğunda gerçekten hayat bulur.",
      itemLabel: "İmza Stili",
      closingText: "Bazı mücevherler stilinizi tamamlar.",
      closingAccent: "Bazıları ise onu tanımlar.",
      captions: [
        "İki Renkli Yüzük",
        "Pırlanta Detayı",
        "İmza Yüzük",
        "Altın Bileklik",
        "Gösterişli Küpeler",
        "Mıhlama Detayı",
        "Altın Kolye Ucu",
        "Heykelsi Yüzük",
        "Pırlanta Vurgusu",
        "İmza Detayı",
      ],
      alts: [
        "LIDYA İmza Stili koleksiyonundan iki renkli altın yüzük",
        "Altın mücevherde yakın plan pırlanta detayı",
        "Altın ve pırlantalı özgün imza yüzük",
        "Heykelsi detaylara sahip zarif altın bileklik",
        "Pırlanta detaylı gösterişli altın küpeler",
        "Altında hassas pırlanta mıhlamasının yakın planı",
        "İmza Stili koleksiyonundan zarif altın kolye ucu",
        "Özgün siluete sahip heykelsi altın yüzük",
        "Parlatılmış altına yerleştirilmiş pırlanta detayı",
        "LIDYA imza mücevher detayının yakın planı",
      ],
    },
    craft: {
      eyebrow: "Karakter Detaylarda Yaşar",
      title: "Bir parçayı benzersiz kılan nedir",
      description:
        "Karakter; oran, malzeme ve detayların birlikteliğiyle oluşur. Bir mücevheri tek bir unsur tanımlamaz — ona özgün varlığını kazandıran, tüm detayların birlikte çalışma biçimidir.",
      closingText: "Tasarım mücevheri yaratır.",
      closingAccent: "Karakterini siz verirsiniz.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Form",
          description:
            "Oranlar ilk izlenimi oluşturur. Temiz çizgiler veya daha ifade dolu geometriler, detaylar fark edilmeden önce bile güçlü bir duruş yaratır.",
        },
        {
          title: "Malzeme",
          description:
            "Sarı ve beyaz altın, pırlantalar ve değerli malzemeler kontrast ve derinlik yaratır. Malzeme yalnızca mücevherin temeli değil, aynı zamanda ifadesinin bir parçasıdır.",
        },
        {
          title: "Detay",
          description:
            "Hassas bir mıhlama, parlatılmış bir kenar veya beklenmedik bir vurgu. Küçük kararlar, güzel bir mücevheri unutulmaz bir parçadan ayırır.",
        },
        {
          title: "Karakter",
          description:
            "Gerçek karakter, mücevher onu taşıyan kişiyle buluştuğunda ortaya çıkar. Aynı parça başka bir kişide tamamen farklı hissedilebilir — özgünlük tam da burada başlar.",
        },
      ],
    },
    cta: {
      title: "Size gerçekten ait hissettiren parçayı bulun",
      sub:
        "İmza stilini yalnızca bir fotoğraftan anlamak mümkün değildir. Malzemelerini, oranlarını ve detaylarını yakından keşfedin ve tekrar tekrar takmak isteyeceğiniz parçayı bulun.",
    },
  },

  sk: {
    gallery: {
      eyebrow: "Charakteristický štýl",
      title: "Šperky vybrané pre",
      titleAccent: "ich osobitosť.",
      description:
        "Výrazný detail, čistá línia alebo nečakané spojenie materiálov. Každý šperk má vlastný charakter — a ten pravý začne naplno žiť až s človekom, ktorý ho nosí.",
      itemLabel: "Charakteristický štýl",
      closingText: "Niektoré šperky dopĺňajú štýl.",
      closingAccent: "Iné ho definujú.",
      captions: [
        "Prsteň dvoch tónov",
        "Diamantový detail",
        "Charakteristický prsteň",
        "Náramok v zlate",
        "Výrazné náušnice",
        "Detail osadenia",
        "Zlatý prívesok",
        "Sochársky prsteň",
        "Diamantový akcent",
        "Podpisový detail",
      ],
      alts: [
        "Prsteň zo žltého a bieleho zlata z kolekcie Charakteristický štýl",
        "Detail diamantu osadeného v zlatom šperku",
        "Výrazný zlatý prsteň s diamantmi",
        "Elegantný zlatý náramok s výrazným detailom",
        "Výrazné zlaté náušnice s diamantmi",
        "Detail precízneho osadenia diamantov v zlate",
        "Elegantný zlatý prívesok z kolekcie Charakteristický štýl",
        "Sochársky zlatý prsteň s charakteristickou siluetou",
        "Diamantový akcent osadený v leštenom zlate",
        "Detail charakteristického šperku LIDYA",
      ],
    },
    craft: {
      eyebrow: "Charakter sa ukrýva v detailoch",
      title: "Čo robí šperk nezameniteľným",
      description:
        "Šperk získava charakter spojením proporcie, materiálu a detailu. Nie je to jediný prvok, ktorý ho robí výnimočným, ale spôsob, akým všetky pôsobia spolu.",
      closingText: "Dizajn vytvára šperk.",
      closingAccent: "Vy mu dávate charakter.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Tvar",
          description:
            "Proporcie určujú prvý dojem. Čisté línie alebo odvážnejšia geometria dávajú šperku silu, ktorú možno rozpoznať ešte skôr, než si všimnete jeho jednotlivé detaily.",
        },
        {
          title: "Materiál",
          description:
            "Žlté a biele zlato, diamanty a drahé materiály vytvárajú kontrast a hĺbku. Materiál nie je iba základom šperku — je súčasťou jeho výrazu.",
        },
        {
          title: "Detail",
          description:
            "Jemné osadenie, línia kovu či nečakaný akcent. Práve malé rozhodnutia odlišujú šperk, ktorý je krásny, od šperku, ktorý si zapamätáte.",
        },
        {
          title: "Charakter",
          description:
            "Skutočný charakter vznikne až v okamihu, keď sa šperk stretne s človekom, ktorý ho nosí. Rovnaký šperk môže na každom pôsobiť inak — a práve v tom spočíva jeho osobitosť.",
        },
      ],
    },
    cta: {
      title: "Nájdite šperk, ktorý bude váš",
      sub:
        "Charakteristický štýl sa nedá spoznať iba podľa fotografie. Objavte materiály, proporcie a detaily osobne a nájdite šperk, ku ktorému sa budete prirodzene vracať.",
    },
  },

  cs: {
    gallery: {
      eyebrow: "Charakteristický styl",
      title: "Šperky vybrané pro",
      titleAccent: "jejich osobitost.",
      description:
        "Výrazný detail, čistá linie nebo nečekané spojení materiálů. Každý šperk má vlastní charakter — a ten skutečně ožívá až s člověkem, který ho nosí.",
      itemLabel: "Charakteristický styl",
      closingText: "Některé šperky styl doplňují.",
      closingAccent: "Jiné ho definují.",
      captions: [
        "Dvoubarevný prsten",
        "Diamantový detail",
        "Charakteristický prsten",
        "Zlatý náramek",
        "Výrazné náušnice",
        "Detail osazení",
        "Zlatý přívěsek",
        "Sochařský prsten",
        "Diamantový akcent",
        "Podpisový detail",
      ],
      alts: [
        "Prsten ze žlutého a bílého zlata z kolekce Charakteristický styl",
        "Detail diamantu osazeného ve zlatém šperku",
        "Výrazný zlatý prsten s diamanty",
        "Elegantní zlatý náramek se sochařským detailem",
        "Výrazné zlaté náušnice s diamanty",
        "Detail precizního osazení diamantů ve zlatě",
        "Elegantní zlatý přívěsek z kolekce Charakteristický styl",
        "Sochařský zlatý prsten s charakteristickou siluetou",
        "Diamantový akcent osazený v leštěném zlatě",
        "Detail charakteristického šperku LIDYA",
      ],
    },
    craft: {
      eyebrow: "Charakter se skrývá v detailech",
      title: "Co dělá šperk nezaměnitelným",
      description:
        "Šperk získává charakter spojením proporcí, materiálu a detailu. Nedefinuje ho jediný prvek, ale způsob, jakým všechny části působí společně.",
      closingText: "Design vytváří šperk.",
      closingAccent: "Vy mu dáváte charakter.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Tvar",
          description:
            "Proporce určují první dojem. Čisté linie nebo odvážnější geometrie dávají šperku sílu, kterou lze vnímat ještě dříve, než si všimnete jednotlivých detailů.",
        },
        {
          title: "Materiál",
          description:
            "Žluté a bílé zlato, diamanty a vzácné materiály vytvářejí kontrast a hloubku. Materiál není jen základem šperku — je součástí jeho výrazu.",
        },
        {
          title: "Detail",
          description:
            "Precizní osazení, leštěná hrana nebo nečekaný akcent. Právě malé volby odlišují krásný šperk od toho, který si zapamatujete.",
        },
        {
          title: "Charakter",
          description:
            "Skutečný charakter vzniká ve chvíli, kdy se šperk setká s člověkem, který ho nosí. Stejný kus může na každém působit jinak — právě v tom spočívá jeho osobitost.",
        },
      ],
    },
    cta: {
      title: "Najděte šperk, který bude skutečně váš",
      sub:
        "Charakteristický styl nelze poznat jen z fotografie. Objevte materiály, proporce a detaily osobně a najděte šperk, ke kterému se budete přirozeně vracet.",
    },
  },

  hu: {
    gallery: {
      eyebrow: "Jellegzetes stílus",
      title: "Ékszerek, amelyeket",
      titleAccent: "egyediségükért választunk.",
      description:
        "Egy karakteres részlet, tiszta vonal vagy az anyagok váratlan találkozása. Minden ékszernek saját karaktere van — amely igazán akkor kel életre, amikor találkozik viselőjével.",
      itemLabel: "Jellegzetes stílus",
      closingText: "Van, amelyik kiegészíti a stílusát.",
      closingAccent: "Más darabok meghatározzák azt.",
      captions: [
        "Kétszínű gyűrű",
        "Gyémánt részlet",
        "Jellegzetes gyűrű",
        "Arany karkötő",
        "Statement fülbevaló",
        "Foglalat részlet",
        "Arany medál",
        "Szoborszerű gyűrű",
        "Gyémánt akcentus",
        "Jellegzetes részlet",
      ],
      alts: [
        "Kétszínű aranygyűrű a LIDYA Jellegzetes stílus kollekcióból",
        "Gyémánt részlet közelről arany ékszerben",
        "Jellegzetes arany- és gyémántgyűrű",
        "Elegáns arany karkötő szoborszerű részletekkel",
        "Karakteres arany fülbevaló gyémánt részletekkel",
        "Precíz gyémántfoglalat közelről aranyban",
        "Elegáns arany medál a Jellegzetes stílus kollekcióból",
        "Szoborszerű aranygyűrű jellegzetes sziluettel",
        "Gyémánt akcentus polírozott aranyban",
        "LIDYA jellegzetes ékszerrészlet közelről",
      ],
    },
    craft: {
      eyebrow: "A karakter a részletekben él",
      title: "Mitől válik egy ékszer összetéveszthetetlenné",
      description:
        "A karakter az arányok, az anyag és a részletek összhangjából születik. Egyetlen elem sem határozza meg önmagában az ékszert — azok együttese adja meg egyedi jelenlétét.",
      closingText: "A design megalkotja az ékszert.",
      closingAccent: "Ön ad neki karaktert.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Forma",
          description:
            "Az arányok adják az első benyomást. A tiszta vonalak vagy merészebb geometriák már azelőtt jelenlétet adnak az ékszernek, hogy észrevennénk az apró részleteket.",
        },
        {
          title: "Anyag",
          description:
            "A sárga- és fehérarany, a gyémántok és a nemes anyagok kontrasztot és mélységet teremtenek. Az anyag nemcsak az ékszer alapja — kifejezésének része.",
        },
        {
          title: "Részlet",
          description:
            "Precíz foglalat, polírozott él vagy váratlan hangsúly. Az apró döntések különböztetik meg a szép ékszert attól, amely emlékezetes marad.",
        },
        {
          title: "Karakter",
          description:
            "Az igazi karakter akkor jelenik meg, amikor az ékszer találkozik viselőjével. Ugyanaz a darab más személyen teljesen más hatást kelthet — éppen ez az egyediség lényege.",
        },
      ],
    },
    cta: {
      title: "Találja meg azt az ékszert, amely igazán az Öné",
      sub:
        "A jellegzetes stílust nem lehet csupán egy fotóról megérteni. Fedezze fel személyesen az anyagokat, arányokat és részleteket, és találja meg azt a darabot, amelyhez mindig visszatér.",
    },
  },

  pl: {
    gallery: {
      eyebrow: "Charakterystyczny styl",
      title: "Biżuteria wybrana ze względu na",
      titleAccent: "jej indywidualność.",
      description:
        "Wyrazisty detal, czysta linia lub nieoczekiwane połączenie materiałów. Każdy element ma własny charakter — który naprawdę ożywa dopiero w kontakcie z osobą, która go nosi.",
      itemLabel: "Charakterystyczny styl",
      closingText: "Niektóre klejnoty dopełniają styl.",
      closingAccent: "Inne go definiują.",
      captions: [
        "Pierścionek dwukolorowy",
        "Detal diamentu",
        "Pierścionek charakterystyczny",
        "Złota bransoletka",
        "Wyraziste kolczyki",
        "Detal oprawy",
        "Złoty wisiorek",
        "Rzeźbiarski pierścionek",
        "Diamentowy akcent",
        "Detal charakterystyczny",
      ],
      alts: [
        "Dwukolorowy złoty pierścionek z kolekcji LIDYA Charakterystyczny styl",
        "Zbliżenie diamentowego detalu w złotej biżuterii",
        "Charakterystyczny pierścionek ze złota i diamentów",
        "Elegancka złota bransoletka z rzeźbiarskim detalem",
        "Wyraziste złote kolczyki z diamentowymi akcentami",
        "Zbliżenie precyzyjnej oprawy diamentu w złocie",
        "Elegancki złoty wisiorek z kolekcji Charakterystyczny styl",
        "Rzeźbiarski złoty pierścionek o wyrazistej sylwetce",
        "Diamentowy akcent osadzony w polerowanym złocie",
        "Zbliżenie charakterystycznego detalu biżuterii LIDYA",
      ],
    },
    craft: {
      eyebrow: "Charakter tkwi w szczegółach",
      title: "Co sprawia, że biżuteria jest niepowtarzalna",
      description:
        "Charakter powstaje z proporcji, materiału i detalu. Żaden pojedynczy element nie definiuje biżuterii samodzielnie — liczy się sposób, w jaki wszystko współgra.",
      closingText: "Design tworzy biżuterię.",
      closingAccent: "To Ty nadajesz jej charakter.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Forma",
          description:
            "Proporcje tworzą pierwsze wrażenie. Czyste linie lub bardziej ekspresyjna geometria nadają biżuterii obecność, zanim jeszcze zauważymy jej szczegóły.",
        },
        {
          title: "Materiał",
          description:
            "Żółte i białe złoto, diamenty i szlachetne materiały tworzą kontrast i głębię. Materiał nie jest jedynie podstawą biżuterii — jest częścią jej wyrazu.",
        },
        {
          title: "Detal",
          description:
            "Precyzyjna oprawa, wypolerowana krawędź lub nieoczekiwany akcent. To właśnie małe decyzje odróżniają piękną biżuterię od tej, która zostaje w pamięci.",
        },
        {
          title: "Charakter",
          description:
            "Prawdziwy charakter pojawia się, gdy biżuteria spotyka osobę, która ją nosi. Ten sam element może wyglądać zupełnie inaczej na kimś innym — i właśnie w tym tkwi jego indywidualność.",
        },
      ],
    },
    cta: {
      title: "Znajdź biżuterię, która naprawdę będzie Twoja",
      sub:
        "Charakterystycznego stylu nie da się poznać wyłącznie ze zdjęcia. Odkryj materiały, proporcje i detale osobiście i znajdź biżuterię, do której będziesz naturalnie wracać.",
    },
  },

  ru: {
    gallery: {
      eyebrow: "Фирменный стиль",
      title: "Украшения, выбранные за",
      titleAccent: "их индивидуальность.",
      description:
        "Выразительная деталь, чистая линия или неожиданное сочетание материалов. У каждого украшения свой характер — и по-настоящему он раскрывается рядом с человеком, который его носит.",
      itemLabel: "Фирменный стиль",
      closingText: "Одни украшения дополняют стиль.",
      closingAccent: "Другие определяют его.",
      captions: [
        "Двухцветное кольцо",
        "Деталь с бриллиантом",
        "Фирменное кольцо",
        "Золотой браслет",
        "Выразительные серьги",
        "Деталь закрепки",
        "Золотая подвеска",
        "Скульптурное кольцо",
        "Бриллиантовый акцент",
        "Фирменная деталь",
      ],
      alts: [
        "Двухцветное золотое кольцо из коллекции LIDYA Фирменный стиль",
        "Крупный план бриллиантовой детали в золотом украшении",
        "Выразительное золотое кольцо с бриллиантами",
        "Элегантный золотой браслет со скульптурными деталями",
        "Выразительные золотые серьги с бриллиантовыми акцентами",
        "Крупный план точной закрепки бриллианта в золоте",
        "Элегантная золотая подвеска из коллекции Фирменный стиль",
        "Скульптурное золотое кольцо с характерным силуэтом",
        "Бриллиантовый акцент в полированном золоте",
        "Крупный план фирменной детали украшения LIDYA",
      ],
    },
    craft: {
      eyebrow: "Характер — в деталях",
      title: "Что делает украшение неповторимым",
      description:
        "Характер создаётся пропорцией, материалом и деталями. Ни один элемент не определяет украшение сам по себе — индивидуальность рождается из их сочетания.",
      closingText: "Дизайн создаёт украшение.",
      closingAccent: "Вы придаёте ему характер.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Форма",
          description:
            "Пропорции создают первое впечатление. Чистые линии или более выразительная геометрия придают украшению присутствие ещё до того, как становятся заметны отдельные детали.",
        },
        {
          title: "Материал",
          description:
            "Жёлтое и белое золото, бриллианты и драгоценные материалы создают контраст и глубину. Материал — не просто основа украшения, а часть его выражения.",
        },
        {
          title: "Деталь",
          description:
            "Точная закрепка, отполированная грань или неожиданный акцент. Именно небольшие решения отличают красивое украшение от того, которое остаётся в памяти.",
        },
        {
          title: "Характер",
          description:
            "Настоящий характер проявляется, когда украшение встречает человека, который его носит. Один и тот же предмет может выглядеть совершенно по-разному — и в этом его индивидуальность.",
        },
      ],
    },
    cta: {
      title: "Найдите украшение, которое станет по-настоящему вашим",
      sub:
        "Фирменный стиль невозможно почувствовать только по фотографии. Откройте материалы, пропорции и детали лично и найдите украшение, к которому захочется возвращаться.",
    },
  },

  nl: {
    gallery: {
      eyebrow: "Signatuurstijl",
      title: "Sieraden gekozen om",
      titleAccent: "hun eigen karakter.",
      description:
        "Een uitgesproken detail, een zuivere lijn of een onverwachte combinatie van materialen. Elk sieraad heeft een eigen karakter — dat pas echt tot leven komt bij degene die het draagt.",
      itemLabel: "Signatuurstijl",
      closingText: "Sommige sieraden vullen uw stijl aan.",
      closingAccent: "Andere bepalen hem.",
      captions: [
        "Tweekleurige ring",
        "Diamantdetail",
        "Signatuurring",
        "Gouden armband",
        "Statement oorbellen",
        "Detail van zetting",
        "Gouden hanger",
        "Sculpturale ring",
        "Diamantaccent",
        "Signatuurdetail",
      ],
      alts: [
        "Tweekleurige gouden ring uit de LIDYA Signatuurstijl collectie",
        "Close-up van een diamantdetail in gouden sieraden",
        "Karakteristieke gouden signatuurring met diamanten",
        "Elegante gouden armband met sculpturale details",
        "Statement gouden oorbellen met diamantaccenten",
        "Close-up van een precieze diamantzetting in goud",
        "Elegante gouden hanger uit de Signatuurstijl collectie",
        "Sculpturale gouden ring met een onderscheidend silhouet",
        "Diamantaccent gezet in gepolijst goud",
        "Close-up van een kenmerkend LIDYA sieraaddetail",
      ],
    },
    craft: {
      eyebrow: "Karakter zit in het detail",
      title: "Wat een sieraad onmiskenbaar eigen maakt",
      description:
        "Karakter ontstaat door verhouding, materiaal en detail. Geen enkel element bepaalt een sieraad op zichzelf — juist de samenhang geeft het zijn onderscheidende uitstraling.",
      closingText: "Design creëert het sieraad.",
      closingAccent: "U geeft het karakter.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Vorm",
          description:
            "Verhoudingen bepalen de eerste indruk. Zuivere lijnen of meer uitgesproken geometrie geven een sieraad aanwezigheid nog voordat de afzonderlijke details opvallen.",
        },
        {
          title: "Materiaal",
          description:
            "Geel- en witgoud, diamanten en edele materialen creëren contrast en diepte. Materiaal is niet alleen de basis van een sieraad — het is onderdeel van de expressie.",
        },
        {
          title: "Detail",
          description:
            "Een precieze zetting, een gepolijste rand of een onverwacht accent. Kleine keuzes onderscheiden een mooi sieraad van een stuk dat bijblijft.",
        },
        {
          title: "Karakter",
          description:
            "Echt karakter ontstaat wanneer een sieraad degene ontmoet die het draagt. Hetzelfde stuk kan bij iemand anders volledig anders aanvoelen — juist daarin ligt zijn individualiteit.",
        },
      ],
    },
    cta: {
      title: "Vind het sieraad dat onmiskenbaar bij u hoort",
      sub:
        "Signatuurstijl laat zich niet alleen op een foto begrijpen. Ontdek materialen, verhoudingen en details persoonlijk en vind het sieraad waar u vanzelf naar teruggrijpt.",
    },
  },

  da: {
    gallery: {
      eyebrow: "Signaturstil",
      title: "Smykker udvalgt for",
      titleAccent: "deres individualitet.",
      description:
        "En markant detalje, en ren linje eller en uventet kombination af materialer. Hvert smykke har sin egen karakter — og den kommer for alvor til live hos den person, der bærer det.",
      itemLabel: "Signaturstil",
      closingText: "Nogle smykker fuldender din stil.",
      closingAccent: "Andre definerer den.",
      captions: [
        "Tofarvet ring",
        "Diamantdetalje",
        "Signaturring",
        "Guldarmbånd",
        "Statement-øreringe",
        "Detalje af fatning",
        "Guldvedhæng",
        "Skulpturel ring",
        "Diamantaccent",
        "Signaturdetalje",
      ],
      alts: [
        "Tofarvet guldring fra LIDYA Signaturstil-kollektionen",
        "Nærbillede af diamantdetalje i guldsmykke",
        "Karakteristisk guld- og diamantsignaturring",
        "Elegant guldarmbånd med skulpturelle detaljer",
        "Statement-guldøreringe med diamantdetaljer",
        "Nærbillede af præcis diamantfatning i guld",
        "Elegant guldvedhæng fra Signaturstil-kollektionen",
        "Skulpturel guldring med en markant silhuet",
        "Diamantaccent indfattet i poleret guld",
        "Nærbillede af karakteristisk LIDYA smykkedetalje",
      ],
    },
    craft: {
      eyebrow: "Karakteren ligger i detaljen",
      title: "Det, der gør et smykke umiskendeligt",
      description:
        "Karakter skabes gennem proportioner, materiale og detaljer. Intet enkelt element definerer et smykke alene — det er samspillet, der giver det sin særlige tilstedeværelse.",
      closingText: "Design skaber smykket.",
      closingAccent: "Du giver det karakter.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Form",
          description:
            "Proportioner skaber det første indtryk. Rene linjer eller mere udtryksfuld geometri giver et smykke tilstedeværelse, før man overhovedet lægger mærke til detaljerne.",
        },
        {
          title: "Materiale",
          description:
            "Gult og hvidt guld, diamanter og ædle materialer skaber kontrast og dybde. Materialet er ikke blot smykkets fundament — det er en del af dets udtryk.",
        },
        {
          title: "Detalje",
          description:
            "En præcis fatning, en poleret kant eller en uventet accent. Små beslutninger adskiller et smukt smykke fra et, man husker.",
        },
        {
          title: "Karakter",
          description:
            "Den virkelige karakter opstår, når smykket møder den person, der bærer det. Det samme smykke kan føles helt forskelligt på en anden — og netop dér ligger individualiteten.",
        },
      ],
    },
    cta: {
      title: "Find det smykke, der føles helt dit eget",
      sub:
        "Signaturstil kan ikke opleves fuldt ud på et fotografi. Oplev materialer, proportioner og detaljer personligt og find det smykke, du naturligt vil vende tilbage til.",
    },
  },

  fi: {
    gallery: {
      eyebrow: "Tunnusomainen tyyli",
      title: "Korut valittu niiden",
      titleAccent: "yksilöllisyyden vuoksi.",
      description:
        "Selkeä yksityiskohta, puhdas linja tai odottamaton materiaalien yhdistelmä. Jokaisella korulla on oma luonteensa — joka todella herää eloon vasta käyttäjänsä kanssa.",
      itemLabel: "Tunnusomainen tyyli",
      closingText: "Jotkut korut täydentävät tyyliäsi.",
      closingAccent: "Toiset määrittelevät sen.",
      captions: [
        "Kaksisävyinen sormus",
        "Timanttidetalji",
        "Tunnusomainen sormus",
        "Kultarannekoru",
        "Näyttävät korvakorut",
        "Istutuksen detalji",
        "Kultariipus",
        "Veistoksellinen sormus",
        "Timanttiaksentti",
        "Tunnusomainen detalji",
      ],
      alts: [
        "Kaksisävyinen kultasormus LIDYA Tunnusomainen tyyli -kokoelmasta",
        "Lähikuva timanttidetaljista kultakorussa",
        "Tunnusomainen kulta- ja timanttisormus",
        "Tyylikäs kultarannekoru veistoksellisilla yksityiskohdilla",
        "Näyttävät kultakorvakorut timanttiyksityiskohdilla",
        "Lähikuva tarkasta timantti-istutuksesta kullassa",
        "Tyylikäs kultariipus Tunnusomainen tyyli -kokoelmasta",
        "Veistoksellinen kultasormus tunnistettavalla siluetilla",
        "Timanttiaksentti kiillotetussa kullassa",
        "Lähikuva LIDYA-korun tunnusomaisesta yksityiskohdasta",
      ],
    },
    craft: {
      eyebrow: "Luonne elää yksityiskohdissa",
      title: "Mikä tekee korusta tunnistettavan",
      description:
        "Luonne syntyy mittasuhteista, materiaalista ja yksityiskohdista. Yksikään elementti ei yksin määritä korua — niiden yhteispeli antaa sille oman läsnäolonsa.",
      closingText: "Muotoilu luo korun.",
      closingAccent: "Sinä annat sille luonteen.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Muoto",
          description:
            "Mittasuhteet luovat ensivaikutelman. Puhtaat linjat tai rohkeampi geometria antavat korulle läsnäolon jo ennen kuin yksittäiset yksityiskohdat huomataan.",
        },
        {
          title: "Materiaali",
          description:
            "Kelta- ja valkokulta, timantit ja jalot materiaalit luovat kontrastia ja syvyyttä. Materiaali ei ole vain korun perusta — se on osa sen ilmaisua.",
        },
        {
          title: "Yksityiskohta",
          description:
            "Tarkka istutus, kiillotettu reuna tai odottamaton korostus. Pienet päätökset erottavat kauniin korun siitä, joka jää mieleen.",
        },
        {
          title: "Luonne",
          description:
            "Todellinen luonne syntyy, kun koru kohtaa käyttäjänsä. Sama koru voi tuntua aivan erilaiselta toisella henkilöllä — juuri siinä on yksilöllisyyden ydin.",
        },
      ],
    },
    cta: {
      title: "Löydä koru, joka tuntuu aidosti omaltasi",
      sub:
        "Tunnusomaista tyyliä ei voi ymmärtää pelkästä valokuvasta. Tutustu materiaaleihin, mittasuhteisiin ja yksityiskohtiin henkilökohtaisesti ja löydä koru, johon palaat luonnostaan.",
    },
  },

  sv: {
    gallery: {
      eyebrow: "Signaturstil",
      title: "Smycken valda för",
      titleAccent: "sin individualitet.",
      description:
        "En tydlig detalj, en ren linje eller en oväntad kombination av material. Varje smycke har sin egen karaktär — som verkligen kommer till liv hos personen som bär det.",
      itemLabel: "Signaturstil",
      closingText: "Vissa smycken kompletterar din stil.",
      closingAccent: "Andra definierar den.",
      captions: [
        "Tvåfärgad ring",
        "Diamantdetalj",
        "Signaturring",
        "Guldarmband",
        "Statement-örhängen",
        "Infattningsdetalj",
        "Guldhänge",
        "Skulptural ring",
        "Diamantaccent",
        "Signaturdetalj",
      ],
      alts: [
        "Tvåfärgad guldring från LIDYA Signaturstil-kollektionen",
        "Närbild av diamantdetalj i guldsmycke",
        "Karakteristisk signaturring i guld och diamanter",
        "Elegant guldarmband med skulpturala detaljer",
        "Statement-örhängen i guld med diamantaccenter",
        "Närbild av exakt diamantinfattning i guld",
        "Elegant guldhänge från Signaturstil-kollektionen",
        "Skulptural guldring med tydlig silhuett",
        "Diamantaccent infattad i polerat guld",
        "Närbild av karakteristisk LIDYA-smyckesdetalj",
      ],
    },
    craft: {
      eyebrow: "Karaktären finns i detaljerna",
      title: "Det som gör ett smycke omisskännligt",
      description:
        "Karaktär skapas genom proportion, material och detalj. Ingen enskild del definierar ett smycke — det är samspelet som ger det dess tydliga närvaro.",
      closingText: "Designen skapar smycket.",
      closingAccent: "Du ger det karaktär.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Form",
          description:
            "Proportionerna skapar det första intrycket. Rena linjer eller mer uttrycksfull geometri ger ett smycke närvaro redan innan de enskilda detaljerna upptäcks.",
        },
        {
          title: "Material",
          description:
            "Gult och vitt guld, diamanter och ädla material skapar kontrast och djup. Materialet är inte bara smyckets grund — det är en del av dess uttryck.",
        },
        {
          title: "Detalj",
          description:
            "En exakt infattning, en polerad kant eller en oväntad accent. Små beslut skiljer ett vackert smycke från ett som stannar kvar i minnet.",
        },
        {
          title: "Karaktär",
          description:
            "Den verkliga karaktären uppstår när smycket möter personen som bär det. Samma smycke kan kännas helt annorlunda på någon annan — och just där finns individualiteten.",
        },
      ],
    },
    cta: {
      title: "Hitta smycket som känns omisskännligt ditt",
      sub:
        "Signaturstil kan inte förstås fullt ut genom ett fotografi. Upptäck material, proportioner och detaljer personligen och hitta smycket du naturligt återvänder till.",
    },
  },

  fr: {
    gallery: {
      eyebrow: "Style signature",
      title: "Des bijoux choisis pour",
      titleAccent: "leur singularité.",
      description:
        "Un détail affirmé, une ligne pure ou une association inattendue de matières. Chaque bijou possède son propre caractère — qui prend pleinement vie auprès de la personne qui le porte.",
      itemLabel: "Style signature",
      closingText: "Certains bijoux complètent votre style.",
      closingAccent: "D’autres le définissent.",
      captions: [
        "Bague bicolore",
        "Détail diamant",
        "Bague signature",
        "Bracelet en or",
        "Boucles statement",
        "Détail du serti",
        "Pendentif en or",
        "Bague sculpturale",
        "Accent diamant",
        "Détail signature",
      ],
      alts: [
        "Bague bicolore en or de la collection LIDYA Style signature",
        "Gros plan d’un détail diamant sur un bijou en or",
        "Bague signature distinctive en or et diamants",
        "Bracelet en or raffiné aux détails sculpturaux",
        "Boucles d’oreilles statement en or avec accents de diamants",
        "Gros plan d’un sertissage précis de diamant dans l’or",
        "Pendentif élégant en or de la collection Style signature",
        "Bague sculpturale en or à la silhouette distinctive",
        "Accent diamant serti dans de l’or poli",
        "Gros plan d’un détail signature d’un bijou LIDYA",
      ],
    },
    craft: {
      eyebrow: "Le caractère réside dans le détail",
      title: "Ce qui rend un bijou véritablement unique",
      description:
        "Le caractère naît des proportions, de la matière et du détail. Aucun élément ne définit seul un bijou — c’est leur harmonie qui lui donne sa présence singulière.",
      closingText: "Le design crée le bijou.",
      closingAccent: "Vous lui donnez son caractère.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Forme",
          description:
            "Les proportions créent la première impression. Des lignes pures ou une géométrie plus expressive donnent au bijou une présence perceptible avant même que ses détails ne se révèlent.",
        },
        {
          title: "Matière",
          description:
            "Or jaune et blanc, diamants et matières précieuses créent contraste et profondeur. La matière n’est pas seulement la base du bijou — elle fait partie de son expression.",
        },
        {
          title: "Détail",
          description:
            "Un serti précis, une arête polie ou un accent inattendu. Ce sont les petites décisions qui distinguent un beau bijou de celui qui reste en mémoire.",
        },
        {
          title: "Caractère",
          description:
            "Le véritable caractère apparaît lorsque le bijou rencontre la personne qui le porte. Une même pièce peut sembler totalement différente sur quelqu’un d’autre — c’est là toute sa singularité.",
        },
      ],
    },
    cta: {
      title: "Trouvez le bijou qui vous ressemble vraiment",
      sub:
        "Le style signature ne se découvre pas pleinement sur une photographie. Venez explorer les matières, les proportions et les détails en personne et trouvez le bijou vers lequel vous reviendrez naturellement.",
    },
  },

  it: {
    gallery: {
      eyebrow: "Stile distintivo",
      title: "Gioielli scelti per",
      titleAccent: "la loro individualità.",
      description:
        "Un dettaglio deciso, una linea pura o un incontro inatteso di materiali. Ogni gioiello possiede un carattere proprio — che prende davvero vita sulla persona che lo indossa.",
      itemLabel: "Stile distintivo",
      closingText: "Alcuni gioielli completano il vostro stile.",
      closingAccent: "Altri lo definiscono.",
      captions: [
        "Anello bicolore",
        "Dettaglio diamante",
        "Anello distintivo",
        "Bracciale in oro",
        "Orecchini statement",
        "Dettaglio dell’incastonatura",
        "Pendente in oro",
        "Anello scultoreo",
        "Accento di diamante",
        "Dettaglio distintivo",
      ],
      alts: [
        "Anello bicolore in oro della collezione LIDYA Stile distintivo",
        "Primo piano di un dettaglio con diamante in gioiello d’oro",
        "Anello distintivo in oro e diamanti",
        "Elegante bracciale in oro con dettagli scultorei",
        "Orecchini statement in oro con accenti di diamanti",
        "Primo piano di una precisa incastonatura di diamante in oro",
        "Elegante pendente in oro della collezione Stile distintivo",
        "Anello scultoreo in oro dalla silhouette distintiva",
        "Accento di diamante incastonato nell’oro lucido",
        "Primo piano di un dettaglio distintivo di gioiello LIDYA",
      ],
    },
    craft: {
      eyebrow: "Il carattere vive nei dettagli",
      title: "Ciò che rende un gioiello inconfondibile",
      description:
        "Il carattere nasce da proporzione, materia e dettaglio. Nessun singolo elemento definisce da solo un gioiello — è il modo in cui lavorano insieme a conferirgli una presenza distintiva.",
      closingText: "Il design crea il gioiello.",
      closingAccent: "Voi gli date carattere.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Forma",
          description:
            "Le proporzioni creano la prima impressione. Linee pulite o geometrie più espressive conferiscono al gioiello una presenza percepibile ancora prima dei suoi singoli dettagli.",
        },
        {
          title: "Materiale",
          description:
            "Oro giallo e bianco, diamanti e materiali preziosi creano contrasto e profondità. Il materiale non è soltanto la base del gioiello — è parte della sua espressione.",
        },
        {
          title: "Dettaglio",
          description:
            "Un’incastonatura precisa, un bordo lucidato o un accento inatteso. Sono le piccole scelte a distinguere un bel gioiello da uno che resta impresso.",
        },
        {
          title: "Carattere",
          description:
            "Il vero carattere emerge quando il gioiello incontra la persona che lo indossa. Lo stesso pezzo può apparire completamente diverso su un’altra persona — ed è proprio questa la sua individualità.",
        },
      ],
    },
    cta: {
      title: "Trovate il gioiello che sentite davvero vostro",
      sub:
        "Lo stile distintivo non può essere compreso soltanto attraverso una fotografia. Scoprite di persona materiali, proporzioni e dettagli e trovate il gioiello a cui tornerete naturalmente.",
    },
  },

  es: {
    gallery: {
      eyebrow: "Estilo distintivo",
      title: "Joyas elegidas por",
      titleAccent: "su individualidad.",
      description:
        "Un detalle marcado, una línea pura o una combinación inesperada de materiales. Cada joya posee un carácter propio — que realmente cobra vida en la persona que la lleva.",
      itemLabel: "Estilo distintivo",
      closingText: "Algunas joyas complementan su estilo.",
      closingAccent: "Otras lo definen.",
      captions: [
        "Anillo bicolor",
        "Detalle de diamante",
        "Anillo distintivo",
        "Pulsera de oro",
        "Pendientes statement",
        "Detalle del engaste",
        "Colgante de oro",
        "Anillo escultórico",
        "Acento de diamante",
        "Detalle distintivo",
      ],
      alts: [
        "Anillo bicolor de oro de la colección LIDYA Estilo distintivo",
        "Primer plano de un detalle de diamante en joyería de oro",
        "Anillo distintivo de oro y diamantes",
        "Pulsera refinada de oro con detalles escultóricos",
        "Pendientes statement de oro con detalles de diamantes",
        "Primer plano de un engaste preciso de diamante en oro",
        "Elegante colgante de oro de la colección Estilo distintivo",
        "Anillo escultórico de oro con silueta distintiva",
        "Acento de diamante engastado en oro pulido",
        "Primer plano de un detalle distintivo de joyería LIDYA",
      ],
    },
    craft: {
      eyebrow: "El carácter vive en los detalles",
      title: "Lo que hace que una joya sea inconfundible",
      description:
        "El carácter nace de la proporción, el material y el detalle. Ningún elemento define una joya por sí solo — es su combinación la que le da una presencia distintiva.",
      closingText: "El diseño crea la joya.",
      closingAccent: "Usted le da carácter.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Forma",
          description:
            "Las proporciones crean la primera impresión. Las líneas puras o una geometría más expresiva dan presencia a una joya incluso antes de percibir sus detalles.",
        },
        {
          title: "Material",
          description:
            "Oro amarillo y blanco, diamantes y materiales preciosos crean contraste y profundidad. El material no es solo la base de una joya — también forma parte de su expresión.",
        },
        {
          title: "Detalle",
          description:
            "Un engaste preciso, un borde pulido o un acento inesperado. Las pequeñas decisiones distinguen una joya bonita de una pieza que permanece en la memoria.",
        },
        {
          title: "Carácter",
          description:
            "El verdadero carácter aparece cuando la joya se encuentra con la persona que la lleva. La misma pieza puede sentirse completamente distinta en otra persona — y ahí reside su individualidad.",
        },
      ],
    },
    cta: {
      title: "Encuentre la joya que se sienta verdaderamente suya",
      sub:
        "El estilo distintivo no puede comprenderse solo a través de una fotografía. Descubra personalmente sus materiales, proporciones y detalles y encuentre la joya a la que volverá de forma natural.",
    },
  },
};

const SIGNATURE_STYLE_IMAGES = [
  "/images/signature-style/two-tone-ring.png",
  "/images/signature-style/diamond-detail.png",
  "/images/signature-style/signature-ring.png",
  "/images/signature-style/gold-bracelet.png",
  "/images/signature-style/statement-earrings.png",
  "/images/signature-style/setting-detail.png",
  "/images/signature-style/gold-pendant.png",
  "/images/signature-style/sculptural-ring.png",
  "/images/signature-style/diamond-accent.png",
  "/images/signature-style/signature-detail.png",
];

export default function SignatureStyleContent() {
  const { locale } = useLanguage();

  const copy =
    SIGNATURE_STYLE_COPY[locale] ??
    SIGNATURE_STYLE_COPY.en;

  const galleryItems = SIGNATURE_STYLE_IMAGES.map((image, index) => ({
    image,
    caption:
      copy.gallery.captions[index] ??
      SIGNATURE_STYLE_COPY.en.gallery.captions[index] ??
      "",
    alt:
      copy.gallery.alts[index] ??
      SIGNATURE_STYLE_COPY.en.gallery.alts[index] ??
      "",
  }));

  return (
    <>
      <Header />

      <main>
        <SignatureStyleCinematicHero />

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