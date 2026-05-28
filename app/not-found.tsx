import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">404 - Stranica nije pronađena</h1>
        <p className="text-slate-600 mb-8">
          Stranica koju tražiš ne postoji ili je premještena.
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