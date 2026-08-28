import SectionHeader from "@/app/_components/SectionHeader";
import EducationCard from "@/app/_components/Education/EducationCard";
import { educationData } from "@/app/_components/Education/educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16"
    >
      <SectionHeader
        badge="EDUCATION"
        title="Academic"
        highlightedTitle="Foundation"
        description="Where curiosity became capability. Strong theoretical grounding in computer science and engineering fundamentals."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
