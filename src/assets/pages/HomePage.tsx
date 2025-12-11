import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/fragments/Hero";
import IntroductionCard from "../components/fragments/IntroductionCard";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import ArtilceSection from "../components/fragments/Article/ArticleSection";
import ContactSection from "../components/fragments/Contact/ContactSection";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Start Hero */}
      <Hero>
        <IntroductionCard />
      </Hero>
      {/* End Hero */}

      {/* Project Section */}
      <ProjectSection />

      {/* Article Section */}
      <ArtilceSection />

      <ContactSection />
    </PageLayout>
  );
}
