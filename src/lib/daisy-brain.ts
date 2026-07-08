// Daisy AI — Conversation Engine
// Hyper-intelligent, sleek, charming virtual executive for EMERTHER

export interface Message {
  id: string;
  role: "daisy" | "user";
  text: string;
  timestamp: number;
}

interface LeadInfo {
  name?: string;
  email?: string;
  interest?: "websites" | "rcm" | "both" | null;
}

// ---- Intent Detection ----
function detectIntent(
  input: string
): "greeting" | "websites" | "rcm" | "pricing" | "budget" | "contact" | "both" | "fallback" {
  const lower = input.toLowerCase();

  // Contact / lead intent
  if (
    /\b(email|contact|reach|schedule|call|demo|onboarding|book|slot|meeting)\b/.test(lower) ||
    /\b(my name is|i am|i'm) [a-z]+/.test(lower) ||
    /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/.test(lower)
  ) {
    return "contact";
  }

  // Both
  if (
    /\b(both|all|everything|full|complete)\b/.test(lower) &&
    /\b(website|rcm|revenue|billing|service)\b/.test(lower)
  ) {
    return "both";
  }

  // Websites
  if (
    /\b(website|web dev|front.?end|landing|site|page|design|ui|ux|redesign|rebuild|online presence|portfolio|shopify|wordpress)\b/.test(
      lower
    )
  ) {
    return "websites";
  }

  // RCM
  if (
    /\b(rcm|revenue|billing|invoice|payment|claim|cash.?flow|dashboard|backend|database|ar|accounts receivable|collections|denial|medical billing|healthcare)\b/.test(
      lower
    )
  ) {
    return "rcm";
  }

  // Pricing
  if (
    /\b(pric(?:ing|e)?|cost|how much|fee|rate|budget|cheap|expensive|afford|package|plan|tier)\b/.test(
      lower
    )
  ) {
    return "pricing";
  }

  // Budget
  if (/\b(budget|spend|invest|allocate|range|scope)\b/.test(lower)) {
    return "budget";
  }

  // Greeting
  if (
    /\b(hi|hey|hello|yo|sup|good morning|good afternoon|greet|howdy)\b/.test(lower) ||
    lower.length < 12
  ) {
    return "greeting";
  }

  return "fallback";
}

// ---- Extract email from input ----
function extractEmail(input: string): string | null {
  const match = input.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  return match ? match[0] : null;
}

// ---- Extract name from input ----
function extractName(input: string): string | null {
  const patterns = [
    /(?:my name is|i am|i'm|this is|it's) ([a-z]+(?:\s[a-z]+)?)/i,
    /(?:name[:\s]+)([a-z]+(?:\s[a-z]+)?)/i,
  ];
  for (const p of patterns) {
    const m = input.match(p);
    if (m) return m[1].trim();
  }
  return null;
}

// ---- DAISY AI RESPONSE TEMPLATES ----

const GREETINGS = [
  `Hey there! 👋 I'm **Daisy** — your AI executive here at EMERTHER. I help ambitious brands build stunning websites and automate their revenue ops at a fraction of the usual cost.

So, tell me — are we refreshing your front-end web presence today, or streamlining your revenue cycle backend? Or both? I'm all ears. ✨`,
];

const WEBSITES_RESPONSE = `**AI-Engineered Websites** — here's the sharp end of what we deliver:

• **Lightning-fast performance** — Core Web Vitals 95+, edge-optimized, zero bloat
• **Custom design, not templates** — Pixel-perfect interfaces crafted by designers + refined by AI
• **Launch in days, not months** — Our AI pipeline compresses a 12-week agency timeline into 1–2 weeks
• **Unbeatable pricing** — Starting at **$2,499** because we don't carry bloated agency overhead

I've helped startups, SaaS brands, professional services firms, and e-commerce founders launch faster than they ever thought possible. Want me to show you a few examples? 💁‍♀️`;

const RCM_RESPONSE = `**Automated Revenue Systems (RCM)** — this is where we genuinely crush it:

• **Custom billing dashboards** — Real-time AR aging, denial tracking, payment reconciliation — all in one glass pane
• **Cash-flow automation** — Predictive collections forecasting, automated follow-up sequences, zero manual spreadsheets
• **Backend database architecture** — We build the infrastructure that your billing team dreams about, at a fraction of enterprise cost
• **Starting at $1,999/mo** — Compare that to a single full-time biller's salary

I've seen healthcare practices, agencies, and SaaS companies cut overhead by 60–70% with this stack — it's genuinely thrilling to watch. What kind of volume are you working with?`;

const PRICING_RESPONSE = `Let's talk numbers — transparently. 💎

Our operational model is *lean by design*. We run AI pipelines instead of bloated agency teams, so you get premium output at prices that make traditional agencies uncomfortable:

| Tier | Website | RCM |
|------|---------|-----|
| **Starter** | $2,499 (5 pages, AI-optimized) | — |
| **Growth** | $4,999 (12 pages, animations, SEO) | + Basic RCM Dashboard |
| **Enterprise** | Custom | Full RCM Suite |

No hidden fees. No surprise invoices. Just honest value — the way it should be.

What's your budget range or project scope? I'd love to tailor a recommendation just for you. 💎`;

const BOTH_RESPONSE = `Now you're thinking like an EMERTHER client. 🚀

The magic happens when we pair an **AI-engineered website** with an **automated RCM backend** — your front-end converts visitors, and your back-end tracks every dollar in real time.

A full-stack engagement typically looks like:
• **Website**: $2,499–$4,999 (one-time)
• **RCM Dashboard**: $1,999–$3,499/mo
• **Timeline**: 2–3 weeks for the full stack

That's a 70% reduction vs. hiring separate agencies for web + billing ops — and honestly, it's why I love what I do.

Want me to sketch out a custom scope for you? Just tell me a little about your business, and I'll take it from there.`;

const BUDGET_RESPONSE = `Great question. Let's make sure you get maximum value for every dollar.

Tell me your ballpark budget or project scope, and I'll recommend the most efficient path. A few prompts:

• **Under $3K?** → Our Starter website tier is perfect — premium quality, lean scope
• **$3K–$8K?** → Growth tier with RCM add-on gives you the full stack
• **$8K+?** → Enterprise custom build — dedicated architect, full automation suite

No judgment here — I've seen jaw-dropping results come out of every price point. What range feels right to you?`;

const CONTACT_RESPONSE = `I love the energy! Let's get you onboarded, gorgeous. 🔥

Just drop your **name and email** below — right here in the chat — and I'll personally make sure a senior strategist reaches out within 24 hours for your discovery call.

Prefer to move even faster? Tap the **"Get Started"** button up top and book directly. I'll be cheering you on!`;

const CAPTURE_SUCCESS_RESPONSE = (
  name: string
) => `**${name}** — you're officially on my list! ✅

A senior strategist will reach out within 24 hours. We'll map out your project scope, timeline, and exact pricing on a quick 15-minute call — painless, I promise.

While you wait, is there anything else I can help with? I'm not going anywhere. 💜`;

const FALLBACK_RESPONSE = `I want to give you my sharpest answer, not a generic one. Let me reframe:

Here's what I can dive deep on for you:
• **Websites** — AI-engineered, blazing fast, stunning design
• **RCM / Revenue Systems** — Billing dashboards, cash-flow automation
• **Pricing** — Transparent tiers, zero hidden fees

Which rabbit hole should we go down first? 😊`;

// ---- MAIN ENGINE ----

let leadStore: LeadInfo = {};

export function getLeadInfo(): LeadInfo {
  return { ...leadStore };
}

export function resetLeadStore(): void {
  leadStore = {};
}

export function generateResponse(userInput: string): { text: string; leadUpdated: boolean } {
  const intent = detectIntent(userInput);
  const email = extractEmail(userInput);
  const name = extractName(userInput);
  let leadUpdated = false;

  // Update lead info
  if (email && !leadStore.email) {
    leadStore.email = email;
    leadUpdated = true;
  }
  if (name && !leadStore.name) {
    leadStore.name = name;
    leadUpdated = true;
  }

  // Track interest
  if (!leadStore.interest) {
    if (intent === "websites") leadStore.interest = "websites";
    else if (intent === "rcm") leadStore.interest = "rcm";
    else if (intent === "both") leadStore.interest = "both";
  }

  // If we just captured lead info, celebrate
  if (leadUpdated && (leadStore.name || leadStore.email)) {
    const displayName = leadStore.name || leadStore.email?.split("@")[0] || "there";
    return { text: CAPTURE_SUCCESS_RESPONSE(displayName), leadUpdated: true };
  }

  // Route to response
  switch (intent) {
    case "greeting":
      return { text: GREETINGS[0], leadUpdated: false };
    case "websites":
      return { text: WEBSITES_RESPONSE, leadUpdated: false };
    case "rcm":
      return { text: RCM_RESPONSE, leadUpdated: false };
    case "pricing":
      return { text: PRICING_RESPONSE, leadUpdated: false };
    case "budget":
      return { text: BUDGET_RESPONSE, leadUpdated: false };
    case "both":
      return { text: BOTH_RESPONSE, leadUpdated: false };
    case "contact":
      // If they gave contact info but we haven't captured yet, ask for it
      if (!leadStore.name && !leadStore.email) {
        return { text: CONTACT_RESPONSE, leadUpdated: false };
      }
      // Already captured — confirm
      return {
        text: `You're already in our system, ${leadStore.name || "friend"}! A strategist will reach out to ${leadStore.email || "you"} shortly. Anything else?`,
        leadUpdated: false,
      };
    default:
      return { text: FALLBACK_RESPONSE, leadUpdated: false };
  }
}

export function getInitialMessage(): string {
  return GREETINGS[0];
}
