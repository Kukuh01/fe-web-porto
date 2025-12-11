import SectionLayout from "../../layouts/SectionLayout";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <SectionLayout title="My Work" description="Recent Projects">
      <div className="flex justify-between">
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
      </div>
    </SectionLayout>
  );
}
