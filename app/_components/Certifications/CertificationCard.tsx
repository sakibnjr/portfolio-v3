import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export interface CertificationItem {
  id: string;
  badge: string;
  badge_bg?: string;
  badgeBg?: string;
  badge_text?: string;
  badgeText?: string;
  title: string;
  issuer: string;
  cert_id?: string;
  certId?: string;
  year: string;
  validity: string;
  status: "ACTIVE" | "EXPIRED" | "VERIFIED" | string;
  credential_url?: string;
  credentialUrl?: string;
  display_order?: number;
}

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

  return (
    <Link
      href={credentialUrl}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-6 border-b border-neutral-100 last:border-b-0 border-l-4 border-l-transparent hover:border-l-amber-500 hover:bg-amber-50/40 transition-all duration-200 cursor-pointer"
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
  );
}
