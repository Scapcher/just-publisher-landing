import { createApp } from "../actions";
import { AppForm } from "../_components/AppForm";

export default function NewAppPage() {
  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 32, color: "#2C2418" }}>
        Yeni App Ekle
      </h1>
      <div style={{ background: "#F5F5F0", borderRadius: 8, border: "1px solid #C2A68C", padding: "32px 28px", maxWidth: 760 }}>
        <AppForm action={createApp} />
      </div>
    </div>
  );
}
