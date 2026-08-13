import { mdsvex } from 'mdsvex';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import lqip from 'vite-plugin-lqip';
import { imagetools } from 'vite-imagetools'
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		tailwindcss(),
		lqip(),
		imagetools({
			defaultDirectives: (url) => {
				if (url.searchParams.has("hero-desktop")) {
					return new URLSearchParams("aspect=16:9&w=640;750;828;1080;1200;1920;2048;3840&fit=cover&position=center&format=avif;webp;jpg")
				} else if (url.searchParams.has("hero-mobile")) {
					return new URLSearchParams("aspect=9:16&w=640;750;828;1080;1280&fit=cover&position=center&format=avif;webp;jpg")
				}

				return new URLSearchParams();
			}
		}),
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
			extensions: ['.svelte', '.svx', '.md'],
			alias: {
				'@/*': './src/lib/*'
			}
		})
	]
});
