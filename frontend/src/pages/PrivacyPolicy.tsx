import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <nav className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="VyperX" className="h-8 md:h-10 rounded-full object-cover mix-blend-lighten" />
        </Link>
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </nav>

    <div className="max-w-3xl mx-auto px-4 md:px-8 pt-32 pb-20">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground font-body">
        <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2 className="text-xl font-display font-semibold text-foreground">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, including your name, email address, phone number, business name, and business sector when you fill out our contact form or book a call.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to your inquiries and provide our services</li>
          <li>Send you updates about our services and offerings</li>
          <li>Improve our website and marketing efforts</li>
          <li>Communicate with you via email, phone, or WhatsApp</li>
        </ul>

        <h2 className="text-xl font-display font-semibold text-foreground">3. Data Storage</h2>
        <p>Your data is securely stored in our database systems. We implement appropriate technical and organizational measures to protect your personal information.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">4. Third-Party Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">5. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information. Contact us at hello@vyperx.agency for any data-related requests.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at hello@vyperx.agency.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
