export interface PlanDetail {
  category: string;
  items: string[];
}

export interface Plan {
  name: string;
  tagline: string;
  price: number;
  discountedPrice: number;
  period?: string;
  tier: "starter" | "growth" | "scale";
  featured?: boolean;
  bestFor: string[];
  sections: PlanDetail[];
}

export const ugcPlans: Plan[] = [
  {
    name: "Starter Creator",
    tagline: "Start creating content that builds trust.",
    price: 12000,
    discountedPrice: 6999,
    period: "month",
    tier: "starter",
    bestFor: ["New brands", "Small businesses", "Early-stage products"],
    sections: [
      {
        category: "Deliverables",
        items: ["6 UGC videos (15–30 sec)", "4 product photos"],
      },
      {
        category: "Services",
        items: [
          "Basic scripting (structured hooks)",
          "Clean editing (subtitles + format optimization)",
          "Platform-ready content",
          "Basic shot planning (angles + framing guidance)",
          "Product positioning guidance",
          "Basic storytelling formats (problem-solution, demo)",
        ],
      },
      {
        category: "Added Value",
        items: [
          "5–7 content ideas/month",
          "Caption + hashtag suggestions",
          "Hook guidance",
          "Thumbnail selection",
          "Raw footage access",
          "Posting time suggestions",
          "Basic trend references",
          "Simple brand tone alignment",
          "File organization (ready-to-use folders)",
        ],
      },
      {
        category: "Creator Setup",
        items: ["1 creator", "1 revision"],
      },
    ],
  },
  {
    name: "Growth Creator",
    tagline: "Content designed to convert, not just look good.",
    price: 35000,
    discountedPrice: 25000,
    period: "month",
    tier: "growth",
    featured: true,
    bestFor: ["D2C brands", "Restaurants", "Fashion", "Skincare", "Ad-focused businesses"],
    sections: [
      {
        category: "Deliverables",
        items: ["10 UGC videos (15–45 sec)", "8–10 product photos"],
      },
      {
        category: "Services",
        items: [
          "Conversion-driven scripting",
          "Ad-style editing (high retention)",
          "Multiple hook variations",
          "Scroll-stopping first 3 sec optimization",
          "Multi-format videos (testimonial, POV, demo)",
          "Creative direction for better ad performance",
        ],
      },
      {
        category: "Added Value",
        items: [
          "CTA optimization",
          "Ad + organic captions",
          "Hashtag & posting strategy",
          "A/B testing suggestions",
          "Competitor content insights",
          "Trend-based content",
          "Weekly content improvement suggestions",
          "Hook performance insights",
          "Engagement optimization tips",
          "Content repurposing suggestions",
        ],
      },
      {
        category: "Creator Setup",
        items: [
          "2–3 creators",
          "Ad usage rights",
          "Creator style matching (based on brand niche)",
          "Location/style variation for diversity",
        ],
      },
      {
        category: "Revisions",
        items: ["2 revisions"],
      },
    ],
  },
  {
    name: "Scale Creator Engine",
    tagline: "A complete content engine built to scale your revenue.",
    price: 125000,
    discountedPrice: 75000,
    period: "month",
    tier: "scale",
    bestFor: ["Scaling brands", "eCommerce businesses", "High ad spenders"],
    sections: [
      {
        category: "Deliverables",
        items: ["25 UGC videos", "15–20 product photos"],
      },
      {
        category: "Services",
        items: [
          "Advanced scripting + multiple angles",
          "A/B hook testing system",
          "High-conversion creatives",
          "Full creative strategy planning (what to shoot & why)",
          "Multi-angle content production per product",
          "Performance-based iteration system",
        ],
      },
      {
        category: "Advanced System",
        items: [
          "Monthly content calendar",
          "Weekly optimization strategy",
          "Performance-driven creative planning",
          "Deep competitor research",
          "Weekly creative performance review",
          "Scaling strategy for winning creatives",
          "Content fatigue management plan",
        ],
      },
      {
        category: "Team",
        items: ["4–6 creators", "Dedicated content manager"],
      },
      {
        category: "Enhancements",
        items: [
          "Voiceovers + subtitles",
          "Scroll-stopping thumbnails",
          "Multi-platform adaptation",
          "Ad-ready exports (different formats & sizes)",
          "Hook library creation for brand",
          "Viral trend adaptation system",
        ],
      },
      {
        category: "Revisions",
        items: ["3–4 revisions"],
      },
    ],
  },
];

export const websitePlans: Plan[] = [
  {
    name: "Launch Store",
    tagline: "Launch your brand with a strong digital foundation.",
    price: 30000,
    discountedPrice: 18000,
    tier: "starter",
    bestFor: ["New businesses entering online"],
    sections: [
      {
        category: "Highlights",
        items: [
          "Shopify setup (premium theme)",
          "Up to 15 products",
          "Payment + shipping setup",
          "Mobile optimized",
          "Domain connection & setup",
          "Navigation menu setup",
          "Basic homepage banner design",
          "Contact form setup",
          "Social media integration",
          "Basic checkout configuration",
        ],
      },
    ],
  },
  {
    name: "Growth Store",
    tagline: "Built to convert visitors into paying customers.",
    price: 75000,
    discountedPrice: 45000,
    tier: "growth",
    featured: true,
    bestFor: ["Brands running ads & scaling online"],
    sections: [
      {
        category: "Highlights",
        items: [
          "Custom UI/UX",
          "Conversion-focused pages",
          "Landing page for ads",
          "Pixel + tracking setup",
          "CRO elements",
          "Advanced homepage sections (USP, testimonials)",
          "Trust badges & social proof integration",
          "Upsell & cross-sell setup",
          "Email capture popups",
          "Basic email flow setup (welcome/lead capture)",
          "Speed optimization (improved loading time)",
        ],
      },
    ],
  },
  {
    name: "Scale Store Engine",
    tagline: "A complete eCommerce system designed for revenue growth.",
    price: 150000,
    discountedPrice: 90000,
    tier: "scale",
    bestFor: ["Established brands building full systems"],
    sections: [
      {
        category: "Highlights",
        items: [
          "Custom design",
          "Funnel setup",
          "Automation + CRM",
          "Advanced CRO + analytics",
          "Advanced checkout optimization",
          "Multi-step funnel structuring",
          "Subscription / bundle setup",
          "CRM integration",
          "Automated email flows (abandoned cart, retargeting)",
          "Advanced analytics dashboard",
          "Multi-currency / international setup",
        ],
      },
    ],
  },
];

export const marketingPlans: Plan[] = [
  {
    name: "Launch Ads",
    tagline: "Start attracting your first customers with paid ads.",
    price: 20000,
    discountedPrice: 12000,
    period: "month",
    tier: "starter",
    bestFor: ["Small businesses testing ads"],
    sections: [
      {
        category: "Includes",
        items: [
          "Meta Ads setup",
          "1–2 campaigns",
          "Basic targeting",
          "Pixel setup",
          "Weekly monitoring",
          "Basic ad copy variations",
          "Audience testing setup",
          "Budget allocation guidance",
          "Basic retargeting audience creation",
          "Ad account setup support",
        ],
      },
    ],
  },
  {
    name: "Growth Ads System",
    tagline: "Turn traffic into leads and leads into sales.",
    price: 50000,
    discountedPrice: 30000,
    period: "month",
    tier: "growth",
    featured: true,
    bestFor: ["Businesses focused on consistent growth"],
    sections: [
      {
        category: "Includes",
        items: [
          "Meta + Google Ads",
          "Full funnel campaigns",
          "Retargeting",
          "A/B testing",
          "8–12 creatives guidance",
          "Performance tracking",
          "Lookalike audience setup",
          "Funnel-based audience segmentation",
          "Landing page feedback for conversions",
          "Budget scaling recommendations",
          "Creative performance insights",
          "Retargeting optimization",
        ],
      },
    ],
  },
  {
    name: "Scale Revenue Engine",
    tagline: "Scale aggressively with a performance-driven ad system.",
    price: 100000,
    discountedPrice: 60000,
    period: "month",
    tier: "scale",
    bestFor: ["Brands scaling revenue & ad spend"],
    sections: [
      {
        category: "Includes",
        items: [
          "Multi-platform ads",
          "Full funnel ecosystem",
          "20+ creatives strategy",
          "Advanced targeting",
          "Daily optimization",
          "Dedicated manager",
          "Advanced funnel mapping (TOF, MOF, BOF)",
          "Cross-platform retargeting strategy",
          "High-budget scaling strategy",
          "Creative testing framework",
          "Revenue & ROAS tracking system",
          "Weekly scaling decisions",
          "Competitor ad tracking system",
        ],
      },
    ],
  },
];

export const categories = [
  { label: "UGC", plans: ugcPlans },
  { label: "Website Development", plans: websitePlans },
  { label: "Marketing & Advertising", plans: marketingPlans },
];

export const formatPrice = (price: number) => price.toLocaleString("en-IN");
