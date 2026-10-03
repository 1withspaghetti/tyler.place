<script lang="ts">
	import desktop from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?aspect=16:9&w=1080;1200;1920;2048;3840&fit=cover&position=center&format=avif;webp&quality=90&as=picture';
	import tablet from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?aspect=4:3&w=640;750;828;1080;1280;1920;2048&fit=cover&position=center&format=avif;webp&quality=90&as=picture';
	import mobile from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?aspect=9:16&w=640;750;828;1080;1280&fit=cover&position=center&format=avif;webp&quality=90&as=picture';
	import lqip from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?lqip';
	import { cn } from '@/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let props: HTMLAttributes<HTMLImageElement> = $props();

	const variants = [
		{
			picture: desktop,
			class: "hidden xl:block aspect-video"
		},
		{
			picture: tablet,
			class: "hidden sm:block xl:hidden aspect-4/3"
		},
		{
			picture: mobile,
			class: "block sm:hidden aspect-9/16"
		}
	]
</script>

{#each variants as variant, i (i)}
	<picture>
		{#each Object.entries(variant.picture.sources) as [format, srcset] (format)}
			<source {srcset} type={'image/' + format} sizes="auto" />
		{/each}
		<img
			src={variant.picture.img.src}
			alt="snow covered rainier mountain during daytime"
			loading="lazy"
			style:background-image="url('{lqip.lqip}')"
			style:background-size="cover"
			style:font-size="0"
			{...props}
			class={cn('object-cover object-center', variant.class, props.class)}
		/>
	</picture>
{/each}
