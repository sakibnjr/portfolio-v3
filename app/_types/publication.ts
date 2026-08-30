export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  role: string;
  year: string;
  status: "Published" | "Accepted" | "Under Review" | string;
  doiUrl?: string;
  tags: string[];
  abstractSnippet?: string;
  featured?: boolean;
}
