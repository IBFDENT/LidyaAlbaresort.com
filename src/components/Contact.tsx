import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

const contacts = [
  {
    name: "Zafer (Victor)",
    phone: "+90 532 567 27 77",
    phoneHref: "tel:+905325672777",
    email: "albalidya@hotmail.com",
    whatsapp: "https://wa.me/905325672777",
  },
  {
    name: "Vierka",
    phone: "+90 537 827 8599",
    phoneHref: "tel:+905378278599",
    email: "vierakocaker@hotmail.com",
    whatsapp: "https://wa.me/905378278599",
  },
];

const locations = [
  {
    name: "LIDYA JEWELRY — Manavgat",
    detail: "Antalya Caddesi No: 48, Manavgat / Antalya / Türkiye",
  },
  {
    name: "Hotel Alba Resort",
    detail: "LIDYA Boutique",
  },
  {
    name: "Hotel Alba Royal",
    detail: "LIDYA Boutique",
  },
  {
    name: "Hotel Alba Queen",
    detail: "LIDYA Boutique",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 lg:pr-6">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {dict.contact.eyebrow}
            </span>

            <h2
              className="max-w-[760px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#1B0B20" }}
            >
              {dict.contact.title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-grey md:text-base">
              Personal assistance for jewellery, service, bespoke enquiries
              and private appointments.
            </p>

            <div className="mt-10 border-t border-plum-dark/10">
              {contacts.map((contact, index) => (
                <div
                  key={contact.name}
                  className="group grid gap-5 border-b border-plum-dark/10 py-6 transition-colors duration-500 hover:bg-brand-white/60 md:grid-cols-12 md:items-center md:px-2"
                >
                  <div className="md:col-span-1">
                    <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3
                      className="font-display text-3xl md:text-[2.2rem]"
                      style={{ color: "#1B0B20" }}
                    >
                      {contact.name}
                    </h3>
                  </div>

                  <div className="md:col-span-4">
                    <a
                      href={contact.phoneHref}
                      className="block text-sm text-plum-dark transition-colors duration-300 hover:text-gold"
                    >
                      {contact.phone}
                    </a>

                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block text-sm text-grey transition-colors duration-300 hover:text-gold"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 md:col-span-3 md:justify-end">
                    <a
                      href={contact.phoneHref}
                      className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-colors hover:text-gold"
                    >
                      Call
                    </a>

                    <span className="h-px w-4 bg-plum-dark/15" />

                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-colors hover:text-gold"
                    >
                      WhatsApp
                    </a>

                    <span className="h-px w-4 bg-plum-dark/15" />

                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-colors hover:text-gold"
                    >
                      Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-plum-dark px-7 py-8 md:px-9 md:py-10 lg:px-10 lg:py-11">
              {/* subtle panel glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

              <div className="relative">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">
                  Visit us
                </span>

                <h3
                  className="mt-4 font-display text-4xl leading-tight md:text-5xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Our boutiques
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-brand-white/55">
                  Discover LIDYA in Manavgat and at selected Alba Hotels.
                </p>

                <div className="mt-8 border-t border-brand-white/12">
                  {locations.map((location, index) => (
                    <div
                      key={location.name}
                      className="group flex items-center justify-between gap-5 border-b border-brand-white/12 py-4"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-1 text-[0.56rem] font-semibold tracking-[0.22em] text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h4
                            className="font-display text-lg md:text-xl"
                            style={{ color: "#F5EFE6" }}
                          >
                            {location.name}
                          </h4>

                          <p className="mt-1 text-[0.72rem] leading-5 text-brand-white/40">
                            {location.detail}
                          </p>
                        </div>
                      </div>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-white/15 text-xs text-brand-white/45 opacity-0 transition-all duration-400 group-hover:translate-x-1 group-hover:border-gold group-hover:text-gold group-hover:opacity-100">
                        →
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-brand-white/12 pt-7">
                  <p
                    className="font-display text-2xl italic leading-snug md:text-3xl"
                    style={{ color: "#E8D8B5" }}
                  >
                    Prefer a private consultation?
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-brand-white/50">
                    Arrange a personal appointment at a time that suits you.
                  </p>

                  <a
                    href="tel:+905325672777"
                    className="mt-6 inline-flex w-full items-center justify-between bg-gold px-6 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light md:w-auto md:min-w-[260px]"
                  >
                    Private appointment
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}