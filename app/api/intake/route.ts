import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sanitizeText } from "@/lib/sanitize";

// ── Allowlists ────────────────────────────────────────────────────────────────
const ALLOWED_TIERS = new Set([
  "Infrastructure Deployment Fix",
  "End-to-End Core Migration",
  "Enterprise App Stabilization",
  "Production Oversight Retainer (Weekly Fixed Audit Window Only)",
  "Bespoke Co-Architecture & System Blueprint Consultation",
]);

const ALLOWED_LANGS = new Set(["en", "es", "pt"]);

// ── Field length limits ───────────────────────────────────────────────────────
const LIMITS = {
  name:          { min: 2,  max: 120 },
  email:         { min: 5,  max: 254 }, // RFC 5321 max
  phone:         { min: 0,  max: 30  },
  project_scope: { min: 10, max: 5000 },
  selected_tier: { min: 1,  max: 120 },
};

// ── Email regex: RFC 5321-compatible, blocks common injection patterns ─────────
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// ── Phone: digits, spaces, +, -, (, ) only ─────────────────────────────────────
const PHONE_RE = /^[\d\s+\-(). ]*$/;

function bad(error: string, status = 422) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req: NextRequest) {
  // ── 1. Content-Type guard ─────────────────────────────────────────────────
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    return bad("Unsupported content type.", 415);
  }

  // ── 2. Env vars ───────────────────────────────────────────────────────────
  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim();
  const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY ?? "").trim();

  if (!supabaseUrl || !supabaseKey) {
    console.error("[intake] Missing Supabase env vars");
    return bad("Service temporarily unavailable.", 503);
  }

  if (!supabaseUrl.startsWith("https://") || /\/rest\/|\/v1\//.test(supabaseUrl)) {
    console.error("[intake] Invalid SUPABASE_URL format");
    return bad("Service temporarily unavailable.", 503);
  }

  // ── 3. Parse JSON ─────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad("Invalid JSON body.", 400);
  }

  // ── 4. Sanitize all text inputs (strips HTML, null bytes, bidi overrides) ──
  const name           = sanitizeText(body.name);
  const email          = sanitizeText(body.email).toLowerCase();
  const phone          = sanitizeText(body.phone);
  const project_scope  = sanitizeText(body.project_scope);
  const selected_tier  = sanitizeText(body.selected_tier);
  const language_track = sanitizeText(body.language_track) || "en";

  // ── 5. Required field presence ────────────────────────────────────────────
  if (!name)          return bad("Name is required.");
  if (!email)         return bad("Email is required.");
  if (!project_scope) return bad("Project scope is required.");
  if (!selected_tier) return bad("Service tier is required.");

  // ── 6. Length validation ──────────────────────────────────────────────────
  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max)
    return bad(`Name must be between ${LIMITS.name.min} and ${LIMITS.name.max} characters.`);

  if (email.length < LIMITS.email.min || email.length > LIMITS.email.max)
    return bad("Invalid email address.");

  if (phone && (phone.length > LIMITS.phone.max))
    return bad("Phone number is too long.");

  if (project_scope.length < LIMITS.project_scope.min)
    return bad(`Project description must be at least ${LIMITS.project_scope.min} characters.`);

  if (project_scope.length > LIMITS.project_scope.max)
    return bad(`Project description must not exceed ${LIMITS.project_scope.max} characters.`);

  // ── 7. Format validation ──────────────────────────────────────────────────
  if (!EMAIL_RE.test(email))
    return bad("A valid email address is required.");

  if (phone && !PHONE_RE.test(phone))
    return bad("Phone number contains invalid characters.");

  // ── 8. Allowlist enumerated fields ────────────────────────────────────────
  if (!ALLOWED_TIERS.has(selected_tier))
    return bad("Invalid service tier selection.");

  const lang = ALLOWED_LANGS.has(language_track) ? language_track : "en";

  // ── 9. Insert ─────────────────────────────────────────────────────────────
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error: dbError } = await supabase.from("leads").insert([{
    name,
    email,
    phone:          phone || null,
    project_scope,
    selected_tier,
    language_track: lang,
  }]);

  if (dbError) {
    console.error(`[intake] DB error — ${dbError.code}: ${dbError.message}`);
    return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
