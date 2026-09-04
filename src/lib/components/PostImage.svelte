<script lang="ts">
	import type { PictureExport } from '@/types/imageTools';
	import type { LqipExport } from '@/types/lqip';
	import { cn } from '@/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		src,
		lqip,
		class: className,
		...restProps
	}: Omit<HTMLImgAttributes, 'src'> & { src: PictureExport; lqip?: LqipExport } = $props();
</script>

<picture>
	{#each Object.entries(src.sources) as [format, srcset] (format)}
		<source {srcset} type={'image/' + format} />
	{/each}
	<img
		src={src.img.src}
		width={src.img.w}
		height={src.img.h}
		style:background-image={lqip ? `url('${lqip.lqip}')` : undefined}
		style:background-size="cover"
		style:font-size="0"
		class={cn('w-full h-auto', className)}
		{...restProps}
	/>
</picture>
