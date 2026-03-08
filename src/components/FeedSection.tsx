import type { FeedItem } from "@/lib/types";

function formatDate(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

interface FeedSectionProps {
  items: FeedItem[];
}

export function FeedSection({ items }: FeedSectionProps) {
  return (
    <ul className="space-y-0 divide-y divide-border">
      {items.map((item) => (
        <li key={item.id} className="py-4 first:pt-0">
          <p className="text-[1rem] text-ink">{item.content}</p>
          <time
            dateTime={item.date}
            className="mt-1 block text-xs text-mute"
          >
            {formatDate(item.date)}
          </time>
        </li>
      ))}
    </ul>
  );
}
