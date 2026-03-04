import { ArticleList } from "@/components/ArticleList";
import { PageWithTiles } from "@/components/PageWithTiles";
import { getPinnedPosts, getPosts } from "@/lib/posts";

export default function WorkPage() {
  return (
    <PageWithTiles
      title="Work"
      subtext="Articles and notes."
      pinnedPosts={getPinnedPosts()}
    >
      <ArticleList
        sectionId="work"
        sectionLabel="Work"
        posts={getPosts("work")}
      />
    </PageWithTiles>
  );
}
