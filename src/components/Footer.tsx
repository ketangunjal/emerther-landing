"use client";

import { Mail, MapPin, Phone, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "AI Websites", href: "#services" },
    { label: "RCM Automation", href: "#services" },
    { label: "Custom Dashboards", href: "#services" },
    { label: "API Integration", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Support: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "System Status", href: "#" },
    { label: "Contact Support", href: "#contact" },
    { label: "Migration Guide", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-daisy-border/30">
      {/* Top Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center shadow-glow-sm">
                <img src="/logo.png" alt="EMERTHER" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                EMERTHER
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered websites and automated revenue systems for modern brands.
              70% less overhead. 3× faster launch.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-daisy-border/30 flex items-center justify-center text-text-muted hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-daisy-border/30 flex items-center justify-center text-text-muted hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/ketangunjal/emerther-landing" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-daisy-border/30 flex items-center justify-center text-text-muted hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-daisy-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} EMERTHER. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-text-muted text-sm">
            <a href="tel:+917219567951" className="inline-flex items-center gap-1.5 hover:text-neon-blue transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 7219567951</span>
            </a>
            <span className="text-daisy-border hidden sm:inline">|</span>
            <a href="mailto:support@emerthertech.co.in" className="inline-flex items-center gap-1.5 hover:text-neon-blue transition-colors">
              <Mail className="w-4 h-4" />
              <span>support@emerthertech.co.in</span>
            </a>
            <span className="text-daisy-border hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, MH</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
