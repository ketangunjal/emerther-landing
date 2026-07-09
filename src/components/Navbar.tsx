"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Company", href: "#about" },
  { label: "Support", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 20);
    // Hide on scroll down, show on scroll up
    if (currentY > lastScrollY.current && currentY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-daisy-black/80 backdrop-blur-2xl border-b border-daisy-border/50 shadow-glow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <span className="font-display font-bold text-xl text-white tracking-tight">
              EMERTHER
            </span>
          </a>

          {/* Desktop Nav â€” centered */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA â€” Call Us */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="tel:+917219567951"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-neon-blue/90 hover:bg-neon-blue border border-neon-blue/50 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-daisy-charcoal/95 backdrop-blur-2xl border-b border-daisy-border/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/[0.05] transition-all text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+917219567951"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center mt-3 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us: +91 7219567951
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
