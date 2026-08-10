type CraftPoint = {
  title: string;
  description: string;
};

type CategoryCraftProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: CraftPoint[];
  closingText: string;
  closingAccent?: string;
  since: string;
};

export default function CategoryCraft({
  eyebrow,
  title,
  description,
  points,
  closingText,
  closingAccent,
  since,
}: CategoryCraftProps) {
  return (
    <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="grid gap-10 border-b border-brand-white/12 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {eyebrow}
            </span>

            <h2
              className="max-w-[980px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#F5EFE6" }}
            >
              {title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
              {description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/40">
                {since}
              </span>
            </div>
          </div>
        </div>

        {/* POINTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <div
              key={`${point.title}-${index}`}
              className="group border-b border-brand-white/12 py-8 md:border-r md:px-6 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-8 bg-brand-white/12 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
              </div>

              <h3
                className="mt-8 font-display text-2xl md:text-3xl"
                style={{ color: "#F5EFE6" }}
              >
                {point.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mx-auto mt-16 max-w-[980px] text-center md:mt-20">
          <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#F5EFE6" }}
          >
            {closingText}

            {closingAccent && (
              <span style={{ color: "#E8D8B5" }}>
                {" "}
                {closingAccent}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}