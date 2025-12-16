import useScrollContact from "../../hooks/useScrollContact";
import ContactSection from "../components/fragments/Contact/ContactSection";
import Hero from "../components/fragments/Hero";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import PageLayout from "../components/layouts/PageLayout";

export default function ProjectsPage() {
  const { contactRef, handleContactClick } = useScrollContact();

  return (
    <PageLayout onContactClick={handleContactClick}>
      <Hero>
        <div></div>
      </Hero>
      <ProjectSection />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
