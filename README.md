# hishamunniyankal.github.io

Personal profile site for **Hisham Unniyankal** — computer science researcher
with academic AI/ML experience, formal-reasoning expertise, and production
software/data-engineering background. Static HTML/CSS/JavaScript, deployed to
**GitHub Pages** via GitHub Actions. No build step, no framework.

## Structure

Hybrid multi-page site (concise homepage + substantive section pages):

- `index.html` — home / overview (hero, themes, research & publication previews,
  experience summary, contact).
- `research.html` — doctoral research and selected AI/ML & research-software work.
- `publications.html` — peer-reviewed publications and scholarly profile links.
- `experience.html` — academic/research and industry/software experience
  (`#academic`, `#industry`, `#teaching`).
- `about.html` — biography, education (`#education`), profiles and contact
  (`#contact`).
- `engineering.html`, `teaching.html`, `education.html`, `contact.html` —
  redirect stubs to the matching page/anchor (`noindex`).
- `404.html` — custom not-found page.
- `assets/css/tokens.css` — design tokens (colours, type, spacing).
- `assets/css/styles.css` — shared component styles.
- `assets/js/main.js` — mobile menu, scroll reveal, footer year (progressive
  enhancement; the site works without it).
- `cv.pdf` — CV, linked from the nav and hero.
- `robots.txt`, `sitemap.xml` — SEO (canonical pages only; redirects omitted).
- `.github/workflows/deploy-pages.yml` — deployment workflow.
- `.nojekyll` — tells Pages to serve files as-is (no Jekyll build).

See **[EDITING.md](./EDITING.md)** for how to update content and deploy.

Primary navigation: **Home · Research · Publications · Experience · About · CV**

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which uploads
the repository as a static artifact and deploys it to GitHub Pages.

**One-time repository setting (must be done in the GitHub UI):**
`Settings → Pages → Build and deployment → Source → GitHub Actions`.
Until that source is selected, the site returns "Site not found".
