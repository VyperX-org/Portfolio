import { Instagram, Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/trans-logo.webp";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="VyperX" className="h-10 mb-4 mix-blend-lighten" />
            <p className="text-muted-foreground text-sm mb-6 font-body">
              We don't run ads. We build growth systems that scale your brand to new heights.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/vyperx.in" },
                { icon: Twitter, href: "https://twitter.com/vyperx_in" },
                { icon: Linkedin, href: "https://linkedin.com/company/vyperx" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578409419150" },
                { icon: Youtube, href: "https://youtube.com/@vyperx.official" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-body">
              <li><a href="/pricing" className="hover:text-primary transition-colors">UGC Content</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Marketing & Advertising</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Social Media Management</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Meta Ads</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-body">
              <li><a href="#services" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#deliverables" className="hover:text-primary transition-colors">Deliverables</a></li>
              <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Book a Call</a></li>
              <li><Link to="/policies/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policies/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-body">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:contact@vyperx.in" className="hover:text-primary transition-colors">contact@vyperx.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+91 70447 00987" className="hover:text-primary transition-colors">+91 70447 00987</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d5145.819434526477!2d88.48125861863033!3d22.634690679693936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e9!4m3!3m2!1d22.6312797!2d88.48505159999999!4m0!5e0!3m2!1sen!2sin!4v1775237789544!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VyperX Location - Kolkata, India"
            className="w-full"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground font-body">
            <p>© {new Date().getFullYear()} VyperX. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/policies/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/policies/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
