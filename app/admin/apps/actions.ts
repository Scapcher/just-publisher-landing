"use server";

import { adminSupabase } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function uploadFile(
  bucket: string,
  path: string,
  file: File
): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const buffer = Buffer.from(await file.arrayBuffer());
  const { error } = await adminSupabase.storage
    .from(bucket)
    .upload(path, buffer, { contentType: file.type, upsert: true });
  if (error) { console.error(`[upload ${bucket}/${path}]`, error.message); return null; }
  const { data } = adminSupabase.storage.from(bucket).getPublicUrl(path);
  return `${data.publicUrl}?v=${Date.now()}`;
}

async function uploadIcon(file: File, slug: string) {
  const ext = file.name.split(".").pop() ?? "png";
  return uploadFile("app-icons", `${slug}.${ext}`, file);
}

async function uploadScreenshot(file: File, slug: string, index: 1 | 2) {
  const ext = file.name.split(".").pop() ?? "png";
  return uploadFile("app-screenshots", `${slug}-${index}.${ext}`, file);
}

function parseAppForm(formData: FormData) {
  return {
    slug:              (formData.get("slug") as string).trim().toLowerCase(),
    name:              formData.get("name") as string,
    subtitle:          formData.get("subtitle") as string,
    description:       formData.get("description") as string,
    app_store_rating:  parseFloat(formData.get("app_store_rating") as string),
    play_store_rating: parseFloat(formData.get("play_store_rating") as string),
    rating_count:      formData.get("rating_count") as string,
    age_rating:        formData.get("age_rating") as string,
    bg:                formData.get("bg") as string,
    initial:           formData.get("initial") as string,
    app_store_url:     formData.get("app_store_url") as string,
    play_store_url:    formData.get("play_store_url") as string,
    sort_order:        parseInt(formData.get("sort_order") as string, 10),
  };
}

export async function createApp(formData: FormData) {
  const data = parseAppForm(formData);

  const [iconUrl, ss1Url, ss2Url] = await Promise.all([
    uploadIcon(formData.get("icon") as File, data.slug),
    uploadScreenshot(formData.get("screenshot_1") as File, data.slug, 1),
    uploadScreenshot(formData.get("screenshot_2") as File, data.slug, 2),
  ]);

  const { error } = await adminSupabase.from("portfolio_apps").insert({
    ...data,
    ...(iconUrl  ? { icon_url: iconUrl }           : {}),
    ...(ss1Url   ? { screenshot_1_url: ss1Url }    : {}),
    ...(ss2Url   ? { screenshot_2_url: ss2Url }    : {}),
  });
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/apps");
  redirect("/admin/apps");
}

export async function updateApp(formData: FormData) {
  const originalSlug = formData.get("originalSlug") as string;
  const data = parseAppForm(formData);

  const [newIconUrl, newSs1Url, newSs2Url] = await Promise.all([
    uploadIcon(formData.get("icon") as File, data.slug),
    uploadScreenshot(formData.get("screenshot_1") as File, data.slug, 1),
    uploadScreenshot(formData.get("screenshot_2") as File, data.slug, 2),
  ]);

  const updateData: Record<string, unknown> = { ...data };
  if (newIconUrl)  updateData.icon_url          = newIconUrl;
  if (newSs1Url)   updateData.screenshot_1_url  = newSs1Url;
  if (newSs2Url)   updateData.screenshot_2_url  = newSs2Url;

  const { error } = await adminSupabase
    .from("portfolio_apps")
    .update(updateData)
    .eq("slug", originalSlug);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/apps");
  redirect("/admin/apps");
}

export async function deleteApp(formData: FormData) {
  const slug = formData.get("slug") as string;

  const exts = ["png", "jpg", "jpeg", "webp"];
  await Promise.allSettled([
    ...exts.map((e) => adminSupabase.storage.from("app-icons").remove([`${slug}.${e}`])),
    ...exts.map((e) => adminSupabase.storage.from("app-screenshots").remove([`${slug}-1.${e}`])),
    ...exts.map((e) => adminSupabase.storage.from("app-screenshots").remove([`${slug}-2.${e}`])),
  ]);

  const { error } = await adminSupabase
    .from("portfolio_apps")
    .delete()
    .eq("slug", slug);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/apps");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
