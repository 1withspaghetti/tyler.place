<script>
	import SvelteSeo from 'svelte-seo';
	import HeroImage from './HeroImage.svelte';
	import mask_base64 from '$lib/assets/imgs/mountain_mask.png?format=webp&quality=100&inline';
	import { scrollY } from 'svelte/reactivity/window';
	import { MoveDown } from '@lucide/svelte'

	const titleTranslate = $derived(Math.min(scrollY.current || 0, 250) / 5);

	const scrollNotifOpacity = $derived(1 - Math.min((scrollY.current || 0) / 200, 1))
</script>

<SvelteSeo title="Tyler Place" />

<main class="w-full min-h-screen">
	<section class="relative mx-auto">
		<HeroImage class="max-w-[1920px] w-full" />
		<div
			class="absolute top-0 left-0 w-full h-full mask-center mask-cover mask-(--mask)"
			style:--mask="url('{mask_base64}')"
		>
			<div
				class="absolute bottom-[51%] sm:bottom-[48%] text-center w-full font-heading text-background dark:text-foreground"
				style:transform="translateY({titleTranslate}px)"
			>
				<h1 class="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold">Tyler Place</h1>
			</div>
		</div>
		<div class="fixed left-1/2 bottom-8 -translate-x-1/2" style:opacity={scrollNotifOpacity}>
			<div class="bg-background/50 rounded-lg flex items-center px-4 py-2 gap-4">
				<MoveDown class="size-4" strokeWidth={3} />
				<div class="font-bold text-nowrap">Scroll Down</div>
				<MoveDown class="size-4" strokeWidth={3} />
			</div>
		</div>
	</section>
</main>
