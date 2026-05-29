"use client";

import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/constants/site";
import { FaInstagram } from "react-icons/fa";

export default function FloatingActions() {
  const message = "Hi! I am interested in Funblock Photobooth services.";

  const smsUrl = `sms:${site.phoneRaw}?body=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="
      inline-flex h-12 w-12 items-center justify-center
    rounded-full
    bg-gradient-to-br
    from-[#f58529]
    via-[#dd2a7b]
    to-[#8134af]
    shadow-[0_18px_40px_rgba(221,42,123,0.35)]
    transition-all duration-300
    hover:scale-110
  "
      >
        <FaInstagram className="h-6 w-6 text-white" />
      </a>
      <a
        href={smsUrl}
        aria-label="Send iMessage"
        className="
          inline-flex h-12 w-12 items-center justify-center
          rounded-full
          bg-[#007aff]
          shadow-[0_18px_40px_rgba(0,122,255,0.28)]
          transition-all duration-300
          hover:scale-110
          hover:bg-[#0066e6]
          md:hidden
        "
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>

      {/* Call */}
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Call now"
        className="
          inline-flex h-12 w-12 items-center justify-center
          rounded-full
          bg-[var(--accent)]
          shadow-[0_18px_40px_rgba(139,94,52,0.30)]
          transition-all duration-300
          hover:scale-110
          hover:bg-[rgba(123,77,40,0.95)]"
      >
        <Phone className="h-6 w-6" color="white" />
      </a>
    </div>
  );
}
