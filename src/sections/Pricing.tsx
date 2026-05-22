import SectionHeading from "@/components/common/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/constants/pricing";

type PricingProps = {
  showHeading?: boolean;
};
export default function Pricing({
  showHeading = true,
}: PricingProps) {
  return (
    <section id="pricing" className={`pt-5 pb-24 ${showHeading ? "border-t border-[var(--border)]" : ""} bg-[var(--background)] px-4 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent luxury packages built for premium events"
            description="Choose the package that reflects your event scale and brand expectations. Each plan includes attentive service and elevated presentation."
          />
        )}

        <div className="mt-3 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
