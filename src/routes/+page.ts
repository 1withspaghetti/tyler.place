import type { Post } from '$lib/posts';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const postsRes = await fetch('/api/posts.json');

	const posts = (await postsRes.json()) as { posts: Post[] };

	return {
		posts: posts.posts
	};
}) satisfies PageLoad;
