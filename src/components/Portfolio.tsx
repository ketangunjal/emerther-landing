"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  metric: string;
  category: "saas" | "ads" | "pr";
  color: string;
  size: "tall" | "wide" | "normal";
  image: string;
}

const projects: PortfolioItem[] = [
  {
    id: 1,
    title: "Revenue Cycle Automation",
    metric: "99% Claim Success Rate",
    category: "saas",
    color: "from-accent/40 to-accent-indigo/40",
    size: "tall",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Restaurant Chain OS",
    metric: "47 Locations • Zero Downtime",
    category: "saas",
    color: "from-accent-indigo/40 to-accent/40",
    size: "normal",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Political Campaign Strategy",
    metric: "2.4M Reach • 68% Sentiment Shift",
    category: "pr",
    color: "from-cta/30 to-accent/30",
    size: "wide",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "D2C Brand Launch",
    metric: "₹12Cr GMV in 90 Days",
    category: "ads",
    color: "from-accent/30 to-cta/30",
    size: "normal",
    image: "https://images.unsplash.com/photo-1553729459-afe8e5ef21b7?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Healthcare Analytics Dashboard",
    metric: "40% Faster Reimbursement",
    category: "saas",
    color: "from-accent-indigo/40 to-accent/40",
    size: "normal",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "FMCG Awareness Campaign",
    metric: "8.1M Impressions • 4.3% CTR",
    category: "ads",
    color: "from-cta/30 to-accent-indigo/30",
    size: "tall",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=800&fit=crop&auto=format",
  },
  {
    id: 7,
    title: "Crisis Communication",
    metric: "Reputation Recovered in 72hrs",
    category: "pr",
    color: "from-accent/30 to-accent-indigo/30",
    size: "normal",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 8,
    title: "EV Brand Digital Strategy",
    metric: "340% ROAS • Nationwide Scale",
    category: "ads",
    color: "from-accent-indigo/40 to-cta/40",
    size: "wide",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=400&fit=crop&auto=format",
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "saas", label: "SaaS & RCM" },
  { key: "ads", label: "Brand Ads" },
  { key: "pr", label: "PR & Data" },
];

function PortfolioCard({ project }: { project: PortfolioItem }) {
  const sizeClasses = {
    tall: "md:row-span-2",
    wide: "md:col-span-2",
    normal: "",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className={`group relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle/50 cursor-pointer ${sizeClasses[project.size]}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-30 transition-opacity duration-500`} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[240px] p-6">
        {/* Hover Overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bg-primary/95 via-bg-primary/70 to-transparent pt-12"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-white text-lg leading-tight mb-1">
                {project.title}
              </h3>
              <p className="text-accent text-sm font-medium">
                {project.metric}
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-accent flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>

      {/* Subtle scale on hover */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">
            <span className="text-gradient">Proven Impact.</span>{" "}
            <span className="text-white">Real Results.</span>
          </h2>
          <p className="section-subheading">
            Every project ships with measurable outcomes. Here&apos;s what we&apos;ve delivered.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-accent text-black shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                  : "bg-bg-card text-text-secondary border border-border-subtle hover:text-white hover:border-accent/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
