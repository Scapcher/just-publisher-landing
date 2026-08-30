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
          <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em" }}>Portfolio Apps</h1>
          <p style={{ color: "#6B6A55", fontSize: 14, marginTop: 4 }}>
            {apps?.length ?? 0} uygulama
          </p>
        </div>
        <Link href="/admin/apps/new" style={btnStyle}>
          + Yeni App
        </Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {apps?.map((app) => (
          <div
            key={app.slug}
            style={{
              background: "#FFFDF4",
              borderRadius: 14,
              border: "1px solid #E7E1B1",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 44, height: 44, borderRadius: 12,
                background: app.bg, color: "#FFFDF4",
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
              <div style={{ fontWeight: 600, fontSize: 15 }}>{app.name}</div>
              <div style={{ color: "#6B6A55", fontSize: 13, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {app.subtitle}
              </div>
            </div>

            {/* Ratings */}
            <div style={{ display: "flex", gap: 20, flexShrink: 0 }}>
              <span style={statStyle}>★ {app.app_store_rating}</span>
              <span style={statStyle}>★ {app.play_store_rating}</span>
              <span style={{ ...statStyle, color: "#6B6A55" }}>#{app.sort_order}</span>
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
  background: "#306D29",
  color: "#FFFDF4",
  padding: "10px 20px",
  borderRadius: 10,
  fontWeight: 600,
  fontSize: 14,
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const statStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#1A1A12",
};

const editBtnStyle: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: 8,
  background: "#F0EDD0",
  color: "#1A1A12",
  fontSize: 13,
  fontWeight: 500,
  textDecoration: "none",
  border: "1px solid #E7E1B1",
};

const deleteBtnStyle: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: 8,
  background: "transparent",
  color: "#991B1B",
  fontSize: 13,
  fontWeight: 500,
  border: "1px solid #FECACA",
  cursor: "pointer",
};
