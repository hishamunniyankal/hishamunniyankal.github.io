# Where to edit the site

Static **GitHub Pages** site: no build step. Edit HTML/CSS/JS, commit, push.

## Why multiple `.html` files?

Plain GitHub Pages does **not** run server-side includes or templates. Each page is a real file so you can:

- Edit **one topic per file** (e.g. only `publications.html` when a new paper ships).
- Use **normal URLs**: `yoursite.github.io/about.html`, `.../publications.html`.
- Keep **shared assets** in one place: `assets/css/`, `assets/js/`.

**Trade-off:** The **top nav** and **sidebar** are repeated on each page. When you add a new page or rename a link, update **every** HTML file that contains the nav (search for `site-nav__links` and `page-toc`). Alternatively, a small static site generator or build step could merge a single template later.

## File map

| File | Purpose |
|------|---------|
| **`index.html`** | Landing: hero, **What I Do**, **Impact Highlights** strip, **Featured Work** cards, welcome blurb, **tiles** linking to other pages. |
| **`about.html`** | Long-form about + tags. |
| **`research.html`** | Research themes and cards. |
| **`engineering.html`** | Industry/product engineering. |
| **`publications.html`** | Bibliography entries. |
| **`teaching.html`** | Teaching support. |
| **`education.html`** | Degrees. |
| **`contact.html`** | Address, email, profiles. |
| **`cv.pdf`** | CV (linked from hero on home). |

## Shared assets (edit once, applies everywhere)

| Path | Role |
|------|------|
| `assets/css/tokens.css` | Colours, `--layout-max`, fonts |
| `assets/css/base.css` | Reset, links, skip link |
| `assets/css/layout.css` | Nav, grid, sidebar, footer |
| `assets/css/sections.css` | Hero, cards, publications, home tiles, page headers |
| `assets/css/animations.css` | Reveals, hero motion |
| `assets/js/main.js` | Year, mobile nav, scroll reveal, **sidebar active link** for current page |

## Per-page edits

- **Title / SEO:** each file has its own `<title>` and `<meta name="description">`.
- **Which nav item is highlighted:** set `aria-current="page"` on the matching `<a>` in **`site-nav__links`** for that page only; remove it from other links on the same page.

## Adding a new page

1. Copy an existing page (e.g. `about.html`) to `newpage.html`.
2. Change `<title>`, `description`, main `<h1>`, and body content.
3. Add a list item in **both** `site-nav__links` and `page-toc` on **every** HTML file (including `index.html` home tiles if you want a card).
4. Optionally add a **home tile** on `index.html`.
