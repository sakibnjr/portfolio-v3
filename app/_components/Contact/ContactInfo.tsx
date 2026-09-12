import Link from "next/link";
import { LuMail, LuArrowRight } from "react-icons/lu";

const socialLinks = [
  {
    name: "@sakibnjr",
    platform: "GitHub",
    url: "https://github.com/sakibnjr",
    dotColor: "bg-neutral-800",
  },
  {
    name: "Md. Najmus Sakib Nahid",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sakibnjr/",
    dotColor: "bg-blue-500",
  },
  {
    name: "hello@sakibnjr.tech",
    platform: "Email",
    url: "mailto:hello@sakibnjr.tech",
    dotColor: "bg-emerald-500",
  },
];

interface ContactInfoProps {
  onOpenForm?: () => void;
}

export default function ContactInfo({
  onOpenForm,
}: ContactInfoProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto space-y-6 sm:space-y-8">
      {/* 1. Status Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-800 w-fit shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-semibold">Available for new projects</span>
        <span className="text-neutral-400">·</span>
        <span className="text-neutral-500 font-medium">BST (UTC+6) / Global</span>
      </div>

      {/* 2. Get in touch Button */}
      {onOpenForm && (
        <button
          type="button"
          onClick={onOpenForm}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all shadow-xs hover:shadow-md cursor-pointer group"
        >
          <LuMail className="w-4 h-4 text-emerald-400" />
          <span>Get in touch</span>
          <LuArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      )}

      {/* 3. Social Links */}
      <div className="flex flex-col divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80 w-full">
        {socialLinks.map((link) => (
          <Link
            key={link.platform}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={
              link.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="group flex items-center justify-between py-4 sm:py-5 text-sm transition-colors hover:text-emerald-600"
          >
            <div className="flex items-center gap-3.5">
              <span
                className={`w-2 h-2 rounded-full ${link.dotColor} group-hover:scale-125 transition-transform`}
              />
              <span className="font-mono text-neutral-800 group-hover:text-emerald-600 font-medium">
                {link.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-neutral-400 group-hover:text-emerald-600 text-xs transition-colors">
              <span>{link.platform}</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
