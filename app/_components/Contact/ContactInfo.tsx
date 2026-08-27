import Link from "next/link";

const socialLinks = [
  { name: "@sakibnjr", platform: "GitHub", url: "https://github.com/sakibnjr", dotColor: "bg-neutral-800" },
  { name: "sakib-ahmed", platform: "LinkedIn", url: "https://linkedin.com", dotColor: "bg-blue-500" },
  { name: "@sakibnjr", platform: "Twitter / X", url: "https://x.com", dotColor: "bg-neutral-800" },
  { name: "sakib@sakib.dev", platform: "Email", url: "mailto:sakib@sakib.dev", dotColor: "bg-emerald-500" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between gap-12 lg:gap-14 max-w-xl h-full py-2">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-800 w-fit shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold">Available for new projects</span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-500 font-medium">EST / Global</span>
        </div>

        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg">
          Whether you have a project in mind, a position to fill, or just want to talk tech —
          my inbox is always open. I typically respond within a business day.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80">
        {socialLinks.map((link) => (
          <Link
            key={link.platform}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between py-4 sm:py-5 text-sm transition-colors hover:text-emerald-600"
          >
            <div className="flex items-center gap-3.5">
              <span className={`w-2 h-2 rounded-full ${link.dotColor} group-hover:scale-125 transition-transform`} />
              <span className="font-mono text-neutral-800 group-hover:text-emerald-600 font-medium">
                {link.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-neutral-400 group-hover:text-emerald-600 text-xs transition-colors">
              <span>{link.platform}</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
