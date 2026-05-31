import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
