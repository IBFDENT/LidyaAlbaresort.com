import { getDictionary } from "@/lib/i18n";
import { SERVICE_GROUPS } from "@/lib/content";

const dict = getDictionary();

export default function Services() {
  return (
    <section id="services" className="py-26 bg-brand-white">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-16 text-center mx-auto">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.services.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl">{dict.services.title}</h2>
          <p className="mt-4 text-grey">{dict.services.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_GROUPS.map((g) => (
            <div
              key={g.letter}
              className="rounded bg-ivory p-7 shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)]"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                {g.letter}
              </span>
              <h3 className="mt-2 text-2xl">{g.title.en}</h3>
              <p className="mt-1 text-sm text-grey">{g.note.en}</p>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
