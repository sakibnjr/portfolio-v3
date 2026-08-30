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
        title="Skills &"
        highlightedTitle="Technologies"
        description="Technologies, frameworks, and tools I work with across frontend, backend, and DevOps."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
        <div className="lg:col-span-7 flex flex-col">
          <HeroCraftCard />
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <ToolsMatrixCard />
        </div>

        <div className="lg:col-span-4 flex flex-col">
          <FrontendCard />
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <StreakCard />
        </div>

        <div className="lg:col-span-3 flex flex-col">
          <WhatIBuildCard />
        </div>

        <div className="md:col-span-2 lg:col-span-12 flex flex-col">
          <BackendCard />
        </div>
      </div>
    </section>
  );
}
