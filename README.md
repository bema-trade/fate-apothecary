# Fate Apothecary v11

Built from the current GitHub export supplied after v10, including the latest Ranch Seasoning Mix edits.

## v11 changes

- Upgraded recipe **Ingredients** in Decap from plain text entries to repeatable ingredient records.
- Each ingredient now has an optional **Linked recipe** field.
- The Linked recipe field searches the existing Recipes collection by title/description and stores that recipe's slug.
- On the live recipe page, linked ingredients render as subtle clickable links to the selected Fate recipe.
- Existing recipe ingredient data was migrated into the new structure so Pesto Chicken Meatballs and Ranch Seasoning Mix remain editable in Decap without re-entry.
- The Astro content schema remains backward-compatible with legacy plain-text ingredient entries as a safety net.
- All v10 recipe tools (screen-awake, print, optional timer), current site copy, footer, mobile navigation, Decap Turbo settings, and content are preserved.

## Example

For a future Ranch Dip recipe, enter an ingredient such as:

- **Ingredient:** `2 tablespoons ranch seasoning mix`
- **Linked recipe:** `Ranch Seasoning Mix`

The published ingredient will link directly to the Ranch Seasoning Mix recipe. Leave **Linked recipe** blank for ordinary ingredients.

## Deployment

Upload the contents of this folder to the existing `bema-trade/fate-apothecary` GitHub repository and commit to `main`. Cloudflare Pages should rebuild automatically.
