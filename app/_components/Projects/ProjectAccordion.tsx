"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ProjectCard from "@/app/_components/Projects/ProjectCard";
import SectionHeader from "@/app/_components/SectionHeader";
import { type Project } from "@/app/_types";

export type { Project };

interface ProjectAccordionProps {
  projects: Project[] | null;
}

const ITEMS_PER_PAGE = 5;

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setActiveIndex(0);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      setActiveIndex(0);
    }
  };

  return (
    <div className="flex flex-col">
      <SectionHeader
        badge="PROJECTS"
        title="Things I've"
        highlightedTitle="Built"
        description="A selection of production products, open source tools, and side projects."
        action={
          totalPages > 1 ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-500">
                <span className="text-neutral-900 font-bold">
                  {String(currentPage + 1).padStart(2, "0")}
                </span>
                <span className="mx-1 text-neutral-300">/</span>
                <span>{String(totalPages).padStart(2, "0")}</span>
              </span>

              <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-100/90 border border-neutral-200/80">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  aria-label="Previous projects"
                  className="p-2 rounded-full text-neutral-700 hover:text-neutral-950 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-neutral-700 disabled:cursor-not-allowed transition-all duration-200 shadow-xs disabled:shadow-none cursor-pointer"
                >
                  <HiChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                  aria-label="Next projects"
                  className="p-2 rounded-full text-neutral-700 hover:text-neutral-950 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-neutral-700 disabled:cursor-not-allowed transition-all duration-200 shadow-xs disabled:shadow-none cursor-pointer"
                >
                  <HiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : null
        }
      />

      <div className="flex flex-col gap-6">
        {/* Cards: Vertical full-stack on mobile, expanding horizontal accordion on desktop */}
        <div className="grid grid-cols-1 gap-4 md:flex md:flex-row md:gap-3 lg:gap-4 overflow-hidden w-full">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={startIndex + index}
              isActive={activeIndex === index}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Desktop Pagination Dots */}
        <div className="hidden md:flex items-center justify-center gap-2 pt-2">
          {currentProjects.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to project ${startIndex + index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === index
                  ? "w-6 h-1.5 bg-neutral-900"
                  : "w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
