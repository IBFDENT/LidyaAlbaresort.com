# LIDYA JEWELRY — Architektonický návrh a implementačný plán

**Status:** Pripravené na odovzdanie do Claude Code (Fáza 3 podľa master promptu)
**Zdroj:** Audit `index_6.html` (jednosúborový statický web, DE/EN/TR, bez backendu)
**Cieľ:** Next.js/TypeScript/Supabase/Stripe produkčná platforma

---

## 0. Čo musíte mať pripravené PRED spustením implementácie

Toto je zoznam účtov a rozhodnutí, ktoré blokujú reálnu (nie simulovanú) funkčnosť. Bez nich Claude Code postaví aplikáciu v "dev/demo režime" — čo je v poriadku na začiatok, ale tieto veci si pripravte priebežne:

| # | Čo | Prečo | Kedy je nutné |
|---|----|----|----|
| 1 | GitHub účet + prázdne repo | verzovanie kódu | deň 1 |
| 2 | Node.js (LTS) + VS Code | lokálny vývoj | deň 1 |
| 3 | Supabase projekt (DB + Auth + Storage) | databáza, prihlásenie, upload fotiek | deň 1–2 |
| 4 | Vercel účet, prepojený s GitHub repom | hosting/nasadenie | deň 1–2, deploy môže ísť aj skôr v demo režime |
| 5 | Stripe účet (aspoň test mode) | platby | pred checkout testami |
| 6 | Doména (ak už nie je) + DNS prístup | vlastná URL | pred produkčným spustením |
| 7 | Resend účet (alebo iný transakčný e-mail provider) | potvrdenia objednávok, reset hesla | skoro, formuláre bez toho nefungujú reálne |
| 8 | Rozhodnutie: dodávateľ live ceny zlata (metals-api.com, GoldAPI a pod.) | Investment Gold sekcia | môže počkať — bez kľúča sa zobrazí "Price on request" |
| 9 | Rozhodnutie: hotelové booking API alebo len dopytový formulár | Alba hotel rezervácie | môže počkať, štartuje sa v dopytovom režime |
| 10 | Rozhodnutie: letenkový partner (affiliate/API) alebo len concierge dopyt | Flights modul | môže počkať |
| 11 | Rozhodnutie: dopravca pre poistené zásielky (DHL/UPS/špecializovaný) | Repair concierge preprava | môže počkať, štartuje sa manuálne |
| 12 | Právnik na kontrolu GDPR/obchodných podmienok pred ostrým spustením | compliance | pred launchom, nie pred vývojom |

**Dôležité:** nič z bodov 8–11 nezablokuje vývoj. Podľa vášho promptu (bod 29) sa tieto miesta postavia ako "integračné adaptéry" s jasne označeným demo/dopytovým režimom, kým nedodáte kľúče.

---

## 1. Tech stack (konkrétne verzie na zváženie pri štarte)

- Next.js 14+ (App Router), React 18+, TypeScript (strict mode)
- Tailwind CSS
- Supabase (PostgreSQL, Auth, Storage, RLS)
- Stripe (Payment Element + Webhooks)
- Resend (transakčné e-maily) + React Email pre šablóny
- next-intl (i18n s URL routingom `/en`, `/de`, `/sk`, `/cs`, `/hu`, `/pl`)
- Zod (validácia vstupov, server aj client)
- Vitest + React Testing Library + Playwright

---

## 2. Štruktúra projektu

```
/app
  /[locale]
    /(shop)
      /page.tsx                     → homepage
      /collections/[slug]
      /product/[slug]
      /cart
      /checkout
      /diamonds
      /diamonds/[slug]
      /investment-gold
      /investment-gold/[slug]
      /repair
      /repair/track/[id]
      /bespoke
      /visit-us
      /journey-planner
      /account/*
    /(legal)
      /privacy, /terms, /shipping, /returns, ...
    /api
      /stripe/checkout
      /stripe/webhook
      /orders
      /service-requests
      /appointments
      /hotel-requests
      /transfer-requests
      /flight-requests
      /gold-price
      /newsletter
      /contact
  /admin
    /(dashboard routes chránené RBAC middlewarom)
/components
  /ui  /product  /cart  /checkout  /account  /admin  /marketing
/features
  /catalog  /diamonds  /gold  /repair  /booking  /journey  /admin
/lib
  /supabase  /stripe  /email  /whatsapp  /validation  /rbac
/services         → adaptéry: shipping, hotel, transfer, flight, metals-price
/types
/hooks
/i18n
  /messages/{en,de,sk,cs,hu,pl}.json
/supabase
  /migrations
  /seed
/emails            → React Email šablóny
/tests
  /unit /integration /e2e
```

---

## 3. Databázová schéma — kľúčové tabuľky a vzťahy

Zoskupené podľa domény (presné SQL migrácie sa generujú v Claude Code):

**Identita a účty**
`users`, `profiles`, `addresses`, `consent_records`

**Katalóg**
`products`, `product_translations`, `product_images`, `variants`, `inventory`, `categories`, `category_translations`, `collections`, `gemstones`

**Diamanty**
`diamonds` (4C + rozmery + certifikát), `diamond_certificates`

**Investičné zlato**
`gold_products`, `gold_price_snapshots` (audit trail cien + čas platnosti locku)

**Nákup**
`carts`, `cart_items`, `wishlists`, `orders`, `order_items`, `payments`, `refunds`, `shipments`, `tracking_events`, `promo_codes`

**Servis / oprava**
`service_requests`, `service_items`, `service_files`, `service_quotes`, `service_status_history` (immutable log so stavmi zo sekcie 9 promptu)

**Rezervácie a cestovanie**
`appointments`, `boutiques`, `hotel_requests`, `transfer_requests`, `flight_requests`, `journey_plans`

**Prevádzka**
`messages`, `email_logs`, `audit_logs`, `reviews`, `newsletter_subscribers`

**Princípy:**
- Ceny sa NIKDY nečítajú od klienta — server prepočíta z `products`/`variants`/`gold_price_snapshots`.
- RLS policy pre každú tabuľku: zákazník vidí len svoje riadky, `service_role` kľúč len na serveri.
- Soft delete pre `products`, `orders`, `service_requests` (história sa nemaže).
- `audit_logs` sa zapisuje pri každej admin akcii meniacej stav objednávky/servisu/ceny.

---

## 4. Kľúčové toky (na overenie pred implementáciou)

**Platba (Stripe):**
`cart` → server prepočíta cenu → `POST /api/stripe/checkout` vytvorí Payment Intent s metadátami objednávky → klient platí → **Stripe webhook** (nie redirect!) nastaví `orders.status = paid` → e-mail cez Resend → zníženie skladu s idempotency kľúčom.

**Servisná zákazka:**
formulár + upload fotiek do Supabase Storage → `service_requests` (status `request_received`) → admin priradí servisné číslo → zákazník sleduje cez `/repair/track/[id]` + bezpečnostný kód → každá zmena stavu = záznam v `service_status_history` + voliteľný e-mail.

**Investičné zlato — cenový lock:**
ak je `METALS_API_KEY` nastavený → live cena + countdown lock (napr. 5 min) → pred platbou server znova overí cenu → ak vypršala, checkout sa zruší a ponúkne refresh. Bez kľúča → `Price on request` / kontakt na investičný desk.

**Hotel/Transfer/Flight:**
vždy explicitne UI stav: `nezáväzný dopyt` / `čaká na potvrdenie` / `potvrdené` / `rezervované cez partnera` — nikdy sa nesmie dopyt tváriť ako potvrdená rezervácia (kritický zákaz z promptu, bod 33).

---

## 5. Fázovaný implementačný plán (odporúčané poradie pre Claude Code)

1. **Scaffold** — Next.js + TS + Tailwind + i18n routing (6 jazykov), migrácia dizajn tokenov z `index_6.html`
2. **Supabase setup** — schéma, RLS, seed dáta (produkty z pôvodného indexu ako štartovací katalóg)
3. **Katalóg + produktová stránka** — statický obsah najprv, potom napojenie na DB
4. **Košík + checkout + Stripe test mode + webhook**
5. **Zákaznícky účet** (Supabase Auth, objednávky, wishlist)
6. **Repair concierge** — formulár, upload, tracking, admin stavy
7. **Diamonds + Investment Gold** moduly (s demo/price-on-request režimom)
8. **Booking moduly** — appointments, hotel, transfer, flight (dopytový režim)
9. **Admin dashboard + RBAC**
10. **SEO, accessibility, performance pass**
11. **Testy (Vitest/Playwright)**
12. **Dokumentácia + `.env.example` + launch checklist**

Toto poradie zabezpečí, že po každej fáze máte **funkčnú, nasaditeľnú verziu** na Verceli — nie rozostavaný projekt.

---

## 6. Environment variables (príprava `.env.example`)

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
EMAIL_FROM=
EMAIL_ADMIN=albalidya@hotmail.com
NEXT_PUBLIC_WHATSAPP_DENIZ=905325672777
NEXT_PUBLIC_WHATSAPP_ZAFER=905336534074
METALS_API_KEY=
SHIPPING_API_KEY=
HOTEL_BOOKING_API_KEY=
TRANSFER_API_KEY=
FLIGHT_API_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

---

## 7. Prvý príkaz pre Claude Code (odporúčaný)

Keď budete mať pripravené GitHub + Supabase + Vercel, dajte Claude Code presne toto ako prvú úlohu — nie celý pôvodný 2000-riadkový prompt naraz:

> "Sprav scaffold Next.js 14 App Router + TypeScript + Tailwind projektu podľa priloženého `LIDYA_JEWELRY_ARCHITECTURE.md`. Zachovaj dizajnové tokeny (farby, fonty, animácie) z priloženého `index_6.html`. Nastav i18n routing pre 6 jazykov (en, de, sk, cs, hu, pl) cez next-intl. Vytvor len Fázu 1 z implementačného plánu (scaffold + design tokens), commitni do gitu, over že `npm run build` prejde bez chyby."

Takto pôjdete fázu po fáze — každá s funkčným, testovateľným výstupom — namiesto jedného obrovského nekontrolovateľného kroku.

---

*Tento dokument vychádza z pôvodného master promptu (35 bodov) a z auditu `index_6.html`. Slúži ako referenčná špecifikácia pre implementáciu — detailné SQL migrácie, konkrétne API kontrakty a komponentovú štruktúru odporúčam generovať priamo v Claude Code fázu po fáze, s priebežnou kontrolou buildu.*
