export default function HeroCraftCard() {
  return (
    <div className="relative bg-gradient-to-br from-[#fff7ed] via-[#fef3c7]/50 to-[#fed7aa]/40 border border-amber-200/80 rounded-[2rem] p-7 sm:p-8 text-neutral-900 shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-200/25 rounded-full blur-xl pointer-events-none" />

      <div>
        <div className="relative z-10 flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-amber-700/80 font-medium">00 // ARCHITECTURE</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1.5">
          Full Stack Craft
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
          Bridging design systems with resilient backend infrastructure and real-time APIs.
        </p>

        <div className="py-2 mb-4">
          <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 leading-snug">
            Pixel <span className="text-amber-700">Precision</span>.
            <br />
            Production <span className="text-orange-700">Scale</span>.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap items-center gap-2 pt-1">
        {["SSR / ISR", "REST & WS", "Zero-Latency Edge", "Type-Safe"].map((token) => (
          <span
            key={token}
            className="px-3 py-1 rounded-xl bg-white/90 border border-amber-200/80 text-[11px] font-mono text-neutral-700 shadow-2xs hover:bg-white hover:text-neutral-950 transition-colors cursor-default"
          >
            {token}
          </span>
        ))}
      </div>
    </div>
  );
}
