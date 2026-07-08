"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  return (
    <>
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
