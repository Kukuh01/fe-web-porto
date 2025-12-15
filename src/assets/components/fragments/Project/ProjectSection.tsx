import { useEffect, useState } from "react";
import ShowMore from "../../elements/Button/ShowMore";
import SectionLayout from "../../layouts/SectionLayout";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../../../types/type";
import { getProjects } from "../../../../services/projectService";

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <SectionLayout title="My Work" description="Recent Projects">
      <div className="flex justify-between mb-14">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard
            image={project.imageUrl}
            title={project.title}
            status={project.status}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ShowMore />
      </div>
    </SectionLayout>
  );
}
