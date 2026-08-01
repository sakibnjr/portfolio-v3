interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  highlights: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    period: "2020 – 2024",
    gpa: "3.72 / 4.00",
    highlights: [
      "Specialized in Software Engineering and Distributed Systems",
      "Completed capstone project on real-time collaborative web applications",
      "Active member of the Programming Club and Open Source Society",
      "Maintained Dean's List recognition for 3 consecutive semesters",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution: "Notre Dame College",
    location: "Dhaka, Bangladesh",
    period: "2017 – 2019",
    gpa: "5.00 / 5.00",
    highlights: [
      "Perfect GPA in Science stream with Mathematics & Physics concentration",
      "Merit scholarship recipient for academic excellence",
      "Led the college's technology and innovation club",
    ],
  },
];

export default function Education() {
  return (
    <section id="education">
      <header className="mb-20">
        <p className="uppercase tracking-widest text-blue-600 text-sm font-medium">
          Academic Background
        </p>
        <h2 className="text-5xl font-bold mt-4">Education</h2>
      </header>

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
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{edu.field}</h3>

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

            {/* Highlights */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <ul className="grid sm:grid-cols-2 gap-3">
                {edu.highlights.map((highlight, hi) => (
                  <li
                    key={hi}
                    className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
