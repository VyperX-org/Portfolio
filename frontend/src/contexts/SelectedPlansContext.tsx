import { createContext, useContext, useState, ReactNode } from "react";
import { Plan } from "@/components/pricing/pricingData";

interface SelectedPlansContextType {
  selectedPlans: Plan[];
  setSelectedPlans: (plans: Plan[]) => void;
}

const SelectedPlansContext = createContext<SelectedPlansContextType>({
  selectedPlans: [],
  setSelectedPlans: () => {},
});

export const SelectedPlansProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlans, setSelectedPlans] = useState<Plan[]>([]);
  return (
    <SelectedPlansContext.Provider value={{ selectedPlans, setSelectedPlans }}>
      {children}
    </SelectedPlansContext.Provider>
  );
};

export const useSelectedPlans = () => useContext(SelectedPlansContext);
