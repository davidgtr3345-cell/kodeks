import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07101b]">
      <div className="container-main py-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_0.9fr]">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="max-w-md text-[15px] leading-7 text-[#afbdd0]">
              Web stranice i digitalna rješenja sa fokusom na jasan sadržaj,
              ozbiljan izgled i bolji prvi utisak.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8fa3bd]">
              Navigacija
            </p>
            <div className="flex flex-col gap-3 text-[15px] text-[#dbe6f5]">
              <Link href="/">Početna</Link>
              <Link href="/projects">Projekti</Link>
              <Link href="/about">Studio</Link>
              <Link href="/#kontakt">Kontakt</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8fa3bd]">
              Kontakt
            </p>

            <div className="space-y-3 text-[15px] text-[#dbe6f5]">
              <p>kontakt@kodeksstudio.ba</p>
            </div>

            <p className="mt-12 text-[14px] text-[#8997ad]">
              © 2026 Kodeks Studio sva prava zadržana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}