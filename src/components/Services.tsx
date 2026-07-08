"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  CreditCard,
  BarChart3,
  Code2,
  Search,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "ai-websites",
    icon: Globe,
    title: "AI Websites",
    desc: "Blazing-fast, AI-optimized websites that convert visitors into clients — built in days, not months.",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    id: "rcm",
    icon: CreditCard,
    title: "RCM Automation",
    desc: "End-to-end revenue cycle management with automated billing, denial tracking, and AR follow-up.",
    gradient: "from-neon-violet to-neon-pink",
  },
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Custom Dashboards",
    desc: "Real-time KPI dashboards with drill-down analytics tailored to your exact business needs.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    id: "api",
    icon: Code2,
    title: "API Integration",
    desc: "Seamless third-party integrations — connect your CRM, payment gateways, and existing tools effortlessly.",
    gradient: "from-neon-pink to-neon-violet",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    desc: "AI-driven SEO that puts you on page one — automated audits, keyword intelligence, and content strategy.",
    gradient: "from-neon-blue to-neon-violet",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-neon-blue/20 pointer-events-none" />

      <div className="relative glass-card p-6 h-full flex flex-col transition-all duration-500 group-hover:border-neon-blue/40 group-hover:-translate-y-1 group-hover:shadow-glow-md">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow-md transition-shadow duration-500`}
        >
          <service.icon className="w-5 h-5 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">
          {service.desc}
        </p>

        {/* Learn More */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neon-blue/60 group-hover:text-neon-blue transition-colors"
        >
          Learn More
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon-violet/10 border border-neon-violet/20 text-neon-violet text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do
          </span>
          <h2 className="section-heading text-white mb-4">
            Everything Your Business
            <br />
            <span className="text-gradient">Needs to Scale.</span>
          </h2>
          <p className="section-subheading">
            From AI-powered websites to automated revenue systems — we build the
            infrastructure that growing brands depend on.
          </p>
        </motion.div>

        {/* Bento Grid — 5 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
