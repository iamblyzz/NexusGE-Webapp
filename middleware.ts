import { NextRequest, NextResponse } from "next/server";

// Node's `crypto` module is NOT available in the Vercel Edge Runtime.
// Use the Web Crypto API (globally available in all edge/browser environments).
function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  // btoa over charCodes produces a valid base64 nonce string
  return btoa(String.fromCharCode(...Array.from(bytes)));
}

/**
 * Security middleware — runs at the Vercel edge before every request.
 *
 * Responsibilities:
 *  1. Generate a per-request CSP nonce so Next.js inline bootstrap scripts
 *     are whitelisted without needing 'unsafe-inline'.
 *  2. Inject all security response headers (CSP, HSTS, XFO, etc.).
 *  3. Forward the nonce to the app via a request header so layout.tsx
 *     can stamp it on <script> tags.
 */
export function middleware(request: NextRequest) {
  const nonce = generateNonce();

  // ── Content Security Policy ────────────────────────────────────────────────
  //
  // Directive rationale:
  //   default-src 'self'          → deny everything not explicitly listed
  //   script-src                  → self + nonce (Next.js bootstrap) + strict-dynamic
  //                                 strict-dynamic propagates trust to scripts loaded
  //                                 by trusted scripts, so no hash-list maintenance needed
  //   style-src 'unsafe-inline'   → Tailwind CSS inlines styles; no nonce for styles
  //   img-src data: blob:         → Next.js <Image> optimisation + data URIs
  //   font-src fonts.gstatic.com  → Google Fonts (Inter)
  //   connect-src *.supabase.co   → Supabase REST + realtime WebSocket
  //   frame-ancestors 'none'      → equivalent to X-Frame-Options: DENY
  //   base-uri 'self'             → prevent <base> tag injection
  //   form-action 'self'          → forms may only POST to same origin
  //   upgrade-insecure-requests   → auto-upgrade http:// sub-resources to https://
  //   block-all-mixed-content     → belt-and-suspenders mixed content block
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
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
    `block-all-mixed-content`,
  ].join("; ");

  // Clone the request so we can attach the nonce for layout.tsx to consume
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("x-csp", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

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

  // Cross-Origin policies — tighten resource isolation
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");

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
