import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum-dark text-brand-white/80">
      <div className="mx-auto max-w-[1320px] px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <Image
            src="/images/logo.jpg"
            alt="LIDYA JEWELRY"
            width={141}
            height={44}
            className="h-11 w-auto bg-brand-white px-2 py-1 rounded-sm"
          />
          <p className="mt-4 max-w-xs text-sm">{dict.footer.tagline}</p>
        </div>

        <div>
          <h5 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {dict.footer.nav}
          </h5>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/#collections" className="hover:text-gold">
              {dict.nav.collections}
            </Link>
            <Link href="/#services" className="hover:text-gold">
              {dict.nav.services}
            </Link>
            <Link href="/#catalog" className="hover:text-gold">
              {dict.nav.bespoke}
            </Link>
            <Link href="/#boutiques" className="hover:text-gold">
              {dict.nav.boutiques}
            </Link>
            <Link href="/#contact" className="hover:text-gold">
              {dict.nav.contact}
            </Link>
          </div>
        </div>

        <div>
          <h5 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {dict.footer.legal}
          </h5>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="#" className="hover:text-gold">
              {dict.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-gold">
              {dict.footer.terms}
            </Link>
            <Link href="#" className="hover:text-gold">
              {dict.footer.cookies}
            </Link>
          </div>
        </div>

        <div>
          <h5 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {dict.footer.contact}
          </h5>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <div>
              <span className="block">Zafer (Victor): +90 532 567 27 77</span>
              <a href="mailto:albalidya@hotmail.com" className="hover:text-gold">
                albalidya@hotmail.com
              </a>
            </div>
            <div>
              <span className="block">Vierka: +90 537 827 8599</span>
              <a href="mailto:vierakocaker@hotmail.com" className="hover:text-gold">
                vierakocaker@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-white/10">
        <div className="mx-auto max-w-[1320px] px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-brand-white/60">
          <span>
            © {year} LIDYA JEWELRY. {dict.footer.rights}
          </span>
          <span>{dict.footer.since}</span>
        </div>
      </div>
    </footer>
  );
}
