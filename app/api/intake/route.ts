import { NextRequest, NextResponse } from "next/server";
import aj from "@/lib/arcjet";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  // ── 1. Parse body ────────────────────────────────────────────────────────────
  let body: {
    full_name?: string;
    email?: string;
    builders?: string[];
    has_github?: string;
    has_vercel?: string;
    has_supabase?: string;
    problem?: string;
    deadline?: string;
    discovery?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── 2. Server-side field validation ──────────────────────────────────────────
  const { full_name, email, builders, problem, deadline } = body;

  if (!full_name?.trim()) {
    return NextResponse.json({ error: "Full name is required." }, { status: 422 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 422 });
  }
  if (!builders || builders.length === 0) {
    return NextResponse.json({ error: "At least one builder must be selected." }, { status: 422 });
  }
  if (!problem?.trim()) {
    return NextResponse.json({ error: "Problem description is required." }, { status: 422 });
  }
  if (!deadline?.trim()) {
    return NextResponse.json({ error: "Deadline selection is required." }, { status: 422 });
  }

  // ── 3. Arcjet decision ───────────────────────────────────────────────────────
  // Pass the email through so validateEmail can inspect it
  const decision = await aj.protect(req, { email: email.trim(), requested: 1 });

  if (decision.isDenied()) {
    // Surface a user-friendly reason
    const reason = decision.reason;

    if (reason.isRateLimit()) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait before trying again." },
        { status: 429 }
      );
    }

    if (reason.isEmail()) {
      return NextResponse.json(
        { error: "That email address appears to be invalid or disposable. Please use a real email." },
        { status: 422 }
      );
    }

    if (reason.isBot()) {
      return NextResponse.json(
        { error: "Automated requests are not allowed." },
        { status: 403 }
      );
    }

    // Shield / other
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  // ── 4. Persist to Supabase ────────────────────────────────────────────────────
  const { error: dbError } = await supabase.from("intake_submissions").insert({
    full_name: full_name.trim(),
    email: email.trim(),
    builders: builders,
    has_github: body.has_github ?? null,
    has_vercel: body.has_vercel ?? null,
    has_supabase: body.has_supabase ?? null,
    problem: problem.trim(),
    deadline: deadline.trim(),
    discovery: body.discovery ?? null,
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
