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

  /**
   * Optional dropdown children.
   * When present, the parent renders as a menu trigger
   * rather than a direct link on desktop.
   */
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    labelKey: "home",
  },

  {
    href: "/collections",
    labelKey: "collections",
    children: [
      {
        href: "/pearls",
        labelKey: "pearls",
      },
      {
        href: "/wedding-rings",
        labelKey: "wedding",
      },
      {
        href: "/signature-style",
        labelKey: "signature",
      },
      {
        href: "/brilliants",
        labelKey: "brilliants",
      },
      {
        href: "/design",
        labelKey: "design",
      },
      {
        href: "/bespoke",
        labelKey: "bespoke",
      },
    ],
  },

  {
    href: "/watches",
    labelKey: "watches",
    children: [
      {
        href: "/watches/mens",
        labelKey: "watchesMens",
      },
      {
        href: "/watches/womens",
        labelKey: "watchesWomens",
      },
      {
        href: "/watches/childrens",
        labelKey: "watchesChildrens",
      },
      {
        href: "/watches/gold",
        labelKey: "watchesGold",
      },
      {
        href: "/watches/sport",
        labelKey: "watchesSport",
      },
      {
        href: "/watches/brilliants",
        labelKey: "watchesBrilliants",
      },
      {
        href: "/watches/diamonds",
        labelKey: "watchesDiamonds",
      },
      {
        href: "/watches/bespoke",
        labelKey: "watchesBespoke",
      },
    ],
  },

  {
    href: "/investment-gold",
    labelKey: "investmentMenu",
    children: [
      {
        href: "/investment-gold",
        labelKey: "investment",
      },
      {
        href: "/investment-diamonds",
        labelKey: "investmentDiamonds",
      },
    ],
  },

  {
    href: "/services",
    labelKey: "services",
  },

  {
    href: "/about",
    labelKey: "about",
  },

  {
    href: "/boutiques",
    labelKey: "boutiques",
  },

  {
    href: "/contact",
    labelKey: "contact",
  },
];