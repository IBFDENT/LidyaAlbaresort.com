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
    closingAccent: "Miesto, kde si vyberiete niečo s trvalou hodnotou.",
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
    closingAccent: "Místo, kde si vyberete něco s trvalou hodnotou.",
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
    closingAccent: "Egy hely, ahol maradandó értéket választhat.",
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
    closingAccent: "Miejsce, w którym wybierasz coś o trwałej wartości.",
    visitAria: "Odwiedź stronę:",
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
      className="relative overflow-hidden bg-ivory py-24 md:py-30 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-14 grid gap-8 lg:mb-18 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="max-w-[900px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#1B0B20" }}
            >
              {copy.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-grey md:text-base">
              {copy.intro}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-plum-dark/45">
                {copy.boutiquesLabel}
              </span>
            </div>
          </div>
        </div>

        {/* BOUTIQUES GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {BOUTIQUES.map((boutique, index) => {
            const imagePosition =
              BOUTIQUE_IMAGE_POSITIONS[boutique.id] ?? "object-center";

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
                className="group relative min-h-[500px] overflow-hidden bg-plum-dark md:min-h-[540px] lg:min-h-[580px]"
              >
                <Image
                  src={boutique.image}
                  alt={boutique.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${imagePosition} transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/95 via-plum-dark/28 to-plum-dark/5" />
                <div className="absolute inset-0 bg-plum-dark/5 transition-colors duration-700 group-hover:bg-plum-dark/12" />

                <span className="absolute right-6 top-6 z-10 text-[0.62rem] font-semibold tracking-[0.24em] text-brand-white/55 md:right-8 md:top-8">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-9">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    {copy.label}
                  </span>

                  <h3
                    className={`mt-3 max-w-[580px] font-display leading-[1.02] tracking-[-0.02em] ${
                      boutique.id === "manavgat"
                        ? "text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]"
                        : "text-3xl md:text-4xl lg:text-[2.65rem]"
                    }`}
                    style={{ color: "#F5EFE6" }}
                  >
                    <BoutiqueTitle
                      id={boutique.id}
                      name={boutique.name}
                    />
                  </h3>

                  {address && (
                    <p className="mt-4 max-w-[520px] text-[0.82rem] leading-6 text-brand-white/65 md:text-sm">
                      {address}
                    </p>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-5 border-t border-brand-white/15 pt-5">
                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-brand-white/55 md:text-[0.6rem]">
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