import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { validateOrigin } from "@/lib/csrf";

export async function POST(req: NextRequest) {
  // ── 0. Origin / CSRF check ────────────────────────────────────────────────
  const originError = validateOrigin(req);
  if (originError) return originError;

  // ── 1. Read + hard-trim env vars — redeployed with fresh Vercel env ───────
  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").trim();
  const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();

  console.log(`[intake] ENV — URL length: ${supabaseUrl.length} | Key length: ${supabaseKey.length}`);

  if (!supabaseUrl || !supabaseKey) {
    console.error("[intake] Missing database variables in Vercel panel");
    return NextResponse.json(
      { error: "Missing database variables in Vercel panel" },
      { status: 503 }
    );
  }

  // Guard against pasting the REST URL instead of the project base URL
  if (!supabaseUrl.startsWith("https://") || supabaseUrl.includes("/rest/") || supabaseUrl.includes("/v1/")) {
    console.error(`[intake] Invalid NEXT_PUBLIC_SUPABASE_URL format. Got length ${supabaseUrl.length} — must be https://<ref>.supabase.co only`);
    return NextResponse.json(
      { error: "Invalid Supabase URL format in Vercel panel. Must be https://<ref>.supabase.co" },
      { status: 503 }
    );
  }

  // ── 2. Parse body ─────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name           = String(body.name          || "").trim();
  const email          = String(body.email         || "").trim();
  const phone          = String(body.phone         || "").trim();
  const project_scope  = String(body.project_scope || "").trim();
  const selected_tier  = String(body.selected_tier || "").trim();
  const language_track = String(body.language_track|| "en").trim();

  console.log(`[intake] Payload — name: ${name} | email: ${email} | tier: ${selected_tier} | lang: ${language_track}`);

  if (!name || !email || !project_scope || !selected_tier) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 422 });
  }

  // ── 3. Insert into leads ──────────────────────────────────────────────────
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error: dbError } = await supabase.from("leads").insert([{
    name,
    email,
    phone:          phone || null,
    project_scope,
    selected_tier,
    language_track,
  }]);

  if (dbError) {
    console.error(`[intake] DB error — code: ${dbError.code} | message: ${dbError.message} | hint: ${dbError.hint}`);
    return NextResponse.json(
      { error: "Failed to save submission.", detail: dbError.message },
      { status: 500 }
    );
  }

  console.log("[intake] Insert success.");
  return NextResponse.json({ success: true }, { status: 200 });
}
