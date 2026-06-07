import { NextRequest, NextResponse } from "next/server";

/**
 * Security headers applied to every response.
 *
 * These protect against clickjacking, MIME sniffing, information leakage,
 * and cross-site scripting without blocking legitimate functionality.
 *
 * HEADERS APPLIED
 *   X-Frame-Options              — blocks iframe embedding (clickjacking)
 *   X-Content-Type-Options       — prevents MIME-type sniffing
 *   Referrer-Policy              — limits referrer leakage on cross-origin nav
 *   X-DNS-Prefetch-Control       — prevents browser DNS prefetch information leaks
 *   Permissions-Policy           — disables unnecessary browser APIs
 *   Strict-Transport-Security    — forces HTTPS for 1 year (HSTS)
 */
const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options":           "DENY",
  "X-Content-Type-Options":    "nosniff",
  "Referrer-Policy":           "strict-origin-when-cross-origin",
  "X-DNS-Prefetch-Control":    "off",
  "Permissions-Policy":        "camera=(), microphone=(), geolocation=(), payment=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  return response;
}

export const config = {
  // Apply to all routes except Next.js internals and static files.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
