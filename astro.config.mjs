import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://riteshpurwar.com',
  integrations: [tailwind()],
  build: {
    rollupOptions: {
      external: ['astro:assets']
    }
  }
});