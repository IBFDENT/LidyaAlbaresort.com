"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

import TurnstileWidget from "@/components/TurnstileWidget";

export default function ClientLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setConfirmed(new URLSearchParams(window.location.search).get("confirmed") === "1");
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (!captchaToken) {
      setError("Dokončite bezpečnostné overenie.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/client/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      });
      const payload = await response.json();
      if (!response.ok) {
        setError(payload.error || "Prihlásenie sa nepodarilo.");
        return;
      }
      window.location.href = "/client";
    } catch {
      setError("Prihlásenie momentálne nie je dostupné.");
    } finally {
      setLoading(false);
      setCaptchaToken("");
      setCaptchaKey((current) => current + 1);
    }
  }

  return (
    <main className="min-h-screen bg-[#120817] px-5 py-12 text-[#fffdf9]">
      <div className="mx-auto max-w-md rounded-[2rem] border border-[#c8a96a]/20 bg-white/[0.04] p-7 shadow-2xl md:p-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p>
          <h1 className="mt-4 text-4xl">Client Login</h1>
          <p className="mt-3 text-sm text-white/45">Vstup do vášho súkromného klientského účtu.</p>
        </div>

        {confirmed && (
          <div className="mt-7 rounded-2xl border border-[#c8a96a]/30 bg-[#c8a96a]/10 px-5 py-5 text-center shadow-[0_0_40px_rgba(200,169,106,0.08)]">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96a]/40 bg-[#c8a96a]/10 text-lg text-[#e8d8b5]">✓</div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-[#c8a96a]">Welcome to LIDYA</p>
            <h2 className="mt-2 text-xl text-[#fffdf9]">Your email has been confirmed.</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">Váš klientský účet je aktívny. Teraz sa môžete bezpečne prihlásiť.</p>
          </div>
        )}

        <form onSubmit={submit} className="mt-7 space-y-4">
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#e8d8b5]/70">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none focus:border-[#c8a96a]/70" required />
          </label>
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#e8d8b5]/70">Heslo</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none focus:border-[#c8a96a]/70" required />
          </label>

          <div className="flex justify-end">
            <Link href="/client/forgot-password" className="text-xs tracking-wide text-[#c8a96a] transition hover:text-[#e8d8b5]">Forgot password?</Link>
          </div>

          <TurnstileWidget key={captchaKey} onTokenChange={setCaptchaToken} />

          {error && <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

          <button disabled={loading || !captchaToken} className="w-full rounded-xl bg-[#c8a96a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#120817] disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? "Prihlasujem..." : "Prihlásiť sa"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/40">Nemáte účet? <Link href="/client/register" className="text-[#c8a96a]">Registrácia</Link></p>
      </div>
    </main>
  );
}
