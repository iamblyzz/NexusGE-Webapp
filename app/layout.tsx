import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Global Enterprise — Production-Ready App Deployment",
  description:
    "We migrate Lovable, Bolt, Framer, and no-code apps into real deployable infrastructure — Vercel, Supabase, GitHub. 24–72 hour turnaround.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Read the nonce injected by middleware so Next.js inline bootstrap scripts
  // are stamped with it and allowed by the Content-Security-Policy.
  const nonce = headers().get("x-nonce") ?? undefined;

  return (
    <html lang="en">
      <head>
        {/*
         * Passing the nonce to Next.js internals via the script prop on <head>
         * is not needed for App Router — Next.js 14 reads it from the
         * x-nonce request header automatically when using generateMetadata or
         * the headers() helper. The nonce variable is kept here for any
         * future <script> or <style> tags added manually.
         */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
