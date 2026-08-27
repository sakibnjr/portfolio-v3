
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";

const frontendSkills = [
  {
    name: "React",
    icon: FaReact,
    iconColor: "text-cyan-500",
    tags: ["Context API", "Redux Toolkit", "React Query", "Advanced Patterns"],
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    iconColor: "text-neutral-900",
    tags: ["SSR", "SSG", "ISR", "PPR"],
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-blue-500",
    tags: ["Generics", "Utility Types", "Zod"],
  },
  {
    name: "Motion",
    icon: SiFramer,
    iconColor: "text-pink-500",
    tags: ["Variants", "Gestures", "Layout Animations"],
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "text-sky-500",
    tags: ["v4", "Design Systems", "Tokens"],
  },
];

export default function FrontendCard() {
  return (
    <div className="h-full bg-[#f4faf7] border border-emerald-200/70 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-emerald-700/80 font-medium">01 // FRONTEND</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1.5">
          Frontend
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-8">
          Crafting interfaces that feel fast, accessible, and alive.
        </p>

        <div className="flex flex-col gap-5">
          {frontendSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <Icon className={`w-4 h-4 ${skill.iconColor}`} />
                  <span>{skill.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/90 border border-emerald-100/80 text-[11px] font-mono text-neutral-700 shadow-2xs hover:bg-white hover:text-neutral-900 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
