import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "./types";
import type { SectionId } from "./types";
import type { FeedItem } from "./types";
import { ALL_POSTS, FEED_ITEMS } from "./data";

const CONTENT_DIR = path.join(process.cwd(), "content");
const FEED_ITEMS_DIR = path.join(CONTENT_DIR, "feed-items");

function getContentDir(section: SectionId): string {
  return path.join(CONTENT_DIR, section);
}

function parseFile(section: SectionId, filename: string): Post | null {
  const filePath = path.join(getContentDir(section), filename);
  if (!fs.existsSync(filePath)) return null;
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    id: `md-${section}-${slug}`,
    section,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    body: content.trim(),
    slug,
    date: data.date ?? new Date().toISOString().slice(0, 10),
    pinned: data.pinned ?? false,
    image: data.image,
  };
}

function getPostsFromFiles(section: SectionId): Post[] {
  const dir = getContentDir(section);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((f) => parseFile(section, f))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (b.date > a.date ? 1 : -1));
}

/** All posts for a section: file-based first, then data.ts (no duplicate slugs). */
export function getPosts(section: SectionId): Post[] {
  const fromFiles = getPostsFromFiles(section);
  const fromData = ALL_POSTS.filter((p) => p.section === section);
  const seen = new Set(fromFiles.map((p) => p.slug));
  const extra = fromData.filter((p) => !seen.has(p.slug));
  return [...fromFiles, ...extra].sort(
    (a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime())
  );
}

/** Single post by section + slug. Body from markdown if available. */
export function getPost(section: SectionId, slug: string): Post | null {
  const filePath = path.join(getContentDir(section), `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return parseFile(section, `${slug}.md`);
  }
  const fromData = ALL_POSTS.find(
    (p) => p.section === section && p.slug === slug
  );
  return fromData ?? null;
}

/** All posts across sections (for search). */
export function getAllPosts(): Post[] {
  const sections: SectionId[] = [
    "feed",
    "work",
    "golf",
    "wine",
    "adventure",
    "music",
  ];
  return sections.flatMap((s) => getPosts(s));
}

/** Most recent posts across all sections, by date. */
export function getRecentPosts(limit = 5): Post[] {
  return getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/** Pinned posts for the tiles: from data + any .md with pinned: true. */
export function getPinnedPosts(): Post[] {
  const fromData = ALL_POSTS.filter((p) => p.pinned);
  const fromFiles = getAllPosts().filter((p) => p.pinned);
  const seen = new Set(fromFiles.map((p) => `${p.section}:${p.slug}`));
  const extra = fromData.filter((p) => !seen.has(`${p.section}:${p.slug}`));
  return [...fromFiles, ...extra];
}

/** Slugs for static generation. */
export function getSlugs(section: SectionId): string[] {
  const posts = getPosts(section);
  return posts.map((p) => p.slug);
}

/** Feed items (short posts). From content/feed-items/*.md if present, else data.ts. */
export function getFeedItems(): FeedItem[] {
  if (!fs.existsSync(FEED_ITEMS_DIR)) return FEED_ITEMS;
  const files = fs.readdirSync(FEED_ITEMS_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) return FEED_ITEMS;
  const items: FeedItem[] = files
    .map((filename) => {
      const filePath = path.join(FEED_ITEMS_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const slug = filename.replace(/\.md$/, "");
      let dateStr: string;
      if (typeof data.date === "string") dateStr = data.date;
      else if (data.date instanceof Date) dateStr = data.date.toISOString();
      else dateStr = new Date().toISOString();
      if (!dateStr.includes("T")) dateStr = dateStr + "T12:00:00.000Z";
      return {
        id: `fi-${slug}`,
        content: content.trim(),
        date: dateStr,
      };
    })
    .filter((item) => item.content.length > 0)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  return items;
}
