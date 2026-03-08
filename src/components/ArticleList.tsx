"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "./Search";
import type { Post } from "@/lib/types";
import type { SectionId } from "@/lib/types";
import { SECTIONS } from "@/lib/types";

interface ArticleListProps {
  sectionId: SectionId;
  sectionLabel: string;
  posts: Post[];
}

function getSectionLabel(sectionId: string): string {
  return SECTIONS.find((s) => s.id === sectionId)?.label ?? sectionId;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleList({
  sectionId,
  sectionLabel,
  posts,
}: ArticleListProps) {
  const [filtered, setFiltered] = useState<Post[]>(posts);

  const searchPosts = useMemo(
    () => posts,
    [posts]
  );

  return (
    <>
      <div className="mb-8">
        <Search
          posts={searchPosts}
          placeholder={`Search ${sectionLabel.toLowerCase()}…`}
          onResult={setFiltered}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-mute">No articles match your search.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map((post) => {
            const href =
              sectionId === "all"
                ? `/${post.section}/${post.slug}`
                : `/${sectionId}/${post.slug}`;
            return (
              <li key={post.id}>
                <Link
                  href={href}
                  className="group block rounded-lg border border-border bg-paper p-4 transition-colors hover:border-accent hover:bg-white/50 sm:p-5"
                >
                  <h2 className="font-display text-lg font-semibold text-ink group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-mute line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-mute">
                    {sectionId === "all" && (
                      <span className="font-medium text-ink">
                        {getSectionLabel(post.section)}
                      </span>
                    )}
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
