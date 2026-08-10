import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

export type ValuePoint = {
  title: LocalizedText;
  description: LocalizedText;
  /**
   * Supporting infographic image.
   * Some graphics contain English text directly inside the image,
   * so the baked-in graphic text does not currently change with locale.
   */
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
    ru: "Инвестиционные бриллианты",
    nl: "Beleggingsdiamanten",
    da: "Investeringsdiamanter",
    fi: "Sijoitustimantit",
    sv: "Investeringsdiamanter",
    fr: "Diamants d’investissement",
    it: "Diamanti da investimento",
    es: "Diamantes de inversión",
  },

  heroTitle: {
    de: "Wie sich der Wert eines Diamanten bestimmt",
    en: "How a Diamond's Value Is Determined",
    tr: "Bir Pırlantanın Değeri Nasıl Belirlenir",
    sk: "Ako sa určuje hodnota diamantu",
    cs: "Jak se určuje hodnota diamantu",
    hu: "Hogyan határozzák meg egy gyémánt értékét",
    pl: "Jak określa się wartość diamentu",
    ru: "Как определяется стоимость бриллианта",
    nl: "Hoe de waarde van een diamant wordt bepaald",
    da: "Hvordan værdien af en diamant bestemmes",
    fi: "Miten timantin arvo määräytyy",
    sv: "Hur värdet på en diamant bestäms",
    fr: "Comment se détermine la valeur d’un diamant",
    it: "Come viene determinato il valore di un diamante",
    es: "Cómo se determina el valor de un diamante",
  },

  heroLead: {
    de: "Der Wert eines Diamanten ergibt sich aus den vier C und mehreren weiteren Faktoren. Jeder Stein, den wir anbieten, ist unabhängig zertifiziert — als Schmuckstück getragen oder lose als private, portable Wertanlage gehalten.",
    en: "A diamond's value is shaped by the Four Cs plus several additional factors. Every stone we offer is independently certified — worn as jewellery, or held loose as a private, portable store of value.",
    tr: "Bir pırlantanın değeri Dört C ve birkaç ek faktörle belirlenir. Sunduğumuz her taş bağımsız olarak sertifikalandırılmıştır — takı olarak takılabilir ya da özel, taşınabilir bir değer saklama aracı olarak tutulabilir.",
    sk: "Hodnota diamantu je daná kombináciou 4C a niekoľkých ďalších faktorov. Každý kameň, ktorý ponúkame, je nezávisle certifikovaný — nosený ako šperk, alebo držaný voľne ako súkromná, prenosná úschova hodnoty.",
    cs: "Hodnota diamantu je daná kombinací 4C a několika dalších faktorů. Každý kámen, který nabízíme, je nezávisle certifikovaný — nošený jako šperk, nebo držený volně jako soukromá, přenosná úschova hodnoty.",
    hu: "Egy gyémánt értékét a Négy C és több további tényező alakítja. Minden általunk kínált kő független tanúsítvánnyal rendelkezik — ékszerként viselhető, vagy foglalatlanul, magánjellegű, hordozható értékmegőrzőként tartható.",
    pl: "Wartość diamentu wyznaczają Cztery C oraz kilka dodatkowych czynników. Każdy oferowany przez nas kamień posiada niezależny certyfikat — noszony jako biżuteria lub przechowywany luzem jako prywatna, przenośna forma lokaty wartości.",
    ru: "Стоимость бриллианта определяется сочетанием четырёх C и ряда дополнительных факторов. Каждый предлагаемый нами камень имеет независимый сертификат — его можно носить в украшении или хранить отдельно как компактный материальный актив.",
    nl: "De waarde van een diamant wordt bepaald door de vier C’s en verschillende aanvullende factoren. Elke steen die wij aanbieden is onafhankelijk gecertificeerd — om als sieraad te dragen of los te bewaren als compact tastbaar bezit.",
    da: "Værdien af en diamant formes af de fire C'er samt flere yderligere faktorer. Hver sten, vi tilbyder, er uafhængigt certificeret — enten til brug i smykker eller som en kompakt fysisk værdigenstand.",
    fi: "Timantin arvo muodostuu neljästä C:stä ja useista muista tekijöistä. Jokainen tarjoamamme kivi on riippumattomasti sertifioitu — sitä voidaan käyttää koruna tai säilyttää irrallisena kompaktina fyysisenä omaisuutena.",
    sv: "Värdet på en diamant formas av de fyra C:na samt flera ytterligare faktorer. Varje sten vi erbjuder är oberoende certifierad — för att bäras som smycke eller förvaras lös som en kompakt fysisk tillgång.",
    fr: "La valeur d’un diamant dépend des quatre C ainsi que de plusieurs facteurs supplémentaires. Chaque pierre que nous proposons est certifiée de manière indépendante — elle peut être portée en bijou ou conservée séparément comme actif physique compact.",
    it: "Il valore di un diamante dipende dalle quattro C e da diversi fattori aggiuntivi. Ogni pietra che offriamo è certificata in modo indipendente — può essere indossata come gioiello oppure conservata sfusa come bene fisico compatto.",
    es: "El valor de un diamante depende de las cuatro C y de varios factores adicionales. Cada piedra que ofrecemos está certificada de forma independiente — puede llevarse como joya o conservarse suelta como activo físico compacto.",
  },

  fourCsEyebrow: {
    de: "Die vier C",
    en: "The Four Cs",
    tr: "Dört C",
    sk: "4C",
    cs: "4C",
    hu: "A négy C",
    pl: "Cztery C",
    ru: "Четыре C",
    nl: "De vier C’s",
    da: "De fire C'er",
    fi: "Neljä C:tä",
    sv: "De fyra C:na",
    fr: "Les quatre C",
    it: "Le quattro C",
    es: "Las cuatro C",
  },

  fourCsTitle: {
    de: "Die grundlegenden Kriterien zur Bewertung eines Diamanten",
    en: "The Basic Criteria for Valuing a Diamond",
    tr: "Bir Pırlantayı Değerlendirmenin Temel Kriterleri",
    sk: "Základné kritériá hodnotenia diamantu",
    cs: "Základní kritéria hodnocení diamantu",
    hu: "A gyémánt értékelésének alapkritériumai",
    pl: "Podstawowe kryteria oceny diamentu",
    ru: "Основные критерии оценки бриллианта",
    nl: "De belangrijkste criteria voor het beoordelen van een diamant",
    da: "De grundlæggende kriterier for vurdering af en diamant",
    fi: "Timantin arvioinnin tärkeimmät kriteerit",
    sv: "De grundläggande kriterierna för värdering av en diamant",
    fr: "Les critères essentiels d’évaluation d’un diamant",
    it: "I criteri fondamentali per valutare un diamante",
    es: "Los criterios fundamentales para valorar un diamante",
  },

  beyondEyebrow: {
    de: "Über die vier C hinaus",
    en: "Beyond the Four Cs",
    tr: "Dört C'nin Ötesinde",
    sk: "Ďalšie faktory",
    cs: "Další faktory",
    hu: "A négy C-n túl",
    pl: "Poza czterema C",
    ru: "Помимо четырёх C",
    nl: "Meer dan de vier C’s",
    da: "Ud over de fire C'er",
    fi: "Neljän C:n lisäksi",
    sv: "Utöver de fyra C:na",
    fr: "Au-delà des quatre C",
    it: "Oltre le quattro C",
    es: "Más allá de las cuatro C",
  },

  beyondTitle: {
    de: "Weitere Faktoren, die den Wert beeinflussen",
    en: "Additional Factors That Influence Value",
    tr: "Değeri Etkileyen Ek Faktörler",
    sk: "Ďalšie faktory ovplyvňujúce hodnotu diamantu",
    cs: "Další faktory ovlivňující hodnotu diamantu",
    hu: "A gyémánt értékét befolyásoló további tényezők",
    pl: "Dodatkowe czynniki wpływające na wartość",
    ru: "Дополнительные факторы, влияющие на стоимость",
    nl: "Aanvullende factoren die de waarde beïnvloeden",
    da: "Yderligere faktorer, der påvirker værdien",
    fi: "Muut arvoon vaikuttavat tekijät",
    sv: "Ytterligare faktorer som påverkar värdet",
    fr: "Les autres facteurs qui influencent la valeur",
    it: "Ulteriori fattori che influenzano il valore",
    es: "Otros factores que influyen en el valor",
  },

  principlesEyebrow: {
    de: "Investitionsprinzipien",
    en: "Investment Principles",
    tr: "Yatırım İlkeleri",
    sk: "Investičné princípy",
    cs: "Investiční principy",
    hu: "Befektetési alapelvek",
    pl: "Zasady inwestowania",
    ru: "Принципы выбора",
    nl: "Beleggingsprincipes",
    da: "Investeringsprincipper",
    fi: "Sijoitusperiaatteet",
    sv: "Investeringsprinciper",
    fr: "Principes d’investissement",
    it: "Principi di investimento",
    es: "Principios de inversión",
  },

  principlesTitle: {
    de: "Worauf es bei Investmentdiamanten ankommt",
    en: "What Matters Most for Investment Diamonds",
    tr: "Yatırımlık Pırlantalarda En Önemli Nokta",
    sk: "Čo je dôležité pri investičných diamantoch",
    cs: "Co je důležité u investičních diamantů",
    hu: "Mi számít a legtöbbet a befektetési gyémántoknál",
    pl: "Co jest najważniejsze w diamentach inwestycyjnych",
    ru: "На что обращать внимание при выборе инвестиционных бриллиантов",
    nl: "Waar u op let bij beleggingsdiamanten",
    da: "Hvad der er vigtigt ved investeringsdiamanter",
    fi: "Mikä on tärkeää sijoitustimanteissa",
    sv: "Vad som är viktigt för investeringsdiamanter",
    fr: "Les critères essentiels pour les diamants d’investissement",
    it: "Gli aspetti più importanti nei diamanti da investimento",
    es: "Qué importa al elegir diamantes de inversión",
  },

  ctaTitle: {
    de: "Sprechen Sie mit uns über Investmentdiamanten",
    en: "Speak With Us About Investment Diamonds",
    tr: "Yatırımlık Pırlantalar Hakkında Bizimle Konuşun",
    sk: "Porozprávajte sa s nami o investičných diamantoch",
    cs: "Promluvte si s námi o investičních diamantech",
    hu: "Beszéljen velünk a befektetési gyémántokról",
    pl: "Porozmawiaj z nami o diamentach inwestycyjnych",
    ru: "Поговорите с нами об инвестиционных бриллиантах",
    nl: "Praat met ons over beleggingsdiamanten",
    da: "Tal med os om investeringsdiamanter",
    fi: "Keskustele kanssamme sijoitustimanteista",
    sv: "Prata med oss om investeringsdiamanter",
    fr: "Parlez-nous des diamants d’investissement",
    it: "Parlate con noi dei diamanti da investimento",
    es: "Hable con nosotros sobre diamantes de inversión",
  },

  ctaSub: {
    de: "Jeder Stein, den wir anbieten, ist unabhängig zertifiziert. Vereinbaren Sie einen privaten Termin, um aktuelle Verfügbarkeit, Zertifizierung und Preise zu besprechen.",
    en: "Every stone we offer is independently certified. Book a private appointment to discuss current availability, certification and pricing.",
    tr: "Sunduğumuz her taş bağımsız olarak sertifikalandırılmıştır. Mevcut stok, sertifikasyon ve fiyatlandırmayı görüşmek için özel bir randevu alın.",
    sk: "Každý kameň, ktorý ponúkame, je nezávisle certifikovaný. Dohodnite si súkromné stretnutie, kde prebereme aktuálnu dostupnosť, certifikáciu a cenu.",
    cs: "Každý kámen, který nabízíme, je nezávisle certifikovaný. Domluvte si soukromou schůzku, kde probereme aktuální dostupnost, certifikaci a cenu.",
    hu: "Minden általunk kínált kő független tanúsítvánnyal rendelkezik. Foglaljon privát időpontot az aktuális elérhetőség, tanúsítás és árazás megbeszéléséhez.",
    pl: "Każdy oferowany przez nas kamień posiada niezależny certyfikat. Umów się na prywatne spotkanie, aby omówić dostępność, certyfikację i cenę.",
    ru: "Каждый предлагаемый нами камень имеет независимый сертификат. Запишитесь на индивидуальную встречу, чтобы обсудить актуальное наличие, сертификацию и цены.",
    nl: "Elke steen die wij aanbieden is onafhankelijk gecertificeerd. Maak een privéafspraak om de actuele beschikbaarheid, certificering en prijzen te bespreken.",
    da: "Hver sten, vi tilbyder, er uafhængigt certificeret. Book en privat aftale for at drøfte aktuel tilgængelighed, certificering og priser.",
    fi: "Jokainen tarjoamamme kivi on riippumattomasti sertifioitu. Varaa yksityinen tapaaminen keskustellaksesi saatavuudesta, sertifioinnista ja hinnoittelusta.",
    sv: "Varje sten vi erbjuder är oberoende certifierad. Boka ett privat möte för att diskutera aktuell tillgänglighet, certifiering och priser.",
    fr: "Chaque pierre que nous proposons est certifiée de manière indépendante. Prenez rendez-vous en privé pour discuter des disponibilités, des certificats et des prix.",
    it: "Ogni pietra che offriamo è certificata in modo indipendente. Prenotate un appuntamento privato per discutere disponibilità, certificazione e prezzi.",
    es: "Cada piedra que ofrecemos está certificada de forma independiente. Reserve una cita privada para hablar sobre disponibilidad, certificación y precios.",
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
      ru: "Карат (вес)",
      nl: "Karaat (gewicht)",
      da: "Carat (vægt)",
      fi: "Karaatti (paino)",
      sv: "Carat (vikt)",
      fr: "Carat (poids)",
      it: "Carato (peso)",
      es: "Quilate (peso)",
    },

    description: {
      de: "Das Gewicht ist der wichtigste Preisfaktor. Mit steigendem Gewicht steigt der Preis exponentiell, nicht linear.",
      en: "Weight is one of the most significant factors affecting price. As carat weight increases, price per carat often rises as well because larger diamonds are rarer.",
      tr: "Ağırlık, fiyatı etkileyen en önemli faktörlerden biridir. Karat ağırlığı arttıkça, büyük pırlantaların daha nadir olması nedeniyle karat başına fiyat da genellikle yükselir.",
      sk: "Váha patrí medzi najvýznamnejšie faktory ovplyvňujúce cenu. S rastúcou karátovou váhou zvyčajne rastie aj cena za karát, pretože väčšie diamanty sú vzácnejšie.",
      cs: "Váha patří mezi nejvýznamnější faktory ovlivňující cenu. S rostoucí karátovou váhou obvykle roste i cena za karát, protože větší diamanty jsou vzácnější.",
      hu: "A súly az árat befolyásoló egyik legfontosabb tényező. A karátsúly növekedésével általában a karátonkénti ár is emelkedik, mivel a nagyobb gyémántok ritkábbak.",
      pl: "Waga należy do najważniejszych czynników wpływających na cenę. Wraz ze wzrostem masy w karatach często rośnie również cena za karat, ponieważ większe diamenty są rzadsze.",
      ru: "Вес — один из важнейших факторов цены. По мере увеличения массы в каратах цена за карат также часто растёт, поскольку более крупные бриллианты встречаются реже.",
      nl: "Gewicht is een van de belangrijkste factoren die de prijs beïnvloeden. Naarmate het karaatgewicht stijgt, neemt vaak ook de prijs per karaat toe, omdat grotere diamanten zeldzamer zijn.",
      da: "Vægt er en af de vigtigste faktorer for prisen. Når caratvægten stiger, stiger prisen pr. carat ofte også, fordi større diamanter er sjældnere.",
      fi: "Paino on yksi hinnan merkittävimmistä tekijöistä. Karaattipainon kasvaessa myös karaattikohtainen hinta usein nousee, koska suuremmat timantit ovat harvinaisempia.",
      sv: "Vikt är en av de viktigaste faktorerna som påverkar priset. När caratvikten ökar stiger ofta även priset per carat eftersom större diamanter är mer sällsynta.",
      fr: "Le poids est l’un des principaux facteurs influençant le prix. Lorsque le nombre de carats augmente, le prix par carat tend également à progresser, les diamants plus gros étant plus rares.",
      it: "Il peso è uno dei fattori più importanti che influenzano il prezzo. All’aumentare dei carati, spesso aumenta anche il prezzo per carato, poiché i diamanti più grandi sono più rari.",
      es: "El peso es uno de los factores más importantes que influyen en el precio. A medida que aumenta el peso en quilates, también suele aumentar el precio por quilate, ya que los diamantes grandes son más escasos.",
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
      ru: "Цвет",
      nl: "Kleur",
      da: "Farve",
      fi: "Väri",
      sv: "Färg",
      fr: "Couleur",
      it: "Colore",
      es: "Color",
    },

    description: {
      de: "Fehlende Farbe bedeutet höheren Wert. Diamanten der Stufen D–F sind farblos und am begehrtesten; jede Stufe darunter zeigt einen sichtbaren Farbstich.",
      en: "For diamonds in the normal D–Z colour range, less visible colour generally means a higher grade. D–F diamonds are classified as colourless.",
      tr: "D–Z normal renk aralığındaki pırlantalarda, daha az görünür renk genellikle daha yüksek derece anlamına gelir. D–F pırlantalar renksiz olarak sınıflandırılır.",
      sk: "Pri diamantoch v bežnej farebnej škále D–Z znamená menej viditeľného sfarbenia spravidla vyššie hodnotenie. Diamanty D–F sa klasifikujú ako bezfarebné.",
      cs: "U diamantů v běžné barevné škále D–Z znamená méně viditelného zabarvení zpravidla vyšší hodnocení. Diamanty D–F jsou klasifikovány jako bezbarvé.",
      hu: "A normál D–Z színskálán a kevésbé látható szín általában magasabb besorolást jelent. A D–F gyémántokat színtelen kategóriába sorolják.",
      pl: "W standardowej skali barwy D–Z mniejsza widoczność koloru oznacza zwykle wyższą ocenę. Diamenty D–F są klasyfikowane jako bezbarwne.",
      ru: "Для бриллиантов стандартной цветовой шкалы D–Z менее заметный оттенок обычно соответствует более высокой оценке. Камни D–F классифицируются как бесцветные.",
      nl: "Binnen de normale D–Z-kleurschaal betekent minder zichtbare kleur doorgaans een hogere beoordeling. Diamanten met graad D–F worden als kleurloos geclassificeerd.",
      da: "På den normale D–Z-farveskala betyder mindre synlig farve som regel en højere vurdering. Diamanter i D–F klassificeres som farveløse.",
      fi: "Tavallisella D–Z-väriasteikolla vähäisempi näkyvä sävy tarkoittaa yleensä korkeampaa luokitusta. D–F-timantit luokitellaan värittömiksi.",
      sv: "På den normala D–Z-färgskalan innebär mindre synlig färg normalt en högre gradering. Diamanter i D–F klassificeras som färglösa.",
      fr: "Dans l’échelle de couleur classique D–Z, moins la couleur est perceptible, plus la note est généralement élevée. Les diamants D–F sont classés comme incolores.",
      it: "Nella normale scala colore D–Z, una minore presenza di colore visibile corrisponde generalmente a una valutazione più alta. I diamanti D–F sono classificati come incolori.",
      es: "En la escala de color estándar D–Z, una menor presencia de color visible suele corresponder a una clasificación superior. Los diamantes D–F se consideran incoloros.",
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
      ru: "Чистота",
      nl: "Zuiverheid",
      da: "Klarhed",
      fi: "Puhtaus",
      sv: "Klarhet",
      fr: "Pureté",
      it: "Purezza",
      es: "Pureza",
    },

    description: {
      de: "Die Menge und Größe innerer und äußerer Merkmale. Je weniger Einschlüsse, desto seltener und wertvoller; die Reinheit wird bei 10-facher Vergrößerung bewertet.",
      en: "Clarity evaluates internal inclusions and surface characteristics. Grading is performed under 10x magnification, with fewer and less noticeable characteristics receiving higher grades.",
      tr: "Berraklık, iç inklüzyonları ve yüzey özelliklerini değerlendirir. Derecelendirme 10x büyütme altında yapılır; daha az ve daha az fark edilen özellikler daha yüksek derece alır.",
      sk: "Čistota hodnotí vnútorné inklúzie a povrchové znaky diamantu. Posudzuje sa pri 10-násobnom zväčšení; menej výrazné znaky znamenajú vyššie hodnotenie.",
      cs: "Čistota hodnotí vnitřní inkluze a povrchové znaky diamantu. Posuzuje se při 10násobném zvětšení; méně výrazné znaky znamenají vyšší hodnocení.",
      hu: "A tisztaság a belső zárványokat és a felületi jellemzőket értékeli. A besorolás 10-szeres nagyítás alatt történik; a kevesebb és kevésbé észrevehető jellemző magasabb minősítést eredményez.",
      pl: "Czystość ocenia wewnętrzne inkluzje oraz cechy powierzchni. Klasyfikację przeprowadza się przy 10-krotnym powiększeniu; mniej widoczne cechy oznaczają wyższą ocenę.",
      ru: "Чистота учитывает внутренние включения и характеристики поверхности. Оценка проводится при 10-кратном увеличении; чем меньше и менее заметны особенности, тем выше категория чистоты.",
      nl: "Zuiverheid beoordeelt interne insluitsels en kenmerken aan het oppervlak. De beoordeling gebeurt onder 10x vergroting; minder en minder opvallende kenmerken krijgen een hogere graad.",
      da: "Klarhed vurderer interne indeslutninger og overfladekendetegn. Graderingen foretages ved 10x forstørrelse; færre og mindre synlige kendetegn giver en højere grad.",
      fi: "Puhtausarvioinnissa tarkastellaan sisäisiä sulkeumia ja pinnan ominaisuuksia. Luokittelu tehdään 10-kertaisella suurennuksella; vähäisemmät ja huomaamattomammat ominaisuudet saavat korkeamman luokituksen.",
      sv: "Klarhet bedömer inre inneslutningar och ytegenskaper. Graderingen görs vid 10x förstoring; färre och mindre framträdande egenskaper ger en högre grad.",
      fr: "La pureté évalue les inclusions internes et les caractéristiques de surface. Elle est notée sous un grossissement de 10x ; moins les caractéristiques sont nombreuses et visibles, plus la note est élevée.",
      it: "La purezza valuta le inclusioni interne e le caratteristiche superficiali. La classificazione avviene con ingrandimento 10x; un numero minore di caratteristiche, e meno visibili, corrisponde a una valutazione più alta.",
      es: "La pureza evalúa las inclusiones internas y las características de la superficie. La graduación se realiza con aumento de 10x; cuanto menos numerosas y visibles sean, mayor será la clasificación.",
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
      ru: "Огранка",
      nl: "Slijpvorm",
      da: "Slibning",
      fi: "Hionta",
      sv: "Slipning",
      fr: "Taille",
      it: "Taglio",
      es: "Talla",
    },

    description: {
      de: "Die Qualität des Schliffs bestimmt Brillanz und Feuer. Es ist das einzige C, das vollständig von Menschenhand geformt wird — ein idealer Schliff maximiert Lichtreflexion und Funkeln.",
      en: "Cut quality strongly influences a diamond's brightness, fire and scintillation. Unlike the other Cs, it is shaped by human craftsmanship.",
      tr: "Kesim kalitesi pırlantanın parlaklığını, ateşini ve ışıltısını güçlü biçimde etkiler. Diğer C'lerin aksine, insan işçiliğiyle şekillenir.",
      sk: "Kvalita brusu výrazne ovplyvňuje brilanciu, oheň a scintiláciu diamantu. Na rozdiel od ostatných C ju formuje ľudská remeselnosť.",
      cs: "Kvalita brusu výrazně ovlivňuje brilanci, oheň a scintilaci diamantu. Na rozdíl od ostatních C ji formuje lidské řemeslo.",
      hu: "A csiszolás minősége jelentősen befolyásolja a gyémánt ragyogását, tüzét és scintillációját. A többi C-vel ellentétben emberi mesterség formálja.",
      pl: "Jakość szlifu silnie wpływa na blask, ogień i scintylację diamentu. W przeciwieństwie do pozostałych C jest kształtowana przez kunszt człowieka.",
      ru: "Качество огранки существенно влияет на яркость, игру света и блеск бриллианта. В отличие от других C, этот параметр формируется мастерством человека.",
      nl: "De kwaliteit van de slijping heeft grote invloed op helderheid, vuur en schittering. In tegenstelling tot de andere C’s wordt dit aspect door menselijk vakmanschap gevormd.",
      da: "Slibningens kvalitet har stor betydning for diamantens lysstyrke, ild og glimt. I modsætning til de øvrige C'er formes dette af menneskeligt håndværk.",
      fi: "Hionnan laatu vaikuttaa voimakkaasti timantin kirkkauteen, tuleen ja säihkeeseen. Toisin kuin muut C:t, sen muotoilee ihmisen käsityötaito.",
      sv: "Slipningens kvalitet påverkar diamantens ljusstyrka, eld och scintillation i hög grad. Till skillnad från de övriga C:na formas den av mänskligt hantverk.",
      fr: "La qualité de la taille influence fortement l’éclat, le feu et la scintillation du diamant. Contrairement aux autres C, elle dépend directement du savoir-faire humain.",
      it: "La qualità del taglio influenza fortemente luminosità, fuoco e scintillazione del diamante. A differenza delle altre C, dipende direttamente dall’abilità umana.",
      es: "La calidad de la talla influye notablemente en el brillo, el fuego y la centelleante apariencia del diamante. A diferencia de las otras C, depende directamente de la habilidad humana.",
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
      ru: "Флуоресценция",
      nl: "Fluorescentie",
      da: "Fluorescens",
      fi: "Fluoresenssi",
      sv: "Fluorescens",
      fr: "Fluorescence",
      it: "Fluorescenza",
      es: "Fluorescencia",
    },

    description: {
      de: "Manche Diamanten leuchten unter UV-Licht blau. Geringe bis keine Fluoreszenz ist in der Regel am begehrtesten.",
      en: "Some diamonds fluoresce under ultraviolet light, often appearing blue. Its effect on appearance and price depends on the individual stone, colour grade and fluorescence strength.",
      tr: "Bazı pırlantalar ultraviyole ışık altında, çoğunlukla mavi renkte floresans gösterir. Görünüm ve fiyat üzerindeki etkisi taşın kendisine, renk derecesine ve floresans gücüne bağlıdır.",
      sk: "Niektoré diamanty fluoreskujú pod UV svetlom, často modrou farbou. Vplyv na vzhľad a cenu závisí od konkrétneho kameňa, farby a intenzity fluorescencie.",
      cs: "Některé diamanty fluoreskují pod UV světlem, často modře. Vliv na vzhled a cenu závisí na konkrétním kameni, barevném stupni a intenzitě fluorescence.",
      hu: "Egyes gyémántok ultraibolya fényben fluoreszkálnak, gyakran kéken. A megjelenésre és az árra gyakorolt hatás az adott kőtől, színfokozattól és az intenzitástól függ.",
      pl: "Niektóre diamenty wykazują fluorescencję pod światłem UV, często niebieską. Jej wpływ na wygląd i cenę zależy od konkretnego kamienia, barwy i intensywności fluorescencji.",
      ru: "Некоторые бриллианты флуоресцируют под ультрафиолетовым светом, часто голубым. Влияние на внешний вид и цену зависит от конкретного камня, его цветовой категории и интенсивности флуоресценции.",
      nl: "Sommige diamanten fluoresceren onder ultraviolet licht, vaak blauw. Het effect op uiterlijk en prijs hangt af van de individuele steen, kleurklasse en intensiteit.",
      da: "Nogle diamanter fluorescerer under ultraviolet lys, ofte blåligt. Effekten på udseende og pris afhænger af den enkelte sten, farvegrad og fluorescensens styrke.",
      fi: "Jotkin timantit fluoresoivat ultraviolettivalossa, usein sinertävinä. Vaikutus ulkonäköön ja hintaan riippuu yksittäisestä kivestä, väriluokasta ja fluoresenssin voimakkuudesta.",
      sv: "Vissa diamanter fluorescerar under ultraviolett ljus, ofta blått. Effekten på utseende och pris beror på den enskilda stenen, färggraden och fluorescensens styrka.",
      fr: "Certains diamants présentent une fluorescence sous lumière ultraviolette, souvent bleue. Son effet sur l’apparence et le prix dépend de la pierre, de sa couleur et de l’intensité de la fluorescence.",
      it: "Alcuni diamanti mostrano fluorescenza sotto luce ultravioletta, spesso blu. L’effetto sull’aspetto e sul prezzo dipende dalla singola pietra, dal grado di colore e dall’intensità della fluorescenza.",
      es: "Algunos diamantes presentan fluorescencia bajo luz ultravioleta, a menudo azul. Su efecto sobre el aspecto y el precio depende de cada piedra, del grado de color y de la intensidad de la fluorescencia.",
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
      ru: "Форма (фантазийная огранка)",
      nl: "Vorm (Fancy Cuts)",
      da: "Form (Fancy Cuts)",
      fi: "Muoto (Fancy-hionnat)",
      sv: "Form (Fancy Cuts)",
      fr: "Forme (tailles fantaisie)",
      it: "Forma (tagli fancy)",
      es: "Forma (tallas fancy)",
    },

    description: {
      de: "Runde Diamanten sind am wertvollsten. Fancy-Formen können mehr sichtbare Größe fürs Geld bieten, doch die Preisbildung hängt stark von der Nachfrage ab.",
      en: "Round brilliant diamonds generally command strong market demand. Fancy shapes may offer a larger visible spread for the same carat weight, while pricing varies by shape, proportions and demand.",
      tr: "Yuvarlak brilliant pırlantalar genellikle güçlü piyasa talebine sahiptir. Fantezi şekiller aynı karat ağırlığında daha büyük görünebilir; fiyat ise şekle, oranlara ve talebe göre değişir.",
      sk: "Okrúhle brilianty majú spravidla silný trhový dopyt. Fancy tvary môžu pri rovnakej karátovej váhe pôsobiť väčšie, pričom cena závisí od tvaru, proporcií a dopytu.",
      cs: "Kulaté brilianty mají zpravidla silnou tržní poptávku. Fancy tvary mohou při stejné karátové váze působit větší, přičemž cena závisí na tvaru, proporcích a poptávce.",
      hu: "A kerek briliánsok általában erős piaci kereslettel rendelkeznek. A fancy formák ugyanazon karátsúly mellett nagyobbnak tűnhetnek; áruk a formától, arányoktól és kereslettől függ.",
      pl: "Okrągłe brylanty cieszą się zwykle dużym popytem rynkowym. Kształty fancy mogą wyglądać na większe przy tej samej masie w karatach, a ich cena zależy od kształtu, proporcji i popytu.",
      ru: "Круглые бриллианты обычно пользуются устойчивым рыночным спросом. Фантазийные формы могут визуально казаться крупнее при той же массе, а их цена зависит от формы, пропорций и спроса.",
      nl: "Ronde briljanten kennen doorgaans een sterke marktvraag. Fancy vormen kunnen bij hetzelfde karaatgewicht groter ogen, terwijl de prijs varieert op basis van vorm, verhoudingen en vraag.",
      da: "Runde brillanter har generelt en stærk markedsmæssig efterspørgsel. Fancy-former kan se større ud ved samme caratvægt, mens prisen varierer efter form, proportioner og efterspørgsel.",
      fi: "Pyöreillä briljanttihiotuilla timanteilla on yleensä vahva markkinakysyntä. Fancy-muodot voivat näyttää suuremmilta samalla karaattipainolla, ja hinta vaihtelee muodon, mittasuhteiden ja kysynnän mukaan.",
      sv: "Runda briljanter har generellt stark efterfrågan på marknaden. Fancy-former kan se större ut vid samma caratvikt, medan priset varierar beroende på form, proportioner och efterfrågan.",
      fr: "Les brillants ronds bénéficient généralement d’une forte demande. Les formes fantaisie peuvent paraître plus grandes à poids égal, tandis que leur prix dépend de la forme, des proportions et de la demande.",
      it: "I brillanti rotondi godono generalmente di una forte domanda di mercato. Le forme fancy possono apparire più grandi a parità di carati, mentre il prezzo varia in base a forma, proporzioni e domanda.",
      es: "Los brillantes redondos suelen tener una fuerte demanda en el mercado. Las formas fancy pueden parecer mayores con el mismo peso en quilates, mientras que el precio varía según la forma, las proporciones y la demanda.",
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
      ru: "Симметрия и полировка",
      nl: "Symmetrie & polijsting",
      da: "Symmetri & polering",
      fi: "Symmetria & kiillotus",
      sv: "Symmetri & polering",
      fr: "Symétrie & polissage",
      it: "Simmetria & lucidatura",
      es: "Simetría & pulido",
    },

    description: {
      de: "Hohe Symmetrie und feine Politur verbessern den Lichtdurchgang durch den Stein und steigern Brillanz und Wert.",
      en: "Strong symmetry and high-quality polish support a diamond's visual performance and are recorded as separate grading characteristics on many laboratory reports.",
      tr: "Güçlü simetri ve yüksek kaliteli parlatma, pırlantanın görsel performansına katkı sağlar ve birçok laboratuvar raporunda ayrı derecelendirme özellikleri olarak belirtilir.",
      sk: "Dobrá symetria a kvalitné leštenie podporujú optický výkon diamantu a v mnohých laboratórnych certifikátoch sa hodnotia samostatne.",
      cs: "Dobrá symetrie a kvalitní leštění podporují optický výkon diamantu a v mnoha laboratorních certifikátech se hodnotí samostatně.",
      hu: "A jó szimmetria és a magas minőségű polírozás hozzájárul a gyémánt vizuális teljesítményéhez, és számos laboratóriumi jelentésben külön értékelik.",
      pl: "Dobra symetria i wysokiej jakości polerowanie wspierają efekt wizualny diamentu i są osobno oceniane w wielu raportach laboratoryjnych.",
      ru: "Хорошая симметрия и качественная полировка способствуют визуальной игре бриллианта и во многих лабораторных отчётах оцениваются отдельными параметрами.",
      nl: "Goede symmetrie en hoogwaardige polijsting ondersteunen de visuele prestaties van een diamant en worden in veel laboratoriumrapporten afzonderlijk beoordeeld.",
      da: "God symmetri og høj poleringskvalitet understøtter diamantens visuelle egenskaber og vurderes separat i mange laboratorierapporter.",
      fi: "Hyvä symmetria ja laadukas kiillotus tukevat timantin visuaalista suorituskykyä, ja ne arvioidaan erikseen monissa laboratoriotodistuksissa.",
      sv: "God symmetri och högkvalitativ polering bidrar till diamantens visuella prestanda och bedöms separat i många laboratorierapporter.",
      fr: "Une bonne symétrie et un polissage de qualité contribuent aux performances visuelles du diamant et sont évalués séparément dans de nombreux rapports de laboratoire.",
      it: "Una buona simmetria e una lucidatura di qualità contribuiscono alla resa visiva del diamante e sono valutate separatamente in molti rapporti di laboratorio.",
      es: "Una buena simetría y un pulido de calidad contribuyen al rendimiento visual del diamante y se evalúan por separado en muchos informes de laboratorio.",
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
      ru: "Сертификат",
      nl: "Certificaat",
      da: "Certifikat",
      fi: "Sertifikaatti",
      sv: "Certifikat",
      fr: "Certificat",
      it: "Certificato",
      es: "Certificado",
    },

    description: {
      de: "Ein Diamant mit Zertifikat eines anerkannten Labors (GIA, HRD, IGI) genießt höheres Vertrauen und einen stärkeren Wiederverkaufswert.",
      en: "A grading report from a recognised independent laboratory such as GIA, HRD Antwerp or IGI provides independently assessed characteristics that can support verification and comparison.",
      tr: "GIA, HRD Antwerp veya IGI gibi tanınmış bağımsız bir laboratuvarın derecelendirme raporu, doğrulama ve karşılaştırmayı destekleyen bağımsız değerlendirilmiş özellikler sunar.",
      sk: "Posudok od uznávaného nezávislého laboratória, ako GIA, HRD Antwerp alebo IGI, poskytuje nezávisle hodnotené parametre, ktoré pomáhajú pri overení a porovnaní diamantu.",
      cs: "Posudek od uznávané nezávislé laboratoře, jako GIA, HRD Antwerp nebo IGI, poskytuje nezávisle hodnocené parametry, které pomáhají při ověření a porovnání diamantu.",
      hu: "Az elismert független laboratórium, például a GIA, HRD Antwerp vagy IGI minősítési jelentése függetlenül értékelt jellemzőket tartalmaz, amelyek segítik az ellenőrzést és az összehasonlítást.",
      pl: "Raport uznanego niezależnego laboratorium, takiego jak GIA, HRD Antwerp lub IGI, zawiera niezależnie ocenione parametry ułatwiające weryfikację i porównanie diamentu.",
      ru: "Отчёт признанной независимой лаборатории, например GIA, HRD Antwerp или IGI, содержит независимо оценённые характеристики, которые помогают проверять и сравнивать бриллианты.",
      nl: "Een beoordelingsrapport van een erkend onafhankelijk laboratorium zoals GIA, HRD Antwerp of IGI bevat onafhankelijk beoordeelde kenmerken die verificatie en vergelijking ondersteunen.",
      da: "En graderingsrapport fra et anerkendt uafhængigt laboratorium som GIA, HRD Antwerp eller IGI indeholder uafhængigt vurderede egenskaber, der understøtter kontrol og sammenligning.",
      fi: "Tunnetun riippumattoman laboratorion, kuten GIA:n, HRD Antwerpinin tai IGI:n, luokitusraportti sisältää riippumattomasti arvioidut ominaisuudet, jotka helpottavat todentamista ja vertailua.",
      sv: "En graderingsrapport från ett erkänt oberoende laboratorium som GIA, HRD Antwerp eller IGI innehåller oberoende bedömda egenskaper som stödjer verifiering och jämförelse.",
      fr: "Un rapport établi par un laboratoire indépendant reconnu, tel que GIA, HRD Antwerp ou IGI, fournit des caractéristiques évaluées de manière indépendante facilitant la vérification et la comparaison.",
      it: "Un rapporto di classificazione rilasciato da un laboratorio indipendente riconosciuto, come GIA, HRD Antwerp o IGI, fornisce caratteristiche valutate in modo indipendente utili per verifica e confronto.",
      es: "Un informe de clasificación emitido por un laboratorio independiente reconocido, como GIA, HRD Antwerp o IGI, proporciona características evaluadas de forma independiente que facilitan la verificación y comparación.",
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
      ru: "Происхождение",
      nl: "Herkomst",
      da: "Oprindelse",
      fi: "Alkuperä",
      sv: "Ursprung",
      fr: "Origine",
      it: "Provenienza",
      es: "Origen",
    },

    description: {
      de: "Die Herkunft (z. B. Kanada, Botswana, Russland) kann den wahrgenommenen Wert und die Rückverfolgbarkeit beeinflussen, besonders bei größeren, hochwertigen Steinen.",
      en: "Documented provenance can add useful traceability and context to a diamond, especially where origin and sourcing information are important to the buyer.",
      tr: "Belgelenmiş menşei, özellikle köken ve tedarik bilgileri alıcı için önemli olduğunda, pırlantaya faydalı izlenebilirlik ve bağlam sağlayabilir.",
      sk: "Zdokumentovaný pôvod môže diamantu poskytnúť lepšiu sledovateľnosť a kontext, najmä ak je pre kupujúceho dôležitá informácia o pôvode a získavaní kameňa.",
      cs: "Zdokumentovaný původ může diamantu poskytnout lepší dohledatelnost a kontext, zejména pokud je pro kupujícího důležitá informace o původu a získávání kamene.",
      hu: "A dokumentált eredet hasznos nyomon követhetőséget és hátteret adhat a gyémánthoz, különösen akkor, ha a vásárló számára fontos a származás és a beszerzés módja.",
      pl: "Udokumentowane pochodzenie może zapewnić lepszą identyfikowalność i kontekst, szczególnie gdy informacje o źródle kamienia są istotne dla kupującego.",
      ru: "Документированное происхождение может повышать прозрачность и прослеживаемость, особенно когда покупателю важна информация об источнике и цепочке поставок камня.",
      nl: "Gedocumenteerde herkomst kan extra traceerbaarheid en context bieden, vooral wanneer informatie over oorsprong en winning belangrijk is voor de koper.",
      da: "Dokumenteret oprindelse kan give ekstra sporbarhed og kontekst, især når oplysninger om stenens oprindelse og indkøb er vigtige for køberen.",
      fi: "Dokumentoitu alkuperä voi tarjota lisäjäljitettävyyttä ja taustatietoa erityisesti silloin, kun kiven alkuperä ja hankintaketju ovat ostajalle tärkeitä.",
      sv: "Dokumenterat ursprung kan ge extra spårbarhet och sammanhang, särskilt när information om stenens ursprung och anskaffning är viktig för köparen.",
      fr: "Une provenance documentée peut apporter une meilleure traçabilité et davantage de contexte, notamment lorsque l’origine et l’approvisionnement de la pierre sont importants pour l’acheteur.",
      it: "Una provenienza documentata può offrire maggiore tracciabilità e contesto, soprattutto quando origine e approvvigionamento della pietra sono importanti per l’acquirente.",
      es: "Una procedencia documentada puede aportar una mayor trazabilidad y contexto, especialmente cuando el origen y el abastecimiento de la piedra son importantes para el comprador.",
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
      "A diamond's journey from sourcing through cutting, certification and transport to final ownership",
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
      ru: "Высокое качество",
      nl: "Hoge kwaliteit",
      da: "Høj kvalitet",
      fi: "Korkea laatu",
      sv: "Hög kvalitet",
      fr: "Haute qualité",
      it: "Alta qualità",
      es: "Alta calidad",
    },

    description: {
      de: "Achten Sie auf Diamanten mit Farbe D–F, Reinheit IF–VVS1 und Schliffbewertung Excellent.",
      en: "For buyers seeking premium characteristics, D–F colour, IF–VVS clarity ranges and Excellent cut grades are among the specifications commonly considered.",
      tr: "Üst düzey özellikler arayan alıcılar için D–F renk, IF–VVS berraklık aralığı ve Excellent kesim dereceleri sık değerlendirilen özellikler arasındadır.",
      sk: "Pri hľadaní prémiových parametrov patria farba D–F, čistota IF–VVS a brus Excellent medzi často zvažované špecifikácie.",
      cs: "Při hledání prémiových parametrů patří barva D–F, čistota IF–VVS a brus Excellent mezi často zvažované specifikace.",
      hu: "Prémium paramétereket kereső vásárlóknál a D–F szín, IF–VVS tisztaság és Excellent csiszolás gyakran figyelembe vett jellemzők.",
      pl: "W przypadku kamieni o parametrach premium często bierze się pod uwagę barwę D–F, czystość IF–VVS oraz szlif Excellent.",
      ru: "Для камней премиального уровня часто рассматриваются цвет D–F, чистота IF–VVS и оценка огранки Excellent.",
      nl: "Voor kopers die premiumkenmerken zoeken, behoren D–F-kleur, IF–VVS-zuiverheid en een Excellent-slijpscore tot veelgebruikte criteria.",
      da: "For købere, der søger premiumegenskaber, er D–F-farve, IF–VVS-klarhed og Excellent-slibning blandt de specifikationer, der ofte overvejes.",
      fi: "Premium-ominaisuuksia etsiville D–F-väri, IF–VVS-puhtaus ja Excellent-hionta ovat usein tarkasteltuja ominaisuuksia.",
      sv: "För köpare som söker premiumegenskaper är D–F-färg, IF–VVS-klarhet och Excellent-slipning vanliga kriterier.",
      fr: "Pour les acheteurs recherchant des caractéristiques haut de gamme, une couleur D–F, une pureté IF–VVS et une taille Excellent figurent parmi les critères souvent considérés.",
      it: "Per chi cerca caratteristiche premium, colore D–F, purezza IF–VVS e taglio Excellent sono tra i parametri comunemente presi in considerazione.",
      es: "Para quienes buscan características premium, el color D–F, la pureza IF–VVS y una talla Excellent se encuentran entre los parámetros habitualmente considerados.",
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
      ru: "Больший вес в каратах",
      nl: "Grotere karaatgewichten",
      da: "Større caratvægte",
      fi: "Suuremmat karaattipainot",
      sv: "Större caratvikter",
      fr: "Poids en carats plus élevés",
      it: "Carature maggiori",
      es: "Mayores pesos en quilates",
    },

    description: {
      de: "Diamanten ab 1 Karat halten ihren Wert tendenziell besser, insbesondere ab 3 Karat.",
      en: "Larger diamonds are rarer, and significant carat thresholds can affect pricing. Resale performance, however, depends on the complete specification, market demand and transaction conditions.",
      tr: "Daha büyük pırlantalar daha nadirdir ve belirli karat eşikleri fiyatlandırmayı etkileyebilir. Ancak yeniden satış performansı tüm özelliklere, piyasa talebine ve işlem koşullarına bağlıdır.",
      sk: "Väčšie diamanty sú vzácnejšie a významné karátové hranice môžu ovplyvniť cenu. Výsledok pri ďalšom predaji však závisí od celkových parametrov, dopytu a podmienok transakcie.",
      cs: "Větší diamanty jsou vzácnější a významné karátové hranice mohou ovlivnit cenu. Výsledek při dalším prodeji však závisí na celkových parametrech, poptávce a podmínkách transakce.",
      hu: "A nagyobb gyémántok ritkábbak, és bizonyos karáthatárok befolyásolhatják az árazást. A későbbi eladhatóság azonban a teljes specifikációtól, kereslettől és tranzakciós feltételektől függ.",
      pl: "Większe diamenty są rzadsze, a istotne progi wagowe mogą wpływać na cenę. Wynik odsprzedaży zależy jednak od pełnej specyfikacji, popytu i warunków transakcji.",
      ru: "Крупные бриллианты встречаются реже, а определённые пороги веса могут влиять на цену. Возможность и условия перепродажи при этом зависят от всех характеристик камня, спроса и конкретной сделки.",
      nl: "Grotere diamanten zijn zeldzamer en bepaalde karaatgrenzen kunnen de prijs beïnvloeden. Het resultaat bij wederverkoop hangt echter af van de volledige specificatie, marktvraag en transactievoorwaarden.",
      da: "Større diamanter er sjældnere, og bestemte caratgrænser kan påvirke prisen. Resultatet ved videresalg afhænger dog af hele specifikationen, markedsefterspørgslen og handelsvilkårene.",
      fi: "Suuremmat timantit ovat harvinaisempia, ja tietyt karaattirajat voivat vaikuttaa hinnoitteluun. Jälleenmyynnin lopputulos riippuu kuitenkin koko spesifikaatiosta, markkinakysynnästä ja kaupankäynnin ehdoista.",
      sv: "Större diamanter är mer sällsynta och vissa caratgränser kan påverka priset. Resultatet vid återförsäljning beror dock på hela specifikationen, marknadsefterfrågan och transaktionsvillkoren.",
      fr: "Les diamants plus importants sont plus rares et certains seuils de carat peuvent influencer le prix. Les conditions de revente dépendent toutefois de l’ensemble des caractéristiques, de la demande et des conditions de transaction.",
      it: "I diamanti più grandi sono più rari e determinate soglie di caratura possono influire sul prezzo. Il risultato di una futura rivendita dipende tuttavia dall’intera specifica, dalla domanda e dalle condizioni della transazione.",
      es: "Los diamantes de mayor tamaño son más escasos y determinados umbrales de quilates pueden influir en el precio. El resultado de una futura reventa depende, sin embargo, del conjunto de características, de la demanda y de las condiciones de la operación.",
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
      ru: "Сертификация и проверяемость",
      nl: "Certificering & verifieerbaarheid",
      da: "Certificering & verificerbarhed",
      fi: "Sertifiointi & todennettavuus",
      sv: "Certifiering & verifierbarhet",
      fr: "Certification & vérifiabilité",
      it: "Certificazione & verificabilità",
      es: "Certificación & verificabilidad",
    },

    description: {
      de: "Kaufen Sie stets Diamanten mit international anerkanntem Zertifikat.",
      en: "An internationally recognised independent grading report makes a diamond's stated characteristics easier to verify and compare.",
      tr: "Uluslararası tanınan bağımsız bir derecelendirme raporu, pırlantanın belirtilen özelliklerinin doğrulanmasını ve karşılaştırılmasını kolaylaştırır.",
      sk: "Medzinárodne uznávaný nezávislý certifikát uľahčuje overenie a porovnanie deklarovaných parametrov diamantu.",
      cs: "Mezinárodně uznávaný nezávislý certifikát usnadňuje ověření a porovnání deklarovaných parametrů diamantu.",
      hu: "A nemzetközileg elismert független minősítési jelentés megkönnyíti a gyémánt feltüntetett jellemzőinek ellenőrzését és összehasonlítását.",
      pl: "Międzynarodowo uznany niezależny raport ułatwia weryfikację i porównanie deklarowanych parametrów diamentu.",
      ru: "Международно признанный независимый отчёт облегчает проверку и сравнение заявленных характеристик бриллианта.",
      nl: "Een internationaal erkend onafhankelijk beoordelingsrapport maakt de opgegeven kenmerken van een diamant eenvoudiger te verifiëren en te vergelijken.",
      da: "En internationalt anerkendt uafhængig graderingsrapport gør det lettere at kontrollere og sammenligne diamantens oplyste egenskaber.",
      fi: "Kansainvälisesti tunnustettu riippumaton luokitusraportti helpottaa timantin ilmoitettujen ominaisuuksien todentamista ja vertailua.",
      sv: "En internationellt erkänd oberoende graderingsrapport gör det enklare att verifiera och jämföra diamantens angivna egenskaper.",
      fr: "Un rapport indépendant reconnu internationalement facilite la vérification et la comparaison des caractéristiques annoncées du diamant.",
      it: "Un rapporto di classificazione indipendente e riconosciuto a livello internazionale rende più semplice verificare e confrontare le caratteristiche dichiarate del diamante.",
      es: "Un informe de clasificación independiente reconocido internacionalmente facilita la verificación y comparación de las características declaradas del diamante.",
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
      ru: "Ликвидность",
      nl: "Liquiditeit",
      da: "Likviditet",
      fi: "Likviditeetti",
      sv: "Likviditet",
      fr: "Liquidité",
      it: "Liquidità",
      es: "Liquidez",
    },

    description: {
      de: "Runde Diamanten hervorragender Qualität lassen sich auf dem globalen Markt am leichtesten wiederverkaufen.",
      en: "Standardised, widely recognised specifications can make a diamond easier to compare in the secondary market, although diamonds are generally less liquid than exchange-traded financial assets.",
      tr: "Standartlaştırılmış ve yaygın olarak tanınan özellikler, pırlantanın ikincil piyasada karşılaştırılmasını kolaylaştırabilir; ancak pırlantalar genellikle borsada işlem gören finansal varlıklardan daha az likittir.",
      sk: "Štandardizované a všeobecne uznávané parametre môžu uľahčiť porovnávanie diamantu na sekundárnom trhu, hoci diamanty sú spravidla menej likvidné než burzovo obchodované finančné aktíva.",
      cs: "Standardizované a všeobecně uznávané parametry mohou usnadnit porovnávání diamantu na sekundárním trhu, ačkoli diamanty jsou zpravidla méně likvidní než burzovně obchodovaná finanční aktiva.",
      hu: "A szabványosított és széles körben elismert jellemzők megkönnyíthetik a gyémánt összehasonlítását a másodlagos piacon, bár a gyémántok általában kevésbé likvidek, mint a tőzsdén kereskedett pénzügyi eszközök.",
      pl: "Standaryzowane i powszechnie rozpoznawalne parametry mogą ułatwiać porównanie diamentu na rynku wtórnym, choć diamenty są zazwyczaj mniej płynne niż aktywa finansowe notowane na giełdzie.",
      ru: "Стандартизированные и широко признанные характеристики облегчают сравнение бриллианта на вторичном рынке, однако бриллианты обычно менее ликвидны, чем финансовые активы, торгуемые на бирже.",
      nl: "Gestandaardiseerde en algemeen erkende kenmerken kunnen vergelijking op de secundaire markt vergemakkelijken, al zijn diamanten doorgaans minder liquide dan beursverhandelde financiële activa.",
      da: "Standardiserede og bredt anerkendte egenskaber kan gøre sammenligning på sekundærmarkedet lettere, selv om diamanter generelt er mindre likvide end børsnoterede finansielle aktiver.",
      fi: "Standardoidut ja laajalti tunnetut ominaisuudet voivat helpottaa timantin vertailua jälkimarkkinoilla, vaikka timantit ovat yleensä vähemmän likvidejä kuin pörssissä noteeratut rahoitusvarat.",
      sv: "Standardiserade och allmänt erkända egenskaper kan göra det enklare att jämföra en diamant på andrahandsmarknaden, även om diamanter generellt är mindre likvida än börshandlade finansiella tillgångar.",
      fr: "Des caractéristiques standardisées et largement reconnues peuvent faciliter la comparaison d’un diamant sur le marché secondaire, même si les diamants sont généralement moins liquides que les actifs financiers négociés en bourse.",
      it: "Caratteristiche standardizzate e ampiamente riconosciute possono facilitare il confronto di un diamante sul mercato secondario, sebbene i diamanti siano generalmente meno liquidi degli strumenti finanziari negoziati in borsa.",
      es: "Las características estandarizadas y ampliamente reconocidas pueden facilitar la comparación de un diamante en el mercado secundario, aunque los diamantes suelen ser menos líquidos que los activos financieros negociados en bolsa.",
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
      "Premium diamond characteristics including D–F colour, IF–VVS clarity and Excellent cut",
  },
  {
    image: "/images/diamonds/principles/carat-weight.jpg",
    imageWidth: 1090,
    imageHeight: 812,
    imageAlt:
      "Diamond size guide and pricing relationship versus carat weight chart",
  },
  {
    image: "/images/diamonds/principles/certification.jpg",
    imageWidth: 947,
    imageHeight: 766,
    imageAlt:
      "Why independent diamond grading reports support verification and comparison",
  },
  {
    image: "/images/diamonds/principles/liquidity.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt:
      "Illustration of diamond characteristics and the secondary diamond market",
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
    ru: "Стоимость бриллианта = 4C + дополнительные факторы",
    nl: "Diamantwaarde = de 4 C’s + aanvullende factoren",
    da: "Diamantværdi = de 4 C'er + yderligere faktorer",
    fi: "Timantin arvo = 4C + muut tekijät",
    sv: "Diamantvärde = de 4 C:na + ytterligare faktorer",
    fr: "Valeur du diamant = 4C + facteurs supplémentaires",
    it: "Valore del diamante = 4C + fattori aggiuntivi",
    es: "Valor del diamante = 4C + factores adicionales",
  },

  {
    de: "Premium-Parameter = hohe Qualität + passende Karatgröße",
    en: "Premium characteristics = high quality + suitable carat weight",
    tr: "Premium özellikler = yüksek kalite + uygun karat ağırlığı",
    sk: "Prémiové parametre = vysoká kvalita + vhodná karátová váha",
    cs: "Prémiové parametry = vysoká kvalita + vhodná karátová váha",
    hu: "Prémium paraméterek = magas minőség + megfelelő karátsúly",
    pl: "Parametry premium = wysoka jakość + odpowiednia masa w karatach",
    ru: "Премиальные параметры = высокое качество + подходящий вес",
    nl: "Premiumkenmerken = hoge kwaliteit + passend karaatgewicht",
    da: "Premiumegenskaber = høj kvalitet + passende caratvægt",
    fi: "Premium-ominaisuudet = korkea laatu + sopiva karaattipaino",
    sv: "Premiumegenskaper = hög kvalitet + lämplig caratvikt",
    fr: "Caractéristiques premium = haute qualité + poids adapté",
    it: "Caratteristiche premium = alta qualità + caratura adeguata",
    es: "Características premium = alta calidad + peso adecuado",
  },

  {
    de: "Ein unabhängiges Zertifikat unterstützt Verifizierung und Vergleich",
    en: "Independent certification supports verification and comparison",
    tr: "Bağımsız sertifikasyon doğrulama ve karşılaştırmayı destekler",
    sk: "Nezávislý certifikát podporuje overenie a porovnanie",
    cs: "Nezávislý certifikát podporuje ověření a porovnání",
    hu: "A független tanúsítás segíti az ellenőrzést és összehasonlítást",
    pl: "Niezależny certyfikat ułatwia weryfikację i porównanie",
    ru: "Независимый сертификат облегчает проверку и сравнение",
    nl: "Onafhankelijke certificering ondersteunt verificatie en vergelijking",
    da: "Uafhængig certificering understøtter kontrol og sammenligning",
    fi: "Riippumaton sertifiointi tukee todentamista ja vertailua",
    sv: "Oberoende certifiering stödjer verifiering och jämförelse",
    fr: "Une certification indépendante facilite la vérification et la comparaison",
    it: "La certificazione indipendente facilita verifica e confronto",
    es: "La certificación independiente facilita la verificación y comparación",
  },

  {
    de: "Der Diamantmarkt ist international, aber nicht vollständig standardisiert",
    en: "The diamond market is global, but not fully standardised",
    tr: "Pırlanta piyasası küreseldir ancak tamamen standartlaştırılmış değildir",
    sk: "Trh s diamantmi je globálny, ale nie úplne štandardizovaný",
    cs: "Trh s diamanty je globální, ale není zcela standardizovaný",
    hu: "A gyémántpiac globális, de nem teljesen szabványosított",
    pl: "Rynek diamentów jest globalny, ale nie w pełni standaryzowany",
    ru: "Рынок бриллиантов глобален, но не полностью стандартизирован",
    nl: "De diamantmarkt is wereldwijd, maar niet volledig gestandaardiseerd",
    da: "Diamantmarkedet er globalt, men ikke fuldt standardiseret",
    fi: "Timanttimarkkina on maailmanlaajuinen, mutta ei täysin standardoitu",
    sv: "Diamantmarknaden är global men inte helt standardiserad",
    fr: "Le marché du diamant est mondial, mais pas entièrement standardisé",
    it: "Il mercato dei diamanti è globale, ma non completamente standardizzato",
    es: "El mercado del diamante es global, pero no está completamente estandarizado",
  },

  {
    de: "Diamanten sind greifbare Sachwerte mit individuellen Eigenschaften",
    en: "Diamonds are tangible assets with individual characteristics",
    tr: "Pırlantalar kendine özgü özelliklere sahip somut varlıklardır",
    sk: "Diamanty sú hmatateľné aktíva s individuálnymi vlastnosťami",
    cs: "Diamanty jsou hmatatelná aktiva s individuálními vlastnostmi",
    hu: "A gyémántok egyedi jellemzőkkel rendelkező kézzelfogható eszközök",
    pl: "Diamenty są aktywami materialnymi o indywidualnych cechach",
    ru: "Бриллианты — материальные активы с индивидуальными характеристиками",
    nl: "Diamanten zijn tastbare activa met individuele kenmerken",
    da: "Diamanter er fysiske aktiver med individuelle egenskaber",
    fi: "Timantit ovat fyysisiä omaisuuseriä, joilla on yksilölliset ominaisuudet",
    sv: "Diamanter är fysiska tillgångar med individuella egenskaper",
    fr: "Les diamants sont des actifs tangibles aux caractéristiques individuelles",
    it: "I diamanti sono beni tangibili con caratteristiche individuali",
    es: "Los diamantes son activos tangibles con características individuales",
  },
];