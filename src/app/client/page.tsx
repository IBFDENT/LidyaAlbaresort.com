"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ClientUser = {
  email?: string;
  user_metadata?: {
    full_name?: string;
    phone?: string;
  };
};

const cards = [
  ["Moje dopyty", "Sledujte požiadavky na šperky, hodinky a zákazkovú výrobu.", "0 otvorených"],
  ["Servis", "Stav čistenia, opráv šperkov a servisných požiadaviek hodiniek.", "Žiadny aktívny servis"],
  ["Rezervácie", "Hotel Alba Resort, transfer a budúce letenky na jednom mieste.", "0 rezervácií"],
  ["Obľúbené", "Uložte si produkty a kolekcie, ku ktorým sa chcete vrátiť.", "0 položiek"],
];

export default function ClientDashboardPage() {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/client/me", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          window.location.href = "/client/login";
          return null;
        }
        return response.json();
      })
      .then((payload) => {
        if (payload?.user) setUser(payload.user);
      })
      .finally(() => setLoading(false));
  }, []);

  async function logout() {
    await fetch("/api/client/logout", { method: "POST" });
    window.location.href = "/client/login";
  }

  if (loading) {
    return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">LIDYA</main>;
  }

  if (!user) return null;

  const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "Client";

  return (
    <main className="min-h-screen bg-[#120817] text-[#fffdf9]">
      <header className="border-b border-[#c8a96a]/15 bg-black/15 px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c8a96a]">LIDYA Jewellery</p>
            <p className="mt-1 text-sm text-white/35">Private Client Area</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Späť na web</Link>
            <button onClick={logout} className="rounded-full border border-[#c8a96a]/30 px-4 py-2 text-xs text-[#e8d8b5]">Odhlásiť</button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <section className="rounded-[2rem] border border-[#c8a96a]/18 bg-white/[0.035] p-7 md:p-10">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a96a]">Welcome back</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Vitajte, {name}.</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/45">Váš súkromný LIDYA účet bude centrálnym miestom pre dopyty, servis, individuálne návrhy, rezervácie a neskôr aj objednávky a certifikáty.</p>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, text, meta]) => (
            <article key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[#c8a96a]/25">
              <p className="text-lg text-white/90">{title}</p>
              <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#c8a96a]/70">{meta}</p>
            </article>
          ))}
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Client services</p>
            <h2 className="mt-2 text-2xl">Čo môžete cez účet spravovať</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Bespoke jewellery request", "Watch service", "Jewellery care", "Investment consultation", "Alba Resort stay", "Airport transfer"].map((item) => (
                <div key={item} className="rounded-xl border border-white/7 bg-black/15 px-4 py-4 text-sm text-white/65">{item}</div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-[#c8a96a]/15 bg-[#c8a96a]/5 p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Profil</p>
            <div className="mt-5 space-y-4 text-sm">
              <div><p className="text-white/30">Meno</p><p className="mt-1 text-white/75">{name}</p></div>
              <div><p className="text-white/30">Email</p><p className="mt-1 text-white/75">{user.email}</p></div>
              <div><p className="text-white/30">Telefón</p><p className="mt-1 text-white/75">{user.user_metadata?.phone || "—"}</p></div>
              <div><p className="text-white/30">Status</p><p className="mt-1 text-emerald-300">Verified client</p></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
