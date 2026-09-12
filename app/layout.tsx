import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew Rundle | Applied AI and Data Leader",
  description: "Applied AI and data leader building production systems across manufacturing, customer communications, operations and enterprise analytics.",
  keywords: ["Applied AI", "AI Leadership", "Agentic Systems", "Data Leadership", "AI Product", "Austin"],
  openGraph: {
    title: "Matthew Rundle | Applied AI and Data Leader",
    description: "AI systems that move from strategy into real operations.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
