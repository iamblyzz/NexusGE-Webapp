import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// ── Allowed values ────────────────────────────────────────────────────────────
const ALLOWED_TIERS = [
  "Infrastructure Deployment Fix",
  "End-to-End Core Migration",
  "Enterprise App Stabilization",
  "Production Oversight",
];
const ALLOWED_LANGS = ["en", "es", "pt"];
const NOTIFY_TO = "info@nexusge.com";

// ── Helpers ───────────────────────────────────────────────────────────────────
function clean(v: unknown): string {
  if (typeof v !== "string") return "";
  return v
    .replace(/<[^>]*>/g, "")
    .replace(/\0/g, "")
    .replace(/[‏‎‪-‮⁦-⁩]/g, "")
    .trim();
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  console.log("[intake] POST received");

  // ── 1. Env-var check (explicit early bail-out with readable error) ──────────
  // Support both naming conventions — Vercel uses SUPABASE_SECRET_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error(
      "[intake] MISSING DATABASE ENVIRONMENT KEYS — " +
      `SUPABASE_URL=${supabaseUrl ? "SET" : "MISSING"} | ` +
      `SUPABASE_SECRET_KEY=${serviceKey ? "SET" : "MISSING"}`
    );
    return NextResponse.json(
      { error: "Server configuration error. Please contact support." },
      { status: 503 }
    );
  }

  console.log("[intake] Env vars present — URL:", supabaseUrl);

  // ── 2. Content-Type guard ──────────────────────────────────────────────────
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
  }

  // ── 3. Parse body ──────────────────────────────────────────────────────────
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch (parseErr) {
    console.error("[intake] JSON parse failed:", parseErr);
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // ── 4. Sanitize ────────────────────────────────────────────────────────────
  const name           = clean(raw.name);
  const email          = clean(raw.email);
  const phone          = clean(raw.phone);
  const project_scope  = clean(raw.project_scope);
  const selected_tier  = clean(raw.selected_tier);
  const language_track = clean(raw.language_track);

  console.log("[intake] Parsed payload:", {
    name,
    email,
    phone: phone ? "provided" : "empty",
    project_scope_len: project_scope.length,
    selected_tier,
    language_track,
  });

  // ── 5. Validate ────────────────────────────────────────────────────────────
  if (!name || name.length > 120) {
    return NextResponse.json({ error: "A valid name is required (max 120 chars)." }, { status: 422 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }
  if (phone && phone.length > 30) {
    return NextResponse.json({ error: "Phone number is too long." }, { status: 422 });
  }
  if (!project_scope || project_scope.length < 10) {
    return NextResponse.json({ error: "Please describe your project (min 10 chars)." }, { status: 422 });
  }
  if (project_scope.length > 5000) {
    return NextResponse.json({ error: "Project scope too long (max 5000 chars)." }, { status: 422 });
  }
  if (!selected_tier || !ALLOWED_TIERS.includes(selected_tier)) {
    return NextResponse.json({ error: "Please select a valid service tier." }, { status: 422 });
  }

  const lang = ALLOWED_LANGS.includes(language_track) ? language_track : "en";

  // ── 6. Supabase insert (wrapped — no unhandled throw) ──────────────────────
  let insertOk = false;
  try {
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error: dbError, status: dbStatus } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        phone:          phone || null,
        project_scope,
        selected_tier,
        language_track: lang,
        status:         "new",
      });

    if (dbError) {
      console.error(
        "[intake] Supabase insert FAILED —",
        `code=${dbError.code}`,
        `message=${dbError.message}`,
        `details=${dbError.details}`,
        `hint=${dbError.hint}`,
        `httpStatus=${dbStatus}`
      );
      return NextResponse.json(
        {
          error: "Failed to save your submission. Please try again.",
          detail: dbError.message,   // surfaced here so Vercel logs are readable
        },
        { status: 500 }
      );
    }

    console.log("[intake] Supabase insert SUCCESS");
    insertOk = true;
  } catch (dbException) {
    console.error("[intake] Supabase client threw an exception:", dbException);
    return NextResponse.json(
      { error: "Database connection failed. Please try again." },
      { status: 500 }
    );
  }

  // ── 7. Email notification (non-blocking — insert already committed) ─────────
  if (insertOk) {
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        const { error: emailError } = await resend.emails.send({
          from:    "NexusGE Intake <onboarding@resend.dev>",
          to:      NOTIFY_TO,
          replyTo: email,
          subject: `NEW INTAKE LEAD: ${name}`,
          html:    buildEmail({ name, email, phone, project_scope, selected_tier, lang }),
        });
        if (emailError) {
          console.error("[intake] Resend returned error:", emailError);
        } else {
          console.log("[intake] Email notification sent to", NOTIFY_TO);
        }
      } catch (emailException) {
        console.error("[intake] Email send threw exception:", emailException);
      }
    } else {
      console.warn("[intake] RESEND_API_KEY not set — skipping email notification.");
    }
  }

  return NextResponse.json({ success: true }, { status: 201 });
}

// ── Email template ─────────────────────────────────────────────────────────────
function buildEmail(d: {
  name: string;
  email: string;
  phone: string;
  project_scope: string;
  selected_tier: string;
  lang: string;
}): string {
  const langLabel: Record<string, string> = {
    en: "English",
    es: "Español",
    pt: "Português",
  };

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #262626;width:36%;
                 color:#94a3b8;font-size:13px;vertical-align:top">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #262626;
                 color:#f1f5f9;font-size:14px">${value || "—"}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;background:#0a0a0a;color:#e2e8f0;padding:32px;margin:0">
  <div style="max-width:620px;margin:0 auto;background:#171717;border:1px solid #262626;
              border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:22px 28px">
      <h1 style="margin:0;font-size:18px;font-weight:700;color:#fff">New Intake Lead</h1>
      <p style="margin:6px 0 0;font-size:13px;color:#bfdbfe">
        Received ${new Date().toUTCString()}
      </p>
    </div>
    <div style="padding:28px">
      <table style="width:100%;border-collapse:collapse">
        ${row("Name",          d.name)}
        ${row("Email",         `<a href="mailto:${d.email}" style="color:#60a5fa">${d.email}</a>`)}
        ${row("Phone",         d.phone)}
        ${row("Selected Tier", `<strong>${d.selected_tier}</strong>`)}
        ${row("Language",      langLabel[d.lang] ?? d.lang)}
      </table>
      <div style="margin-top:20px">
        <p style="margin:0 0 8px;color:#94a3b8;font-size:13px">Project Scope</p>
        <div style="background:#0f0f0f;border:1px solid #262626;border-radius:8px;
                    padding:14px 16px;color:#f1f5f9;font-size:14px;
                    white-space:pre-wrap;line-height:1.65">${d.project_scope}</div>
      </div>
    </div>
    <div style="padding:14px 28px;background:#0a0a0a;border-top:1px solid #262626">
      <p style="margin:0;font-size:12px;color:#475569">
        Auto-sent by NexusGE intake pipeline. Reply to respond directly to ${d.name}.
      </p>
    </div>
  </div>
</body>
</html>`;
}
