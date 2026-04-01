export interface PlanDetail {
  category: string;
  items: string[];
}

export interface Addon {
  name: string;
  price: number;
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
  addons?: Addon[];
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
        category: "Services",
        items: [
          "Basic content idea support",
          "Basic scripting",
          "Basic editing",
          "Hooks for videos",
          "1 revision per video",
        ],
      },
    ],
    addons: [
      { name: "Extra UGC video", price: 1000 },
      { name: "Extra creator", price: 3000 },
      { name: "Script writing (per video)", price: 500 },
      { name: "Priority delivery", price: 2000 },
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
    addons: [
      { name: "Extra UGC video", price: 900 },
      { name: "Ad usage rights extension", price: 5000 },
      { name: "Additional creator", price: 4000 },
      { name: "Hook testing variants", price: 3000 },
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
    addons: [
      { name: "Extra video (bulk)", price: 800 },
      { name: "Dedicated creator team", price: 10000 },
      { name: "Advanced ad creatives package", price: 15000 },
      { name: "Monthly strategy consulting", price: 10000 },
    ],
  },
];

export const websitePlans: Plan[] = [
  {
    name: "Launch Store",
    tagline: "Launch your brand with a strong digital foundation.",
    price: 35000,
    discountedPrice: 25000,
    tier: "starter",
    bestFor: ["New businesses entering online"],
    sections: [
      {
        category: "Core Features",
        items: [
          "Shopify setup (premium theme)",
          "Up to 15 products upload",
          "Payment & shipping integration",
          "Mobile responsive design",
          "Domain connection & setup",
          "Basic homepage banner design",
          "Navigation menu setup",
          "Contact form setup",
          "Social media integration",
          "Basic checkout configuration"
        ],
      },
      {
        category: "Limitations",
        items: [
          "No custom UI/UX",
          "No advanced CRO setup",
          "No automation or CRM integration"
        ],
      },
    ],
    addons: [
      { name: "Extra product upload (per 10 products)", price: 2000 },
      { name: "Additional landing page", price: 5000 },
      { name: "Basic email capture popup", price: 3000 },
      { name: "Speed optimization", price: 5000 }
    ]
  },

  {
    name: "Growth Store",
    tagline: "Built to convert visitors into paying customers.",
    price: 100000,
    discountedPrice: 80000,
    tier: "growth",
    featured: true,
    bestFor: ["Brands running ads & scaling online"],
    sections: [
      {
        category: "Core Features",
        items: [
          "Custom UI/UX design",
          "Conversion-focused pages",
          "Landing page for ads",
          "Pixel & tracking setup (Meta, Google)",
          "CRO elements (CTA, urgency, trust badges)",
          "Advanced homepage sections (USP, testimonials)",
          "Upsell & cross-sell setup",
          "Email capture popups",
          "Basic email automation (welcome flow)",
          "Speed optimization",
          "Basic analytics setup"
        ],
      },
      {
        category: "Growth Benefits",
        items: [
          "Improved conversion rate",
          "Better user experience",
          "Optimized for paid ads",
          "Increased customer trust"
        ],
      },
    ],
    addons: [
      { name: "Advanced email flows (abandoned cart, retention)", price: 15000 },
      { name: "Additional landing page", price: 7000 },
      { name: "Ad creative design (per set)", price: 10000 },
      { name: "Advanced CRO audit & optimization", price: 20000 },
      { name: "CRM integration", price: 25000 }
    ]
  },

  {
    name: "Scale Store Engine",
    tagline: "A complete eCommerce system designed for revenue growth.",
    price: 250000,
    discountedPrice: 200000,
    tier: "scale",
    bestFor: ["Established brands building full systems"],
    sections: [
      {
        category: "Core Features",
        items: [
          "Fully custom design & development",
          "Sales funnel setup (multi-step)",
          "Advanced CRO + analytics tracking",
          "CRM integration & automation",
          "Automated email flows (abandoned cart, retargeting)",
          "Subscription / bundle setup",
          "Advanced checkout optimization",
          "Multi-currency & international setup",
          "Advanced analytics dashboard",
          "Performance & speed optimization"
        ],
      },
      {
        category: "Growth Engine",
        items: [
          "End-to-end revenue system",
          "Automation-driven sales",
          "Scalable infrastructure",
          "Data-driven decision making"
        ],
      },
    ],
    addons: [
      { name: "Custom app integration", price: 40000 },
      { name: "Advanced automation workflows", price: 30000 },
      { name: "Dedicated monthly support (retainer)", price: 25000 },
      { name: "International expansion strategy", price: 50000 },
      { name: "Funnel optimization & scaling consulting", price: 40000 }
    ]
  }
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
    addons: [
      { name: "Extra campaign", price: 5000 },
      { name: "Creative design pack", price: 10000 },
      { name: "Landing page", price: 8000 },
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
    addons: [
      { name: "Extra platform", price: 15000 },
      { name: "Advanced funnel setup", price: 25000 },
      { name: "Creative production", price: 20000 },
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
    addons: [
      { name: "Dedicated creative team", price: 30000 },
      { name: "Advanced analytics dashboard", price: 25000 },
      { name: "Scaling consulting", price: 40000 },
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
     addons: [
      { name: "Extra reel", price: 800 },
      { name: "Content shooting (per day)", price: 5000 },
      { name: "Engagement handling", price: 5000 },
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
      addons: [
      { name: "Influencer collaboration", price: 10000 },
      { name: "Advanced engagement", price: 7000 },
      { name: "Trend research", price: 5000 },
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
     addons: [
      { name: "Dedicated manager", price: 15000 },
      { name: "Advanced analytics", price: 10000 },
      { name: "Content strategy consulting", price: 15000 },
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
