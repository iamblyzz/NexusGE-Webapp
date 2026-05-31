import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sanitizeText, sanitizeArray } from "@/lib/sanitize";

// Allowed values for enumerated fields — reject anything outside these sets
const ALLOWED_BUILDERS = ["Lovable", "Bolt", "v0", "Cursor", "Framer", "Webflow", "Bubble", "Other"];
const ALLOWED_DEADLINES = ["asap", "24h", "72h", "1w", "flexible"];
const ALLOWED_YES_NO = ["Yes", "No"];
const ALLOWED_DISCOVERY = ["google", "twitter", "reddit", "linkedin", "referral", "ai-builder", "other"];

export async function POST(req: NextRequest) {
  // ── 1. Content-Type guard ─────────────────────────────────────────────────
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
  }

  // ── 2. Parse body ─────────────────────────────────────────────────────────
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // ── 3. Sanitize all text inputs (XSS / injection defence) ────────────────
  const full_name  = sanitizeText(raw.full_name);
  const email      = sanitizeText(raw.email);
  const problem    = sanitizeText(raw.problem);
  const builders   = sanitizeArray(raw.builders);
  const has_github  = sanitizeText(raw.has_github);
  const has_vercel  = sanitizeText(raw.has_vercel);
  const has_supabase = sanitizeText(raw.has_supabase);
  const deadline   = sanitizeText(raw.deadline);
  const discovery  = sanitizeText(raw.discovery);

  // ── 4. Validate required fields ───────────────────────────────────────────
  if (!full_name) {
    return NextResponse.json({ error: "Full name is required." }, { status: 422 });
  }
  if (full_name.length > 120) {
    return NextResponse.json({ error: "Full name is too long." }, { status: 422 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 422 });
  }
  if (email.length > 254) {
    return NextResponse.json({ error: "Email address is too long." }, { status: 422 });
  }
  if (builders.length === 0) {
    return NextResponse.json({ error: "At least one builder must be selected." }, { status: 422 });
  }
  if (!problem) {
    return NextResponse.json({ error: "Problem description is required." }, { status: 422 });
  }
  if (problem.length > 5000) {
    return NextResponse.json({ error: "Problem description is too long (max 5000 chars)." }, { status: 422 });
  }
  if (!deadline) {
    return NextResponse.json({ error: "Deadline selection is required." }, { status: 422 });
  }

  // ── 5. Allowlist enumerated fields (prevent injection via enum fields) ────
  const invalidBuilders = builders.filter((b) => !ALLOWED_BUILDERS.includes(b));
  if (invalidBuilders.length > 0) {
    return NextResponse.json({ error: "Invalid builder selection." }, { status: 422 });
  }
  if (!ALLOWED_DEADLINES.includes(deadline)) {
    return NextResponse.json({ error: "Invalid deadline selection." }, { status: 422 });
  }
  if (has_github && !ALLOWED_YES_NO.includes(has_github)) {
    return NextResponse.json({ error: "Invalid value for GitHub field." }, { status: 422 });
  }
  if (has_vercel && !ALLOWED_YES_NO.includes(has_vercel)) {
    return NextResponse.json({ error: "Invalid value for Vercel field." }, { status: 422 });
  }
  if (has_supabase && !ALLOWED_YES_NO.includes(has_supabase)) {
    return NextResponse.json({ error: "Invalid value for Supabase field." }, { status: 422 });
  }
  if (discovery && !ALLOWED_DISCOVERY.includes(discovery)) {
    return NextResponse.json({ error: "Invalid discovery selection." }, { status: 422 });
  }

  // ── 6. Persist to Supabase ────────────────────────────────────────────────
  const { error: dbError } = await supabase.from("intake_submissions").insert({
    full_name,
    email,
    builders,
    has_github:   has_github   || null,
    has_vercel:   has_vercel   || null,
    has_supabase: has_supabase || null,
    problem,
    deadline,
    discovery: discovery || null,
  });

  if (dbError) {
    console.error("[intake] Supabase insert error:", dbError.message);
    return NextResponse.json(
      { error: "Failed to save your submission. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
