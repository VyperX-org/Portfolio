import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Pricing from "./pages/Pricing.tsx";
import Careers from "./pages/Careers.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";
import NotFound from "./pages/NotFound.tsx";
import TashaChatWidget from "./components/TashaChatWidget.tsx";

const queryClient = new QueryClient();

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/policies/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<Navigate to="/policies/privacy-policy" replace />} />
          <Route path="/terms-conditions" element={<Navigate to="/policies/terms-conditions" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <TashaChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
