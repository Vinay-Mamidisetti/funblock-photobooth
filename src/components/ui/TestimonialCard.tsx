"use client";

import { motion } from "framer-motion";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 text-[var(--text)] shadow-[0_25px_90px_-50px_rgba(58,45,36,0.14)]"
    >
      <p className="text-lg leading-8 text-[var(--text)]">“{quote}”</p>
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
        <div>
          <p className="font-semibold text-[var(--text)]">{name}</p>
          <p className="mt-1 uppercase tracking-[0.28em] text-[var(--accent)]">{role}</p>
        </div>
        <span className="rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
          Luxury review
        </span>
      </div>
    </motion.article>
  );
}
