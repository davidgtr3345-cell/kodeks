import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 py-2 backdrop-blur-md transition hover:bg-white/8"
      aria-label="Početna"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-white">
        <span className="text-sm font-semibold">K</span>
      </div>

      <div className="leading-none">
        <div className="text-sm font-semibold text-white">Kodeks</div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">
          Studio
        </div>
      </div>
    </Link>
  );
}
