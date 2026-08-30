import Link from "next/link";
import { signOut } from "./apps/actions";

export const metadata = { title: "Admin — JustPublisher", robots: "noindex" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F0E0" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          background: "#1A1A12",
          display: "flex",
          flexDirection: "column",
          padding: "32px 0",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <div style={{ padding: "0 24px 32px", borderBottom: "1px solid rgba(255,253,244,0.08)" }}>
          <span style={{ color: "#FFFDF4", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>
            JustPublisher
          </span>
          <p style={{ color: "#6B6A55", fontSize: 11, marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Admin
          </p>
        </div>

        <nav style={{ flex: 1, padding: "24px 12px" }}>
          {[
            { href: "/admin/apps",    label: "Portfolio Apps" },
            { href: "/admin/marquee", label: "Marquee" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                padding: "10px 12px",
                borderRadius: 8,
                color: "#C8C4A0",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                marginBottom: 2,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <form action={signOut} style={{ padding: "0 12px" }}>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              background: "transparent",
              border: "none",
              color: "#6B6A55",
              fontSize: 14,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Çıkış yap
          </button>
        </form>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: "40px 48px", maxWidth: 960 }}>
        {children}
      </main>
    </div>
  );
}
