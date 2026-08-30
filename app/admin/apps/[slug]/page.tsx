import { notFound } from "next/navigation";
import { adminSupabase } from "@/utils/supabase/admin";
import { updateApp } from "../actions";
import { AppForm } from "../_components/AppForm";

export const dynamic = "force-dynamic";

export default async function EditAppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: app } = await adminSupabase
    .from("portfolio_apps")
    .select("*")
    .eq("slug", slug)
    .single();

  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 8 }}>
        {app.name} Düzenle
      </h1>
      <p style={{ color: "#6B6A55", fontSize: 14, marginBottom: 32 }}>/{app.slug}</p>
      <div style={{ background: "#FFFDF4", borderRadius: 16, border: "1px solid #E7E1B1", padding: "32px 28px", maxWidth: 760 }}>
        <AppForm action={updateApp} defaultValues={app} isEdit />
      </div>
    </div>
  );
}
