"use client";

import { motion } from "framer-motion";

type PricingCardProps = {
  name: string;
  description: string;
  features: string[];
  highlight: string;
  featured?: boolean;
};

export default function PricingCard({
  name,
  description,
  features,
  highlight,
  featured,
}: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`
        relative overflow-hidden
        rounded-[2rem]
        border
        px-8
        py-6
        transition-all duration-300
        ${featured
          ? `
              border-[rgba(198,161,110,0.4)]
              bg-[rgba(198,161,110,0.08)]
              shadow-[0_40px_120px_-60px_rgba(198,161,110,0.28)]
              lg:scale-[1.03]
            `
          : `
              border-[var(--border)]
              bg-[var(--surface)]
              shadow-[0_30px_90px_-50px_rgba(58,45,36,0.12)]
            `
        }
      `}
    >
      {/* Glow */}
      {featured && (
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(198,161,110,0.18),transparent_40%)]
            pointer-events-none
          "
        />
      )}

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-center justify-between gap-4">

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
            {name}
          </span>

          {featured && (
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
          )}
        </div>

        {/* Experience Badge */}
        <div
          className="
            mt-3 inline-flex
            rounded-full
            border border-[rgba(198,161,110,0.25)]
            bg-[rgba(198,161,110,0.08)]
            px-4 py-2
            text-xs uppercase
            tracking-[0.24em]
            text-[var(--accent)]
          "
        >
          Luxury Experience
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          {description}
        </p>

        {/* Features */}
        <ul className="
    mt-4
    grid gap-4
    text-sm text-[var(--muted)]
    sm:grid-cols-2
  ">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3"
            >
              <span
                className="
                  mt-1.5 h-2.5 w-2.5
                  rounded-full
                  bg-[var(--accent)]
                "
              />

              <span className="leading-6">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Bottom Highlight */}
        <div
          className="
            mt-4 rounded-[1.4rem]
            border border-[var(--border)]
            bg-[var(--background)]/70
            p-4
          "
        >
          <p
            className="
              text-xs uppercase
              tracking-[0.24em]
              text-[var(--accent)]
            "
          >
            Best For
          </p>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {highlight}
          </p>
        </div>

      </div>
    </motion.article>
  );
}