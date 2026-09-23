import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./mes.css";
import Reveal from "@/components/site/Reveal";

const display = Inter_Tight({ subsets: ["latin"], weight: ["500", "600"], variable: "--display" });
const body = Inter({ subsets: ["latin"], variable: "--body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["300", "400"], variable: "--mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://matthew-rundle-resume.vercel.app"),
  title: "Matthew Rundle | Applied AI, Manufacturing Software & Data Leadership",
  description: "Builder of the MES running Western Magnetics' production, agentic SaaS products through Domain Labs, and former data science leader at Expedia Group.",
  openGraph: {
    title: "Matthew Rundle",
    description: "Software that gets used: manufacturing systems, applied AI and data leadership.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}<Reveal /></body>
    </html>
  );
}
