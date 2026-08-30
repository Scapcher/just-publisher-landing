"use server";

import { adminSupabase } from "@/utils/supabase/admin";
import { revalidatePath } from "next/cache";

async function uploadMarqueeIcon(file: File, id: string): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const ext = file.name.split(".").pop() ?? "png";
  const path = `marquee/${id}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await adminSupabase.storage
    .from("app-icons")
    .upload(path, buffer, { contentType: file.type, upsert: true });

  if (error) {
    console.error("[uploadMarqueeIcon]", error.message);
    return null;
  }

  const { data } = adminSupabase.storage.from("app-icons").getPublicUrl(path);
  return `${data.publicUrl}?v=${Date.now()}`;
}

export async function createMarqueeApp(formData: FormData) {
  // Önce satırı ekle — ID almak için
  const { data, error } = await adminSupabase
    .from("marquee_apps")
    .insert({
      name:       formData.get("name") as string,
      bg:         formData.get("bg") as string,
      initial:    formData.get("initial") as string,
      sort_order: parseInt(formData.get("sort_order") as string, 10),
    })
    .select("id")
    .single();

  if (error) throw new Error(error.message);

  const iconFile = formData.get("icon") as File;
  const iconUrl = await uploadMarqueeIcon(iconFile, data.id);
  if (iconUrl) {
    await adminSupabase.from("marquee_apps").update({ icon_url: iconUrl }).eq("id", data.id);
  }

  revalidatePath("/");
  revalidatePath("/admin/marquee");
}

export async function updateMarqueeApp(formData: FormData) {
  const id = formData.get("id") as string;

  const iconFile = formData.get("icon") as File;
  const iconUrl = await uploadMarqueeIcon(iconFile, id);

  const updateData: Record<string, unknown> = {
    name:       formData.get("name") as string,
    bg:         formData.get("bg") as string,
    initial:    formData.get("initial") as string,
    sort_order: parseInt(formData.get("sort_order") as string, 10),
  };
  if (iconUrl) updateData.icon_url = iconUrl;

  const { error } = await adminSupabase
    .from("marquee_apps")
    .update(updateData)
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/");
  revalidatePath("/admin/marquee");
}

export async function deleteMarqueeApp(formData: FormData) {
  const id = formData.get("id") as string;

  // Storage'daki ikonu da temizle
  const exts = ["png", "jpg", "jpeg", "webp"];
  await Promise.allSettled(
    exts.map((ext) =>
      adminSupabase.storage.from("app-icons").remove([`marquee/${id}.${ext}`])
    )
  );

  const { error } = await adminSupabase.from("marquee_apps").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/");
  revalidatePath("/admin/marquee");
}
