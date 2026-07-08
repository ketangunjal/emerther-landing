"use client";

import { Mail, MapPin, Phone, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Services: ["AI Websites", "RCM Automation", "Custom Dashboards", "API Integration", "SEO Optimization"],
  Company: ["About Us", "Case Studies", "Blog", "Careers", "Press Kit"],
  Support: ["Documentation", "API Reference", "System Status", "Contact Support", "Migration Guide"],
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
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-daisy-border/30 flex items-center justify-center text-text-muted hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-muted text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link}
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
            <a href="mailto:hello@emerther.ai" className="inline-flex items-center gap-1.5 hover:text-neon-blue transition-colors">
              <Mail className="w-4 h-4" />
              <span>hello@emerther.ai</span>
            </a>
            <span className="text-daisy-border hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
