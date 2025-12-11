import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/fragments/Hero";
import IntroductionCard from "../components/fragments/IntroductionCard";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import ArtilceSection from "../components/fragments/Article/ArticleSection";

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
    </PageLayout>
  );
}
