import SectionHeader from "@/app/_components/SectionHeader";
import PublicationCard from "@/app/_components/Publications/PublicationCard";
import { publicationsData } from "@/app/_components/Publications/publicationsData";

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16"
    >
      <SectionHeader
        badge="PUBLICATIONS"
        title="Research &"
        highlightedTitle="Publications"
        description="Scientific research contributions in deep learning, medical imaging, and explainable artificial intelligence (XAI)."
      />

      <div className="flex flex-col gap-6">
        {publicationsData.map((item) => (
          <PublicationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
