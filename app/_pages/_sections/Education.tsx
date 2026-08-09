import SectionHeader from "@/app/_components/SectionHeader";

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Sc.",
    field: "Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2021 – 2025",
    gpa: "CGPA: 3.50",
  },
  {
    degree: "HSC",
    field: "Higher Secondary Certificate",
    institution: "Joypurhat Govt. College",
    location: "Joypurhat, Bangladesh",
    period: "2020",
    gpa: "GPA: 4.83",
  },
  {
    degree: "SSC",
    field: "Secondary School Certificate",
    institution: "R.B Govt. High School",
    location: "Joypurhat, Bangladesh",
    period: "2018",
    gpa: "GPA: 5.00",
  },
];

export default function Education() {
  return (
    <section id="education">
      <SectionHeader
        count="01"
        title="Education"
        subTitle="Academic Background"
      />

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="rounded-3xl border border-gray-200 bg-white p-10
                       hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50
                       transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {/* Left: degree info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    {edu.degree}
                  </span>
                  {edu.gpa && (
                    <span className="inline-block bg-gray-50 text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
                      {edu.gpa}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {edu.field}
                </h3>

                <p className="text-lg font-medium text-gray-700">
                  {edu.institution}
                </p>

                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
                  {edu.location}
                </p>
              </div>

              {/* Right: period */}
              <div className="lg:text-right shrink-0">
                <span className="text-sm font-semibold text-gray-500 tracking-wide bg-gray-50 border border-gray-200 px-4 py-2 rounded-full">
                  {edu.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
