"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, TrendingUp, Clock, Shield, Cpu, Users } from "lucide-react";

const whyChooseUs = [
  {
    icon: Zap,
    title: "AI-First, Always",
    desc: "We don't bolt AI onto old workflows. Our entire pipeline is built around machine intelligence — delivering speed and accuracy no traditional agency can match.",
  },
  {
    icon: TrendingUp,
    title: "Lean = Affordable",
    desc: "No bloated teams. No unnecessary overhead. Just a tight crew of engineers and AI systems that deliver enterprise-grade results at startup prices.",
  },
  {
    icon: Clock,
    title: "Deploy in Days",
    desc: "While legacy agencies quote you 8–12 week timelines, we ship production-ready websites and dashboards in 1–2 weeks — without cutting corners.",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    desc: "99.9% uptime, automated backups, edge-optimized delivery, and SOC 2-compliant infrastructure. Your business runs on the same stack as Fortune 500s.",
  },
  {
    icon: Cpu,
    title: "Custom-Built, Every Time",
    desc: "We don't do cookie-cutter. Every website, every RCM dashboard, every integration is purpose-built around your unique operations and goals.",
  },
  {
    icon: Users,
    title: "You Talk to Humans",
    desc: "AI handles the heavy lifting, but you always have a dedicated strategist who understands your business. No chatbot-only support. Real people, real results.",
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
