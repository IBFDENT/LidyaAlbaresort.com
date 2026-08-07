import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { BOUTIQUES } from "@/lib/content";

const dict = getDictionary();

export default function Boutiques() {
  return (
    <section id="boutiques" className="py-26">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-16 text-center mx-auto">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.boutiques.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl">{dict.boutiques.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUTIQUES.map((b) => (
            <div
              key={b.id}
              className="rounded overflow-hidden bg-brand-white shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg leading-snug">{b.name}</h3>
                {b.address && <p className="mt-1 text-xs text-grey">{b.address}</p>}
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-gold">
                  {dict.boutiques.servicesLine}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
