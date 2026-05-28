import type { Metadata } from "next";
import LandingPageTemplate from "@/components/templates/LandingPageTemplate";

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
  return <LandingPageTemplate showHowItWorks />;
}
