import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/data/site.js';

/** Injects the public site URL (from src/data/site.js) into index.html. */
function siteUrl() {
  const url = process.env.SITE_URL || site.url;
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', url),
  };
}

export default defineConfig({
  // Relative asset paths work on GitHub Pages project sites and custom domains alike.
  base: './',
  plugins: [react(), siteUrl()],
});
