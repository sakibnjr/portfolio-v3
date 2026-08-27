import { LuServer, LuDatabase, LuShieldCheck } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiCloudinary, SiJsonwebtokens } from "react-icons/si";

const lanes = [
  {
    category: "Runtime & APIs",
    icon: LuServer,
    tag: "REST & Realtime",
    accent: "text-purple-700 bg-purple-100/80 border-purple-200",
    cardBg: "bg-white/90 hover:bg-purple-50/50 border-purple-100 hover:border-purple-300 shadow-xs",
    tagBg: "bg-neutral-100/90 hover:bg-purple-100/80 text-neutral-700 hover:text-purple-900 border-neutral-200/60",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-emerald-600", tags: ["REST", "Event Loop", "WebSockets"] },
      { name: "Express", icon: SiExpress, color: "text-neutral-800", tags: ["Middleware", "Rate Limiting", "CORS"] },
    ],
  },
  {
    category: "Data Persistence",
    icon: LuDatabase,
    tag: "NoSQL & Schemas",
    accent: "text-emerald-800 bg-emerald-100/90 border-emerald-300/80",
    cardBg: "bg-[#ecfdf5]/90 hover:bg-[#dcfce7] border-emerald-200/80 hover:border-emerald-300 shadow-xs",
    tagBg: "bg-white/90 hover:bg-emerald-100 text-emerald-800 border-emerald-200/70",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600", tags: ["Pipelines", "Indexing", "Atlas"] },
      { name: "Mongoose ODM", icon: SiMongoose, color: "text-red-500", tags: ["Schemas", "Virtuals", "Populate"] },
    ],
  },
  {
    category: "Cloud & Security",
    icon: LuShieldCheck,
    tag: "Auth & Storage",
    accent: "text-sky-700 bg-sky-100/80 border-sky-200",
    cardBg: "bg-[#f0f9ff]/90 hover:bg-[#e0f2fe] border-sky-200/80 hover:border-sky-300 shadow-xs",
    tagBg: "bg-white/90 hover:bg-sky-100 text-sky-800 border-sky-200/70",
    skills: [
      { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500", tags: ["Media CDN", "Asset Pipeline"] },
      { name: "JWT & OAuth", icon: SiJsonwebtokens, color: "text-pink-500", tags: ["Tokens", "Session Engine"] },
    ],
  },
];

export default function BackendCard() {
  return (
    <div className="bg-[#f8f7ff] border border-purple-100/90 rounded-[2rem] p-7 sm:p-8 flex flex-col gap-6 shadow-xs hover:shadow-md hover:border-purple-200 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-purple-700/80 font-medium">02 // BACKEND</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1.5">
          Backend &amp; Infrastructure
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
          Resilient APIs, scalable databases, and secure edge pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {lanes.map((lane) => {
          const LaneIcon = lane.icon;
          return (
            <div key={lane.category} className={`group rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex flex-col justify-between gap-4 hover:-translate-y-1 hover:shadow-md ${lane.cardBg}`}>
              <div className="flex items-center justify-between pb-2.5 border-b border-black/5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 tracking-tight">
                  <LaneIcon className="w-4 h-4 text-neutral-600 group-hover:scale-110 transition-transform" />
                  <span>{lane.category}</span>
                </div>
                <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${lane.accent}`}>{lane.tag}</span>
              </div>

              <div className="flex flex-col gap-3.5">
                {lane.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.color} group-hover:scale-110 transition-transform`} />
                        <span>{skill.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {skill.tags.map((t) => (
                          <span key={t} className={`px-2 py-0.5 rounded-md border text-[10px] font-mono transition-colors ${lane.tagBg}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
