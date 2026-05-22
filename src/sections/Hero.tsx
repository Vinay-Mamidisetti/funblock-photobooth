"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import PrimaryButton from "@/components/common/PrimaryButton";

const services = [
  {
    title: "Photo Booth",
    description:
      "DSLR-quality prints and instant memories for every celebration.",
    image:
      "https://images.pexels.com/photos/33390611/pexels-photo-33390611.jpeg",
  },
  {
    title: "Bubble Booth",
    description:
      "Interactive immersive booth setup with premium visual styling.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "360 Booth",
    description:
      "Cinematic slow-motion videos designed for viral event moments.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Instant Sharing",
    description:
      "Guests can instantly share photos and videos via QR, SMS, or email.",
    image:
      "https://images.pexels.com/photos/3519405/pexels-photo-3519405.jpeg",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-[var(--background)]
        pt-10 md:pt-10
        pb-14 md:pb-16
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(198,161,110,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(58,45,36,0.05),transparent_35%)]
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          max-w-[1400px]
          px-4 md:px-6 lg:px-10
        "
      >
        <div
          className="
            grid gap-6
            lg:grid-cols-[0.95fr_1.05fr]
            items-stretch
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              h-full
              rounded-[2rem]
              border border-[var(--border)]
              bg-[var(--surface)]/95
              p-6 md:p-8
              shadow-[0_30px_80px_-60px_rgba(58,45,36,0.14)]
              backdrop-blur-xl
              flex flex-col justify-between
            "
          >
            <div>
              {/* Tag */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[rgba(198,161,110,0.22)]
                  bg-[rgba(198,161,110,0.08)]
                  px-4 py-2
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[var(--accent)]
                "
              >
                <Sparkles className="h-3.5 w-3.5" />
                Luxury Event Experiences
              </div>

              {/* Heading */}
              <h1
                className="
                  mt-3
                  max-w-2xl
                  text-3xl
                  font-semibold
                  leading-[1.1]
                  text-[var(--text)]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Capture The Moments,
                Share The Fun.
              </h1>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-[var(--muted)]
                  sm:text-base
                "
              >
                Premium Photo Booth, Bubble Booth & 360 Booth rentals
                for weddings, birthdays, corporate events, and unforgettable
                celebrations.
              </p>

              {/* Pricing */}
              <div
                className="
                  mt-6
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[rgba(198,161,110,0.22)]
                  bg-[rgba(198,161,110,0.06)]
                  px-4 py-2.5
                "
              >
                <Star className="h-4 w-4 text-[var(--accent)]" />

                <p className="text-sm font-medium text-[var(--text)]">
                  Packages start from
                  <span className="ml-2 font-semibold text-[var(--accent)]">
                    $199 / 2 Hours
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div
                className="
                  mt-7
                  flex flex-col gap-3
                  sm:flex-row sm:items-center
                "
              >
                <PrimaryButton
                  href="#contact"
                  className="w-full sm:w-auto"
                >
                  Book Your Event
                </PrimaryButton>

                <a
                  href="#gallery"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[rgba(198,161,110,0.25)]
                    bg-transparent
                    px-6 py-3.5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--accent)]
                    transition
                    hover:border-[var(--accent)]
                    hover:text-[rgba(198,161,110,0.95)]
                  "
                >
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div
              className="
                mt-8
                grid gap-4
                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-[1.3rem]
                  border border-[var(--border)]
                  bg-[var(--background)]
                  p-4
                "
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Perfect For
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                  Weddings, birthdays, parties, baby showers & corporate events.
                </p>
              </div>

              <div
                className="
                  rounded-[1.3rem]
                  border border-[var(--border)]
                  bg-[var(--background)]
                  p-4
                "
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Includes
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                  Professional attendant, backdrop setup & instant sharing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
              h-full
              overflow-hidden
              rounded-[2rem]
              border border-[var(--border)]
              bg-[var(--surface)]
              p-4
              shadow-[0_30px_100px_-70px_rgba(58,45,36,0.18)]
              flex flex-col
            "
          >
            {/* Carousel */}
            <div className="flex-1">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.title}>
                    <div
                      className="
                        overflow-hidden
                        rounded-[1.7rem]
                        border border-[var(--border)]
                        bg-[var(--background)]
                        shadow-[0_20px_60px_-40px_rgba(58,45,36,0.16)]
                      "
                    >
                      <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="
                            h-full w-full
                            object-cover
                            transition duration-700
                            hover:scale-105
                          "
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div
                          className="
                            absolute bottom-0 left-0 right-0
                            bg-gradient-to-t
                            from-black/80
                            to-transparent
                            p-4
                            text-white
                          "
                        >
                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.25em]
                              text-[#f5d28c]
                            "
                          >
                            Funblock Experience
                          </p>

                          <h3 className="mt-2 text-xl font-semibold">
                            {service.title}
                          </h3>

                          <p className="mt-2 text-sm leading-5 text-white/85">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Bottom Featured Card */}
            <div
              className="
                mt-3
                overflow-hidden
                rounded-[1.7rem]
                border border-[var(--border)]
                bg-[var(--background)]
                shadow-[0_20px_60px_-40px_rgba(58,45,36,0.16)]
              "
            >
              <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
                  alt="Funblock Photobooth"
                  className="
                    h-full w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-black/20" />

                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    bg-gradient-to-t
                    from-black/80
                    to-transparent
                    p-4
                    text-white
                  "
                >
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#f5d28c]
                    "
                  >
                    Featured Experience
                  </p>

                  <h2
                    className="
                      mt-2
                      text-xl
                      font-semibold
                      leading-tight
                    "
                  >
                    Luxury Event Activations
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-5
                      text-white/85
                    "
                  >
                    Premium cinematic booth experiences designed for unforgettable celebrations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}