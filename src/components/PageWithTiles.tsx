import { PinnedTiles } from "@/components/PinnedTiles";
import type { Post } from "@/lib/types";

interface PageWithTilesProps {
  title: string;
  subtext: string;
  pinnedPosts: Post[];
  children: React.ReactNode;
}

export function PageWithTiles({
  title,
  subtext,
  pinnedPosts,
  children,
}: PageWithTilesProps) {
  return (
    <>
      <header className="mb-4">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-1 text-mute">{subtext}</p>
      </header>
      <PinnedTiles posts={pinnedPosts} />
      <div className="mt-8">{children}</div>
    </>
  );
}
