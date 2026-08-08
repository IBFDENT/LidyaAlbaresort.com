import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

export const GOLD_TEXT: Record<string, LocalizedText> = {
  heroEyebrow: {
    de: "Investmentgold",
    en: "Investment Gold",
    tr: "Yatırım Altını",
    sk: "Investičné zlato",
    cs: "Investiční zlato",
    hu: "Befektetési arany",
    pl: "Złoto inwestycyjne",
  },
  heroTitle: {
    de: "Physisches Gold, ganz nach Ihren Vorstellungen",
    en: "Physical Gold, Held Your Way",
    tr: "Fiziksel Altın, Size Özgü Şekilde",
    sk: "Fyzické zlato, presne podľa vás",
    cs: "Fyzické zlato, přesně podle vás",
    hu: "Fizikai arany, az Ön elképzelése szerint",
    pl: "Fizyczne złoto, dopasowane do Ciebie",
  },
  heroLead: {
    de: "Von Gramm-Barren bis zum vollen Kilo, und Münzen von den führenden Prägestätten der Welt — jedes Stück, das wir anbieten, ist 999,9 Feingold, zertifiziert und bereit, als private, tragbare Wertanlage gehalten zu werden.",
    en: "From gram bars to a full kilo, and coins from the world's leading mints — every piece we offer is 999.9 fine gold, certified and ready to be held as a private, portable store of value.",
    tr: "Gram külçelerden tam kiloya, ve dünyanın önde gelen darphanelerinden sikkelere kadar — sunduğumuz her parça 999.9 saf altındır, sertifikalıdır ve özel, taşınabilir bir değer saklama aracı olarak tutulmaya hazırdır.",
    sk: "Od gramových tehličiek až po celé kilo, a mince od popredných svetových mincovní — každý kus, ktorý ponúkame, je rýdze zlato 999,9, certifikované a pripravené slúžiť ako súkromná, prenosná úschova hodnoty.",
    cs: "Od gramových cihliček až po celé kilo, a mince od předních světových mincoven — každý kus, který nabízíme, je ryzí zlato 999,9, certifikovaný a připravený sloužit jako soukromá, přenosná úschova hodnoty.",
    hu: "A gramm rúdaktól a teljes kilóig, valamint a világ vezető pénzverdéinek érméi — minden általunk kínált darab 999,9 finomságú arany, tanúsítvánnyal, magánjellegű, hordozható értékmegőrzőként készen áll.",
    pl: "Od sztabek jednogramowych po pełen kilogram, oraz monety z czołowych mennic świata — każdy oferowany przez nas element to złoto próby 999,9, certyfikowane i gotowe, by służyć jako prywatna, przenośna forma lokaty wartości.",
  },

  section1Eyebrow: {
    de: "Reinheit & Gewicht",
    en: "Purity & Weight",
    tr: "Saflık ve Ağırlık",
    sk: "Rýdzosť a váha",
    cs: "Ryzost a váha",
    hu: "Finomság és súly",
    pl: "Czystość i waga",
  },
  section1Title: {
    de: "Was den Wert eines Barrens bestimmt",
    en: "What Determines a Bar's Value",
    tr: "Bir Külçenin Değerini Ne Belirler",
    sk: "Čo určuje hodnotu tehličky",
    cs: "Co určuje hodnotu cihličky",
    hu: "Mi határozza meg egy rúd értékét",
    pl: "Co decyduje o wartości sztabki",
  },

  section2Eyebrow: {
    de: "Barren & Münzen",
    en: "Bars & Coins",
    tr: "Külçeler ve Sikkeler",
    sk: "Tehličky a mince",
    cs: "Cihličky a mince",
    hu: "Rudak és érmék",
    pl: "Sztabki i monety",
  },
  section2Title: {
    de: "Zwei Wege, Gold zu halten",
    en: "Two Ways to Hold Gold",
    tr: "Altın Tutmanın İki Yolu",
    sk: "Dva spôsoby, ako držať zlato",
    cs: "Dva způsoby, jak držet zlato",
    hu: "Kétféleképpen tarthatja az aranyat",
    pl: "Dwa sposoby na posiadanie złota",
  },

  section3Eyebrow: {
    de: "Zertifiziert & Sicher",
    en: "Certified & Secure",
    tr: "Sertifikalı ve Güvenli",
    sk: "Certifikované a bezpečné",
    cs: "Certifikované a bezpečné",
    hu: "Tanúsított és biztonságos",
    pl: "Certyfikowane i bezpieczne",
  },
  section3Title: {
    de: "Mit Vertrauen gekauft, mit Vertrauen gehalten",
    en: "Bought With Confidence, Held With Confidence",
    tr: "Güvenle Satın Alınır, Güvenle Saklanır",
    sk: "Kúpené s dôverou, uchovávané s dôverou",
    cs: "Koupené s důvěrou, uchovávané s důvěrou",
    hu: "Bizalommal vásárolva, bizalommal megőrizve",
    pl: "Kupione z zaufaniem, przechowywane z zaufaniem",
  },

  section4Eyebrow: {
    de: "Warum in Gold investieren",
    en: "Why Invest in Gold",
    tr: "Neden Altına Yatırım Yapmalı",
    sk: "Prečo investovať do zlata",
    cs: "Proč investovat do zlata",
    hu: "Miért érdemes aranyba fektetni",
    pl: "Dlaczego warto inwestować w złoto",
  },
  section4Title: {
    de: "Ein Wertspeicher für jede Generation",
    en: "A Store of Value for Every Generation",
    tr: "Her Nesil İçin Bir Değer Saklama Aracı",
    sk: "Úschova hodnoty pre každú generáciu",
    cs: "Úschova hodnoty pro každou generaci",
    hu: "Értékmegőrző minden generáció számára",
    pl: "Lokata wartości dla każdego pokolenia",
  },

  ctaTitle: {
    de: "Sprechen Sie mit uns über Investmentgold",
    en: "Speak With Us About Investment Gold",
    tr: "Yatırım Altını Hakkında Bizimle Konuşun",
    sk: "Porozprávajte sa s nami o investičnom zlate",
    cs: "Promluvte si s námi o investičním zlatě",
    hu: "Beszéljen velünk a befektetési aranyról",
    pl: "Porozmawiaj z nami o złocie inwestycyjnym",
  },
  ctaSub: {
    de: "Vereinbaren Sie einen privaten Termin, um den aktuellen Bestand zu sehen, Gewichte und Preise zu besprechen oder eine individuelle Bestellung aufzugeben.",
    en: "Book a private appointment to see current stock, discuss weights and pricing, or place a custom order.",
    tr: "Mevcut stoku görmek, ağırlık ve fiyatlandırmayı görüşmek veya özel bir sipariş vermek için özel bir randevu alın.",
    sk: "Dohodnite si súkromné stretnutie, kde si pozriete aktuálnu ponuku, prejdeme váhy a ceny, alebo zadáte individuálnu objednávku.",
    cs: "Domluvte si soukromou schůzku, kde si prohlédnete aktuální nabídku, projdeme váhy a ceny, nebo zadáte individuální objednávku.",
    hu: "Foglaljon privát időpontot, hogy megtekinthesse aktuális készletünket, megbeszélhessük a súlyokat és az árakat, vagy egyedi rendelést adhasson le.",
    pl: "Umów się na prywatne spotkanie, aby zobaczyć aktualny stan, omówić wagi i ceny lub złożyć indywidualne zamówienie.",
  },
};

export type ValuePoint = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

export const SECTION_1_POINTS: ValuePoint[] = [
  {
    title: {
      de: "Reinheit & Feingehalt",
      en: "Purity & Fineness",
      tr: "Saflık ve Ayar",
      sk: "Rýdzosť a čistota",
      cs: "Ryzost a čistota",
      hu: "Finomság és tisztaság",
      pl: "Czystość i próba",
    },
    description: {
      de: "Jeder Barren und jede Münze, die wir anbieten, besteht aus 999,9 Feingold — 24 Karat, dem reinsten weltweit anerkannten Standard.",
      en: "Every bar and coin we offer is 999.9 fine gold — 24 karat, the purest standard recognised worldwide.",
      tr: "Sunduğumuz her külçe ve sikke 999.9 saf altındır — dünya çapında tanınan en saf standart olan 24 ayar.",
      sk: "Každá tehlička a minca, ktorú ponúkame, je rýdze zlato 999,9 — 24 karátov, najčistejší celosvetovo uznávaný štandard.",
      cs: "Každá cihlička a mince, kterou nabízíme, je ryzí zlato 999,9 — 24 karátů, nejčistší celosvětově uznávaný standard.",
      hu: "Minden általunk kínált rúd és érme 999,9 finomságú arany — 24 karátos, a világszerte elismert legtisztább szabvány.",
      pl: "Każda oferowana przez nas sztabka i moneta to złoto próby 999,9 — 24 karaty, najczystszy standard uznawany na całym świecie.",
    },
    image: "/images/investment-gold/purity.png",
    imageWidth: 350,
    imageHeight: 233,
    imageAlt:
      "Five gold bars of increasing size, each stamped 999.9 purity",
  },
  {
    title: {
      de: "Gewicht & Stückelungen",
      en: "Weight & Denominations",
      tr: "Ağırlık ve Kupürler",
      sk: "Váha a nominály",
      cs: "Váha a nominály",
      hu: "Súly és címletek",
      pl: "Waga i nominały",
    },
    description: {
      de: "Erhältlich von 1 Gramm bis zum vollen Kilobarren, sodass Sie klein anfangen oder in großem Maßstab investieren können — der Wert steigt direkt mit dem Gewicht.",
      en: "Available from 1 gram to a full kilo bar, so you can start small or invest at scale — value scales directly with weight.",
      tr: "1 gramdan tam kilo külçeye kadar mevcuttur, böylece küçük başlayabilir veya büyük ölçekte yatırım yapabilirsiniz — değer ağırlıkla doğrudan orantılıdır.",
      sk: "Dostupné od 1 gramu až po celú kilovú tehličku, takže môžete začať v malom alebo investovať vo veľkom — hodnota rastie priamo s váhou.",
      cs: "Dostupné od 1 gramu až po celou kilovou cihličku, takže můžete začít v malém nebo investovat ve velkém — hodnota roste přímo s váhou.",
      hu: "1 grammtól a teljes kilós rúdig elérhető, így akár kis léptékben kezdheti, akár nagyban fektethet be — az érték egyenesen arányos a súllyal.",
      pl: "Dostępne od 1 grama do pełnej sztabki kilogramowej, dzięki czemu możesz zacząć od małych ilości lub inwestować na większą skalę — wartość rośnie wprost proporcjonalnie do wagi.",
    },
    image: "/images/investment-gold/weight.png",
    imageWidth: 1536,
    imageHeight: 322,
    imageAlt:
      "A full range of gold bars from 1 gram to 1 kilogram, arranged by size",
  },
];

export const SECTION_2_POINTS: ValuePoint[] = [
  {
    title: {
      de: "Barren",
      en: "Bars",
      tr: "Külçeler",
      sk: "Tehličky",
      cs: "Cihličky",
      hu: "Rudak",
      pl: "Sztabki",
    },
    description: {
      de: "Gegossene oder geprägte Barren von 1 g bis 1 kg, jeder mit Gewicht, Feingehalt und Prägestempel versehen.",
      en: "Cast or minted bars from 1g to 1kg, each stamped with its weight, purity and mint mark.",
      tr: "1 gramdan 1 kiloya kadar dökme veya darphane külçeleri — her biri ağırlığı, saflığı ve darphane damgasıyla işaretlenmiştir.",
      sk: "Liate alebo razené tehličky od 1 g do 1 kg, každá s vyrazenou váhou, rýdzosťou a značkou mincovne.",
      cs: "Lité nebo ražené cihličky od 1 g do 1 kg, každá s vyraženou váhou, ryzostí a značkou mincovny.",
      hu: "Öntött vagy vert rudak 1 g-tól 1 kg-ig, mindegyiken feltüntetve a súly, a finomság és a verde jelzése.",
      pl: "Sztabki lane lub bite od 1 g do 1 kg, każda z wybitą wagą, próbą i znakiem mennicy.",
    },
    image: "/images/investment-gold/bars.png",
    imageWidth: 743,
    imageHeight: 234,
    imageAlt:
      "Gold bars of different weights, including 10oz, 20oz, 500g and 1 kilo",
  },
  {
    title: {
      de: "Münzen",
      en: "Coins",
      tr: "Sikkeler",
      sk: "Mince",
      cs: "Mince",
      hu: "Érmék",
      pl: "Monety",
    },
    description: {
      de: "Staatliche Münzen wie der Maple Leaf und der American Eagle — anerkannt, handelbar und überall auf der Welt leicht zu verifizieren.",
      en: "Sovereign coins such as the Maple Leaf and American Eagle — recognised, tradeable and easy to verify anywhere in the world.",
      tr: "Maple Leaf ve American Eagle gibi resmi sikkeler — dünyanın her yerinde tanınır, alınıp satılabilir ve kolayca doğrulanabilir.",
      sk: "Štátne mince ako Maple Leaf a American Eagle — uznávané, obchodovateľné a ľahko overiteľné kdekoľvek na svete.",
      cs: "Státní mince jako Maple Leaf a American Eagle — uznávané, obchodovatelné a snadno ověřitelné kdekoli na světě.",
      hu: "Állami érmék, mint a Maple Leaf és az American Eagle — elismertek, kereskedhetők és bárhol a világon könnyen ellenőrizhetők.",
      pl: "Oficjalne monety, takie jak Maple Leaf i American Eagle — uznawane, zbywalne i łatwe do zweryfikowania w każdym miejscu na świecie.",
    },
    image: "/images/investment-gold/coins.png",
    imageWidth: 773,
    imageHeight: 234,
    imageAlt:
      "Gold coins of increasing size, including Maple Leaf and American Eagle designs",
  },
];

export const SECTION_3_POINTS: ValuePoint[] = [
  {
    title: {
      de: "Zertifiziert & versiegelt",
      en: "Certified & Sealed",
      tr: "Sertifikalı ve Mühürlü",
      sk: "Certifikované a zapečatené",
      cs: "Certifikované a zapečetěné",
      hu: "Tanúsított és lezárt",
      pl: "Certyfikowane i zaplombowane",
    },
    description: {
      de: "Kleinere Barren sind in manipulationssicheren Zertifikatskarten versiegelt, jede mit einer eindeutigen Seriennummer zur Überprüfung.",
      en: "Smaller bars are sealed in tamper-evident assay cards, each with a unique serial number for verification.",
      tr: "Daha küçük külçeler, doğrulama için benzersiz bir seri numarasına sahip, kurcalamaya karşı korumalı sertifika kartlarında mühürlenir.",
      sk: "Menšie tehličky sú zapečatené v neporušiteľných certifikačných kartách, každá s unikátnym sériovým číslom na overenie.",
      cs: "Menší cihličky jsou zapečetěné v neporušitelných certifikačních kartách, každá s unikátním sériovým číslem k ověření.",
      hu: "A kisebb rudakat manipulációbiztos tanúsítványkártyákba zárják, mindegyiken egyedi sorozatszámmal az ellenőrzéshez.",
      pl: "Mniejsze sztabki są zapieczętowane w odpornych na manipulacje kartach probierczych, każda z unikalnym numerem seryjnym umożliwiającym weryfikację.",
    },
    image: "/images/investment-gold/certified.png",
    imageWidth: 758,
    imageHeight: 205,
    imageAlt:
      "Small gold bars sealed in tamper-evident assay cards, with raw gold nuggets",
  },
  {
    title: {
      de: "Sichere Präsentation",
      en: "Secure Presentation",
      tr: "Güvenli Sunum",
      sk: "Bezpečná prezentácia",
      cs: "Bezpečná prezentace",
      hu: "Biztonságos bemutatás",
      pl: "Bezpieczna prezentacja",
    },
    description: {
      de: "Größere Barren sind zum Schutz und zur einfachen Aufbewahrung in Kassetten verpackt — bereit für einen Safe, ein Schließfach oder einen privaten Tresor.",
      en: "Larger bars are cased for protection and easy storage — ready for a safe, a deposit box, or a private vault.",
      tr: "Daha büyük külçeler koruma ve kolay saklama için kutulanır — bir kasa, emanet kutusu veya özel kasa için hazırdır.",
      sk: "Väčšie tehličky sú uložené v puzdrách pre ochranu a jednoduché skladovanie — pripravené do trezoru, bezpečnostnej schránky alebo súkromného sejfu.",
      cs: "Větší cihličky jsou uloženy v pouzdrech pro ochranu a snadné skladování — připravené do trezoru, bezpečnostní schránky nebo soukromého sejfu.",
      hu: "A nagyobb rudakat védelem és könnyű tárolás céljából dobozba helyezik — készen állva egy széfbe, letéti fiókba vagy magánpáncélterembe.",
      pl: "Większe sztabki są umieszczane w etui dla ochrony i łatwego przechowywania — gotowe do sejfu, skrytki depozytowej lub prywatnego skarbca.",
    },
    image: "/images/investment-gold/secure.png",
    imageWidth: 758,
    imageHeight: 205,
    imageAlt:
      "Larger gold bars presented in protective cases, from 10oz to 1 kilo",
  },
];

export const SECTION_4_POINTS: {
  title: LocalizedText;
  description: LocalizedText;
}[] = [
  {
    title: {
      de: "Wertspeicher",
      en: "Store of Value",
      tr: "Değer Saklama Aracı",
      sk: "Úschova hodnoty",
      cs: "Úschova hodnoty",
      hu: "Értékmegőrző",
      pl: "Lokata wartości",
    },
    description: {
      de: "Gold hat seine Kaufkraft über Jahrhunderte, Währungen und Krisen hinweg bewahrt — ein Schutz gegen Inflation.",
      en: "Gold has held its purchasing power across centuries, currencies and crises — a hedge against inflation.",
      tr: "Altın, yüzyıllar, para birimleri ve krizler boyunca satın alma gücünü korumuştur — enflasyona karşı bir korunma aracıdır.",
      sk: "Zlato si udržalo svoju kúpnu silu naprieč storočiami, menami aj krízami — je ochranou proti inflácii.",
      cs: "Zlato si udrželo svou kupní sílu napříč staletími, měnami i krizemi — je ochranou proti inflaci.",
      hu: "Az arany évszázadokon, valutákon és válságokon át megőrizte vásárlóerejét — védelmet nyújt az infláció ellen.",
      pl: "Złoto zachowało swoją siłę nabywczą przez wieki, zmiany walut i kryzysy — stanowi zabezpieczenie przed inflacją.",
    },
  },
  {
    title: {
      de: "Tragbar & liquide",
      en: "Portable & Liquid",
      tr: "Taşınabilir ve Likit",
      sk: "Prenosné a likvidné",
      cs: "Přenosné a likvidní",
      hu: "Hordozható és likvid",
      pl: "Przenośne i płynne",
    },
    description: {
      de: "Kompakt, leicht zu lagern und fast überall handelbar — eines der liquidesten physischen Vermögenswerte überhaupt.",
      en: "Compact, easy to store, and tradeable almost anywhere — one of the most liquid physical assets there is.",
      tr: "Kompakttır, saklaması kolaydır ve hemen her yerde alınıp satılabilir — var olan en likit fiziksel varlıklardan biridir.",
      sk: "Kompaktné, ľahko skladovateľné a obchodovateľné takmer kdekoľvek — jedno z najlikvidnejších fyzických aktív vôbec.",
      cs: "Kompaktní, snadno skladovatelné a obchodovatelné téměř kdekoli — jedno z nejlikvidnějších fyzických aktiv vůbec.",
      hu: "Kompakt, könnyen tárolható és szinte bárhol kereskedhető — az egyik legfolyékonyabb fizikai eszköz, amely létezik.",
      pl: "Kompaktowe, łatwe w przechowywaniu i zbywalne niemal wszędzie — jeden z najbardziej płynnych aktywów fizycznych.",
    },
  },
  {
    title: {
      de: "Weltweit anerkannt",
      en: "Globally Recognised",
      tr: "Küresel Olarak Tanınır",
      sk: "Celosvetovo uznávané",
      cs: "Celosvětově uznávané",
      hu: "Világszerte elismert",
      pl: "Uznawane na całym świecie",
    },
    description: {
      de: "Auf jedem wichtigen Markt gleich akzeptiert und bewertet, mit Preisen, die durch einen transparenten globalen Spotpreis festgelegt werden.",
      en: "Accepted and valued the same way in every major market, with pricing set by a transparent global spot price.",
      tr: "Her büyük piyasada aynı şekilde kabul edilir ve değerlendirilir; fiyatlandırma şeffaf küresel spot fiyatla belirlenir.",
      sk: "Na každom väčšom trhu je akceptované a hodnotené rovnako, s cenou stanovenou podľa transparentnej globálnej spotovej ceny.",
      cs: "Na každém větším trhu je akceptované a hodnocené stejně, s cenou stanovenou podle transparentní globální spotové ceny.",
      hu: "Minden jelentős piacon ugyanúgy elfogadott és értékelt, az árát pedig egy átlátható globális azonnali (spot) ár határozza meg.",
      pl: "Akceptowane i wyceniane tak samo na każdym większym rynku, z ceną ustalaną na podstawie przejrzystej globalnej ceny spot.",
    },
  },
  {
    title: {
      de: "Diversifikation",
      en: "Diversification",
      tr: "Çeşitlendirme",
      sk: "Diverzifikácia",
      cs: "Diverzifikace",
      hu: "Diverzifikáció",
      pl: "Dywersyfikacja",
    },
    description: {
      de: "Ein greifbarer Vermögenswert, der sich unabhängig von Aktien und Anleihen bewegt — ein Ausgleich für ein breiteres Portfolio.",
      en: "A tangible asset that moves independently of stocks and bonds — balance for a wider portfolio.",
      tr: "Hisse senetleri ve tahvillerden bağımsız hareket eden somut bir varlık — daha geniş bir portföy için denge sağlar.",
      sk: "Hmatateľné aktívum, ktoré sa pohybuje nezávisle od akcií a dlhopisov — vyváženie pre širšie portfólio.",
      cs: "Hmatatelné aktivum, které se pohybuje nezávisle na akciích a dluhopisech — vyvážení pro širší portfolio.",
      hu: "Kézzelfogható eszköz, amely a részvényektől és kötvényektől függetlenül mozog — egyensúlyt teremt egy szélesebb portfólióban.",
      pl: "Namacalny aktyw, który porusza się niezależnie od akcji i obligacji — równowaga dla szerszego portfela inwestycyjnego.",
    },
  },
];

export const SUMMARY_POINTS: LocalizedText[] = [
  {
    de: "999,9 Feingold, zertifiziert und überprüfbar",
    en: "999.9 fine gold, certified and verifiable",
    tr: "999.9 saf altın, sertifikalı ve doğrulanabilir",
    sk: "Rýdze zlato 999,9, certifikované a overiteľné",
    cs: "Ryzí zlato 999,9, certifikované a ověřitelné",
    hu: "999,9 finomságú arany, tanúsítva és ellenőrizhetően",
    pl: "Złoto próby 999,9, certyfikowane i weryfikowalne",
  },
  {
    de: "Von 1 Gramm bis zum vollen Kilo",
    en: "From 1 gram to a full kilo",
    tr: "1 gramdan tam kiloya kadar",
    sk: "Od 1 gramu až po celé kilo",
    cs: "Od 1 gramu až po celé kilo",
    hu: "1 gramtól a teljes kilóig",
    pl: "Od 1 grama do pełnego kilograma",
  },
  {
    de: "Barren und staatliche Münzen von führenden Prägestätten",
    en: "Bars and sovereign coins, from leading mints",
    tr: "Önde gelen darphanelerden külçeler ve resmi sikkeler",
    sk: "Tehličky a štátne mince od popredných mincovní",
    cs: "Cihličky a státní mince od předních mincoven",
    hu: "Rudak és állami érmék a vezető pénzverdéktől",
    pl: "Sztabki i monety oficjalne z czołowych mennic",
  },
  {
    de: "Versiegelte, manipulationssichere Verpackung",
    en: "Sealed, tamper-evident packaging",
    tr: "Mühürlü, kurcalamaya karşı korumalı ambalaj",
    sk: "Zapečatené, neporušiteľné balenie",
    cs: "Zapečetěné, neporušitelné balení",
    hu: "Lezárt, manipulációbiztos csomagolás",
    pl: "Zaplombowane, odporne na manipulacje opakowanie",
  },
  {
    de: "Ein greifbarer, weltweit liquider Wertspeicher",
    en: "A tangible, globally liquid store of value",
    tr: "Somut, küresel olarak likit bir değer saklama aracı",
    sk: "Hmatateľná úschova hodnoty, likvidná na celom svete",
    cs: "Hmatatelná úschova hodnoty, likvidní po celém světě",
    hu: "Kézzelfogható, globálisan likvid értékmegőrző",
    pl: "Namacalna, płynna na całym świecie lokata wartości",
  },
];