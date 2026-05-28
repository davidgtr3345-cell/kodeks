"use client";

type ProjectErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProjectError({
  error,
  reset,
}: ProjectErrorProps) {
  return (
    <main className="min-h-screen px-6 py-16 bg-slate-50 text-slate-800 flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-red-500 font-semibold mb-4">
          Došlo je do greške
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nešto je pošlo po zlu
        </h1>

        <p className="text-lg text-slate-600 mb-3">
          Došlo je do neočekivane greške pri otvaranju projekta.
        </p>

        <p className="text-sm text-slate-400 mb-8">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Pokušaj ponovo
        </button>
      </div>
    </main>
  );
}