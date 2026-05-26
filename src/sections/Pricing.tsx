import SectionHeading from "@/components/common/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";

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
            eyebrow="Experiences"
            title="Luxury booth experiences curated for unforgettable events"
            description="Premium photobooth activations designed for weddings, corporate events, birthdays, luxury parties, and private celebrations."
          />
        )}

        <div className="mt-8 max-w-[1400px] mx-auto">
          <PricingCard />
        </div>

      </div>
    </section>
  );
}