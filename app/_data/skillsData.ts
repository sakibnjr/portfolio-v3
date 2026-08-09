export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Laravel",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "JWT",
      "Vercel",
      "Render",
      "Railway",
    ],
  },
];
