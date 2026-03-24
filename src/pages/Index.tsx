import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyVyperX from "@/components/WhyVyperX";
import MonthlyExpect from "@/components/MonthlyExpect";
import WebsiteSection from "@/components/WebsiteSection";
import UGCSection from "@/components/UGCSection";
import Deliverables from "@/components/Deliverables";
import PricingSection from "@/components/PricingSection";
import CareersSection from "@/components/CareersSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { SelectedPlansProvider } from "@/contexts/SelectedPlansContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SelectedPlansProvider>
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <main>
        <HeroSection />
        <WhyVyperX />
        <MonthlyExpect />
        <WebsiteSection />
        <UGCSection />
        <Deliverables />
        <PricingSection />
        <CareersSection />
        <ContactForm />
      </main>
      <Footer />
    </SelectedPlansProvider>
  );
};

export default Index;
