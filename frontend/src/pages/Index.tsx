import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyVyperX from "@/components/WhyVyperX";
import MonthlyExpect from "@/components/MonthlyExpect";
import WebsiteSection from "@/components/WebsiteSection";
import UGCSection from "@/components/UGCSection";
import ClientsSection from "@/components/ClientsSection";
import Deliverables from "@/components/Deliverables";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import { SelectedPlansProvider } from "@/contexts/SelectedPlansContext";
import {Analytics} from "@vercel/analytics/react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SelectedPlansProvider>
      <LoadingScreen isLoading={isLoading} />
      <Analytics/>
      <Navbar />
      <main>
        <HeroSection />
        <WhyVyperX />
        <MonthlyExpect />
        <WebsiteSection />
        <UGCSection />
        <ClientsSection />
        <Deliverables />
        <ContactForm />
      </main>
      <Footer />
    </SelectedPlansProvider>
  );
};

export default Index;
