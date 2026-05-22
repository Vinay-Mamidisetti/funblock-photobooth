"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "Luxury Ceremony Highlights",
    subtitle: "Signature wedding activation",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Gala Reels",
    subtitle: "Branded event capture",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Birthday Lightroom",
    subtitle: "Premium party moments",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
  },
];

export default function VideoCarousel() {
  return (
    <div className="mt-3 grid gap-6 md:grid-cols-3">
      {videos.map((video) => (
        <motion.div
          key={video.title}
          whileHover={{ y: -6 }}
          className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_90px_-70px_rgba(58,45,36,0.16)] transition-all duration-300"
        >
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.16), rgba(58,45,36,0.28)), url('${video.image}')`,
            }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--background)]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(198,161,110,0.3)] bg-[rgba(255,255,255,0.08)] text-[var(--accent)] shadow-lg shadow-[rgba(58,45,36,0.15)]">
                ▶
              </div>
            </div>
          </div>
          <div className="space-y-3 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">{video.subtitle}</p>
            <h3 className="text-xl font-semibold text-[var(--text)]">{video.title}</h3>
            <p className="text-sm leading-7 text-[var(--muted)]">
              A premium preview card for cinematic booth activations and sample event moments.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
