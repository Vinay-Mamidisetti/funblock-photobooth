import SectionHeading from "@/components/common/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";

type ExperiencesProps = {
  showHeading?: boolean;
};

export default function Experiences({
  showHeading = true,
}: ExperiencesProps) {
  return (
    <section
      id="experiences"
      className={`
        pt-10
        pb-24
        ${showHeading ? "border-t border-[var(--border)]" : ""}
        bg-[var(--background)]
        px-4 sm:px-6 lg:px-8
      `}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        {showHeading && (
          <SectionHeading
            eyebrow="Experiences"
            title="Luxury booth experiences curated for unforgettable events"
            description="Premium photobooth activations designed for weddings, corporate events, birthdays, luxury parties, and private celebrations."
          />
        )}

        {/* Executive Card */}
        <div className="mt-8 max-w-[1400px] mx-auto">
          <ExperienceCard />
        </div>

        {/* Offers */}
        <div className="mt-8 max-w-[1400px] mx-auto">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
            {/* Main Offer */}
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-[rgba(198,161,110,0.28)]
                bg-[rgba(198,161,110,0.08)]
                p-6
                shadow-[0_30px_80px_-50px_rgba(198,161,110,0.24)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute right-0 top-0
                  h-32 w-32
                  rounded-full
                  bg-[rgba(198,161,110,0.08)]
                  blur-3xl
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[10px]
                    font-semibold uppercase
                    tracking-[0.3em]
                    text-[var(--accent)]
                  "
                >
                  Limited Offer
                </p>

                <h4
                  className="
                    mt-4 text-2xl
                    font-semibold leading-tight
                    text-[var(--text)]
                  "
                >
                  Save $25 on advance bookings.
                </h4>

                <p
                  className="
                    mt-3 max-w-md
                    text-sm leading-7
                    text-[var(--muted)]
                  "
                >
                  Confirm your event at least one month early and receive an exclusive booking discount.
                </p>
              </div>
            </div>

            {/* Corporate Offer */}
            <div
              className="
                rounded-[2rem]
                border border-[var(--border)]
                bg-[var(--surface)]
                p-6
                shadow-[0_20px_60px_-40px_rgba(58,45,36,0.18)]
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold uppercase
                  tracking-[0.3em]
                  text-[var(--accent)]
                "
              >
                Corporate
              </p>

              <h4
                className="
                  mt-4 text-xl
                  font-semibold
                  text-[var(--text)]
                "
              >
                Book 4 booths.
              </h4>

              <p
                className="
                  mt-2 text-sm
                  leading-7
                  text-[var(--muted)]
                "
              >
                Get one booth experience complimentary for large-scale corporate events.
              </p>
            </div>

            {/* Bubble Booth */}
            <div
              className="
                rounded-[2rem]
                border border-[var(--border)]
                bg-[var(--surface)]
                p-6
                shadow-[0_20px_60px_-40px_rgba(58,45,36,0.18)]
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold uppercase
                  tracking-[0.3em]
                  text-[var(--accent)]
                "
              >
                Add-ons
              </p>

              <h4
                className="
                  mt-4 text-xl
                  font-semibold
                  text-[var(--text)]
                "
              >
                Free Bubble Booth.
              </h4>

              <p
                className="
                  mt-2 text-sm
                  leading-7
                  text-[var(--muted)]
                "
              >
                Book 3 booth experiences and receive a complimentary Bubble Booth add-on.
              </p>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Cash / Zelle → No tax",
              "Free add-ons for 3 event bookings",
              "Perfect for business promotions",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-5 py-3
                  text-sm
                  text-[var(--muted)]
                  shadow-[0_10px_30px_-20px_rgba(58,45,36,0.18)]
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
