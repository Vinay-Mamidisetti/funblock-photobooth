import Experiences from "@/sections/Experiences";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences | Funblock Photobooth",
  description:
    "Explore our premium photo booth experiences for weddings, corporate events, and private celebrations.",
};

export default function ExperiencesPage() {
  return <Experiences showHeading={false} />;
}
