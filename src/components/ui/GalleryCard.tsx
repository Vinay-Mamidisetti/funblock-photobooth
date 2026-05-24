"use client";

import { motion } from "framer-motion";

type GalleryCardProps = {
  image: string;
  title: string;
  subtitle: string;
  accent: string;
};

export default function GalleryCard({
  image,
  title,
  subtitle,
  accent,
}: GalleryCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="
        group overflow-hidden
        rounded-[2rem]
        border border-[var(--border)]
        bg-[var(--surface)]
        shadow-[0_20px_60px_-40px_rgba(58,45,36,0.18)]
        transition-all duration-300
      "
    >
      <div className="relative h-[320px] overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full w-full
            object-cover
            transition duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/15" />

        <div
          className="
            absolute inset-x-0 bottom-0
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
            p-5
            text-white
          "
        >
          <span
            className="
              inline-flex rounded-full
              border border-white/15
              bg-white/10
              px-3 py-1
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#f5d28c]
            "
          >
            {accent}
          </span>

          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/70">
            {subtitle}
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            {title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}