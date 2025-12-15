import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useState } from "react";
import ImageModal from "./ImageModal";

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
            slidesPerView: 2,
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
        loop={true}
        modules={[FreeMode, Pagination, EffectCoverflow]}
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
          <SwiperSlide>
            <img
              src={img}
              onClick={() => setSelectedImage(img)}
              alt=""
              className="w-full h-80 rounded-xl"
            />
          </SwiperSlide>
        ))}
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
