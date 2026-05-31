import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key.
 * This bypasses RLS — NEVER import this in client components or
 * any file with "use client". Keep SUPABASE_SERVICE_ROLE_KEY
 * out of NEXT_PUBLIC_* env vars.
 */
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable."
    );
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
