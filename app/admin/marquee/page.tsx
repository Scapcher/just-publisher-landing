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
      <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 8 }}>
        Marquee
      </h1>
      <p style={{ color: "#6B6A55", fontSize: 14, marginBottom: 32 }}>
        "Trusted by 20+ studios" bölümündeki ikonlar
      </p>

      {/* Mevcut ikonlar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
        {apps?.map((app) => (
          <MarqueeRow key={app.id} app={app} />
        ))}
      </div>

      {/* Yeni marquee app */}
      <div style={{ background: "#FFFDF4", borderRadius: 16, border: "1px solid #E7E1B1", padding: "24px 20px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Yeni İkon Ekle</h2>
        <form action={createMarqueeApp} encType="multipart/form-data"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "flex-end" }}>
          <label style={labelStyle}>
            <span style={labelText}>Ad</span>
            <input name="name" required style={inlineInput} placeholder="Pockly" />
          </label>
          <label style={labelStyle}>
            <span style={labelText}>Renk</span>
            <input type="color" name="bg" defaultValue="#3D5A80"
              style={{ width: 44, height: 40, borderRadius: 8, border: "1px solid #E7E1B1",
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
              borderRadius: 8, background: "#F0EDD0", border: "1px solid #E7E1B1",
              fontSize: 13, fontWeight: 500, cursor: "pointer",
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
  padding: "9px 12px", borderRadius: 8, border: "1.5px solid #E7E1B1",
  background: "#FFFDF4", fontSize: 14, boxSizing: "border-box",
};

const saveBtn: React.CSSProperties = {
  padding: "9px 16px", borderRadius: 8, background: "#306D29",
  color: "#FFFDF4", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", flexShrink: 0,
};

const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6 };
const labelText: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "#1A1A12" };
