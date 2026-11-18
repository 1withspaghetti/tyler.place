<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import mask_base64 from '$lib/assets/imgs/mountain_mask.png?aspect=9:16&height=1080&fit=cover&position=center&format=webp&quality=100&inline';
	import { scrollY } from 'svelte/reactivity/window';
	import ShareBar from '@/components/ShareBar.svelte';
	import LogoFactory from '@/components/logo-factory/LogoFactory.svelte';
	import type { PageProps } from './$types';
	import PostCard from '@/components/PostCard.svelte';
	import Footer from '@/components/Footer.svelte';
	import { resolve } from '$app/paths';

	const titleTranslate = $derived(Math.min(scrollY.current || 0, 1000) / 5);

	const mountainTranslate = $derived(Math.min(scrollY.current || 0, 1000) / 8);

	const { data }: PageProps = $props();
	const posts = $derived(data.posts);
</script>

<SvelteSeo title="Tyler Place" />

<main class="w-full min-h-screen">
	<div class="relative mx-auto mb-8">
		<HeroImage
			class="max-w-[1920px] w-full overflow-hidden"
			style="object-position: 50% calc(50% + {mountainTranslate}px)"
		/>
		<div
			class="absolute top-0 left-0 w-full h-full mask-center mask-contain"
			style:mask-image="url('{mask_base64}')"
			style:mask-position="50% calc(50% + {mountainTranslate}px)"
		>
			<div
				class="absolute bottom-[51%] sm:bottom-[50%] xl:bottom-[49%] text-center w-full"
				style:transform="translateY({titleTranslate}px)"
			>
				<h1
					id="home"
					class="text-6xl sm:text-7xl xl:text-8xl font-bold font-heading text-background dark:text-foreground"
				>
					Tyler Place
				</h1>
			</div>
		</div>
		<div class="absolute right-4 bottom-4">
			<ShareBar class="text-background dark:text-foreground" />
		</div>
	</div>
	<section
		class="p-8 max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 mb-12"
	>
		<div>
			<LogoFactory class="size-80" />
		</div>
		<div>
			<h2 id="about" class="text-3xl font-bold font-heading mb-4">Who am I?</h2>
			<p class="mb-6">
				I'm Tyler, a passionate and optimization-obsessed <b>software engineer</b> with experience in
				Web, IOT, and Server Management. I'm currently studying SE at California Polytechnic State University
				in SLO!
			</p>
			<p class="mb-6">
				I love building embedded systems, designing data pipelines, and engineering scalable backend
				logic. I've help build <a
					href="https://sites.google.com/view/calpolysupermileage/home"
					target="_blank"
					class="underline">hyper-efficient vehicles</a
				>, run an
				<a href="https://github.com/1withspaghetti/AstroConnect" target="_blank" class="underline"
					>internal website</a
				>
				for University of Washington Astronomy, and cosplay with a
				<a href={resolve('/post/making_a_protogen')} target="_blank">self-made protogen head</a>.
			</p>
			<p class="mb-6">
				Check out my <a href="https://github.com/1withspaghetti" target="_blank" class="underline"
					>GitHub</a
				>
				or
				<a href="mailto:tylerlplace@gmail.com" target="_blank" class="underline">email me</a> if you want
				to chat!
			</p>
			<p class="text-center">&lt;3</p>
		</div>
	</section>
	<section class="p-8 max-w-6xl mx-auto mb-12">
		<h2 id="projects" class="text-3xl font-bold font-heading mb-6">What I've been up to:</h2>
		<div class="flex flex-wrap justify-center items-start gap-8 w-fit">
			{#each posts as post (post.slug)}
				<PostCard {post} />
			{/each}
			<!-- Filler elements to left-align the last row -->
			<div class="invisible h-0 max-w-xs w-full"></div>
			<div class="invisible h-0 max-w-xs w-full"></div>
			<div class="invisible h-0 max-w-xs w-full"></div>
		</div>
	</section>
</main>

<Footer>
	<div class="text-muted-foreground text-sm">
		Hero photo by <a
			class="underline"
			href="https://unsplash.com/@calebriston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			target="_blank">Caleb Riston</a
		>
		on
		<a
			class="underline"
			href="https://unsplash.com/photos/mount-rainier-under-soft-sky-TXiBwX0kg-Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			target="_blank">Unsplash</a
		>
	</div>
</Footer>
