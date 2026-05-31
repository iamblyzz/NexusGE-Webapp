import { NextRequest, NextResponse } from "next/server";

/**
 * Security middleware — runs at the Vercel edge before every request.
 * Injects security response headers (CSP, HSTS, XFO, etc.).
 */
export function middleware(request: NextRequest) {
  void request; // satisfies the parameter requirement

  // ── Content Security Policy ────────────────────────────────────────────────
  //
  // NOTE: Using 'unsafe-inline' for script-src because Next.js 14 injects
  // inline bootstrap scripts that cannot be nonce-stamped without a full
  // custom document / headers() integration. A nonce that is generated here
  // but never attached to <script> tags is WORSE than unsafe-inline — it
  // silently blocks every inline script (including Next.js hydration), killing
  // all interactivity. 'unsafe-inline' is safe for a CSP-hardened marketing
  // site with no user-generated content.
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com`,
    `connect-src 'self' https://*.supabase.co wss://*.supabase.co`,
    `worker-src blob:`,
    `frame-src 'none'`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  const response = NextResponse.next();

  // ── Security Headers ────────────────────────────────────────────────────────

  // XSS — primary defence via CSP; legacy header for older browsers
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Clickjacking — belt-and-suspenders alongside frame-ancestors in CSP
  response.headers.set("X-Frame-Options", "DENY");

  // MIME sniffing — prevents browser from guessing content-type
  response.headers.set("X-Content-Type-Options", "nosniff");

  // HSTS — enforce HTTPS for 2 years, include subdomains, eligible for preload list
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  // Referrer — send origin only on same-site; no path leakage cross-site
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions Policy — disable all sensor/hardware APIs not needed by this site
  response.headers.set(
    "Permissions-Policy",
    [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
      "browsing-topics=()",
    ].join(", ")
  );

  // DNS prefetch — allows the browser to pre-resolve hosts in the page
  response.headers.set("X-DNS-Prefetch-Control", "on");

  // Cross-Origin policies
  // NOTE: COEP require-corp is intentionally omitted — it blocks Vercel's CDN
  // chunks and Google Fonts (which don't send CORP headers), breaking JS loading.
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "cross-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match every path except:
     *   - _next/static  (static assets)
     *   - _next/image   (image optimisation)
     *   - favicon.ico   (browser default)
     *   - public files  (png, svg, etc.)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|otf)$).*)",
  ],
};
