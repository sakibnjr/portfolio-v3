import SectionHeader from "@/app/_components/SectionHeader";
import { skillsData } from "@/app/_data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="space-y-12">
      <SectionHeader title="What I Use" subTitle="Skills" count="05" />

      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 hover:border-gray-400 hover:shadow-xl transition-all duration-300 flex flex-col space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
