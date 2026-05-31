// Server Component — no 'use client' directive.
// Language state lives in LanguageProvider (mounted in layout.tsx).
// Each child component pulls its own translations via useTranslation().

import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services   from "@/components/Services";
import CaseStudy  from "@/components/CaseStudy";
import IntakeForm from "@/components/IntakeForm";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <CaseStudy />
      <IntakeForm />
      <Footer />
    </main>
  );
}
