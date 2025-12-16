import type { ReactNode } from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

export default function PageLayout({
  children,
  onContactClick,
}: {
  children: ReactNode;
  onContactClick: () => void;
}) {
  return (
    <div className="bg-zinc-900">
      <Navbar onContactClick={onContactClick} />
      <main className="max-w-7xl mx-auto mt-20">{children}</main>
      <Footer />
    </div>
  );
}
