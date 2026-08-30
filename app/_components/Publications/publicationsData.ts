import { type PublicationItem } from "@/app/_types";

export type { PublicationItem };

export const publicationsData: PublicationItem[] = [
  {
    id: "lxnet-plos-one-2026",
    title:
      "LXNet: A lightweight CNN for lung disease classification from Chest X-ray with XAI-based interpretability",
    journal: "PLOS ONE",
    role: "Co-Author",
    year: "2026",
    status: "Published",
    doiUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0351762",
    tags: [
      "Deep Learning",
      "Computer Vision",
      "Explainable AI (XAI)",
      "Medical Imaging",
      "CNN",
    ],
    abstractSnippet:
      "A lightweight convolutional neural network architecture tailored for efficient lung disease classification from chest radiographs, integrated with Explainable AI techniques for transparent clinical interpretability.",
    featured: true,
  },
];
