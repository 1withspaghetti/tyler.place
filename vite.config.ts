import { mdsvex } from 'mdsvex';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import lqip from 'vite-plugin-lqip';
import { imagetools } from 'vite-imagetools';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import type { Plugin } from 'unified'

export default defineConfig({
	plugins: [
		tailwindcss(),
		lqip(),
		imagetools({
			defaultDirectives: (url) => {
				if (url.searchParams.has('hero-desktop')) {
					return new URLSearchParams(
						'aspect=16:9&w=1080;1200;1920;2048;3840&fit=cover&position=center&format=avif;webp'
					);
				} else if (url.searchParams.has('hero-tablet')) {
					return new URLSearchParams(
						'aspect=4:3&w=640;750;828;1080;1280;1920;2048&fit=cover&position=center&format=avif;webp'
					);
				} else if (url.searchParams.has('hero-mobile')) {
					return new URLSearchParams(
						'aspect=9:16&w=640;750;828;1080;1280&fit=cover&position=center&format=avif;webp'
					);
				} else if (url.searchParams.has('post-cover')) {
					return new URLSearchParams(
						'aspect=16:9&w=640;750;828;1080;1280;1920&fit=cover&position=center&format=avif;webp'
					);
				} else if (url.searchParams.has('post-image')) {
					return new URLSearchParams('w=640;1080;1920&format=avif;webp&withoutEnlargement');
				}

				return new URLSearchParams();
			}
		}),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			preprocess: [
				mdsvex({
					extensions: ['.svx', '.md'],
					remarkPlugins: [remarkGfm, remarkBreaks as unknown as Plugin],
					rehypePlugins: [rehypeSlug as unknown as Plugin]
				})
			],
			extensions: ['.svelte', '.svx', '.md'],
			alias: {
				'@/*': './src/lib/*'
			}
		})
	]
});
