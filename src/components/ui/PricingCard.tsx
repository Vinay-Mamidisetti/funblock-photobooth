"use client";

import { motion } from "framer-motion";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: string;
};

export default function PricingCard({ name, price, description, features, highlight }: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_30px_90px_-50px_rgba(58,45,36,0.12)] transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full bg-[rgba(198,161,110,0.16)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {name}
        </span>
        <span className="rounded-full border border-[var(--border)] bg-[var(--background)]/70 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          {highlight}
        </span>
      </div>
      <div className="mt-6">
        <p className="text-4xl font-semibold text-[var(--text)]">{price}</p>
      </div>
      <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-500" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-[var(--muted)]">{highlight}</p>
    </motion.article>
  );
}
