# Bella Blazwick-Noble — Portfolio

Static one-page portfolio for Bella Blazwick-Noble (director / filmmaker).
No build step, no dependencies — plain HTML/CSS/JS, hostable on GitHub Pages.

## Structure

```
index.html          # the page
assets/styles.css    # all styling
assets/main.js       # footer year + click-to-load Vimeo reels
.nojekyll            # tell GitHub Pages to serve files as-is
CNAME                # (add this once the custom domain is bought)
```

## Content

Reels are Vimeo embeds, loaded on click for speed:

| Reel                     | Vimeo ID     |
| ------------------------ | ------------ |
| Fiction                  | 1197453195   |
| Adverts & Music Videos   | 1197453194   |

Work index and contact details live directly in `index.html` — edit that file
to add/reorder projects.

## Run locally

Just open `index.html`, or serve it:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main` (or `master`), folder `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`.

### Custom domain

Once the domain is purchased:

1. Create a file named `CNAME` in the repo root containing just the domain,
   e.g. `bellablazwicknoble.com`.
2. At the domain registrar, add DNS records pointing to GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` record on `www` → `<user>.github.io`
3. In **Settings → Pages**, set the custom domain and enable **Enforce HTTPS**.
