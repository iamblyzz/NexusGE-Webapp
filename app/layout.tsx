import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
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
  // Nonce injected by middleware for CSP compliance
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _nonce = headers().get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-white text-slate-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
