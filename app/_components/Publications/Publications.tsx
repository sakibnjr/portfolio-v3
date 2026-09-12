import SectionHeader from "@/app/_components/SectionHeader";
import PublicationCard from "@/app/_components/Publications/PublicationCard";
import { publicationsData } from "@/app/_components/Publications/publicationsData";

export default function Publications() {
  return (
    <section
      id="publications"
      className="w-full py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16 border-b border-neutral-300"
    >
      <div className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0">
        <SectionHeader
          title="Research &"
          highlightedTitle="Publications"
          description="Research papers and articles exploring artificial intelligence and deep learning."
        />

        <div className="flex flex-col gap-6">
          {publicationsData.map((item) => (
            <PublicationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
