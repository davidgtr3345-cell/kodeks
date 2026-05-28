type LogoProps = {
  compact?: boolean;
};

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 5H14.5L9.5 12L14.5 19H6"
            stroke="#69E0D0"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 5L18 8.5L13.5 12L18 15.5L13.5 19"
            stroke="#F4F7FB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.92"
          />
        </svg>
      </div>

      {!compact && (
        <div className="leading-none">
          <span className="block text-[15px] font-semibold tracking-[-0.03em] text-white">
            Kodeks
          </span>
          <span className="block pt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8FA0BA]">
            Studio
          </span>
        </div>
      )}
    </div>
  );
}