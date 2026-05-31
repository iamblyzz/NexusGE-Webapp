/**
 * Server-only XSS sanitizer for user-submitted text.
 *
 * Strips:
 *  - All HTML tags                   (<script>, <img onerror=...>, etc.)
 *  - Null bytes                      (bypass-trick for some parsers)
 *  - Unicode direction-override chars (U+202A–U+202E, U+2066–U+2069)
 *    which can visually reverse text to disguise payloads in logs/UIs
 *
 * This is a defence-in-depth layer that runs server-side before data
 * reaches Supabase. The primary XSS defence is the Content-Security-Policy
 * set in middleware.ts.
 */
export function sanitizeText(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    // strip null bytes
    .replace(/\0/g, "")
    // strip HTML tags (including malformed ones)
    .replace(/<[^>]*>/g, "")
    // strip HTML entities that could reconstruct tags after decode
    .replace(/&lt;|&gt;|&amp;|&#x?[0-9a-f]+;/gi, "")
    // strip Unicode direction-override characters
    .replace(/[‪-‮⁦-⁩]/g, "")
    // collapse control characters except newlines/tabs
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();
}

/**
 * Sanitize every string in an array; non-strings are filtered out.
 */
export function sanitizeArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map(sanitizeText)
    .filter((v) => v.length > 0);
}
