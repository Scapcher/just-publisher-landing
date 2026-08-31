import Link from "next/link";
import { signOut } from "./apps/actions";

export const metadata = { title: "Admin — JustPublisher", robots: "noindex" };

const navItems = [
  { href: "/admin/apps",     label: "Portfolio Apps" },
  { href: "/admin/marquee",  label: "Marquee" },
  { href: "/admin/contacts", label: "Contacts" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F5F0" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 220, flexShrink: 0,
          background: "#F5F5F0",
          borderRight: "1px solid #C2A68C",
          display: "flex", flexDirection: "column",
          padding: "32px 0", position: "sticky", top: 0, height: "100vh",
        }}
      >
        {/* Brand */}
        <div style={{ padding: "0 24px 32px", borderBottom: "1px solid #E6D8C3" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div
              style={{
                width: 28, height: 28, borderRadius: 7,
                background: "#5D866C",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 10px rgba(93,134,108,0.3)",
              }}
            >
              <span style={{ color: "#F5F5F0", fontSize: 11, fontWeight: 800 }}>JP</span>
            </div>
            <span style={{ color: "#2C2418", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>
              JustPublisher
            </span>
          </div>
          <p style={{ color: "#C2A68C", fontSize: 11, marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Admin Panel
          </p>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "24px 12px" }}>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block", padding: "10px 12px", borderRadius: 6,
                color: "#8A7A6A", fontSize: 14, fontWeight: 500,
                textDecoration: "none", marginBottom: 2,
                transition: "background 150ms, color 150ms",
              }}
              className="hover:bg-[rgba(93,134,108,0.10)] hover:!text-[#2C2418]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Sign out */}
        <form action={signOut} style={{ padding: "0 12px" }}>
          <button
            type="submit"
            style={{
              width: "100%", padding: "10px 12px", borderRadius: 6,
              background: "transparent", border: "none",
              color: "#C2A68C", fontSize: 14, cursor: "pointer", textAlign: "left",
            }}
          >
            Çıkış yap
          </button>
        </form>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: "40px 48px", maxWidth: 960, color: "#2C2418" }}>
        {children}
      </main>
    </div>
  );
}
