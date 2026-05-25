import SectionHeading from "@/components/common/SectionHeading";
import Testimonials from "@/sections/Testimonials";

export const metadata = {
  title: "About | Funblock Photobooth",
  description:
    "Learn about Funblock Photobooth and our luxury event experiences for weddings, corporate events, and private celebrations.",
};

const highlights = [
  {
    title: "Luxury Event Experience",
    description:
      "Premium booth setups curated for weddings, corporate events, and celebrations.",
  },
  {
    title: "Professional Team",
    description:
      "Experienced attendants ensuring seamless guest interaction and smooth execution.",
  },
  {
    title: "Instant Sharing",
    description:
      "Guests instantly receive photos and videos through QR, SMS, or email.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">

      {/* Hero */}
      <section className="px-4 pt-10 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="About Funblock"
            title="Creating unforgettable event experiences through premium photobooth activations."
            description="Funblock Photobooth delivers luxury experiences designed for modern weddings, private celebrations, and corporate events."
          />

          {/* Main Layout */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">

            {/* Left */}
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-8 py-4 shadow-[0_30px_90px_-70px_rgba(58,45,36,0.18)]">

              <h2 className="font-heading text-3xl font-semibold leading-tight text-[var(--text)]">
                More than a photobooth.
              </h2>

              <p className="mt-2 text-[15px] leading-8 text-[var(--muted)]">
                We believe event experiences should feel immersive, elegant,
                and unforgettable. Funblock Photobooth was created to bring
                luxury-style event activations that elevate guest interaction
                and create lasting memories.
              </p>

              <p className="mt-2 text-[15px] leading-8 text-[var(--muted)]">
                From weddings and birthdays to premium corporate activations,
                every booth experience is designed with attention to aesthetics,
                lighting, guest engagement, and seamless service.
              </p>

              {/* Stats */}
              <div className="mt-3 grid gap-4 sm:grid-cols-3">

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5 text-center">
                  <p className="text-3xl font-semibold text-[var(--accent)]">
                    100+
                  </p>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Events Covered
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5 text-center">
                  <p className="text-3xl font-semibold text-[var(--accent)]">
                    4.9★
                  </p>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Client Satisfaction
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5 text-center">
                  <p className="text-3xl font-semibold text-[var(--accent)]">
                    24/7
                  </p>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Event Support
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_90px_-70px_rgba(58,45,36,0.18)]">

              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1400&auto=format&fit=crop"
                alt="Luxury Event"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Why Choose Us"
            title="Designed for elevated celebrations"
            description="Every Funblock experience combines modern aesthetics, premium service, and memorable guest engagement."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="
    group relative overflow-hidden
    rounded-[2rem]
    border border-[var(--border)]
    bg-[var(--surface)]
    p-7
    shadow-[0_20px_60px_-50px_rgba(58,45,36,0.16)]
    transition-all duration-500
    hover:-translate-y-1
    hover:border-[rgba(198,161,110,0.25)]
    hover:shadow-[0_30px_80px_-45px_rgba(139,94,52,0.18)]
  "
              >

                {/* Top Glow */}
                <div
                  className="
      absolute right-0 top-0
      h-28 w-28
      rounded-full
      bg-[rgba(198,161,110,0.06)]
      blur-3xl
    "
                />

                {/* Icon */}
                <div
                  className="
      relative flex h-14 w-14 items-center justify-center
      rounded-2xl
      border border-[rgba(198,161,110,0.18)]
      bg-[rgba(198,161,110,0.08)]
      shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
    "
                >
                  <div
                    className="
        h-6 w-6 rounded-full
        bg-[linear-gradient(180deg,#d4b07a_0%,#8b5e34_100%)]
      "
                  />
                </div>

                {/* Content */}
                <div className="relative mt-6">

                  <h3
                    className="
        text-xl font-semibold
        leading-tight
        text-[var(--text)]
      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
        mt-3
        text-sm leading-7
        text-[var(--muted)]
      "
                  >
                    {item.description}
                  </p>

                </div>

                {/* Bottom Accent Line */}
                <div
                  className="
      mt-6 h-[2px] w-16
      rounded-full
      bg-[linear-gradient(90deg,#c6a16e_0%,transparent_100%)]
    "
                />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <Testimonials showHeading={false} />

    </main>
  );
}