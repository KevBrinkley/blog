import { ArticleList } from "@/components/ArticleList";
import { PageWithTiles } from "@/components/PageWithTiles";
import { getPinnedPosts, getPosts } from "@/lib/posts";

export default function WinePage() {
  return (
    <PageWithTiles
      title="Wine"
      subtext="Articles and notes."
      pinnedPosts={getPinnedPosts()}
    >
      <ArticleList
        sectionId="wine"
        sectionLabel="Wine"
        posts={getPosts("wine")}
      />
    </PageWithTiles>
  );
}