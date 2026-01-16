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
    <div className="bg-zinc-900 min-h-screen pt-20 lg:pt-0 md:pt-0">
      <Navbar onContactClick={onContactClick} />
      <main className="max-w-7xl mx-auto lg:mt-20 px-4 md:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
