import Hero from "../components/fragments/Hero";
import ProjectCard from "../components/fragments/Project/ProjectCard";
import PageLayout from "../components/layouts/PageLayout";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Hero>
        <div></div>
      </Hero>
      <div className="flex justify-between mb-14 flex-wrap">
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
      </div>
    </PageLayout>
  );
}
