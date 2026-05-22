import SectionHeading from "@/components/common/SectionHeading";
import Pricing from "@/sections/Pricing";

export const metadata = {
  title: "Pricing | Funblock Photobooth",
  description: "Review our luxury photobooth pricing packages and choose the best option for your event.",
};

export default function PricingPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Luxury pricing built for clear value"
          description="Transparent cost structure with premium service, stunning visuals, and dedicated event support."
        />
      </div>
      <Pricing showHeading={false} />
    </main>
  );
}
