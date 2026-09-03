import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getPosts } from '$lib/posts';

export const prerender = true; // This will make the page prerendered

export const GET: RequestHandler = async () => {
	const posts = await getPosts(); // Fetch posts from the posts directory

	return json({ posts });
};
