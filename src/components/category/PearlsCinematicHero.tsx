"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { PearlIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type PearlsHeroCopy = {
  eyebrow: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  since: string;
  statementEyebrow: string;
  statementBefore: string;
  statementAccent: string;
  imageAlt: string;
};

const PEARLS_HERO_COPY: Record<Locale, PearlsHeroCopy> = {
  en: {
    eyebrow: "Pearls",
    title1: "Nature's",
    title2: "Most Patient",
    title3: "Jewel",
    description:
      "Created slowly, layer by layer, a pearl carries a beauty no machine can reproduce. No two are ever exactly alike. At LIDYA, we choose pearls for the depth of their lustre, the harmony of their colour and the quiet elegance that reveals itself the moment they meet the skin.",
    since: "LIDYA · SINCE 1989",
    statementEyebrow: "Quiet luxury",
    statementBefore: "Formed slowly by nature.",
    statementAccent: "Chosen carefully by hand.",
    imageAlt:
      "LIDYA pearl jewellery collection arranged on champagne silk",
  },

  de: {
    eyebrow: "Perlen",
    title1: "Der Natur",
    title2: "geduldigstes",
    title3: "Juwel",
    description:
      "Langsam, Schicht für Schicht entstanden, trägt jede Perle eine Schönheit in sich, die keine Maschine nachbilden kann. Keine zwei Perlen sind jemals vollkommen gleich. Bei LIDYA wählen wir Perlen nach der Tiefe ihres Lüsters, der Harmonie ihrer Farbe und jener stillen Eleganz aus, die sich in dem Moment zeigt, in dem sie die Haut berühren.",
    since: "LIDYA · SEIT 1989",
    statementEyebrow: "Stiller Luxus",
    statementBefore: "Langsam von der Natur geformt.",
    statementAccent: "Sorgfältig von Hand ausgewählt.",
    imageAlt:
      "LIDYA Perlenkollektion auf champagnerfarbener Seide arrangiert",
  },

  tr: {
    eyebrow: "İnciler",
    title1: "Doğanın",
    title2: "En Sabırlı",
    title3: "Mücevheri",
    description:
      "Yavaşça, katman katman oluşan bir inci, hiçbir makinenin taklit edemeyeceği bir güzellik taşır. Hiçbir iki inci birbirinin tamamen aynısı değildir. LIDYA’da incileri; parlaklıklarının derinliğine, renklerinin uyumuna ve tenle buluştukları anda ortaya çıkan zarif karakterlerine göre seçiyoruz.",
    since: "LIDYA · 1989'DAN BERİ",
    statementEyebrow: "Sessiz lüks",
    statementBefore: "Doğa tarafından yavaşça şekillendirildi.",
    statementAccent: "Özenle elde seçildi.",
    imageAlt:
      "Şampanya renkli ipek üzerinde düzenlenmiş LIDYA inci mücevher koleksiyonu",
  },

  sk: {
    eyebrow: "Perly",
    title1: "Prírodný",
    title2: "zázrak",
    title3: "trpezlivosti",
    description:
      "Perla vzniká pomaly, vrstvu po vrstve, a nesie v sebe krásu, ktorú nedokáže napodobniť žiadny stroj. Žiadne dve perly nie sú úplne rovnaké. V LIDYA vyberáme perly podľa hĺbky ich lesku, harmónie farby a tichej elegancie, ktorá sa naplno ukáže vo chvíli, keď sa dotknú pokožky.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Nenápadný luxus",
    statementBefore: "Pomaly formované prírodou.",
    statementAccent: "Starostlivo vybrané ručne.",
    imageAlt:
      "Kolekcia perlových šperkov LIDYA naaranžovaná na šampanskom hodvábe",
  },

  cs: {
    eyebrow: "Perly",
    title1: "Přírodní",
    title2: "zázrak",
    title3: "trpělivosti",
    description:
      "Perla vzniká pomalu, vrstvu po vrstvě, a nese v sobě krásu, kterou nedokáže napodobit žádný stroj. Žádné dvě perly nejsou zcela stejné. V LIDYA vybíráme perly podle hloubky jejich lesku, harmonie barvy a tiché elegance, která se naplno projeví ve chvíli, kdy se dotknou pokožky.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Nenápadný luxus",
    statementBefore: "Pomalu formované přírodou.",
    statementAccent: "Pečlivě vybírané ručně.",
    imageAlt:
      "Kolekce perlových šperků LIDYA naaranžovaná na šampaňském hedvábí",
  },

  hu: {
    eyebrow: "Gyöngyök",
    title1: "A természet",
    title2: "legtürelmesebb",
    title3: "ékszere",
    description:
      "A gyöngy lassan, rétegről rétegre születik, és olyan szépséget hordoz, amelyet egyetlen gép sem képes reprodukálni. Nincs két teljesen egyforma gyöngy. A LIDYA-nál a gyöngyöket fényük mélysége, színük harmóniája és az a visszafogott elegancia alapján választjuk ki, amely a bőrrel érintkezve válik igazán láthatóvá.",
    since: "LIDYA · 1989 ÓTA",
    statementEyebrow: "Csendes luxus",
    statementBefore: "Lassan formálja a természet.",
    statementAccent: "Gondosan, kézzel válogatva.",
    imageAlt:
      "LIDYA gyöngyékszer-kollekció pezsgőszínű selymen elrendezve",
  },

  pl: {
    eyebrow: "Perły",
    title1: "Najbardziej",
    title2: "cierpliwy klejnot",
    title3: "natury",
    description:
      "Perła powstaje powoli, warstwa po warstwie, i kryje w sobie piękno, którego nie potrafi odtworzyć żadna maszyna. Nie ma dwóch identycznych pereł. W LIDYA wybieramy perły ze względu na głębię ich połysku, harmonię koloru i subtelną elegancję, która ujawnia się w chwili, gdy dotykają skóry.",
    since: "LIDYA · OD 1989 ROKU",
    statementEyebrow: "Dyskretny luksus",
    statementBefore: "Powoli formowane przez naturę.",
    statementAccent: "Starannie wybierane ręcznie.",
    imageAlt:
      "Kolekcja biżuterii z pereł LIDYA ułożona na jedwabiu w kolorze szampana",
  },

  ru: {
    eyebrow: "Жемчуг",
    title1: "Самая",
    title2: "терпеливая",
    title3: "драгоценность природы",
    description:
      "Жемчуг рождается медленно, слой за слоем, и обладает красотой, которую невозможно воспроизвести машиной. Не существует двух абсолютно одинаковых жемчужин. В LIDYA мы выбираем жемчуг за глубину блеска, гармонию оттенка и сдержанную элегантность, которая особенно раскрывается при соприкосновении с кожей.",
    since: "LIDYA · С 1989 ГОДА",
    statementEyebrow: "Тихая роскошь",
    statementBefore: "Медленно создано природой.",
    statementAccent: "Тщательно отобрано вручную.",
    imageAlt:
      "Коллекция жемчужных украшений LIDYA на шёлке цвета шампанского",
  },

  nl: {
    eyebrow: "Parels",
    title1: "Het meest",
    title2: "geduldige juweel",
    title3: "van de natuur",
    description:
      "Een parel ontstaat langzaam, laag voor laag, en bezit een schoonheid die geen machine kan nabootsen. Geen twee parels zijn ooit precies hetzelfde. Bij LIDYA selecteren we parels op de diepte van hun glans, de harmonie van hun kleur en de ingetogen elegantie die zichtbaar wordt zodra ze de huid raken.",
    since: "LIDYA · SINDS 1989",
    statementEyebrow: "Stille luxe",
    statementBefore: "Langzaam gevormd door de natuur.",
    statementAccent: "Zorgvuldig met de hand geselecteerd.",
    imageAlt:
      "LIDYA parelcollectie gerangschikt op champagnekleurige zijde",
  },

  da: {
    eyebrow: "Perler",
    title1: "Naturens",
    title2: "mest tålmodige",
    title3: "juvel",
    description:
      "En perle skabes langsomt, lag for lag, og bærer en skønhed, som ingen maskine kan efterligne. Ingen to perler er helt ens. Hos LIDYA vælger vi perler efter dybden i deres glans, harmonien i deres farve og den stille elegance, der viser sig, når de møder huden.",
    since: "LIDYA · SIDEN 1989",
    statementEyebrow: "Stille luksus",
    statementBefore: "Langsomt formet af naturen.",
    statementAccent: "Omhyggeligt udvalgt i hånden.",
    imageAlt:
      "LIDYA perlesmykkekollektion arrangeret på champagnefarvet silke",
  },

  fi: {
    eyebrow: "Helmet",
    title1: "Luonnon",
    title2: "kärsivällisin",
    title3: "jalokivi",
    description:
      "Helmi syntyy hitaasti, kerros kerrokselta, ja siinä on kauneutta, jota mikään kone ei voi jäljitellä. Yksikään helmi ei ole täysin samanlainen kuin toinen. LIDYA valitsee helmet niiden hohteen syvyyden, värin harmonian ja hillityn eleganssin perusteella.",
    since: "LIDYA · VUODESTA 1989",
    statementEyebrow: "Hiljainen ylellisyys",
    statementBefore: "Luonnon hitaasti muovaama.",
    statementAccent: "Huolellisesti käsin valittu.",
    imageAlt:
      "LIDYA-helmikorukokoelma aseteltuna samppanjanväriselle silkille",
  },

  sv: {
    eyebrow: "Pärlor",
    title1: "Naturens",
    title2: "mest tålmodiga",
    title3: "juvel",
    description:
      "En pärla formas långsamt, lager för lager, och bär på en skönhet som ingen maskin kan återskapa. Ingen pärla är exakt den andra lik. På LIDYA väljer vi pärlor efter djupet i deras lyster, harmonin i färgen och den diskreta elegans som framträder när de möter huden.",
    since: "LIDYA · SEDAN 1989",
    statementEyebrow: "Stillhetens lyx",
    statementBefore: "Långsamt formad av naturen.",
    statementAccent: "Omsorgsfullt handplockad.",
    imageAlt:
      "LIDYA pärlsmyckekollektion arrangerad på champagnefärgat siden",
  },

  fr: {
    eyebrow: "Perles",
    title1: "Le joyau",
    title2: "le plus patient",
    title3: "de la nature",
    description:
      "Une perle se forme lentement, couche après couche, et possède une beauté qu’aucune machine ne peut reproduire. Il n’existe jamais deux perles parfaitement identiques. Chez LIDYA, nous choisissons les perles pour la profondeur de leur lustre, l’harmonie de leur couleur et l’élégance discrète qu’elles révèlent au contact de la peau.",
    since: "LIDYA · DEPUIS 1989",
    statementEyebrow: "Luxe discret",
    statementBefore: "Lentement façonnée par la nature.",
    statementAccent: "Soigneusement sélectionnée à la main.",
    imageAlt:
      "Collection de bijoux en perles LIDYA disposée sur de la soie couleur champagne",
  },

  it: {
    eyebrow: "Perle",
    title1: "Il gioiello",
    title2: "più paziente",
    title3: "della natura",
    description:
      "Una perla nasce lentamente, strato dopo strato, e racchiude una bellezza che nessuna macchina può riprodurre. Non esistono due perle perfettamente identiche. In LIDYA scegliamo le perle per la profondità della loro lucentezza, l’armonia del colore e l’eleganza discreta che emerge quando incontrano la pelle.",
    since: "LIDYA · DAL 1989",
    statementEyebrow: "Lusso discreto",
    statementBefore: "Formata lentamente dalla natura.",
    statementAccent: "Selezionata con cura a mano.",
    imageAlt:
      "Collezione di gioielli con perle LIDYA disposta su seta color champagne",
  },

  es: {
    eyebrow: "Perlas",
    title1: "La joya",
    title2: "más paciente",
    title3: "de la naturaleza",
    description:
      "Una perla se forma lentamente, capa tras capa, y posee una belleza que ninguna máquina puede reproducir. No existen dos perlas exactamente iguales. En LIDYA seleccionamos las perlas por la profundidad de su lustre, la armonía de su color y la elegancia discreta que revelan al entrar en contacto con la piel.",
    since: "LIDYA · DESDE 1989",
    statementEyebrow: "Lujo discreto",
    statementBefore: "Formada lentamente por la naturaleza.",
    statementAccent: "Seleccionada cuidadosamente a mano.",
    imageAlt:
      "Colección de joyas con perlas LIDYA dispuesta sobre seda color champán",
  },
};

export default function PearlsCinematicHero() {
  const { locale } = useLanguage();

  const copy: PearlsHeroCopy =
    PEARLS_HERO_COPY[locale] ?? PEARLS_HERO_COPY.en;

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });

  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!section || !imageWrap || !content || !glow) {
      setLoaded(true);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !finePointer) {
      setLoaded(true);
      return;
    }

    const updatePointer = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;

      pointerTarget.current.x = Math.max(-1, Math.min(1, x));
      pointerTarget.current.y = Math.max(-1, Math.min(1, y));
    };

    const resetPointer = () => {
      pointerTarget.current.x = 0;
      pointerTarget.current.y = 0;
    };

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight, 1);

      const progress = Math.max(
        0,
        Math.min(1, Math.abs(Math.min(rect.top, 0)) / total)
      );

      scrollTarget.current = progress;
    };

    const animate = () => {
      pointerCurrent.current.x +=
        (pointerTarget.current.x - pointerCurrent.current.x) * 0.045;

      pointerCurrent.current.y +=
        (pointerTarget.current.y - pointerCurrent.current.y) * 0.045;

      scrollCurrent.current +=
        (scrollTarget.current - scrollCurrent.current) * 0.065;

      const x = pointerCurrent.current.x;
      const y = pointerCurrent.current.y;
      const scroll = scrollCurrent.current;

      const imageX = x * 10;
      const imageY = y * 6 - scroll * 20;
      const imageScale = 1.04 + scroll * 0.014;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      const contentX = x * -3;
      const contentY = y * -2 - scroll * 5;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      const glowX = 48 + x * 8;
      const glowY = 42 + y * 6;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(255, 244, 218, 0.22) 0%,
          rgba(225, 190, 126, 0.07) 21%,
          rgba(255, 255, 255, 0) 50%
        )
      `;

      frameRef.current = requestAnimationFrame(animate);
    };

    section.addEventListener("pointermove", updatePointer);
    section.addEventListener("pointerleave", resetPointer);

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    updateScroll();

    frameRef.current = requestAnimationFrame(animate);

    const loadTimer = window.setTimeout(() => {
      setLoaded(true);
    }, 60);

    return () => {
      section.removeEventListener("pointermove", updatePointer);
      section.removeEventListener("pointerleave", resetPointer);

      window.removeEventListener("scroll", updateScroll);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      window.clearTimeout(loadTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-ivory
        pt-[108px]
        md:min-h-[860px]
        md:pt-36
        lg:min-h-[940px]
        lg:pt-44
      "
    >
      <div
        ref={imageWrapRef}
        className={`absolute inset-[-3%] will-change-transform transition-[opacity,filter,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded
            ? "opacity-100 blur-0"
            : "opacity-0 blur-[2px]"
        }`}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.04)"
            : "translate3d(0,0,0) scale(1.075)",
        }}
      >
        <Image
          src="/images/pearls/hero-pearls.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_50%]
            md:object-[55%_50%]
            lg:object-center
          "
        />
      </div>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#F7F3EB]/97
          via-[#F7F3EB]/78
          to-[#F7F3EB]/16
          md:from-[#F7F3EB]/94
          md:via-[#F7F3EB]/52
          md:to-transparent
          lg:from-[#F7F3EB]/92
          lg:via-[#F7F3EB]/42
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#F7F3EB]/40
          via-transparent
          to-[#F7F3EB]/10
          md:from-[#F7F3EB]/24
        "
      />

      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_52%,rgba(84,52,27,0.065)_100%)]" />

      <div
        ref={contentRef}
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-6
          will-change-transform
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            grid
            gap-7
            pb-10
            md:gap-10
            md:pb-16
            lg:grid-cols-12
            lg:items-end
            lg:gap-12
            lg:pb-28
          "
        >
          <div className="text-center lg:col-span-8 lg:text-left">
            <div
              className={`flex items-center justify-center gap-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-4 lg:justify-start ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "140ms" }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold md:h-10 md:w-10">
                <PearlIcon />
              </span>

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
                {copy.eyebrow}
              </span>
            </div>

            <h1
              className="
                mx-auto
                mt-5
                max-w-[760px]
                font-display
                text-[2.85rem]
                leading-[0.91]
                tracking-[-0.04em]
                sm:text-[3.15rem]
                md:mt-7
                md:text-6xl
                md:leading-[0.92]
                lg:mx-0
                lg:text-[5.8rem]
              "
              style={{ color: "#1B0B20" }}
            >
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "240ms" }}
                >
                  {copy.title1}
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "320ms" }}
                >
                  {copy.title2}
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {copy.title3}
                </span>
              </span>
            </h1>
          </div>

          <div
            className={`text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:col-span-4 lg:pb-2 lg:text-left ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
          >
            <p
              className="
                mx-auto
                max-w-[340px]
                text-[0.78rem]
                leading-[1.65rem]
                text-[#645E5A]
                sm:max-w-md
                md:text-base
                md:leading-7
                lg:mx-0
              "
            >
              {copy.description}
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 md:mt-7 md:gap-4 lg:justify-start">
              <span className="h-px w-9 bg-gold md:w-12" />

              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.21em] text-plum-dark/50 md:text-[0.58rem] md:tracking-[0.24em]">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-plum-dark/10 py-7 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:py-12 lg:py-16 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "660ms" }}
        >
          <div className="grid gap-4 text-center md:gap-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:text-left">
            <div className="lg:col-span-3">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.27em] text-[#A98242] md:text-[0.62rem] md:tracking-[0.3em]">
                {copy.statementEyebrow}
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="
                  mx-auto
                  max-w-[900px]
                  font-display
                  text-[1.65rem]
                  italic
                  leading-[1.12]
                  md:text-4xl
                  md:leading-tight
                  lg:mx-0
                  lg:text-5xl
                "
                style={{ color: "#1B0B20" }}
              >
                {copy.statementBefore}

                <span style={{ color: "#A98242" }}>
                  {" "}
                  {copy.statementAccent}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}