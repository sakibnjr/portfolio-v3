interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  category: string;
}

const certifications: Certification[] = [
  {
    title: "Meta Front-End Developer Professional",
    issuer: "Meta",
    date: "Dec 2023",
    credentialId: "ABCD-1234",
    credentialUrl: "#",
    category: "Frontend",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "Sep 2023",
    credentialId: "GUX-5678",
    credentialUrl: "#",
    category: "Design",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2023",
    credentialId: "AWS-9012",
    credentialUrl: "#",
    category: "Cloud",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Mar 2023",
    credentialUrl: "#",
    category: "Programming",
  },
  {
    title: "React – The Complete Guide",
    issuer: "Udemy",
    date: "Jan 2023",
    credentialUrl: "#",
    category: "Frontend",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard / edX",
    date: "Aug 2022",
    credentialUrl: "#",
    category: "Computer Science",
  },
];

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  Frontend:            { bg: "bg-blue-50",   text: "text-blue-600",   dot: "bg-blue-500" },
  Design:              { bg: "bg-indigo-50", text: "text-indigo-600", dot: "bg-indigo-500" },
  Cloud:               { bg: "bg-violet-50", text: "text-violet-600", dot: "bg-violet-500" },
  Programming:         { bg: "bg-blue-50",   text: "text-blue-600",   dot: "bg-blue-500" },
  "Computer Science":  { bg: "bg-violet-50", text: "text-violet-600", dot: "bg-violet-500" },
};

export default function Certifications() {
  return (
    <section id="certifications" className=" bg-gray-50/50">
      <header className="mb-20">
          <p className="uppercase tracking-widest text-blue-600 text-sm font-medium">
            Credentials
          </p>
          <h2 className="text-5xl font-bold mt-4">Certifications</h2>
         
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const colors = categoryColors[cert.category] ?? {
              bg: "bg-gray-50",
              text: "text-gray-600",
              dot: "bg-gray-400",
            };

            return (
              <div
                key={index}
                className="relative group rounded-3xl border border-gray-200 bg-white p-8 flex flex-col gap-5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 cursor-default"
              >
                {/* Category badge + date */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    {cert.category}
                  </span>
                  <span className="text-xs text-gray-400">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug flex-1">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-medium text-gray-500">{cert.issuer}</p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {cert.credentialId && (
                    <span className="text-xs text-gray-400 font-mono">
                      ID: {cert.credentialId}
                    </span>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                    >
                      View Credential
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
}
