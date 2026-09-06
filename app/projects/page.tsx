import type { Metadata } from "next";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import BackToTop from "@/app/_components/BackToTop";
import ProjectsArchive from "./_components/ProjectsArchive";
import { createStaticClient } from "@/app/_utils/supabase/static";
import { type Project } from "@/app/_types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack web applications, developer tools, and side projects built by Md. Najmus Sakib Nahid.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Md. Najmus Sakib Nahid",
    description:
      "Explore full-stack web applications, developer tools, and side projects built by Md. Najmus Sakib Nahid.",
    url: "/projects",
  },
};

export default async function ProjectsPage() {
  const supabase = createStaticClient();

  const { data: rawProjects } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true, nullsFirst: false });

  const projects = (rawProjects as Project[]) || [];

  return (
    <main className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0 min-h-screen flex flex-col justify-between">
      <Header />
      <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 flex-1">
        <ProjectsArchive projects={projects} />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
