# Villa Ballanca — homepage preview

A speculative rebuild of the homepage for Villa Ballanca (Lower Burrell, PA), built by
Prucnal & Sachdev. Not commissioned.

- **Preview:** https://prucnalj.github.io/Villa-Ballanca/ (built `noindex`)
- **Their current site:** https://www.villaballanca.com
- **Open questions:** [CONTENT-NEEDED.md](CONTENT-NEEDED.md)

## What this fixes

Verified on their live site on 2026-09-06:

1. Every asset frozen at `/wp-content/uploads/2021/09/`, including images still named
   `New-Project-2021-09-16T144749.139.png`.
2. A "Mission Statement" heading on a restaurant homepage.
3. Template copy throughout — "Good Times. Good People. Great Food".
4. 34 lines of visible text total, for a business with three distinct sides to it.

Their copyright is current and their title tag is fine. This is thin, not neglected.

## The real opportunity

Neither menu exists as text on the site, and there is not one photograph of their food,
dining room or banquet rooms. Menus as real pages and actual photography would change more
than any layout work.

## Stack

Astro, static output, no client framework, no webfonts, no JavaScript on the page.

```bash
MSYS_NO_PATHCONV=1 SITE_URL=https://prucnalj.github.io BASE_PATH=/Villa-Ballanca \
  PUBLIC_NOINDEX=1 npm run build
```
