export type NavLabelKey =
  | "home"
  | "collections"
  | "pearls"
  | "wedding"
  | "signature"
  | "diamonds"
  | "design"
  | "bespoke"
  | "watches"
  | "watchesMens"
  | "watchesWomens"
  | "watchesChildrens"
  | "watchesGold"
  | "watchesSport"
  | "watchesBrilliants"
  | "watchesDiamonds"
  | "watchesBespoke"
  | "investment"
  | "investmentDiamonds"
  | "investmentMenu"
  | "brilliants"
  | "services"
  | "about"
  | "boutiques"
  | "contact";

export type NavItem = {
  href: string;
  labelKey: NavLabelKey;
  children?: NavItem[];
};

// SEO PRE-LAUNCH MODE
// Keep visitors on the finished, indexable homepage while the catalogue/admin
// workflow is being completed. Full category navigation can be restored later.
export const NAV_ITEMS: NavItem[] = [
  { href: "/#home", labelKey: "home" },
  { href: "/#collections", labelKey: "collections" },
  { href: "/#services", labelKey: "services" },
  { href: "/#about", labelKey: "about" },
  { href: "/#boutiques", labelKey: "boutiques" },
  { href: "/#contact", labelKey: "contact" },
];
