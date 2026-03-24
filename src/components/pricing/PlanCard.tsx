import { Plan, formatPrice } from "./pricingData";
import { Check, IndianRupee, Star, Rocket } from "lucide-react";

const tierIcon = {
  starter: null,
  growth: <Star size={14} className="text-primary fill-primary" />,
  scale: <Rocket size={14} className="text-primary" />,
};

const PlanCard = ({ plan, onViewDetails }: { plan: Plan; onViewDetails: () => void }) => (
  <div
    className={`relative border rounded-2xl p-6 flex flex-col h-full transition-all duration-300 min-w-[280px] max-w-[350px] mx-auto w-full overflow-hidden group hover:-translate-y-2 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.15)] ${
      plan.featured
        ? "border-primary/50 bg-gradient-to-br from-primary/10 via-background to-primary/5"
        : "border-border bg-gradient-to-br from-secondary via-background to-primary/5 hover:border-primary/30"
    }`}
  >
    {plan.featured && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-b-lg font-body">
        Most Popular
      </div>
    )}
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

    <div className="flex items-center gap-2 mb-2">
      {tierIcon[plan.tier]}
      <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{plan.name}</h3>
    </div>
    <p className="text-muted-foreground text-sm mb-4 font-body">{plan.tagline}</p>

    <div className="mb-6">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-display font-bold text-primary flex items-center">
          <IndianRupee size={18} className="mr-0.5" />
          {formatPrice(plan.discountedPrice)}
        </span>
        {plan.period && <span className="text-xs text-muted-foreground font-body">/{plan.period}</span>}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm text-muted-foreground line-through font-body">₹{formatPrice(plan.price)}</span>
        <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full font-body font-semibold">
          {Math.round(((plan.price - plan.discountedPrice) / plan.price) * 100)}% OFF
        </span>
      </div>
    </div>

    <div className="space-y-2 mb-6 flex-1">
      {plan.sections[0]?.items.slice(0, 5).map((item) => (
        <div key={item} className="flex items-start gap-2">
          <Check size={14} className="text-primary mt-0.5 shrink-0" />
          <span className="text-sm font-body">{item}</span>
        </div>
      ))}
      {(plan.sections[0]?.items.length || 0) > 5 && (
        <p className="text-xs text-muted-foreground font-body">
          +{(plan.sections[0]?.items.length || 0) - 5 + plan.sections.slice(1).reduce((a, s) => a + s.items.length, 0)} more features...
        </p>
      )}
    </div>

    <div className="flex flex-wrap gap-1.5 mb-4">
      {plan.bestFor.slice(0, 3).map((b) => (
        <span key={b} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-body">{b}</span>
      ))}
    </div>

    <button
      onClick={onViewDetails}
      className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300 font-body ${
        plan.featured
          ? "bg-primary text-primary-foreground hover:opacity-90"
          : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      }`}
    >
      View Details
    </button>
  </div>
);

export default PlanCard;
