"use client";

import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/constants/services";

type ServicesProps = {
  showHeading?: boolean;
};

export default function Services({
  showHeading = true,
}: ServicesProps) {
  return (
    <section
      id="services"
      className={`pt-10 pb-24 ${showHeading ? "border-t border-[var(--border)]" : ""} bg-[var(--background)] px-4 sm:px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Services"
            title="Luxury photobooth packages for unforgettable events"
            description="Premium packages curated for weddings, corporate celebrations, luxury parties, and private engagements."
          />
        )}

        <div className="mt-3 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}