import { FeedSection } from "@/components/FeedSection";
import { RecentPosts } from "@/components/RecentPosts";
import { getFeedItems, getRecentPosts } from "@/lib/posts";

export default function HomePage() {
  const feedItems = getFeedItems();
  const recentPosts = getRecentPosts(6);

  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-[2fr_1fr] lg:gap-y-8">
      <div className="min-w-0 order-1 lg:col-start-1 lg:row-start-1">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Recent Blog Posts
        </h1>
      </div>
      <section
        aria-label="Recent blog posts"
        className="min-w-0 order-2 lg:col-start-1 lg:row-start-2"
      >
        <RecentPosts posts={recentPosts} />
      </section>
      <div className="min-w-0 order-3 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:border-l lg:border-border lg:pl-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Feed
        </h1>
        <section aria-label="Feed" className="mt-8">
          <FeedSection items={feedItems} />
        </section>
      </div>
    </div>
  );
}
