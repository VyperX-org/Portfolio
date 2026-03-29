import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const TermsConditions = () => (
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
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Terms & Conditions</h1>

      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground font-body">
        <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2 className="text-xl font-display font-semibold text-foreground">1. Services</h2>
        <p>VyperX provides digital marketing, UGC content creation, website development, and advertising services. All services are subject to scope agreements made prior to project commencement.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">2. Payment Terms</h2>
        <p>Payment terms are outlined in individual service agreements. All prices listed on our website are in Indian Rupees (INR). Discounted prices are subject to availability and may change without prior notice.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">3. Deliverables</h2>
        <p>All deliverables are subject to the scope defined in the service agreement. Revision rounds and timelines will be communicated during onboarding.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">4. Intellectual Property</h2>
        <p>Upon full payment, clients receive full ownership of all deliverables created specifically for their project. VyperX retains the right to showcase work in portfolios unless otherwise agreed.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">5. Cancellation & Refunds</h2>
        <p>Cancellation policies are outlined in individual service agreements. Refunds are handled on a case-by-case basis depending on the work completed.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">6. Limitation of Liability</h2>
        <p>VyperX shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">7. Contact</h2>
        <p>For questions about these Terms & Conditions, contact us at contact@vyperx.in.</p>
      </div>
    </div>
  </div>
);

export default TermsConditions;
