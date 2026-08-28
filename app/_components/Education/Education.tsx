import {
  LuGraduationCap,
  LuSchool,
  LuAward,
  LuMapPin,
  LuCalendar,
} from "react-icons/lu";
import SectionHeader from "@/app/_components/SectionHeader";

interface EducationItem {
  id: string;
  badge: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  status?: string;
  featured?: boolean;
  icon: typeof LuGraduationCap;
}

const educationData: EducationItem[] = [
  {
    id: "bsc",
    badge: "01 // UNDERGRADUATE",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2021 — 2025",
    gpa: "CGPA 3.50 / 4.00",
    status: "Graduated",
    featured: true,
    icon: LuGraduationCap,
  },
  {
    id: "hsc",
    badge: "02 // HIGHER SECONDARY",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Joypurhat Govt. College",
    location: "Joypurhat, Bangladesh",
    period: "2018 — 2020",
    gpa: "GPA 4.83 / 5.00",
    status: "Science",
    icon: LuSchool,
  },
  {
    id: "ssc",
    badge: "03 // SECONDARY SCHOOL",
    degree: "Secondary School Certificate (SSC)",
    institution: "R.B Govt. High School",
    location: "Joypurhat, Bangladesh",
    period: "2016 — 2018",
    gpa: "GPA 5.00 / 5.00",
    status: "Science",
    icon: LuAward,
  },
];

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
        {educationData.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className={`group relative rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between gap-8 transition-all duration-300 hover:-translate-y-1.5 ${
                item.featured
                  ? "bg-gradient-to-b from-[#f2fbf7] to-white border-2 border-emerald-300/80 shadow-md shadow-emerald-500/5 hover:shadow-xl hover:border-emerald-400"
                  : "bg-white border border-neutral-200/80 shadow-xs hover:shadow-lg hover:border-neutral-300"
              }`}
            >
              <div>
                {/* Header: Icon + Period Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                      item.featured
                        ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                        : "bg-neutral-100 text-neutral-800 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 text-xs font-mono font-medium text-neutral-600 shadow-2xs">
                    <LuCalendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Degree and Institution */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono font-medium text-emerald-700 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 leading-snug group-hover:text-black">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-700">
                    {item.institution}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-neutral-500 font-mono mt-0.5">
                    <LuMapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Result Pill */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">Result</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item.gpa}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
