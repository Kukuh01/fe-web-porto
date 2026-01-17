import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  FreeMode,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useState } from "react";
import ImageModal from "./ImageModal";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/project1.png",
  "/images/project2.png",
  "/images/project3.png",
  "/images/project4.png",
];

export default function CarouselV2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[FreeMode, Pagination, EffectCoverflow, Navigation]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        preventClicks={false}
        preventClicksPropagation={false}
        className="w-full my-10"
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <div className="relative group w-full h-80 rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={img}
                className="w-full h-full object-cover pointer-events-none"
                alt=""
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <button
                onClick={() => setSelectedImage(img)}
                className="absolute bottom-3 right-3 z-10 bg-black/60 p-2 rounded-full
                transition"
              >
                <MdOutlineZoomOutMap className="text-white text-xl" />
              </button>
            </div>
          </SwiperSlide>
        ))}
        {/* LEFT */}
        <button
          className="swiper-button-prev absolute left-3 top-1/2 z-20 -translate-y-1/2
  bg-black/60 p-3 rounded-full hover:bg-black transition"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>

        {/* RIGHT */}
        <button
          className="swiper-button-next absolute right-3 top-1/2 z-20 -translate-y-1/2
  bg-black/60 p-3 rounded-full hover:bg-black transition"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </Swiper>

      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
