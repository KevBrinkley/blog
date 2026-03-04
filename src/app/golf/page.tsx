import { ArticleList } from "@/components/ArticleList";
import { PageWithTiles } from "@/components/PageWithTiles";
import { getPinnedPosts, getPosts } from "@/lib/posts";

export default function GolfPage() {
  return (
    <PageWithTiles
      title="Golf"
      subtext="Articles and notes."
      pinnedPosts={getPinnedPosts()}
    >
      <ArticleList
        sectionId="golf"
        sectionLabel="Golf"
        posts={getPosts("golf")}
      />
    </PageWithTiles>
  );
}
