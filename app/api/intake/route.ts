import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServerClient } from "@/lib/supabase-server";
import { sanitizeText, sanitizeArray } from "@/lib/sanitize";

// Allowed values for enumerated fields — reject anything outside these sets
const ALLOWED_BUILDERS  = ["Lovable", "Bolt", "v0", "Cursor", "Framer", "Webflow", "Bubble", "Other"];
const ALLOWED_DEADLINES = ["asap", "24h", "72h", "1w", "flexible"];
const ALLOWED_YES_NO    = ["Yes", "No"];
const ALLOWED_DISCOVERY = ["google", "twitter", "reddit", "linkedin", "referral", "ai-builder", "other"];

const NOTIFY_TO = "info@nexusge.com";

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
  const full_name   = sanitizeText(raw.full_name);
  const email       = sanitizeText(raw.email);
  const problem     = sanitizeText(raw.problem);
  const builders    = sanitizeArray(raw.builders);
  const has_github  = sanitizeText(raw.has_github);
  const has_vercel  = sanitizeText(raw.has_vercel);
  const has_supabase = sanitizeText(raw.has_supabase);
  const deadline    = sanitizeText(raw.deadline);
  const discovery   = sanitizeText(raw.discovery);

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

  // ── 5. Allowlist enumerated fields ────────────────────────────────────────
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

  // ── 6. Persist to Supabase (service role — bypasses RLS) ─────────────────
  const supabase = createServerClient();

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

  // ── 7. Fire email notification (non-blocking — never fail the user request) ─
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);

      const deadlineLabel: Record<string, string> = {
        asap: "ASAP",
        "24h": "Within 24 hours",
        "72h": "Within 72 hours",
        "1w": "Within 1 week",
        flexible: "Flexible",
      };

      await resend.emails.send({
        from: "NexusGE Intake <onboarding@resend.dev>",
        to: NOTIFY_TO,
        subject: `New intake: ${full_name} — ${deadlineLabel[deadline] ?? deadline}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;background:#0a0a0a;color:#e2e8f0;padding:32px">
  <div style="max-width:600px;margin:0 auto;background:#171717;border:1px solid #262626;border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:20px 28px">
      <h1 style="margin:0;font-size:18px;font-weight:700;color:#fff">
        New Intake Submission
      </h1>
      <p style="margin:4px 0 0;font-size:13px;color:#bfdbfe">
        Received ${new Date().toUTCString()}
      </p>
    </div>
    <div style="padding:28px">
      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;width:38%;color:#94a3b8;font-size:13px;vertical-align:top">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px;font-weight:600">${full_name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">
            <a href="mailto:${email}" style="color:#60a5fa">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">Builders</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">${builders.join(", ")}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">Deadline</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">${deadlineLabel[deadline] ?? deadline}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">GitHub</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">${has_github || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">Vercel</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">${has_vercel || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">Supabase</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">${has_supabase || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#94a3b8;font-size:13px;vertical-align:top">Found us via</td>
          <td style="padding:10px 0;border-bottom:1px solid #262626;color:#f1f5f9;font-size:14px">${discovery || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#94a3b8;font-size:13px;vertical-align:top">Problem</td>
          <td style="padding:10px 0;color:#f1f5f9;font-size:14px;white-space:pre-wrap;line-height:1.6">${problem}</td>
        </tr>
      </table>
    </div>
    <div style="padding:16px 28px;background:#0a0a0a;border-top:1px solid #262626">
      <p style="margin:0;font-size:12px;color:#475569">
        This notification was sent automatically by the NexusGE intake pipeline.
        Reply to this email to respond directly to ${full_name}.
      </p>
    </div>
  </div>
</body>
</html>`,
        replyTo: email,
      });
    } catch (emailErr) {
      // Email failure is non-fatal — submission is already saved
      console.error("[intake] Email notification failed:", emailErr);
    }
  } else {
    console.warn("[intake] RESEND_API_KEY not set — skipping email notification.");
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
