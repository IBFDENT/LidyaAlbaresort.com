"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { BOUTIQUES } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const BOUTIQUE_IMAGE_POSITIONS: Record<string, string> = {
  manavgat: "object-[50%_42%]",
  resort: "object-[58%_48%]",
  royal: "object-[50%_50%]",
  queen: "object-[50%_56%]",
};

const BOUTIQUE_IMAGES: Partial<Record<string, string>> = {
  queen: "/images/boutiques/queen.jpg",
};

const BOUTIQUE_ADDRESSES: Record<string, string> = {
  manavgat:
    "Çolaklı, Tilkiler Mevkii · Manavgat / Antalya / Türkiye",
  resort:
    "Çolaklı Tourism Centre · Manavgat / Antalya / Türkiye",
  royal:
    "Çolaklı Tourism Centre · Manavgat / Antalya / Türkiye",
  queen:
    "Çolaklı Tourism Centre · Manavgat / Antalya / Türkiye",
};

const BOUTIQUE_URLS: Partial<Record<string, string>> = {
  resort: "https://www.albahotels.com.tr/en/resort-en/",
  royal: "https://www.lidyaalbajewellery.com/",
  queen: "https://www.albahotels.com.tr/en/queen-en/",
};

const BOUTIQUE_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    label: string;
    boutiquesLabel: string;
    manavgatServices: string;
    hotelServices: string;
    closingBefore: string;
    closingAccent: string;
    visitAria: string;
  }
> = {
  en: {
    eyebrow: "Our Boutiques",
    title: "Visit us at Alba Hotels",
    intro:
      "Visit LIDYA in person and discover our collections, craftsmanship and personal service in a setting designed around you.",
    label: "Boutique",
    boutiquesLabel: "LIDYA BOUTIQUES",
    manavgatServices: "SALES · SERVICE · CONSULTATION",
    hotelServices: "BOUTIQUE · HOTEL · RESERVATIONS",
    closingBefore: "More than a boutique.",
    closingAccent: "A place to choose something lasting.",
    visitAria: "Visit",
  },

  de: {
    eyebrow: "Unsere Boutiquen",
    title: "Besuchen Sie uns in den Alba Hotels",
    intro:
      "Besuchen Sie LIDYA persönlich und entdecken Sie unsere Kollektionen, Handwerkskunst und persönlichen Service in einer Umgebung, die ganz auf Sie abgestimmt ist.",
    label: "Boutique",
    boutiquesLabel: "LIDYA BOUTIQUEN",
    manavgatServices: "VERKAUF · SERVICE · BERATUNG",
    hotelServices: "BOUTIQUE · HOTEL · RESERVIERUNG",
    closingBefore: "Mehr als eine Boutique.",
    closingAccent: "Ein Ort für etwas von bleibendem Wert.",
    visitAria: "Website besuchen:",
  },

  tr: {
    eyebrow: "Butiklerimiz",
    title: "Alba Otellerinde bizi ziyaret edin",
    intro:
      "LIDYA’yı yerinde ziyaret edin; koleksiyonlarımızı, el işçiliğimizi ve kişisel hizmet anlayışımızı sizin için tasarlanmış bir ortamda keşfedin.",
    label: "Butik",
    boutiquesLabel: "LIDYA BUTİKLERİ",
    manavgatServices: "SATIŞ · SERVİS · DANIŞMANLIK",
    hotelServices: "BUTİK · OTEL · REZERVASYON",
    closingBefore: "Bir butikten daha fazlası.",
    closingAccent: "Kalıcı bir seçim yapmak için özel bir yer.",
    visitAria: "Web sitesini ziyaret et:",
  },

  sk: {
    eyebrow: "Naše butiky",
    title: "Navštívte nás v hoteloch Alba",
    intro:
      "Navštívte LIDYA osobne a objavte naše kolekcie, remeselnosť a osobný servis v prostredí vytvorenom s dôrazom na vás.",
    label: "Butik",
    boutiquesLabel: "LIDYA BUTIKY",
    manavgatServices: "PREDAJ · SERVIS · PORADENSTVO",
    hotelServices: "BUTIK · HOTEL · REZERVÁCIE",
    closingBefore: "Viac než butik.",
    closingAccent:
      "Miesto, kde si vyberiete niečo s trvalou hodnotou.",
    visitAria: "Navštíviť web:",
  },

  cs: {
    eyebrow: "Naše butiky",
    title: "Navštivte nás v hotelech Alba",
    intro:
      "Navštivte LIDYA osobně a objevte naše kolekce, řemeslnost a osobní servis v prostředí vytvořeném s důrazem na vás.",
    label: "Butik",
    boutiquesLabel: "LIDYA BUTIKY",
    manavgatServices: "PRODEJ · SERVIS · PORADENSTVÍ",
    hotelServices: "BUTIK · HOTEL · REZERVACE",
    closingBefore: "Více než butik.",
    closingAccent:
      "Místo, kde si vyberete něco s trvalou hodnotou.",
    visitAria: "Navštívit web:",
  },

  hu: {
    eyebrow: "Butikjaink",
    title: "Látogasson el hozzánk az Alba szállodákban",
    intro:
      "Látogasson el személyesen a LIDYA üzleteibe, és fedezze fel kollekcióinkat, kézműves munkánkat és személyes szolgáltatásainkat egy Önre szabott környezetben.",
    label: "Butik",
    boutiquesLabel: "LIDYA BUTIKOK",
    manavgatServices: "ÉRTÉKESÍTÉS · SZERVIZ · TANÁCSADÁS",
    hotelServices: "BUTIK · HOTEL · FOGLALÁS",
    closingBefore: "Több mint egy butik.",
    closingAccent:
      "Egy hely, ahol maradandó értéket választhat.",
    visitAria: "Weboldal megnyitása:",
  },

  pl: {
    eyebrow: "Nasze butiki",
    title: "Odwiedź nas w hotelach Alba",
    intro:
      "Odwiedź LIDYA osobiście i odkryj nasze kolekcje, rzemiosło oraz indywidualną obsługę w przestrzeni stworzonej z myślą o Tobie.",
    label: "Butik",
    boutiquesLabel: "BUTIKI LIDYA",
    manavgatServices: "SPRZEDAŻ · SERWIS · KONSULTACJE",
    hotelServices: "BUTIK · HOTEL · REZERWACJE",
    closingBefore: "Więcej niż butik.",
    closingAccent:
      "Miejsce, w którym wybierasz coś o trwałej wartości.",
    visitAria: "Odwiedź stronę:",
  },

  ru: {
    eyebrow: "Наши бутики",
    title: "Посетите нас в отелях Alba",
    intro:
      "Посетите LIDYA лично и откройте для себя наши коллекции, мастерство и персональный сервис в атмосфере, созданной для вас.",
    label: "Бутик",
    boutiquesLabel: "БУТИКИ LIDYA",
    manavgatServices: "ПРОДАЖА · СЕРВИС · КОНСУЛЬТАЦИЯ",
    hotelServices: "БУТИК · ОТЕЛЬ · БРОНИРОВАНИЕ",
    closingBefore: "Больше, чем бутик.",
    closingAccent:
      "Место, где выбирают вещи с непреходящей ценностью.",
    visitAria: "Посетить сайт:",
  },

  nl: {
    eyebrow: "Onze boetieks",
    title: "Bezoek ons bij Alba Hotels",
    intro:
      "Bezoek LIDYA persoonlijk en ontdek onze collecties, ons vakmanschap en onze persoonlijke service in een omgeving die om u draait.",
    label: "Boetiek",
    boutiquesLabel: "LIDYA BOETIEKS",
    manavgatServices: "VERKOOP · SERVICE · ADVIES",
    hotelServices: "BOETIEK · HOTEL · RESERVERINGEN",
    closingBefore: "Meer dan een boetiek.",
    closingAccent:
      "Een plek om iets van blijvende waarde te kiezen.",
    visitAria: "Bezoek website:",
  },

  da: {
    eyebrow: "Vores boutiques",
    title: "Besøg os på Alba Hotels",
    intro:
      "Besøg LIDYA personligt og oplev vores kollektioner, håndværk og personlige service i omgivelser skabt med dig i centrum.",
    label: "Boutique",
    boutiquesLabel: "LIDYA BOUTIQUES",
    manavgatServices: "SALG · SERVICE · RÅDGIVNING",
    hotelServices: "BOUTIQUE · HOTEL · RESERVATIONER",
    closingBefore: "Mere end en boutique.",
    closingAccent:
      "Et sted at vælge noget med varig værdi.",
    visitAria: "Besøg website:",
  },

  fi: {
    eyebrow: "Myymälämme",
    title: "Vieraile luonamme Alba Hotels -hotelleissa",
    intro:
      "Vieraile LIDYAssa henkilökohtaisesti ja tutustu mallistoihimme, käsityötaitoomme ja henkilökohtaiseen palveluumme ympäristössä, joka on suunniteltu sinua varten.",
    label: "Myymälä",
    boutiquesLabel: "LIDYA-MYYMÄLÄT",
    manavgatServices: "MYYNTI · HUOLTO · NEUVONTA",
    hotelServices: "MYYMÄLÄ · HOTELLI · VARAUKSET",
    closingBefore: "Enemmän kuin myymälä.",
    closingAccent:
      "Paikka, jossa valitaan jotain pysyvää.",
    visitAria: "Vieraile sivustolla:",
  },

  sv: {
    eyebrow: "Våra butiker",
    title: "Besök oss på Alba Hotels",
    intro:
      "Besök LIDYA personligen och upptäck våra kollektioner, vårt hantverk och vår personliga service i en miljö skapad med dig i fokus.",
    label: "Butik",
    boutiquesLabel: "LIDYA BUTIKER",
    manavgatServices: "FÖRSÄLJNING · SERVICE · RÅDGIVNING",
    hotelServices: "BUTIK · HOTELL · BOKNINGAR",
    closingBefore: "Mer än en butik.",
    closingAccent:
      "En plats där du väljer något med bestående värde.",
    visitAria: "Besök webbplats:",
  },

  fr: {
    eyebrow: "Nos boutiques",
    title: "Retrouvez-nous dans les Alba Hotels",
    intro:
      "Venez découvrir LIDYA en personne, nos collections, notre savoir-faire et notre service personnalisé dans un cadre pensé pour vous.",
    label: "Boutique",
    boutiquesLabel: "BOUTIQUES LIDYA",
    manavgatServices: "VENTE · SERVICE · CONSEIL",
    hotelServices: "BOUTIQUE · HÔTEL · RÉSERVATIONS",
    closingBefore: "Bien plus qu’une boutique.",
    closingAccent:
      "Un lieu pour choisir quelque chose qui dure.",
    visitAria: "Visiter le site:",
  },

  it: {
    eyebrow: "Le nostre boutique",
    title: "Venite a trovarci negli Alba Hotels",
    intro:
      "Visitate LIDYA di persona e scoprite le nostre collezioni, l’artigianalità e il servizio personale in un ambiente pensato intorno a voi.",
    label: "Boutique",
    boutiquesLabel: "BOUTIQUE LIDYA",
    manavgatServices: "VENDITA · ASSISTENZA · CONSULENZA",
    hotelServices: "BOUTIQUE · HOTEL · PRENOTAZIONI",
    closingBefore: "Più di una boutique.",
    closingAccent:
      "Un luogo dove scegliere qualcosa destinato a durare.",
    visitAria: "Visita il sito:",
  },

  es: {
    eyebrow: "Nuestras boutiques",
    title: "Visítenos en los Alba Hotels",
    intro:
      "Visite LIDYA en persona y descubra nuestras colecciones, artesanía y servicio personalizado en un entorno pensado para usted.",
    label: "Boutique",
    boutiquesLabel: "BOUTIQUES LIDYA",
    manavgatServices: "VENTA · SERVICIO · ASESORAMIENTO",
    hotelServices: "BOUTIQUE · HOTEL · RESERVAS",
    closingBefore: "Más que una boutique.",
    closingAccent:
      "Un lugar para elegir algo de valor duradero.",
    visitAria: "Visitar sitio web:",
  },
};

function BoutiqueTitle({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  if (id === "manavgat") {
    return (
      <>
        <span className="block">LIDYA JEWELLERY</span>
        <span className="mt-1 block">Manavgat</span>
      </>
    );
  }

  return <>{name}</>;
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default function Boutiques() {
  const { locale } = useLanguage();

  const copy = BOUTIQUE_COPY[locale];

  return (
    <section
      id="boutiques"
      className="relative overflow-hidden bg-ivory py-20 md:py-30 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-12 grid gap-8 text-center lg:mb-18 lg:grid-cols-12 lg:items-end lg:text-left">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="mx-auto max-w-[900px] font-display text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl"
              style={{ color: "#1B0B20" }}
            >
              {copy.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="mx-auto max-w-md text-sm leading-7 text-grey md:text-base lg:mx-0">
              {copy.intro}
            </p>

            <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-plum-dark/45">
                {copy.boutiquesLabel}
              </span>
            </div>
          </div>
        </div>

        {/* BOUTIQUES GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {BOUTIQUES.map((boutique) => {
            const imagePosition =
              BOUTIQUE_IMAGE_POSITIONS[boutique.id] ??
              "object-center";

            const image =
              BOUTIQUE_IMAGES[boutique.id] ??
              boutique.image;

            const address =
              BOUTIQUE_ADDRESSES[boutique.id] ??
              boutique.address ??
              "";

            const url = BOUTIQUE_URLS[boutique.id];

            const servicesText =
              boutique.id === "manavgat"
                ? copy.manavgatServices
                : copy.hotelServices;

            return (
              <article
                key={boutique.id}
                className="group relative min-h-[460px] overflow-hidden bg-plum-dark sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px]"
              >
                <Image
                  src={image}
                  alt={boutique.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${imagePosition} transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/95 via-plum-dark/30 to-plum-dark/8" />

                <div className="absolute inset-0 bg-plum-dark/5 transition-colors duration-700 group-hover:bg-plum-dark/12" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-center md:p-8 lg:p-9 lg:text-left">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    {copy.label}
                  </span>

                  <h3
                    className={`mx-auto mt-3 max-w-[580px] font-display leading-[1.02] tracking-[-0.02em] lg:mx-0 ${
                      boutique.id === "manavgat"
                        ? "text-[1.85rem] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]"
                        : "text-[1.85rem] sm:text-3xl md:text-4xl lg:text-[2.65rem]"
                    }`}
                    style={{ color: "#F5EFE6" }}
                  >
                    <BoutiqueTitle
                      id={boutique.id}
                      name={boutique.name}
                    />
                  </h3>

                  {address && (
                    <p className="mx-auto mt-4 max-w-[520px] text-[0.8rem] leading-6 text-brand-white/65 sm:text-[0.82rem] md:text-sm lg:mx-0">
                      {address}
                    </p>
                  )}

                  <div className="mt-6 flex flex-col items-center gap-4 border-t border-brand-white/15 pt-5 lg:flex-row lg:justify-between lg:gap-5">
                    <span className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-brand-white/55 sm:text-[0.58rem] md:text-[0.6rem]">
                      {servicesText}
                    </span>

                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${copy.visitAria} ${boutique.name}`}
                        title={`${copy.visitAria} ${boutique.name}`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-white/25 text-brand-white transition-all duration-500 hover:translate-x-1 hover:border-gold hover:bg-gold hover:text-plum-dark"
                      >
                        <ArrowIcon />
                      </a>
                    ) : (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-white/10 text-brand-white/20">
                        <ArrowIcon />
                      </span>
                    )}
                  </div>
                </div>

                <span className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mx-auto mt-12 max-w-[1000px] text-center md:mt-14">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#1B0B20" }}
          >
            {copy.closingBefore}

            <span style={{ color: "#C8A96A" }}>
              {" "}
              {copy.closingAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}