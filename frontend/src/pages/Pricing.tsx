import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Target, Users, BarChart3, Shield, Lightbulb } from "lucide-react";
import { categories } from "@/components/pricing/pricingData";
import PlanCarousel from "@/components/pricing/PlanCarousel";
import CustomPlanBuilder from "@/components/pricing/CustomPlanBuilder";
import ContactForm from "@/components/ContactForm";
import { SelectedPlansProvider } from "@/contexts/SelectedPlansContext";
import logo from "@/assets/trans-logo.webp";
import Footer from "@/components/Footer";

const marketGaps = [
  {
    icon: Target,
    title: "Fragmented Services",
    problem: "Most brands juggle 3–5 freelancers for content, ads, and web — losing time, money, and consistency.",
    solution: "VyperX unifies UGC, web development, and ad management under one roof with a dedicated team.",
  },
  {
    icon: BarChart3,
    title: "Vanity Metrics",
    problem: "Agencies sell likes and impressions. Brands need revenue, ROAS, and actual customer acquisition.",
    solution: "Every plan is built around conversion metrics, revenue tracking, and performance-driven iteration.",
  },
  {
    icon: Users,
    title: "Cookie-Cutter Content",
    problem: "Generic templates and recycled strategies don't cut through the noise in 2025.",
    solution: "Custom scripting, creator matching, and A/B hook testing ensure every asset is built to convert.",
  },
  {
    icon: Shield,
    title: "No Accountability",
    problem: "Most agencies disappear after onboarding. No reports, no optimization, no ownership.",
    solution: "Weekly performance reviews, dedicated managers, and transparent reporting at every tier.",
  },
  {
    icon: TrendingUp,
    title: "Scaling Bottleneck",
    problem: "Brands outgrow their agencies. What works at ₹50K/month breaks at ₹5L/month.",
    solution: "Our tiered system scales with you — from first content to full-scale revenue engines.",
  },
  {
    icon: Lightbulb,
    title: "No Creative Strategy",
    problem: "Shooting content without a plan leads to wasted budget and creative fatigue.",
    solution: "Every tier includes strategic planning, trend adaptation, and performance-based creative iteration.",
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gapRef = useRef(null);
  const gapInView = useInView(gapRef, { once: true, margin: "-100px" });

  return (
    <>
    <SelectedPlansProvider>
      <div className="min-h-screen bg-background">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-40 glass">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="VyperX" className="h-8 md:h-10 object-cover mix-blend-lighten" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 md:px-8 text-center relative overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px]" />
          </div>
          <motion.div
            className="relative z-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Plans & <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto">
              We don't just provide services — we build a complete customer acquisition and revenue system for your business.
            </p>
          </motion.div>
        </section>

        {/* Market Gaps */}
        <section className="section-padding pt-8" ref={gapRef}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={gapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
                The Market Gaps <span className="text-gradient">We Fill</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-body">
                Most agencies sell you a service. We solve the problems they create.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketGaps.map((gap, i) => (
                <motion.div
                  key={gap.title}
                  className="border border-border rounded-2xl p-6 bg-gradient-to-br from-secondary via-background to-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={gapInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <gap.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">{gap.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-3">{gap.problem}</p>
                  <p className="text-sm font-body text-primary/80 border-t border-border pt-3">
                    <span className="font-semibold">VyperX:</span> {gap.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="section-padding" id="plans">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Choose Your <span className="text-gradient">Growth Plan</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
                Every plan is designed to deliver measurable results — not just deliverables.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 font-body ${activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <PlanCarousel plans={categories[activeTab].plans} />
              </motion.div>
            </AnimatePresence>

            <CustomPlanBuilder />
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm hideServiceField={true} />

        {/* Footer */}
        <footer className="border-t border-border py-8 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} VyperX. All rights reserved.
          </p>
        </footer>
      </div>
    </SelectedPlansProvider>
        <Footer></Footer>
    </>
  );
};

export default Pricing;
