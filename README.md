# Akshay Joshi — Portfolio Website

A static personal portfolio site built with semantic HTML5, modular CSS (CSS custom properties), and vanilla JavaScript.

---

## Project Structure

```
portfolio/
├── index.html                  ← Single-page HTML (all sections)
├── assets/
│   ├── css/
│   │   ├── base.css            ← CSS custom properties, reset, typography utilities
│   │   ├── animations.css      ← Keyframes, scroll-snap, reduced-motion overrides
│   │   ├── nav.css             ← Site header, desktop nav, mobile drawer
│   │   ├── layout.css          ← Section structure, containers, grid, timeline, education
│   │   └── components.css      ← Cards, skill items, badges, tags, buttons, social links
│   ├── js/
│   │   ├── nav.js              ← Mobile nav toggle (open/close/escape/outside-click)
│   │   ├── typed-init.js       ← Typed.js role animation config
│   │   └── main.js             ← AOS init + footer copyright year
│   └── images/                 ← Place any local images/avatar here
└── README.md
```

### CSS load order (in `<head>`)
1. `base.css` — variables & reset must come first
2. `animations.css` — keyframes and scroll-snap (no dependencies)
3. `nav.css` — uses variables from base
4. `layout.css` — uses variables from base
5. `components.css` — may override layout, uses all variables

### JS load order (before `</body>`)
1. CDN: Typed.js, AOS
2. `nav.js`
3. `typed-init.js`
4. `main.js`

---

## Running Locally

This is a fully static site — no build step required.

```bash
# Option 1: VS Code Live Server extension — open index.html, click "Go Live"

# Option 2: Python
python -m http.server 8080
# then open http://localhost:8080

# Option 3: Node http-server
npx http-server . -p 8080
```

---

## Third-party Dependencies (CDN)

| Library       | Version  | Purpose                          |
|---------------|----------|----------------------------------|
| Font Awesome  | 6.4.0    | Icons throughout the site        |
| AOS           | 2.3.1    | Scroll-triggered animations      |
| Typed.js      | 2.0.16   | Hero role typing animation       |
| Inter (Google Fonts) | — | Body font                   |

---

## Customisation

All design tokens (colors, spacing, fonts, shadows) are defined as CSS custom properties in `assets/css/base.css` under `:root`. Change them in one place and the entire site updates.

```css
/* Example: change accent color */
:root {
  --color-accent: #f59e0b;  /* amber instead of sky-blue */
}
```

---

## Deployment

Drop the entire `portfolio/` folder into any static host:
- **GitHub Pages** — push to `gh-pages` branch or `/docs` folder
- **Netlify / Vercel** — drag-and-drop or connect repo, publish directory: `./`
- **AWS S3 + CloudFront** — upload as static website
