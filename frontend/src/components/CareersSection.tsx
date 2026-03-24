import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const vacancies = [
  {
    id: 1,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Kolkata / Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Video Editor",
    department: "Content",
    location: "Kolkata / Remote",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Web Developer",
    department: "Development",
    location: "Kolkata / Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Graphic Designer",
    department: "Design",
    location: "Kolkata / Remote",
    type: "Full-time / Freelance",
  },
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref} id="careers">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Join the <span className="text-gradient">VyperX Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            We're building the future of brand growth. If you're passionate, creative, and driven — we want you on our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {vacancies.slice(0, 4).map((vacancy, i) => (
            <motion.div
              key={vacancy.id}
              className="group card-gradient border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(166_76%_58%/0.1)] bg-gradient-to-br from-secondary via-background to-primary/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold mb-1 group-hover:text-primary transition-colors">{vacancy.title}</h3>
                  <p className="text-sm text-primary font-body font-medium">{vacancy.department}</p>
                </div>
                <Briefcase size={20} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <MapPin size={12} /> {vacancy.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <Clock size={12} /> {vacancy.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity font-body"
          >
            Explore More <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
