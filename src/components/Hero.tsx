"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Shield } from "lucide-react";
import FloatingGeometry from "./FloatingGeometry";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { icon: Zap, label: "70% Less Overhead", desc: "vs. traditional agencies" },
  { icon: BarChart3, label: "3× Faster Launch", desc: "AI-powered development" },
  { icon: Shield, label: "99.9% Uptime", desc: "Enterprise reliability" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue -top-40 -right-60" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-violet -bottom-40 -left-40" />

      {/* Floating 3D Geometry */}
      <FloatingGeometry />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              AI-Powered Agency — est. 2025
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
            >
              Websites That{" "}
              <span className="text-gradient">Convert.</span>
              <br />
              Revenue Systems That{" "}
              <span className="text-gradient-warm">Scale.</span>
              <br />
              <span className="text-white">70% Less Overhead.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              EMERTHER builds AI-engineered websites and automated RCM billing
              workflows for modern brands — at a fraction of the cost.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary group text-base">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-ghost group">
                Explore Services
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center lg:text-left">
                  <Icon className="w-5 h-5 text-neon-blue mx-auto lg:mx-0 mb-2" />
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{desc}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Visual (Desktop only canvas covers it) */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Glass code container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-6 w-[380px] shadow-glow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-text-muted font-mono ml-2">emerther.ai/core</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex gap-2">
                  <span className="text-neon-violet">import</span>
                  <span className="text-neon-cyan">{'{'}</span>
                  <span className="text-white">RevenueEngine</span>
                  <span className="text-neon-cyan">{'}'}</span>
                  <span className="text-text-muted">from</span>
                  <span className="text-green-400">&apos;emerther&apos;</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neon-violet">const</span>
                  <span className="text-neon-blue">em</span>
                  <span className="text-text-muted">=</span>
                  <span className="text-neon-cyan">new</span>
                  <span className="text-white">RevenueEngine</span>
                  <span className="text-text-muted">()</span>
                </div>
                <div className="text-text-muted pl-4">// AI-powered automation</div>
                <div className="flex gap-2">
                  <span className="text-neon-violet">await</span>
                  <span className="text-neon-blue">em</span>
                  <span className="text-text-muted">.</span>
                  <span className="text-yellow-400">deploy</span>
                  <span className="text-text-muted">({'{'})</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-neon-cyan">website</span>
                  <span className="text-text-muted">:</span>
                  <span className="text-green-400">&apos;AI-optimized&apos;</span>
                  <span className="text-text-muted">,</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-neon-cyan">rcm</span>
                  <span className="text-text-muted">:</span>
                  <span className="text-green-400">&apos;automated&apos;</span>
                </div>
                <div className="text-text-muted">{'}'}</div>
                <div className="flex gap-2">
                  <span className="text-neon-cyan">console</span>
                  <span className="text-text-muted">.</span>
                  <span className="text-yellow-400">log</span>
                  <span className="text-text-muted">(</span>
                  <span className="text-green-400">&apos;🚀 Scaling revenue...&apos;</span>
                  <span className="text-text-muted">)</span>
                </div>
                <div className="pt-2 border-t border-daisy-border/30">
                  <span className="text-green-400">✓</span>
                  <span className="text-text-secondary ml-2">70% overhead reduction achieved</span>
                </div>
              </div>
              {/* Animated cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-2 h-4 bg-neon-blue ml-1 align-middle"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-daisy-black to-transparent pointer-events-none" />
    </section>
  );
}
