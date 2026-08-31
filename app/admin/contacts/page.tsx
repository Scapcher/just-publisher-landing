import { adminSupabase } from "@/utils/supabase/admin";
import { markAsRead, deleteSubmission } from "./actions";

export const dynamic = "force-dynamic";

function statusBadge(status: string) {
  const styles: Record<string, React.CSSProperties> = {
    new:     { background: "rgba(93,134,108,0.15)", color: "#3D6B52", border: "1px solid rgba(93,134,108,0.35)" },
    read:    { background: "rgba(194,166,140,0.15)", color: "#8A7A6A", border: "1px solid rgba(194,166,140,0.4)" },
    replied: { background: "rgba(93,134,108,0.25)", color: "#2C5A40", border: "1px solid rgba(93,134,108,0.5)" },
  };
  return (
    <span
      style={{
        ...styles[status] ?? styles.read,
        fontSize: 11, fontWeight: 600, textTransform: "uppercase" as const,
        letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 4,
      }}
    >
      {status}
    </span>
  );
}

export default async function ContactsPage() {
  const { data: submissions, error } = await adminSupabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  const newCount = submissions?.filter((s: any) => s.status === "new").length ?? 0;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", color: "#2C2418" }}>
            Contact Submissions
          </h1>
          {newCount > 0 && (
            <span style={{
              background: "#5D866C",
              color: "#F5F5F0", fontSize: 12, fontWeight: 700,
              padding: "2px 10px", borderRadius: 4,
            }}>
              {newCount} new
            </span>
          )}
        </div>
        <p style={{ color: "#8A7A6A", fontSize: 14 }}>
          {submissions?.length ?? 0} total inquiries
        </p>
      </div>

      {error && (
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "16px 20px", marginBottom: 24 }}>
          <p style={{ color: "#991B1B", fontSize: 14 }}>
            <strong>Table not found.</strong> Run the SQL below in the Supabase Dashboard → SQL Editor:
          </p>
          <pre style={{ marginTop: 12, padding: 12, background: "rgba(0,0,0,0.05)", borderRadius: 6, fontSize: 12, color: "#5D866C", overflowX: "auto", whiteSpace: "pre-wrap" }}>
{`CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  email      text NOT NULL,
  app_name   text,
  message    text NOT NULL,
  status     text DEFAULT 'new' CHECK (status IN ('new','read','replied')),
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;`}
          </pre>
        </div>
      )}

      {/* Empty state */}
      {!error && submissions?.length === 0 && (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#8A7A6A" }}>
          <p style={{ fontSize: 16 }}>No submissions yet.</p>
          <p style={{ fontSize: 14, marginTop: 6 }}>Form submissions from the contact page will appear here.</p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {submissions?.map((sub: any) => (
          <div
            key={sub.id}
            style={{
              background: sub.status === "new" ? "#F5F5F0" : "#F5F5F0",
              borderRadius: 8,
              border: sub.status === "new" ? "1px solid #5D866C" : "1px solid #C2A68C",
              padding: "20px 24px",
              boxShadow: "0 1px 4px rgba(44,36,24,0.06)",
            }}
          >
            {/* Top row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#2C2418" }}>{sub.name}</span>
                  {statusBadge(sub.status)}
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={`mailto:${sub.email}`} style={{ color: "#5D866C", fontSize: 14, textDecoration: "underline", textUnderlineOffset: 3 }}>
                    {sub.email}
                  </a>
                  {sub.app_name && (
                    <span style={{ color: "#8A7A6A", fontSize: 14 }}>· App: <strong style={{ color: "#2C2418" }}>{sub.app_name}</strong></span>
                  )}
                </div>
              </div>
              <span style={{ color: "#C2A68C", fontSize: 12, flexShrink: 0, paddingTop: 2 }}>
                {new Date(sub.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>

            {/* Message */}
            <p style={{ color: "#5C4F3D", fontSize: 14, lineHeight: 1.65, marginBottom: 16, maxWidth: 740 }}>
              {sub.message}
            </p>

            {/* Actions */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a
                href={`mailto:${sub.email}?subject=Re: ${encodeURIComponent(sub.app_name ? `Your inquiry about ${sub.app_name}` : "Your app inquiry")}`}
                style={replyBtn}
              >
                Reply →
              </a>
              {sub.status === "new" && (
                <form action={markAsRead}>
                  <input type="hidden" name="id" value={sub.id} />
                  <button type="submit" style={readBtn}>Mark as Read</button>
                </form>
              )}
              <form action={deleteSubmission}>
                <input type="hidden" name="id" value={sub.id} />
                <button type="submit" style={deleteBtn} onClick={(e) => { if (!confirm("Delete this submission?")) e.preventDefault(); }}>
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const replyBtn: React.CSSProperties = {
  display: "inline-flex", alignItems: "center",
  padding: "7px 14px", borderRadius: 4,
  background: "#5D866C",
  color: "#F5F5F0", fontSize: 13, fontWeight: 600,
  textDecoration: "none", border: "none", cursor: "pointer",
};

const readBtn: React.CSSProperties = {
  padding: "7px 14px", borderRadius: 4,
  background: "rgba(93,134,108,0.10)", border: "1px solid rgba(93,134,108,0.25)",
  color: "#5D866C", fontSize: 13, fontWeight: 500, cursor: "pointer",
};

const deleteBtn: React.CSSProperties = {
  padding: "7px 14px", borderRadius: 4,
  background: "transparent", border: "1px solid rgba(239,68,68,0.25)",
  color: "#991B1B", fontSize: 13, fontWeight: 500, cursor: "pointer",
};
