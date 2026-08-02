# Paul Ann Media — Astro site

A Trimmie Holdings company. Sister to Paul Ann Labs.

---

## Deploy (same pattern as HomeTimeJobs)

1. Create a new GitHub repo named `paulannmedia`
2. Create one file in it first (`.gitignore`) so the `main` branch exists
3. Go to `github.com/jclylcj/paulannmedia/upload/main`
4. Open this folder, go **inside** it, Ctrl+A, drag everything onto the page
5. Scroll down, click the green **Commit changes** button — this is the step that saves it
6. In Netlify: **Add new site → Import an existing project → GitHub → paulannmedia**
7. Domain management → Add domain → `paulannmedia.com`
8. In GoDaddy DNS for paulannmedia.com:
   - **A** record, name `@`, value `75.2.60.5`
   - **CNAME**, name `www`, value `<your-netlify-subdomain>.netlify.app`
9. Netlify → Project configuration → **Visitor access** → set visibility to **Public**

---

## Structure

```
src/
├── layouts/Layout.astro       SEO meta + Organization schema
├── components/
│   ├── Header.astro
│   └── Footer.astro
└── pages/
    ├── index.astro            Positioning, services, owned products, contact
    ├── services.astro         Six service lines + pricing approach
    ├── work.astro             HomeTimeJobs, Paul Ann Labs, client work
    └── about.astro            Origin, family structure, operating principles

public/
├── robots.txt                 AI crawlers explicitly allowed
└── llms.txt                   Company summary and positions for language models
```

---

## Palette

Teal-forward, distinguishing it from HomeTimeJobs (gold-forward) while staying
in the same family.

| Token | Hex | Use |
|---|---|---|
| navy | `#1A2F3D` | ground, headers, footers |
| teal | `#2AA09A` | primary accent, CTAs |
| gold | `#D4883A` | reserved, sparing |
| cream | `#F5F0EB` | page background |
| slate | `#7C8A8A` | secondary text |

---

## Still to do

1. **Logo and favicon** — currently a text wordmark. Same treatment as HomeTimeJobs.
2. **Email** — `hello@paulannmedia.com` is referenced throughout but doesn't exist yet.
   Cloudflare Email Routing forwards it free; set that up before driving any traffic.
3. **Client case studies** — the `/work` page has a placeholder section.
4. **Contact form** — currently mailto only. Add Netlify Forms when you want submissions
   tracked, plus a privacy policy at that point.
