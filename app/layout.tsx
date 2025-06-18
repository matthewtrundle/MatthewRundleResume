import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Rundle - Strategic AI Architect",
  description: "Executive AI leader with 500+ hours hands-on experience building transformative AI solutions. Proven track record of $200M+ commercial impact through ML-powered analytics.",
  keywords: ["AI Leadership", "Machine Learning", "Analytics", "Data Science", "Strategic AI", "Matthew Rundle"],
  openGraph: {
    title: "Matthew Rundle - Strategic AI Architect",
    description: "Executive AI leader driving $200M+ impact through innovative ML solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}