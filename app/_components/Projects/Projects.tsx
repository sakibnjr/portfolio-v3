import Link from "next/link";
import SectionHeader from "@/app/_components/SectionHeader";
import ProjectAccordion from "@/app/_components/Projects/ProjectAccordion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16"
    >
      <SectionHeader
        badge="PROJECTS"
        title="Things I've"
        highlightedTitle="Built"
        description="A selection of production products, open source tools, and side projects."
      />

      <div className="flex flex-col gap-8">
        <ProjectAccordion />

        <div className="flex justify-center pt-2">
          <Link
            href="https://github.com/sakibnjr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-400 bg-white hover:bg-neutral-50 text-neutral-800 text-sm font-medium transition-all shadow-xs"
          >
            <span>View all on GitHub</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
