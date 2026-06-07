"use client";

import IntakeForm, { type TierKey } from "@/components/IntakeForm";

interface Props {
  initialTier?: TierKey;
}

export default function ServiceIntakeForm({ initialTier }: Props) {
  return <IntakeForm initialTier={initialTier} />;
}
