# Fate Apothecary v18

Built from the fresh GitHub export supplied on October 8, 2026. Existing recipes, herbs (including Dill, Garlic, Oregano, and Thyme), Kitchen Tools, images, contact form, analytics, footer/social links, and all other current content are preserved.

## v15 changes

### Herb profile redesign
Herb pages are no longer one long stack of equally styled text sections.

- Botanical name is styled separately beneath the herb name.
- Flavor & aroma, In the kitchen, Growing it, and Storage & preserving now appear in a responsive card grid.
- Traditional use notes receive a wider editorial section so longer writing has room to breathe.
- Things to know is a distinct safety callout and always includes the site-wide educational herb disclaimer.
- The layout collapses cleanly to one column on phones/tablets.
- Herb listing cards now treat the existing `description` field as the botanical name, matching how the current content is actually being entered.

### Books & resources for Herb profiles
A reusable **Herb Books & Resources** collection is now available in Decap CMS.

Each resource can store:
- title
- author / creator
- short note about why you use it
- cover / image
- external link
- affiliate-link toggle

Each Herb profile now has a **Books & resources I use** relation field. Add a book/resource once in the new collection, then select it on as many herb profiles as needed. Selected resources render as cards near the bottom of the public Herb page. Affiliate resources automatically receive the existing commission disclosure and sponsored-link markup.

### Related herbs
Each Herb profile now has a **Related herbs** multi-select relation field in Decap. Selected herbs appear as linked cards under **Keep exploring** on the public profile.

### CMS wording cleanup
The Herb field previously labeled **Short description** is now labeled **Botanical name**. The underlying field name remains `description` so all existing herb entries continue working without migration or re-entry.

### Favicon cache refresh
The existing favicon artwork/files are preserved; the favicon query-string cache buster is updated from `v=13` to `v=15` so browsers are prompted to fetch the newer favicon files you already replaced in GitHub.

### Decap Turbo session handling
The site was already running Decap's current Turbo beta build when the repeated `Supabase request failed: JWT expired` errors occurred. Decap's own Turbo documentation says those short-lived sessions are supposed to refresh automatically in the background, so this behavior is upstream of the Astro site rather than something the Herb form is causing.

For v15, `/admin/` now tracks Decap's official `@beta` channel instead of pinning one beta build. That means Turbo authentication/session fixes can arrive without requiring another Fate Apothecary code release. Decap's existing local form-recovery protection remains unchanged (and has already successfully recovered entries after the JWT error).

If JWT expiration continues after v15, the next step should be reporting the reproducible issue to Decap Turbo rather than adding a custom authentication hack to the site.

## Important notes

- No custom autosave or Editorial Workflow was added. Decap's built-in local recovery is already doing the job needed for accidental/session-failure recovery.
- No existing Herb content was rewritten or altered.
- No Amazon Associates links were added. The new resource system is ready for affiliate URLs later, once Fate Apothecary/BEMA are approved.

## Deployment

Upload the contents of this folder to the existing `bema-trade/fate-apothecary` GitHub repository and commit to `main`. Cloudflare Pages should deploy automatically.

## v16 information architecture update

- Desktop navigation: Support Us · About · Library | logo/home | Recipes · Herbs · Garden.
- Mobile navigation keeps Home full-width at the top, with the remaining six links in two columns.
- New Library hub with Kitchen & Cooking, Garden & Growing, and Bookshelf pages.
- Existing Kitchen Tools content is preserved and surfaced under Library · Kitchen & Cooking; `/kitchen-tools/` redirects to the new location.
- Herb book/resource records are now the shared Library · Bookshelf collection; existing herb selections continue to work by slug.
- Added a CMS-ready Library · Garden & Growing collection.
- Standard interior pages now share one 1000px width rule; content-heavy pages continue using the 1180px wide shell.
- Support is labeled Support Us in navigation and uses the standard interior width.


## v17 affiliate-readiness update

- Kitchen & Cooking, Garden & Growing, and Bookshelf now use one shared affiliate disclosure component and identical wording.
- Affiliate links marked `affiliate: true` automatically display a clear link-level notice: **Paid link — we may earn a commission.**
- The same link-level notice appears on affiliate ingredient links and linked Kitchen Tools on Recipe pages, and affiliate Bookshelf resources on Herb pages.
- `rel="sponsored"` remains automatic on links marked as affiliate.
- Affiliate toggles now default to **off** in the CMS until the exact URL can actually earn a commission.
- CMS image fields now remind editors to use their own photos rather than copying retailer-hosted product images without permission.
- Existing `m.media-amazon.com` image URLs were removed from Library content while preserving every item, description, external product URL, category, featured flag, and Herb/Recipe relationship. Those entries will show their existing placeholders until personal photos are uploaded through the CMS.
- The Amazon-specific Associates statement is intentionally **not** displayed yet because Fate Apothecary is not currently enrolled. Once enrollment begins and Amazon Special Links are used, add Amazon's required Associate identification statement at that time.
- Removed the leftover pre-v16 `src/content/herb-resources/` folder; Bookshelf remains the single source for Herb reference resources.


## v18 recipe-page usability update

- Individual Recipe hero photos are now capped at a more intentional size instead of stretching to match the full intro-column height. Desktop recipe photos top out at 440px tall; mobile recipe photos use a compact 300px height.
- Recipe image sizing is now separate from Herb/Garden resource hero sizing, so this change does not alter those profile pages.
- The Recipe index/card images are unchanged.
- Keep Screen Awake and Print Recipe remain above the recipe title on desktop.
- On phones/tablets, the Recipe flow is now photo → recipe information → Keep Screen Awake / Print Recipe → ingredients and instructions. This keeps the cooking controls near the point where a reader has actually decided to use the recipe.
- The change is template-level, so all existing and future Recipe profiles inherit the same behavior automatically.
