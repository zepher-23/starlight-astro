import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  site: 'https://starlightcinematics.com',
  integrations: [react(), mdx(), sitemap(), robotsTxt(), icon()]
});