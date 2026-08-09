export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "softvence-agency",
    role: "Frontend Developer",
    company: "Softvence Agency",
    period: "November 2025 – January 2026",
    highlights: [
      "Building and maintaining responsive web applications.",
      "Working with Wix, JavaScript, React.js and Tailwind CSS.",
    ],
    technologies: ["Wix", "JavaScript", "React.js", "Tailwind CSS"],
  },
];
