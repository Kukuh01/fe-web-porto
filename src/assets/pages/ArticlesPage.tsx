import useScrollContact from "../../hooks/useScrollContact";
import ArtilceSection from "../components/fragments/Article/ArticleSection";
import ContactSection from "../components/fragments/Contact/ContactSection";
import Hero from "../components/fragments/Hero";
import Pagination from "../components/fragments/Pagination/Pagination";
import PageLayout from "../components/layouts/PageLayout";

export default function ArtilcesPage() {
  const { contactRef, handleContactClick } = useScrollContact();
  return (
    <PageLayout onContactClick={handleContactClick}>
      <Hero>
        <div className="max-w-xl w-full mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-amber-50">Articles</h1>

          <input
            type="text"
            placeholder="Cari artikel..."
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-600 outline-none text-amber-50"
          />
        </div>
      </Hero>
      <ArtilceSection />
      <Pagination />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
