import { useEffect, useMemo, useRef } from "react";
import { useSelectedPlans } from "@/contexts/SelectedPlansContext";
import { formatPrice } from "@/components/pricing/pricingData";

const NETLIFY_FORM_URL = "https://forms.vyperx.in";

const PricingNetlifyFormEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { selectedPlans } = useSelectedPlans();

  const totals = useMemo(() => {
    const totalOriginal = selectedPlans.reduce((sum, plan) => sum + plan.price, 0);
    const totalDiscounted = selectedPlans.reduce((sum, plan) => sum + plan.discountedPrice, 0);

    return {
      totalOriginal,
      totalDiscounted,
      totalSavings: totalOriginal - totalDiscounted,
    };
  }, [selectedPlans]);

  const packagePayload = useMemo(
    () => ({
      source: "pricing",
      selectedPlanNames: selectedPlans.map((plan) => plan.name),
      selectedPlanTiers: selectedPlans.map((plan) => plan.tier),
      selectedPlans: selectedPlans.map((plan) => ({
        name: plan.name,
        tier: plan.tier,
        discountedPrice: plan.discountedPrice,
        originalPrice: plan.price,
        period: plan.period ?? null,
      })),
      currency: "INR",
      ...totals,
      submittedFrom: "vyperx-frontend",
      timestamp: new Date().toISOString(),
    }),
    [selectedPlans, totals],
  );

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({
      vx_source: "pricing",
      vx_selected_count: String(selectedPlans.length),
      vx_plan_names: selectedPlans.map((plan) => plan.name).join(" | "),
      vx_plan_tiers: selectedPlans.map((plan) => plan.tier).join(" | "),
      vx_total_original: String(totals.totalOriginal),
      vx_total_discounted: String(totals.totalDiscounted),
      vx_total_savings: String(totals.totalSavings),
      vx_currency: "INR",
      vx_payload: JSON.stringify(packagePayload),
    });

    return `${NETLIFY_FORM_URL}/?${params.toString()}`;
  }, [packagePayload, selectedPlans, totals]);

  useEffect(() => {
    const frame = iframeRef.current;
    if (!frame) {
      return;
    }

    const sendPayload = () => {
      frame.contentWindow?.postMessage(
        {
          type: "VYPERX_PACKAGE_PREFILL",
          payload: packagePayload,
        },
        "https://forms.vyperx.in",
      );
    };

    frame.addEventListener("load", sendPayload);
    sendPayload();

    return () => frame.removeEventListener("load", sendPayload);
  }, [packagePayload]);

  return (
    <section id="contact-netlify" className="section-padding pt-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-2xl md:text-4xl font-display font-bold">
              Fast Enquiry via <span className="text-gradient">Forms</span>
            </h3>
            <p className="text-muted-foreground font-body mt-2">
              Your selected package data is preloaded in this embedded form.
            </p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
            <p className="text-xs text-muted-foreground font-body">Current package total</p>
            <p className="text-lg font-display font-bold text-primary">₹{formatPrice(totals.totalDiscounted)}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_40px_hsl(0_0%_0%_/_0.2)]">
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title="VyperX Netlify Form"
            className="h-[820px] w-full border-0"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingNetlifyFormEmbed;