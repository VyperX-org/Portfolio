import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/trans-logo.webp";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Web Dev", href: "/#web-services" },
  { label: "UGC Services", href: "/#ugc-services" },
  { label: "Clients", href: "/#clients" },
  { label: "Deliverables", href: "/#deliverables" },
  { label: "About Us", href: "/pricing" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    // If it's a hash link and we are on the homepage, scroll smoothly
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");
      const isHomepage = window.location.pathname === "/" || window.location.pathname === "";

      if (isHomepage) {
        e.preventDefault();
        window.history.pushState(null, "", `#${targetId}`);

        const performScroll = () => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        };

        // Scroll immediately and also re-verify after mobile menu collapse
        performScroll();
        setTimeout(performScroll, 120);
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <img src={logo} alt="VyperX Logo" className="h-8 md:h-10 object-cover mix-blend-lighten" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-secondary-foreground hover:text-primary transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile / Tablet toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-foreground p-1 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden glass border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-secondary-foreground hover:text-primary transition-colors py-2 font-body text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-2 px-5 py-3 bg-primary text-primary-foreground text-center font-semibold rounded-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
