import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref} id="deliverables">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What You <span className="text-gradient">Receive</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            A comprehensive suite of deliverables designed to fuel your brand's growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-secondary via-background to-primary/5 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_hsl(166_76%_58%/0.08)] group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Check size={14} className="text-primary" />
              </div>
              <span className="text-sm font-body group-hover:text-primary transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
