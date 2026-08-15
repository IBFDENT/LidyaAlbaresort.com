"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/auth/session", { cache: "no-store" })
      .then((response) => {
        if (response.ok) window.location.href = "/admin";
      })
      .finally(() => setChecking(false));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error || "Prihlásenie sa nepodarilo.");
        return;
      }

      window.location.href = "/admin";
    } catch {
      setError("Prihlásenie momentálne nie je dostupné.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#120817] px-6 py-12 text-[#fffdf9]">
      <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#c8a96a]/10 blur-[135px]" />
      <div className="relative w-full max-w-md rounded-[2rem] border border-[#c8a96a]/25 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-2xl md:p-10">
        <div className="text-center">
          <Image src="/images/lidya-logo.png" alt="LIDYA" width={320} height={100} priority className="mx-auto h-14 w-auto object-contain" />
          <p className="mt-5 text-[10px] uppercase tracking-[0.38em] text-[#c8a96a]">Secure Administration</p>
          <h1 className="mt-4 text-4xl">Admin Login</h1>
          <p className="mt-3 text-sm leading-6 text-white/45">Prihlásenie je chránené cez Supabase Auth a administračné role.</p>
        </div>

        {checking ? (
          <p className="mt-8 text-center text-sm text-white/35">Kontrolujem session…</p>
        ) : (
          <form onSubmit={submit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#e8d8b5]/70">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" required className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-[#c8a96a]/70" placeholder="admin@email.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#e8d8b5]/70">Heslo</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-[#c8a96a]/70" placeholder="••••••••" />
            </label>

            {error && <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

            <button disabled={loading} className="w-full rounded-xl bg-[#c8a96a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#120817] transition hover:bg-[#e8d8b5] disabled:opacity-50">
              {loading ? "Prihlasujem…" : "Prihlásiť sa bezpečne"}
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-[9px] uppercase tracking-[0.22em] text-white/20">LIDYA Jewellery · Alba Resort · Authorized staff only</p>
      </div>
    </main>
  );
}
