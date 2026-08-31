"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "../apps/actions";

const navItems = [
  { href: "/admin/apps",     label: "Portfolio Apps" },
  { href: "/admin/marquee",  label: "Marquee" },
  { href: "/admin/contacts", label: "Contacts" },
];

function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6, background: "#5D866C", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 10px rgba(93,134,108,0.3)",
      }}>
        <span style={{ color: "#F5F5F0", fontSize: 11, fontWeight: 800 }}>JP</span>
      </div>
      <div>
        <div style={{ color: "#2C2418", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
          JustPublisher
        </div>
        <div style={{ color: "#C2A68C", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Admin Panel
        </div>
      </div>
    </div>
  );
}

function NavLinks({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  return (
    <nav style={{ flex: 1, padding: "24px 12px" }}>
      {navItems.map(({ href, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            style={{
              display: "block", padding: "10px 12px", borderRadius: 6,
              color: active ? "#2C2418" : "#8A7A6A",
              background: active ? "rgba(93,134,108,0.12)" : "transparent",
              fontSize: 14, fontWeight: active ? 600 : 500,
              textDecoration: "none", marginBottom: 2,
              transition: "background 150ms, color 150ms",
            }}
            className="hover:bg-[rgba(93,134,108,0.10)] hover:!text-[#2C2418]"
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AdminSidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Desktop sidebar ────────────────────────────────────────── */}
      <aside className="hidden md:flex" style={{
        width: 220, flexShrink: 0,
        background: "#F5F5F0",
        borderRight: "1px solid #C2A68C",
        flexDirection: "column",
        padding: "32px 0", position: "sticky", top: 0, height: "100vh",
      }}>
        <div style={{ padding: "0 24px 28px", borderBottom: "1px solid #E6D8C3" }}>
          <Brand />
        </div>
        <NavLinks />
        <form action={signOut} style={{ padding: "0 12px" }}>
          <button type="submit" style={{
            width: "100%", padding: "10px 12px", borderRadius: 6,
            background: "transparent", border: "none",
            color: "#C2A68C", fontSize: 14, cursor: "pointer", textAlign: "left",
          }}>
            Çıkış yap
          </button>
        </form>
      </aside>

      {/* ── Mobile top bar ─────────────────────────────────────────── */}
      <header className="flex md:hidden items-center justify-between" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "#F5F5F0", borderBottom: "1px solid #C2A68C",
        padding: "14px 20px", height: 56,
      }}>
        <Brand />
        <button
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#2C2418" }}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="19" y2="6" />
            <line x1="3" y1="12" x2="19" y2="12" />
            <line x1="3" y1="18" x2="19" y2="18" />
          </svg>
        </button>
      </header>

      {/* ── Mobile drawer overlay ──────────────────────────────────── */}
      {open && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex" }}
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(44,36,24,0.35)" }} />

          {/* Drawer */}
          <div
            style={{
              position: "relative", width: 260, height: "100%",
              background: "#F5F5F0", borderRight: "1px solid #C2A68C",
              display: "flex", flexDirection: "column",
              padding: "0 0 24px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 20px 20px", borderBottom: "1px solid #E6D8C3",
            }}>
              <Brand />
              <button
                onClick={() => setOpen(false)}
                aria-label="Kapat"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#8A7A6A", padding: 4 }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              </button>
            </div>

            <NavLinks onClose={() => setOpen(false)} />

            <form action={signOut} style={{ padding: "0 12px" }}>
              <button type="submit" style={{
                width: "100%", padding: "10px 12px", borderRadius: 6,
                background: "transparent", border: "none",
                color: "#C2A68C", fontSize: 14, cursor: "pointer", textAlign: "left",
              }}>
                Çıkış yap
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
