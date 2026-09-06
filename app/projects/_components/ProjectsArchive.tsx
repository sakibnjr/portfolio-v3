"use client";

import { useMemo, useState } from "react";
import { type Project } from "@/app/_types";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsFilterBar, { type TabType } from "./ProjectsFilterBar";
import ProjectArchiveCard from "./ProjectArchiveCard";
import ProjectsEmptyState from "./ProjectsEmptyState";

interface ProjectsArchiveProps {
  projects: Project[];
}

export default function ProjectsArchive({ projects }: ProjectsArchiveProps) {
  const [activeTab, setActiveTab] = useState<TabType>("other");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured === true),
    [projects]
  );

  const otherProjects = useMemo(
    () => projects.filter((p) => !p.featured),
    [projects]
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [projects]);

  const tabProjects = useMemo(() => {
    if (activeTab === "featured") return featuredProjects;
    if (activeTab === "other") return otherProjects;
    return projects;
  }, [activeTab, featuredProjects, otherProjects, projects]);

  const filteredProjects = useMemo(() => {
    return tabProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = project.title.toLowerCase().includes(q);
      const inTagline = project.tagline?.toLowerCase().includes(q) || false;
      const inDescription = project.description?.toLowerCase().includes(q) || false;
      const inTags = project.tags?.some((t) => t.toLowerCase().includes(q)) || false;
      const inCategory = project.category?.toLowerCase().includes(q) || false;

      return inTitle || inTagline || inDescription || inTags || inCategory;
    });
  }, [tabProjects, selectedCategory, searchQuery]);

  const resetFilters = () => {
    setActiveTab("other");
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col gap-10">
      <ProjectsHeader />

      <ProjectsFilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        otherCount={otherProjects.length}
        allCount={projects.length}
        featuredCount={featuredProjects.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        totalFiltered={filteredProjects.length}
        totalInTab={tabProjects.length}
        onResetFilters={resetFilters}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => (
            <ProjectArchiveCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>
      ) : (
        <ProjectsEmptyState onReset={resetFilters} />
      )}
    </div>
  );
}
