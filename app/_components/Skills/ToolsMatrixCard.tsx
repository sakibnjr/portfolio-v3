import { FaGitAlt, FaFigma, FaJava } from "react-icons/fa";
import { TbBrandAdobeXd, TbBrandOpenai } from "react-icons/tb";
import {
  SiVercel,
  SiSupabase,
  SiPrisma,
  SiZod,
  SiPython,
  SiGooglegemini,
  SiClaude,
  SiRailway,
  SiRender,
  SiKotlin,
} from "react-icons/si";

const toolIcons = [
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
  { name: "Adobe XD", icon: TbBrandAdobeXd, color: "text-[#FF61F6]" },
  { name: "ChatGPT", icon: TbBrandOpenai, color: "text-[#10A37F]" },
  { name: "Gemini", icon: SiGooglegemini, color: "text-[#4E82EE]" },
  { name: "Claude", icon: SiClaude, color: "text-[#D97706]" },
  { name: "Vercel", icon: SiVercel, color: "text-neutral-900" },
  { name: "Railway", icon: SiRailway, color: "text-neutral-800" },
  { name: "Render", icon: SiRender, color: "text-[#46E3B7]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
  { name: "Zod", icon: SiZod, color: "text-[#3E67B1]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Java", icon: FaJava, color: "text-[#E76F00]" },
  { name: "Kotlin", icon: SiKotlin, color: "text-[#7F52FF]" },
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
          {toolIcons.map((tool) => {
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
