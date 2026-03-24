import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MousePointer, ShoppingCart, BarChart3, Smartphone } from "lucide-react";

const StepLoading = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
    <motion.div
      className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <span className="text-xs text-muted-foreground font-body">Loading your site...</span>
  </div>
);

const StepHero = () => (
  <div className="absolute inset-0 p-4">
    <motion.div
      className="h-5 bg-primary/30 rounded mb-3"
      initial={{ width: 0 }}
      animate={{ width: "66%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
    <div className="h-3 bg-muted rounded w-full mb-2" />
    <div className="h-3 bg-muted rounded w-4/5 mb-4" />
    <div className="flex gap-2">
      <motion.div
        className="h-8 bg-primary/20 rounded-md px-4 flex items-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <span className="text-[10px] text-primary font-body">Get Started</span>
      </motion.div>
      <div className="h-8 bg-muted rounded-md px-4 flex items-center">
        <span className="text-[10px] text-muted-foreground font-body">Learn More</span>
      </div>
    </div>
    <motion.div
      className="absolute bottom-16 right-6"
      animate={{ x: [20, 0], opacity: [0, 1] }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <MousePointer size={16} className="text-primary" />
    </motion.div>
  </div>
);

const StepProducts = () => (
  <div className="absolute inset-0 p-4">
    <div className="flex gap-4 mb-4">
      <div className="h-3 bg-muted rounded w-12" />
      <div className="h-3 bg-primary/30 rounded w-14" />
      <div className="h-3 bg-muted rounded w-10" />
      <div className="h-3 bg-muted rounded w-12" />
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="bg-muted rounded-lg p-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
        >
          <div className="h-16 bg-primary/5 rounded mb-2 flex items-center justify-center">
            <ShoppingCart size={14} className="text-primary/40" />
          </div>
          <div className="h-2 bg-border rounded w-3/4 mb-1" />
          <div className="h-2 bg-primary/20 rounded w-1/2" />
        </motion.div>
      ))}
    </div>
    <motion.div
      className="mt-3 h-8 bg-primary/20 rounded-md flex items-center justify-center"
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ delay: 0.8, repeat: 1, duration: 0.4 }}
    >
      <span className="text-[10px] text-primary font-body">Add to Cart</span>
    </motion.div>
  </div>
);

const StepAnalytics = () => (
  <div className="absolute inset-0 p-4">
    <div className="flex items-center gap-2 mb-3">
      <BarChart3 size={14} className="text-primary" />
      <span className="text-[10px] text-foreground font-body font-semibold">Analytics Dashboard</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-3">
      {[
        { label: "Visitors", val: "12.4K" },
        { label: "Conversions", val: "3.2%" },
        { label: "Revenue", val: "₹4.8L" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          className="bg-muted rounded-lg p-2 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
        >
          <div className="text-xs font-bold text-primary font-display">{stat.val}</div>
          <div className="text-[9px] text-muted-foreground font-body">{stat.label}</div>
        </motion.div>
      ))}
    </div>
    <div className="flex items-end gap-1 h-20">
      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-primary/30 rounded-t"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
        />
      ))}
    </div>
  </div>
);

const StepMobile = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <motion.div
      className="w-28 bg-muted rounded-xl border border-border p-2 relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-8 h-1 bg-border rounded-full mx-auto mb-2" />
      <div className="space-y-1.5">
        <div className="h-10 bg-primary/10 rounded" />
        <div className="h-2 bg-border rounded w-3/4" />
        <div className="h-2 bg-border rounded w-1/2" />
        <div className="h-6 bg-primary/20 rounded flex items-center justify-center">
          <span className="text-[8px] text-primary font-body">Shop Now</span>
        </div>
        <div className="h-8 bg-border/50 rounded" />
      </div>
    </motion.div>
    <div className="ml-4 text-left">
      <Smartphone size={16} className="text-primary mb-1" />
      <span className="text-[10px] text-muted-foreground font-body block">Perfectly responsive</span>
      <span className="text-[10px] text-muted-foreground font-body block">on every device</span>
    </div>
  </div>
);

const steps = [StepLoading, StepHero, StepProducts, StepAnalytics, StepMobile];

const AnimatedBrowser = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentStep = steps[step];

  return (
    <div className="card-gradient border border-border rounded-2xl p-4 md:p-6 glow-border overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="flex-1 mx-4 h-6 bg-secondary rounded-md flex items-center px-3">
          <span className="text-[10px] text-muted-foreground font-body">https://yourbrand.com</span>
        </div>
      </div>

      <div className="relative h-64 md:h-72 bg-secondary/30 rounded-lg overflow-hidden border border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <CurrentStep />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === step ? "bg-primary w-4" : "bg-border w-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBrowser;
