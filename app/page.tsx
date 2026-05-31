"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services   from "@/components/Services";
import CaseStudy  from "@/components/CaseStudy";
import IntakeForm from "@/components/IntakeForm";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-neutral-950 text-slate-100">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Services />
        <CaseStudy />
        <IntakeForm />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
