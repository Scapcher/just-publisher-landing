import { createApp } from "../actions";
import { AppForm } from "../_components/AppForm";

export default function NewAppPage() {
  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 32 }}>
        Yeni App Ekle
      </h1>
      <div style={{ background: "#FFFDF4", borderRadius: 16, border: "1px solid #E7E1B1", padding: "32px 28px", maxWidth: 760 }}>
        <AppForm action={createApp} />
      </div>
    </div>
  );
}
