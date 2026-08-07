const materials = [
  {
    number: "01",
    title: "White Gold",
    subtitle: "Cool brilliance",
    description:
      "Timeless, elegant and versatile — chosen for its refined luminosity.",
  },
  {
    number: "02",
    title: "Yellow Gold",
    subtitle: "Warm heritage",
    description:
      "A classic expression of luxury with a rich, unmistakable warmth.",
  },
  {
    number: "03",
    title: "Rose Gold",
    subtitle: "Soft character",
    description:
      "A contemporary tone with a delicate warmth and distinctive presence.",
  },
  {
    number: "04",
    title: "Platinum",
    subtitle: "Pure endurance",
    description:
      "Exceptional strength, rarity and a naturally refined white finish.",
  },
  {
    number: "05",
    title: "Diamonds",
    subtitle: "Enduring brilliance",
    description:
      "Selected for exceptional light, precision and lasting emotional value.",
  },
  {
    number: "06",
    title: "Precious Stones",
    subtitle: "Colour & individuality",
    description:
      "Distinctive stones chosen for their depth, colour and unique character.",
  },
  {
    number: "07",
    title: "Pearls",
    subtitle: "Natural elegance",
    description:
      "A timeless pleasure, celebrated for softness, lustre and quiet beauty.",
  },
];

export default function Materials() {
  return (
    <section
      id="materials"
      className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-32 lg:py-40"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-7 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              Materials & Stones
            </span>

            <h2
              className="max-w-[850px] font-display leading-[0.93] tracking-[-0.03em]"
              style={{ color: "#F5EFE6" }}
            >
              <span
                className="block text-5xl md:text-6xl lg:text-[4.8rem]"
                style={{ color: "#F5EFE6" }}
              >
                Chosen for their
              </span>

              <span
                className="mt-2 block text-5xl italic md:text-6xl lg:text-[5.2rem]"
                style={{ color: "#E8D8B5" }}
              >
                lasting quality.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-brand-white/65 md:text-base">
              Precious materials are selected not only for beauty, but for
              integrity, longevity and the way they become part of a lifetime.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-brand-white/45">
                LIDYA · SINCE 1989
              </span>
            </div>
          </div>
        </div>

        {/* MATERIALS LIST */}
        <div className="border-t border-brand-white/12">
          {materials.map((material) => (
            <div
              key={material.number}
              className="group relative grid gap-5 border-b border-brand-white/12 py-8 transition-all duration-500 hover:bg-brand-white/[0.035] md:grid-cols-12 md:items-center md:px-4 md:py-10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/4 top-1/2 h-24 w-48 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
              </div>

              {/* Number */}
              <div className="relative md:col-span-1">
                <span className="text-[0.62rem] font-semibold tracking-[0.24em] text-gold/85">
                  {material.number}
                </span>
              </div>

              {/* Material name */}
              <div className="relative md:col-span-4">
                <h3
                  className="font-display text-3xl transition-all duration-500 group-hover:translate-x-1 md:text-4xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {material.title}
                </h3>
              </div>

              {/* Subtitle */}
              <div className="relative md:col-span-3">
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white/45 transition-colors duration-500 group-hover:text-brand-white/70">
                  {material.subtitle}
                </span>
              </div>

              {/* Description */}
              <div className="relative md:col-span-3">
                <p className="max-w-md text-sm leading-6 text-brand-white/60 transition-colors duration-500 group-hover:text-brand-white/80">
                  {material.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="relative hidden justify-end md:col-span-1 md:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-white/20 text-brand-white/60 transition-all duration-500 group-hover:translate-x-1 group-hover:border-gold group-hover:bg-gold group-hover:text-plum-dark">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-20 max-w-[980px] text-center md:mt-28">
          <span className="mx-auto mb-8 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#F5EFE6" }}
          >
            Beauty begins with the material,
            <span style={{ color: "#E8D8B5" }}> value </span>
            begins with how it is chosen.
          </p>
        </div>
      </div>
    </section>
  );
}