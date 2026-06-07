<script lang="ts" module>
	export type ForestContainerProps = SVGAttributes<SVGElement> & {
		seed?: number;
	};
</script>

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import ForestLayer from './ForestLayer.svelte';
	import { nextSeed, seedGen, splitmix32 } from '$lib/util/prng';

	let props: ForestContainerProps = $props();

	const width = 1920;
	const height = 1080;

	let seed = $derived(props.seed ?? seedGen());

	let layerSeeds = $derived.by(() => {
		const prng = splitmix32(seed);
		return [nextSeed(prng), nextSeed(prng), nextSeed(prng), nextSeed(prng), nextSeed(prng)];
	});

	const bezierLayers = [
		{ numCurves: 2, controlPointSD: 200 },
		{ numCurves: 2, controlPointSD: 100 },
		{ numCurves: 4, controlPointSD: 10 }
	];

	const bezierLayersSmooth = [
		{ numCurves: 2, controlPointSD: 200 },
		{ numCurves: 2, controlPointSD: 100 }
	];
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 {width} {height}"
	width="{width}px"
	height="{height}px"
	class="h-screen w-screen object-fill"
	{...props}
>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[3]}
		ground={{ height: 600, bezierLayers: bezierLayersSmooth }}
		trees={{ numAvg: 200, numSD: 25, sizeAvg: 8, sizeSD: 1, height: 10, inset: 15 }}
		fill="#2e4555"
	/>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[1]}
		ground={{ height: 750, bezierLayers }}
		trees={{ numAvg: 40, numSD: 10, sizeAvg: 20, sizeSD: 3, height: 20, inset: 20 }}
		fill="#1d2d3a"
	/>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[0]}
		ground={{ height: 900, bezierLayers }}
		trees={{ numAvg: 30, numSD: 10, sizeAvg: 30, sizeSD: 4, height: 20, inset: 20 }}
		fill="#16242d"
	/>
</svg>
<div class="absolute top-2 left-2">
	<button
		onclick={() => (seed = seedGen())}
		class="cursor-pointer rounded-lg bg-black/20 px-2 py-1 hover:underline">Refresh</button
	>
</div>
