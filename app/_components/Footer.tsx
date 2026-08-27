import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 py-10 mt-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500">
        {/* Brand Logo */}
        <Link
          href="/"
          className="tracking-tight text-neutral-900 text-base hover:opacity-80 transition-opacity"
        >
          sakibnahid<span className="text-emerald-500 font-mono">.dev</span>
        </Link>

        {/* Center Copyright */}
        <p className="font-mono text-xs text-neutral-400 text-center">
          &copy; {new Date().getFullYear()} Md. Najmus Sakib Nahid
        </p>

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Open to work</span>
        </div>
      </div>
    </footer>
  );
}
