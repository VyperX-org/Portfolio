import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Film, Play, TrendingUp } from "lucide-react";
import video1  from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";  

const videos = [video1, video2, video3]

const VideoMockup = ({ index }: { index: number }) => {
  return (
    <section className="w-full">
      <div className="w-28 sm:w-36 h-48 sm:h-60 card-gradient border border-border rounded-2xl overflow-hidden">
        <video
          src={videos[index]}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
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
