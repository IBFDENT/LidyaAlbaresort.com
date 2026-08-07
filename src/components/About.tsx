import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { ABOUT_BODY_EN, ABOUT_VALUES_EN } from "@/lib/content";

const dict = getDictionary();

export default function About() {
  return (
    <section id="about" className="bg-plum-dark py-26">
      <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded overflow-hidden">
          <Image
            src="/images/craftsmanship.jpg"
            alt="Goldsmith at work"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="text-brand-white">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.about.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-white">{dict.about.title}</h2>
          <p className="mt-4 text-lg italic text-gold-light">{dict.about.lead}</p>

          <div className="mt-6 space-y-4">
            {ABOUT_BODY_EN.map((p, i) => (
              <p key={i} className="text-sm text-brand-white/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <p className="mt-8 text-sm text-brand-white/90">
            {dict.about.signoff}
            <br />
            Metin TANIR{" "}
            <small className="text-brand-white/60">— {dict.about.role}</small>
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-brand-white/15 pt-6">
            {ABOUT_VALUES_EN.map((v) => (
              <span
                key={v}
                className="text-[0.68rem] uppercase tracking-[0.16em] text-gold"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
