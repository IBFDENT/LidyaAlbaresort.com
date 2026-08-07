export type NavItem = {
  href: string;
  labelKey:
    | "home"
    | "collections"
    | "pearls"
    | "wedding"
    | "diamonds"
    | "design"
    | "bespoke"
    | "investment"
    | "investmentDiamonds"
    | "services"
    | "about"
    | "boutiques"
    | "contact";
};

export const NAV_ITEMS: NavItem[] = [
  { href: "#home", labelKey: "home" },
  { href: "#collections", labelKey: "collections" },
  { href: "#catalog", labelKey: "pearls" },
  { href: "#catalog", labelKey: "wedding" },
  { href: "#catalog", labelKey: "diamonds" },
  { href: "#catalog", labelKey: "design" },
  { href: "#catalog", labelKey: "bespoke" },
  { href: "#investment", labelKey: "investment" },
  { href: "#investment-diamonds", labelKey: "investmentDiamonds" },
  { href: "#services", labelKey: "services" },
  { href: "#about", labelKey: "about" },
  { href: "#boutiques", labelKey: "boutiques" },
  { href: "#contact", labelKey: "contact" },
];
