# hishamunniyankal.github.io

Personal profile site for **Hisham Unniyankal** — doctoral researcher (University
of Genoa) and software engineer. Static HTML/CSS/JavaScript, deployed to
**GitHub Pages** via GitHub Actions. No build step, no framework.

## Structure

- `index.html` — the whole profile on one page with anchored sections:
  Hero → Profile → Experience → Selected work (`#research`) → Publications →
  Education (`#education`) → Contact.
- `about.html`, `research.html`, `engineering.html`, `publications.html`,
  `teaching.html`, `education.html`, `contact.html` — lightweight redirect stubs
  to the matching `index.html` anchor (kept so previously shared links still
  work; `noindex` so they don't create duplicate search results).
- `404.html` — custom not-found page.
- `assets/css/tokens.css` — design tokens (colours, type, spacing).
- `assets/css/styles.css` — all component styles.
- `assets/js/main.js` — mobile menu, scroll reveal, footer year (progressive
  enhancement; the site works without it).
- `assets/favicon.svg` — favicon.
- `assets/images/projects/*.svg` — diagrams (only `rv-pou-monitoring.svg` is
  used on the page today; the others are kept as reusable assets).
- `cv.pdf` — CV, linked from the nav and hero.
- `robots.txt`, `sitemap.xml` — SEO.
- `.github/workflows/deploy-pages.yml` — deployment workflow.
- `.nojekyll` — tells Pages to serve files as-is (no Jekyll build).

See **[EDITING.md](./EDITING.md)** for how to update content and deploy.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which uploads
the repository as a static artifact and deploys it to GitHub Pages.

**One-time repository setting (must be done in the GitHub UI):**
`Settings → Pages → Build and deployment → Source → GitHub Actions`.
Until that source is selected, the site returns "Site not found".
