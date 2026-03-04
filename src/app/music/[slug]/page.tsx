import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/MarkdownBody";
import { getPost, getSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getSlugs("music").map((slug) => ({ slug }));
}

export default function MusicPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = getPost("music", slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/music"
        className="mb-6 inline-block text-sm text-mute hover:text-accent"
      >
        ← Music
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
            Full article content can go here. Add a .md file in content/music/
            to render body content.
          </p>
        </div>
      )}
    </article>
  );
}
