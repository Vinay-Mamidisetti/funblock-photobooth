import Pricing from "@/sections/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Funblock Photobooth",
  description: "Premium photobooth pricing and luxury event experiences.",
};

export default function PricingPage() {
  return <Pricing />;
}