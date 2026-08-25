<script lang="ts">
	import desktop from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?hero-desktop&quality=90&as=picture';
	import tablet from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?hero-tablet&quality=90&as=picture';
	import mobile from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?hero-mobile&quality=90&as=picture';
	import lqip from '$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?lqip';
	import { cn } from '@/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let props: HTMLAttributes<HTMLImageElement> = $props();
</script>

<picture>
	{#each Object.entries(desktop.sources) as [format, srcset] (format)}
		<source {srcset} type={'image/' + format} media="(width >= 80rem)" />
	{/each}
	{#each Object.entries(tablet.sources) as [format, srcset] (format)}
		<source {srcset} type={'image/' + format} media="(width > 40rem and width < 80rem)" />
	{/each}
	{#each Object.entries(mobile.sources) as [format, srcset] (format)}
		<source {srcset} type={'image/' + format} media="(width < 40rem)" />
	{/each}
	<img
		src={desktop.img.src}
		alt="snow covered rainier mountain during daytime"
		style:background-image="url('{lqip.lqip}')"
		style:background-size="cover"
		style:font-size="0"
		{...props}
		class={cn('aspect-9/16 sm:aspect-4/3 xl:aspect-16/9 object-cover object-center', props.class)}
	/>
</picture>
