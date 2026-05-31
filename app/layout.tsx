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
    <html lang="en" className={`${inter.variable} bg-neutral-950`}>
      <body
        className={`${inter.className} bg-neutral-950 text-slate-100`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
