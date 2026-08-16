# Northloop — studio website

A plain HTML/CSS/JS, multi-page site: no build step, no framework. Open `index.html`
directly in a browser, or deploy as static files.

## Files

```
index.html        Home
services.html     Services (Websites / Bots / Automation)
portfolio.html     Portfolio (labeled honestly: client pitch / demo)
about.html         About
contact.html       Contact
css/style.css      All styles (design tokens at the top)
js/main.js         Mobile nav toggle + footer year
img/favicon.svg    Favicon
```

## If you want to change the name "Northloop"

The name appears in a few places on every page: the `<title>`, the `.brand` link in
the header, and the footer. Do a find-and-replace for `Northloop` across all `.html`
files — there's no template system, so it's literal text in each file.

Other name ideas if you want to compare before committing: **Loopstack**,
**Automatik Studio**. Whichever you pick, check that the matching `.com`/`.dev`
domain and a Telegram/Instagram handle are actually free before settling on it.

## Before this goes live

- **Contact form**: the form on `contact.html` doesn't submit anywhere yet. Easiest
  fix is a free tier on [Formspree](https://formspree.io) or similar — set the
  `action` attribute on the `<form>` to the endpoint it gives you. Until that's done,
  the mailto link next to the form is the real way people can reach you.
- **Portfolio labels**: keep the "Case study — client pitch in progress" tag on the
  salon project honest — only change it to "Client project" once the owner has
  actually agreed to it. Misrepresenting an unsigned pitch as a done deal is the
  fastest way to lose the credibility this site is trying to build.
- **Deploying**: this is a static site, so GitHub Pages works the same way as the
  salon-site repo — push this folder to a GitHub repo and enable Pages in the repo
  settings, or use Netlify/Vercel's drag-and-drop deploy for a custom domain.
- **Analytics**: none included by design (privacy + no unnecessary scripts). Add a
  privacy-friendly option later (e.g. Plausible) if you want traffic numbers.

## Accessibility & performance notes

- Color contrast, focus states, and touch target sizes (44px minimum) were checked
  against WCAG AA while building this.
- `prefers-reduced-motion` is respected — no animation depends on motion to convey
  information.
- No images are loaded yet (portfolio uses inline SVG placeholders instead of fake
  screenshots) — when you add real photos, use compressed WebP/AVIF and set
  `width`/`height` attributes to avoid layout shift.
