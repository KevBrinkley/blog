export type SectionId = "feed" | "work" | "golf" | "wine" | "adventure" | "music" | "all" | "about";

export interface Post {
  id: string;
  section: SectionId;
  title: string;
  excerpt: string;
  body?: string;
  slug: string;
  date: string;
  pinned?: boolean;
  image?: string;
}

export interface FeedItem {
  id: string;
  content: string;
  date: string;
  pinned?: boolean;
}

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "feed", label: "Feed" },
  { id: "work", label: "Work" },
  { id: "golf", label: "Golf" },
  { id: "wine", label: "Wine" },
  { id: "adventure", label: "Adventure" },
  { id: "music", label: "Music" },
  { id: "all", label: "All" },
  { id: "about", label: "About" },
];
