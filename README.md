# Fate Apothecary v12

Built from the current GitHub export supplied after v11, preserving all current recipes and site edits.

## v12 changes

### About area
- Added a shared tab-style subnavigation for:
  - About Fate Apothecary
  - Kitchen Tools
  - Contact
- Kept ABOUT as the only top-level nav item; Kitchen Tools and Contact do not clutter the main navigation.
- Added Contact and Privacy links to the footer.
- Added a starter Privacy page.

### Kitchen Tools + affiliate links
- Added a **Kitchen Tools** collection to Decap.
- Each tool can include a category, photo, description, “Why we use it,” purchase/affiliate URL, and affiliate toggle.
- Added a public `/kitchen-tools/` page that automatically displays the tools entered in Decap.
- Added a clear affiliate disclosure to the Kitchen Tools page.
- Kitchen Tools are included in site-wide search.

### Recipe linking upgrades
- Recipes now have an optional **Tools we use** selector that searches the Kitchen Tools collection.
- Selected tools automatically appear on the recipe page.
- Ingredient entries now support an optional **Product / external link** in addition to the existing linked Fate Apothecary recipe field.
- Ingredient external links can be marked as affiliate links.
- Recipe pages automatically show a small disclosure near affiliate ingredient/tool links when applicable.
- Existing recipe ingredient data remains compatible and no current recipe content was removed.

### Contact
- Added `/contact/` and connected it to the About-area tabs and footer.
- The page structure and medical-advice boundary are in place.
- The actual contact form is intentionally **not wired yet** because this repo does not currently contain a confirmed Fate Apothecary email destination or mail Worker/binding. Once that destination is ready, the page can be connected without changing the site structure again.

## Suggested workflow

1. Upload the contents of this folder to the existing `bema-trade/fate-apothecary` GitHub repository.
2. Commit to `main` and wait for Cloudflare Pages to show the new production deployment.
3. Open `/admin/`.
4. Add Kitchen Tools first as you encounter them.
5. While editing recipes, use:
   - **Linked Fate Apothecary recipe** for homemade components such as Ranch Seasoning Mix.
   - **Product / external link** for specific ingredients/products.
   - **Tools we use** for reusable kitchen equipment.

Cloudflare Pages should rebuild automatically after each Decap/GitHub content change.
## v12.1
Removed the built-in recipe timer from both recipe pages and the Decap CMS. Keep Screen Awake and Print Recipe remain.

