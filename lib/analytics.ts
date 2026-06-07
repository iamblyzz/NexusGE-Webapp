/**
 * Thin analytics wrapper for GA4 + Microsoft Clarity.
 * All calls are no-ops if the scripts haven't loaded or IDs are missing.
 * Never throws — analytics must never break the app.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (method: string, ...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  try {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId && typeof window.gtag === "function") {
      window.gtag("config", gaId, { page_path: url });
    }
    // Clarity tracks pageviews automatically — no manual call needed.
  } catch {
    // Silently ignore
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params ?? {});
    }
    if (typeof window.clarity === "function") {
      window.clarity("event", name);
    }
  } catch {
    // Silently ignore
  }
}
