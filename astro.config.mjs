// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when deployed
  site: 'https://appvintech.com',

  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});