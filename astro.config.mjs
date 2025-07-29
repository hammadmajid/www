// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hammadmajid.pages.dev',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap(), partytown()],

  server: {
    host: 'portfolio.localhost',
    port: 4321,
  },

  adapter: cloudflare({
    imageService: "compile",
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
      persist: {
        path: './.cache/wrangler/v3'
      },
    },
  }),
});