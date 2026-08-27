import { FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiVercel,
  SiSupabase,
  SiPrisma,
  SiTrpc,
  SiZod,
  SiVitest,
  SiTurborepo,
  SiBun,
  SiRust,
  SiPython,
  SiGo,
  SiTestinglibrary,
} from "react-icons/si";

const tools = [
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
  { name: "Vercel", icon: SiVercel, color: "text-neutral-900" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
  { name: "tRPC", icon: SiTrpc, color: "text-[#2596BE]" },
  { name: "Zod", icon: SiZod, color: "text-[#3E67B1]" },
  { name: "Vitest", icon: SiVitest, color: "text-[#FCC72B]" },
  { name: "Playwright", icon: SiTestinglibrary, color: "text-[#45ba4b]" },
  { name: "Turborepo", icon: SiTurborepo, color: "text-[#EF4444]" },
  { name: "Bun", icon: SiBun, color: "text-amber-700" },
  { name: "Rust", icon: SiRust, color: "text-[#CE412B]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Go", icon: SiGo, color: "text-[#00ADD8]" },
];

export default function ToolsEcosystem() {
  return (
    <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:px-8 shadow-xs flex flex-col gap-4">
      <p className="text-xs font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase">
        TOOLS &amp; ECOSYSTEM
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.name}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100/80 hover:bg-neutral-200/90 text-neutral-700 hover:text-black transition-all duration-200 cursor-default hover:scale-105 hover:shadow-xs"
            >
              <Icon className={`w-3.5 h-3.5 ${tool.color} transition-transform duration-200 group-hover:scale-110`} />
              <span className="text-xs font-medium">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
