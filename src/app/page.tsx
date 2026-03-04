import { FeedSection } from "@/components/FeedSection";
import { RecentPosts } from "@/components/RecentPosts";
import { getFeedItems, getRecentPosts } from "@/lib/posts";

export default function HomePage() {
  const feedItems = getFeedItems();
  const recentPosts = getRecentPosts(6);

  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-[1fr_1fr] lg:gap-y-8">
      <div className="min-w-0 order-1">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Feed
        </h1>
      </div>
      <div className="min-w-0 order-2">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Recent Blog Posts
        </h1>
      </div>
      <section aria-label="Feed" className="min-w-0 order-3">
        <FeedSection items={feedItems} />
      </section>
      <section aria-label="Recent blog posts" className="min-w-0 order-4">
        <RecentPosts posts={recentPosts} />
      </section>
    </div>
  );
}
