import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Lightbulb, Users, BarChart3, Shield } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategy-First Approach",
    desc: "We don't just execute — we plan every campaign with your business goals as the north star.",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems, Not Hacks",
    desc: "We build sustainable systems that compound over time, not one-off tactics that fizzle out.",
  },
  {
    icon: Lightbulb,
    title: "Creative That Converts",
    desc: "Every piece of content is designed to stop the scroll and drive action from your ideal customer.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "You get a full creative squad — strategists, designers, editors, and creators — working on your brand.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Monthly reports, analytics dashboards, and insights that shape every next move.",
  },
  {
    icon: Shield,
    title: "End-to-End Service",
    desc: "From UGC to websites to ads — everything under one roof for seamless brand building.",
  },
];

const WhyVyperX = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Why <span className="text-gradient">VyperX</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            We're not your average agency. Here's what sets us apart in service and content management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group bg-gradient-to-br from-secondary via-background to-primary/5 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(166_76%_58%/0.1)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <r.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVyperX;
