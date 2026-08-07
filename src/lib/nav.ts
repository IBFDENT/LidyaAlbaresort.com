export type NavLabelKey =
  | "home"
  | "collections"
  | "pearls"
  | "wedding"
  | "diamonds"
  | "design"
  | "bespoke"
  | "investment"
  | "investmentMenu"
  | "brilliants"
  | "services"
  | "about"
  | "boutiques"
  | "contact";

export type NavItem = {
  href: string;
  labelKey: NavLabelKey;
  /** Optional dropdown children — when present, the parent renders as a
   *  menu trigger rather than a direct link on desktop. */
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/#home", labelKey: "home" },
  {
    href: "/#collections",
    labelKey: "collections",
    children: [
      { href: "/pearls", labelKey: "pearls" },
      { href: "/wedding-rings", labelKey: "wedding" },
      { href: "/brilliants", labelKey: "brilliants" },
      { href: "/design", labelKey: "design" },
      { href: "/#catalog", labelKey: "bespoke" },
    ],
  },
  {
    href: "/#investment",
    labelKey: "investmentMenu",
    children: [
      { href: "/#investment", labelKey: "investment" },
      { href: "/diamonds", labelKey: "diamonds" },
    ],
  },
  { href: "/#services", labelKey: "services" },
  { href: "/#about", labelKey: "about" },
  { href: "/#boutiques", labelKey: "boutiques" },
  { href: "/#contact", labelKey: "contact" },
];
