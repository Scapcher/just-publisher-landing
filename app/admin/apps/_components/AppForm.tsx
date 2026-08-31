"use client";

import { useState } from "react";
import Image from "next/image";

interface AppData {
  slug?: string;
  name?: string;
  subtitle?: string;
  description?: string;
  app_store_rating?: number;
  play_store_rating?: number;
  rating_count?: string;
  age_rating?: string;
  bg?: string;
  initial?: string;
  app_store_url?: string;
  play_store_url?: string;
  sort_order?: number;
  icon_url?: string | null;
  screenshot_1_url?: string | null;
  screenshot_2_url?: string | null;
}

interface Props {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: AppData;
  isEdit?: boolean;
}

export function AppForm({ action, defaultValues: d = {}, isEdit }: Props) {
  const [iconPreview, setIconPreview]   = useState<string | null>(d.icon_url ?? null);
  const [ss1Preview,  setSs1Preview]    = useState<string | null>(d.screenshot_1_url ?? null);
  const [ss2Preview,  setSs2Preview]    = useState<string | null>(d.screenshot_2_url ?? null);
  const [bg, setBg] = useState(d.bg ?? "#3D5A80");

  return (
    <form action={action} encType="multipart/form-data" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {isEdit && <input type="hidden" name="originalSlug" value={d.slug ?? ""} />}

      {/* Medya upload — ikon + 2 screenshot yan yana */}
      <div>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", display: "block", marginBottom: 12 }}>
          Görseller
        </span>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <UploadSlot
            label="Uygulama İkonu"
            name="icon"
            preview={iconPreview}
            onFile={(url) => setIconPreview(url)}
            shape="icon"
            bg={bg}
            initial={d.initial}
            hint="1024×1024 önerilir"
          />
          <UploadSlot
            label="Ekran Görüntüsü 1"
            name="screenshot_1"
            preview={ss1Preview}
            onFile={(url) => setSs1Preview(url)}
            shape="screen"
            hint="Portrait — örn. 390×844"
          />
          <UploadSlot
            label="Ekran Görüntüsü 2"
            name="screenshot_2"
            preview={ss2Preview}
            onFile={(url) => setSs2Preview(url)}
            shape="screen"
            hint="Portrait — örn. 390×844"
          />
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #C2A68C" }} />

      <Row>
        <Field label="Slug" name="slug" defaultValue={d.slug} required placeholder="trackd" readOnly={isEdit} />
        <Field label="Ad" name="name" defaultValue={d.name} required placeholder="Trackd" />
      </Row>

      <Field label="Subtitle" name="subtitle" defaultValue={d.subtitle} required placeholder="#1 Productivity chart in 12 countries." />
      <Field label="Açıklama" name="description" defaultValue={d.description} required multiline placeholder="2-3 cümle açıklama..." />

      <Row>
        <Field label="App Store Puanı" name="app_store_rating" type="number" step="0.1" min="1" max="5" defaultValue={d.app_store_rating} required placeholder="4.7" />
        <Field label="Play Store Puanı" name="play_store_rating" type="number" step="0.1" min="1" max="5" defaultValue={d.play_store_rating} required placeholder="4.6" />
      </Row>

      <Row>
        <Field label="Rating Sayısı" name="rating_count" defaultValue={d.rating_count} required placeholder="19.3K" />
        <Field label="Yaş Kısıtı" name="age_rating" defaultValue={d.age_rating} required placeholder="4+" />
      </Row>

      <Row>
        <ColorField label="Fallback Renk" name="bg" defaultValue={bg} onChange={setBg} />
        <Field label="Fallback Harf" name="initial" defaultValue={d.initial} required placeholder="T" maxLength={2} />
        <Field label="Sıra" name="sort_order" type="number" defaultValue={d.sort_order} required placeholder="1" />
      </Row>

      <Row>
        <Field label="App Store URL" name="app_store_url" defaultValue={d.app_store_url} required placeholder="https://apps.apple.com/..." />
        <Field label="Play Store URL" name="play_store_url" defaultValue={d.play_store_url} required placeholder="https://play.google.com/..." />
      </Row>

      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <button type="submit" style={submitBtn}>{isEdit ? "Kaydet" : "Oluştur"}</button>
        <a href="/admin/apps" style={cancelBtn}>İptal</a>
      </div>
    </form>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: 16 }}>{children}</div>;
}

function Field({
  label, name, defaultValue, required, placeholder, type = "text",
  multiline, readOnly, step, min, max, maxLength,
}: {
  label: string; name: string; defaultValue?: string | number;
  required?: boolean; placeholder?: string; type?: string;
  multiline?: boolean; readOnly?: boolean; step?: string;
  min?: string; max?: string; maxLength?: number;
}) {
  const style: React.CSSProperties = {
    padding: "10px 14px", borderRadius: 6,
    border: "1.5px solid #C2A68C",
    background: readOnly ? "#E6D8C3" : "#F5F5F0",
    fontSize: 14, width: "100%", boxSizing: "border-box",
    color: readOnly ? "#8A7A6A" : "#2C2418",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>{label}</span>
      {multiline ? (
        <textarea name={name} defaultValue={defaultValue as string} required={required}
          placeholder={placeholder} rows={4} style={{ ...style, resize: "vertical" }} />
      ) : (
        <input name={name} type={type} defaultValue={defaultValue as string}
          required={required} placeholder={placeholder} readOnly={readOnly}
          step={step} min={min} max={max} maxLength={maxLength} style={style} />
      )}
    </label>
  );
}

function ColorField({ label, name, defaultValue, onChange }: {
  label: string; name: string; defaultValue: string; onChange?: (v: string) => void;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input type="color" name={name} defaultValue={defaultValue}
          onChange={(e) => onChange?.(e.target.value)}
          style={{ width: 44, height: 44, borderRadius: 6, border: "1.5px solid #C2A68C", cursor: "pointer", padding: 2 }} />
      </div>
    </label>
  );
}

function UploadSlot({
  label, name, preview, onFile, shape, bg, initial, hint,
}: {
  label: string;
  name: string;
  preview: string | null;
  onFile: (url: string) => void;
  shape: "icon" | "screen";
  bg?: string;
  initial?: string;
  hint?: string;
}) {
  const isIcon   = shape === "icon";
  const w        = isIcon ? 80  : 72;
  const h        = isIcon ? 80  : 128;
  const radius   = isIcon ? 14  : 8;

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, cursor: "pointer" }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#2C2418" }}>{label}</span>

      <div style={{
        width: w, height: h, borderRadius: radius,
        background: preview ? "transparent" : (isIcon ? (bg ?? "#C2A68C") : "#E6D8C3"),
        border: "1.5px solid #C2A68C",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", flexShrink: 0, position: "relative",
        boxShadow: "0 2px 6px rgba(44,36,24,0.08)",
      }}>
        {preview ? (
          <Image src={preview} alt={label} width={w} height={h}
            style={{ objectFit: "cover", width: "100%", height: "100%" }} unoptimized />
        ) : isIcon ? (
          <span style={{ color: "#F5F5F0", fontWeight: 700, fontSize: 28 }}>{initial ?? "?"}</span>
        ) : (
          <span style={{ color: "#C2A68C", fontSize: 11, textAlign: "center", padding: "0 8px" }}>Görsel yok</span>
        )}
        <div style={{
          position: "absolute", inset: 0, background: "rgba(44,36,24,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: 0, transition: "opacity 150ms",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
        >
          <span style={{ color: "#F5F5F0", fontSize: 11, fontWeight: 600 }}>Değiştir</span>
        </div>
      </div>

      {hint && <span style={{ fontSize: 11, color: "#8A7A6A" }}>{hint}</span>}

      <input
        type="file" name={name}
        accept="image/png,image/jpeg,image/webp"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(URL.createObjectURL(file));
        }}
      />
    </label>
  );
}

const submitBtn: React.CSSProperties = {
  padding: "12px 28px", borderRadius: 6, background: "#5D866C",
  color: "#F5F5F0", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer",
};
const cancelBtn: React.CSSProperties = {
  padding: "12px 28px", borderRadius: 6, background: "#E6D8C3",
  color: "#5C4F3D", fontWeight: 500, fontSize: 15, textDecoration: "none",
  border: "1px solid #C2A68C", display: "inline-flex", alignItems: "center",
};
