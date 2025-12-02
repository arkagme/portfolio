import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeCodeBlocks } from './rehype-code-blocks.js';
import path from 'path'; 


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
            remarkPlugins: [remarkMath],
            rehypePlugins: [
                rehypeKatexSvelte,
				rehypeKatex,
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                rehypeCodeBlocks
            ],
            highlight: false,  // Disable mdsvex highlighting so our rehype plugin works
            layout: {
                _: path.resolve('./src/lib/components/mdsvex/Layout.svelte')
            }
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
      src: path.resolve('./src') // so 'src/...' imports work everywhere
    }
	}
};

export default config;
