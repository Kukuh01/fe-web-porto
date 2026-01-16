import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/fragments/Hero";
import IntroductionCard from "../components/fragments/IntroductionCard";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import ArtilceSection from "../components/fragments/Article/ArticleSection";
import ContactSection from "../components/fragments/Contact/ContactSection";
import useScrollContact from "../../hooks/useScrollContact";
import ShowMore from "../components/elements/Button/ShowMore";

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
      <div className="flex justify-center">
        <ShowMore />
      </div>
      {/* Article Section */}
      <ArtilceSection />f
      <div className="flex justify-center">
        <ShowMore />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
