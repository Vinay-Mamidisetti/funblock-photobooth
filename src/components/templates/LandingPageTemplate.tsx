import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Experiences from "@/sections/Experiences";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import VideoCarouselSection from "@/sections/VideoCarouselSection";

type LandingPageTemplateProps = {
  showHowItWorks?: boolean;
};

export default function LandingPageTemplate({
  showHowItWorks = true,
}: LandingPageTemplateProps) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      {showHowItWorks && <HowItWorks />}
      <VideoCarouselSection />
      <Gallery />
      <Testimonials />
      <Experiences />
      <Contact />
    </main>
  );
}
