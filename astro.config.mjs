// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  site: 'https://hammadmajid.pages.dev',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: {
        "react-dom/server": "react-dom/server.edge",
      },
    },
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