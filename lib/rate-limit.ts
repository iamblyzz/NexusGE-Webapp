/**
 * Lightweight in-process rate limiter for Vercel serverless functions.
 *
 * Uses a sliding-window token-bucket approach stored in a module-level Map.
 * This is intentionally simple: it protects against burst abuse on the same
 * serverless instance and catches automated bots, but does NOT guarantee
 * cross-instance coordination (for that, use Upstash Redis or similar).
 *
 * For this app's traffic profile (B2B intake form) this is the correct
 * trade-off — adds zero external dependencies and zero latency.
 */

interface Bucket {
  count: number;
  windowStart: number;
}

// Module-level store — persists across requests on the same warm instance.
const store = new Map<string, Bucket>();

// Clean up stale keys every 10 minutes to prevent unbounded memory growth.
const PRUNE_INTERVAL_MS = 10 * 60 * 1000;
let lastPrune = Date.now();

function pruneStale(windowMs: number) {
  const now = Date.now();
  if (now - lastPrune < PRUNE_INTERVAL_MS) return;
  for (const [key, bucket] of store.entries()) {
    if (now - bucket.windowStart > windowMs) store.delete(key);
  }
  lastPrune = now;
}

interface RateLimitOptions {
  /** Identifier to bucket requests by (e.g. IP address or hashed email). */
  key: string;
  /** Maximum number of requests allowed in the window. */
  limit: number;
  /** Window duration in milliseconds. */
  windowMs: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number; // epoch ms when the window resets
}

export function checkRateLimit({ key, limit, windowMs }: RateLimitOptions): RateLimitResult {
  pruneStale(windowMs);

  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now - existing.windowStart >= windowMs) {
    // New window
    store.set(key, { count: 1, windowStart: now });
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return {
      allowed:   false,
      remaining: 0,
      resetAt:   existing.windowStart + windowMs,
    };
  }

  existing.count += 1;
  return {
    allowed:   true,
    remaining: limit - existing.count,
    resetAt:   existing.windowStart + windowMs,
  };
}

/**
 * Extract the real client IP from Vercel/Next.js request headers.
 * Falls back to a safe default if no IP header is present.
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}
