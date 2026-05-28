"use client";

import { motion } from "framer-motion";

const boothTypes = [
  "Premium Photo Booth",
  "Bubble Booth",
  "DSLR Booth",
  "Glam Booth",
  "360 Booth",
];

const addons = [
  "Backdrops",
  "Guest Book Station",
  "VIP Carpet & Stanchions",
  "Custom Print Design",
  "Luxury Props",
  "Experienced Coordinator",
];

export default function ExperienceCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative overflow-hidden
        rounded-[2.2rem]
        border border-[rgba(198,161,110,0.28)]
        bg-[rgba(198,161,110,0.06)]
        px-10 py-5
        shadow-[0_40px_120px_-60px_rgba(198,161,110,0.28)]
      "
    >
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(198,161,110,0.14),transparent_40%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {/* Top */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="
              inline-flex rounded-full
              bg-[rgba(198,161,110,0.16)]
              px-4 py-1
              text-xs font-semibold
              uppercase tracking-[0.3em]
              text-[var(--accent)]
            "
          >
            Executive Experience
          </span>

          <span
            className="
              rounded-full
              border border-[rgba(198,161,110,0.3)]
              bg-[rgba(198,161,110,0.08)]
              px-3 py-1
              text-[10px]
              uppercase tracking-[0.24em]
              text-[var(--accent)]
            "
          >
            Most Popular
          </span>
        </div>

        {/* Heading */}
        <h3
          className="
            font-heading
            mt-2 text-4xl
            font-semibold leading-tight
            text-[var(--text)]
          "
        >
          Everything you need for a luxury guest experience.
        </h3>

        <p
          className="
            mt-2 max-w-3xl
            text-[15px] leading-8
            text-[var(--muted)]
          "
        >
          Premium booth experiences designed for weddings,
          birthdays, corporate activations, and unforgettable
          luxury celebrations.
        </p>

        {/* Main Grid */}
        <div className="mt-2 grid gap-8 lg:grid-cols-2">
          {/* Booth Types */}
          <div
            className="
              rounded-[1.8rem]
              border border-[var(--border)]
              bg-[var(--surface)]
              px-6 py-3
            "
          >
            <h4
              className="
                font-heading
                text-xl font-semibold
                text-[var(--text)]
              "
            >
              Booth Experiences
            </h4>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {boothTypes.map((item) => (
                <li
                  key={item}
                  className="
                    flex items-center gap-3
                    rounded-[1rem]
                    border border-[var(--border)]
                    bg-[var(--background)]
                    px-4 py-3
                  "
                >
                  <span
                    className="
                      h-2.5 w-2.5
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />

                  <span
                    className="
                      text-sm font-medium
                      text-[var(--text)]
                    "
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Addons */}
          <div
            className="
              rounded-[1.8rem]
              border border-[var(--border)]
              bg-[var(--surface)]
              px-6 py-5
            "
          >
            <div className="flex items-center justify-between">
              <h4
                className="
                  font-heading
                  text-xl font-semibold
                  text-[var(--text)]
                "
              >
                It Also Includes
              </h4>

              <div
                className="
                  rounded-full
                  bg-[rgba(198,161,110,0.1)]
                  px-3 py-1
                  text-xs uppercase
                  tracking-[0.24em]
                  text-[var(--accent)]
                "
              >
                Included
              </div>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {addons.map((item) => (
                <li
                  key={item}
                  className="
                    flex items-center gap-3
                    rounded-[1rem]
                    border border-[var(--border)]
                    bg-[var(--background)]
                    px-4 py-3
                  "
                >
                  <span
                    className="
                      h-2.5 w-2.5
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />

                  <span
                    className="
                      text-sm font-medium
                      text-[var(--text)]
                    "
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
