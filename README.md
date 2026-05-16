# Trove Collections

The website for [trovecollections.com](https://trovecollections.com) — curated travel-inspired finds personally used by Eris's circle.

Built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com). Content edited through [Decap CMS](https://decapcms.org) at `/admin`.

## For Mic — how to update the site

You almost never need to touch this folder. To edit blurbs, swap photos, or add new items, go to:

**https://trovecollections.com/admin**

Sign in (same GitHub login), make your changes through the friendly web forms, and click Publish. Changes go live in about a minute.

If you ever want a bigger change (new section, design tweak, anything that feels too hard), just send a message and I'll handle it.

## For developers (or future-Mic, or whoever)

```bash
npm install        # one-time setup
npm run dev        # local preview at http://localhost:4321
npm run build      # production build into dist/
```

Site structure:

- `src/content/items/` — one markdown file per product (frontmatter + blurb)
- `src/pages/` — page routes (collections, item detail, about, disclosure)
- `src/components/` — reusable pieces (header, footer, product card, FTC banner)
- `public/` — static assets (favicon, photos, robots.txt, admin/ for Decap CMS)

Cloudflare Pages auto-deploys every push to `main`.
