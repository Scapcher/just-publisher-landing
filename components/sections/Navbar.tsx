"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

function JPIcon() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "#306D29",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
      }}
    >
      <span
        style={{
          color: "#FFFDF4",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        JP
      </span>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { nav } = content;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-canvas transition-all duration-[240ms] ease-out",
          scrolled
            ? "border-b border-sand shadow-elev-1"
            : "border-b border-transparent"
        )}
      >
        <div className="max-w-container mx-auto px-[clamp(20px,5vw,48px)]">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Primary navigation"
          >
            {/* Brand */}
            <a
              href="/"
              className="flex items-center gap-2.5 text-ink hover:text-forest transition-colors duration-160 group"
            >
              <JPIcon />
              <span className="text-[18px] font-semibold tracking-[-0.03em]">
                {nav.brand}
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative text-[16px] font-medium text-ink hover:text-forest transition-colors duration-160 group"
                  >
                    {link.label}
                    <span className="absolute bottom-[-2px] left-0 w-full h-px bg-forest scale-x-0 origin-left transition-transform duration-160 ease-spring group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href={nav.cta.href}
              className="hidden md:inline-flex items-center gap-2 h-10 px-6 rounded-btn bg-forest text-paper text-[15px] font-semibold shadow-elev-1 hover:bg-pine transition-all duration-160 ease-spring group"
            >
              {nav.cta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-160 ease-spring group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={cn(
                  "block w-5 h-0.5 bg-ink transition-all duration-280 ease-smooth",
                  menuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-ink transition-all duration-280 ease-smooth",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-ink transition-all duration-280 ease-smooth",
                  menuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-canvas flex flex-col items-start justify-center px-10"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-6 list-none w-full">
            {nav.links.map((link, i) => (
              <li
                key={link.label}
                className="animate-hero-0"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <a
                  href={link.href}
                  className="text-[32px] font-bold tracking-[-0.03em] text-ink hover:text-forest transition-colors duration-160"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              className="animate-hero-0 mt-4"
              style={{ animationDelay: `${nav.links.length * 40}ms` }}
            >
              <a
                href={nav.cta.href}
                className="inline-flex items-center gap-2 h-14 px-7 rounded-btn bg-forest text-paper text-lg font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {nav.cta.label} →
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
