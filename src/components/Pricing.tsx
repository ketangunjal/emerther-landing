"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$2,499",
    period: "one-time",
    description: "Perfect for startups and small businesses ready to launch.",
    gradient: "from-neon-blue/20 to-neon-cyan/10",
    borderColor: "border-neon-blue/20",
    hoverBorder: "hover:border-neon-blue/50",
    glowColor: "rgba(77, 124, 254, 0.15)",
    features: [
      "AI-Optimized 5-Page Website",
      "Responsive Design System",
      "CMS Integration",
      "Basic SEO Setup",
      "1 Revision Round",
      "30-Day Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    icon: Sparkles,
    price: "$4,999",
    period: "one-time",
    description: "For growing brands that need performance and polish.",
    gradient: "from-neon-violet/30 to-neon-pink/10",
    borderColor: "border-neon-violet/40",
    hoverBorder: "hover:border-neon-violet/70",
    glowColor: "rgba(139, 92, 246, 0.25)",
    features: [
      "Everything in Starter",
      "Up to 12 Custom Pages",
      "Advanced Animations",
      "Full SEO + Analytics Suite",
      "Custom API Integrations",
      "3 Revision Rounds",
      "90-Day Priority Support",
      "RCM Dashboard (Basic)",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "",
    description: "Full-service partnership for established companies scaling fast.",
    gradient: "from-neon-cyan/20 to-neon-blue/10",
    borderColor: "border-neon-cyan/20",
    hoverBorder: "hover:border-neon-cyan/50",
    glowColor: "rgba(34, 211, 238, 0.15)",
    features: [
      "Everything in Growth",
      "Unlimited Pages & Custom UI",
      "AI Chatbot Integration",
      "Full RCM Automation Suite",
      "Custom Database Architecture",
      "Dedicated Account Manager",
      "24/7 Premium Support",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-blue -top-60 right-0 opacity-[0.05]" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-violet bottom-0 left-0 opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6">
            Pricing
          </span>
          <h2 className="section-heading text-white mb-4">
            Simple,{" "}
            <span className="text-gradient">Transparent</span>
            <br />
            Pricing.
          </h2>
          <p className="section-subheading">
            No hidden fees. No surprises. Just honest value delivered at a fraction
            of what traditional agencies charge.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group ${
                  isAnyHovered && !isHovered ? "opacity-60" : "opacity-100"
                } transition-opacity duration-500`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center z-20">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-neon-violet text-white text-xs font-semibold shadow-glow-violet">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Hover Glow */}
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                  style={{ background: plan.glowColor }}
                />

                {/* Card */}
                <div
                  className={`relative glass-card p-8 h-full flex flex-col transition-all duration-500
                    ${isHovered ? "-translate-y-2 shadow-glow-lg" : ""}
                    ${plan.popular ? "border-neon-violet/30" : plan.borderColor}
                    ${plan.hoverBorder}
                  `}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-5`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Name & Description */}
                  <h3 className="font-display text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-text-muted text-sm ml-1">/{plan.period}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 flex-1 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300
                      ${
                        plan.popular
                          ? "bg-gradient-to-r from-neon-blue to-neon-violet text-white shadow-glow-md hover:shadow-glow-lg"
                          : "bg-white/[0.04] border border-daisy-border text-white hover:bg-white/[0.08] hover:border-neon-blue/30"
                      }
                    `}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 text-text-muted text-sm"
        >
          All plans include free migration assistance. Need something custom?{" "}
          <a href="#contact" className="text-neon-blue hover:underline">
            Let&apos;s talk.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
