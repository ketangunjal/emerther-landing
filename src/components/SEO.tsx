import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  openGraphImage?: string;
  pageType?: "agency" | "systems" | "home";
}

export function generateSEOMetadata({
  title = "EMERTHER — Architects of Influence & Infrastructure",
  description = "AI-powered brand building, political PR, data-driven advertising, healthcare RCM SaaS, and restaurant operations software. 70% less overhead.",
  canonicalUrl = "https://emerthertech.co.in",
  openGraphImage = "/og-image.png",
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "brand building", "political PR", "healthcare RCM", "restaurant SaaS",
      "AI agency", "Emerther", "data-driven advertising", "revenue cycle management",
    ],
    metadataBase: new URL(canonicalUrl),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: openGraphImage ? [{ url: openGraphImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function generateJSONLD(pageType: "agency" | "systems" | "home" = "home") {
  const baseOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EMERTHER",
    url: "https://emerthertech.co.in",
    logo: "https://emerthertech.co.in/logo.png",
    email: "support@emerthertech.co.in",
    telephone: "+91-7219567951",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "MH",
      addressCountry: "IN",
    },
    description: "AI-powered brand building, PR, advertising, and SaaS solutions for healthcare and restaurants.",
    serviceType: ["Brand Building", "Political PR", "Data-Driven Advertising"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Agency Services",
      itemListElement: [
        { "@type": "Service", name: "Brand Incubation", description: "End-to-end brand strategy, identity, and launch." },
        { "@type": "Service", name: "Political PR", description: "Campaign narratives, crisis communication, reputation management." },
        { "@type": "Service", name: "Data-Driven Advertising", description: "Performance creative with predictive analytics." },
      ],
    },
  };

  const saasProduct = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Emerther Systems",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://emerthertech.co.in",
    offers: [
      {
        "@type": "Offer",
        name: "Healthcare RCM SaaS",
        description: "Revenue cycle automation for hospitals and clinics.",
        category: "HealthCare",
      },
      {
        "@type": "Offer",
        name: "Restaurant Operations SaaS",
        description: "Unified OS for multi-location restaurant management.",
        category: "FoodService",
      },
    ],
  };

  return { baseOrg, saasProduct };
}
