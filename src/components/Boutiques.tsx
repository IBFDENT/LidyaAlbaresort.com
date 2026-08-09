import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { BOUTIQUES } from "@/lib/content";

const dict = getDictionary();

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
  return (
    <section
      id="boutiques"
      className="relative overflow-hidden bg-ivory py-24 md:py-30 lg:py-32"
    >
      {/* Ambient detail */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-14 grid gap-8 lg:mb-18 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {dict.boutiques.eyebrow}
            </span>

            <h2
              className="max-w-[900px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#1B0B20" }}
            >
              {dict.boutiques.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-grey md:text-base">
              Visit LIDYA in person and discover our collections,
              craftsmanship and personal service in a setting designed around
              you.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-plum-dark/45">
                LIDYA BOUTIQUES
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
                ? dict.boutiques.servicesLine
                : "BOUTIQUE · HOTEL · RESERVATIONS";

            return (
              <article
                key={boutique.id}
                className="group relative min-h-[500px] overflow-hidden bg-plum-dark md:min-h-[540px] lg:min-h-[580px]"
              >
                {/* IMAGE */}
                <Image
                  src={boutique.image}
                  alt={boutique.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${imagePosition} transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]`}
                />

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/95 via-plum-dark/28 to-plum-dark/5" />

                <div className="absolute inset-0 bg-plum-dark/5 transition-colors duration-700 group-hover:bg-plum-dark/12" />

                {/* NUMBER */}
                <span className="absolute right-6 top-6 z-10 text-[0.62rem] font-semibold tracking-[0.24em] text-brand-white/55 md:right-8 md:top-8">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-9">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    Boutique
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

                  {/* FOOTER */}
                  <div className="mt-6 flex items-center justify-between gap-5 border-t border-brand-white/15 pt-5">
                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-brand-white/55 md:text-[0.6rem]">
                      {servicesText}
                    </span>

                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${boutique.name} website`}
                        title={`Visit ${boutique.name}`}
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

                {/* GOLD HOVER LINE */}
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
            More than a boutique.
            <span style={{ color: "#C8A96A" }}>
              {" "}
              A place to choose something lasting.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}