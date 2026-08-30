declare module '*?lqip' {
	import type { LqipExport } from '$lib/types/lqip'
	const lqip: LqipExport;
	export default lqip;
}

// vite-imagetools

declare module '*&url' {
	import type { URLExport } from '$lib/types/imageTools'
	const url: URLExport;
	export default url;
}

declare module '*&as=metadata' {
	import type { MetadataExport } from '$lib/types/imageTools'
	const meta: MetadataExport;
	export default meta;
}

declare module '*&as=picture' {
	import type { PictureExport } from '$lib/types/imageTools'
	const picture: PictureExport;
	export default picture;
}

declare module '*&inline' {
	import type { InlineExport } from '$lib/types/imageTools'
	const inline: InlineExport;
	export default inline;
}

// mdsvex

declare module '*.md' {
	import type { SvelteComponent } from 'svelte'
	import type { MarkdownExport } from '$lib/types/mdsvex'
	import type { PictureExport } from '$lib/types/imageTools'

	export default class Comp extends SvelteComponent{}

	export const metadata: MarkdownExport;
	export const cover: PictureExport | undefined;
}
