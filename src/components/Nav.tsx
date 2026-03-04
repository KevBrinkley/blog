"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SECTIONS } from "@/lib/types";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const basePath = pathname?.split("/").filter(Boolean)[0] ?? "feed";
  const activeId = SECTIONS.some((s) => s.id === basePath) ? basePath : "feed";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold text-ink">
          KB
        </Link>

        {/* Desktop: tabs */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {SECTIONS.map(({ id, label }) => {
            const href = id === "feed" ? "/" : `/${id}`;
            const isActive = activeId === id;
            return (
              <Link
                key={id}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-ink text-paper"
                    : "text-mute hover:bg-border/60 hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile: hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border text-ink hover:bg-border/60 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Open"} menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-border bg-paper px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Main">
            {SECTIONS.map(({ id, label }) => {
              const href = id === "feed" ? "/" : `/${id}`;
              const isActive = activeId === id;
              return (
                <Link
                  key={id}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-ink text-paper" : "text-mute hover:bg-border/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
