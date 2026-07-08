"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, TrendingUp, Clock, Shield, Cpu, Users } from "lucide-react";

const whyChooseUs = [
  {
    icon: Zap,
    title: "Intelligence at the Core",
    desc: "We do not just bolt AI onto legacy workflows. Our entire pipeline is driven by machine intelligence, delivering precision in predictive PR and automated revenue cycle management that traditional models simply cannot match.",
  },
  {
    icon: TrendingUp,
    title: "High-Impact, Low-Overhead",
    desc: "Bloated agencies drain your budget. By leveraging automated systems and advanced API integrations, we route your investment directly into growth-driving assets, delivering enterprise-grade strategy without the massive retainer.",
  },
  {
    icon: Clock,
    title: "Speed as a Strategy",
    desc: "In business and politics, timing is everything. While traditional development takes months, our agile deployment ships production-ready SaaS environments and brand campaigns in a fraction of the time, capturing opportunities before your competitors even react.",
  },
  {
    icon: Shield,
    title: "Bulletproof Infrastructure",
    desc: "Your brand reputation and revenue cycles cannot afford downtime. We build on highly secure, edge-optimized architecture boasting 99.9% uptime. Your operations run on the exact same stability relied upon by global enterprises.",
  },
  {
    icon: Cpu,
    title: "Precision-Engineered Solutions",
    desc: "We do not do cookie-cutter. From intricate insurance follow-up automation to highly targeted brand awareness campaigns, every system is purpose-built to solve your specific operational bottlenecks and engage your exact target audience.",
  },
  {
    icon: Users,
    title: "Data-Driven, Human-Led",
    desc: "While algorithms do the heavy computation, high-stakes decisions require human insight. You work directly with dedicated strategists who understand the nuances of your industry, ensuring our technical output perfectly aligns with your real-world goals.",
  },
];

function WhyCard({
  item,
  index,
}: {
  item: (typeof whyChooseUs)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
        <item.icon className="w-5 h-5 text-neon-blue" />
      </div>
      <div>
        <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
        <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-blue -bottom-60 -left-60 opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6">
            About EMERTHER
          </span>
          <h2 className="section-heading text-white mb-4">
            Lean AI.
            <br />
            <span className="text-gradient">Limitless Results.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left: Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                EMERTHER was founded on a single, uncompromising belief:{" "}
                <span className="text-white font-medium">
                  businesses deserve premium technology without the premium agency price tag.
                </span>
              </p>
              <p>
                Traditional agencies charge $15K–$50K for a website and $5K+/mo for revenue
                cycle management — not because the work is hard, but because their overhead
                is massive. Layers of account managers, office leases, and legacy processes
                inflate costs that you ultimately pay for.
              </p>
              <p>
                We tore that model apart. By building our entire operation around{" "}
                <span className="text-neon-blue font-medium">AI-driven pipelines</span>,
                we deliver faster output, higher quality, and radically lower prices. The
                math is simple: fewer humans doing repetitive tasks means more budget
                going toward actual results.
              </p>
              <p className="text-white font-medium">
                Our mission is to make enterprise-grade technology accessible to every
                growing brand — not just the ones with six-figure agency budgets.
              </p>
            </div>
          </motion.div>

          {/* Right: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Why Choose Us
            </h3>
            <div className="space-y-6">
              {whyChooseUs.map((item, i) => (
                <WhyCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
