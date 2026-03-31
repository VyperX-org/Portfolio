import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronRight, X, ArrowLeft, Users, Rocket, Heart, Zap } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Vacancy {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  formLink: string;
}

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Kolkata / Remote",
    type: "Full-time",
    description: "Manage and grow social media presence for multiple client brands. Create content calendars, engage with audiences, and drive measurable growth.",
    requirements: [
      "2+ years social media experience",
      "Proficiency in Meta Business Suite",
      "Strong copywriting skills",
      "Analytics & reporting experience"
    ],
    formLink: "https://forms.gle/Yb72ArKniXCMJdSL9"
  },
  {
    id: 2,
    title: "Professional Video Editor",
    department: "Content",
    location: "Kolkata / Remote",
    type: "Full-time",
    description: "Edit high-quality UGC and brand videos for social media ads and organic content. Work with creators and the content team to produce scroll-stopping visuals.",
    requirements: [
      "Proficiency in Premiere Pro / After Effects",
      "Understanding of social media trends",
      "Portfolio of edited short-form content",
      "Quick turnaround ability"
    ],
    formLink: "https://forms.gle/7zUe2Ju1L7wWSpkf8"
  },
  {
  id: 3,
  title: "Growth & Sales Development Associate",
  department: "Sales & Growth",
  location: "Kolkata / Remote",
  type: "Full-time",
  description: "Drive business growth by generating and qualifying leads, executing outbound outreach, and building a strong sales pipeline. Work closely with the marketing and strategy team to convert prospects into clients and contribute to revenue growth.",
  requirements: [
    "Strong communication and persuasion skills",
    "Experience in cold outreach (calls/emails/LinkedIn)",
    "Basic understanding of sales funnels and CRM tools",
    "Ability to research and identify potential leads",
    "Target-driven mindset with ownership attitude"
  ],
  formLink: "https://forms.gle/5knob9dPp9rF3vXq9"
  },
  {
    id: 4,
    title: "Graphic Designer",
    department: "Design",
    location: "Kolkata / Remote",
    type: "Full-time / Freelance",
    description: "Create stunning visual content for social media posts, ads, brand identities, and marketing materials.",
    requirements: [
      "Proficiency in Figma & Adobe Suite", "Strong typography & color sense",
      "Portfolio showcasing social media designs", "Brand identity experience"
    ],
    formLink: "https://forms.gle/8wHcPmpvdoEHQX8SA"
  },
];

const values = [
  { icon: Rocket, title: "Move Fast", desc: "We ship quickly, iterate constantly, and never settle for mediocre." },
  { icon: Heart, title: "Client Obsessed", desc: "Every decision starts with what's best for our clients' growth." },
  { icon: Users, title: "Team First", desc: "We win together. Collaboration and respect drive everything we do." },
  { icon: Zap, title: "Creative Edge", desc: "We push creative boundaries to deliver scroll-stopping work." },
];

const Careers = () => {
  const [selected, setSelected] = useState<Vacancy | null>(null);
  const [applyingTo, setApplyingTo] = useState<Vacancy | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="VyperX" className="h-8 md:h-10 rounded-full object-cover mix-blend-lighten" />
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
      <section className="pt-32 pb-16 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px]" />
        </div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Join the <span className="text-gradient">VyperX Team</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto">
            We're building the future of brand growth. If you're passionate, creative, and driven — we want you on our team.
          </p>
        </motion.div>
      </section>

      {/* About VyperX */}
      <section className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="card-gradient border border-border rounded-2xl p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              VyperX is a full-service growth agency based in Kolkata, India. We don't just run ads — we build complete growth systems that scale brands. From UGC content creation and professional video editing to high-converting websites and full-scale marketing campaigns, we handle everything under one roof.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Our team is a mix of strategists, designers, developers, and creators who are obsessed with delivering results. We work with D2C brands, startups, and businesses across India to build sustainable, data-driven growth — not quick hacks.
            </p>
          </motion.div>

          {/* Values */}
          <motion.h2
            className="text-2xl md:text-3xl font-display font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="border border-border rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-secondary via-background to-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-display font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Open <span className="text-gradient">Positions</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {vacancies.map((vacancy, i) => (
              <motion.div
                key={vacancy.id}
                className="group card-gradient border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(166_76%_58%/0.1)] bg-gradient-to-br from-secondary via-background to-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                onClick={() => setSelected(vacancy)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-display font-bold mb-1 group-hover:text-primary transition-colors">{vacancy.title}</h3>
                    <p className="text-sm text-primary font-body font-medium">{vacancy.department}</p>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <MapPin size={12} /> {vacancy.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <Clock size={12} /> {vacancy.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-body mt-3 line-clamp-2">{vacancy.description}</p>
              </motion.div>
            ))}
          </div>

          {vacancies.length === 0 && (
            <div className="text-center py-16">
              <Briefcase size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-body">No open positions right now. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} VyperX. All rights reserved.
        </p>
      </footer>

      {/* Vacancy Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              className="relative bg-gradient-to-br from-[hsl(220_18%_12%)] via-[hsl(220_18%_8%)] to-[hsl(166_76%_58%/0.08)] border border-border rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto glow-border"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>

              <div className="mb-4">
                <h3 className="text-2xl font-display font-bold">{selected.title}</h3>
                <p className="text-primary font-body font-medium">{selected.department}</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body px-3 py-1 bg-secondary rounded-full">
                  <MapPin size={14} /> {selected.location}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body px-3 py-1 bg-secondary rounded-full">
                  <Clock size={14} /> {selected.type}
                </span>
              </div>

              <p className="text-muted-foreground font-body mb-6">{selected.description}</p>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 font-body">Requirements</h4>
              <ul className="space-y-2 mb-6">
                {selected.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm font-body">
                    <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open(selected.formLink, "_blank")}
                className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:opacity-90 transition-opacity font-body"
              >
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Form Dialog */}
      <Dialog open={!!applyingTo} onOpenChange={(open) => !open && setApplyingTo(null)}>
        <DialogContent className="max-w-lg bg-background border-border max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              Apply for {applyingTo?.title}
            </DialogTitle>
            <DialogDescription className="font-body">
              {applyingTo?.department} · {applyingTo?.location}
            </DialogDescription>
          </DialogHeader>

          {applicationSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground font-body text-sm">
                Thanks for applying. We'll review your application and get back to you soon.
              </p>
              <button
                onClick={() => setApplyingTo(null)}
                className="mt-4 px-6 py-2 border border-border rounded-lg text-sm font-body hover:bg-secondary transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <a href=""></a>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
