"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ClientRegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/client/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error || "Registrácia sa nepodarila.");
        return;
      }

      setMessage(payload.message || "Registrácia bola úspešná.");
      if (!payload.emailConfirmationRequired) {
        window.location.href = "/client";
      }
    } catch {
      setError("Registrácia momentálne nie je dostupná.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#120817] px-5 py-12 text-[#fffdf9]">
      <div className="mx-auto max-w-lg rounded-[2rem] border border-[#c8a96a]/20 bg-white/[0.04] p-7 shadow-2xl md:p-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p>
          <h1 className="mt-4 text-4xl">Client Registration</h1>
          <p className="mt-3 text-sm leading-6 text-white/45">Vytvorte si súkromný účet pre servis, dopyty, rezervácie a budúce objednávky.</p>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4">
          {[
            ["Meno a priezvisko", "name", "text"],
            ["Email", "email", "email"],
            ["Telefón", "phone", "tel"],
            ["Heslo", "password", "password"],
          ].map(([label, key, type]) => (
            <label key={key} className="block">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#e8d8b5]/70">{label}</span>
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition focus:border-[#c8a96a]/70"
                required={key !== "phone"}
                minLength={key === "password" ? 8 : undefined}
              />
            </label>
          ))}

          {message && <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">{message}</div>}
          {error && <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

          <button disabled={loading} className="w-full rounded-xl bg-[#c8a96a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#120817] disabled:opacity-50">
            {loading ? "Vytváram účet..." : "Vytvoriť účet"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/40">Už máte účet? <Link href="/client/login" className="text-[#c8a96a]">Prihlásiť sa</Link></p>
      </div>
    </main>
  );
}
