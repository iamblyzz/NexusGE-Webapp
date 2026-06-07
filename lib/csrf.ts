/**
 * Origin validation for the intake API route.
 *
 * WHY THIS MATTERS
 *   The app uses JSON POST requests (not HTML form submissions), so
 *   traditional cookie-based CSRF doesn't apply. However, any site
 *   on the internet could script a fetch() to /api/intake and submit
 *   fraudulent leads. Validating the Origin header prevents that.
 *
 * HOW IT WORKS
 *   Browsers always include the Origin header on cross-origin requests.
 *   We compare it against an allowlist. Direct server-to-server calls
 *   (no Origin header) are also allowed so legitimate integrations work.
 *
 * ALLOWED ORIGINS
 *   - The production domain (NEXT_PUBLIC_SITE_URL env var, optional)
 *   - nexusge.com + www.nexusge.com (hardcoded fallback)
 *   - localhost variants for local development
 */

const PRODUCTION_HOSTS = new Set([
  "nexusge.com",
  "www.nexusge.com",
  "nexusge-webapp.vercel.app",
]);

const DEV_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
]);

function isAllowedOrigin(origin: string): boolean {
  let host: string;
  try {
    host = new URL(origin).hostname;
  } catch {
    return false; // malformed origin
  }

  // Allow production hosts
  if (PRODUCTION_HOSTS.has(host)) return true;

  // Allow *.vercel.app preview deployments for this project
  if (host.endsWith("-iamblyzzs-projects.vercel.app")) return true;

  // Allow localhost in any environment (dev and preview)
  if (DEV_HOSTS.has(host)) return true;

  // Allow custom domain from env if configured
  const customDomain = process.env.NEXT_PUBLIC_SITE_URL;
  if (customDomain) {
    try {
      const configured = new URL(customDomain).hostname;
      if (configured === host) return true;
    } catch { /* ignore */ }
  }

  return false;
}

/**
 * Returns a 403 Response if the request origin is not allowed,
 * or null if the origin check passes (proceed normally).
 */
export function validateOrigin(req: Request): Response | null {
  const origin = req.headers.get("origin");

  // No Origin header — direct server-to-server call or same-origin browser
  // request. Allow through (browsers always set Origin on cross-origin fetches).
  if (!origin) return null;

  if (!isAllowedOrigin(origin)) {
    console.warn(`[csrf] Rejected request from disallowed origin: ${origin}`);
    return new Response(
      JSON.stringify({ error: "Forbidden." }),
      {
        status:  403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return null;
}
