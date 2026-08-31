"use server";

import { adminSupabase } from "@/utils/supabase/admin";
import { revalidatePath } from "next/cache";

export async function markAsRead(formData: FormData) {
  const id = formData.get("id") as string;
  await adminSupabase
    .from("contact_submissions")
    .update({ status: "read" })
    .eq("id", id);
  revalidatePath("/admin/contacts");
}

export async function deleteSubmission(formData: FormData) {
  const id = formData.get("id") as string;
  await adminSupabase
    .from("contact_submissions")
    .delete()
    .eq("id", id);
  revalidatePath("/admin/contacts");
}
