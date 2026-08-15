"use client";

import { FormEvent, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
  icon: string;
};

const navItems: NavItem[] = [
  { id: "overview", label: "Prehľad", icon: "◈" },
  { id: "jewellery", label: "Šperky", icon: "◇" },
  { id: "watches", label: "Hodinky", icon: "◉" },
  { id: "collections", label: "Kolekcie", icon: "✦" },
  { id: "investment", label: "Investície", icon: "◆" },
  { id: "services", label: "Servis", icon: "⌁" },
  { id: "travel", label: "Hotel & transfer", icon: "↗" },
  { id: "content", label: "Obsah webu", icon: "▤" },
  { id: "media", label: "Médiá", icon: "▧" },
  { id: "languages", label: "Jazyky", icon: "◎" },
  { id: "seo", label: "SEO", icon: "⌕" },
  { id: "messages", label: "Dopyty", icon: "✉" },
  { id: "settings", label: "Nastavenia", icon: "⚙" },
];

const categoryCards = [
  ["Jewellery", "Prstene, náhrdelníky, náramky, náušnice, perly, svadobné a brilianty", "10 kategórií"],
  ["Watches", "Men, Women, Sport, Children, Gold, Brilliants, Diamonds", "7 kategórií"],
  ["Investment", "Investičné zlato a certifikované investičné diamanty", "2 kategórie"],
  ["Bespoke", "Šperky a hodinky na mieru, výrobný proces a odovzdanie", "Aktívne"],
];

const recentItems = [
  ["Signature Ring", "Jewellery / Rings", "Publikované", "dnes"],
  ["Diamond Accent", "Jewellery / Diamonds", "Publikované", "dnes"],
  ["LIDYA Sport Green", "Watches / Sport Men", "Koncept", "včera"],
  ["1 kg Gold Bar", "Investment Gold", "Publikované", "včera"],
  ["Bespoke Jewellery", "Services", "Publikované", "2 dni"],
];

const contentSections = [
  ["Homepage", "Hero, kategórie, príbeh značky, služby, hotel & transfer", "Live"],
  ["Jewellery", "Kolekcie, detailné kategórie a produktové vizuály", "Live"],
  ["Watches", "7 kolekcií a 18-krokový výrobný proces", "Live"],
  ["Services", "Jewellery care, watch service, bespoke, global delivery", "Live"],
  ["Travel", "Alba Resort, transfer a pripravované letenky", "Live"],
  ["Legal", "Privacy, cookies a právne dokumenty", "Live"],
];

function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8a96a]/70">{label}</p>
      <p className="mt-3 text-3xl font-medium text-[#fffdf9]">{value}</p>
      <p className="mt-2 text-xs text-white/35">{note}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a96a]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl text-[#fffdf9] md:text-4xl">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">{text}</p>
    </div>
  );
}

export default function AdminPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState("overview");
  const [search, setSearch] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const activeLabel = useMemo(
    () => navItems.find((item) => item.id === active)?.label ?? "Prehľad",
    [active]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name === "Fero" && password === "Pacan") {
      setLoggedIn(true);
      setError("");
      return;
    }
    setError("Nesprávne meno alebo heslo.");
  }

  function logout() {
    setLoggedIn(false);
    setName("");
    setPassword("");
    setActive("overview");
  }

  const moduleTitle: Record<string, [string, string]> = {
    jewellery: ["Správa šperkov", "Produkty, kolekcie, hero vizuály a jednotlivé kategórie šperkov."],
    watches: ["Správa hodiniek", "Pánske, dámske, športové, detské, zlaté, briliantové a diamantové hodinky."],
    collections: ["Kolekcie", "Sezónne, signature, wedding, pearls, brilliants a ďalšie vizuálne kolekcie."],
    investment: ["Investičné produkty", "Zlato, mince, tehličky, investičné diamanty a edukačný obsah."],
    services: ["Servis & bespoke", "Čistenie, leštenie, opravy, hodinky, zákazková výroba a globálne doručenie."],
    travel: ["Hotel & transfer", "Alba Resort, transfer z letiska a pripravované letenky."],
    content: ["Obsah webu", "Správa textov, hero sekcií, stránok, právnych textov a informačných blokov."],
    media: ["Médiá", "Hero obrázky, produktové fotografie, logá, favicony a vizuálne assety."],
    languages: ["Jazyky", "Preklady a lokalizácie obsahu pre jednotlivé trhy."],
    seo: ["SEO", "Metadata, indexácia, open graph, sitemap a vyhľadávače."],
    messages: ["Dopyty & kontakty", "Kontaktné formuláre, servisné požiadavky, WhatsApp a emailové leady."],
    settings: ["Nastavenia", "Globálne nastavenia značky, kontakty, sociálne siete a integrácie."],
  };

  function Overview() {
    return (
      <>
        <SectionHeader eyebrow="Control centre" title="LIDYA Admin Dashboard" text="Centrálny prehľad celého webu Lidya Jewellery Alba Resort. Dashboard kopíruje reálnu architektúru webu a pripravuje miesto pre budúce napojenie databázy, objednávok, rezervácií a analytiky." />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Web" value="Online" note="Production · Vercel" />
          <StatCard label="Kategórie" value="19" note="Jewellery, Watches, Investment" />
          <StatCard label="Jazyky" value="6" note="Pripravené na rozšírenie" />
          <StatCard label="Dopyty" value="0" note="Napojíme na formuláre" />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_1fr]">
          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Quick management</p>
                <h3 className="mt-2 text-2xl text-[#fffdf9]">Hlavné oblasti webu</h3>
              </div>
              <button className="rounded-full border border-[#c8a96a]/30 px-4 py-2 text-xs text-[#e8d8b5]">+ Pridať položku</button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {categoryCards.map(([title, text, meta]) => (
                <button key={title} className="group rounded-xl border border-white/8 bg-black/15 p-4 text-left transition hover:border-[#c8a96a]/35 hover:bg-[#c8a96a]/5">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-white/90">{title}</span>
                    <span className="text-xs text-[#c8a96a]">↗</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/40">{text}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/25">{meta}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">System status</p>
            <h3 className="mt-2 text-2xl text-[#fffdf9]">Integrácie</h3>
            <div className="mt-5 space-y-3">
              {[
                ["GitHub", "Connected", true],
                ["Vercel", "Production", true],
                ["Custom domain", "Valid SSL", true],
                ["Supabase", "Pripravené na napojenie", false],
                ["Stripe", "Neskôr", false],
                ["Duffel Flights", "Pripravované", false],
              ].map(([title, state, ready]) => (
                <div key={String(title)} className="flex items-center justify-between rounded-xl border border-white/7 bg-black/15 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${ready ? "bg-emerald-400" : "bg-[#c8a96a]/50"}`} />
                    <span className="text-sm text-white/75">{String(title)}</span>
                  </div>
                  <span className="text-xs text-white/30">{String(state)}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Recent content</p>
              <h3 className="mt-2 text-2xl text-[#fffdf9]">Posledné položky</h3>
            </div>
            <button className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Zobraziť všetko</button>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] text-left">
              <thead className="border-b border-white/8 text-[10px] uppercase tracking-[0.18em] text-white/25">
                <tr><th className="pb-3 font-normal">Názov</th><th className="pb-3 font-normal">Sekcia</th><th className="pb-3 font-normal">Stav</th><th className="pb-3 font-normal">Upravené</th><th className="pb-3 text-right font-normal">Akcia</th></tr>
              </thead>
              <tbody>
                {recentItems.map(([title, section, status, time]) => (
                  <tr key={title} className="border-b border-white/5 text-sm text-white/65">
                    <td className="py-4 text-white/85">{title}</td><td>{section}</td><td><span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-[10px] text-emerald-300">{status}</span></td><td className="text-white/35">{time}</td><td className="text-right"><button className="text-[#c8a96a]">Upraviť</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }

  function ModulePage() {
    const [title, text] = moduleTitle[active] ?? [activeLabel, "Správa vybranej časti webu."];
    const rows = active === "content" ? contentSections : [
      ["Hlavná kolekcia", activeLabel, "Live"],
      ["Hero vizuál", "Desktop + mobile", "Live"],
      ["Textový obsah", "Viacjazyčný", "Live"],
      ["SEO metadata", "Title, description, OG", "Pripravené"],
    ];
    return (
      <>
        <SectionHeader eyebrow="LIDYA Management" title={title} text={text} />
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Publikované" value={active === "content" ? "6" : "4"} note="Aktívne položky" />
          <StatCard label="Koncepty" value="0" note="Nezverejnené zmeny" />
          <StatCard label="Posledná zmena" value="dnes" note="Synchronizované s webom" />
        </div>
        <section className="mt-6 rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Items</p><h3 className="mt-2 text-2xl text-[#fffdf9]">Správa obsahu</h3></div>
            <div className="flex gap-2"><button className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Import</button><button className="rounded-full bg-[#c8a96a] px-4 py-2 text-xs font-semibold text-[#120817]">+ Nová položka</button></div>
          </div>
          <div className="mt-5 grid gap-3">
            {rows.map(([item, detail, status]) => (
              <div key={item} className="flex flex-col gap-3 rounded-xl border border-white/7 bg-black/15 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div><p className="text-sm text-white/85">{item}</p><p className="mt-1 text-xs text-white/35">{detail}</p></div>
                <div className="flex items-center gap-3"><span className="rounded-full border border-[#c8a96a]/20 px-2.5 py-1 text-[10px] text-[#e8d8b5]/70">{status}</span><button className="text-xs text-[#c8a96a]">Upraviť →</button></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-6 rounded-2xl border border-dashed border-[#c8a96a]/25 bg-[#c8a96a]/[0.025] p-6">
          <p className="text-sm text-[#e8d8b5]">Backend napojenie</p>
          <p className="mt-2 max-w-3xl text-xs leading-5 text-white/35">Tento modul je už pripravený vizuálne a navigačne. V ďalšej fáze ho napojíme na Supabase, aby pridávanie, úprava, publikovanie a mazanie položiek menilo obsah webu bez zásahu do kódu.</p>
        </section>
      </>
    );
  }

  if (loggedIn) {
    return (
      <main className="min-h-screen bg-[#0d0710] text-[#fffdf9]">
        <div className="flex min-h-screen">
          <aside className={`${mobileNav ? "fixed inset-y-0 left-0 z-50 flex" : "hidden"} w-[275px] shrink-0 flex-col border-r border-[#c8a96a]/12 bg-[#120817] lg:sticky lg:top-0 lg:flex lg:h-screen`}>
            <div className="border-b border-[#c8a96a]/12 px-6 py-6">
              <div className="flex items-start justify-between"><div><p className="text-[10px] uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p><p className="mt-2 text-xs text-white/35">Alba Resort · Administration</p></div><button onClick={() => setMobileNav(false)} className="text-white/40 lg:hidden">×</button></div>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { setActive(item.id); setMobileNav(false); }} className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${active === item.id ? "bg-[#c8a96a]/12 text-[#e8d8b5]" : "text-white/45 hover:bg-white/[0.035] hover:text-white/75"}`}>
                  <span className="w-5 text-center text-[#c8a96a]/75">{item.icon}</span><span>{item.label}</span>{item.id === "messages" && <span className="ml-auto rounded-full bg-[#c8a96a] px-2 py-0.5 text-[9px] font-bold text-[#120817]">0</span>}
                </button>
              ))}
            </nav>
            <div className="border-t border-[#c8a96a]/12 p-4">
              <div className="rounded-xl border border-white/7 bg-white/[0.025] p-3"><p className="text-xs text-white/70">Fero</p><p className="mt-1 text-[10px] text-white/30">Super Admin</p></div>
              <button onClick={logout} className="mt-3 w-full rounded-xl border border-white/8 px-4 py-2.5 text-xs text-white/40 hover:text-white/70">Odhlásiť sa</button>
            </div>
          </aside>

          {mobileNav && <button aria-label="Close navigation" onClick={() => setMobileNav(false)} className="fixed inset-0 z-40 bg-black/70 lg:hidden" />}

          <section className="min-w-0 flex-1">
            <header className="sticky top-0 z-30 flex h-[72px] items-center gap-3 border-b border-[#c8a96a]/10 bg-[#0d0710]/90 px-4 backdrop-blur-xl md:px-6 xl:px-8">
              <button onClick={() => setMobileNav(true)} className="rounded-lg border border-white/8 px-3 py-2 text-white/50 lg:hidden">☰</button>
              <div className="min-w-0"><p className="truncate text-xs uppercase tracking-[0.18em] text-white/25">Admin / {activeLabel}</p><p className="mt-1 text-sm text-white/65">Lidya Jewellery Alba Resort</p></div>
              <div className="ml-auto hidden w-full max-w-sm md:block"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Hľadať v administrácii…" className="w-full rounded-xl border border-white/8 bg-white/[0.025] px-4 py-2.5 text-xs text-white/70 outline-none placeholder:text-white/20 focus:border-[#c8a96a]/35" /></div>
              <a href="/" target="_blank" className="rounded-xl border border-[#c8a96a]/20 px-3 py-2.5 text-xs text-[#e8d8b5]/70">Web ↗</a>
            </header>

            <div className="mx-auto max-w-[1500px] px-4 py-7 md:px-6 md:py-9 xl:px-8">
              {search && <div className="mb-5 rounded-xl border border-[#c8a96a]/15 bg-[#c8a96a]/5 px-4 py-3 text-xs text-white/55">Hľadanie: <span className="text-[#e8d8b5]">{search}</span> · globálne vyhľadávanie napojíme na databázu.</div>}
              {active === "overview" ? <Overview /> : <ModulePage />}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#120817] px-6 py-12">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c8a96a]/10 blur-[130px]" />
      <div className="relative w-full max-w-md rounded-[2rem] border border-[#c8a96a]/25 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-2xl md:p-10">
        <div className="mb-9 text-center"><p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p><h1 className="mb-3 text-4xl text-[#fffdf9]">Administration</h1><p className="text-sm text-white/45">Prihláste sa do administračného rozhrania.</p></div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div><label htmlFor="admin-name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#e8d8b5]/70">Meno</label><input id="admin-name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="username" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-[#fffdf9] outline-none placeholder:text-white/20 focus:border-[#c8a96a]/70" placeholder="Zadajte meno" required /></div>
          <div><label htmlFor="admin-password" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#e8d8b5]/70">Heslo</label><input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-[#fffdf9] outline-none placeholder:text-white/20 focus:border-[#c8a96a]/70" placeholder="Zadajte heslo" required /></div>
          {error && <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</p>}
          <button type="submit" className="mt-2 w-full rounded-xl bg-[#c8a96a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#120817] transition hover:bg-[#e8d8b5]">Prihlásiť sa</button>
        </form>
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.25em] text-white/25">Lidya Jewellery · Alba Resort</p>
      </div>
    </main>
  );
}
