import type { PictureExport } from './types/imageTools';
import type { ComponentExport, MetadataExport } from './types/mdsvex';
import type { LqipExport } from './types/lqip';
import { dev } from '$app/env';

export interface Post extends MetadataExport {
	slug: string;
	cover?: PictureExport;
	lqip?: LqipExport;
}

export async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('$lib/posts/*/index.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-2);
		if (!dev && slug?.startsWith('_')) continue;

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as MetadataExport;
			const cover = 'cover' in file ? (file.cover as PictureExport) : undefined;
			const lqip = 'lqip' in file ? (file.lqip as LqipExport) : undefined;
			posts.push({
				slug,
				cover,
				lqip,
				...metadata
			});
		}
	}

	posts = posts.sort(
		(a, b) => (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0)
	);

	return posts;
}

export interface PostWithContent extends Post {
	Content: ComponentExport;
}

export async function getPost(slug: string) {
	if (!dev && slug.startsWith('_')) return undefined;
	try {
		const file = await import(`$lib/posts/${slug}/index.md`);

		if (file && typeof file === 'object' && 'metadata' in file && 'default' in file) {
			const metadata = file.metadata as MetadataExport;
			const cover = 'cover' in file ? (file.cover as PictureExport) : undefined;
			const lqip = 'lqip' in file ? (file.lqip as LqipExport) : undefined;
			return {
				Content: file.default as ComponentExport,
				slug,
				cover,
				lqip,
				...metadata
			} satisfies PostWithContent;
		}
		return undefined;
	} catch (e) {
		console.error(e);
		return undefined;
	}
}
