import SectionHeading from "@/components/common/SectionHeading";
import Contact from "@/sections/Contact";

export const metadata = {
  title: "Contact | Funblock Photobooth",
  description: "Contact Funblock Photobooth to request a quote, book an event, or learn more about our luxury packages.",
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)] pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Request your custom quote"
          description="Share your event details and we’ll respond quickly with a premium proposal and availability."
        />
      </div>
      <Contact showHeading={false} />
    </main>
  );
}
