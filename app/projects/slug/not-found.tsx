import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen px-6 py-16 bg-slate-50 text-slate-800 flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-red-500 font-semibold mb-4">
          404 greška
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Projekat nije pronađen
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Slug koji si otvorio ne postoji u listi projekata.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Nazad na početnu
        </Link>
      </div>
    </main>
  );
}