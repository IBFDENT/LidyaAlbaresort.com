import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

export default function Contact() {
  return (
    <section id="contact" className="py-26 bg-brand-white">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-16">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {dict.contact.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl">{dict.contact.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded bg-ivory p-8 shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)]">
            <h4 className="text-xl">{dict.contact.team}</h4>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                Zafer (Victor) —{" "}
                <a href="tel:+905325672777" className="text-plum-dark hover:text-gold">
                  +90 532 567 27 77
                </a>
              </p>
              <p>
                <a
                  href="mailto:albalidya@hotmail.com"
                  className="text-plum-dark hover:text-gold"
                >
                  albalidya@hotmail.com
                </a>
              </p>
              <p>
                Vierka —{" "}
                <a href="tel:+905378278599" className="text-plum-dark hover:text-gold">
                  +90 537 827 8599
                </a>
              </p>
              <p>
                <a
                  href="mailto:vierakocaker@hotmail.com"
                  className="text-plum-dark hover:text-gold"
                >
                  vierakocaker@hotmail.com
                </a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+905325672777"
                className="btn-magnetic inline-flex items-center justify-center rounded-sm bg-plum-dark px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-white"
              >
                {dict.contact.call}
              </a>
              <a
                href="https://wa.me/905325672777"
                target="_blank"
                rel="noopener"
                className="btn-magnetic inline-flex items-center justify-center rounded-sm bg-gold px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-gold-light"
              >
                WhatsApp — Zafer
              </a>
              <a
                href="https://wa.me/905378278599"
                target="_blank"
                rel="noopener"
                className="btn-magnetic inline-flex items-center justify-center rounded-sm bg-gold px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-gold-light"
              >
                WhatsApp — Vierka
              </a>
              <a
                href="mailto:albalidya@hotmail.com"
                className="btn-magnetic inline-flex items-center justify-center rounded-sm border border-plum-dark px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-plum-dark hover:text-brand-white"
              >
                {dict.contact.email}
              </a>
            </div>
          </div>

          <div className="rounded bg-ivory p-8 shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)]">
            <h4 className="text-xl">{dict.contact.locations}</h4>
            <div className="mt-4 space-y-2 text-sm text-ink">
              <p>Antalya Caddesi No: 48, Manavgat / Antalya / Türkiye</p>
              <p>Hotel Alba Resort</p>
              <p>Hotel Alba Royal</p>
              <p>Hotel Alba Queen</p>
            </div>
            <div className="mt-6">
              <button className="btn-magnetic inline-flex items-center justify-center rounded-sm bg-plum-dark px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-white">
                {dict.nav.book}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
