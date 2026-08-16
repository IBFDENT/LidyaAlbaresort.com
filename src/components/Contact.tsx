"use client";

import Image from "next/image";
import ProtectedEmail from "@/components/ProtectedEmail";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const contacts = [
  {
    name: "Zafer (Victor)",
    languages: "Türkçe · English",
    phone: "+90 532 567 27 77",
    phoneHref: "tel:+905325672777",
    whatsapp: "https://wa.me/905325672777",
    image: "/images/viktor.jpg",
    imagePosition: "object-[50%_28%]",
  },
  {
    name: "Vierka",
    languages: "Türkçe · Slovak",
    phone: "+90 537 827 85 99",
    phoneHref: "tel:+905378278599",
    whatsapp: "https://wa.me/905378278599",
    image: "/images/vierka.jpg",
    imagePosition: "object-[50%_25%]",
  },
  {
    name: "Benny",
    languages: "Türkçe · Deutsch",
    phone: "+90 537 669 45 84",
    phoneHref: "tel:+905376694584",
    whatsapp: "https://wa.me/905376694584",
    image: "/images/benny.jpg",
    imagePosition: "object-[50%_24%]",
  },
];

type ContactCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  call: string;
  email: string;
  visitUs: string;
  boutiques: string;
  privateTitle: string;
  privateText: string;
};

const copy: Record<Locale, ContactCopy> = {
  de: { eyebrow: "Kontakt", title: "Wir freuen uns, von Ihnen zu hören", intro: "Persönliche Beratung zu Schmuck, Service, Maßanfertigungen und privaten Terminen.", call: "Anrufen", email: "E-Mail", visitUs: "Besuchen Sie uns", boutiques: "Unsere Boutiquen", privateTitle: "Private Beratung", privateText: "Für Schmuck, Service, Maßanfertigungen und Termine kontaktieren Sie uns sicher über unsere offizielle Adresse." },
  en: { eyebrow: "Contact", title: "We would be glad to hear from you", intro: "Personal assistance for jewellery, service, bespoke enquiries and private appointments.", call: "Call", email: "Email", visitUs: "Visit us", boutiques: "Our boutiques", privateTitle: "Private consultation", privateText: "For jewellery, service, bespoke requests and appointments, contact us securely at our official address." },
  tr: { eyebrow: "İletişim", title: "Sizden haber almaktan memnuniyet duyarız", intro: "Mücevher, servis, özel tasarım talepleri ve özel randevular için kişisel destek.", call: "Ara", email: "E-posta", visitUs: "Bizi ziyaret edin", boutiques: "Butiklerimiz", privateTitle: "Özel danışmanlık", privateText: "Mücevher, servis, özel tasarım talepleri ve randevular için resmi adresimiz üzerinden bizimle güvenli şekilde iletişime geçin." },
  sk: { eyebrow: "Kontakt", title: "Radi sa vám ozveme", intro: "Osobná pomoc pri výbere šperkov, servise, zákazkovej výrobe a súkromných termínoch.", call: "Zavolať", email: "E-mail", visitUs: "Navštívte nás", boutiques: "Naše butiky", privateTitle: "Súkromná konzultácia", privateText: "Pre šperky, servis, zákazkovú výrobu a termíny nás bezpečne kontaktujte na našej oficiálnej adrese." },
  cs: { eyebrow: "Kontakt", title: "Rádi se vám ozveme", intro: "Osobní pomoc při výběru šperků, servisu, zakázkové výrobě a soukromých termínech.", call: "Zavolat", email: "E-mail", visitUs: "Navštivte nás", boutiques: "Naše butiky", privateTitle: "Soukromá konzultace", privateText: "Pro šperky, servis, zakázkovou výrobu a termíny nás bezpečně kontaktujte na naší oficiální adrese." },
  hu: { eyebrow: "Kapcsolat", title: "Örömmel hallunk Önről", intro: "Személyes segítség ékszerekhez, szervizhez, egyedi igényekhez és privát időpontokhoz.", call: "Hívás", email: "E-mail", visitUs: "Látogasson el hozzánk", boutiques: "Butikjaink", privateTitle: "Privát konzultáció", privateText: "Ékszerekkel, szervizzel, egyedi megrendelésekkel és időpontokkal kapcsolatban hivatalos címünkön biztonságosan elérhet bennünket." },
  pl: { eyebrow: "Kontakt", title: "Chętnie się z Tobą skontaktujemy", intro: "Indywidualna pomoc w zakresie biżuterii, serwisu, zamówień specjalnych i prywatnych spotkań.", call: "Zadzwoń", email: "E-mail", visitUs: "Odwiedź nas", boutiques: "Nasze butiki", privateTitle: "Prywatna konsultacja", privateText: "W sprawie biżuterii, serwisu, zamówień indywidualnych i spotkań skontaktuj się z nami bezpiecznie pod naszym oficjalnym adresem." },
  ru: { eyebrow: "Контакты", title: "Мы будем рады вашему обращению", intro: "Персональная помощь по вопросам ювелирных изделий, сервиса, индивидуальных заказов и личных встреч.", call: "Позвонить", email: "E-mail", visitUs: "Посетите нас", boutiques: "Наши бутики", privateTitle: "Личная консультация", privateText: "По вопросам украшений, сервиса, индивидуальных заказов и встреч свяжитесь с нами безопасно по нашему официальному адресу." },
  nl: { eyebrow: "Contact", title: "We horen graag van u", intro: "Persoonlijke hulp bij sieraden, service, maatwerkvragen en privéafspraken.", call: "Bellen", email: "E-mail", visitUs: "Bezoek ons", boutiques: "Onze boetieks", privateTitle: "Privéconsultatie", privateText: "Neem voor sieraden, service, maatwerk en afspraken veilig contact met ons op via ons officiële adres." },
  da: { eyebrow: "Kontakt", title: "Vi glæder os til at høre fra dig", intro: "Personlig hjælp med smykker, service, specialbestillinger og private aftaler.", call: "Ring", email: "E-mail", visitUs: "Besøg os", boutiques: "Vores boutiques", privateTitle: "Privat konsultation", privateText: "Kontakt os sikkert på vores officielle adresse vedrørende smykker, service, specialbestillinger og aftaler." },
  fi: { eyebrow: "Yhteystiedot", title: "Kuulemme mielellämme sinusta", intro: "Henkilökohtaista apua koruihin, huoltoon, mittatilaustöihin ja yksityisiin tapaamisiin.", call: "Soita", email: "Sähköposti", visitUs: "Vieraile luonamme", boutiques: "Myymälämme", privateTitle: "Yksityinen konsultaatio", privateText: "Ota meihin turvallisesti yhteyttä virallisen osoitteemme kautta koruihin, huoltoon, mittatilaustöihin ja tapaamisiin liittyvissä asioissa." },
  sv: { eyebrow: "Kontakt", title: "Vi ser fram emot att höra från dig", intro: "Personlig hjälp med smycken, service, specialbeställningar och privata möten.", call: "Ring", email: "E-post", visitUs: "Besök oss", boutiques: "Våra butiker", privateTitle: "Privat konsultation", privateText: "Kontakta oss säkert via vår officiella adress för smycken, service, specialbeställningar och bokningar." },
  fr: { eyebrow: "Contact", title: "Nous serons ravis de vous répondre", intro: "Assistance personnalisée pour les bijoux, le service, les demandes sur mesure et les rendez-vous privés.", call: "Appeler", email: "E-mail", visitUs: "Venez nous voir", boutiques: "Nos boutiques", privateTitle: "Consultation privée", privateText: "Pour les bijoux, le service, les demandes sur mesure et les rendez-vous, contactez-nous en toute sécurité à notre adresse officielle." },
  it: { eyebrow: "Contatti", title: "Saremo lieti di sentirvi", intro: "Assistenza personale per gioielli, servizi, richieste su misura e appuntamenti privati.", call: "Chiama", email: "E-mail", visitUs: "Venite a trovarci", boutiques: "Le nostre boutique", privateTitle: "Consulenza privata", privateText: "Per gioielli, assistenza, richieste su misura e appuntamenti, contattateci in modo sicuro al nostro indirizzo ufficiale." },
  es: { eyebrow: "Contacto", title: "Estaremos encantados de atenderle", intro: "Asistencia personalizada para joyería, servicio, encargos a medida y citas privadas.", call: "Llamar", email: "E-mail", visitUs: "Visítenos", boutiques: "Nuestras boutiques", privateTitle: "Consulta privada", privateText: "Para joyería, servicio, encargos a medida y citas, póngase en contacto con nosotros de forma segura en nuestra dirección oficial." },
};

const locations = [
  { name: "LIDYA JEWELLERY — Manavgat", detail: "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:4, P.K:07600 Manavgat / Türkiye", href: "/boutiques", external: false, type: "boutique" as const },
  { name: "Hotel Alba Resort", detail: "Çolaklı Mahallesi, Tilkiler Mevkii, Erhan Demir Bulvarı No:3, Manavgat / Antalya / Türkiye", href: "https://www.albahotels.com.tr/en/resort-en/", external: true, type: "hotel" as const },
  { name: "Hotel Alba Royal", detail: "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:4, Manavgat / Antalya / Türkiye", href: "https://www.albahotels.com.tr/en/royal-en/", external: true, type: "hotel" as const },
  { name: "Hotel Alba Queen", detail: "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:3-1, Manavgat / Antalya / Türkiye", href: "https://www.albahotels.com.tr/en/queen-en/", external: true, type: "hotel" as const },
];

function LocationIcon({ type }: { type: "boutique" | "hotel" }) {
  if (type === "boutique") {
    return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M4 10h16" /><path d="M6 10v9h12v-9" /><path d="M5 10 7 5h10l2 5" /><path d="M9 19v-5h6v5" /></svg>;
  }
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M5 20V5h14v15" /><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" /><path d="M3 20h18" /></svg>;
}

export default function Contact() {
  const { locale } = useLanguage();
  const t = copy[locale];

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-ivory py-20 md:py-24 lg:py-28">
      <style jsx global>{`
        .site-header { background: rgba(247, 243, 236, 0.97) !important; box-shadow: 0 1px 0 rgba(27, 11, 32, 0.08) !important; backdrop-filter: blur(18px); }
        .site-header nav { color: #1b0b20 !important; }
        .site-header a[href="/contact"] { color: #1b0b20 !important; border-color: rgba(27, 11, 32, 0.4) !important; }
        .site-header a[href="/contact"]:hover { color: #c9a45c !important; }
        .site-header img[alt="LIDYA JEWELRY"] { filter: none !important; }
      `}</style>
      <div className="pointer-events-none absolute -left-44 top-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pr-6">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">{t.eyebrow}</span>
            <h2 className="max-w-[760px] font-display text-5xl leading-[0.95] tracking-[-0.03em] text-plum-dark md:text-6xl lg:text-7xl">{t.title}</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-grey md:text-base">{t.intro}</p>
            <div className="mt-10 border-t border-plum-dark/10">
              {contacts.map((contact) => (
                <div key={contact.name} className="border-b border-plum-dark/10 py-7">
                  <div className="grid gap-5 md:grid-cols-11 md:items-center">
                    <div className="flex items-center gap-4 md:col-span-4">
                      <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-full border border-plum-dark/10 bg-white">
                        <Image src={contact.image} alt={contact.name} fill sizes="92px" className={`object-cover ${contact.imagePosition}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-3xl text-plum-dark">{contact.name}</h3>
                        <p className="mt-1 whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold/90">{contact.languages}</p>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <a href={contact.phoneHref} className="block text-sm text-plum-dark transition-colors hover:text-gold">{contact.phone}</a>
                      <ProtectedEmail className="mt-2 block text-sm text-grey transition-colors hover:text-gold" />
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 md:col-span-3 md:flex-nowrap md:justify-end">
                      <a href={contact.phoneHref} className="whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark hover:text-gold">{t.call}</a>
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark hover:text-gold">WhatsApp</a>
                      <ProtectedEmail label={t.email} className="whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark hover:text-gold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-plum-dark px-7 py-10 text-brand-white md:px-9">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">{t.visitUs}</span>
              <h3 className="mt-4 font-display text-4xl text-[#F5EFE6] md:text-5xl">{t.boutiques}</h3>
              <div className="mt-8 border-t border-brand-white/12">
                {locations.map((location, index) => (
                  <a key={location.name} href={location.href} target={location.external ? "_blank" : undefined} rel={location.external ? "noopener noreferrer" : undefined} className="group flex items-center justify-between gap-5 border-b border-brand-white/12 py-5 transition-colors duration-300 hover:bg-brand-white/[0.025]">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/35 text-gold"><LocationIcon type={location.type} /></div>
                      <div className="min-w-0">
                        <div className="mb-1 flex items-center gap-3">
                          <span className="text-[0.56rem] font-semibold tracking-[0.22em] text-gold/80">{String(index + 1).padStart(2, "0")}</span>
                          <h4 className="font-display text-lg transition-colors duration-300 group-hover:text-gold-light md:text-xl" style={{ color: "#F5EFE6" }}>{location.name}</h4>
                        </div>
                        <p className="text-[0.72rem] leading-5 text-brand-white/45 transition-colors duration-300 group-hover:text-brand-white/65">{location.detail}</p>
                      </div>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-white/15 text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:border-gold group-hover:bg-gold group-hover:text-plum-dark" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 border-t border-brand-white/12 pt-8">
                <p className="font-display text-2xl italic text-[#E8D8B5]">{t.privateTitle}</p>
                <p className="mt-3 text-sm leading-6 text-brand-white/50">{t.privateText}</p>
                <ProtectedEmail className="mt-6 inline-flex bg-gold px-6 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition hover:bg-gold-light" label="info@lidyaalbaresort.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
