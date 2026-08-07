import { getDictionary } from "@/lib/i18n";
import { SERVICE_GROUPS } from "@/lib/content";

const dict = getDictionary();

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-white py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-48 top-10 h-[380px] w-[380px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-4 block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-gold">
              {dict.services.eyebrow}
            </span>

            <h2
              className="max-w-[820px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {dict.services.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-sm leading-6 text-grey md:text-[0.95rem]">
              {dict.services.sub}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/45">
                PERSONAL SERVICE · SINCE 1989
              </span>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="border-t border-plum-dark/10">
          {SERVICE_GROUPS.map((group, index) => (
            <div
              key={group.letter}
              className="group grid gap-5 border-b border-plum-dark/10 py-6 transition-colors duration-400 hover:bg-ivory/60 md:grid-cols-12 md:items-start md:px-3 md:py-7"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <span className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
                  {group.letter}
                </span>

                <h3
                  className="font-display text-[2rem] leading-tight transition-transform duration-400 group-hover:translate-x-1 md:text-[2.15rem] lg:text-[2.3rem]"
                  style={{ color: "#1B0B20" }}
                >
                  {group.title.en}
                </h3>

                <p className="mt-2 max-w-sm text-[0.82rem] leading-5 text-grey">
                  {group.note.en}
                </p>
              </div>

              {/* Items */}
              <div className="md:col-span-7 md:pl-3">
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-plum-dark/8 pb-2 text-[0.82rem] leading-5 text-ink"
                    >
                      <span className="mt-[0.58rem] h-px w-4 shrink-0 bg-gold/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mx-auto mt-14 max-w-[900px] text-center md:mt-18">
          <span className="mx-auto mb-6 block h-px w-12 bg-gold" />

          <p
            className="font-display text-2xl italic leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#1B0B20" }}
          >
            Jewellery is personal.
            <span style={{ color: "#C8A96A" }}>
              {" "}
              Service should be too.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}