"use client";

import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/constants/site";

export default function FloatingActions() {
  const message = "Hi! I am interested in Funblock Photobooth services.";

  const smsUrl = `sms:${site.phoneRaw}?body=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

      {/* iMessage / SMS */}
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
        <Phone className="h-6 w-6" color="white"/>
      </a>
    </div>
  );
}
