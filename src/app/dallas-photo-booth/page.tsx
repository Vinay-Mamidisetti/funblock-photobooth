import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import VideoCarouselSection from "@/sections/VideoCarouselSection";

export const metadata = {
  title: "Dallas Photo Booth | Funblock Photobooth",
  description: "Luxury photobooth rental in Dallas for weddings, corporate events, and private celebrations.",
};

export default function DallasPhotoBoothPage() {
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
