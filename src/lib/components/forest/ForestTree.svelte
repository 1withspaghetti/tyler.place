<script lang="ts" module>
	import type { Point } from 'bezier-js';
	import type { SVGAttributes } from 'svelte/elements';

	export type Branch = {
		from: Point,
		to: Point,
		rad: number,
		width: number
	};
	export type BranchWithChildren<T extends Branch = Branch> = Branch & {
		children: T[]
	};

	export type ForestTreeProps = SVGAttributes<SVGGElement> & {
		seed: number;
		// Pos
		x: number;
		y: number;
		// Trunk radius
		size: number;
		// Total tree height
		height: number;
		// Length before branches start
		trunk: number;
		// Optimized rendering (default false)
		lod?: boolean;
	} & SVGAttributes<SVGGElement>;
</script>

<script lang="ts">
	import { nextBounded, splitmix32 } from '$lib/util/prng';
	import { linearGet, linearLength } from '$lib/util/point';

	let { x, y, size, height, trunk: leavesStart, seed, lod = false, ...props }: ForestTreeProps = $props();

	const trunkBranchCount = 12;
	const trunkBranchCountSD = 2;
	const trunkBranchAngleRad = -55 * Math.PI/180;
	const trunkBranchAngleRadSD = 5 * Math.PI/180;

	function addBranchesToTrunk(trunk: BranchWithChildren<BranchWithChildren>, prng: () => number) {
		const numBranches = Math.round(nextBounded(prng, trunkBranchCount, trunkBranchCountSD));
		
		for (let i = 0; i < numBranches; i++) {
			const t = leavesStart/height + (i/(numBranches))*(1-(leavesStart/height));
			const from = linearGet(t, trunk.from, trunk.to);
			const len = (1.25 - (i/(numBranches-1))) * size * 3;
			const lenLeft = nextBounded(prng, len, len/5);
			const lenRight = nextBounded(prng, len, len/5);
			const radLeft = Math.PI - nextBounded(prng, trunkBranchAngleRad, trunkBranchAngleRadSD);
			const radRight = nextBounded(prng, trunkBranchAngleRad, trunkBranchAngleRadSD);
			const toLeft: Point = { x: from.x + Math.cos(radLeft) * lenLeft, y: from.y - Math.sin(radLeft) * lenLeft};
			const toRight: Point = { x: from.x + Math.cos(radRight) * lenRight, y: from.y - Math.sin(radRight) * lenRight};
			const width = lod ? trunk.width : trunk.width/2 * (1.5-t);
			trunk.children.push({
				from, to: toLeft, rad: radLeft, width, children: []
			});
			trunk.children.push({
				from, to: toRight, rad: radRight, width, children: []
			});
		}
	}

	function addSubBranchesToBranch(branch: BranchWithChildren, prng: () => number) {
		const branchLen = linearLength(branch.from, branch.to);
		const numBranches = /*(Math.round(branchLen / size) + 4) * 2;*/ 8;

		for (let i = 0; i < numBranches; i++) {
			const t = prng();
			const from = linearGet(t, branch.from, branch.to);
			const len = nextBounded(prng, branchLen/3+size/2, branchLen/6) * (1.2 - t);
			const rad = nextBounded(prng, branch.rad, Math.PI/5);
			const to: Point = { x: from.x + Math.cos(rad) * len, y: from.y - Math.sin(rad) * len };
			branch.children.push({
				from, to, rad, width: branch.width/2
			})
		}
	}

	const trunk = $derived.by(() => {
		const prng = splitmix32(seed)

		const trunk: BranchWithChildren<BranchWithChildren> = {
			from: { x, y },
			to: { x, y: y - height },
			rad: Math.PI/2,
			width: size,
			children: []
		};

		addBranchesToTrunk(trunk, prng);
		if (!lod) trunk.children.forEach(b => addSubBranchesToBranch(b, prng));

		return trunk;
	});
</script>

<g {...props}>
	<polygon points="{x-size/4},{y-trunk.width/4} {x},{y-height+trunk.width/4} {x+size/4},{y-trunk.width/4}" stroke-width={trunk.width/4} stroke-linejoin="round" />
	{#each trunk.children as b (b)}
		<line x1={b.from.x} y1={b.from.y} x2={b.to.x} y2={b.to.y} stroke-width={b.width} stroke-linecap="round" />
		{#each b.children as s (s)}
			<line x1={s.from.x} y1={s.from.y} x2={s.to.x} y2={s.to.y} stroke-width={s.width} stroke-linecap="round" />
		{/each}
	{/each}
</g>

