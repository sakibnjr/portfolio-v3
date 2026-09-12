import { Suspense } from "react";
import SectionHeader from "@/app/_components/SectionHeader";
import CertificationCard from "@/app/_components/Certifications/CertificationCard";
import { createStaticClient } from "@/app/_utils/supabase/static";
import Loader from "@/app/_components/Loader";

async function CertificationsList() {
  const supabase = createStaticClient();

  const { data: certifications } = await supabase
    .from("certifications")
    .select("*")
    .order("display_order", { ascending: true, nullsFirst: false });

  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200/70 bg-white divide-y divide-neutral-100 shadow-xs">
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
      className="w-full py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16 border-b border-neutral-300"
    >
      <div className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0">
        <SectionHeader
          title="Verified"
          highlightedTitle="Credentials"
          description="Courses and certifications I completed to learn new skills and stay sharp."
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
      </div>
    </section>
  );
}
