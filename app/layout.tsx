import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nexus Global Enterprise — Production App Migration & Deployment",
  description:
    "We perform structural migrations from AI-generated apps into production-hardened infrastructure on Vercel and Supabase. 24–72 hour delivery.",
  keywords: [
    "AI app migration",
    "Next.js deployment",
    "Vercel",
    "Supabase",
    "production infrastructure",
    "no-code migration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} bg-white text-slate-900`}
        suppressHydrationWarning
      >
        {/*
         * LanguageProvider is a Client Component that owns the active
         * language state. Mounting it here — above every page and component
         * in the tree — guarantees that useTranslation() works in any
         * client component without prop drilling or a hydration mismatch.
         */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
