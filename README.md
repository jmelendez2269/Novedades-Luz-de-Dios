# Botanica & Novedades Luz de Dios — website preview

A bilingual (English / Spanish) preview website for Botanica & Novedades Luz de Dios, a botanica at 806 W Webb Ave, Burlington, NC. It's built with [Astro](https://astro.build) and TypeScript and outputs a static site for Cloudflare Pages.

> Every page carries the footer line **"Preview concept, not affiliated with Botanica & Novedades Luz de Dios"**. It's a preview concept, not the shop's official site.

## Quick start

Requires **Node.js 22.23.4 or newer** (pinned in `.node-version` and `.nvmrc`).

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # type-checks, then builds the static site into dist/
npm run preview  # serves the built dist/ folder locally
```

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |

The first build optimizes about 870 image variants (AVIF, WebP and JPEG at several widths) and takes about 4 minutes. Later local builds reuse the cache in `node_modules/.astro`.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22.23.4`. Cloudflare also reads `.node-version`, so this is a safety net.
4. Save and deploy.

To deploy straight from your machine instead:

```bash
npm run build
npx wrangler pages deploy dist --project-name botanica-luz-de-dios
```

### Optional environment variables

| Variable         | Purpose |
| ---------------- | ------- |
| `SITE_URL`       | Public URL used for canonical links, `hreflang` and Open Graph image URLs, for example `https://example.com`. When it's not set, the build uses Cloudflare's `CF_PAGES_URL`, so preview deploys work without it. Set it once the site has a custom domain. |
| `ALLOW_INDEXING` | Set to `true` to let search engines index the site. While it's unset, every page sends `noindex, nofollow`, so the preview doesn't show up in search results before the shop approves it. |

`public/_headers` sets long-lived caching for the hashed files in `/_astro/` and a few basic security headers.

## Project structure

```
src/
  assets/photos/        Shop photos (originals, resized to a 2000px long edge)
  components/           Header, Footer, LanguageSwitcher, Photo, Gallery (masonry + lightbox),
                        PageHeader, ReviewQuote, HoursList, Icon
  data/
    business.ts         Name, address, phone, hours, map link, footer disclaimer
    photos.ts           Photo registry: alt text (EN/ES) and gallery tags
    reviews.ts          Google review quotes and their labeled translations
  i18n/ui.ts            Languages, routes, shared UI strings, time formatting
  layouts/BaseLayout.astro   <head>: SEO, Open Graph, hreflang, LocalBusiness JSON-LD
  pages/
    [...lang]/          Each page file builds an English route (/) and a Spanish route (/es/)
      index.astro       Home          /             /es/
      products.astro    Products      /products/    /es/products/
      gallery.astro     Gallery       /gallery/     /es/gallery/
      about.astro       About         /about/       /es/about/
      visit.astro       Visit         /visit/       /es/visit/
    404.astro
  styles/global.css     Design tokens (palette, type scale), base styles, motifs
public/                 favicon.svg, robots.txt, _headers
```

### Images

Photos live in **`src/assets/photos/`**. Astro's `astro:assets` turns each one into responsive AVIF/WebP/JPEG `srcset`s at build time, so originals are never sent to the browser. To add a photo:

1. Drop the `.jpg` into `src/assets/photos/`.
2. Add an entry with English and Spanish alt text and gallery tags in `src/data/photos.ts`.
3. Reference its key from a page or the gallery list in `src/pages/[...lang]/gallery.astro`.

Photos from the handoff set that are deliberately **not** used:

- `storefront-current-goldenhour-01.jpg`: a person's face is visible in the lower window.
- `storefront-historic-*`: the earlier purple and magenta paint is not how the shop looks today.
- `brand-*`: flyers, ads and a watermarked banner proof, kept for reference only.
- `storefront-current-signage-closeup-04.jpg` is used only as the `-cropped` version, which removes a public-health poster that shows a face.

## Design notes

- **Palette** is sampled from the real shop: facade blue `#2F6FAF`, magenta/berry `#8B2D4A`, teal, deep interior red, candle gold `#D4A017`, cream plaster `#F6F0E6`, and terracotta from the roof tiles.
- **Type:** Fraunces (headings), Source Sans 3 (body) and Barlow Condensed ExtraBold Italic for the shop's own Spanish sign phrases, a nod to the lettering on the services poster. Fonts are self-hosted through Fontsource.
- **Motifs:** a corrugated-awning stripe under the header, roof-tile scallops between bands, and page sections colored like the shop's walls.
- **Motion:** a fade-up on scroll and a soft candle glow on the call buttons. Both are turned off for visitors who prefer reduced motion.
- **Accessibility:**
  - skip link and semantic landmarks
  - a keyboard-usable menu and lightbox (arrow keys, Esc, focus return)
  - visible focus rings
  - alt text in both languages
  - `lang` attributes on mixed-language text

## Content rules

All facts, quotes and offerings come from the handoff packet. The site:

- states no prices, email address, credentials or invented services
- uses first names only for review quotes, and labels every translated quote as a translation
- keeps Spanish sign phrases exactly as the shop writes them
