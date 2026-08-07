import { getDictionary, LOCALE } from "@/lib/i18n";
import { MATERIALS, localized } from "@/lib/content";

const dict = getDictionary();

export default function Materials() {
  return (
    <section className="py-0 pb-26">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-16">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.materials.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl">{dict.materials.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {MATERIALS.map((m) => (
            <a
              key={m.id}
              href="#catalog"
              className="block rounded bg-brand-white px-6 py-7 shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-gold text-lg">
                {m.icon}
              </div>
              <h4 className="text-xl">{localized(m.name, LOCALE)}</h4>
              <p className="mt-1 text-sm text-grey">{localized(m.description, LOCALE)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
