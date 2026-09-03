<script lang="ts">
	import { Separator } from '@/components/ui/separator';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const post = $derived(data.post);

	const Content = $derived(post.Content);
</script>

<article class="w-full max-w-3xl mx-auto flex flex-col">
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
				class="w-full max-w-3xl aspect-video object-cover object-center"
			/>
		</picture>
	{/if}
	<div class="w-full px-4 sm:px-8">
		<h1 class="text-4xl font-bold mt-8 mb-4">
			{post.title ?? 'Untitled Post'}
		</h1>
		{#if post.desc}
			<p class="mb-4 text-muted-foreground">
				{post.desc}
			</p>
		{/if}
		<div class="text-muted-foreground">
			{#if post.date}
				<p>
					{new Date(post.date).toLocaleDateString()}
				</p>
			{/if}
		</div>
	</div>

	<Separator class="my-6 mx-4 sm:mx-8" />

	<div class="px-4 sm:px-8 prose prose-base lg:prose-lg dark:prose-invert">
		<Content />
	</div>
</article>
