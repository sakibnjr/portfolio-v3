import SectionHeader from "@/app/_components/SectionHeader";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  gpa: string;
}

const educationData: EducationItem[] = [
  {
    period: "2021 — 2025",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Daffodil International University",
    gpa: "CGPA 3.50 / 4.00",
  },
  {
    period: "2018 — 2020",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Joypurhat Govt. College",
    gpa: "GPA 4.83 / 5.00",
  },
  {
    period: "2016 — 2018",
    degree: "Secondary School Certificate (SSC)",
    institution: "R.B Govt. High School, Joypurhat",
    gpa: "GPA 5.00 / 5.00",
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
        description="Where curiosity became capability. Strong theoretical grounding in CS fundamentals."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-[3.75rem] left-[15%] right-[15%] h-[2px] bg-emerald-200 z-0"
        />

        {educationData.map((item) => (
          <article key={item.degree} className="flex flex-col relative z-10">
            <div className="flex flex-col items-center mb-6">
              <span className="text-xs font-mono font-medium text-emerald-600 mb-2">
                {item.period}
              </span>
              <div className="w-8 h-8 rounded-full border-2 border-emerald-400 bg-white flex items-center justify-center shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="flex-1 bg-white border border-neutral-200/80 rounded-3xl p-7 shadow-lg shadow-neutral-100/60 flex flex-col justify-between gap-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-neutral-900 text-lg leading-snug">
                  {item.degree}
                </h3>
                <p className="text-emerald-600 font-semibold text-sm">
                  {item.institution}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                  {item.gpa}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
