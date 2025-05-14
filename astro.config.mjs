// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when deployed
  site: 'https://appvintech.com',
  vite: {
    plugins: [
        tailwindcss()
          ]
        },

  integrations: [
    mdx(),
    sitemap()
  ],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});