"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Megaphone, BarChart3, HeartPulse, UtensilsCrossed } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Brand Incubation",
    description: "From zero to icon. We build brands that resonate, differentiate, and dominate their category through strategy, identity, and storytelling.",
    icon: Globe,
  },
  {
    title: "Political PR",
    description: "Data-driven campaign narratives, crisis communication, and reputation management for candidates, parties, and public figures.",
    icon: Megaphone,
  },
  {
    title: "Data-Driven Advertising",
    description: "Performance creative meets predictive analytics. Campaigns that optimize in real-time across digital, social, and programmatic channels.",
    icon: BarChart3,
  },
  {
    title: "Healthcare RCM SaaS",
    description: "End-to-end revenue cycle automation for hospitals and clinics. Claims, denials, payments — all streamlined into one intelligent platform.",
    icon: HeartPulse,
  },
  {
    title: "Restaurant Operations SaaS",
    description: "Unified OS for multi-location restaurants. Inventory, staff scheduling, POS integration, and real-time analytics in a single dashboard.",
    icon: UtensilsCrossed,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            <span className="text-gradient">Everything</span>{" "}
            <span className="text-white">Your Business Needs</span>
          </h2>
          <p className="section-subheading">
            Five pillars. Infinite scale. From perception engineering to operational infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
