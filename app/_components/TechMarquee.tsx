"use client";

import Image from "next/image";

type Tech = {
  name: string;
  icon: string; 
  color: string; 
};

const TECH_STACK: Tech[] = [
  { name: "Next.js",    icon: "nextdotjs",   color: "#000000" },
  { name: "React",      icon: "react",       color: "#61DAFB" },
  { name: "TypeScript", icon: "typescript",  color: "#3178C6" },
  { name: "Tailwind",   icon: "tailwindcss", color: "#06B6D4" },
  { name: "Node.js",    icon: "nodedotjs",   color: "#339933" },
  { name: "Supabase",   icon: "supabase",    color: "#3ECF8E" },
  { name: "PostgreSQL", icon: "postgresql",  color: "#4169E1" },
  { name: "Figma",      icon: "figma",       color: "#F24E1E" },
  { name: "Git",        icon: "git",         color: "#F05032" },
  { name: "Vercel",     icon: "vercel",      color: "#000000" },
  { name: "Python",     icon: "python",      color: "#3776AB" },
  { name: "Docker",     icon: "docker",      color: "#2496ED" },
];

const ITEMS = [...TECH_STACK, ...TECH_STACK];

export function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper" aria-label="Tech stack" role="list">
      <div className="tech-marquee-track">
        {ITEMS.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="tech-marquee-item"
            role="listitem"
            title={tech.name}
          >
            <Image
              src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace("#", "")}`}
              alt={tech.name}
              width={20}
              height={20}
              unoptimized
            />
            <span className="tech-marquee-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
