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
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 700, letterSpacing: "-0.025em", color: "#2C2418" }}>
            Portfolio Apps
          </h1>
          <p style={{ color: "#8A7A6A", fontSize: 14, marginTop: 4 }}>
            {apps?.length ?? 0} uygulama
          </p>
        </div>
        <Link href="/admin/apps/new" style={btnStyle}>
          + Yeni
        </Link>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2">
        {apps?.map((app: any) => (
          <div
            key={app.slug}
            style={{
              background: "#F5F5F0",
              borderRadius: 8,
              border: "1px solid #C2A68C",
              padding: "14px 16px",
              boxShadow: "0 1px 4px rgba(44,36,24,0.06)",
            }}
            className="flex items-center gap-3"
          >
            {/* Icon */}
            <div style={{
              width: 40, height: 40, borderRadius: 8,
              background: app.bg, color: "#F5F5F0",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 14, flexShrink: 0, overflow: "hidden",
            }}>
              {app.icon_url ? (
                <Image src={app.icon_url} alt={app.name} width={40} height={40}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }} unoptimized />
              ) : app.initial}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#2C2418" }}>{app.name}</div>
              <div className="hidden sm:block" style={{ color: "#8A7A6A", fontSize: 12, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {app.subtitle}
              </div>
            </div>

            {/* Ratings — desktop only */}
            <div className="hidden sm:flex gap-4 shrink-0">
              <span style={statStyle}>★ {app.app_store_rating}</span>
              <span style={statStyle}>★ {app.play_store_rating}</span>
              <span style={{ ...statStyle, color: "#C2A68C" }}>#{app.sort_order}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 shrink-0">
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
  background: "#5D866C", color: "#F5F5F0",
  padding: "9px 16px", borderRadius: 6,
  fontWeight: 600, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap",
};

const statStyle: React.CSSProperties = {
  fontSize: 13, fontWeight: 600, color: "#5D866C",
};

const editBtnStyle: React.CSSProperties = {
  padding: "6px 12px", borderRadius: 4,
  background: "rgba(93,134,108,0.10)", color: "#3D6B52",
  fontSize: 13, fontWeight: 500, textDecoration: "none",
  border: "1px solid rgba(93,134,108,0.3)",
};

const deleteBtnStyle: React.CSSProperties = {
  padding: "6px 12px", borderRadius: 4,
  background: "transparent", color: "#991B1B",
  fontSize: 13, fontWeight: 500,
  border: "1px solid rgba(239,68,68,0.25)", cursor: "pointer",
};
