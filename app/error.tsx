"use client";

import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-panel-strong max-w-xl w-full rounded-4xl p-8 md:p-10 text-center">
        <p className="text-cyan-300 text-sm font-semibold mb-3">Greška</p>
        <h1 className="text-4xl font-bold text-white mb-4">
          Došlo je do problema prilikom učitavanja
        </h1>
        <p className="text-slate-400 leading-8 mb-8">
          Desila se neočekivana greška. Pokušaj ponovo ili se vrati na početnu
          stranicu.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => reset()} className="brand-button">
            Pokušaj ponovo
          </button>

          <Link href="/" className="ghost-button">
            Nazad na početnu
          </Link>
        </div>
      </div>
    </main>
  );
}