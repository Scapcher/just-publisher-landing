"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/translations";

const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "tr", label: "Türkçe",  native: "TR" },
];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch language"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          height: compact ? 30 : 34,
          padding: compact ? "0 8px" : "0 10px",
          borderRadius: 7,
          background: "rgba(240,232,255,0.05)",
          border: "1px solid rgba(142,5,194,0.22)",
          color: "#9080A8",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.06em",
          cursor: "pointer",
          transition: "border-color 150ms, color 150ms, background 150ms",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(142,5,194,0.5)";
          (e.currentTarget as HTMLButtonElement).style.color = "#F0E8FF";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(142,5,194,0.22)";
          (e.currentTarget as HTMLButtonElement).style.color = "#9080A8";
        }}
      >
        {/* Globe icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0, opacity: 0.7 }}
        >
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="8" cy="8" rx="2.5" ry="6.5" stroke="currentColor" strokeWidth="1.2" />
          <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="currentColor" strokeWidth="1.2" />
          <line x1="2.5" y1="5" x2="13.5" y2="5" stroke="currentColor" strokeWidth="1.2" />
          <line x1="2.5" y1="11" x2="13.5" y2="11" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        {current.native}
        {/* Chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 180ms",
            opacity: 0.6,
          }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Language"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            minWidth: 130,
            borderRadius: 9,
            background: "#0A0018",
            border: "1px solid rgba(142,5,194,0.28)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(62,6,95,0.3)",
            padding: "4px",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {LOCALES.map((l) => {
            const isActive = l.code === locale;
            return (
              <button
                key={l.code}
                role="option"
                aria-selected={isActive}
                onClick={() => { setLocale(l.code); setOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 6,
                  background: isActive ? "rgba(142,5,194,0.14)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 150ms",
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "rgba(142,5,194,0.08)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: isActive ? "#F0E8FF" : "#9080A8",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {l.label}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: isActive ? "#8E05C2" : "rgba(144,128,168,0.5)",
                  }}
                >
                  {l.native}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
