<script>
	import SvelteSeo from 'svelte-seo';
	import HeroImage from './HeroImage.svelte';
	import mask_desktop from '$lib/assets/imgs/mountain_mask_desktop.png?format=webp&inline';
	import mask_mobile from '$lib/assets/imgs/mountain_mask_mobile.png?format=webp&inline';
	import { scrollY } from 'svelte/reactivity/window';

	const titleTranslate = $derived(Math.min(scrollY.current || 0, 250) / 5);
</script>

<SvelteSeo title="Tyler Place" />

<main class="">
	<section class="max-w-[1920px] relative w-full mx-auto">
		<HeroImage class="w-full" />
		<div
			class="absolute top-0 left-0 w-full h-full mask-center mask-cover mask-(--mask-mobile) sm:mask-(--mask-desktop)"
			style:--mask-desktop="url('{mask_desktop}')"
			style:--mask-mobile="url('{mask_mobile}')"
		>
			<div class="absolute bottom-[59%] text-center w-full">
				<h1
					class="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white"
					style:transform="translateY({titleTranslate}px)"
				>
					Tyler Place
				</h1>
			</div>
		</div>
	</section>
</main>
