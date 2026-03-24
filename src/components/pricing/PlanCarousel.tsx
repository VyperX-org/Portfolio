import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Plan } from "./pricingData";
import PlanCard from "./PlanCard";
import PlanModal from "./PlanModal";

const PlanCarousel = ({ plans }: { plans: Plan[] }) => {
  const [current, setCurrent] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <>
      <div className="relative">
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onViewDetails={() => setSelectedPlan(plan)} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {plans.map((plan) => (
                <div key={plan.name} className="w-full shrink-0 px-2">
                  <PlanCard plan={plan} onViewDetails={() => setSelectedPlan(plan)} />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:bg-secondary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {plans.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <button
              onClick={() => setCurrent(Math.min(plans.length - 1, current + 1))}
              disabled={current === plans.length - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:bg-secondary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPlan && <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      </AnimatePresence>
    </>
  );
};

export default PlanCarousel;
