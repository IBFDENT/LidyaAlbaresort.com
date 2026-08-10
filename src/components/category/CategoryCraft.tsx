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
    <section className="relative overflow-hidden bg-plum-dark py-20 text-brand-white md:py-24 lg:py-28">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />

      <div className="pointer-events-none absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* =================================================
            INTRO
        ================================================== */}
        <div className="mx-auto max-w-[980px] border-b border-brand-white/12 pb-12 text-center md:pb-14 lg:pb-16">
          <span className="mb-5 block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
            {eyebrow}
          </span>

          <h2
            className="
              mx-auto
              max-w-[900px]
              font-display
              text-[2.35rem]
              leading-[0.98]
              tracking-[-0.03em]
              md:text-5xl
              lg:text-6xl
            "
            style={{ color: "#F5EFE6" }}
          >
            {title}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-sm
              leading-7
              text-brand-white/55
              md:text-base
            "
          >
            {description}
          </p>

          {/* SINCE */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />

            <span className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-brand-white/40 md:text-[0.58rem] md:tracking-[0.24em]">
              {since}
            </span>

            <span className="h-px w-12 bg-gold" />
          </div>
        </div>

        {/* =================================================
            CRAFT POINTS
        ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <div
              key={`${point.title}-${index}`}
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                border-b
                border-brand-white/12
                py-10
                text-center

                md:min-h-[300px]
                md:border-r
                md:px-7
                md:py-12

                lg:min-h-[330px]
                lg:border-b-0
                lg:px-8
                lg:py-14

                lg:first:pl-0
                lg:last:border-r-0
                lg:last:pr-0
              "
            >
              {/* DECORATIVE LINE */}
              <span
                className="
                  mb-7
                  block
                  h-px
                  w-10
                  bg-brand-white/15
                  transition-all
                  duration-500
                  group-hover:w-16
                  group-hover:bg-gold
                "
              />

              {/* POINT TITLE */}
              <h3
                className="
                  font-display
                  text-2xl
                  leading-tight
                  md:text-3xl
                "
                style={{ color: "#F5EFE6" }}
              >
                {point.title}
              </h3>

              {/* POINT DESCRIPTION */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[300px]
                  text-sm
                  leading-7
                  text-brand-white/60
                "
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* =================================================
            CLOSING STATEMENT
        ================================================== */}
        <div className="mx-auto mt-14 max-w-[980px] text-center md:mt-16 lg:mt-20">
          <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

          <p
            className="
              font-display
              text-[1.9rem]
              italic
              leading-[1.12]
              md:text-4xl
              md:leading-tight
              lg:text-5xl
            "
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