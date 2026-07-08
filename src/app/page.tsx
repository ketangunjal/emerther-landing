"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { generateJSONLD } from "@/components/SEO";

export default function Home() {
  const { baseOrg, saasProduct } = generateJSONLD("home");

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saasProduct) }}
      />
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Pricing />
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}
