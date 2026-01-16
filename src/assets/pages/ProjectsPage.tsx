import useScrollContact from "../../hooks/useScrollContact";
import HeroCaraousel from "../components/fragments/Carousel/HeroCaraousel";
import ContactSection from "../components/fragments/Contact/ContactSection";
import Hero from "../components/fragments/Hero";
import Pagination from "../components/fragments/Pagination/Pagination";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import PageLayout from "../components/layouts/PageLayout";

export default function ProjectsPage() {
  const { contactRef, handleContactClick } = useScrollContact();

  return (
    <PageLayout onContactClick={handleContactClick}>
      <Hero>
        <HeroCaraousel />
      </Hero>
      <ProjectSection />
      <Pagination />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
