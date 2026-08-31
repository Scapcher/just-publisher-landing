"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { cn } from "@/lib/utils";

function JPIcon() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "#700B97",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 0 12px rgba(142,5,194,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      <span style={{ color: "#F0E8FF", fontSize: 12, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>
        JP
      </span>
    </div>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: "rgba(62,6,95,0.5)", opacity: progress > 0 ? 1 : 0 }}
      />
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: `${progress}%`,
          background: "#700B97",
          transition: "width 80ms linear",
          boxShadow: "0 0 10px rgba(142,5,194,0.7)",
        }}
      />
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();
  const { nav } = t;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-[280ms] ease-out",
          scrolled
            ? "border-b shadow-elev-1"
            : "border-b border-transparent"
        )}
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.88)"
            : "rgba(0,0,0,0.6)",
          backdropFilter: "blur(20px) saturate(140%)",
          WebkitBackdropFilter: "blur(20px) saturate(140%)",
          borderColor: scrolled ? "rgba(62,6,95,0.5)" : "transparent",
        }}
      >
        <ScrollProgressBar />
        <div className="max-w-container mx-auto px-[clamp(20px,5vw,48px)]">
          <nav className="flex items-center justify-between h-16" aria-label="Primary navigation">
            {/* Brand */}
            <a
              href="/"
              className="flex items-center gap-2.5 transition-opacity duration-160 hover:opacity-80"
            >
              <JPIcon />
              <span className="text-[17px] font-semibold tracking-[-0.03em] text-ink">
                {nav.brand}
              </span>
            </a>

            {/* Desktop links + language switcher */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-[15px] font-medium text-muted hover:text-ink transition-colors duration-160 group"
                  >
                    {link.label}
                    <span className="absolute bottom-[-2px] left-0 w-full h-px bg-forest scale-x-0 origin-left transition-transform duration-160 ease-spring group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
              <li>
                <LanguageSwitcher />
              </li>
            </ul>

            {/* Desktop CTA */}
            <a
              href={nav.cta.href}
              className="hidden md:inline-flex items-center gap-2 h-9 px-5 rounded-btn text-ink text-[14px] font-semibold shadow-elev-1 transition-all duration-160 ease-spring group hover:shadow-elev-2"
              style={{
                background: "#700B97",
                boxShadow: "0 0 16px rgba(112,11,151,0.3)",
              }}
            >
              {nav.cta.label}
              <span aria-hidden="true" className="transition-transform duration-160 ease-spring group-hover:translate-x-1">→</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={cn("block w-5 h-0.5 bg-ink transition-all duration-280 ease-smooth", menuOpen && "translate-y-2 rotate-45")} />
              <span className={cn("block w-5 h-0.5 bg-ink transition-all duration-280 ease-smooth", menuOpen && "opacity-0")} />
              <span className={cn("block w-5 h-0.5 bg-ink transition-all duration-280 ease-smooth", menuOpen && "-translate-y-2 -rotate-45")} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 flex flex-col items-start justify-center px-10"
          style={{ background: "#000000" }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-6 list-none w-full">
            {nav.links.map((link, i) => (
              <li key={link.href} className="animate-hero-0" style={{ animationDelay: `${i * 40}ms` }}>
                <a
                  href={link.href}
                  className="text-[32px] font-bold tracking-[-0.03em] text-ink hover:text-forest transition-colors duration-160"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="animate-hero-0 mt-2" style={{ animationDelay: `${nav.links.length * 40}ms` }}>
              <LanguageSwitcher />
            </li>
            <li className="animate-hero-0 mt-2" style={{ animationDelay: `${(nav.links.length + 1) * 40}ms` }}>
              <a
                href={nav.cta.href}
                className="inline-flex items-center gap-2 h-14 px-7 rounded-btn text-ink text-lg font-semibold"
                style={{ background: "#700B97" }}
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
