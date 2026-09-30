# Fate Apothecary v9

A Cloudflare Pages + Astro + Decap Turbo site for Fate Apothecary.

## What changed in v9

- Fixed Decap list fields so entries such as recipe ingredients can be typed as normal phrases with spaces.
- Ingredients now use a repeatable one-line text field (`+ Add Ingredient`) instead of the compact tag-style list control.
- Applied the same mobile-friendly repeatable text-field treatment to other phrase-based lists:
  - Recipe tags
  - Recipe notes & tips
  - Recipe storage notes
  - Herb tags
  - Herb culinary uses
  - Garden tags
  - Garden "What you need" items
  - Garden notes & tips
- Preserved the current site content, styling, About/footer edits, Decap Turbo configuration, and Turbo site ID from the uploaded v8.2.6.1 build.

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
