"use client";

/**
 * Thin wrapper so /services can import IntakeForm as a client component.
 * LanguageProvider is now at the root level (layout.tsx), so no inner
 * provider is needed here.
 */
import IntakeForm from "@/components/IntakeForm";

export default function ServiceIntakeForm() {
  return <IntakeForm />;
}
