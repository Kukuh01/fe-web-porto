export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  status: "Deployed" | "In Progress" | "On Hold";
  techs: string[];
  imageUrl: string;
  projectUrl: string;
  projectRepo: string;
  likedBy: number;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  thumbnailUrl: string;
  category: string[];
  publishedAt: string;
  likedBy: number;
}
