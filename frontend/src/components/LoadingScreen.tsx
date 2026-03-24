import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center loader-bg overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, hsl(166 76% 58% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, hsl(166 76% 40% / 0.06) 0%, transparent 50%)",
            }}
            animate={{
              background: [
                "radial-gradient(ellipse at 30% 50%, hsl(166 76% 58% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, hsl(166 76% 40% / 0.06) 0%, transparent 50%)",
                "radial-gradient(ellipse at 70% 30%, hsl(166 76% 58% / 0.12) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, hsl(166 76% 40% / 0.08) 0%, transparent 50%)",
                "radial-gradient(ellipse at 50% 70%, hsl(166 76% 58% / 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 30%, hsl(166 76% 40% / 0.07) 0%, transparent 50%)",
                "radial-gradient(ellipse at 30% 50%, hsl(166 76% 58% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, hsl(166 76% 40% / 0.06) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src={logo}
            alt="VyperX"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain mb-8 border-2 border-primary/30 shadow-[0_0_40px_hsl(166_76%_58%/0.25)] bg-background relative z-10"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="h-0.5 bg-primary rounded-full relative z-10"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.p
            className="mt-6 text-muted-foreground text-sm tracking-widest uppercase font-body relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building Growth Systems
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
