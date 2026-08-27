export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  bgGradient: string;
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "nexusflow",
    number: "01",
    title: "NexusFlow",
    category: "SAAS",
    tagline: "AI-powered workflow automation platform",
    description: "End-to-end workflow automation SaaS with LLM-driven task routing, real-time collaboration, and 200+ integrations. Serves 15K+ active users.",
    tags: ["Next.js", "TypeScript", "GPT-4", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/sakibnjr",
    bgGradient: "from-emerald-950/40 via-neutral-900/90 to-[#0c0d12]",
    accentColor: "text-emerald-400",
  },
  {
    id: "vaultdb",
    number: "02",
    title: "VaultDB",
    category: "DATABASE",
    tagline: "Distributed in-memory key-value cache engine",
    description: "High-throughput distributed cache with Raft consensus, automated sharding, and sub-millisecond query latency across clusters.",
    tags: ["Rust", "gRPC", "Raft", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/sakibnjr",
    bgGradient: "from-blue-950/40 via-neutral-900/90 to-[#0c0d12]",
    accentColor: "text-blue-400",
  },
  {
    id: "pulsemetrics",
    number: "03",
    title: "PulseMetrics",
    category: "ANALYTICS",
    tagline: "Real-time application performance monitoring",
    description: "Telemetry and APM dashboard tracking Core Web Vitals, server response times, and anomaly detection with live alerting.",
    tags: ["React", "Node.js", "ClickHouse", "TimescaleDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/sakibnjr",
    bgGradient: "from-purple-950/40 via-neutral-900/90 to-[#0c0d12]",
    accentColor: "text-purple-400",
  },
  {
    id: "shipyard",
    number: "04",
    title: "Shipyard CLI",
    category: "DEV TOOL",
    tagline: "Multi-cloud container deployment CLI",
    description: "Streamlined developer CLI for scaffolding, containerizing, and orchestrating microservices to AWS, GCP, and Kubernetes.",
    tags: ["Go", "Docker", "Kubernetes", "Cobra"],
    liveUrl: "#",
    githubUrl: "https://github.com/sakibnjr",
    bgGradient: "from-sky-950/40 via-neutral-900/90 to-[#0c0d12]",
    accentColor: "text-sky-400",
  },
  {
    id: "lumina",
    number: "05",
    title: "Lumina UI",
    category: "OPEN SOURCE",
    tagline: "Modern accessible component library",
    description: "Comprehensive headless design system with full ARIA keyboard navigation, fluid responsive tokens, and dark mode support.",
    tags: ["React", "Tailwind CSS", "ARIA", "Storybook"],
    liveUrl: "#",
    githubUrl: "https://github.com/sakibnjr",
    bgGradient: "from-indigo-950/40 via-neutral-900/90 to-[#0c0d12]",
    accentColor: "text-indigo-400",
  },
  {
    id: "edgeauth",
    number: "06",
    title: "EdgeAuth",
    category: "SECURITY",
    tagline: "Edge-native authentication & session engine",
    description: "Ultra-low latency session management and zero-trust policy engine running distributed on Cloudflare Workers edge nodes.",
    tags: ["TypeScript", "Workers", "JWT", "OAuth 2.0"],
    liveUrl: "#",
    githubUrl: "https://github.com/sakibnjr",
    bgGradient: "from-amber-950/40 via-neutral-900/90 to-[#0c0d12]",
    accentColor: "text-amber-400",
  },
];
