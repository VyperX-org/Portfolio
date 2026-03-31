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
          "Basic content idea support",
          "Basic scripting / talking points",
          "Basic editing",
          "Hooks for videos",
          "1 revision per video",
          "Final delivery in ready-to-post format",
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
    price: 14999,
    discountedPrice: 14999,
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
          "Content planning",
          "Script writing",
          "Strong hooks for each video",
          "Better shoot execution",
          "Ad-style editing",
          "Subtitles / on-screen text",
          "Trending audio support",
          "CTA integration",
          "2 revisions per video",
          "Thumbnail frame selection",
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
    price: 24999,
    discountedPrice: 24999,
    period: "month",
    tier: "scale",
    bestFor: ["Scaling brands", "eCommerce businesses", "High ad spenders"],
    sections: [
      {
        category: "Deliverables",
        items: ["14 UGC videos (15–60 sec each)", "15–20 product photos"],
      },
      {
        category: "Services",
        items: [
          "Full content planning",
          "Script writing with marketing angles",
          "Strong hooks and CTA-worthy storytelling",
          "2 creators included",
          "Ad-style professional editing",
          "Multiple content styles",
          "Brand-based content execution",
          "Product demo videos",
          "Hashtag support",
          "Meta-ready ad formats",
          "2–3 revisions per video",
          "Testimonial-style content",
          "Problem-solution videos",
          "Voiceover videos",
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
        items: ["2–3 creators"],
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
        items: ["2–3 revisions"],
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

export const socialMediaManagementPlans: Plan[] = [
  {
    name: "Starter",
    tagline: "For brands that need consistent posting and professional page handling using existing content.",
    price: 8999,
    discountedPrice: 15000,
    period: "month",
    tier: "starter",
    bestFor: [
      "brands with existing raw content",
      "personal brands",
      "startups",
      "businesses wanting basic consistency",
    ],
    sections: [
      {
        category: "Deliverables",
        items: [
          "12 static / carousel posts",
          "8 reel editing from client-provided footage",
        ],
      },
      {
        category: "Services",
        items: [
          "Caption writing",
          "Hashtag strategy",
          "Monthly content calendar",
          "Page management",
          "Basic story posting",
          "Monthly report",
        ],
      },
    ],
  },
  {
    name: "Growth",
    tagline: "For brands that want better consistency, stronger presentation, and more active management.",
    price: 14999,
    discountedPrice: 20000,
    period: "month",
    tier: "growth",
    featured: true,
    bestFor: [
      "growing brands",
      "ecommerce brands",
      "service businesses",
      "businesses active on Instagram",
    ],
    sections: [
      {
        category: "Deliverables",
        items: [
          "16 static / carousel posts",
          "12 reel editing from client-provided footage",
        ],
      },
      {
        category: "Services",
        items: [
          "Caption writing",
          "Hashtag strategy",
          "Story management",
          "Monthly content calendar",
          "Feed planning",
          "Basic engagement handling",
          "Monthly insights report",
          "Strategy improvement suggestions",
        ],
      },
    ],
  },
  {
    name: "Elite",
    tagline: "For brands that want premium account management, better planning, and deeper growth support.",
    price: 24999,
    discountedPrice: 40000,
    period: "month",
    tier: "scale",
    bestFor: [
      "established brands",
      "scaling businesses",
      "founders / personal brands",
      "businesses wanting premium page handling",
    ],
    sections: [
      {
        category: "Deliverables",
        items: [
          "20 static / carousel posts",
          "16 reel editing from client-provided footage",
        ],
      },
      {
        category: "Services",
        items: [
          "Advanced caption writing",
          "Hashtag strategy",
          "Full content calendar",
          "Story management",
          "Feed aesthetics planning",
          "Engagement handling",
          "Competitor analysis",
          "Monthly analytics report",
          "Growth strategy suggestions",
          "Priority support",
        ],
      },
    ],
  },
];

export const categories = [
  { label: "UGC", plans: ugcPlans },
  { label: "Website Development", plans: websitePlans },
  { label: "Marketing & Advertising", plans: marketingPlans },
  { label: "Social Media Management", plans: socialMediaManagementPlans}
];

export const formatPrice = (price: number) => price.toLocaleString("en-IN");
