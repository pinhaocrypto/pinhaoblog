# Pin Hao — Personal Website

Personal website and blog for Pin Hao, focused on cryptographic engineering, post-quantum systems, Ethereum, and occasional life notes.

## Stack

- [Astro](https://astro.build/) static site generation
- Astro content collections for pages and blog posts
- Decap CMS configuration at `/admin`
- PostCSS, KaTeX, and Markdown plugins

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

## Production build

```bash
npm run build
npm run preview
```

Set `SITE_URL` to the canonical production origin when building, for example:

```bash
SITE_URL=https://example.org npm run build
```

Netlify's standard `URL` environment variable is also supported as a fallback. The value is used for canonical links, RSS, robots.txt, and the sitemap.

## Content

- Pages: `src/content/pages/`
- Pensieve entries: `src/content/pensieve/`
- Images: `public/img/`

Set `draft: true` in a Pensieve entry's frontmatter to exclude it from production builds and RSS while keeping it visible during local development. Entries can be Notes, Essays, Questions, or Memories, with a status from Ripple to Revisited.

## Credits

The visual foundation was adapted from the MIT-licensed [Clay Theme](https://github.com/lilxyzz/clay-theme).
