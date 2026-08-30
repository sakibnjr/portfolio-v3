"use client";

import { useState } from "react";
import ProjectCard from "@/app/_components/Projects/ProjectCard";
import { type Project } from "@/app/_types";

export type { Project };

interface ProjectAccordionProps {
  projects: Project[] | null;
}

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Cards: Vertical full-stack on mobile, expanding horizontal accordion on desktop */}
      <div className="grid grid-cols-1 gap-4 md:flex md:flex-row md:gap-3 lg:gap-4 overflow-hidden w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isActive={activeIndex === index}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Desktop Pagination Dots */}
      <div className="hidden md:flex items-center justify-center gap-2 pt-2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === index
                ? "w-6 h-1.5 bg-neutral-900"
                : "w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
