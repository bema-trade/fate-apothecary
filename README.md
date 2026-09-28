# Fate Apothecary starter

A minimal Astro + Decap CMS starter for the Fate Apothecary living cookbook.

## What's included
- Moody deep-plum design direction based on the approved recipe-page mockup
- Home page
- Recipe listing
- Pesto Chicken Meatballs as the first real structured recipe
- Responsive mobile layout
- Keep Screen Awake button using the Wake Lock API
- Decap CMS recipe form at `/admin`

## Run locally
1. Install Node.js.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local address Astro prints in the terminal.

## Test the CMS locally
In a second terminal, run `npx decap-server` while `npm run dev` is running. Then open `/admin`.

## Before Cloudflare deployment
1. Create a GitHub repository named `fate-apothecary` (or whatever you prefer).
2. Replace `YOUR_GITHUB_USERNAME/fate-apothecary` in `public/admin/config.yml` with the real repository.
3. Connect that GitHub repository to Cloudflare Pages.
4. Cloudflare build command: `npm run build`
5. Cloudflare output directory: `dist`
6. Configure GitHub OAuth for Decap before using the hosted `/admin` page. This can be handled with a small Cloudflare Worker so Fate can remain hosted on Cloudflare.
7. Move the `fateapothecary.com` domain from Google Sites only after the Cloudflare preview looks right.

## Still intentionally unfinished
- Real food photography (the recipe page currently has a clear photo placeholder)
- Final navigation categories
- Search/filter UI
- Ad/affiliate placements
- Recipe structured data/schema
- Hosted Decap OAuth

Those are intentionally deferred until the visual and recipe experience feel right.
