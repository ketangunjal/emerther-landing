# 🚀 EMERTHER — Premium Landing Page

## Project Progress — July 9, 2026 (v2 Redesign)

---

## 🎨 v2 Complete Redesign (July 9)
| Change | Detail |
|--------|--------|
| **Color Palette** | bg `#121212`, accent `#00E5FF`, CTA `#FFB300` |
| **Hero** | Split-Funnel: "Branding & PR" / "SaaS & RCM Solutions" |
| **Services** | 5 cards: Brand Incubation, Political PR, Data-Driven Ads, Healthcare RCM SaaS, Restaurant SaaS |
| **About Us** | 6 premium headers: Intelligence at the Core, High-Impact Low-Overhead, Speed as Strategy, Bulletproof Infrastructure, Precision-Engineered, Data-Driven Human-Led |
| **Mission** | Rewritten for Indian market with lowest-price guarantee |
| **Portfolio** | Bento grid with filter tabs, hover overlays, 2 custom dashboard images |
| **Background** | Particle network canvas animation (60fps) |
| **SEO** | JSON-LD: ProfessionalService + SoftwareApplication schema |
| **Email** | `support@emerthertech.co.in` |
| **Location** | Mumbai, MH |

---

## 📧 Zoho Mail Verification (July 9)
| Detail | Value |
|--------|-------|
| Provider | Zoho Mail |
| CNAME Host | zb98920520 |
| CNAME Value | zmverify.zoho.in |
| Status | ✅ Added to DNS (propagating) |

---

## 🌐 DEPLOYED — LIVE

| Detail | Value |
|--------|-------|
| **Domain** | [emerthertech.co.in](https://emerthertech.co.in) |
| **WWW** | [www.emerthertech.co.in](https://www.emerthertech.co.in) |
| **Vercel URL** | [emerther-landing.vercel.app](https://emerther-landing.vercel.app) |
| **Platform** | Vercel (Hobby Plan) |
| **GitHub** | [github.com/ketangunjal/emerther-landing](https://github.com/ketangunjal/emerther-landing) |
| **SSL** | Auto-provisioned (90-day auto-renew) |
| **DNS Provider** | hosting.com (stableserver.net nameservers) |
| **Deploy Trigger** | Auto-deploy on `git push` to master |

### DNS Records Added (hosting.com → DNS Settings → emerthertech.co.in)
| Type | Host | Value |
|------|------|-------|
| A | @ | 216.198.79.1 |
| A | @ | 64.29.17.1 |
| CNAME | www | a5ed4eb03e673d9e.vercel-dns-017.com. |

### Quick Commands
```bash
# Deploy updates
cd "C:\Users\ketan\Desktop\EMERTHER-Landing"
git add -A && git commit -m "updates" && git push

# Check domain status
vercel domains verify emerthertech.co.in
vercel domains inspect emerthertech.co.in
```

---

## 📁 Project Location
```
C:\Users\ketan\Desktop\EMERTHER-Landing\
```

## 🖥️ Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 14** (App Router) |
| Styling | **Tailwind CSS 3.4** (custom `daisy-*` dark theme) |
| Animation | **Framer Motion 11** |
| Icons | **Lucide React** |
| Language | **TypeScript 5** |

---

## 📋 Completed Sections

### 1. 🧭 Sticky Navigation Bar (`src/components/Navbar.tsx`)
- EMERTHER logo (custom geometric "E" mark from `public/logo.png`)
- **Centered links**: Services, Company, Support
- **Right CTA**: Neon-blue "Call Us" button → `tel:+917219567951`
- **Glassmorphism**: Backdrop blur + semi-transparent background on scroll
- **Hide on scroll down, show on scroll up** — smart sticky behavior
- Mobile: Slide-out hamburger menu with full phone number CTA
- Smooth Framer Motion entry animation

### 2. 🎯 Hero Section (`src/components/Hero.tsx`)
- Massive headline: *"Websites That Convert. Revenue Systems That Scale. 70% Less Overhead."*
- AI-powered agency badge with live pulse dot
- Neon gradient text (blue → violet → cyan)
- Floating 3D geometric wireframe canvas (custom `FloatingGeometry.tsx` — 60fps)
- Glass code container with animated cursor (emerther.ai/core)
- Stats row: 70% Less Overhead | 3× Faster Launch | 99.9% Uptime
- Neon pulse CTA button + ghost secondary button
- Fully responsive

### 3. 🧩 Services Bento Grid (`src/components/Services.tsx`)
5 premium cards in responsive grid (1 col mobile, 2 col tablet, 3 col desktop):

| # | Card | Icon | Gradient |
|---|------|------|----------|
| 1 | AI Websites | Globe | Blue → Cyan |
| 2 | RCM Automation | CreditCard | Violet → Pink |
| 3 | Custom Dashboards | BarChart3 | Cyan → Blue |
| 4 | API Integration | Code2 | Pink → Violet |
| 5 | SEO Optimization | Search | Blue → Violet |

- Each card: gradient icon, title, description, "Learn More →" arrow
- Hover: **neon-blue border glow** + slight lift + shadow enhancement
- Staggered scroll-triggered fade-in animations
- Section heading: *"Everything Your Business Needs to Scale."*

### 4. 🏢 About Us / Company (`src/components/AboutUs.tsx`)
- **"Lean AI. Limitless Results."** headline
- Two-column layout:
  - **Left — Our Mission**: Explains how EMERTHER replaces bloated agency costs with lean AI pipelines. Enterprise-grade tech at startup prices.
  - **Right — Why Choose Us**: 6 feature cards:
    1. AI-First, Always
    2. Lean = Affordable
    3. Deploy in Days
    4. Enterprise Reliability
    5. Custom-Built, Every Time
    6. You Talk to Humans
- Dot-pattern background, subtle blue glow orb

### 5. 💎 Pricing Section (`src/components/Pricing.tsx`)
3-tier pricing table:

| Tier | Price | Features | Badge |
|------|-------|----------|-------|
| **Starter** | $2,499 (one-time) | 5-page AI website, CMS, Basic SEO, 30-day support | — |
| **Growth** | $4,999 (one-time) | 12 pages, animations, full SEO, RCM dashboard, 90-day support | ⚡ Most Popular |
| **Enterprise** | Custom | Unlimited pages, AI chatbot, full RCM suite, dedicated manager, 24/7 SLA | — |

- Hover: Card elevates with glowing border, non-hovered cards dim
- Staggered entrance animations
- Dot-pattern background

### 6. 📧 Footer (`src/components/Footer.tsx`)
- EMERTHER logo + brand description
- **3 link columns**: Services, Company, Support
- **Bottom bar**: `+91 7219567951` (clickable `tel:`) | `hello@emerther.ai` (clickable `mailto:`) | San Francisco, CA
- Social icons (Twitter, LinkedIn, GitHub)
- © 2026 EMERTHER
- Dark glass background with gradient accent line

### 7. 🤖 Daisy AI Chatbot (`src/components/ChatBubble.tsx` + `src/lib/daisy-brain.ts`)
- **Persona**: Sharp, charming female AI executive — warm, confident, personable
- **Avatar**: Pink/violet heart icon (distinct from brand logo)
- **Features**:
  - 8 intent-driven conversation flows (greeting, websites, RCM, pricing, budget, both, contact, fallback)
  - Quick-reply chips (🖥️ Websites, 💳 RCM Systems, 💰 Pricing, 🚀 Both)
  - Animated typing indicator (3-dot bounce)
  - Rich text rendering (**bold**, • bullets, tables)
  - Lead capture: auto-extracts name + email → confirms with green banner
  - "Schedule a call" CTA appears for engaged visitors
  - ↺ Restart conversation button
  - Framer Motion animations on every message
- **Daisy's Opening Line**: *"Hey there! 👋 I'm Daisy — your AI executive here at EMERTHER..."*

### 8. 🎨 Global Design System (`src/app/globals.css`)
- **Custom Tailwind theme**: `daisy-black`, `daisy-charcoal`, `daisy-card`, `daisy-border`
- **Neon palette**: `neon-blue`, `neon-violet`, `neon-cyan`, `neon-pink`
- **Glass utilities**: `.glass`, `.glass-hover`, `.glass-card`
- **Glow shadows**: `shadow-glow-sm/md/lg`, `shadow-glow-violet`
- **Backgrounds**: `.grid-bg`, `.dot-bg`, `.glow-orb`
- **Typography**: Inter (body), Space Grotesk (headings), JetBrains Mono (code)
- Scroll-triggered animations via Framer Motion `useInView`
- Custom scrollbar styling

---

## 📂 Full File Structure
```
EMERTHER-Landing/
├── package.json              # Dependencies & scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind theme (colors, animations, fonts)
├── postcss.config.js         # PostCSS + Tailwind + Autoprefixer
├── tsconfig.json             # TypeScript configuration
├── public/
│   └── logo.png              # Custom EMERTHER geometric "E" logo
└── src/
    ├── app/
    │   ├── globals.css       # Global styles, glass utils, custom theme
    │   ├── layout.tsx        # Root layout + SEO metadata
    │   └── page.tsx          # Main page composition
    ├── components/
    │   ├── Navbar.tsx        # Sticky glass nav + Call Us CTA
    │   ├── Hero.tsx          # Hero with floating geometry
    │   ├── FloatingGeometry.tsx  # Canvas 3D wireframe (60fps)
    │   ├── Services.tsx      # 5-card bento grid
    │   ├── AboutUs.tsx       # Mission + Why Choose Us
    │   ├── Pricing.tsx       # 3-tier pricing table
    │   ├── Footer.tsx        # Footer with phone/email links
    │   └── ChatBubble.tsx    # Daisy AI chatbot UI
    └── lib/
        └── daisy-brain.ts    # Daisy AI conversation engine
```

---

## 🚀 Quick Start
```bash
cd "C:\Users\ketan\Desktop\EMERTHER-Landing"
npm install
npm run dev      # → http://localhost:3000
npm run build    # Production build
```

---

## 📞 Contact Info (Live on Site)
- **Phone**: [+91 7219567951](tel:+917219567951) (clickable `tel:` link)
- **Email**: [hello@emerther.ai](mailto:hello@emerther.ai) (clickable `mailto:` link)
- **Location**: San Francisco, CA

---

## ✅ Build Status
- **Production build**: ✓ Compiled successfully — 0 errors
- **TypeScript**: ✓ All types valid
- **Lighthouse-ready**: Static generation, optimized assets
- **Vercel Deploy**: ✓ Live on emerthertech.co.in (July 8, 2026)
- **SSL**: ✓ Auto-renewing certificates
- **DNS**: ✓ Verified & propagating

---

## 🔄 Resume Work (July 9, 2026+)
```bash
cd "C:\Users\ketan\Desktop\EMERTHER-Landing"
code .
npm run dev
# Site will be at http://localhost:3000
```

---

*Last updated: July 9, 2026 — v2 Redesign deployed with Portfolio & animations*
