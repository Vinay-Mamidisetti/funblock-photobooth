"use client";

import SectionHeading from "@/components/common/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";

type ContactProps = {
  showHeading?: boolean;
};
export default function Contact({ showHeading = true }: ContactProps) {
  return (
    <section id="contact" className="bg-[var(--background)] pt-5 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Contact"
            title="Submit your event inquiry"
            description="Ready to book or want a custom quote? Share the event details and we’ll respond with a tailored proposal."
          />
        )}

        <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-8 py-4 text-[var(--text)] shadow-[0_30px_80px_-60px_rgba(58,45,36,0.14)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Priority event support</p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Luxury planning, personal service.</h3>
            <p className="mt-2 leading-8 text-[var(--muted)]">
              Provide your event details and our dedicated team will craft a refined proposal that suits your venue, guest list, and event style.
            </p>

            <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <div>
                <p className="font-semibold text-[var(--text)]">Fast response</p>
                <p className="text-[var(--muted)]">We reply within one business day for all premium inquiries.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--text)]">Venue readiness</p>
                <p className="text-[var(--muted)]">Our team handles setup, styling, and event timing for seamless execution.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--text)]">Bespoke details</p>
                <p className="text-[var(--muted)]">Custom branding, prints, and guest experience are available on request.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-8 py-4 shadow-[0_30px_80px_-60px_rgba(58,45,36,0.14)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
