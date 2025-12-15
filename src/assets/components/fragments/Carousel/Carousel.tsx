import { motion } from "motion/react";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function Carousel() {
  const images = [
    "/images/project1.png",
    "/images/project2.png",
    "/images/project3.png",
    "/images/project4.png",
  ];

  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="relative flex justify-center items-center h-96 perspective-1000">
        {images.map((img, index) => {
          const offset = index - active;

          return (
            <motion.img
              key={img}
              src={img}
              onClick={() => setSelectedImage(img)}
              className="absolute w-96 h-64 object-cover rounded-2xl cursor-pointer"
              animate={{
                x: offset * 220,
                scale: offset === 0 ? 1 : 0.8,
                rotateY: offset * -25,
                zIndex: offset === 0 ? 10 : 0,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() => setActive((p) => Math.max(p - 1, 0))}
          className="px-4 py-2 bg-zinc-800 rounded-xl text-amber-50"
        >
          Prev
        </button>
        <button
          onClick={() => setActive((p) => Math.min(p + 1, images.length - 1))}
          className="px-4 py-2 bg-zinc-800 rounded-xl text-amber-50"
        >
          Next
        </button>
      </div>

      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
