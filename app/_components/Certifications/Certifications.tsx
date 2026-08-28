import { Suspense } from "react";
import SectionHeader from "@/app/_components/SectionHeader";
import CertificationCard from "@/app/_components/Certifications/CertificationCard";
import { createClient } from "@/app/_utils/supabase/server";
import { cookies } from "next/headers";
import Loader from "@/app/_components/Loader";

async function CertificationsList() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: certifications } = await supabase
    .from("certifications")
    .select("*")
    .order("display_order", { ascending: true, nullsFirst: false });

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200/70 bg-white">
      {certifications?.map((item) => (
        <CertificationCard key={item.id} certification={item} />
      ))}
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16"
    >
      <SectionHeader
        badge="CERTIFICATIONS"
        title="Verified"
        highlightedTitle="Credentials"
        description="Industry certifications validating expertise in cloud platforms, DevOps, and modern development."
      />

      <Suspense
        fallback={
          <div className="h-64 rounded-2xl border border-neutral-200/70 bg-white flex items-center justify-center">
            <Loader size="md" className="text-neutral-400" />
          </div>
        }
      >
        <CertificationsList />
      </Suspense>
    </section>
  );
}
