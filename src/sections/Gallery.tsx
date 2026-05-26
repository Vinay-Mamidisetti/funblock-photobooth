"use client";

import GalleryCard from "@/components/ui/GalleryCard";
import SectionHeading from "@/components/common/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

type GalleryProps = {
  showHeading?: boolean;
};

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop",
    title: "Luxury Wedding",
    subtitle: "Wedding Reception",
    accent: "Gold Detail",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop",
    title: "Bubble Booth",
    subtitle: "Interactive Experience",
    accent: "Luxury Setup",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop",
    title: "360 Booth",
    subtitle: "Cinematic Videos",
    accent: "Premium Event",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
    title: "Instant Sharing",
    subtitle: "Social Sharing",
    accent: "Digital Moments",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1400&auto=format&fit=crop",
    title: "Corporate Events",
    subtitle: "Corporate Gala",
    accent: "Elegant Setup",
  },
];

export default function Gallery({
  showHeading = true,
}: GalleryProps) {
  return (
    <section
      id="gallery"
      className={`
        overflow-hidden
        bg-[var(--background)]
        pt-10
        pb-24
        ${showHeading ? "border-t border-[var(--border)]" : ""}
      `}
    >
      <div className="mx-auto max-w-7xl">

        {showHeading && (
          <div className="px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Gallery"
              title="Curated event visuals from our signature setups"
              description="A gallery of premium photo booth activations with cinematic styling and memorable moments."
            />
          </div>
        )}

        <div className="mt-8">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            grabCursor={false}
            allowTouchMove={false}
            simulateTouch={false}
            touchStartPreventDefault={false}
            speed={2500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={"auto"}
            spaceBetween={18}
            className="gallery-swiper"
          >
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <SwiperSlide
                key={index}
                className="
                  !w-[240px]
                  sm:!w-[260px]
                  lg:!w-[280px]
                "
              >
                <GalleryCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}