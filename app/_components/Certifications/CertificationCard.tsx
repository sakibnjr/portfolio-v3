import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { type CertificationItem } from "@/app/_types";

export type { CertificationItem };

interface CertificationCardProps {
  certification: CertificationItem;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const badgeBg =
    certification.badge_bg || certification.badgeBg || "bg-amber-100/80";
  const badgeText =
    certification.badge_text || certification.badgeText || "text-amber-700";
  const certId = certification.cert_id || certification.certId;
  const credentialUrl =
    certification.credential_url || certification.credentialUrl || "#";
  const imageUrl =
    certification.images ||
    certification.image ||
    certification.image_url ||
    certification.imageUrl;

  return (
    <div className="relative group first:rounded-t-2xl last:rounded-b-2xl">
      <Link
        href={credentialUrl}
        target={credentialUrl !== "#" ? "_blank" : undefined}
        rel={credentialUrl !== "#" ? "noopener noreferrer" : undefined}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-6 first:rounded-t-2xl last:rounded-b-2xl border-l-4 border-l-transparent hover:border-l-amber-500 hover:bg-amber-50/40 transition-all duration-200 cursor-pointer"
      >
        <div className="flex items-start sm:items-center gap-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-xs ${badgeBg} ${badgeText}`}
          >
            {certification.badge}
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug group-hover:text-black">
              {certification.title}
            </h3>
            <span className="text-xs font-mono text-neutral-500 mt-0.5">
              {certification.issuer}
            </span>
            {certId && (
              <span className="text-[11px] font-mono text-neutral-400 mt-0.5">
                {certId}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 ml-15 sm:ml-0">
          <div className="flex flex-col text-left sm:text-right">
            <span className="text-xs font-mono text-neutral-500 font-medium">
              {certification.year}
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
              {certification.validity}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {certification.status}
            </span>

            <LuArrowUpRight className="w-4 h-4 text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-600" />
          </div>
        </div>
      </Link>

      {/* Floating Hover Image Preview */}
      {imageUrl && (
        <div className="hidden md:block absolute right-36 lg:right-48 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 scale-95 -translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out origin-center">
          <div className="w-72 sm:w-80 p-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-2xl shadow-neutral-950/20 ring-1 ring-black/5">
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60">
              <Image
                src={imageUrl}
                alt={`${certification.title} Certificate Preview`}
                fill
                sizes="320px"
                className="object-cover object-center"
              />
            </div>
            <div className="pt-2 px-1 flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-neutral-600 truncate max-w-[170px]">
                {certification.issuer}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Verified
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
