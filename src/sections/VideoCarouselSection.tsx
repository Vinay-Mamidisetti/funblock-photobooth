import SectionHeading from "@/components/common/SectionHeading";
import VideoCarousel from "@/components/ui/VideoCarousel";

export default function VideoCarouselSection() {
  return (
    <section id="video" className="bg-[var(--background)] pt-10 pb-26 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Video"
          title="Watch the energy of our premium activations"
          description="Short highlight reels that capture the atmosphere, motion, and luxury styling of our photo booth experiences."
        />
        <VideoCarousel />
      </div>
    </section>
  );
}
