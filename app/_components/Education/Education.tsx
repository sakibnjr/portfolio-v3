import SectionHeader from "@/app/_components/SectionHeader";
import EducationCard from "@/app/_components/Education/EducationCard";
import { educationData } from "@/app/_components/Education/educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16 border-b border-neutral-300"
    >
      <div className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0">
        <SectionHeader
          title="Academic"
          highlightedTitle="Foundation"
          description="Where my journey started, learning computer science fundamentals and problem solving."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
