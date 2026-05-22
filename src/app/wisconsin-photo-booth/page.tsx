import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import VideoCarouselSection from "@/sections/VideoCarouselSection";

export const metadata = {
  title: "Wisconsin Photo Booth | Funblock Photobooth",
  description: "Luxury photobooth rental in Wisconsin for weddings, corporate events, and private celebrations.",
};

export default function WisconsinPhotoBoothPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <VideoCarouselSection />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}
