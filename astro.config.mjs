// @ts-check
import { defineConfig } from 'astro/config';

// The public URL is used for canonical links, hreflang, and Open Graph images.
// Cloudflare Pages sets CF_PAGES_URL during builds; SITE_URL overrides it
// once the site has a custom domain.
const site =
  process.env.SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  image: {
    responsiveStyles: false,
  },
});
