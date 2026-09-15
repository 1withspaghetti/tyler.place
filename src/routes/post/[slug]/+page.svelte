<script lang="ts">
	import { Separator } from '@/components/ui/separator';
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	import SvelteSeo from 'svelte-seo';
	import './prism-atom-dark.css';

	let { data }: { data: PageData } = $props();

	const post = $derived(data.post);

	const Content = $derived(post.Content);
</script>

<SvelteSeo
	title="{post.title} | Tyler Place"
	description={post.desc}
	openGraph={{
		title: post.title,
		description: post.desc,
		url: 'https://tyler.place' + resolve('/post/[slug]', { slug: post.slug }),
		type: 'website',
		images: post.cover
			? [
					{
						url: post.cover.img.src,
						width: post.cover.img.w,
						height: post.cover.img.h,
						alt: post.coverAlt
					}
				]
			: undefined,
		site_name: 'Tyler.Place',
		article: {
			author: ['Tyler Place'],
			published_time: post.date ? new Date(post.date).toISOString() : undefined
		}
	}}
/>

<article class="w-full max-w-4xl p-4 sm:p-8 mx-auto flex flex-col">
	<h1 class="text-4xl font-bold font-heading mb-4 text-center">
		{post.title ?? 'Untitled'}
	</h1>
	<div class="text-muted-foreground text-center">
		<p>
			{#if post.date}{new Date(post.date).toLocaleDateString()} |{/if} By
			<a href={resolve('/')} class="underline">Tyler Place</a>
		</p>
	</div>

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
				class="w-full my-8 aspect-video object-cover object-center"
			/>
		</picture>
	{:else}
		<Separator class="my-8" />
	{/if}

	<div class="prose prose-base lg:prose-lg dark:prose-invert prose-headings:font-heading">
		<Content />
	</div>
</article>
