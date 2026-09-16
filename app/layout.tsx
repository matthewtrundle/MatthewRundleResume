import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew Rundle | Manufacturing Systems & Applied AI",
  description: "Systems builder who built the manufacturing execution system running Western Magnetics’ end-to-end production process, plus agentic SaaS products and data science leadership at Expedia Group.",
  keywords: ["Applied AI", "AI Leadership", "Agentic Systems", "Data Leadership", "AI Product", "Austin"],
  openGraph: {
    title: "Matthew Rundle | Manufacturing Systems & Applied AI",
    description: "Software that runs factories, with applied AI where it earns its place.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
