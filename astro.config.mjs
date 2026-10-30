import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://paulannmedia.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/privacy/sent') && !page.includes('/contact/sent') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
