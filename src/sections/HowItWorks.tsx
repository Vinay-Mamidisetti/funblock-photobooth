"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Check Availability",
    description:
      "Submit your inquiry and secure your preferred event date instantly.",
  },
  {
    number: "2",
    title: "Confirm Booking",
    description:
      "Lock in your package with a quick and seamless confirmation process.",
  },
  {
    number: "3",
    title: "Enjoy The Experience",
    description:
      "We handle setup, guest engagement, and instant sharing during the event.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
        border-t border-[var(--border)]
        bg-[var(--background)]
        px-4 py-24
        sm:px-6 lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className="
              text-sm uppercase
              tracking-[0.35em]
              text-[var(--accent)]
            "
          >
            Booking Process
          </p>

          <h2
            className="
              mt-4
              text-4xl font-semibold
              tracking-tight
              text-[var(--text)]
              sm:text-5xl
            "
          >
            How It Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">

          {/* Desktop Line */}
          <div
            className="
              absolute left-0 right-0 top-16
              hidden h-[1px]
              bg-[rgba(198,161,110,0.18)]
              lg:block
            "
          />

          <div className="grid gap-14 lg:grid-cols-3">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative text-center"
              >

                {/* Circle */}
                <div
                  className="
                    relative mx-auto
                    flex h-32 w-32
                    items-center justify-center
                    overflow-hidden
                    rounded-full
                    border border-[rgba(198,161,110,0.18)]
                    shadow-[0_25px_80px_-30px_rgba(139,94,52,0.35)]
                  "
                >

                  {/* Background Image */}
                  <div
                    className="
                      absolute inset-0
                      bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop')]
                      bg-cover bg-center
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/45" />

                  {/* Number */}
                  <span
                    className="
                      relative z-10
                      text-5xl font-light
                      text-white
                    "
                  >
                    {step.number}
                  </span>

                </div>

                {/* Content */}
                <div className="mt-8">

                  <h3
                    className="
                      text-2xl font-medium
                      text-[var(--accent)]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mx-auto mt-4
                      max-w-[280px]
                      text-base leading-8
                      text-[var(--muted)]
                    "
                  >
                    {step.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}