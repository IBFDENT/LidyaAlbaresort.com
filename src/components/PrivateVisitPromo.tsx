"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const COPY: Record<Locale, { eyebrow:string; title:string; text:string; cta:string }> = {
  en:{eyebrow:"Private Visit Concierge",title:"Arrive effortlessly. Meet LIDYA personally.",text:"Travelling from abroad? Explore flights to Antalya, private airport transfer, selected Alba Hotels and a private boutique appointment in one place.",cta:"Plan your private visit"},
  de:{eyebrow:"Private Visit Concierge",title:"Entspannt ankommen. LIDYA persönlich erleben.",text:"Sie reisen aus dem Ausland an? Entdecken Sie Flüge nach Antalya, privaten Flughafentransfer, ausgewählte Alba Hotels und einen privaten Boutique-Termin an einem Ort.",cta:"Privaten Besuch planen"},
  tr:{eyebrow:"Özel Ziyaret Concierge",title:"Zahmetsizce gelin. LIDYA ile kişisel olarak tanışın.",text:"Yurt dışından mı geliyorsunuz? Antalya uçuşlarını, özel havaalanı transferini, seçili Alba Otellerini ve özel butik randevusunu tek yerde planlayın.",cta:"Özel ziyaretinizi planlayın"},
  sk:{eyebrow:"Private Visit Concierge",title:"Príďte bez starostí. Spoznajte LIDYA osobne.",text:"Prichádzate zo zahraničia? Na jednom mieste si pozrite lety do Antalye, súkromný transfer z letiska, vybrané hotely Alba a súkromný termín v butiku.",cta:"Naplánovať súkromnú návštevu"},
  cs:{eyebrow:"Private Visit Concierge",title:"Přijeďte bez starostí. Poznejte LIDYA osobně.",text:"Přijíždíte ze zahraničí? Na jednom místě najdete lety do Antalye, soukromý transfer z letiště, vybrané hotely Alba a soukromý termín v butiku.",cta:"Naplánovat soukromou návštěvu"},
  hu:{eyebrow:"Private Visit Concierge",title:"Érkezzen kényelmesen. Ismerje meg személyesen a LIDYA-t.",text:"Külföldről érkezik? Egy helyen tervezheti meg az antalyai repülőutat, a privát reptéri transzfert, a kiválasztott Alba szállodákat és a privát butikidőpontot.",cta:"Privát látogatás tervezése"},
  pl:{eyebrow:"Private Visit Concierge",title:"Przyjedź bez wysiłku. Poznaj LIDYA osobiście.",text:"Przyjeżdżasz z zagranicy? W jednym miejscu zaplanuj lot do Antalyi, prywatny transfer z lotniska, wybrane hotele Alba i prywatne spotkanie w butiku.",cta:"Zaplanuj prywatną wizytę"},
  ru:{eyebrow:"Private Visit Concierge",title:"Приезжайте без лишних забот. Познакомьтесь с LIDYA лично.",text:"Приезжаете из-за границы? В одном месте можно спланировать перелёт в Анталью, частный трансфер из аэропорта, выбранные отели Alba и личную встречу в бутике.",cta:"Спланировать частный визит"},
  nl:{eyebrow:"Private Visit Concierge",title:"Kom moeiteloos aan. Ontmoet LIDYA persoonlijk.",text:"Reist u vanuit het buitenland? Plan vluchten naar Antalya, privé-luchthaventransfer, geselecteerde Alba Hotels en een privéafspraak in de boutique op één plek.",cta:"Plan uw privébezoek"},
  da:{eyebrow:"Private Visit Concierge",title:"Ankom ubesværet. Mød LIDYA personligt.",text:"Rejser du fra udlandet? Planlæg fly til Antalya, privat lufthavnstransfer, udvalgte Alba Hotels og en privat boutique-aftale ét sted.",cta:"Planlæg privat besøg"},
  fi:{eyebrow:"Private Visit Concierge",title:"Saavu vaivattomasti. Tapaa LIDYA henkilökohtaisesti.",text:"Tuletko ulkomailta? Suunnittele Antalyan lennot, yksityinen lentokenttäkuljetus, valitut Alba Hotels -hotellit ja yksityinen boutique-tapaaminen yhdestä paikasta.",cta:"Suunnittele yksityinen vierailu"},
  sv:{eyebrow:"Private Visit Concierge",title:"Anländ enkelt. Möt LIDYA personligen.",text:"Reser du från utlandet? Planera flyg till Antalya, privat flygplatstransfer, utvalda Alba Hotels och ett privat boutique-möte på ett ställe.",cta:"Planera privat besök"},
  fr:{eyebrow:"Private Visit Concierge",title:"Arrivez en toute sérénité. Rencontrez LIDYA personnellement.",text:"Vous venez de l’étranger ? Organisez au même endroit vos vols vers Antalya, votre transfert privé depuis l’aéroport, votre séjour dans une sélection d’Alba Hotels et votre rendez-vous privé en boutique.",cta:"Planifier une visite privée"},
  it:{eyebrow:"Private Visit Concierge",title:"Arrivate senza pensieri. Incontrate LIDYA di persona.",text:"Arrivate dall’estero? Organizzate in un unico luogo i voli per Antalya, il transfer privato dall’aeroporto, gli Alba Hotels selezionati e un appuntamento privato in boutique.",cta:"Pianifica la visita privata"},
  es:{eyebrow:"Private Visit Concierge",title:"Llegue sin complicaciones. Conozca LIDYA en persona.",text:"¿Viaja desde el extranjero? Organice en un solo lugar vuelos a Antalya, traslado privado desde el aeropuerto, hoteles Alba seleccionados y una cita privada en boutique.",cta:"Planificar visita privada"},
};

export default function PrivateVisitPromo() {
  const { locale } = useLanguage();
  const t = COPY[locale];
  return (
    <section className="bg-[#f2ede5] py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-7 border border-plum-dark/10 bg-ivory p-7 md:grid-cols-[1.1fr_1.6fr_auto] md:items-center md:p-10">
          <div>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">{t.eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-plum-dark md:text-4xl">{t.title}</h2>
          </div>
          <p className="text-sm leading-7 text-grey md:text-base">{t.text}</p>
          <Link href="/private-visit" className="inline-flex items-center gap-3 whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-colors hover:text-gold">{t.cta}<span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}
