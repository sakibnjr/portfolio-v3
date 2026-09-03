import Image from "next/image";
import { LuCalendar } from "react-icons/lu";
import { type EducationItem } from "@/app/_types";

interface EducationCardProps {
  item: EducationItem;
}

export default function EducationCard({ item }: EducationCardProps) {
  const Icon = item.icon;

  return (
    <article
      className={`group relative rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-1.5 ${
        item.featured
          ? "bg-gradient-to-b from-[#f2fbf7] via-white to-white border-2 border-emerald-300/80 shadow-md shadow-emerald-500/5 hover:shadow-xl hover:border-emerald-400"
          : "bg-white border border-neutral-200/80 shadow-xs hover:shadow-xl hover:border-neutral-300"
      }`}
    >
      {/* Top Content: Institute, Degree, Session, Result */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono font-semibold text-emerald-600 uppercase tracking-wider">
            {item.institution}
          </span>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100/80 border border-neutral-200/70 text-[11px] font-mono text-neutral-600">
            <LuCalendar className="w-3 h-3 text-neutral-400" />
            <span>{item.period}</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 leading-snug group-hover:text-black">
          {item.degree}
        </h3>

        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-xs font-mono text-neutral-400">
            {item.location}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {item.gpa}
          </span>
        </div>
      </div>

      {/* Bottom Image Container (with floating bottom-right icon badge) */}
      {item.image && (
        <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-[1.5rem] overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
          <Image
            src={item.image}
            alt={`${item.institution} campus`}
            blurDataURL={item.image}
            placeholder="blur"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Floating Icon Circle Badge */}
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-md text-neutral-800 flex items-center justify-center border border-white/80 group-hover:scale-110 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
        </div>
      )}
    </article>
  );
}
