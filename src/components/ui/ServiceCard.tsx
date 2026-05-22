"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  details: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function ServiceCard({ title, description, details, icon: Icon }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_30px_90px_-60px_rgba(58,45,36,0.14)] transition-all duration-300"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[rgba(198,161,110,0.95)] to-[rgba(142,93,40,0.95)] text-[var(--background)] shadow-lg shadow-[rgba(198,161,110,0.2)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[var(--text)]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
        {details.map((detail) => (
          <li key={detail} className="flex items-center gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-500" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
