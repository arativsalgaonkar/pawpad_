# Pawpad Website

Conscious pet grooming & wellness studio, Kalyan Nagar, Bengaluru. This repo is the
rebuild of the site handed over by the previous vendor — same design, same content,
same pages — migrated off Netlify onto a plain static site, deployed on GitHub Pages
at [pawpad.in](https://pawpad.in).

Full context: see `Pawpad-Technical-Audit-and-Migration-Proposal.docx` (shared separately
with the client) for the vulnerability review and scope this rebuild is based on, and
`TODO.md` in this repo for exactly what's done vs. still open.

## How this is built

The original site loaded React/ReactDOM/Babel from a CDN and compiled every page's JSX
live in the visitor's browser, all seven pages at once, on a single hash-routed
(`#/about`) `index.html`. This version:

- Is a real multi-page site — `index.html`, `about.html`, `experience.html`,
  `grooming.html`, `courses.html`, `boarding.html`, `myotherapy.html` — each a genuine
  URL with its own `<title>`/description/Open Graph tags, loading only its own JS.
- **Has no build step and no JSX anywhere.** Every file under `assets/js/` is plain
  JavaScript using `React.createElement(...)` directly instead of JSX. Each HTML page
  loads them with ordinary `<script>` tags, the same way the original vendor `index.html`
  loaded its scripts. You can open any `.html` file in this repo, or push the repo as-is
  to GitHub Pages, and it works with zero compilation.
- Still uses the exact same component logic, structure, and CSS as the original (see
  `vendor-original/` for the untouched JSX handover, kept for reference/audit trail only
  — it is not used by the live site).
- Still loads React/ReactDOM from the same CDN (unpkg) the vendor used, with the same
  verified Subresource Integrity hashes — nothing here needed to change.

### Project layout

```
index.html            — Home
about.html
experience.html
grooming.html
courses.html
boarding.html
myotherapy.html

assets/
  css/
    styles.css         — untouched design system (font paths adjusted for this folder)
  js/
    hubspot.js          — unchanged for now; Week 3 replaces this with Web3Forms
    shared.js            — nav, footer, cursor trail, testimonials, marquee (plain JS,
                            React.createElement — converted once from the original JSX,
                            edit this file directly going forward, JSX is not used again)
    booking.js           — the multi-step booking modal (plain JS)
    page-shell.js        — per-page mount wrapper: owns the booking-modal open/close
                            state, renders CursorTrail + TopNav + page + Footer +
                            BookingModal for whichever page component the HTML page
                            passes in
    pages/
      home.js
      about.js
      experience.js
      grooming.js
      services-pages.js  — still defines Courses/Boarding/Myotherapy together, same as
                            the original vendor file
  fonts/                 — BostonAngel, OpenSans (unchanged)
  img/                   — photos + logos (orphaned/unused files dropped, four oversized
                            photos compressed — see TODO.md)

scripts/build.mjs        — OPTIONAL. Only used by CI to minify assets/js and assets/css
                            into dist/ for a smaller deploy. Never required to view or
                            deploy the site — see "Deployment" below.
vendor-original/          — the untouched vendor handover (JSX), reference only
```

### Local development

No build step needed. From the repo root:

```
npx http-server . -p 3000
```

Then open `http://localhost:3000`. Editing any file under `assets/js/`, `assets/css/`,
or any `.html` page takes effect on refresh — nothing to compile.

### Deployment

Two ways to deploy, your choice:

**A. Zero-build (simplest).** In the repo's Settings → Pages, set the source to
**"Deploy from a branch"** → `main` → `/ (root)`. Push to `main` and GitHub serves the
repo exactly as it sits — no Actions, no build, nothing to break.

**B. Via GitHub Actions (what `.github/workflows/deploy.yml` in this repo does).**
Set Settings → Pages source to **"GitHub Actions"** instead. On every push to `main`,
the workflow runs `npm run build` (which only minifies `assets/js` and `assets/css`
into `dist/` for smaller payloads — see `scripts/build.mjs`) and deploys `dist/`. This
is optional today and exists so there's a place to add real optimizations later
(image compression, cache-busting, etc.) without introducing a build pipeline from
scratch.

Either way, the `CNAME` file at the repo root points the custom domain (pawpad.in) at
Pages once DNS is updated — see `TODO.md` for that cutover step.

`dist/` (only produced by option B) is git-ignored — it's a disposable build artifact,
not checked in.
