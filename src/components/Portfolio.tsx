"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  { id: 1, image: "/7018605.jpg", title: "Claims Processing Dashboard", metric: "Automated Denial Management" },
  { id: 2, image: "/7098132(1).jpg", title: "Patient Billing Portal", metric: "Real-Time Revenue Tracking" },
  { id: 3, image: "/2110.w013.n001.549B.p30.549.jpg", title: "Insurance Verification Suite", metric: "Instant Eligibility Checks" },
  { id: 4, image: "/2110.w013.n001.550B.p30.550.jpg", title: "RCM Workflow Automation", metric: "End-to-End Process Streamlining" },
  { id: 5, image: "/portfolio-1.png", title: "Revenue Cycle Analytics", metric: "99% Claim Success Rate" },
  { id: 6, image: "/portfolio-2.png", title: "Healthcare Analytics", metric: "40% Faster Reimbursement" },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 400 : -400, opacity: 0 }),
};

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
            Revenue cycle automation that delivers measurable outcomes across healthcare enterprises.
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle/50 aspect-[16/9] md:aspect-[2.4/1]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-bg-primary/95 via-bg-primary/60 to-transparent pt-24">
                  <p className="text-accent text-sm font-medium mb-1">{slide.metric}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{slide.title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-primary/80 backdrop-blur border border-border-subtle/50 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-primary/80 backdrop-blur border border-border-subtle/50 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pause/Play + Dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-8 h-8 rounded-full bg-bg-card border border-border-subtle/50 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all duration-300"
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-7 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-text-muted/40 hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-4 h-0.5 bg-border-subtle/30 rounded-full overflow-hidden">
            <motion.div
              key={isPaused ? "paused" : current}
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "100%" : "100%" }}
              transition={{ duration: isPaused ? 0 : 4, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
