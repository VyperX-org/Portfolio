import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref} id="contact">
      <div className="max-w-3xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let's Build Your <span className="text-gradient">Growth System</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 font-body">
            Have questions or ready to grow? Chat with us directly on WhatsApp or explore our pricing plans.
          </p>

          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/7044700987?text=Hi%20VyperX!%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 card-gradient border border-border rounded-xl hover:border-primary/30 transition-colors mb-6"
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <MessageCircle size={20} className="text-green-500" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-semibold">Chat on WhatsApp</h4>
              <p className="text-sm text-muted-foreground font-body">
                Quick questions? DM us directly.
              </p>
            </div>
          </a>

          {/* Pricing Redirect Button */}
          <a
            href="pricing"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity font-body"
          >
            View Pricing Plans
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;