import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Smartphone, Zap, Search, ShieldCheck } from "lucide-react";
import AnimatedBrowser from "./website/AnimatedBrowser";

const features = [
  { icon: Globe, title: "Custom Design", desc: "Unique, conversion-focused designs tailored to your brand." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Every site looks flawless on every device — phone, tablet, desktop." },
  { icon: Zap, title: "Lightning Fast", desc: "Speed-optimized builds that load in under 2 seconds." },
  { icon: Search, title: "SEO Ready", desc: "Built-in SEO foundations so your site ranks from day one." },
  { icon: ShieldCheck, title: "Ongoing Support", desc: "Maintenance, updates, and support so your site stays fresh." },
];

const WebsiteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Websites That <span className="text-gradient">Convert</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              We design and build high-performance websites that turn visitors into customers. From landing pages to full e-commerce stores.
            </p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">{f.title}</h4>
                    <p className="text-muted-foreground text-sm font-body">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedBrowser />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
