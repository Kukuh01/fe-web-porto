import { motion } from "motion/react";
import { useState } from "react";
import ImageModal from "./ImageModal";

const images = [
  "/images/project1.png",
  "/images/project2.png",
  "/images/project3.png",
  "/images/project4.png",
];

export default function CarouselV1() {
  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getOffset = (index: number) => {
    let offset = index - active;

    // bikin looping terasa natural
    if (offset > images.length / 2) offset -= images.length;
    if (offset < -images.length / 2) offset += images.length;

    return offset;
  };

  return (
    <>
      {/* Coverflow */}
      <div className="relative flex justify-center items-center h-96 perspective-[1200px] overflow-hidden">
        {images.map((img, index) => {
          const offset = getOffset(index);

          return (
            <motion.img
              key={img}
              src={img}
              onClick={() => setSelectedImage(img)}
              className="absolute w-xl h-80 object-cover rounded-2xl cursor-pointer"
              animate={{
                x: offset * 260,
                scale: offset === 0 ? 1 : 0.75,
                rotateY: offset * -30,
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
              }}
            />
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() =>
            setActive((prev) => (prev - 1 + images.length) % images.length)
          }
          className="px-4 py-2 bg-zinc-800 rounded-xl text-amber-50"
        >
          Prev
        </button>
        <button
          onClick={() => setActive((prev) => (prev + 1) % images.length)}
          className="px-4 py-2 bg-zinc-800 rounded-xl text-amber-50"
        >
          Next
        </button>
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
