import { dictionaries, LOCALES, type Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.lidyaalbaresort.com";
export const DEFAULT_LOCALE: Locale = "en";
export const SEO_LOCALES = LOCALES;

export const PUBLIC_ROUTES = [
  "/",
  "/collections",
  "/pearls",
  "/wedding-rings",
  "/signature-style",
  "/brilliants",
  "/diamonds",
  "/design",
  "/bespoke",
  "/watches",
  "/watches/mens",
  "/watches/womens",
  "/watches/childrens",
  "/watches/sport",
  "/watches/sport/mens",
  "/watches/sport/womens",
  "/watches/gold",
  "/watches/brilliants",
  "/watches/diamonds",
  "/watches/bespoke",
  "/investment-gold",
  "/investment-diamonds",
  "/services",
  "/boutiques",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[number];

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_GB", de: "de_DE", tr: "tr_TR", sk: "sk_SK", cs: "cs_CZ",
  hu: "hu_HU", pl: "pl_PL", ru: "ru_RU", nl: "nl_NL", da: "da_DK",
  fi: "fi_FI", sv: "sv_SE", fr: "fr_FR", it: "it_IT", es: "es_ES",
};

const genericDescription: Record<Locale, string> = {
  en: "Discover LIDYA Jewellery at Alba Resort in Antalya, Türkiye — fine jewellery, diamonds, gold, luxury watches, bespoke design and personal service since 1989.",
  de: "Entdecken Sie LIDYA Jewellery im Alba Resort in Antalya, Türkiye — edlen Schmuck, Diamanten, Gold, Luxusuhren, Maßanfertigungen und persönlichen Service seit 1989.",
  tr: "Antalya Alba Resort'taki LIDYA Jewellery'yi keşfedin — 1989'dan beri mücevher, pırlanta, altın, lüks saatler, özel tasarım ve kişisel hizmet.",
  sk: "Objavte LIDYA Jewellery v Alba Resort v Antalyi, Türkiye — jemné šperky, diamanty, zlato, luxusné hodinky, zákazkovú výrobu a osobný servis od roku 1989.",
  cs: "Objevte LIDYA Jewellery v Alba Resort v Antalyi, Türkiye — jemné šperky, diamanty, zlato, luxusní hodinky, zakázkovou výrobu a osobní servis od roku 1989.",
  hu: "Fedezze fel a LIDYA Jewellery világát az antalyai Alba Resortban — ékszerek, gyémántok, arany, luxusórák, egyedi tervezés és személyes kiszolgálás 1989 óta.",
  pl: "Odkryj LIDYA Jewellery w Alba Resort w Antalyi — biżuterię, diamenty, złoto, luksusowe zegarki, projekty na zamówienie i osobistą obsługę od 1989 roku.",
  ru: "Откройте для себя LIDYA Jewellery в Alba Resort в Анталье — ювелирные изделия, бриллианты, золото, роскошные часы, индивидуальный дизайн и персональный сервис с 1989 года.",
  nl: "Ontdek LIDYA Jewellery in Alba Resort in Antalya — fijne juwelen, diamanten, goud, luxe horloges, maatwerk en persoonlijke service sinds 1989.",
  da: "Oplev LIDYA Jewellery på Alba Resort i Antalya — fine smykker, diamanter, guld, luksusure, skræddersyet design og personlig service siden 1989.",
  fi: "Tutustu LIDYA Jewelleryen Alba Resortissa Antalyassa — korut, timantit, kulta, luksuskellot, mittatilausdesign ja henkilökohtainen palvelu vuodesta 1989.",
  sv: "Upptäck LIDYA Jewellery på Alba Resort i Antalya — fina smycken, diamanter, guld, lyxklockor, skräddarsydd design och personlig service sedan 1989.",
  fr: "Découvrez LIDYA Jewellery à l'Alba Resort d'Antalya — joaillerie, diamants, or, montres de luxe, créations sur mesure et service personnalisé depuis 1989.",
  it: "Scopri LIDYA Jewellery all'Alba Resort di Antalya — alta gioielleria, diamanti, oro, orologi di lusso, creazioni su misura e servizio personale dal 1989.",
  es: "Descubra LIDYA Jewellery en Alba Resort, Antalya — alta joyería, diamantes, oro, relojes de lujo, diseño a medida y servicio personalizado desde 1989.",
};

const legalTitles: Record<Locale, { privacy: string; terms: string; home: string }> = {
  en:{privacy:"Privacy Policy",terms:"Terms & Conditions",home:"Fine Jewellery, Diamonds & Watches in Antalya"},
  de:{privacy:"Datenschutz",terms:"Allgemeine Geschäftsbedingungen",home:"Edler Schmuck, Diamanten & Uhren in Antalya"},
  tr:{privacy:"Gizlilik Politikası",terms:"Şartlar ve Koşullar",home:"Antalya'da Mücevher, Pırlanta ve Saatler"},
  sk:{privacy:"Ochrana súkromia",terms:"Obchodné podmienky",home:"Šperky, diamanty a hodinky v Antalyi"},
  cs:{privacy:"Ochrana soukromí",terms:"Obchodní podmínky",home:"Šperky, diamanty a hodinky v Antalyi"},
  hu:{privacy:"Adatvédelmi irányelvek",terms:"Általános feltételek",home:"Ékszerek, gyémántok és órák Antalyában"},
  pl:{privacy:"Polityka prywatności",terms:"Warunki korzystania",home:"Biżuteria, diamenty i zegarki w Antalyi"},
  ru:{privacy:"Политика конфиденциальности",terms:"Условия использования",home:"Ювелирные изделия, бриллианты и часы в Анталье"},
  nl:{privacy:"Privacybeleid",terms:"Algemene voorwaarden",home:"Juwelen, diamanten en horloges in Antalya"},
  da:{privacy:"Privatlivspolitik",terms:"Vilkår og betingelser",home:"Smykker, diamanter og ure i Antalya"},
  fi:{privacy:"Tietosuojakäytäntö",terms:"Käyttöehdot",home:"Korut, timantit ja kellot Antalyassa"},
  sv:{privacy:"Integritetspolicy",terms:"Villkor",home:"Smycken, diamanter och klockor i Antalya"},
  fr:{privacy:"Politique de confidentialité",terms:"Conditions générales",home:"Joaillerie, diamants et montres à Antalya"},
  it:{privacy:"Informativa sulla privacy",terms:"Termini e condizioni",home:"Gioielli, diamanti e orologi ad Antalya"},
  es:{privacy:"Política de privacidad",terms:"Términos y condiciones",home:"Joyería, diamantes y relojes en Antalya"},
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function normalizePublicPath(slug?: string[]): PublicRoute | null {
  const path = !slug?.length ? "/" : `/${slug.join("/")}`;
  return (PUBLIC_ROUTES as readonly string[]).includes(path) ? (path as PublicRoute) : null;
}

export function localizedUrl(locale: Locale, path: string) {
  return `${SITE_URL}/${locale}${path === "/" ? "" : path}`;
}

export function languageAlternates(path: string) {
  const entries = Object.fromEntries(LOCALES.map((locale) => [locale, localizedUrl(locale, path)]));
  return { ...entries, "x-default": localizedUrl(DEFAULT_LOCALE, path) };
}

function routeTitle(locale: Locale, path: PublicRoute) {
  const nav = dictionaries[locale].nav;
  const titles: Partial<Record<PublicRoute, string>> = {
    "/": legalTitles[locale].home,
    "/collections": nav.collections,
    "/pearls": nav.pearls,
    "/wedding-rings": nav.wedding,
    "/signature-style": nav.signature,
    "/brilliants": nav.brilliants,
    "/diamonds": nav.diamonds,
    "/design": nav.design,
    "/bespoke": nav.bespoke,
    "/watches": nav.watches,
    "/watches/mens": nav.watchesMens,
    "/watches/womens": nav.watchesWomens,
    "/watches/childrens": nav.watchesChildrens,
    "/watches/sport": nav.watchesSport,
    "/watches/sport/mens": `${nav.watchesSport} — ${nav.watchesMens}`,
    "/watches/sport/womens": `${nav.watchesSport} — ${nav.watchesWomens}`,
    "/watches/gold": nav.watchesGold,
    "/watches/brilliants": nav.watchesBrilliants,
    "/watches/diamonds": nav.watchesDiamonds,
    "/watches/bespoke": nav.watchesBespoke,
    "/investment-gold": nav.investment,
    "/investment-diamonds": nav.investmentDiamonds,
    "/services": nav.services,
    "/boutiques": nav.boutiques,
    "/about": nav.about,
    "/contact": nav.contact,
    "/privacy": legalTitles[locale].privacy,
    "/terms": legalTitles[locale].terms,
  };
  return titles[path] || "LIDYA Jewellery";
}

export function internationalSeoCopy(locale: Locale, path: PublicRoute) {
  const title = routeTitle(locale, path);
  return {
    title: path === "/" ? `LIDYA Jewellery | ${title}` : `${title} | LIDYA Jewellery`,
    description: `${title}. ${genericDescription[locale]}`,
  };
}
