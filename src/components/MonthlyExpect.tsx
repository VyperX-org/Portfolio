import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, FileText, Video, BarChart, MessageSquare, Rocket } from "lucide-react";

const steps = [
  { icon: Rocket, title: "Week 1: Onboarding & Strategy", desc: "We deep-dive into your brand, competitors, and audience to craft a custom growth roadmap." },
  { icon: CalendarCheck, title: "Week 1–2: Content Calendar", desc: "A full month's content calendar with post ideas, reel scripts, and ad creatives — approved by you." },
  { icon: Video, title: "Week 2–3: Content Production", desc: "UGC shoots, graphic design, video editing — all content produced and ready for publishing." },
  { icon: FileText, title: "Week 3–4: Publishing & Ads", desc: "Content goes live across platforms. Ad campaigns launched and optimized in real-time." },
  { icon: MessageSquare, title: "Ongoing: Engagement", desc: "Community management, comment replies, DM handling — keeping your audience engaged daily." },
  { icon: BarChart, title: "Month End: Performance Report", desc: "Detailed analytics report with insights, wins, learnings, and the strategy for next month." },
];

const MonthlyExpect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref} id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What To Expect <span className="text-gradient">Every Month</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            A clear, repeatable system that delivers results month after month.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className={`border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-secondary via-background to-primary/5 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(166_76%_58%/0.1)] group ${i % 2 === 1 ? "md:ml-auto" : ""} max-w-md`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <step.icon size={18} className="text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-sm md:text-base group-hover:text-primary transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shrink-0 mt-6" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyExpect;
