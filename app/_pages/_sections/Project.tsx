import SectionHeader from "@/app/_components/SectionHeader";
import ProjectsGrid from "@/app/_components/ProjectsGrid";
import { projectsData } from "@/app/_data/projectsData";

export default function Project() {
  return (
    <section id="projects" className="space-y-12">
      <SectionHeader title="Featured Work" subTitle="Projects" count="03" />

      <ProjectsGrid projects={projectsData} />
    </section>
  );
}
