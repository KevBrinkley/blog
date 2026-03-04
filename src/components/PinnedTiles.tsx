"use client";

import Link from "next/link";
import type { Post } from "@/lib/types";

interface PinnedTilesProps {
  posts: Post[];
}

export function PinnedTiles({ posts }: PinnedTilesProps) {
  return (
    <section className="border-b border-border bg-paper" aria-label="Pinned posts">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="scroll-tiles flex gap-4 overflow-x-auto pb-2">
          {posts.map((post) => {
            const href =
              post.section === "feed"
                ? `/feed/${post.slug}`
                : `/${post.section}/${post.slug}`;
            return (
              <Link
                key={post.id}
                href={href}
                className="group flex flex-shrink-0 flex-col"
              >
                <span
                  className="block aspect-square w-24 overflow-hidden rounded-lg border-2 border-border bg-mute/20 bg-cover bg-center transition-colors group-hover:border-accent sm:w-28"
                  style={{
                    backgroundImage: post.image
                      ? `url(${post.image})`
                      : "linear-gradient(135deg, var(--border) 0%, var(--mute) 100%)",
                  }}
                />
                <span className="mt-1.5 max-w-[7rem] truncate text-xs font-medium text-ink group-hover:text-accent sm:max-w-[7.5rem]">
                  {post.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
