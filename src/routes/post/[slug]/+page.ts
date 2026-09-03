import { getPost } from '@/posts';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// This is a static page, so we can prerender it
// SvelteKit will automatically crawl all the posts from the index page and know what slug values to prerender
export const prerender = true;

export const load = (async ({ params }) => {
	const post = await getPost(params.slug);

	if (!post) return error(404, 'Post Not Found');

	return {
		post
	};
}) satisfies PageLoad;
