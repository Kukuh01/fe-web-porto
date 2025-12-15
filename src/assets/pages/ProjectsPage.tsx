import Hero from "../components/fragments/Hero";
import ProjectSection from "../components/fragments/Project/ProjectSection";
import PageLayout from "../components/layouts/PageLayout";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Hero>
        <div></div>
      </Hero>
      <ProjectSection />
    </PageLayout>
  );
}
