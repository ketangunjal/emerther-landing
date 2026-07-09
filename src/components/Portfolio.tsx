"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  metric: string;
  category: "saas" | "ads" | "pr";
  image: string;
}

const projects: PortfolioItem[] = [
  {
    id: 1,
    title: "Revenue Cycle Automation",
    metric: "99% Claim Success Rate",
    category: "saas",
    image: "/portfolio-1.png",
  },
  {
    id: 2,
    title: "Healthcare Analytics Dashboard",
    metric: "40% Faster Reimbursement",
    category: "saas",
    image: "/portfolio-2.png",
  },
  {
    id: 3,
    title: "Claims Processing System",
    metric: "Automated Denial Management",
    category: "saas",
    image: "/7018605.jpg",
  },
  {
    id: 4,
    title: "Patient Billing Portal",
    metric: "Real-Time Revenue Tracking",
    category: "saas",
    image: "/7098132(1).jpg",
  },
  {
    id: 5,
    title: "Insurance Verification Suite",
    metric: "Instant Eligibility Checks",
    category: "saas",
    image: "/2110.w013.n001.549B.p30.549.jpg",
  },
  {
    id: 6,
    title: "RCM Workflow Automation",
    metric: "End-to-End Process Streamlining",
    category: "saas",
    image: "/2110.w013.n001.550B.p30.550.jpg",
  },
  {
    id: 7,
    title: "Political Campaign Strategy",
    metric: "2.4M Reach • 68% Sentiment Shift",
    category: "pr",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=700&fit=crop&auto=format",
  },
  {
    id: 8,
    title: "D2C Brand Launch",
    metric: "₹12Cr GMV in 90 Days",
    category: "ads",
    image: "https://images.unsplash.com/photo-1553729459-afe8e5ef21b7?w=1200&h=700&fit=crop&auto=format",
  },
  {
    id: 9,
    title: "FMCG Awareness Campaign",
    metric: "8.1M Impressions • 4.3% CTR",
    category: "ads",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=700&fit=crop&auto=format",
  },
  {
    id: 10,
    title: "Crisis Communication",
    metric: "Reputation Recovered in 72hrs",
    category: "pr",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=700&fit=crop&auto=format",
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "saas", label: "SaaS & RCM" },
  { key: "ads", label: "Brand Ads" },
  { key: "pr", label: "PR & Data" },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const current = filtered[currentIndex] || filtered[0];

  const paginate = useCallback(
    (dir: number) => {
      setSlide(([prev]) => {
        const next = prev + dir;
        if (next < 0) return [filtered.length - 1, dir];
        if (next >= filtered.length) return [0, dir];
        return [next, dir];
      });
    },
    [filtered.length]
  );

  const goTo = useCallback((idx: number) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  // Reset index when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSlide([0, 0]);
  };

  if (!current) return null;

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              onClick={() => handleTabChange(tab.key)}
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

        {/* Carousel */}
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle/50 aspect-[16/9] md:aspect-[21/9]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${activeTab}-${current.id}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Overlay with Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-bg-primary/95 via-bg-primary/60 to-transparent pt-24">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-accent text-sm font-medium mb-1">
                        {current.metric}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                        {current.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-accent flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-primary/80 backdrop-blur border border-border-subtle/50 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-primary/80 backdrop-blur border border-border-subtle/50 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {filtered.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 h-2.5 bg-accent"
                    : "w-2.5 h-2.5 bg-text-muted/40 hover:bg-text-muted"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-text-muted text-sm mt-3">
            {currentIndex + 1} / {filtered.length}
          </p>
        </div>
      </div>
    </section>
  );
}
