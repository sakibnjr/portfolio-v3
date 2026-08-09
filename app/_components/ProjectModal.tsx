"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/app/_data/projectsData";
import { X, ExternalLink } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-gray-200 shadow-2xl z-10 scrollbar-thin flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-mono">
            Project Details
          </span>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Description */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-900 transition-colors shadow-md"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-900 text-sm font-semibold border border-gray-200 hover:bg-gray-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
          </div>

          {/* Project Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
