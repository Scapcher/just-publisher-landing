import { createClient } from "@supabase/supabase-js";

type AdminClient = ReturnType<typeof createClient>;

// Modül yüklenirken değil, ilk kullanımda oluşturulur.
// Build sırasında env var olmasa da hata vermez.
let _client: AdminClient | null = null;

function getClient(): AdminClient {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
  }
  return _client;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const adminSupabase: any = new Proxy({} as AdminClient, {
  get: (_, prop) => (getClient() as any)[prop as string],
});
