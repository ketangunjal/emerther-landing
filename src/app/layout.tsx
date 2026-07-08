import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMERTHER — Architects of Influence & Infrastructure",
  description:
    "AI-powered brand building, political PR, data-driven advertising, healthcare RCM SaaS, and restaurant operations software. 70% less overhead.",
  keywords: [
    "brand building",
    "political PR",
    "healthcare RCM",
    "restaurant SaaS",
    "AI agency",
    "Emerther",
    "data-driven advertising",
    "revenue cycle management",
  ],
  metadataBase: new URL("https://emerthertech.co.in"),
  openGraph: {
    title: "EMERTHER — Architects of Influence & Infrastructure",
    description:
      "We engineer brands that dominate culture and systems that power revenue. One division crafts perception. The other builds the machine.",
    url: "https://emerthertech.co.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMERTHER — Architects of Influence & Infrastructure",
    description:
      "We engineer brands that dominate culture and systems that power revenue.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
