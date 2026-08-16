"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const COPY: Record<Locale, { title:string; intro:string; storage:string; purpose:string; provider:string; duration:string; current:string }> = {
  en:{title:"Cookie & storage details",intro:"The current website uses only necessary first-party storage by default. Analytics and marketing technologies are not activated unless they are implemented and you have given the relevant consent.",storage:"Technology",purpose:"Purpose",provider:"Provider",duration:"Duration",current:"Current status"},
  de:{title:"Cookie- & Speicherdetails",intro:"Die aktuelle Website verwendet standardmäßig nur notwendige First-Party-Speichertechnologien. Analyse- und Marketingtechnologien werden nur aktiviert, wenn sie implementiert sind und Sie entsprechend eingewilligt haben.",storage:"Technologie",purpose:"Zweck",provider:"Anbieter",duration:"Dauer",current:"Aktueller Status"},
  tr:{title:"Çerez ve depolama ayrıntıları",intro:"Mevcut web sitesi varsayılan olarak yalnızca gerekli birinci taraf depolama teknolojilerini kullanır. Analiz ve pazarlama teknolojileri ancak uygulanmışsa ve ilgili onayı vermişseniz etkinleştirilir.",storage:"Teknoloji",purpose:"Amaç",provider:"Sağlayıcı",duration:"Süre",current:"Mevcut durum"},
  sk:{title:"Detaily cookies a úložiska",intro:"Aktuálna verzia webu používa predvolene iba nevyhnutné first-party úložiská. Analytické a marketingové technológie sa neaktivujú, pokiaľ nie sú reálne implementované a nedáte príslušný súhlas.",storage:"Technológia",purpose:"Účel",provider:"Poskytovateľ",duration:"Trvanie",current:"Aktuálny stav"},
  cs:{title:"Detaily cookies a úložiště",intro:"Aktuální verze webu používá ve výchozím nastavení pouze nezbytná first-party úložiště. Analytické a marketingové technologie se neaktivují, pokud nejsou skutečně implementovány a neudělíte příslušný souhlas.",storage:"Technologie",purpose:"Účel",provider:"Poskytovatel",duration:"Doba",current:"Aktuální stav"},
  hu:{title:"Cookie- és tárhelyrészletek",intro:"A jelenlegi weboldal alapértelmezés szerint csak szükséges, saját tárhelytechnológiákat használ. Analitikai és marketingtechnológiák csak megvalósítás és megfelelő hozzájárulás után aktiválódnak.",storage:"Technológia",purpose:"Cél",provider:"Szolgáltató",duration:"Időtartam",current:"Jelenlegi állapot"},
  pl:{title:"Szczegóły plików cookie i pamięci",intro:"Obecna wersja strony domyślnie korzysta wyłącznie z niezbędnych technologii własnych. Analityka i marketing nie są aktywowane, dopóki nie zostaną wdrożone i nie wyrazisz odpowiedniej zgody.",storage:"Technologia",purpose:"Cel",provider:"Dostawca",duration:"Okres",current:"Aktualny status"},
  ru:{title:"Сведения о cookies и хранилище",intro:"Текущая версия сайта по умолчанию использует только необходимые технологии первой стороны. Аналитические и маркетинговые технологии не активируются без их фактического внедрения и вашего соответствующего согласия.",storage:"Технология",purpose:"Цель",provider:"Поставщик",duration:"Срок",current:"Текущий статус"},
  nl:{title:"Cookie- en opslagdetails",intro:"De huidige website gebruikt standaard alleen noodzakelijke first-party opslag. Analyse- en marketingtechnologieën worden pas geactiveerd wanneer ze daadwerkelijk zijn geïmplementeerd en u daarvoor toestemming hebt gegeven.",storage:"Technologie",purpose:"Doel",provider:"Aanbieder",duration:"Duur",current:"Huidige status"},
  da:{title:"Cookie- og lagringsdetaljer",intro:"Det aktuelle website bruger som standard kun nødvendige førsteparts-lagringsteknologier. Analyse- og marketingteknologier aktiveres kun, hvis de er implementeret, og du har givet det relevante samtykke.",storage:"Teknologi",purpose:"Formål",provider:"Udbyder",duration:"Varighed",current:"Aktuel status"},
  fi:{title:"Eväste- ja tallennustiedot",intro:"Sivusto käyttää oletuksena vain välttämättömiä ensimmäisen osapuolen tallennusteknologioita. Analytiikka- ja markkinointiteknologioita ei aktivoida ennen kuin ne on toteutettu ja olet antanut asianmukaisen suostumuksen.",storage:"Teknologia",purpose:"Tarkoitus",provider:"Tarjoaja",duration:"Kesto",current:"Nykytila"},
  sv:{title:"Cookie- och lagringsdetaljer",intro:"Webbplatsen använder som standard endast nödvändig förstapartslagring. Analys- och marknadsföringsteknik aktiveras endast om den faktiskt har implementerats och du har lämnat relevant samtycke.",storage:"Teknik",purpose:"Syfte",provider:"Leverantör",duration:"Varaktighet",current:"Aktuell status"},
  fr:{title:"Détails des cookies et du stockage",intro:"Le site actuel utilise par défaut uniquement des technologies de stockage nécessaires de première partie. Les technologies d’analyse et de marketing ne sont activées que si elles sont effectivement mises en œuvre et si vous avez donné le consentement correspondant.",storage:"Technologie",purpose:"Finalité",provider:"Fournisseur",duration:"Durée",current:"Statut actuel"},
  it:{title:"Dettagli cookie e archiviazione",intro:"Il sito attuale utilizza per impostazione predefinita solo tecnologie di archiviazione necessarie di prima parte. Le tecnologie di analisi e marketing vengono attivate solo se effettivamente implementate e dopo il relativo consenso.",storage:"Tecnologia",purpose:"Finalità",provider:"Fornitore",duration:"Durata",current:"Stato attuale"},
  es:{title:"Detalles de cookies y almacenamiento",intro:"El sitio actual utiliza de forma predeterminada únicamente tecnologías necesarias de almacenamiento propio. Las tecnologías de análisis y marketing solo se activan si se implementan realmente y usted ha dado el consentimiento correspondiente.",storage:"Tecnología",purpose:"Finalidad",provider:"Proveedor",duration:"Duración",current:"Estado actual"},
};

const rows = [
  { tech:"lidya-cookie-consent (localStorage)", purpose:"Stores your cookie category choices, consent policy version and the date of your latest choice.", provider:"LIDYA Jewellery · first party", duration:"Persistent until cleared or policy version changes", status:"Necessary · active" },
  { tech:"lidya-locale (cookie + localStorage)", purpose:"Remembers the language selected for the website and supports correct language routing.", provider:"LIDYA Jewellery · first party", duration:"Cookie: up to 12 months; localStorage until cleared", status:"Necessary · active" },
  { tech:"Authentication / session storage", purpose:"Used only when a client or authorised administrator signs in, to maintain a secure authenticated session.", provider:"LIDYA Jewellery / Supabase", duration:"Session or authentication expiry", status:"Necessary · only when signed in" },
  { tech:"Analytics technologies", purpose:"Would measure website usage and performance if an analytics service is introduced.", provider:"Not currently active", duration:"Not applicable", status:"Optional · disabled unless implemented + consented" },
  { tech:"Marketing technologies", purpose:"Would support advertising or marketing measurement if such services are introduced.", provider:"Not currently active", duration:"Not applicable", status:"Optional · disabled unless implemented + consented" },
];

export default function CookieDisclosure() {
  const { locale } = useLanguage();
  const copy = COPY[locale];
  return (
    <section className="bg-ivory px-5 pb-24 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1180px] border-t border-plum-dark/10 pt-12">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">Cookies · Consent</p>
        <h2 className="mt-4 font-display text-3xl text-plum-dark md:text-4xl">{copy.title}</h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-plum-dark/65">{copy.intro}</p>
        <div className="mt-8 overflow-x-auto border border-plum-dark/10 bg-brand-white">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-plum-dark text-brand-white"><tr>{[copy.storage,copy.purpose,copy.provider,copy.duration,copy.current].map((label)=><th key={label} className="px-4 py-4 text-[0.6rem] font-semibold uppercase tracking-[0.14em]">{label}</th>)}</tr></thead>
            <tbody>{rows.map((row)=><tr key={row.tech} className="border-t border-plum-dark/10 align-top"><td className="px-4 py-4 font-medium text-plum-dark">{row.tech}</td><td className="px-4 py-4 leading-6 text-plum-dark/65">{row.purpose}</td><td className="px-4 py-4 text-plum-dark/65">{row.provider}</td><td className="px-4 py-4 text-plum-dark/65">{row.duration}</td><td className="px-4 py-4 text-plum-dark/65">{row.status}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
