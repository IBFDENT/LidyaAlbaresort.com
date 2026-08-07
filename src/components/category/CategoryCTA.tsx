type CategoryCTAProps = {
  title: string;
  sub: string;
};

export default function CategoryCTA({
  title,
  sub,
}: CategoryCTAProps) {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28">
      {/* Ambient detail */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 border-y border-plum-dark/10 py-14 md:py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          {/* TEXT */}
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Private Viewing
            </span>

            <h2
              className="max-w-[820px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-grey md:text-base">
              {sub}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="/#contact"
              className="inline-flex w-full items-center justify-between bg-gold px-7 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light md:w-auto md:min-w-[300px]"
            >
              Book a Private Appointment
              <span>→</span>
            </a>

            <div className="mt-5">
              <a
                href="/"
                className="inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/55 transition-colors hover:text-gold"
              >
                <span>←</span>
                Back to Home
              </a>
            </div>
          </div>
        </div>

        {/* CLOSING LINE */}
        <div className="mx-auto mt-14 max-w-[980px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#1B0B20" }}
          >
            Some pieces are chosen.
            <span style={{ color: "#C8A96A" }}>
              {" "}
              Others simply feel meant for you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}