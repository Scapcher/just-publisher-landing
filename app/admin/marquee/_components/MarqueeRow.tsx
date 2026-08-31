"use client";

import { useState } from "react";
import Image from "next/image";
import { updateMarqueeApp, deleteMarqueeApp } from "../actions";

interface MarqueeApp {
  id: string;
  name: string;
  bg: string;
  initial: string;
  sort_order: number;
  icon_url?: string | null;
}

export function MarqueeRow({ app }: { app: MarqueeApp }) {
  const [bg, setBg] = useState(app.bg);
  const [preview, setPreview] = useState<string | null>(app.icon_url ?? null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  }

  return (
    <div style={{
      background: "#F5F5F0", borderRadius: 6,
      border: "1px solid #C2A68C", padding: "12px 16px",
      display: "flex", alignItems: "center", gap: 14,
      boxShadow: "0 1px 3px rgba(44,36,24,0.05)",
    }}>
      {/* Icon preview */}
      <div style={{
        width: 44, height: 44, borderRadius: 10, background: bg,
        color: "#F5F5F0", display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: 16, flexShrink: 0, overflow: "hidden",
        transition: "background 150ms",
      }}>
        {preview
          ? <Image src={preview} alt={app.name} width={44} height={44}
              style={{ objectFit: "cover", width: "100%", height: "100%" }} unoptimized />
          : app.initial}
      </div>

      {/* Update form */}
      <form action={updateMarqueeApp} encType="multipart/form-data"
        style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, flexWrap: "wrap" }}>
        <input type="hidden" name="id" value={app.id} />

        <input name="name" defaultValue={app.name} required
          style={{ ...inp, flex: 1, minWidth: 80 }} placeholder="Ad" />

        <input type="color" name="bg" defaultValue={app.bg}
          onChange={(e) => setBg(e.target.value)}
          style={{ width: 38, height: 36, borderRadius: 6, border: "1px solid #C2A68C",
            cursor: "pointer", padding: 2, flexShrink: 0 }} />

        <input name="initial" defaultValue={app.initial} required maxLength={2}
          style={{ ...inp, width: 48 }} placeholder="T" />

        <input name="sort_order" type="number" defaultValue={app.sort_order}
          style={{ ...inp, width: 58 }} />

        {/* File upload */}
        <label style={{
          display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px",
          borderRadius: 6, background: "#E6D8C3", border: "1px solid #C2A68C",
          fontSize: 12, fontWeight: 500, cursor: "pointer", flexShrink: 0, color: "#5C4F3D",
        }}>
          İkon
          <input type="file" name="icon" accept="image/png,image/jpeg,image/webp"
            style={{ display: "none" }} onChange={handleFile} />
        </label>

        <button type="submit" style={saveBtn}>Kaydet</button>
      </form>

      {/* Delete — ayrı form */}
      <form
        action={deleteMarqueeApp}
        onSubmit={(e) => { if (!confirm(`"${app.name}" silinsin mi?`)) e.preventDefault(); }}
      >
        <input type="hidden" name="id" value={app.id} />
        <button type="submit" style={deleteBtn}>Sil</button>
      </form>
    </div>
  );
}

const inp: React.CSSProperties = {
  padding: "8px 11px", borderRadius: 6, border: "1.5px solid #C2A68C",
  background: "#F5F5F0", fontSize: 14, boxSizing: "border-box", color: "#2C2418",
};

const saveBtn: React.CSSProperties = {
  padding: "8px 14px", borderRadius: 4, background: "#5D866C",
  color: "#F5F5F0", fontSize: 13, fontWeight: 600, border: "none",
  cursor: "pointer", flexShrink: 0,
};

const deleteBtn: React.CSSProperties = {
  padding: "8px 12px", borderRadius: 4, background: "transparent",
  color: "#991B1B", fontSize: 13, border: "1px solid rgba(239,68,68,0.3)",
  cursor: "pointer",
};
