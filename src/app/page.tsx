import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import VideoCarouselSection from "@/sections/VideoCarouselSection";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import Contact from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Luxury Editorial Photo Booth Experiences | Funblock Photobooth",
  description:
    "Discover premium photo booth activations for weddings, corporate galas, and private celebrations. Funblock delivers luxury event experiences with cinematic style.",
  openGraph: {
    title: "Luxury Editorial Photo Booth Experiences | Funblock Photobooth",
    description:
      "Discover premium photo booth activations for weddings, corporate galas, and private celebrations. Funblock delivers luxury event experiences with cinematic style.",
    type: "website",
    url: "https://funblockphotobooth.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Editorial Photo Booth Experiences | Funblock Photobooth",
    description:
      "Discover premium photo booth activations for weddings, corporate galas, and private celebrations.",
  },
};

export default function HomePage() {
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
