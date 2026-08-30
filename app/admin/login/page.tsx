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
        background: "#1A1A12",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#FFFDF4",
          borderRadius: 20,
          padding: "40px 36px",
          width: 360,
          boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
        }}
      >
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>
          JustPublisher Admin
        </h1>
        <p style={{ color: "#6B6A55", fontSize: 14, marginBottom: 28 }}>
          Devam etmek için giriş yapın.
        </p>

        {error && (
          <div
            style={{
              background: "#FEE2E2",
              border: "1px solid #FECACA",
              borderRadius: 8,
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
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A12" }}>E-posta</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A12" }}>Şifre</span>
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
  borderRadius: 8,
  border: "1.5px solid #E7E1B1",
  background: "#FFFDF4",
  fontSize: 14,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const btnStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: 10,
  background: "#306D29",
  color: "#FFFDF4",
  fontWeight: 600,
  fontSize: 15,
  border: "none",
  cursor: "pointer",
  marginTop: 8,
};
