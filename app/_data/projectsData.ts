export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "devflow-analytics",
    title: "Codex Analytics",
    description:
      "An enterprise-grade developer observability platform designed to aggregate engineering telemetry, CI/CD pipeline health, PR review velocity, and code coverage into unified actionable insights.",
    image: "/projects/analytics-dashboard.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Recharts",
      "Node.js",
    ],
    liveUrl: "https://example.com/codex-analytics",
    githubUrl: "https://github.com/sakibnjr/codex-analytics",
  },
  {
    id: "aurora-commerce",
    title: "Aurora Commerce",
    description:
      "A luxury headless storefront built for high conversion. Features sub-second static page generation, instant instant-search filtering, sleek dark/light aesthetics, and frictionless checkout.",
    image: "/projects/ecommerce-app.png",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Stripe",
    ],
    liveUrl: "https://example.com/aurora-commerce",
    githubUrl: "https://github.com/sakibnjr/aurora-commerce",
  },
  {
    id: "synapse-ai-canvas",
    title: "Synapse AI Canvas",
    description:
      "An AI-native workspace combining bidirectional Markdown notes with an interactive visual knowledge graph. Helps research teams connect ideas, auto-summarize articles, and query vector embeddings.",
    image: "/projects/ai-canvas.png",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "OpenAI API",
      "WebGL",
      "IndexedDB",
    ],
    liveUrl: "https://example.com/synapse-ai",
    githubUrl: "https://github.com/sakibnjr/synapse-ai",
  },
];
