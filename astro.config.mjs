// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_URL || process.env.URL || 'http://localhost:4321',
    integrations: [sitemap({
        filter: (page) => !new URL(page).pathname.startsWith('/blog'),
    })],
    markdown: {
        remarkPlugins: [remarkMath, remarkEmoji],
        rehypePlugins: [rehypeKatex],
    },
});
