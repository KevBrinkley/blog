import { ArticleList } from "@/components/ArticleList";
import { PageWithTiles } from "@/components/PageWithTiles";
import { getPinnedPosts, getPosts } from "@/lib/posts";

export default function MusicPage() {
  return (
    <PageWithTiles
      title="Music"
      subtext="Articles and notes."
      pinnedPosts={getPinnedPosts()}
    >
      <ArticleList
        sectionId="music"
        sectionLabel="Music"
        posts={getPosts("music")}
      />
    </PageWithTiles>
  );
}
