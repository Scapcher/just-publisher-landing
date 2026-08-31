import Link from "next/link";
import Image from "next/image";
import { adminSupabase } from "@/utils/supabase/admin";
import { deleteApp } from "./actions";
import { DeleteButton } from "../_components/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AppsPage() {
  const { data: apps } = await adminSupabase
    .from("portfolio_apps")
    .select("*")
    .order("sort_order");

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", color: "#2C2418" }}>Portfolio Apps</h1>
          <p style={{ color: "#8A7A6A", fontSize: 14, marginTop: 4 }}>
            {apps?.length ?? 0} uygulama
          </p>
        </div>
        <Link href="/admin/apps/new" style={btnStyle}>
          + Yeni App
        </Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {apps?.map((app: any) => (
          <div
            key={app.slug}
            style={{
              background: "#F5F5F0",
              borderRadius: 8,
              border: "1px solid #C2A68C",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              boxShadow: "0 1px 4px rgba(44,36,24,0.06)",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 44, height: 44, borderRadius: 10,
                background: app.bg, color: "#F5F5F0",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: 16, flexShrink: 0, overflow: "hidden",
              }}
            >
              {app.icon_url ? (
                <Image src={app.icon_url} alt={app.name} width={44} height={44}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }} unoptimized />
              ) : app.initial}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: "#2C2418" }}>{app.name}</div>
              <div style={{ color: "#8A7A6A", fontSize: 13, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {app.subtitle}
              </div>
            </div>

            {/* Ratings */}
            <div style={{ display: "flex", gap: 20, flexShrink: 0 }}>
              <span style={statStyle}>★ {app.app_store_rating}</span>
              <span style={statStyle}>★ {app.play_store_rating}</span>
              <span style={{ ...statStyle, color: "#C2A68C" }}>#{app.sort_order}</span>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <Link href={`/admin/apps/${app.slug}`} style={editBtnStyle}>
                Düzenle
              </Link>
              <DeleteButton
                action={deleteApp}
                confirmMessage={`"${app.name}" silinsin mi?`}
                style={deleteBtnStyle}
              >
                <input type="hidden" name="slug" value={app.slug} />
              </DeleteButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  background: "#5D866C",
  color: "#F5F5F0",
  padding: "10px 20px",
  borderRadius: 6,
  fontWeight: 600,
  fontSize: 14,
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const statStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#5D866C",
};

const editBtnStyle: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: 4,
  background: "rgba(93,134,108,0.10)",
  color: "#3D6B52",
  fontSize: 13,
  fontWeight: 500,
  textDecoration: "none",
  border: "1px solid rgba(93,134,108,0.3)",
};

const deleteBtnStyle: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: 4,
  background: "transparent",
  color: "#991B1B",
  fontSize: 13,
  fontWeight: 500,
  border: "1px solid rgba(239,68,68,0.25)",
  cursor: "pointer",
};
