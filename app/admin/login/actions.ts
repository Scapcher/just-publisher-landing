"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "jp_admin";

export async function signIn(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validUser = process.env.ADMIN_USERNAME;
  const validPass = process.env.ADMIN_PASSWORD;
  const secret    = process.env.ADMIN_SESSION_SECRET;

  if (!secret || username !== validUser || password !== validPass) {
    redirect("/admin/login?error=Kullanıcı+adı+veya+şifre+hatalı");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, secret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 gün
    path: "/",
  });

  redirect("/admin/apps");
}
