import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, Film, Play, TrendingUp } from "lucide-react";

const videoScenes = [
  [
    { emoji: "🎬", label: "Unboxing", color: "hsl(166 76% 58% / 0.15)" },
    { emoji: "📦", label: "Product Reveal", color: "hsl(220 76% 58% / 0.15)" },
    { emoji: "✨", label: "First Look", color: "hsl(280 76% 58% / 0.15)" },
  ],
  [
    { emoji: "💄", label: "Get Ready", color: "hsl(340 76% 58% / 0.15)" },
    { emoji: "🎥", label: "Review", color: "hsl(166 76% 58% / 0.15)" },
    { emoji: "🔥", label: "Day in Life", color: "hsl(30 76% 58% / 0.15)" },
  ],
  [
    { emoji: "🛍️", label: "Haul", color: "hsl(200 76% 58% / 0.15)" },
    { emoji: "💬", label: "Testimonial", color: "hsl(166 76% 58% / 0.15)" },
    { emoji: "📱", label: "Tutorial", color: "hsl(120 76% 58% / 0.15)" },
  ],
];

const VideoMockup = ({ index }: { index: number }) => {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScene((s) => (s + 1) % videoScenes.length);
    }, 2500 + index * 800);
    return () => clearInterval(interval);
  }, [index]);

  const current = videoScenes[scene][index];

  return (
    <section className="w-full">
    <motion.div
      className="w-28 sm:w-36 h-48 sm:h-60 card-gradient border border-border rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: current.color }}
        key={`${scene}-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Playing indicator */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5">
        <motion.div
          className="w-2 h-2 rounded-full bg-destructive"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <span className="text-[9px] text-muted-foreground font-body uppercase tracking-wider">Live</span>
      </div>

      {/* Content */}
      <motion.div
        key={`content-${scene}-${index}`}
        className="relative z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl">{current.emoji}</span>
        <span className="text-xs font-body text-foreground/80">{current.label}</span>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-3 left-3 right-3">
        <motion.div
          className="h-1 bg-primary/40 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5 + index * 0.8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        <div className="flex justify-between mt-1.5">
          <div className="h-1.5 bg-muted rounded w-12" />
          <div className="h-1.5 bg-muted rounded w-8" />
        </div>
      </div>

      {/* Play overlay on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30 backdrop-blur-sm z-20">
        <Play size={24} className="text-primary" fill="hsl(166 76% 58%)" />
      </div>
    </motion.div>
    </section>
  );
};

const UGCSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding w-full" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video mockups */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4 justify-center flex-wrap">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <VideoMockup index={i} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              UGC Videos That <span className="text-gradient">Sell</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              Authentic, scroll-stopping content from real creators that drives engagement, builds trust, and converts viewers into buyers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Sparkles, label: "Hook-Focused Scripts" },
                { icon: Film, label: "Professional Editing" },
                { icon: Play, label: "Ad-Ready Formats" },
                { icon: TrendingUp, label: "Conversion Optimized" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <item.icon size={16} className="text-primary shrink-0" />
                  <span className="text-sm font-body">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
