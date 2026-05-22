"use client";

import { motion } from "framer-motion";

type GalleryCardProps = {
  title: string;
  subtitle: string;
  accent: string;
};

export default function GalleryCard({ title, subtitle, accent }: GalleryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[0_25px_90px_-50px_rgba(58,45,36,0.16)] transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(198,161,110,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.12)_20%,rgba(58,45,36,0.08)_100%)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[var(--background)]/30" />
        <div className="relative flex h-full flex-col justify-end p-6">
          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            {accent}
          </span>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]">{subtitle}</p>
        <h3 className="text-2xl font-semibold text-[var(--text)]">{title}</h3>
      </div>
    </motion.article>
  );
}
