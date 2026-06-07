import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers   from "@/components/Providers";
import Analytics   from "@/components/Analytics";

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
    <html lang="en" className={`${inter.variable} bg-slate-50`}>
      <body
        className={`${inter.className} bg-slate-50 text-slate-900`}
        suppressHydrationWarning
      >
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
