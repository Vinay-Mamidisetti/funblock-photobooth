import SectionHeading from "@/components/common/SectionHeading";
import Services from "@/sections/Services";

export const metadata = {
  title: "Services | Funblock Photobooth",
  description: "Explore our luxury photobooth packages for weddings, corporate events, and private celebrations.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--text)] pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="High-end photobooth packages for premium events"
          description="Everything you need to deliver luxury guest experiences, from 360 booths to instant print activations."
        />
      </div>
      <Services showHeading={false} />
    </div>
  );
}
