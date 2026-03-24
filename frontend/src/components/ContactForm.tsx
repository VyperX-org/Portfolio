import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MessageCircle, IndianRupee, X, Check } from "lucide-react";
import { useSelectedPlans } from "@/contexts/SelectedPlansContext";
import { formatPrice } from "./pricing/pricingData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_URL;

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { selectedPlans } = useSelectedPlans();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    businessSector: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalOriginal = selectedPlans.reduce((s, p) => s + p.price, 0);
  const totalDiscounted = selectedPlans.reduce((s, p) => s + p.discountedPrice, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlans.length > 0) {
      setShowOverview(true);
    } else {
      sendConfirmation();
    }
  };

  const sendConfirmation = async () => {
    setIsSubmitting(true);

  if (selectedPlans.length === 0) {
     alert("Please select at least one plan");
     setIsSubmitting(false);
    return;
  }
    const payload = {
      ...formData,
      plans: selectedPlans.map((p) => ({
        name: p.name,
        tier: p.tier,
        tagline: p.tagline,
        price: p.price,
        discountedPrice: p.discountedPrice,
        period: p.period || null,
        bestFor: p.bestFor,
        sections: p.sections,
      })),
      totalOriginal,
      totalDiscounted,
      totalSavings: totalOriginal - totalDiscounted,
      submittedAt: new Date().toISOString(),
    };

    try {
  const res = await fetch(BACKEND_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (!res.ok) {
      console.error("Backend error:", data);
      alert(data?.error || "Something went wrong");
      return;
    }

    console.log("Success:", data);

    setShowOverview(false);
    setSubmitted(true);

  } catch (err) {
    console.error("Backend submission failed:", err);
    alert("Server not reachable");
  } finally {
    setIsSubmitting(false); 
  }


    // Also send via WhatsApp
    const planSummary = selectedPlans.length > 0
      ? `\n\nSelected Plans:\n${selectedPlans.map((p) => `• ${p.name} — ₹${formatPrice(p.discountedPrice)}${p.period ? `/${p.period}` : ""}`).join("\n")}\nTotal: ₹${formatPrice(totalDiscounted)}`
      : "";

    const text = `Hi VyperX! I'm ${formData.name} from ${formData.business} (${formData.businessSector}). I'm interested in ${formData.service}. ${formData.message}${planSummary}`;
    const whatsappUrl = `https://wa.me/7044700987?text=${encodeURIComponent(text)}`;
    window.open("_blank");

    setShowOverview(false);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="section-padding" ref={ref} id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Let's Build Your <span className="text-gradient">Growth System</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body">
              Fill in the form and our team will reach out with a custom growth plan tailored to your brand — no strings attached.
            </p>

            {selectedPlans.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 border border-primary/30 rounded-xl bg-primary/5"
              >
                <p className="text-xs text-muted-foreground font-body mb-2">Your selected plans</p>
                <div className="space-y-2">
                  {selectedPlans.map((p) => (
                    <div key={p.name} className="flex items-center justify-between">
                      <span className="text-sm font-body font-semibold">{p.name}</span>
                      <span className="text-sm text-primary font-display font-bold flex items-center">
                        <IndianRupee size={12} className="mr-0.5" />
                        {formatPrice(p.discountedPrice)}
                        {p.period && <span className="text-xs text-muted-foreground font-normal ml-1">/{p.period}</span>}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-body font-bold">Total</span>
                  <span className="text-lg text-primary font-display font-bold flex items-center">
                    <IndianRupee size={14} className="mr-0.5" />
                    {formatPrice(totalDiscounted)}
                  </span>
                </div>
              </motion.div>
            )}

            <a
              href="https://wa.me/7044700987?text=Hi%20VyperX!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 card-gradient border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-green-500" />
              </div>
              <div>
                <h4 className="font-display font-semibold">Chat on WhatsApp</h4>
                <p className="text-sm text-muted-foreground font-body">Quick questions? DM us directly.</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="card-gradient border border-primary/30 rounded-2xl p-8 text-center glow-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">We've Got Your Details!</h3>
                <p className="text-muted-foreground font-body">Our team will reach out within 24 hours. Check WhatsApp for a quick response.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-gradient border border-border rounded-2xl p-6 md:p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block font-body">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block font-body">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block font-body">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block font-body">Business Name</label>
                    <input
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="Your brand"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block font-body">Business Sector *</label>
                  <select
                    required
                    value={formData.businessSector}
                    onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors font-body"
                  >
                    <option value="">Select your sector</option>
                    <option value="E-Commerce / D2C">E-Commerce / D2C</option>
                    <option value="Fashion & Clothing">Fashion & Clothing</option>
                    <option value="Beauty & Skincare">Beauty & Skincare</option>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Education & Coaching">Education & Coaching</option>
                    <option value="Technology / SaaS">Technology / SaaS</option>
                    <option value="Agency / Freelancer">Agency / Freelancer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block font-body">Service Interested In *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors font-body"
                  >
                    <option value="">Select a service</option>
                    <option value="UGC Content">UGC Content</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Marketing & Advertising">Marketing & Advertising</option>
                    <option value="Full Growth Package">Full Growth Package</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block font-body">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none font-body"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-body"
                >
                  Get Started <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Overview Confirmation Dialog */}
      <Dialog open={showOverview} onOpenChange={setShowOverview}>
        <DialogContent className="max-w-md bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Confirm Your Package</DialogTitle>
            <DialogDescription className="font-body">
              Review your selected plans before we proceed.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 my-2">
            {selectedPlans.map((plan) => (
              <div
                key={plan.name}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-secondary/30"
              >
                <div>
                  <p className="text-sm font-semibold font-body">{plan.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{plan.tagline}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-primary font-display flex items-center">
                    <IndianRupee size={12} className="mr-0.5" />
                    {formatPrice(plan.discountedPrice)}
                  </span>
                  {plan.period && (
                    <span className="text-[10px] text-muted-foreground font-body">/{plan.period}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground font-body">Total</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary font-display flex items-center">
                  <IndianRupee size={18} className="mr-0.5" />
                  {formatPrice(totalDiscounted)}
                </span>
                <span className="text-sm text-muted-foreground line-through font-body">
                  ₹{formatPrice(totalOriginal)}
                </span>
              </div>
            </div>
            <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full font-body font-semibold">
              Save ₹{formatPrice(totalOriginal - totalDiscounted)}
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setShowOverview(false)}
              className="flex-1 py-2.5 border border-border rounded-lg text-sm font-semibold font-body hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <X size={14} /> Go Back
            </button>
            <button
              onClick={sendConfirmation}
              disabled={isSubmitting}
              className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold font-body hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Check size={14} /> {isSubmitting ? "Sending..." : "Confirm & Send"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
