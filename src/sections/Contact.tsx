"use client";

import SectionHeading from "@/components/common/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";

type ContactProps = {
  showHeading?: boolean;
};

export default function Contact({
  showHeading = true,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="
        bg-[var(--background)]
        pt-5 pb-24
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">

        {showHeading && (
          <>
            <SectionHeading
              eyebrow="Contact"
              title="Submit your event inquiry"
              description="Ready to book or want a custom quote? Share the event details and we’ll respond with a tailored proposal."
            />

            <div className="mt-3 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-5 shadow-[0_20px_55px_-40px_rgba(58,45,36,0.10)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
                Collaborations
              </p>
              <p className=" text-base leading-7 text-[var(--text)]">
                Are you a brand partner, event producer, or creative collaborator? DM us to explore premium photobooth activations, co-branded experiences, and luxury event partnerships.
              </p>
            </div>
          </>
        )}

        <div
          className="
            mt-3 grid gap-10
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >

          {/* LEFT CARD */}
          <div
            className="
              rounded-[2rem]
              border border-[var(--border)]
              bg-[var(--surface)]
              px-8 py-7
              text-[var(--text)]
              shadow-[0_30px_80px_-60px_rgba(58,45,36,0.14)]
            "
          >

            {/* Compact Header */}
            <div className="mb-6">

              <p
                className="
                  text-sm uppercase
                  tracking-[0.32em]
                  text-[var(--accent)]
                "
              >
                Event Add-ons
              </p>

              <h3
                className="
                  mt-3 text-3xl
                  font-semibold leading-tight
                  text-[var(--text)]
                "
              >
                Enhance your booth experience.
              </h3>

              <p
                className="
                  mt-3 max-w-md
                  text-sm leading-7
                  text-[var(--muted)]
                "
              >
                Premium upgrades available for luxury events
                and branded guest experiences.
              </p>

            </div>

            {/* Extras Table */}
            <div
              className="
                overflow-hidden
                rounded-[1.8rem]
                border border-[var(--border)]
                bg-[var(--background)]
              "
            >

              {/* Header */}
              <div
                className="
                  grid grid-cols-[1fr_auto]
                  border-b border-[var(--border)]
                  bg-[rgba(198,161,110,0.08)]
                  px-6 py-4
                "
              >
                <p
                  className="
                    text-xs font-semibold uppercase
                    tracking-[0.28em]
                    text-[var(--accent)]
                  "
                >
                  Upgrade
                </p>

                <p
                  className="
                    text-xs font-semibold uppercase
                    tracking-[0.28em]
                    text-[var(--accent)]
                  "
                >
                  Cost
                </p>
              </div>

              {/* Row */}
              <div
                className="
                  grid grid-cols-[1fr_auto]
                  items-center
                  border-b border-[var(--border)]
                  px-6 py-5
                "
              >
                <div>
                  <h5 className="font-semibold text-[var(--text)]">
                    Guest Book Station
                  </h5>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Printed memories with handwritten guest notes.
                  </p>
                </div>

                <span
                  className="
                    text-base font-semibold
                    text-[var(--accent)]
                  "
                >
                  +$50
                </span>
              </div>

              {/* Row */}
              <div
                className="
                  grid grid-cols-[1fr_auto]
                  items-center
                  border-b border-[var(--border)]
                  px-6 py-5
                "
              >
                <div>
                  <h5 className="font-semibold text-[var(--text)]">
                    VIP Carpet & Stanchions
                  </h5>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Premium luxury entrance setup; each item is $50.
                  </p>
                </div>

                <span
                  className="
                    text-base font-semibold
                    text-[var(--accent)]
                  "
                >
                  +$50 each
                </span>
              </div>

              {/* Row */}
              <div
                className="
                  grid grid-cols-[1fr_auto]
                  items-center
                  px-6 py-5
                "
              >
                <div>
                  <h5 className="font-semibold text-[var(--text)]">
                    Unlimited Prints
                  </h5>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    All guests can take home a printed keepsake.
                  </p>
                </div>

                <span
                  className="
                    text-base font-semibold
                    text-[var(--accent)]
                  "
                >
                  +$75
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              rounded-[2rem]
              border border-[var(--border)]
              bg-[var(--surface)]
              px-8 py-4
              shadow-[0_30px_80px_-60px_rgba(58,45,36,0.14)]
            "
          >
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}