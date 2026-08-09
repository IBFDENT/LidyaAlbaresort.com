"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const ABOUT_BODY: Record<Locale, string[]> = {
  en: [
    "We want to be your personal advisor, whether you are looking for a special gift or wish to treat yourself to a new favourite piece.",
    "With handcraftsmanship as our standard of quality, we set the highest demands on design, material and execution.",
    "You will find jewellery and watches in a wide selection with us: white, yellow and rose gold, platinum, diamonds, precious stones and pearls — for every budget.",
    "We also offer creative designs for one-of-a-kind pieces, individually crafted to your wishes.",
    "Even if you own jewellery — older or inherited, out of fashion or with poorly set stones — we provide expert redesign.",
    "Buying a piece of jewellery is a matter of trust. Visit us. We put our knowledge, our experience and our service at your disposal.",
  ],
  de: [
    "Wir möchten Ihr persönlicher Berater sein – ganz gleich, ob Sie ein besonderes Geschenk suchen oder sich selbst mit einem neuen Lieblingsstück eine Freude machen möchten.",
    "Handwerkskunst ist für uns der Maßstab für Qualität. Deshalb stellen wir höchste Ansprüche an Design, Material und Ausführung.",
    "Bei uns finden Sie Schmuck und Uhren in großer Auswahl: Weiß-, Gelb- und Roségold, Platin, Diamanten, Edelsteine und Perlen – für jedes Budget.",
    "Darüber hinaus bieten wir kreative Entwürfe für einzigartige Einzelstücke, individuell nach Ihren Wünschen gefertigt.",
    "Auch wenn Sie bereits Schmuck besitzen – älter oder geerbt, aus der Mode gekommen oder mit schlecht gefassten Steinen – bieten wir fachgerechtes Redesign.",
    "Der Kauf eines Schmuckstücks ist Vertrauenssache. Besuchen Sie uns. Unser Wissen, unsere Erfahrung und unser Service stehen Ihnen zur Verfügung.",
  ],
  tr: [
    "İster özel bir hediye arıyor olun ister kendinizi yeni bir favori parçayla ödüllendirmek isteyin, kişisel danışmanınız olmak istiyoruz.",
    "El işçiliğini kalite standardımız olarak kabul ediyor; tasarım, malzeme ve uygulamada en yüksek beklentileri benimsiyoruz.",
    "Bizde beyaz, sarı ve rose altın, platin, elmas, değerli taşlar ve incilerden oluşan geniş bir mücevher ve saat seçkisi bulabilirsiniz — her bütçeye uygun.",
    "Ayrıca isteklerinize göre özel olarak üretilen, benzersiz parçalar için yaratıcı tasarımlar sunuyoruz.",
    "Eski, miras kalmış, modası geçmiş veya taşları iyi sabitlenmemiş mücevherleriniz varsa, uzman yeniden tasarım hizmeti de sunuyoruz.",
    "Mücevher satın almak bir güven meselesidir. Bizi ziyaret edin. Bilgimizi, deneyimimizi ve hizmetimizi sizinle paylaşalım.",
  ],
  sk: [
    "Chceme byť vaším osobným poradcom, či už hľadáte výnimočný darček, alebo si chcete dopriať nový obľúbený šperk.",
    "Ručnú remeselnú prácu považujeme za základ kvality a preto kladieme najvyššie nároky na dizajn, materiál aj spracovanie.",
    "Nájdete u nás široký výber šperkov a hodiniek: biele, žlté a ružové zlato, platinu, diamanty, drahé kamene a perly — pre každý rozpočet.",
    "Ponúkame aj kreatívne návrhy jedinečných kúskov, individuálne vyrobených podľa vašich predstáv.",
    "Ak vlastníte starší alebo zdedený šperk, ktorý vyšiel z módy alebo má zle osadené kamene, ponúkame odborný redizajn.",
    "Kúpa šperku je otázkou dôvery. Navštívte nás. Naše vedomosti, skúsenosti a servis sú vám k dispozícii.",
  ],
  cs: [
    "Chceme být vaším osobním poradcem, ať už hledáte výjimečný dárek, nebo si chcete dopřát nový oblíbený šperk.",
    "Ruční řemeslnou práci považujeme za základ kvality, proto klademe nejvyšší nároky na design, materiál i zpracování.",
    "Najdete u nás široký výběr šperků a hodinek: bílé, žluté a růžové zlato, platinu, diamanty, drahé kameny a perly — pro každý rozpočet.",
    "Nabízíme také kreativní návrhy jedinečných kusů, individuálně vyrobených podle vašich představ.",
    "Pokud vlastníte starší nebo zděděný šperk, který vyšel z módy nebo má špatně osazené kameny, nabízíme odborný redesign.",
    "Koupě šperku je otázkou důvěry. Navštivte nás. Naše znalosti, zkušenosti a servis jsou vám k dispozici.",
  ],
  hu: [
    "Személyes tanácsadója szeretnénk lenni, akár különleges ajándékot keres, akár egy új kedvenc ékszerrel szeretné meglepni magát.",
    "A kézműves munkát tekintjük minőségi mércénknek, ezért a tervezéssel, az anyagokkal és a kivitelezéssel szemben is a legmagasabb elvárásokat támasztjuk.",
    "Ékszerek és órák széles választékát kínáljuk: fehér-, sárga- és rozéaranyat, platinát, gyémántokat, drágaköveket és gyöngyöket — minden költségvetéshez.",
    "Kreatív terveket is készítünk egyedi darabokhoz, amelyeket személyre szabva, az Ön kívánságai szerint alkotunk meg.",
    "Ha régi vagy örökölt, divatjamúlt vagy nem megfelelően foglalt kövekkel készült ékszere van, szakértő újratervezést is kínálunk.",
    "Egy ékszer megvásárlása bizalom kérdése. Látogasson el hozzánk. Tudásunkat, tapasztalatunkat és szolgáltatásainkat az Ön rendelkezésére bocsátjuk.",
  ],
  pl: [
    "Chcemy być Twoim osobistym doradcą, niezależnie od tego, czy szukasz wyjątkowego prezentu, czy chcesz sprawić sobie nowy ulubiony element biżuterii.",
    "Rzemiosło ręczne jest dla nas standardem jakości, dlatego stawiamy najwyższe wymagania projektowi, materiałom i wykonaniu.",
    "Oferujemy szeroki wybór biżuterii i zegarków: białe, żółte i różowe złoto, platynę, diamenty, kamienie szlachetne i perły — na każdy budżet.",
    "Tworzymy również kreatywne projekty unikatowych egzemplarzy, wykonywanych indywidualnie według Twoich życzeń.",
    "Jeśli posiadasz starszą lub odziedziczoną biżuterię, niemodną lub z niewłaściwie osadzonymi kamieniami, oferujemy profesjonalny redesign.",
    "Zakup biżuterii to kwestia zaufania. Odwiedź nas. Oddajemy do Twojej dyspozycji naszą wiedzę, doświadczenie i obsługę.",
  ],
};

const ABOUT_VALUES: Record<Locale, string[]> = {
  en: ["Tradition", "Craftsmanship", "Trust", "Individuality", "Lasting Value"],
  de: ["Tradition", "Handwerkskunst", "Vertrauen", "Individualität", "Bleibender Wert"],
  tr: ["Gelenek", "El İşçiliği", "Güven", "Özgünlük", "Kalıcı Değer"],
  sk: ["Tradícia", "Remeselnosť", "Dôvera", "Individualita", "Trvalá hodnota"],
  cs: ["Tradice", "Řemeslnost", "Důvěra", "Individualita", "Trvalá hodnota"],
  hu: ["Hagyomány", "Kézművesség", "Bizalom", "Egyediség", "Tartós érték"],
  pl: ["Tradycja", "Rzemiosło", "Zaufanie", "Indywidualność", "Trwała wartość"],
};

const ABOUT_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    lead: string;
    signoff: string;
    role: string;
    since: string;
    craftsmanship: string;
    closingBefore: string;
    closingAccent: string;
  }
> = {
  en: {
    eyebrow: "Our Philosophy",
    title: "Things of lasting value in changing times",
    lead: "There are things that retain their value in times of change.",
    signoff: "Wishing you much pleasure browsing,",
    role: "General Manager",
    since: "Since",
    craftsmanship: "Craftsmanship",
    closingBefore: "Tradition gives jewellery meaning.",
    closingAccent: "Craftsmanship gives it permanence.",
  },
  de: {
    eyebrow: "Unsere Philosophie",
    title: "Bleibende Werte in Zeiten des Wandels",
    lead: "Es gibt Dinge, die auch in Zeiten des Wandels ihren Wert behalten.",
    signoff: "Wir wünschen Ihnen viel Freude beim Entdecken,",
    role: "Geschäftsführer",
    since: "Seit",
    craftsmanship: "Handwerkskunst",
    closingBefore: "Tradition gibt Schmuck Bedeutung.",
    closingAccent: "Handwerkskunst verleiht ihm Beständigkeit.",
  },
  tr: {
    eyebrow: "Felsefemiz",
    title: "Değişen zamanlarda kalıcı değerler",
    lead: "Değişim zamanlarında değerini koruyan şeyler vardır.",
    signoff: "Keyifli keşifler dileriz,",
    role: "Genel Müdür",
    since: "Beri",
    craftsmanship: "El İşçiliği",
    closingBefore: "Gelenek mücevhere anlam verir.",
    closingAccent: "El işçiliği ona kalıcılık kazandırır.",
  },
  sk: {
    eyebrow: "Naša filozofia",
    title: "Trvalé hodnoty v meniacich sa časoch",
    lead: "Existujú veci, ktoré si zachovávajú svoju hodnotu aj v časoch zmien.",
    signoff: "Prajeme vám príjemné objavovanie,",
    role: "Generálny manažér",
    since: "Od roku",
    craftsmanship: "Remeselnosť",
    closingBefore: "Tradícia dáva šperku význam.",
    closingAccent: "Remeselnosť mu dáva trvácnosť.",
  },
  cs: {
    eyebrow: "Naše filozofie",
    title: "Trvalé hodnoty v měnících se časech",
    lead: "Existují věci, které si zachovávají svou hodnotu i v dobách změn.",
    signoff: "Přejeme vám příjemné objevování,",
    role: "Generální manažer",
    since: "Od roku",
    craftsmanship: "Řemeslnost",
    closingBefore: "Tradice dává šperku význam.",
    closingAccent: "Řemeslnost mu dává trvalost.",
  },
  hu: {
    eyebrow: "Filozófiánk",
    title: "Maradandó értékek a változó időkben",
    lead: "Vannak dolgok, amelyek a változó időkben is megőrzik értéküket.",
    signoff: "Kellemes böngészést kívánunk,",
    role: "Ügyvezető igazgató",
    since: "Óta",
    craftsmanship: "Kézművesség",
    closingBefore: "A hagyomány jelentést ad az ékszernek.",
    closingAccent: "A kézművesség maradandóvá teszi.",
  },
  pl: {
    eyebrow: "Nasza filozofia",
    title: "Trwałe wartości w zmieniających się czasach",
    lead: "Są rzeczy, które zachowują swoją wartość nawet w czasach zmian.",
    signoff: "Życzymy przyjemnego odkrywania,",
    role: "Dyrektor Generalny",
    since: "Od",
    craftsmanship: "Rzemiosło",
    closingBefore: "Tradycja nadaje biżuterii znaczenie.",
    closingAccent: "Rzemiosło nadaje jej trwałość.",
  },
};

export default function About() {
  const { locale } = useLanguage();

  const body = ABOUT_BODY[locale];
  const values = ABOUT_VALUES[locale];
  const copy = ABOUT_COPY[locale];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-plum-dark py-24 md:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="max-w-[920px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <div className="flex items-end gap-5">
              <span
                className="font-display text-6xl leading-none md:text-7xl lg:text-8xl"
                style={{ color: "#E8D8B5" }}
              >
                1989
              </span>

              <span className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-brand-white/40">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="group relative min-h-[560px] overflow-hidden md:min-h-[680px] lg:min-h-[760px]">
              <Image
                src="/images/craftsmanship.jpg"
                alt="Goldsmith at work"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  {copy.craftsmanship}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
            <p
              className="font-display text-2xl italic leading-snug md:text-3xl lg:text-4xl"
              style={{ color: "#E8D8B5" }}
            >
              {copy.lead}
            </p>

            <div className="mt-8 space-y-5">
              {body.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-xl text-sm leading-7 text-brand-white/68 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-brand-white/12 pt-8">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                {copy.signoff}
              </span>

              <p
                className="mt-4 font-display text-3xl"
                style={{ color: "#F5EFE6" }}
              >
                Metin TANIR
              </p>

              <p className="mt-1 text-sm text-brand-white/45">
                {copy.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-brand-white/12 pt-7 md:mt-16">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            {values.map((value, index) => (
              <div
                key={`${value}-${index}`}
                className="flex items-center gap-4"
              >
                <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-white/65">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1000px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#F5EFE6" }}
          >
            {copy.closingBefore}
            <span style={{ color: "#E8D8B5" }}>
              {" "}
              {copy.closingAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}