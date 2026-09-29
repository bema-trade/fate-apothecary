# Fate Apothecary v8

A Cloudflare Pages + Astro + Decap Turbo starter for Fate Apothecary.

## What changed in v8

- Navigation is now **Recipes / Herbs / Garden** instead of Recipes / Pantry / Herbs.
- Added real **Herbs** and **Garden** collections to Decap `/admin`.
- Added Herbs and Garden listing/detail pages.
- Reworked the homepage so Fate reads as a broader practical wellness resource instead of a recipe-only site.
- Added site-wide search across Recipes, Herbs, and Garden.
- Rebuilt the mobile header with a hamburger menu plus search icon so every navigation item is accessible on phones.
- Recipe uploads now display their real image when one is provided.
- Preserved the Decap Turbo site ID and beta admin setup from v7.

## Deploy

Upload the contents of this folder to the root of the `bema-trade/fate-apothecary` GitHub repository and commit. Cloudflare Pages should deploy the new commit automatically.

Cloudflare Pages build settings:

- Production branch: `main`
- Build command: `npm run build`
- Build output: `dist`

## Admin

The admin lives at `/admin/` and uses Decap Turbo.

Current Turbo site ID:

`b82e48e5-869b-4b45-8e97-b16bac7822f3`
