import type { Metadata } from "next";
import PrimaryButton from "@/components/common/PrimaryButton";

export const metadata: Metadata = {
  title: "Page Not Found | Funblock Photobooth",
  description:
    "The page you’re looking for can’t be found. Return to the homepage to explore our luxury photobooth experiences.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-6 pt-10 pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-base uppercase tracking-[0.32em] text-[var(--accent)] mb-6">
          404 — Page Not Found
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text)] mb-6">
          We couldn’t find the page you were looking for.
        </h1>
        <p className="mx-auto max-w-2xl text-sm md:text-base leading-7 text-[var(--text)]/80 mb-10">
          It may have been moved, deleted, or the link is incorrect. Head back to the homepage to discover our event photo booth experiences, packages, and contact details.
        </p>
        <PrimaryButton href="/">Return Home</PrimaryButton>
      </div>
    </div>
  );
}
