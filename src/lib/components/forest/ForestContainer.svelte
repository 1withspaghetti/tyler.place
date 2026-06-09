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

	const bezierLayers1 = [
		{ numCurves: 2, controlPointSD: 200 },
		{ numCurves: 2, controlPointSD: 100 },
		{ numCurves: 4, controlPointSD: 10 }
	];

	const bezierLayers2 = [
		{ numCurves: 2, controlPointSD: 150 },
		{ numCurves: 2, controlPointSD: 100 },
		{ numCurves: 4, controlPointSD: 10 }
	];

	const bezierLayers3 = [
		{ numCurves: 2, controlPointSD: 200 },
		{ numCurves: 2, controlPointSD: 100 }
	];
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 {width} {height}"
	width="{width}px"
	height="{height}px"
	class="h-screen w-screen object-fill overflow-hidden"
	style="background: #4390c1;"
	{...props}
>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[3]}
		ground={{ height: 500, bezierLayers: bezierLayers3 }}
		trees={{ numAvg: 150, numSD: 25, sizeAvg: 8, sizeSD: 1, inset: 15, lod: true }}
		fill="#2e4555"
	/>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[3]}
		ground={{ height: 500, bezierLayers: bezierLayers3 }}
		trees={{ numAvg: 150, numSD: 25, sizeAvg: 8, sizeSD: 1, inset: 15, lod: true }}
		fill="#2e4555"
	/>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[1]}
		ground={{ height: 700, bezierLayers: bezierLayers2 }}
		trees={{ numAvg: 50, numSD: 10, sizeAvg: 18, sizeSD: 4, inset: 20 }}
		fill="#1d2d3a"
	/>
	<ForestLayer
		{width}
		{height}
		seed={layerSeeds[0]}
		ground={{ height: 900, bezierLayers: bezierLayers1 }}
		trees={{ numAvg: 35, numSD: 5, sizeAvg: 20, sizeSD: 5, inset: 20 }}
		fill="#16242d"
	/>

	<!-- Debugging Trees -->
	<!-- <ForestTree
		x={500}
		y={500}
		size={30}
		height={400}
		trunk={100}
		seed={seed}
		stroke="black"
		fill="black"
	/>
	<ForestTree
		x={750}
		y={500}
		size={30}
		height={400}
		trunk={100}
		seed={seed}
		lod
		stroke="black"
		fill="black"
	/> -->
</svg>
<div class="absolute top-2 left-2">
	<button
		onclick={() => (seed = seedGen())}
		class="cursor-pointer rounded-lg bg-black/20 px-2 py-1 hover:underline">Refresh</button
	>
</div>
