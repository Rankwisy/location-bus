import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    tailwind(),
    react(),
  ],
  site: 'https://location-bus.be',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
});
