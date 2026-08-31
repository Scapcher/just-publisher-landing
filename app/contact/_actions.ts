"use server";

import { adminSupabase } from "@/utils/supabase/admin";

export interface ContactSubmission {
  name: string;
  email: string;
  appName: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission): Promise<{ ok: boolean; error?: string }> {
  try {
    const { error } = await adminSupabase.from("contact_submissions").insert({
      name:     data.name.trim(),
      email:    data.email.trim().toLowerCase(),
      app_name: data.appName.trim() || null,
      message:  data.message.trim(),
      status:   "new",
    });

    if (error) {
      console.error("[submitContact]", error.message);
      return { ok: false, error: error.message };
    }

    return { ok: true };
  } catch (e) {
    console.error("[submitContact] unexpected", e);
    return { ok: false, error: "Unexpected error" };
  }
}
