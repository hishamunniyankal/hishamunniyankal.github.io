# Editing this site

Static site, no build step: edit files, commit, push to `main`, and the GitHub
Actions workflow redeploys.

## Where things live

| What | File / location |
|------|-----------------|
| Home / overview | `index.html` |
| Research & projects | `research.html` |
| Publications | `publications.html` |
| Experience timelines | `experience.html` |
| Biography, education, contact | `about.html` |
| Colours, fonts, spacing | `assets/css/tokens.css` |
| Shared component styles | `assets/css/styles.css` |
| Mobile menu / reveal / year | `assets/js/main.js` |
| CV | `cv.pdf` |

## Navigation

All five content pages share the same primary nav:

Home · Research · Publications · Experience · About · CV

Mark the current page with `aria-current="page"` on the matching nav link.
Do not add Teaching, Education, Engineering or Contact as top-level nav items.

## Common edits

**Home previews:** keep `index.html` short. Link out to the dedicated pages
instead of duplicating full sections.

**Research projects:** in `research.html`, each project is an
`<article class="work-card">`. RMLGym uses `work-card--featured`. Stable ids
(`rmlgym`, `cifake`, `plc-rv`, `sigma2rml`) support deep links from the home page.

**Publications:** in `publications.html`, each paper is a `<li class="pub">`
with a stable id (`pub-dsn`, `pub-rmlgym`). Wrap Hisham's name in
`<span class="me">…</span>`.

**Experience:** in `experience.html`, roles are `<li class="entry">` items inside
`.timeline` lists. Tracks use `#academic`, `#industry`; teaching uses
`#teaching` on its entry.

**About:** biography and capability groups, then `#education` and `#contact`.

**Redirect stubs:** `engineering.html` → `experience.html#industry`,
`teaching.html` → `experience.html#teaching`, `education.html` →
`about.html#education`, `contact.html` → `about.html#contact`. Keep them
`noindex` so they do not create duplicate search results.

**Sitemap:** update `sitemap.xml` when adding a new *canonical* content page.
Do not list redirect-only URLs.

## Adding a new content page

1. Create a real HTML file with unique title, description, canonical and OG tags.
2. Copy the shared nav; set `aria-current="page"` on the new item.
3. Use `.page-header` (light) for the page H1 — reserve `.hero` for the homepage.
4. Add the URL to `sitemap.xml` and link it from the nav on every content page.

## Deployment

- Push to `main` → `.github/workflows/deploy-pages.yml` deploys automatically.
- **One-time GitHub setting:** `Settings → Pages → Build and deployment →
  Source → GitHub Actions`. Without it the site shows "Site not found".
- Verify locally with a real HTTP server (not `file://`), e.g.
  `python -m http.server 8000` then open `http://localhost:8000/`.
