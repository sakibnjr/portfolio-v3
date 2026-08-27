"use client";

import { motion } from "motion/react";

interface Skill {
  name: string;
  dotColor: string;
}

const skills: Skill[] = [
  { name: "React", dotColor: "bg-cyan-400" },
  { name: "Next.js", dotColor: "bg-black" },
  { name: "TypeScript", dotColor: "bg-blue-500" },
  { name: "Node.js", dotColor: "bg-green-500" },
  { name: "Supabase", dotColor: "bg-emerald-400" },
];

export default function SkillMarquee() {
  const marqueeSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.ul
        className="flex items-center gap-2.5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
      >
        {marqueeSkills.map((skill, index) => (
          <li
            key={`${skill.name}-${index}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-700 shadow-2xs shrink-0"
          >
            <span className={`w-2 h-2 rounded-full ${skill.dotColor}`} />
            {skill.name}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
