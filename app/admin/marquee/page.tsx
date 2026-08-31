import { adminSupabase } from "@/utils/supabase/admin";
import { createMarqueeApp } from "./actions";
import { MarqueeRow } from "./_components/MarqueeRow";

export const dynamic = "force-dynamic";

export default async function MarqueePage() {
  const { data: apps } = await adminSupabase
    .from("marquee_apps")
    .select("*")
    .order("sort_order");

  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 8, color: "#2C2418" }}>
        Marquee
      </h1>
      <p style={{ color: "#8A7A6A", fontSize: 14, marginBottom: 32 }}>
        "Trusted by 20+ studios" bölümündeki ikonlar
      </p>

      {/* Mevcut ikonlar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 40 }}>
        {apps?.map((app: any) => (
          <MarqueeRow key={app.id} app={app} />
        ))}
      </div>

      {/* Yeni marquee app */}
      <div style={{ background: "#E6D8C3", borderRadius: 8, border: "1px solid #C2A68C", padding: "24px 20px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: "#2C2418" }}>Yeni İkon Ekle</h2>
        <form action={createMarqueeApp} encType="multipart/form-data"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "flex-end" }}>
          <label style={labelStyle}>
            <span style={labelText}>Ad</span>
            <input name="name" required style={inlineInput} placeholder="Pockly" />
          </label>
          <label style={labelStyle}>
            <span style={labelText}>Renk</span>
            <input type="color" name="bg" defaultValue="#3D5A80"
              style={{ width: 44, height: 40, borderRadius: 6, border: "1px solid #C2A68C",
                cursor: "pointer", padding: 2, display: "block" }} />
          </label>
          <label style={labelStyle}>
            <span style={labelText}>Harf</span>
            <input name="initial" required maxLength={2} style={{ ...inlineInput, width: 64 }} placeholder="P" />
          </label>
          <label style={labelStyle}>
            <span style={labelText}>Sıra</span>
            <input name="sort_order" type="number" defaultValue={apps ? apps.length + 1 : 1}
              style={{ ...inlineInput, width: 72 }} />
          </label>
          <label style={labelStyle}>
            <span style={labelText}>İkon</span>
            <label style={{
              display: "inline-flex", alignItems: "center", padding: "9px 14px",
              borderRadius: 6, background: "#F5F5F0", border: "1px solid #C2A68C",
              fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#5C4F3D",
            }}>
              Dosya Seç
              <input type="file" name="icon" accept="image/png,image/jpeg,image/webp" style={{ display: "none" }} />
            </label>
          </label>
          <button type="submit" style={{ ...saveBtn, padding: "10px 20px" }}>Ekle</button>
        </form>
      </div>
    </div>
  );
}

const inlineInput: React.CSSProperties = {
  padding: "9px 12px", borderRadius: 6, border: "1.5px solid #C2A68C",
  background: "#F5F5F0", fontSize: 14, boxSizing: "border-box", color: "#2C2418",
};

const saveBtn: React.CSSProperties = {
  padding: "9px 16px", borderRadius: 6, background: "#5D866C",
  color: "#F5F5F0", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", flexShrink: 0,
};

const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6 };
const labelText: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "#2C2418" };
