import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Matthew Rundle | Manufacturing Systems & Applied AI",
  description: "Systems builder who built the manufacturing execution system running Western Magnetics’ end-to-end production process, plus agentic SaaS products and data science leadership at Expedia Group.",
  keywords: ["Manufacturing Systems", "MES", "Applied AI", "Agentic Systems", "Data Leadership", "Austin"],
  openGraph: {
    title: "Matthew Rundle | Manufacturing Systems & Applied AI",
    description: "Software that runs factories, with applied AI where it earns its place.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
