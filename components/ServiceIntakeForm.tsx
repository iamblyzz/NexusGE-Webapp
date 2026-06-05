"use client";

/**
 * Self-contained intake form for the /services page.
 * Wraps IntakeForm with its own LanguageProvider so it works
 * independently of the homepage's context tree.
 */
import { LanguageProvider } from "@/components/LanguageProvider";
import IntakeForm           from "@/components/IntakeForm";

export default function ServiceIntakeForm() {
  return (
    <LanguageProvider>
      <IntakeForm />
    </LanguageProvider>
  );
}
