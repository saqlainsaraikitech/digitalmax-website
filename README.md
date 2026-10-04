# DigitalMax — Agency Website

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Live](https://img.shields.io/badge/Live-digitalmax.pk-22c55e)

Official website of **DigitalMax** — web development, Shopify stores, AI content creation and online-earning courses.

**Live site:** https://digitalmax.pk

## What's inside

- **Home** — hero, services grid, AI-content showcase, featured tools, process, WhatsApp CTA
- **Services** — Website Development, Shopify Store Design, AI Content Creation, YouTube/TikTok Automation
- **Tools shop** — 19 web tools, prices & details editable at runtime via `tools.json`
- **Courses** — YouTube / TikTok / Facebook Automation, curriculum from `courses.json`
- **Work** — client case studies (Velzohra, Spreads.pk, Tayyib Malik)
- **LMS promo** — links into the DigitalMax learning platform

## Tech stack

- React 19 + React Router 7 (BrowserRouter) with `.htaccess` rewrite for clean URLs on shared hosting
- Vite 7, Framer Motion, Lucide icons
- Brand palette: navy `#294461` + coral `#c74b25` (green reserved for WhatsApp buttons only)
- `tools.json` / `courses.json` load at **runtime** — update shop & courses by re-uploading two JSON files, no rebuild

## Project structure

```
src/
  pages/        # Home, Services, Tools, Courses, Work, About, Contact, ...
  components/   # layout, cards, CTAs
  data/         # tools.json, courses.json sources
  App.jsx
public/
  tools.json    # live tool catalog (runtime)
  courses.json  # live course catalog (runtime)
.htaccess       # SPA rewrite rules for Apache
```

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # -> dist/
```

The build script copies `src/data/tools.json` to `public/tools.json` before building.

## Deployment (Hostinger shared hosting)

Upload to `public_html`:

- `dist/index.html` → `public_html/index.html`
- `dist/assets/` → `public_html/assets/`
- `tools.json`, `courses.json`, `.htaccess` → `public_html/` root

To update the shop or courses later, just re-upload the two JSON files.

## License

All rights reserved — DigitalMax / Saqlain Abid.
