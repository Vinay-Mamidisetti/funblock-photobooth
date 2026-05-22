import GalleryCard from "@/components/ui/GalleryCard";
import SectionHeading from "@/components/common/SectionHeading";

type GalleryProps = {
  showHeading?: boolean;
};

const galleryItems = Array.from({ length: 8 }, (_, index) => ({
  title: `Luxury event ${index + 1}`,
  subtitle: index % 2 === 0 ? "Wedding reception" : "Corporate gala",
  accent: index % 2 === 0 ? "Gold detail" : "Elegant setup",
}));

export default function Gallery({
  showHeading = true,
}: GalleryProps) {
  return (
    <section id="gallery" className={`pt-10 pb-24 ${showHeading ? "border-t border-[var(--border)]" : ""} bg-[var(--background)] px-4 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Gallery"
            title="Curated event visuals from our signature setups"
            description="A gallery of premium photo booth activations with cinematic styling, luxe finishes, and memorable moments."
          />
        )}
        <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
