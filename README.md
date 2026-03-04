# KB Blog

Personal blog with Feed, Work, Golf, Wine, and Adventure sections.

## Features

- **Tabs**: Feed, Work, Golf, Wine, Adventure — horizontal on desktop, hamburger menu on mobile
- **Pinned tiles**: Scrollable square tiles at the top (Instagram saved-stories style) for pinned posts
- **Feed**: Twitter-style short thoughts (placeholder for future push to X/Instagram)
- **Sections**: Article lists with search for Work, Golf, Wine, Adventure
- **Search**: Filters articles by title and excerpt within each section

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Posting articles

- **Markdown (recommended):** Add a `.md` file in `content/{section}/` (e.g. `content/work/my-post.md`) with YAML frontmatter (`title`, `excerpt`, `date`, optional `pinned`, `image`). The file body is rendered as the article. See **POSTING.md** for the full guide.
- **Quick add:** Edit `src/lib/data.ts` and add entries to `ALL_POSTS` (and `PINNED_POSTS` if you want a tile). Good for list-only or placeholder posts.
- Pinned tile images: put files in `public/images/` and set `image` in frontmatter or in `data.ts`.

## Later

- Push Feed items to X and Instagram (API integration)
- Full article body content (e.g. MDX or CMS)
