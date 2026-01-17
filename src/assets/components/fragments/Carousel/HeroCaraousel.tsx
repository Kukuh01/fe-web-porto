"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselItem = {
  id: number;
  src: string;
  alt: string;
};

const carouselData: CarouselItem[] = [
  {
    id: 1,
    src: "https://picsum.photos/1200/600?random=1",
    alt: "Hero Image 1",
  },
  {
    id: 2,
    src: "https://picsum.photos/1200/600?random=2",
    alt: "Hero Image 2",
  },
  {
    id: 3,
    src: "https://picsum.photos/1200/600?random=3",
    alt: "Hero Image 3",
  },
];

export default function HeroCarousel() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="h-56 md:h-96"
    >
      {carouselData.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
