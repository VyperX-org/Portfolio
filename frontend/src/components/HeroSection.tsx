import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import logo from "@/assets/trans-logo.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] max-w-96 h-[80vw] max-h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[70vw] max-w-72 h-[70vw] max-h-72 rounded-full bg-primary/8 blur-[80px]" />   
      </div>

      {/* Mobile-only autoplay animated logo with gradient glow behind hero content */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <motion.div
          className="relative flex items-center justify-center w-72 h-72"
          animate={{
            scale: [0.94, 1.05, 0.94],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Radial gradient aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-emerald-500/20 to-teal-300/10 blur-[60px] animate-pulse" />

          {/* Autoplay rotating gradient backdrop ring */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border border-primary/20 bg-gradient-to-br from-primary/15 via-transparent to-primary/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating animated logo with gradient shadow & mix-blend */}
          <motion.img
            src={logo}
            alt=""
            className="relative w-44 h-auto object-contain mix-blend-lighten filter drop-shadow-[0_0_25px_hsl(166_76%_58%/0.5)]"
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
 
      <div className="relative z-10 max-w-5xl mx-auto text-center px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8"
        >
          <Zap size={14} className="text-primary" />
          <span className="text-sm text-muted-foreground font-body">Digital Marketing Agency</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          We Don't Run Ads.
          <br />
          <span className="text-gradient">We Build Growth Systems.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          VyperX is a full-service growth agency that builds scalable content, websites, and ad systems — so you can focus on your business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 animate-pulse-glow"
          >
            Start Scaling <ArrowRight size={18} />
          </a>
          <a
            href="/pricing"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg text-lg hover:bg-secondary transition-colors flex items-center justify-center"
          >
            Know More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
