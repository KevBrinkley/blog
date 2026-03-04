"use client";

import { useState, useCallback } from "react";
import type { Post } from "@/lib/types";

interface SearchProps {
  posts: Post[];
  placeholder?: string;
  onResult?: (filtered: Post[]) => void;
}

export function Search({
  posts,
  placeholder = "Search articles…",
  onResult,
}: SearchProps) {
  const [query, setQuery] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const q = e.target.value.trim().toLowerCase();
      setQuery(e.target.value);
      if (!onResult) return;
      if (!q) {
        onResult(posts);
        return;
      }
      const filtered = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
      onResult(filtered);
    },
    [posts, onResult]
  );

  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mute">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-paper py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-mute focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        aria-label="Search"
      />
    </div>
  );
}
