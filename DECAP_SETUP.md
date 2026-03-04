# Decap CMS setup

Decap is wired up so you can edit **Feed Items** (short posts) and **articles** (Work, Golf, Wine, Adventure, Music, Feed) from a browser at **`/admin`**.

## 1. Set your GitHub repo

Edit **`public/admin/config.yml`** and replace:

```yaml
repo: YOUR_GITHUB_USERNAME/YOUR_REPO
```

with your real GitHub username and repo name (e.g. `kevinbrinkley/blog`). Use the **branch** you deploy from (e.g. `main`).

## 2. Push the project to GitHub

If the blog isn’t in a GitHub repo yet:

- Create a new repo on GitHub.
- Add it as `origin` and push your code.

Decap will commit content changes to this repo.

## 3. Try the admin locally

1. Run the site: `npm run dev`
2. Open **http://localhost:3000/admin**

To only preview the UI (no real Git), you can temporarily set in `config.yml`:

```yaml
backend:
  name: test-repo
```

Then reload `/admin`. You won’t be able to save; switch back to `github` and your real `repo` when you’re ready to use it for real.

## 4. Logging in when the site is deployed

Decap’s GitHub backend needs a server-side OAuth step to log you in.

- **If you deploy on Netlify:** Use Netlify Identity + Git Gateway so Netlify handles auth. In the Netlify dashboard: enable **Identity**, then **Git Gateway**, and point the admin to your repo. Then open `https://yoursite.com/admin` and sign up / log in.
- **If you deploy on Vercel (or another host):** You need an OAuth proxy so GitHub can redirect back to your app. See [Decap’s GitHub backend docs](https://decapcms.org/docs/github-backend/) and options like the “Proxy” backend or a small serverless OAuth handler. Alternatively, you can host only the admin on Netlify (Identity + Git Gateway) and keep the rest of the site on Vercel.

## 5. What you’ll see in the admin

- **Feed Items** – Short posts for the left column on the home page. Each entry has **Content** and **Date**.
- **Work, Golf, Wine, Adventure, Music, Feed (long-form)** – Full articles: **Title**, **Excerpt**, **Date**, **Pinned**, **Image**, **Body** (markdown). These live under `content/<section>/`.

New feed items go into `content/feed-items/`. New articles go into the right `content/<section>/` folder. The site already reads from these; after you save in Decap, trigger a new deploy (or rely on your host’s deploy-on-push) so the live site updates.

## 6. Media (images)

Uploads in Decap go to **`public/images`** and are served at **`/images/...`**. Use paths like `/images/your-file.jpg` in **Image** fields (or pick from the media library in the admin).
