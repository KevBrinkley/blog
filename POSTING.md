# How to post articles

You can add articles in two ways.

---

## 1. Markdown files (recommended)

Add a `.md` file in the right section folder and it will show up on the site.

**Folders:** `content/work/`, `content/golf/`, `content/wine/`, `content/adventure/`, `content/music/`, `content/feed/`

**Filename = URL slug.** Example: `content/work/remote-rituals.md` → `/work/remote-rituals`

**Frontmatter** (YAML at the top of the file):

```yaml
---
title: Your post title
excerpt: One line shown in the list and on the tile.
date: 2025-02-27
pinned: false
image: /images/your-image.jpg
---
```

- **title** – Required (or inferred from filename).
- **excerpt** – Short summary for listings and pinned tiles.
- **date** – `YYYY-MM-DD`. Defaults to today if omitted.
- **pinned** – `true` to show this post in the top tile strip.
- **image** – Optional. Path for the pinned tile image (e.g. in `public/images/`).

**Body:** Everything below the closing `---` is Markdown and is rendered as the article body.

**Example:** See `content/work/remote-rituals.md`.

---

## 2. Edit `src/lib/data.ts`

You can still add (or keep) posts in the `ALL_POSTS` array. Use this for quick one-offs or when you don’t need a full Markdown body.

- Add an object with: `id`, `section`, `title`, `excerpt`, `slug`, `date`.
- Optionally `pinned: true` and add the same post to `PINNED_POSTS` so it appears in the tiles.
- Article pages for data-only posts show the excerpt and a short placeholder (no Markdown body).

Markdown files and `data.ts` are merged: if the same section + slug exists in both, the Markdown file wins.

---

## Feed (short thoughts)

The main Feed page is the Twitter-style list. Those items still come from `FEED_ITEMS` in `src/lib/data.ts`. Add objects with `id`, `content`, and `date` (ISO string). Long-form “Feed” articles (with their own page) can be added as Markdown in `content/feed/`.

---

## After adding or changing posts

- **Dev:** Save the file; Next.js will reload. If you don’t see the post, restart `npm run dev`.
- **Build:** Run `npm run build` before deploy so all new posts are included.
