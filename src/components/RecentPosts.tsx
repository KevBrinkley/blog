import Link from "next/link";
import type { Post } from "@/lib/types";
import { SECTIONS } from "@/lib/types";

interface RecentPostsProps {
  posts: Post[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getSectionLabel(sectionId: string): string {
  return SECTIONS.find((s) => s.id === sectionId)?.label ?? sectionId;
}

export function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) {
    return (
      <p className="text-sm text-mute">No blog posts yet.</p>
    );
  }

  return (
    <ul className="space-y-4">
      {posts.map((post) => {
        const href =
          post.section === "feed" ? `/feed/${post.slug}` : `/${post.section}/${post.slug}`;
        return (
          <li key={post.id}>
            <Link
              href={href}
              className="group block rounded-lg border border-border/60 bg-paper/50 p-3 transition-colors hover:border-accent hover:bg-white/50"
            >
              <h3 className="font-display text-[1.2rem] font-semibold text-ink group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-[1rem] text-mute">
                {post.excerpt}
              </p>
              <span className="mt-1.5 block text-xs text-mute">
                {getSectionLabel(post.section)} · {formatDate(post.date)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
