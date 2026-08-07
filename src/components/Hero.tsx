import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero relative flex items-end min-h-[640px] h-screen overflow-hidden bg-plum-dark"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.08]"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        />
        <div className="hero-glint absolute inset-0 pointer-events-none" />
        <div className="relative z-[2] mx-auto max-w-[1320px] w-full px-6 pb-26 text-brand-white">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.hero.eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl">LIDYA JEWELRY</h1>
          <p className="mt-4 text-xl md:text-2xl font-light italic">{dict.hero.lead}</p>
          <p className="mt-3 max-w-lg text-sm md:text-base text-brand-white/80">
            {dict.hero.sub}
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="/#collections"
              className="btn-magnetic inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-gold-light"
            >
              {dict.hero.cta1}
            </a>
            <button className="btn-magnetic inline-flex items-center justify-center rounded-sm border border-brand-white px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-white hover:bg-brand-white hover:text-plum-dark">
              {dict.hero.cta2}
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-brand-white/80">
          <span className="block w-px h-10 bg-brand-white/60" />
        </div>
      </section>

      <div className="bg-plum text-brand-white">
        <div className="mx-auto max-w-[1320px] px-6 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-[0.72rem] uppercase tracking-[0.12em]">
          <span>{dict.strip.since}</span>
          <span>{dict.strip.handcrafted}</span>
          <span>{dict.strip.bespoke}</span>
          <span>{dict.strip.service}</span>
          <span>{dict.strip.hotels}</span>
        </div>
      </div>
    </>
  );
}
