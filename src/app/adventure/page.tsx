import { ArticleList } from "@/components/ArticleList";
import { PageWithTiles } from "@/components/PageWithTiles";
import { getPinnedPosts, getPosts } from "@/lib/posts";

export default function AdventurePage() {
  return (
    <PageWithTiles
      title="Adventure"
      subtext="Articles and notes."
      pinnedPosts={getPinnedPosts()}
    >
      <ArticleList
        sectionId="adventure"
        sectionLabel="Adventure"
        posts={getPosts("adventure")}
      />
    </PageWithTiles>
  );
}
