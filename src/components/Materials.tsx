type MaterialKind =
  | "white-gold"
  | "yellow-gold"
  | "rose-gold"
  | "platinum"
  | "diamond"
  | "precious-stone"
  | "pearl";

const materials: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  kind: MaterialKind;
}[] = [
  {
    number: "01",
    title: "White Gold",
    subtitle: "Cool brilliance",
    description:
      "Timeless, elegant and versatile — chosen for its refined luminosity.",
    kind: "white-gold",
  },
  {
    number: "02",
    title: "Yellow Gold",
    subtitle: "Warm heritage",
    description:
      "A classic expression of luxury with a rich, unmistakable warmth.",
    kind: "yellow-gold",
  },
  {
    number: "03",
    title: "Rose Gold",
    subtitle: "Soft character",
    description:
      "A contemporary tone with a delicate warmth and distinctive presence.",
    kind: "rose-gold",
  },
  {
    number: "04",
    title: "Platinum",
    subtitle: "Pure endurance",
    description:
      "Exceptional strength, rarity and a naturally refined white finish.",
    kind: "platinum",
  },
  {
    number: "05",
    title: "Diamonds",
    subtitle: "Enduring brilliance",
    description:
      "Selected for exceptional light, precision and lasting emotional value.",
    kind: "diamond",
  },
  {
    number: "06",
    title: "Precious Stones",
    subtitle: "Colour & individuality",
    description:
      "Distinctive stones chosen for their depth, colour and unique character.",
    kind: "precious-stone",
  },
  {
    number: "07",
    title: "Pearls",
    subtitle: "Natural elegance",
    description:
      "A timeless pleasure, celebrated for softness, lustre and quiet beauty.",
    kind: "pearl",
  },
];

function MetallicMedallion({
  type,
}: {
  type: "white-gold" | "yellow-gold" | "rose-gold" | "platinum";
}) {
  const styles = {
    "white-gold": {
      background:
        "conic-gradient(from 25deg, #ffffff, #bfc2c6, #f7f7f5, #969ba1, #ffffff, #c7c9cc, #ffffff)",
      shadow: "0 0 26px rgba(235,238,240,0.22)",
      border: "rgba(255,255,255,0.55)",
    },
    "yellow-gold": {
      background:
        "conic-gradient(from 25deg, #fff1a8, #b98022, #f7d46c, #9c6817, #fff0a0, #c68d29, #f7d46c)",
      shadow: "0 0 30px rgba(200,169,106,0.32)",
      border: "rgba(241,211,141,0.62)",
    },
    "rose-gold": {
      background:
        "conic-gradient(from 25deg, #ffd4bd, #b87557, #efb69b, #9f5e48, #ffd0b7, #c98466, #f2bda3)",
      shadow: "0 0 28px rgba(226,155,125,0.25)",
      border: "rgba(255,200,177,0.52)",
    },
    platinum: {
      background:
        "conic-gradient(from 25deg, #ffffff, #92969a, #e7e7e5, #70757a, #ffffff, #a9adb0, #f0f0ee)",
      shadow: "0 0 28px rgba(224,227,228,0.2)",
      border: "rgba(255,255,255,0.48)",
    },
  } as const;

  const style = styles[type];

  return (
    <span
      className="relative block h-11 w-11 rounded-full transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[12deg] md:h-12 md:w-12"
      style={{
        background: style.background,
        boxShadow: style.shadow,
        border: `1px solid ${style.border}`,
      }}
    >
      {/* metallic reflection */}
      <span
        className="absolute inset-[2px] rounded-full opacity-80"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 30%, transparent 60%, rgba(255,255,255,0.18) 100%)",
        }}
      />

      {/* centre highlight */}
      <span
        className="absolute left-1/2 top-1/2 h-[1px] w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] opacity-30"
        style={{ background: "rgba(255,255,255,0.95)" }}
      />
    </span>
  );
}

function DiamondMark() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-110">
      <span className="absolute inset-1 rounded-full bg-brand-white/5 blur-md transition-all duration-700 group-hover:bg-brand-white/15" />

      <svg
        viewBox="0 0 64 64"
        className="relative h-11 w-11 overflow-visible drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="diamond-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#D8E0E6" />
            <stop offset="100%" stopColor="#8F9BA5" />
          </linearGradient>

          <linearGradient id="diamond-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7F8F8" />
            <stop offset="100%" stopColor="#A8B2BA" />
          </linearGradient>

          <linearGradient id="diamond-right" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#BBC4CA" />
          </linearGradient>
        </defs>

        <polygon
          points="12,22 20,12 44,12 52,22 32,53"
          fill="url(#diamond-top)"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
        />

        <polygon
          points="12,22 25,22 32,53"
          fill="url(#diamond-left)"
          opacity="0.88"
        />

        <polygon
          points="25,22 39,22 32,53"
          fill="#EEF2F4"
          opacity="0.9"
        />

        <polygon
          points="39,22 52,22 32,53"
          fill="url(#diamond-right)"
          opacity="0.82"
        />

        <polyline
          points="20,12 25,22 32,12 39,22 44,12"
          fill="none"
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1"
        />

        <line
          x1="12"
          y1="22"
          x2="52"
          y2="22"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1"
        />
      </svg>
    </span>
  );
}

function BrilliantMark() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-all duration-700 ease-out group-hover:rotate-[18deg] group-hover:scale-110">
      <span className="absolute inset-1 rounded-full bg-brand-white/5 blur-md transition-all duration-700 group-hover:bg-brand-white/15" />

      <svg
        viewBox="0 0 64 64"
        className="relative h-11 w-11 drop-shadow-[0_0_12px_rgba(255,255,255,0.16)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="brilliant-core">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor="#E9EEF1" />
            <stop offset="100%" stopColor="#9FAAB2" />
          </radialGradient>
        </defs>

        <circle
          cx="32"
          cy="32"
          r="23"
          fill="url(#brilliant-core)"
          stroke="rgba(255,255,255,0.75)"
        />

        <polygon
          points="32,9 40,18 32,32 24,18"
          fill="#FFFFFF"
          opacity="0.8"
        />

        <polygon
          points="55,32 46,40 32,32 46,24"
          fill="#BAC5CC"
          opacity="0.82"
        />

        <polygon
          points="32,55 24,46 32,32 40,46"
          fill="#E9EEF1"
          opacity="0.78"
        />

        <polygon
          points="9,32 18,24 32,32 18,40"
          fill="#A9B4BC"
          opacity="0.82"
        />

        <polygon
          points="18,18 32,32 24,18"
          fill="#CBD4D9"
          opacity="0.9"
        />

        <polygon
          points="46,18 40,18 32,32"
          fill="#F7F9FA"
          opacity="0.95"
        />

        <polygon
          points="46,46 32,32 40,46"
          fill="#AEB9C0"
          opacity="0.82"
        />

        <polygon
          points="18,46 24,46 32,32"
          fill="#F6F8F9"
          opacity="0.9"
        />

        <circle
          cx="32"
          cy="32"
          r="7"
          fill="#FFFFFF"
          opacity="0.7"
        />

        <circle
          cx="32"
          cy="32"
          r="22"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
        />
      </svg>
    </span>
  );
}

function PearlMark() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-110">
      <span
        className="block h-10 w-10 rounded-full border border-white/40 md:h-11 md:w-11"
        style={{
          background:
            "radial-gradient(circle at 32% 27%, #ffffff 0%, #f6f1e9 22%, #d8d0c4 58%, #aaa196 82%, #7e776f 100%)",
          boxShadow:
            "0 0 28px rgba(255,248,235,0.22), inset -7px -8px 12px rgba(90,80,72,0.17), inset 7px 7px 12px rgba(255,255,255,0.55)",
        }}
      />

      <span className="absolute left-[13px] top-[11px] h-2.5 w-2.5 rounded-full bg-white/65 blur-[1px]" />
    </span>
  );
}

function MaterialSymbol({ kind }: { kind: MaterialKind }) {
  if (
    kind === "white-gold" ||
    kind === "yellow-gold" ||
    kind === "rose-gold" ||
    kind === "platinum"
  ) {
    return <MetallicMedallion type={kind} />;
  }

  if (kind === "diamond") {
    return <DiamondMark />;
  }

  if (kind === "precious-stone") {
    return <BrilliantMark />;
  }

  return <PearlMark />;
}

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

                <div className="absolute right-0 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-brand-white/[0.035] blur-2xl" />
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

              {/* Material symbol */}
              <div className="relative hidden justify-end md:col-span-1 md:flex">
                <MaterialSymbol kind={material.kind} />
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