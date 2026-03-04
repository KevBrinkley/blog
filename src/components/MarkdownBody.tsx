import ReactMarkdown from "react-markdown";

interface MarkdownBodyProps {
  content: string;
}

export function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className="prose prose-ink mt-6 max-w-none prose-p:text-ink prose-p:leading-relaxed prose-headings:font-display prose-headings:text-ink prose-strong:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
