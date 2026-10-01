# Fate Apothecary v13

Built from the current GitHub export supplied after v12.1, preserving all current recipes, Kitchen Tools, Decap content, and direct site edits.

## v13 changes

### Consistent About-area widths
- **About Fate Apothecary**, **Kitchen Tools**, and **Contact** now share the same 1000px page container.
- This keeps the three tabbed pages visually aligned while remaining narrower than the 1180px main site navigation/content width.
- Support and Thank You remain intentionally narrower simple-content pages.

### Contact form
- `/contact/` now has a working Name / Email / Subject / Message form.
- Submissions post to `/api/contact` through a Cloudflare Pages Function.
- The Function sends mail through Cloudflare Email Sending.
- Visitor email is used as Reply-To, so replying in Thunderbird replies directly to the visitor.
- A hidden honeypot field provides lightweight bot filtering without adding a CAPTCHA.
- The page also displays `hello@fateapothecary.com` as a direct-contact option.

### Favicon
- Replaced the old dark favicon with the supplied Fate Apothecary circular light-background logo so it stays visible in both light and dark browser chrome.
- Added 16px, 32px, Apple Touch, 192px, 512px, and multi-size `.ico` versions.
- Favicon URLs include a v13 cache-buster so browsers are more likely to pick up the new artwork immediately.

### Everything from v12 / v12.1 remains
- About-area tabs
- Kitchen Tools collection and recipe tool linking
- Recipe-to-recipe and ingredient/product links
- Affiliate disclosures
- Contact and Privacy footer links
- Keep Screen Awake + Print Recipe
- Built-in timer remains removed

## Contact form Cloudflare setup

After v13 deploys, add these variables to the **Fate Apothecary Pages project** for the **Production** environment:

- `CF_ACCOUNT_ID` — your Cloudflare account ID. A normal text variable is fine.
- `CF_EMAIL_TOKEN` — a Cloudflare API token with **Email Sending: Edit** permission. Store this as an encrypted Secret. You can reuse the working Email Sending token already used for SMTP if you want.
- `CONTACT_TO` — the real destination inbox that currently receives forwarded Fate Apothecary mail. Store it as an encrypted Secret if you prefer to keep that address private.

The Function sends from `hello@fateapothecary.com` directly to `CONTACT_TO`, with the visitor's address as Reply-To.

After adding or changing Pages environment variables, **redeploy the Pages project** so the Function receives them.

## Suggested deployment workflow

1. Upload the contents of this folder to the existing `bema-trade/fate-apothecary` GitHub repository.
2. Commit to `main`.
3. Wait for Cloudflare Pages to show the new production deployment.
4. Add the three contact-form environment variables above and redeploy.
5. Test `/contact/` by sending yourself a message and then replying to it from Thunderbird.
