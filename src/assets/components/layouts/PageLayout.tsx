import type { ReactNode } from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <main className="max-w-7xl mx-auto mt-32">{children}</main>
      <Footer />
    </div>
  );
}
