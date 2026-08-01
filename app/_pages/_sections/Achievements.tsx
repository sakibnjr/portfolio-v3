interface Achievement {
  title: string;
  description: string;
  year: string;
  category: string;
  icon: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  {
    title: "National Hackathon – 1st Place",
    description:
      "Won first place among 200+ teams at the National ICT Hackathon, building an AI-powered assistive communication tool for non-verbal individuals.",
    year: "2024",
    category: "Competition",
    icon: "🏆",
    highlight: true,
  },
  {
    title: "Top 1% GitHub Contributor",
    description:
      "Recognized as a top contributor in the open source community with 500+ contributions in the past year across 30+ repositories.",
    year: "2024",
    category: "Open Source",
    icon: "⭐",
    highlight: true,
  },
  {
    title: "Speaker – DhakaJS Conference",
    description:
      "Delivered a talk on 'Building Accessible Web Applications' to an audience of 300+ developers at Bangladesh's largest JavaScript conference.",
    year: "2023",
    category: "Speaking",
    icon: "🎤",
  },
  {
    title: "University Programming Contest – 2nd Place",
    description:
      "Secured second place in an inter-university competitive programming contest, solving 8 out of 10 problems in the given time frame.",
    year: "2023",
    category: "Competition",
    icon: "🥈",
  },
  {
    title: "Dean's List – 3 Consecutive Semesters",
    description:
      "Maintained a CGPA above 3.7 and was recognized on the Dean's List for outstanding academic performance across three semesters.",
    year: "2022 – 2023",
    category: "Academic",
    icon: "🎓",
  },
  {
    title: "Open Source Project – 800+ GitHub Stars",
    description:
      "Authored and maintained a React utility library that gained 800+ stars and was adopted by teams in 12+ countries.",
    year: "2023",
    category: "Open Source",
    icon: "🚀",
  },
];

const categoryColor: Record<string, { bg: string; text: string }> = {
  Competition:   { bg: "bg-amber-50",  text: "text-amber-600" },
  "Open Source": { bg: "bg-green-50",  text: "text-green-600" },
  Speaking:      { bg: "bg-purple-50", text: "text-purple-600" },
  Academic:      { bg: "bg-blue-50",   text: "text-blue-600" },
};

export default function Achievements() {
  return (
    <section id="achievements" >
      <header className="mb-20">
          <p className="uppercase tracking-widest text-blue-600 text-sm font-medium">
            Milestones
          </p>
          <h2 className="text-5xl font-bold mt-4">Achievements</h2>
         
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const colors = categoryColor[item.category] ?? {
              bg: "bg-gray-50",
              text: "text-gray-600",
            };

            return (
              <div
                key={index}
                className={`group relative flex flex-col gap-5 rounded-3xl border p-8 transition-all duration-500 hover:shadow-xl cursor-default
                  ${
                    item.highlight
                      ? "border-blue-200 bg-gradient-to-br from-blue-50/60 to-white hover:shadow-blue-100"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-gray-100"
                  }`}
              >
                {/* Icon + year */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl select-none">{item.icon}</span>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>

                {/* Category */}
                <span
                  className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}
                >
                  {item.category}
                </span>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlight accent line */}
                {item.highlight && (
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-60" />
                )}
              </div>
            );
          })}
        </div>
    </section>
  );
}
