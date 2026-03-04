import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/MarkdownBody";
import { getPost, getSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getSlugs("feed").map((slug) => ({ slug }));
}

export default function FeedPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = getPost("feed", slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-mute hover:text-accent"
      >
        ← Feed
      </Link>
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {post.title}
      </h1>
      <time
        dateTime={post.date}
        className="mt-2 block text-sm text-mute"
      >
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
      {post.body ? (
        <MarkdownBody content={post.body} />
      ) : (
        <div className="prose prose-ink mt-6 max-w-none">
          <p className="text-ink">{post.excerpt}</p>
          <p className="mt-4 text-mute">
            Full post content can go here. Add a .md file in content/feed/ to
            render body content.
          </p>
        </div>
      )}
    </article>
  );
}
