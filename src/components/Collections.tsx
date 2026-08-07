import Image from "next/image";
import { getDictionary, LOCALE } from "@/lib/i18n";
import { COLLECTIONS, localized } from "@/lib/content";

const dict = getDictionary();

const CATEGORY_LINKS: Partial<Record<string, string>> = {
  pearls: "/pearls",
  wedding: "/wedding-rings",
  brilliants: "/brilliants",
};

export default function Collections() {
  return (
    <section id="collections" className="py-26">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-16 text-center mx-auto">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.collections.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl">{dict.collections.title}</h2>
          <p className="mt-4 text-grey">{dict.collections.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS.map((c) => (
            <a
              key={c.id}
              href={CATEGORY_LINKS[c.id] ?? "#catalog"}
              className="cat-card group relative block aspect-[4/3] rounded overflow-hidden bg-plum-dark shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)]"
            >
              <Image
                src={c.image}
                alt={localized(c.name, LOCALE)}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/85 via-plum-dark/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                  {dict.nav.collections}
                </span>
                <h3 className="mt-1 text-2xl text-brand-white">{localized(c.name, LOCALE)}</h3>
                <p className="mt-1 text-sm text-brand-white/75">
                  {localized(c.description, LOCALE)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
