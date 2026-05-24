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
    <section
      id="pricing"
      className={`
        pt-10
        pb-24
        ${showHeading ? "border-t border-[var(--border)]" : ""}
        bg-[var(--background)]
        px-4 sm:px-6 lg:px-8
      `}
    >
      <div className="mx-auto max-w-7xl">

        {showHeading && (
          <SectionHeading
            eyebrow="Packages"
            title="Luxury booth experiences curated for unforgettable events"
            description="Premium photobooth experiences designed for weddings, corporate celebrations, birthdays, and private luxury events."
          />
        )}

        <div
          className="
            mt-8
            grid gap-6
            md:grid-cols-2
            max-w-5xl
            mx-auto
          "
        >
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
            />
          ))}
        </div>

      </div>
    </section>
  );
}