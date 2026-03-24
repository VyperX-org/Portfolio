import { useState } from "react";
import { motion } from "framer-motion";
import { Check, IndianRupee, ArrowRight } from "lucide-react";
import { categories, formatPrice, Plan } from "./pricingData";
import { useSelectedPlans } from "@/contexts/SelectedPlansContext";

type Selections = Record<string, string | null>;

const tierLabels = {
  starter: { label: "Starter", color: "bg-emerald-500/20 text-emerald-400" },
  growth: { label: "Growth", color: "bg-blue-500/20 text-blue-400" },
  scale: { label: "Scale", color: "bg-red-500/20 text-red-400" },
};

const CustomPlanBuilder = () => {
  const [selections, setSelections] = useState<Selections>({});
  const { setSelectedPlans } = useSelectedPlans();

  const toggle = (category: string, planName: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: prev[category] === planName ? null : planName,
    }));
  };

  const currentSelectedPlans: Plan[] = categories
    .map((cat) => {
      const selected = selections[cat.label];
      return selected ? cat.plans.find((p) => p.name === selected) : undefined;
    })
    .filter(Boolean) as Plan[];

  const totalOriginal = currentSelectedPlans.reduce((s, p) => s + p.price, 0);
  const totalDiscounted = currentSelectedPlans.reduce((s, p) => s + p.discountedPrice, 0);

  const handleGetStarted = () => {
    setSelectedPlans(currentSelectedPlans);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">
          Build Your <span className="text-gradient">Custom Package</span>
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto font-body">
          Select one plan from each category to create a package tailored to your brand's needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {categories.map((cat) => (
          <div key={cat.label} className="border border-border rounded-2xl p-5 bg-secondary/30">
            <h4 className="text-lg font-display font-bold mb-4">{cat.label}</h4>
            <div className="space-y-3">
              {cat.plans.map((plan) => {
                const isSelected = selections[cat.label] === plan.name;
                const tier = tierLabels[plan.tier];
                return (
                  <button
                    key={plan.name}
                    onClick={() => toggle(cat.label, plan.name)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
                        : "border-border hover:border-primary/30 hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${tier.color}`}>
                          {tier.label}
                        </span>
                        <span className="text-sm font-semibold font-body">{plan.name}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? "border-primary bg-primary" : "border-border"
                      }`}>
                        {isSelected && <Check size={12} className="text-primary-foreground" />}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-primary flex items-center font-display">
                        <IndianRupee size={14} className="mr-0.5" />
                        {formatPrice(plan.discountedPrice)}
                      </span>
                      {plan.period && <span className="text-xs text-muted-foreground font-body">/{plan.period}</span>}
                      <span className="text-xs text-muted-foreground line-through font-body">₹{formatPrice(plan.price)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {currentSelectedPlans.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-primary/30 rounded-2xl p-6 bg-gradient-to-r from-primary/5 via-background to-primary/5"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground font-body mb-1">Your Custom Package</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {currentSelectedPlans.map((p) => (
                  <span key={p.name} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-body font-semibold">
                    {p.name}
                  </span>
                ))}
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-display font-bold text-primary flex items-center">
                  <IndianRupee size={22} className="mr-0.5" />
                  {formatPrice(totalDiscounted)}
                </span>
                <span className="text-lg text-muted-foreground line-through font-body">₹{formatPrice(totalOriginal)}</span>
                <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full font-body font-semibold">
                  Save ₹{formatPrice(totalOriginal - totalDiscounted)}
                </span>
              </div>
            </div>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity font-body whitespace-nowrap"
            >
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CustomPlanBuilder;
