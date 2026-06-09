<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';

	export type BezierLayer = {
		numCurves: number;
		controlPointSD: number;
	};

	export type ForestLayerProps = SVGAttributes<SVGGElement> & {
		width: number;
		height: number;
		seed: number;
		ground: {
			bezierLayers: BezierLayer[];
			height: number;
		};
		trees?: {
			numAvg: number;
			numSD: number;
			// Trunk Width
			sizeAvg: number;
			sizeSD: number;
			
			inset: number;
			lod?: boolean;
		};
	} & SVGAttributes<SVGGElement>;
</script>

<script lang="ts">
	import { Bezier, type Point } from 'bezier-js';
	import { flipOverPoint, linearGet, toSVG } from '../../util/point';
	import { nextBounded, nextSeed, splitmix32 } from '$lib/util/prng';
	import ForestTree from './ForestTree.svelte';

	let { width, height, seed, ground, trees, ...props }: ForestLayerProps = $props();

	const numControlPoints = 2; // Max supported by svg path

	let layers = $derived(ground.bezierLayers);
	let endingCPs: (Point | undefined)[] = [];

	function interpolateBezier(curve: Bezier, depth: number, prng: () => number): Bezier[] {
		if (depth == layers.length) return [curve];
		let layer = layers[depth];

		let curves: Bezier[] = [];
		for (let i = 0; i < layer.numCurves; i++) {
			let start = curve.get(i / layer.numCurves);
			let end = curve.get((i + 1) / layer.numCurves);

			let controlPoints: Point[] = [];
			for (let j = 0; j < numControlPoints; j++) {
				if (j == 0 && endingCPs[depth] != undefined) {
					controlPoints[j] = flipOverPoint(endingCPs[depth], start);
					continue;
				}
				let og = linearGet((j + 1) / (numControlPoints + 1), start, end);
				og.y += prng() * 2 * layer.controlPointSD - layer.controlPointSD;
				controlPoints[j] = og;
			}

			endingCPs[depth] = controlPoints[numControlPoints - 1];
			curves.push(
				...interpolateBezier(new Bezier([start, ...controlPoints, end]), depth + 1, prng)
			);
		}
		return curves;
	}

	let groundCurves = $derived.by(() => {
		endingCPs = [];
		let rootCurve = new Bezier([
			{ x: 0, y: ground.height },
			{ x: width, y: ground.height }
		]);
		return interpolateBezier(rootCurve, 0, splitmix32(seed));
	});

	let treeProps = $derived.by(() => {
		if (!trees) return [];
		const prng = splitmix32(seed);
		const num = nextBounded(prng, trees.numAvg, trees.numSD);
		let treeProps: { x: number, y: number, size: number, seed: number }[] = [];
		for (let i = 0; i < num; i++) {
			let t = (i + 1) / (num + 1);
			let curve = groundCurves[Math.floor(t * groundCurves.length)];
			let curveT = curve.lineIntersects({
				p1: { x: width * t, y: 0 },
				p2: { x: width * t, y: height }
			})[0];
			if (curveT)
				treeProps.push({
					x: width * t,
					y: curve.get(curveT).y + trees.inset,
					size: nextBounded(prng, trees.sizeAvg, trees.sizeSD),
					seed: nextSeed(prng)
				});
		}
		return treeProps;
	});
</script>

<g stroke={props.fill} {...props}>
	<path
		d="M 0,{height} L 0,{ground.height} C {groundCurves
			.flatMap((c) => c.points.slice(1, 4))
			.map(toSVG)
			.join(' ')} L {width},{height}"
	/>
	<!-- Debugging -->
	<!-- {#each groundCurves as c (c)}
        {@const s = c.points[0]}
        {@const cp1 = c.points[1]}
        {@const cp2 = c.points[2]}
        {@const e = c.points[3]}
        <path d="M {s.x},{s.y} C {cp1.x},{cp1.y} {cp2.x},{cp2.y} {e.x},{e.y}" fill="none" stroke="black" stroke-width={2} />
        <line x1={s.x} y1={s.y} x2={cp1.x} y2={cp1.y} stroke="black" stroke-dasharray="10,10" stroke-width={1} />
        <line x1={e.x} y1={e.y} x2={cp2.x} y2={cp2.y} stroke="black" stroke-dasharray="10,10" stroke-width={1} />
        {#each c.points as p, i (p)}
            <circle cx={p.x} cy={p.y} fill={i == 0 || i == 3 ? "red" : "blue"} r={5} />
        {/each}
    {/each} -->

	{#each treeProps as tProps (tProps)}
		<ForestTree {...tProps} height={tProps.size * 10} trunk={tProps.size + trees!.inset} lod={trees?.lod} />
	{/each}
</g>
