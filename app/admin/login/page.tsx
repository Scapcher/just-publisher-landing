import { signIn } from "./actions";

export const metadata = { title: "Admin Giriş — JustPublisher", robots: "noindex" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F5F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#F5F5F0",
          borderRadius: 10,
          padding: "40px 36px",
          width: 360,
          border: "1px solid #C2A68C",
          boxShadow: "0 8px 40px rgba(44,36,24,0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6, background: "#5D866C",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#F5F5F0", fontSize: 11, fontWeight: 800 }}>JP</span>
          </div>
          <h1 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: "#2C2418" }}>
            JustPublisher Admin
          </h1>
        </div>
        <p style={{ color: "#8A7A6A", fontSize: 14, marginBottom: 28 }}>
          Devam etmek için kullanıcı adı ve şifrenizi girin.
        </p>

        {error && (
          <div
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: 6,
              padding: "10px 14px",
              color: "#991B1B",
              fontSize: 13,
              marginBottom: 20,
            }}
          >
            {error}
          </div>
        )}

        <form action={signIn} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>Kullanıcı Adı</span>
            <input
              type="text"
              name="username"
              required
              autoComplete="username"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#2C2418" }}>Şifre</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              style={inputStyle}
            />
          </label>

          <button type="submit" style={btnStyle}>
            Giriş yap
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 6,
  border: "1.5px solid #C2A68C",
  background: "#F5F5F0",
  fontSize: 14,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  color: "#2C2418",
};

const btnStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: 6,
  background: "#5D866C",
  color: "#F5F5F0",
  fontWeight: 600,
  fontSize: 15,
  border: "none",
  cursor: "pointer",
  marginTop: 8,
};
