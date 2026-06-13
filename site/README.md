# Monaris Docs

The documentation site for **Monaris** — a private financial operating system for the stablecoin economy. Onchain AR/AP, private-by-default payments, and income-backed credit, all tied together by one Score.

Built with [Fumadocs](https://fumadocs.dev) (framework mode) on Next.js, themed end-to-end with the Monaris design system.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Docs engine | Fumadocs 16 (`fumadocs-ui`, `fumadocs-core`) |
| Content | Fumadocs MDX (`content/docs/*.mdx`) |
| Search | Orama (`/api/search`) |
| Styling | Tailwind CSS v4 + Monaris design tokens |
| Fonts | Satoshi (display, self-hosted) + Inter (body, `next/font`) |
| Icons | Lucide |

## Quick start

Requires Node.js 22+.

```bash
npm install
npm run dev      # http://localhost:3000  (docs at /docs)
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run types:check  # generate MDX types + typecheck
npm run lint         # eslint
```

## Documentation sections

The docs are intentionally tight — one page per product, written to be read by humans.

| Page | Route |
|------|-------|
| What is Monaris | `/docs` |
| Monaris AR/AP | `/docs/ar-ap` |
| Monaris Private | `/docs/private` |
| Monaris Score & Credit | `/docs/score-credit` |
| Mona AI | `/docs/mona` |

## Project structure

```
site/
├── content/docs/        # MDX pages + meta.json (sidebar order)
├── src/
│   ├── app/
│   │   ├── (home)/      # marketing landing page
│   │   ├── docs/        # docs layout + dynamic [[...slug]] route
│   │   ├── api/search/  # Orama search route
│   │   ├── og/          # dynamic OG images
│   │   ├── layout.tsx   # root layout, fonts, metadata, theme
│   │   ├── global.css   # Monaris design tokens → Fumadocs theme
│   │   └── icon.png      # favicon (Monaris M-mark)
│   ├── components/      # mdx registry + diagram components
│   └── lib/             # source loader, shared config, layout options
├── public/             # fonts, brand assets, logo, favicon
└── source.config.ts    # Fumadocs MDX config
```

## Editing content

Each page is an MDX file in `content/docs/`. Frontmatter drives the title, description, and sidebar icon (any [Lucide](https://lucide.dev) name, PascalCase):

```mdx
---
title: Monaris AR/AP
description: Create invoices, track payments, manage payouts.
icon: FileText
---

Body content in Markdown / MDX...
```

- **Sidebar order** is controlled by `content/docs/meta.json`.
- **Components** available in MDX: Fumadocs `Card`/`Cards`/`Callout`/`Tabs`, plus project diagrams from `src/components/diagrams.tsx` (`<ConnectMap />`, `<FlowSteps />`). Import them at the top of an MDX file.
- Lucide icons can be imported and used inline (e.g. inside `<Card icon={<Shield />}>`).

## Design system

The theme is a faithful map of the Monaris design system onto Fumadocs' CSS variables (see `src/app/global.css`). Light is the default (Monaris is a light-first product); a neutral-black dark theme is available via the navbar toggle.

| Token | Value |
|-------|-------|
| Monaris Lime | `#c8ff00` (hover `#b8ef00`) — surfaces, CTAs, focus, gradient |
| Dark Lime | `#7cb518` — lime-toned text/icons on light (lime is never body text on white) |
| App background | `#f9fafb` (light) · `#0a0a0a` (dark) |
| Ink | `#131720` |
| Radii | 10–12px controls · 16–24px cards |

Brand assets live in `public/` (`monaris-mark.png`, self-hosted Satoshi in `public/fonts/`, social posters in `public/brand/`).

## Deploy

Any platform that runs Next.js (Vercel recommended). The build is fully static for docs pages (`generateStaticParams`), and ships `llms.txt` / per-page markdown routes for LLM consumption out of the box.
