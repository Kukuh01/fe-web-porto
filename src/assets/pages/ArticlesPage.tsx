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
        <div></div>
      </Hero>
      <ArtilceSection />
      <Pagination />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
