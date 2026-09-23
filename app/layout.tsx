import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import "./mes.css";

const display = Inter_Tight({ subsets: ["latin"], weight: ["400", "500"], variable: "--display" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["300", "400"], variable: "--mono" });
const pixel = VT323({ subsets: ["latin"], weight: "400", variable: "--pixel" });

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
    <html lang="en" className={`${display.variable} ${mono.variable} ${pixel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
