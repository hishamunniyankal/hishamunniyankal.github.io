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

**Research projects:** `research.html` is organised as Overview → Doctoral
research (`#doctoral`, `#plc-rv`) → Selected research projects (`#rmlgym`) →
Applied AI/ML (`#applied-ai`, `#cifake`) → Research software (`#sigma2rml`) →
Related publications. Keep category labels distinct (doctoral / published
research / academic ML project / research software). RMLGym and PLC cards may
use explanatory SVG figures; do not add diagrams only for decoration.

**Publications:** in `publications.html`, each paper is a `<li class="pub">`
with a stable id (`pub-dsn`, `pub-rmlgym`). Wrap Hisham's name in
`<span class="me">…</span>`.

**Experience:** in `experience.html`, two tracks — Academic & Research
(`#academic`, `#teaching`) and Industry & Software Engineering (`#industry`).
Keep industrial PhD wording as association/collaboration (COBO Group /
Technoleader), not company employment. Malta visit spans two periods
(Dec 2025–Feb 2026; Apr–Jul 2026). Keep 30M+ and 5,000+/200+ metrics only in
the relevant Experience bullets.

**About:** biography (first person), research/engineering perspective,
education rows, optional third-person Short bio, professional links, contact.
Headshot is optional — see the HTML TODO in `about.html`.

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
