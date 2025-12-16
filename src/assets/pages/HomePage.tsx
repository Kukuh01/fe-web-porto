import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/fragments/Hero";
import IntroductionCard from "../components/fragments/IntroductionCard";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import ArtilceSection from "../components/fragments/Article/ArticleSection";
import ContactSection from "../components/fragments/Contact/ContactSection";
import useScrollContact from "../../hooks/useScrollContact";

export default function HomePage() {
  const { contactRef, handleContactClick } = useScrollContact();

  return (
    <PageLayout onContactClick={handleContactClick}>
      {/* Start Hero */}
      <Hero>
        <IntroductionCard />
      </Hero>
      {/* End Hero */}
      {/* Project Section */}
      <ProjectSection />
      {/* Article Section */}
      <ArtilceSection />f
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
