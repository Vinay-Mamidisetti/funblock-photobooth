import SectionHeading from "@/components/common/SectionHeading";
import Testimonials from "@/sections/Testimonials";

export const metadata = {
  title: "About | Funblock Photobooth",
  description: "Learn about Funblock Photobooth and how we deliver luxury event experiences with premium service.",
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="We design luxury photobooth activations with cinematic impact"
          description="A boutique team delivering tailored, editorial-style experiences with refined service for weddings, corporate galas, and private celebrations."
        />
        <div className="mt-12 space-y-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-10 text-[var(--text)] shadow-[0_30px_90px_-70px_rgba(58,45,36,0.18)]">
          <p>
            Funblock Photobooth partners with wedding planners, corporate producers, and private hosts who demand refined design, seamless operations, and unforgettable guest moments.
          </p>
          <p>
            Every activation is crafted to feel elevated and editorial — with warm cream tones, luxe finishes, and a polished service experience that complements premium event environments.
          </p>
        </div>
      </section>
      <Testimonials showHeading={false} />
    </main>
  );
}
