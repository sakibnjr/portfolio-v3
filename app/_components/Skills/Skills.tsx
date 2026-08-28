import SectionHeader from "@/app/_components/SectionHeader";
import FrontendCard from "@/app/_components/Skills/FrontendCard";
import StreakCard from "@/app/_components/Skills/StreakCard";
import HeroCraftCard from "@/app/_components/Skills/HeroCraftCard";
import WhatIBuildCard from "@/app/_components/Skills/WhatIBuildCard";
import BackendCard from "@/app/_components/Skills/BackendCard";
import ToolsMatrixCard from "@/app/_components/Skills/ToolsMatrixCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16"
    >
      <SectionHeader
        badge="SKILLS"
        title="Technical"
        highlightedTitle="Arsenal"
        description="Proficiency across the full stack — from pixels to infrastructure."
      />

      {/* Asymmetric Bento Grid (12-Column Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        {/* Left Column: Frontend Architecture (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col">
          <FrontendCard />
        </div>

        {/* Center Column: Focal Hero + Live GitHub Streak (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <HeroCraftCard />
          <StreakCard />
        </div>

        {/* Right Column: Iconography Matrix + What I Build (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <ToolsMatrixCard />
          <WhatIBuildCard />
        </div>

        {/* Full Width Bottom Card: Backend, DB & Cloud (col-span-12) */}
        <div className="md:col-span-2 lg:col-span-12">
          <BackendCard />
        </div>
      </div>
    </section>
  );
}
