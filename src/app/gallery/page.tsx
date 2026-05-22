import SectionHeading from "@/components/common/SectionHeading";
import Gallery from "@/sections/Gallery";

export const metadata = {
  title: "Gallery | Funblock Photobooth",
  description: "Browse our luxury event gallery and discover photobooth activations for premium weddings and celebrations.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Our signature event environments"
          description="A curated selection of premium experiences, mood, and luxury photobooth styling."
        />
      </div>
      <Gallery showHeading={false} />
    </main>
  );
}
