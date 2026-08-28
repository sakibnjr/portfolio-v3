import { LuArrowUpRight } from "react-icons/lu";

const buildItems = [
  {
    title: "Interactive websites",
    tags: ["Three.js", "Motion"],
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "SaaS products",
    tags: ["Stripe", "Auth"],
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M8 1 C8 5 11 8 15 8 C11 8 8 11 8 15 C8 11 5 8 1 8 C5 8 8 5 8 1 Z" />
      </svg>
    ),
  },
  {
    title: "Dashboards",
    tags: ["Analytics", "Charts"],
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Full-stack apps",
    tags: ["Next.js", "Prisma"],
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "REST APIs",
    tags: ["Node", "WebSockets"],
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M8 2 L14 8 L8 14 L2 8 Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Developer tools",
    tags: ["CLI", "Scripts"],
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M8 1 C8 5 11 8 15 8 C11 8 8 11 8 15 C8 11 5 8 1 8 C5 8 8 5 8 1 Z" />
      </svg>
    ),
  },
];

export default function WhatIBuildCard() {
  return (
    <div className="h-full bg-[#f0f9ff]/70 border border-sky-200/70 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-sky-700/80 font-medium">03 // SCOPE</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1.5">
          What I Build
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
          Specialized digital products, tools, and interfaces crafted with care.
        </p>

        <div className="flex flex-col gap-2">
          {buildItems.map((item) => (
            <div
              key={item.title}
              className="group flex items-center justify-between p-2 rounded-xl bg-white/80 hover:bg-white border border-sky-100/70 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-sky-500 group-hover:text-sky-700 group-hover:scale-115 transition-all duration-200 shrink-0 flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="text-xs text-neutral-800 group-hover:text-neutral-950 font-medium transition-colors">
                  {item.title}
                </span>
              </div>

              <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200/60"
                  >
                    {t}
                  </span>
                ))}
                <LuArrowUpRight className="w-3 h-3 text-sky-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
