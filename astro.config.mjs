import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.stationarystation.vercel.app',
	markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
      langs: ["c", "js", "ts", "jsx", "astro", "md", "mdx", "rs", "sh", "xml", "py", "lua", "css", "tsx"]
    }
  },
  integrations: [mdx(), sitemap()],
});
