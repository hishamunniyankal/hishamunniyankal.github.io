# hishamunniyankal.github.io

Personal profile site for **Hisham Unniyankal** — doctoral researcher (PhD
ongoing) in Computer Science at the University of Genoa. The site presents
runtime verification and research software, academic applied machine learning,
and production software/data engineering. Static HTML/CSS/JavaScript, deployed
to **GitHub Pages** via GitHub Actions. No build step, no framework.

## Information architecture

Hybrid multi-page academic/research profile:

| Page | Role |
|------|------|
| `index.html` | Home overview (hero, research & publication previews, experience summary, contact) |
| `research.html` | Selected research & technical work |
| `publications.html` | Peer-reviewed citations and scholarly profiles |
| `experience.html` | Academic/research and industry experience |
| `about.html` | Biography, education, short bio, profiles, contact |

Primary navigation: **Home · Research · Publications · Experience · About · CV**

Compatibility redirects (`noindex`):

- `engineering.html` → `experience.html#industry`
- `teaching.html` → `experience.html#teaching`
- `education.html` → `about.html#education`
- `contact.html` → `about.html#contact`

## Repository layout

- `assets/css/tokens.css` — design tokens (navy / off-white / teal, type, spacing)
- `assets/css/styles.css` — shared component styles
- `assets/js/main.js` — mobile menu, scroll reveal, footer year (progressive enhancement)
- `assets/icons/` — Scholar, ORCID, GitHub, LinkedIn SVGs
- `cv.pdf` — CV
- `robots.txt`, `sitemap.xml` — SEO (canonical pages only)
- `.github/workflows/deploy-pages.yml` — GitHub Pages deploy
- `.nojekyll` — serve files as-is (no Jekyll)

See **[EDITING.md](./EDITING.md)** for content updates.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which uploads
the repository as a static artifact and deploys it to GitHub Pages.

**One-time repository setting (GitHub UI):**
`Settings → Pages → Build and deployment → Source → GitHub Actions`.
Until that source is selected, the site returns "Site not found".
