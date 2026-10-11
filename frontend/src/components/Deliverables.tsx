import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const deliverables = [
  "Custom content calendar",
  "Professionally edited reels & videos",
  "UGC creator content",
  "Social media post designs",
  "Caption writing & hashtag strategy",
  "Meta ads setup & management",
  "Website design & development",
  "SEO optimization",
  "Monthly analytics reports",
  "Community management",
  "Competitor analysis",
  "Brand strategy sessions",
];

const Deliverables = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const MOBILE_PREVIEW_COUNT = 5;

  return (
    <section className="section-padding" ref={ref} id="deliverables">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What You <span className="text-gradient">Receive</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-body">
            A comprehensive suite of deliverables designed to fuel your brand's growth.
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {deliverables.map((item, i) => {
            const isHiddenOnMobile = !isExpanded && i >= MOBILE_PREVIEW_COUNT;

            return (
              <motion.div
                key={item}
                className={`items-center gap-3 p-4 border border-border rounded-xl hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-secondary via-background to-primary/5 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_hsl(166_76%_58%/0.08)] group ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-sm font-body group-hover:text-primary transition-colors">{item}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View More / View Less Toggle */}
        <div className="sm:hidden mt-6 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse deliverables list" : "Expand full deliverables list"}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold font-body transition-all duration-300 active:scale-95 shadow-[0_2px_12px_hsl(166_76%_58%/0.1)]"
          >
            <span>
              {isExpanded ? "View Less" : `View More (+${deliverables.length - MOBILE_PREVIEW_COUNT})`}
            </span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
