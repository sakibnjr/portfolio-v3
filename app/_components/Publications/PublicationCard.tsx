import { LuBookOpen, LuCalendar, LuUserCheck, LuArrowUpRight, LuSparkles } from "react-icons/lu";
import { type PublicationItem } from "@/app/_types";

interface PublicationCardProps {
  item: PublicationItem;
}

export default function PublicationCard({ item }: PublicationCardProps) {
  const CardWrapper = item.doiUrl ? "a" : "div";
  const wrapperProps = item.doiUrl
    ? {
        href: item.doiUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group relative rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between gap-8 transition-all duration-300 ${
        item.featured
          ? "bg-gradient-to-b from-[#f5f9ff] via-white to-white border-2 border-indigo-200/80 shadow-md shadow-indigo-500/5 hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1.5"
          : "bg-white border border-neutral-200/80 shadow-xs hover:shadow-lg hover:border-neutral-300 hover:-translate-y-1.5"
      } ${item.doiUrl ? "cursor-pointer" : ""}`}
    >
      <div className="flex flex-col gap-6">
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                item.featured
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                  : "bg-neutral-100 text-neutral-800 group-hover:bg-indigo-50 group-hover:text-indigo-700"
              }`}
            >
              <LuBookOpen className="w-6 h-6" />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono font-semibold text-indigo-600 tracking-wide uppercase">
                {item.journal}
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Peer-Reviewed Journal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs font-mono font-medium text-neutral-600 shadow-2xs">
              <LuCalendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{item.year}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {item.status}
            </span>
          </div>
        </div>

        {/* Title and Role */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug group-hover:text-black">
            {item.title}
          </h3>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium shadow-xs">
              <LuUserCheck className="w-3.5 h-3.5 text-indigo-300" />
              <span>Role: {item.role}</span>
            </span>
          </div>

          {item.abstractSnippet && (
            <p className="text-sm text-neutral-600 leading-relaxed max-w-4xl pt-1">
              {item.abstractSnippet}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Tags and Action */}
      <div className="pt-5 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100/80 border border-neutral-200/60 text-xs font-mono text-neutral-700 font-medium"
            >
              <LuSparkles className="w-3 h-3 text-indigo-500" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {item.doiUrl && (
          <div className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-indigo-600 group-hover:text-indigo-700 group-hover:underline self-end sm:self-auto">
            <span>Read Paper</span>
            <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
