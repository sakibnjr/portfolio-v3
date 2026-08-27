import { FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiVercel,
  SiSupabase,
  SiPrisma,
  SiTrpc,
  SiZod,
  SiVitest,
  SiTestinglibrary,
  SiTurborepo,
  SiBun,
  SiRust,
  SiPython,
  SiGo,
} from "react-icons/si";

const toolIcons = [
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

export default function ToolsMatrixCard() {
  return (
    <div className="bg-[#f8f9fe] border border-indigo-100/90 rounded-[2rem] p-7 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-200">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-indigo-700/80 font-medium">04 // TOOLS</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1.5">
          Developer Toolbox
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
          Modern utilities and runtime ecosystem powering the daily workflow.
        </p>

        <div className="grid grid-cols-4 gap-2">
          {toolIcons.slice(0, 12).map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center p-2 rounded-xl bg-white/90 hover:bg-white border border-indigo-100/70 shadow-2xs hover:shadow-xs transition-all duration-200 hover:scale-105 cursor-default"
              >
                <Icon className={`w-4 h-4 ${tool.color} transition-transform duration-200 group-hover:scale-115`} />
                <span className="text-[9px] font-mono text-neutral-600 mt-1 truncate max-w-full font-medium">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
