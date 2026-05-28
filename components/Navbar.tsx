"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Početna" },
  { href: "/projects", label: "Projekti" },
  { href: "/about", label: "Studio" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111d]/85 backdrop-blur-xl">
      <div className="container-main">
        <div className="navbar-row flex h-18 items-center justify-between gap-3 md:h-20 md:gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0c1729] text-[#8ff1e3] shadow-[0_12px_30px_rgba(0,0,0,0.18)] md:h-12 md:w-12">
              <span className="text-[18px] font-semibold md:text-[20px]">Ƶ</span>
            </div>

            <div className="min-w-0 leading-none">
              <div className="truncate text-[14px] font-semibold tracking-tight text-white md:text-[15px]">
                Kodeks
              </div>
              <div className="mt-1 truncate text-[11px] font-medium uppercase tracking-[0.2em] text-[#9eb0c7] md:text-[12px]">
                Studio
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href !== "/#kontakt" && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition ${
                    isActive ? "text-white" : "text-[#b8c4d6] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/#kontakt" className="brand-button">
              Pošalji upit
            </Link>
          </div>

          <button
            type="button"
            className="mobile-menu-button inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0c1729] text-white transition hover:bg-white/5 lg:hidden"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Meni</span>
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="border-t border-white/10 py-4 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href !== "/#kontakt" && pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-[15px] font-medium transition ${
                      isActive
                        ? "bg-white/5 text-white"
                        : "text-[#d7deea] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4">
              <Link
                href="/#kontakt"
                className="brand-button w-full"
                onClick={() => setOpen(false)}
              >
                Pošalji upit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}