"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-24 pb-16">
        {/* Main Headline */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="section-heading text-center mb-6 text-balance"
        >
          <span className="text-gradient">Architects of Influence</span>
          <br />
          <span className="text-white">& Infrastructure</span>
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-text-secondary text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 text-balance"
        >
          We engineer brands that dominate culture and systems that power revenue.
          One division crafts perception. The other builds the machine.
        </motion.p>

        {/* Split Funnel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left â€” Emerther Agency */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="group relative glass-card p-8 md:p-10 transition-all duration-500 cursor-pointer hover-indigo"
          >
            <div className="absolute inset-0 rounded-2xl bg-accent-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent-indigo/10 flex items-center justify-center mb-6 group-hover:bg-accent-indigo/20 transition-colors">
                <Globe className="w-6 h-6 text-accent-indigo" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Emerther Agency
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Brand Building &bull; Political PR &bull; Data-Driven Advertising
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                We craft narratives that move markets. From startup positioning to
                political campaigns, our data-backed creative engine ensures your
                voice isn&apos;t just heard â€” it&apos;s followed.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-indigo/10 text-accent-indigo font-medium text-sm
                           group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300"
              >
                Explore Agency
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right â€” Emerther Systems */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="group relative glass-card p-8 md:p-10 transition-all duration-500 cursor-pointer hover-cyan"
          >
            <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Emerther Systems
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Healthcare RCM SaaS &bull; Restaurant Operations SaaS
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Mission-critical software for industries that never sleep.
                Revenue cycle automation for healthcare providers. End-to-end
                restaurant OS for chains scaling from 1 to 100+ locations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/10 text-accent font-medium text-sm
                           group-hover:bg-accent group-hover:text-black transition-all duration-300"
              >
                Explore Systems
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-10 border-t border-border-subtle/30"
        >
          {[
            { value: "70%", label: "Less Overhead" },
            { value: "3Ã—", label: "Faster Launch" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white font-display">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
