<script lang="ts">
	import desktop from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?aspect=16:9&w=1280;1920;2560;3200;3840&fit=cover&position=center&format=avif;webp&as=metadata';
	import tablet from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?aspect=4:3&w=640;960;1280;1600;1920&fit=cover&position=center&format=avif;webp&as=metadata';
	import mobile from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?aspect=9:16&w=420;640;960;1280;1280&fit=cover&position=center&format=avif;webp&as=metadata';
	import lqip from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?lqip';
	import type { Metadata } from '@/types/imageTools';
	import { cn } from '@/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let props: HTMLAttributes<HTMLImageElement> = $props();

	const variants = [
		{ meta: mobile as Metadata[], media: '(width < 40rem)' },
		{ meta: tablet as Metadata[], media: '(width >= 40rem) and (width < 80rem)' },
		{ meta: desktop as Metadata[], media: '(width >= 80rem)' }
	];
</script>

<picture>
	{#each variants as variant, i (i)}
		{@const formats = variant.meta.map((v) => v.format).filter((f, i, arr) => arr.indexOf(f) == i)}
		{#each formats as format (format)}
			{@const meta = variant.meta.filter((m) => m.format == format)}
			<source
				srcset={meta.map((m) => `${m.src} ${m.width}w`).join(', ')}
				type={'image/' + format}
				sizes={meta.map((m) => `(max-width: ${m.width}px) ${m.width}px`).join(', ')}
				media={variant.media}
			/>
		{/each}
	{/each}
	<img
		alt="snow covered rainier mountain during daytime"
		style:background-image="url('{lqip.lqip}')"
		style:background-size="cover"
		style:background-position="center"
		style:font-size="0"
		{...props}
		class={cn('aspect-9/16 sm:aspect-4/3 xl:aspect-video object-cover object-center', props.class)}
	/>
</picture>
