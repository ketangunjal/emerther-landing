import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#121212",
        "bg-secondary": "#1a1a1a",
        "bg-card": "#1e1e1e",
        "border-subtle": "#2a2a2a",
        "accent": "#00E5FF",
        "accent-indigo": "#6366f1",
        "accent-cyan": "#00E5FF",
        "cta": "#FFB300",
        "cta-hover": "#FFC933",
        "text-primary": "#fafafa",
        "text-secondary": "#a1a1aa",
        "text-muted": "#71717a",
        "neon-blue": "#00E5FF",
        "neon-violet": "#6366f1",
        "neon-cyan": "#22d3ee",
        "neon-pink": "#f472b6",
        "daisy-black": "#121212",
        "daisy-charcoal": "#1a1a1a",
        "daisy-card": "#1e1e1e",
        "daisy-border": "#2a2a2a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "grid-pulse": "gridPulse 4s ease-in-out infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(77, 124, 254, 0.4), 0 0 40px rgba(77, 124, 254, 0.2)" },
          "50%": { boxShadow: "0 0 35px rgba(77, 124, 254, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(1deg)" },
          "66%": { transform: "translateY(10px) rotate(-1deg)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(77, 124, 254, 0.3)" },
          "50%": { borderColor: "rgba(77, 124, 254, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(rgba(77, 124, 254, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 124, 254, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(77, 124, 254, 0.15)",
        "glow-md": "0 0 30px rgba(77, 124, 254, 0.2)",
        "glow-lg": "0 0 60px rgba(77, 124, 254, 0.25)",
        "glow-violet": "0 0 40px rgba(139, 92, 246, 0.2)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(255, 255, 255, 0.05) inset",
      },
    },
  },
  plugins: [],
};
export default config;
