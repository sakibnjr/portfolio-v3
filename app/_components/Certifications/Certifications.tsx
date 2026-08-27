import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import SectionHeader from "@/app/_components/SectionHeader";

interface CertificationItem {
  id: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  issuer: string;
  certId?: string;
  year: string;
  validity: string;
  status: "ACTIVE" | "EXPIRED" | "VERIFIED";
  credentialUrl?: string;
}

const certificationsData: CertificationItem[] = [
  {
    id: "aws-sap",
    badge: "AWS",
    badgeBg: "bg-amber-100/80",
    badgeText: "text-amber-700",
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    certId: "ID: AWS-SAP-7841-2025",
    year: "2025",
    validity: "VALID • 2027",
    status: "ACTIVE",
    credentialUrl: "#",
  },
  {
    id: "gcp-prof",
    badge: "GCP",
    badgeBg: "bg-blue-100/80",
    badgeText: "text-blue-600",
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2025",
    validity: "VALID • 2027",
    status: "ACTIVE",
    credentialUrl: "#",
  },
  {
    id: "cka",
    badge: "CKA",
    badgeBg: "bg-indigo-100/80",
    badgeText: "text-indigo-600",
    title: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2024",
    validity: "VALID • 2026",
    status: "ACTIVE",
    credentialUrl: "#",
  },
  {
    id: "meta-react",
    badge: "META",
    badgeBg: "bg-sky-100/80",
    badgeText: "text-sky-600",
    title: "Meta React Developer Certificate",
    issuer: "Meta",
    year: "2024",
    validity: "VALID • 2026",
    status: "ACTIVE",
    credentialUrl: "#",
  },
  {
    id: "mongodb",
    badge: "MDB",
    badgeBg: "bg-emerald-100/80",
    badgeText: "text-emerald-700",
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2023",
    validity: "VALID • 2025",
    status: "ACTIVE",
    credentialUrl: "#",
  },
  {
    id: "terraform",
    badge: "HCP",
    badgeBg: "bg-purple-100/80",
    badgeText: "text-purple-600",
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    year: "2023",
    validity: "VALID • 2025",
    status: "ACTIVE",
    credentialUrl: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <SectionHeader
        badge="CERTIFICATIONS"
        title="Verified"
        highlightedTitle="Credentials"
        description="Industry certifications validating expertise in cloud platforms, DevOps, and modern development."
      />

      <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200/70 bg-white">
        {certificationsData.map((item) => (
          <Link
            key={item.id}
            href={item.credentialUrl || "#"}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-6 border-b border-neutral-100 last:border-b-0 border-l-4 border-l-transparent hover:border-l-amber-500 hover:bg-amber-50/40 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start sm:items-center gap-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-xs ${item.badgeBg} ${item.badgeText}`}
              >
                {item.badge}
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug group-hover:text-black">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-neutral-500 mt-0.5">
                  {item.issuer}
                </span>
                {item.certId && (
                  <span className="text-[11px] font-mono text-neutral-400 mt-0.5">
                    {item.certId}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 ml-15 sm:ml-0">
              <div className="flex flex-col text-left sm:text-right">
                <span className="text-xs font-mono text-neutral-500 font-medium">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                  {item.validity}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item.status}
                </span>

                <LuArrowUpRight className="w-4 h-4 text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-600" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
