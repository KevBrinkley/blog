import { ArticleList } from "@/components/ArticleList";
import { PageWithTiles } from "@/components/PageWithTiles";
import { getPinnedPosts, getAllPosts } from "@/lib/posts";

export default function AllPage() {
  const posts = getAllPosts();

  return (
    <PageWithTiles
      title="All"
      subtext="All blog posts across sections."
      pinnedPosts={getPinnedPosts()}
    >
      <ArticleList
        sectionId="all"
        sectionLabel="All"
        posts={posts}
      />
    </PageWithTiles>
  );
}
