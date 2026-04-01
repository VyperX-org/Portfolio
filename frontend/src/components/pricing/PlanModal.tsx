import { motion } from "framer-motion";
import { Plan, formatPrice } from "./pricingData";
import { Check, X, IndianRupee } from "lucide-react";
import { useSelectedPlans } from "@/contexts/SelectedPlansContext";

const PlanModal = ({ plan, onClose }: { plan: Plan; onClose: () => void }) => 
  {
    const { setSelectedPlans } = useSelectedPlans();

    const handleGetStarted = () => {
      setSelectedPlans([plan]); // only this plan
      onClose(); // close modal
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };
    return(
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
    <motion.div
      className="relative bg-gradient-to-br from-[hsl(220_18%_12%)] via-[hsl(220_18%_8%)] to-[hsl(166_76%_58%/0.08)] border border-border rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto glow-border"
      initial={{ scale: 0.9, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.95, y: 10, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
        <X size={20} />
      </button>

      <h3 className="text-2xl font-display font-bold mb-1">{plan.name}</h3>
      <p className="text-muted-foreground mb-4 font-body">{plan.tagline}</p>

      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-display font-bold text-primary flex items-center">
            <IndianRupee size={22} className="mr-0.5" />
            {formatPrice(plan.discountedPrice)}
          </span>
          {plan.period && <span className="text-sm text-muted-foreground font-body">/{plan.period}</span>}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg text-muted-foreground line-through font-body">₹{formatPrice(plan.price)}</span>
          <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full font-body font-semibold">
            {Math.round(((plan.price - plan.discountedPrice) / plan.price) * 100)}% OFF
          </span>
          <span className="text-xs text-muted-foreground font-body">Save ₹{formatPrice(plan.price - plan.discountedPrice)}</span>
        </div>
      </div>

      {plan.sections.map((section) => (
        <div key={section.category} className="mb-5">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 font-body">{section.category}</h4>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 font-body">Best For</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {plan.bestFor.map((b) => (
          <span key={b} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-body">{b}</span>
        ))}
      </div>

      <button
       onClick={handleGetStarted}
        className="w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:opacity-90 transition-opacity font-body"
      >
        Get Started — ₹{formatPrice(plan.discountedPrice)}
        {plan.period ? `/${plan.period}` : ""}
      </button>
    </motion.div>
  </motion.div>
  )};

export default PlanModal;
