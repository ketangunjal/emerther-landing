"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -5 }}
      className="group relative glass-card p-8 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
