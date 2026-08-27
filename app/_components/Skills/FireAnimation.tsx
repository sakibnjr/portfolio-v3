export default function FireAnimation() {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      {/* Background warm radial glow */}
      <div className="absolute inset-0 bg-orange-500/25 rounded-full blur-lg animate-pulse" />

      {/* Floating Duolingo-style sparks */}
      <span className="absolute -top-1 left-2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce duration-1000 opacity-80" />
      <span className="absolute -top-2 right-3 w-1 h-1 bg-orange-300 rounded-full animate-ping duration-1000 opacity-70" />

      {/* Duolingo Streak Flame SVG */}
      <svg
        viewBox="0 0 100 120"
        className="w-14 h-14 relative z-10 filter drop-shadow-[0_4px_12px_rgba(255,100,0,0.5)] animate-flame"
      >
        <defs>
          {/* Outer flame gradient */}
          <linearGradient id="duoOuter" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF3838" />
            <stop offset="50%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>

          {/* Inner flame gradient */}
          <linearGradient id="duoInner" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFAE00" />
            <stop offset="60%" stopColor="#FFD600" />
            <stop offset="100%" stopColor="#FFF897" />
          </linearGradient>
        </defs>

        {/* Outer Flame Body */}
        <path
          d="M50 5 C55 35 88 42 88 74 C88 96 71 114 50 114 C29 114 12 96 12 74 C12 48 38 40 43 25 C45 32 47 38 43 45 C55 35 48 18 50 5 Z"
          fill="url(#duoOuter)"
        />

        {/* Middle Flame Accent / Wing */}
        <path
          d="M50 30 C58 48 76 56 76 78 C76 93 64 105 50 105 C36 105 24 93 24 78 C24 60 38 52 44 42 C45 47 46 51 43 56 C52 48 48 38 50 30 Z"
          fill="url(#duoInner)"
        />

        {/* Cute Expressive Eyes */}
        <g className="animate-eye-blink">
          {/* Left Eye */}
          <ellipse cx="41" cy="76" rx="4.2" ry="6.2" fill="#201005" />
          <circle cx="39.8" cy="74" r="1.6" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="59" cy="76" rx="4.2" ry="6.2" fill="#201005" />
          <circle cx="57.8" cy="74" r="1.6" fill="#FFFFFF" />
        </g>

        {/* Happy Flame Smile */}
        <path
          d="M46 86 Q50 89 54 86"
          stroke="#5C2500"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
