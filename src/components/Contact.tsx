"use client";

import Image from "next/image";
import ProtectedEmail from "@/components/ProtectedEmail";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const contacts = [
  {
    name: "Zafer (Victor)",
    phone: "+90 532 567 27 77",
    phoneHref: "tel:+905325672777",
    whatsapp: "https://wa.me/905325672777",
    image: "/images/viktor.jpg",
    imagePosition: "object-[50%_28%]",
  },
  {
    name: "Vierka",
    phone: "+90 537 827 85 99",
    phoneHref: "tel:+905378278599",
    whatsapp: "https://wa.me/905378278599",
    image: "/images/vierka.jpg",
    imagePosition: "object-[50%_25%]",
  },
  {
    name: "Benny",
    phone: "+90 537 669 45 84",
    phoneHref: "tel:+905376694584",
    whatsapp: "https://wa.me/905376694584",
    image: "/images/benny.jpg",
    imagePosition: "object-[50%_24%]",
  },
];

const copy: Partial<Record<Locale, { title: string; intro: string; boutiques: string }>> = {
  en: { title: "We would be glad to hear from you", intro: "Personal assistance for jewellery, service, bespoke enquiries and private appointments.", boutiques: "Our boutiques" },
  de: { title: "Wir freuen uns, von Ihnen zu hören", intro: "Persönliche Beratung zu Schmuck, Service, Maßanfertigungen und privaten Terminen.", boutiques: "Unsere Boutiquen" },
  tr: { title: "Sizden haber almaktan memnuniyet duyarız", intro: "Mücevher, servis, özel tasarım ve özel randevular için kişisel destek.", boutiques: "Butiklerimiz" },
  sk: { title: "Radi sa vám ozveme", intro: "Osobná pomoc pri výbere šperkov, servise, zákazkovej výrobe a súkromných termínoch.", boutiques: "Naše butiky" },
  cs: { title: "Rádi se vám ozveme", intro: "Osobní pomoc při výběru šperků, servisu a soukromých termínech.", boutiques: "Naše butiky" },
};

const locations = [
  ["LIDYA JEWELLERY — Manavgat", "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:4, P.K:07600 Manavgat / Türkiye"],
  ["Hotel Alba Resort", "Çolaklı Mahallesi, Manavgat / Antalya / Türkiye"],
  ["Hotel Alba Royal", "Çolaklı Mahallesi, Manavgat / Antalya / Türkiye"],
  ["Hotel Alba Queen", "Çolaklı Mahallesi, Manavgat / Antalya / Türkiye"],
];

export default function Contact() {
  const { locale } = useLanguage();
  const t = copy[locale] ?? copy.en!;

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-ivory py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-44 top-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pr-6">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">Contact</span>
            <h2 className="max-w-[760px] font-display text-5xl leading-[0.95] tracking-[-0.03em] text-plum-dark md:text-6xl lg:text-7xl">{t.title}</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-grey md:text-base">{t.intro}</p>

            <div className="mt-10 border-t border-plum-dark/10">
              {contacts.map((contact) => (
                <div key={contact.name} className="border-b border-plum-dark/10 py-7">
                  <div className="grid gap-5 md:grid-cols-11 md:items-center">
                    <div className="md:col-span-4 flex items-center gap-4">
                      <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-full border border-plum-dark/10 bg-white">
                        <Image src={contact.image} alt={contact.name} fill sizes="92px" className={`object-cover ${contact.imagePosition}`} />
                      </div>
                      <h3 className="font-display text-3xl text-plum-dark">{contact.name}</h3>
                    </div>

                    <div className="md:col-span-4">
                      <a href={contact.phoneHref} className="block text-sm text-plum-dark transition-colors hover:text-gold">{contact.phone}</a>
                      <ProtectedEmail className="mt-2 block text-sm text-grey transition-colors hover:text-gold" />
                    </div>

                    <div className="flex gap-4 md:col-span-3 md:justify-end">
                      <a href={contact.phoneHref} className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark hover:text-gold">Call</a>
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark hover:text-gold">WhatsApp</a>
                      <ProtectedEmail label="Email" className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark hover:text-gold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-plum-dark px-7 py-10 text-brand-white md:px-9">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">Visit us</span>
              <h3 className="mt-4 font-display text-4xl text-[#F5EFE6] md:text-5xl">{t.boutiques}</h3>
              <div className="mt-8 border-t border-brand-white/12">
                {locations.map(([name, detail]) => (
                  <div key={name} className="border-b border-brand-white/12 py-5">
                    <h4 className="font-display text-xl text-[#F5EFE6]">{name}</h4>
                    <p className="mt-2 text-[0.72rem] leading-5 text-brand-white/45">{detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-brand-white/12 pt-8">
                <p className="font-display text-2xl italic text-[#E8D8B5]">Private consultation</p>
                <p className="mt-3 text-sm leading-6 text-brand-white/50">For jewellery, service, bespoke requests and appointments, contact us securely at our official address.</p>
                <ProtectedEmail className="mt-6 inline-flex bg-gold px-6 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition hover:bg-gold-light" label="info@lidyaalbaresort.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
