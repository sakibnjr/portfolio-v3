import SectionHeader from "@/app/_components/SectionHeader";

interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: string;
}

const certifications: Certification[] = [
  {
    title: "Learn Git",
    issuer: "Boot.dev",
    date: "Jul 2026",
    credentialId: "53618d16-2c87-47c0-91e2-2e0e429615ac",
    credentialUrl: "https://www.boot.dev/certificates/53618d16-2c87-47c0-91e2-2e0e429615ac",
    category: "Tools",
  },
  {
    title: "Claude Code",
    issuer: "Master.dev (Formerly Frontend Masters)",
    date: "Jun 2026",
    credentialId: "fa9ff4b6fa-ONCeVpyzkJ",
    credentialUrl: "https://static.frontendmasters.com/ud/c/fa9ff4b6fa/ONCeVpyzkJ/claude-code-frontendmasters.pdf",
    category: "Tools",
  },
  {
    title: "JavaScript: From First Steps to Professional",
    issuer: "Frontend Masters",
    date: "Sep 2025",
    credentialId: "fa9ff4b6fa-FFUQWovrnh",
    credentialUrl: "https://static.frontendmasters.com/ud/c/fa9ff4b6fa/FFUQWovrnh/javascript-first-steps.pdf",
    category: "Programming",
  },
  {
    title: "Web Development Essentials",
    issuer: "Enhancing Digital Government & Economy Project",
    credentialId: "8260738110",
    credentialUrl: "https://training.edge.gov.bd/certificate-validation?certificate_no=EDGE-DSTS-106-2385-00007",
    category: "Frontend",
  },
  {
    title: "GitHub Version Control",
    issuer: "Meta",
    date: "Jan 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/D9E79QN9972X",
    category: "Tools",
  },
];

const categoryColors: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  Frontend: { bg: "bg-blue-50", text: "text-blue-600", dot: "bg-blue-500" },
  Design: { bg: "bg-indigo-50", text: "text-indigo-600", dot: "bg-indigo-500" },
  Cloud: { bg: "bg-violet-50", text: "text-violet-600", dot: "bg-violet-500" },
  Programming: { bg: "bg-blue-50", text: "text-blue-600", dot: "bg-blue-500" },
  Tools: { bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-500" },
  "Computer Science": {
    bg: "bg-violet-50",
    text: "text-violet-600",
    dot: "bg-violet-500",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className=" bg-gray-50/50">
      <SectionHeader title="Certifications" subTitle="Credentials" count="02" />

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
                {cert.date && <span className="text-xs text-gray-400">{cert.date}</span>}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 leading-snug flex-1">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm font-medium text-gray-500">{cert.issuer}</p>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                {cert.credentialId && (
                  <span
                    className="text-xs text-gray-400 font-mono truncate max-w-[140px] sm:max-w-[160px]"
                    title={cert.credentialId}
                  >
                    ID: {cert.credentialId}
                  </span>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 shrink-0"
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
