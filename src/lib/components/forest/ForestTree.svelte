<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';

	export type Section = {
		numCurves: number;
		controlPointSD: number;
	};

	export type ForestTreeProps = SVGAttributes<SVGGElement> & {
		x: number;
		y: number;

		size: number;
		height: number;
	} & SVGAttributes<SVGGElement>;
</script>

<script lang="ts">
	let { x, y, size, height, ...props }: ForestTreeProps = $props();

	const sections = 7;
	const sectionMult = 0.85;

	let [left, right] = $derived.by(() => {
		let left = [];
		let right = [];
		let relY = y - height;
		for (let i = 0; i < sections; i++) {
			const relSize = size * ((sections - i + 1) / sections);
			const relSizeMult = size * Math.pow(sectionMult, i);
			const branchUp = size * 0.8;
			const branchDown = relSizeMult * 0.4;
			const branchOut = relSizeMult * 2;
			const isTop = i == sections - 1;
			left.push(
				`Q ${x - relSize / 2 - branchDown},${relY + branchDown} ${x - relSize / 2 - branchOut},${relY} Q ${x - relSize / 2 - branchOut / 4},${relY - branchUp / 3} ${isTop ? x : x - relSize / 2},${relY - branchUp}`
			);
			right.push(
				`Q ${x + relSize / 2 + branchDown},${relY + branchDown} ${x + relSize / 2 + branchOut},${relY} Q ${x + relSize / 2 + branchOut / 4},${relY - branchUp / 3} ${isTop ? x : x + relSize / 2},${relY - branchUp}`
			);
			relY -= branchUp;
		}
		return [left.join(' '), right.join(' ')];
	});
</script>

<path
	d="M {x},{y} L {x - size / 2},{y} L {x - size / 2},{y - height} {left} M {x},{y} L {x +
		size / 2},{y} L {x + size / 2},{y - height} {right}"
	{...props}
/>
