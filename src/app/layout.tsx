import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMERTHER — AI Websites & Automated Revenue Systems",
  description:
    "AI-engineered websites that convert and automated RCM billing workflows. 70% less overhead for modern brands and growing companies.",
  keywords: [
    "AI websites",
    "Revenue Cycle Management",
    "RCM billing",
    "web development",
    "automation",
    "EMERTHER",
  ],
  openGraph: {
    title: "EMERTHER — AI Websites & Automated Revenue Systems",
    description:
      "Websites that convert. Revenue systems that scale. 70% less overhead.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-daisy-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
