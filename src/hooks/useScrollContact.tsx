import { useRef } from "react";

export default function useScrollContact() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { contactRef, handleContactClick };
}
