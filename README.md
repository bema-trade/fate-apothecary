# Fate Apothecary v10

Built from the current GitHub export supplied by Beth (v8.2.6.1 lineage with later live edits preserved).

## v10 changes

- Normalized top spacing and interior-page title sizing across Recipes, Herbs, Garden, Search, About, Support, Thank You, and resource detail pages.
- Made About, Support, and Thank You use the same content width and paragraph spacing.
- Moved **Keep screen awake** to the top of recipe pages.
- Added a **Print recipe** button with print-friendly CSS that removes site navigation, footer, buttons, and large recipe photography.
- Added an optional **Timer (minutes)** field to the Decap recipe editor.
- Recipes with a timer value automatically show a timer button at the top of the page.
- Pesto Chicken Meatballs is set to a 20-minute timer as an example.
- Existing content, About copy, Support copy/Square link, Thank You page, footer, Decap Turbo settings, Ranch Seasoning Mix, and mobile navigation are preserved.

## Recipe timer

In `/admin`, enter a whole number in **Timer (minutes)** only when a recipe benefits from a single primary timer. Leave it blank for recipes that do not need one.

The timer button counts down in the page. Tapping it while it is running resets it. When time is up it shows an alert and, where supported, vibrates briefly.

## Deployment

Upload the contents of this folder to the existing `bema-trade/fate-apothecary` GitHub repository and commit to `main`. Cloudflare Pages should then rebuild automatically.
