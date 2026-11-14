import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tobon2109.github.io',
  // En local se sirve desde la raíz. En GitHub Pages, el pipeline define ASTRO_BASE.
  base: process.env.ASTRO_BASE ?? '/',
});