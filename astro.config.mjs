// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com', // TODO: Update with actual site URL
    integrations: [react(), sitemap()],
    markdown: {
        remarkPlugins: [remarkMath, remarkEmoji],
        rehypePlugins: [rehypeKatex],
    },
});
