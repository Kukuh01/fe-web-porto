import ShowMore from "../../elements/Button/ShowMore";
import SectionLayout from "../../layouts/SectionLayout";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <SectionLayout title="My Work" description="Recent Projects">
      <div className="flex justify-between mb-14">
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
        <ProjectCard title="Profile Web SLB Talitakum" status="Deployed" />
      </div>
      <div className="flex justify-center">
        <ShowMore />
      </div>
    </SectionLayout>
  );
}
