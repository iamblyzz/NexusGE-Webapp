"use client";

/**
 * Root-level client wrapper that supplies LanguageProvider to the entire app.
 * Lives in layout.tsx so language state persists across all route navigations.
 */
import { LanguageProvider } from "@/components/LanguageProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
