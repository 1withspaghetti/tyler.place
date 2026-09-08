<script lang="ts">
	import type { Post } from '@/posts';
	import * as Card from '$lib/components/ui/card';
	import { Button } from './ui/button';
	import { resolve } from '$app/paths';

	let { post }: { post: Post } = $props();
</script>

<Card.Root class="w-full max-w-xs pt-0">
	{#if post.cover}
		<picture>
			{#each Object.entries(post.cover.sources) as [format, srcset] (format)}
				<source {srcset} type={'image/' + format} />
			{/each}
			<img
				src={post.cover.img.src}
				alt={post.coverAlt}
				style:background-image={post.lqip ? `url('${post.lqip.lqip}')` : undefined}
				style:background-size="cover"
				style:font-size="0"
				class="w-full max-w-xs aspect-video object-cover object-center"
			/>
		</picture>
	{/if}
	<Card.Header>
		<Card.Title class="line-clamp-1"><a href={resolve('/post/[slug]', { slug: post.slug })}>{post.title || 'Untitled'}</a></Card.Title>
		{#if post.desc}
			<Card.Description class="line-clamp-3">
				{post.desc}
			</Card.Description>
		{/if}
		{#if post.date}
			<Card.Description>
				{new Date(post.date).toLocaleDateString()}
			</Card.Description>
		{/if}
	</Card.Header>
	<Card.Footer class="gap-2">
		{#if post.actionHref}
			<Button variant="default" size="lg" href={post.actionHref} class="flex-1"
				>{post.actionText || 'Visit'}</Button
			>
		{/if}
		<Button
			variant="outline"
			size="lg"
			href={resolve('/post/[slug]', { slug: post.slug })}
			class="flex-1">Read More</Button
		>
	</Card.Footer>
</Card.Root>
