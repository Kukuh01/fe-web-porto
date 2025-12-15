import { motion } from "motion/react";

export default function ImageModal({
  imageSrc,
  onClose,
}: {
  imageSrc: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={imageSrc}
        className="max-w-[90%] max-h-[90%] rounded-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
}
