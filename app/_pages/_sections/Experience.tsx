import SectionHeader from "@/app/_components/SectionHeader";
import { experienceData } from "@/app/_data/experienceData";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <SectionHeader title="Career Timeline" subTitle="Experience" count="04" />

      <div className="space-y-8">
        {experienceData.map((item) => (
          <article
            key={item.id}
            className="group relative rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 hover:border-gray-400 hover:shadow-xl transition-all duration-300 space-y-6"
          >
            {/* Header: Role, Company & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {item.role}
                  </h3>
                </div>
                <p className="text-base font-semibold text-gray-600">
                  {item.company}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-800 border border-gray-200 self-start sm:self-center">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                {item.period}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-2.5">
              {item.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Badges */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
