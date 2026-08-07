import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-plum-dark text-brand-white"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* BRAND FINALE */}
        <div className="border-b border-brand-white/12 py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Image
                src="/images/logo.png"
                alt="LIDYA JEWELRY"
                width={520}
                height={220}
                className="h-[96px] w-auto object-contain brightness-[3.2] saturate-0 md:h-[112px]"
              />

              <div className="mt-8 max-w-[900px]">
                <p
                  className="font-display text-4xl italic leading-[1.02] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Jewellery of lasting value.
                </p>

                <p
                  className="mt-2 font-display text-3xl italic leading-[1.02] md:text-4xl lg:text-5xl"
                  style={{ color: "#E8D8B5" }}
                >
                  Since 1989.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                LIDYA JEWELRY
              </span>

              <p className="mt-4 max-w-sm text-sm leading-6 text-brand-white/65 lg:ml-auto">
                Handcrafted jewellery, personal service and enduring
                craftsmanship in Manavgat and selected Alba Hotels.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER NAV */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* NAVIGATE */}
          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {dict.footer.nav}
            </h5>

            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-white/70">
              <Link
                href="/#collections"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.collections}
              </Link>

              <Link
                href="/#services"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.services}
              </Link>

              <Link
                href="/#catalog"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.bespoke}
              </Link>

              <Link
                href="/#boutiques"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.boutiques}
              </Link>

              <Link
                href="/#contact"
                className="transition-colors hover:text-gold"
              >
                {dict.nav.contact}
              </Link>
            </div>
          </div>

          {/* BOUTIQUES */}
          <div className="lg:col-span-3">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Boutiques
            </h5>

            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-white/70">
              <span>LIDYA JEWELRY — Manavgat</span>
              <span>Hotel Alba Resort</span>
              <span>Hotel Alba Royal</span>
              <span>Hotel Alba Queen</span>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {dict.footer.contact}
            </h5>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <p
                  className="font-display text-xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Zafer (Victor)
                </p>

                <a
                  href="tel:+905325672777"
                  className="mt-2 block text-sm text-brand-white/70 transition-colors hover:text-gold"
                >
                  +90 532 567 27 77
                </a>

                <a
                  href="mailto:albalidya@hotmail.com"
                  className="mt-1 block text-sm text-brand-white/55 transition-colors hover:text-gold"
                >
                  albalidya@hotmail.com
                </a>
              </div>

              <div>
                <p
                  className="font-display text-xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Vierka
                </p>

                <a
                  href="tel:+905378278599"
                  className="mt-2 block text-sm text-brand-white/70 transition-colors hover:text-gold"
                >
                  +90 537 827 8599
                </a>

                <a
                  href="mailto:vierakocaker@hotmail.com"
                  className="mt-1 block text-sm text-brand-white/55 transition-colors hover:text-gold"
                >
                  vierakocaker@hotmail.com
                </a>
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div className="lg:col-span-2">
            <h5 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
              {dict.footer.legal}
            </h5>

            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-white/70">
              <Link href="#" className="transition-colors hover:text-gold">
                {dict.footer.privacy}
              </Link>

              <Link href="#" className="transition-colors hover:text-gold">
                {dict.footer.terms}
              </Link>

              <Link href="#" className="transition-colors hover:text-gold">
                {dict.footer.cookies}
              </Link>
            </div>
          </div>
        </div>

        {/* SOCIAL + APPOINTMENT */}
        <div className="grid gap-8 border-t border-brand-white/12 py-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Follow LIDYA
            </span>

            <div className="mt-4 flex items-center gap-6">
              <a
                href="#"
                className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Instagram
              </a>

              <span className="h-px w-5 bg-brand-white/15" />

              <a
                href="#"
                className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Facebook
              </a>

              <span className="h-px w-5 bg-brand-white/15" />

              <a
                href="https://wa.me/905325672777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-white/65 transition-colors hover:text-gold"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-6 border border-brand-white/25 px-7 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-plum-dark"
            >
              Private appointment
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-brand-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-8 text-[0.68rem] text-brand-white/45 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16 xl:px-20">
          <span>
            © {year} LIDYA JEWELRY. {dict.footer.rights}
          </span>

          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-gold/60" />
            <span className="uppercase tracking-[0.22em]">
              Since 1989
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}