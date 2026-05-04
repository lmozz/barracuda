# AGENTS.md - Barracuda

## Project

Static single-page app for visualizing individual payment breakdowns from a restaurant event. Deployed via GitHub Pages.

## No build system

- No bundler, linter, typechecker, or test runner
- All files live at repo root
- Edits: CSS goes to `styles.css`, JS goes to `script.js`, HTML structure in `index.html`
- Verify by running a local server (`python3 -m http.server` or VS Code Live Server) then opening in browser; `file://` will fail due to CORS on `fetch()`

## Structure

| File | Purpose |
|---|---|
| `index.html` | HTML structure only |
| `styles.css` | Custom styles (iOS 26 liquid glass effect, animations) |
| `script.js` | DOM logic, fetches datos.json |
| `datos.json` | Payment data (`datos` array) |
| `tailwind.js` | Tailwind Play CDN (vendored) |
| `animate.min.css` | Animate.css (vendored) |
| `wall.jpg`, `tabla.png`, `ticket.jpeg` | Visual assets |
| `icon.png`, `logo-dizucar.png` | Branding |

## Conventions

- Spanish language throughout UI
- Payment data lives in the `datos` array inside `datos.json`
- Total general displayed in header is hardcoded, not computed from `datos`
