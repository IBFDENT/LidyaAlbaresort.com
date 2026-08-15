"use client";

import { FormEvent, useState } from "react";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === "Fero" && password === "Pacan") {
      setLoggedIn(true);
      setError("");
      return;
    }

    setError("Nesprávne meno alebo heslo.");
  }

  if (loggedIn) {
    return (
      <main className="min-h-screen bg-[#120817] px-6 py-12 text-[#fffdf9]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between border-b border-[#c8a96a]/20 pb-6">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#c8a96a]">LIDYA Jewellery</p>
              <h1 className="text-4xl text-[#fffdf9] md:text-5xl">Admin Dashboard</h1>
            </div>
            <button
              type="button"
              onClick={() => {
                setLoggedIn(false);
                setName("");
                setPassword("");
              }}
              className="rounded-full border border-[#c8a96a]/40 px-5 py-2 text-sm text-[#e8d8b5] transition hover:bg-[#c8a96a] hover:text-[#120817]"
            >
              Odhlásiť
            </button>
          </div>

          <section className="rounded-3xl border border-[#c8a96a]/20 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c8a96a]">Welcome</p>
            <h2 className="mb-4 text-3xl text-[#fffdf9] md:text-4xl">Vitaj, Fero.</h2>
            <p className="max-w-2xl leading-7 text-white/60">
              Admin rozhranie LIDYA je pripravené. Tu budeme postupne pridávať správu produktov,
              kolekcií, objednávok, servisu, rezervácií a obsahu webovej stránky.
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#120817] px-6 py-12">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c8a96a]/10 blur-[130px]" />

      <div className="relative w-full max-w-md rounded-[2rem] border border-[#c8a96a]/25 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-2xl md:p-10">
        <div className="mb-9 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p>
          <h1 className="mb-3 text-4xl text-[#fffdf9]">Administration</h1>
          <p className="text-sm text-white/45">Prihláste sa do administračného rozhrania.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="admin-name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#e8d8b5]/70">
              Meno
            </label>
            <input
              id="admin-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="username"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-[#fffdf9] outline-none transition placeholder:text-white/20 focus:border-[#c8a96a]/70"
              placeholder="Zadajte meno"
              required
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#e8d8b5]/70">
              Heslo
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-[#fffdf9] outline-none transition placeholder:text-white/20 focus:border-[#c8a96a]/70"
              placeholder="Zadajte heslo"
              required
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#c8a96a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#120817] transition hover:bg-[#e8d8b5]"
          >
            Prihlásiť sa
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.25em] text-white/25">
          Lidya Jewellery · Alba Resort
        </p>
      </div>
    </main>
  );
}
