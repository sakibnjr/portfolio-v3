export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  live_url?: string;
  liveUrl?: string;
  github_url?: string;
  githubUrl?: string;
  display_order?: number;
  featured?: boolean | null;
  created_at?: string;
}
