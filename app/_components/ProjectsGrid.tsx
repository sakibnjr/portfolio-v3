"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "@/app/_components/ProjectModal";
import { ProjectItem } from "@/app/_data/projectsData";
import { ArrowUpRight } from "lucide-react";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-3xl bg-white border border-gray-200 overflow-hidden flex flex-col hover:border-gray-400 hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative w-full h-60 overflow-hidden bg-gray-100 border-b border-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                <span className="w-9 h-9 rounded-full bg-black/80 text-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Card Content: Title & Tech Stack */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
