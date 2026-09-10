<script lang="ts">
	const X = 25;
	const Y = 350;
	const HEIGHT = 25;
	const GAP = 10;
	const CODE_WIDTHS = [275, 175, 250, 150, 100, 275, 425, 350, 125, 250];
	const CODE_PX_PER_SEC = 1000;
	const CODE_DURATION = CODE_WIDTHS.reduce((t, n) => t + n, 0) / CODE_PX_PER_SEC;

	function arrayTo(n: number): number[] {
		return Array.apply(null, Array(n)).map((_, i) => i);
	}
</script>

{#each CODE_WIDTHS as width, i (i)}
	{@const WAIT_DUR = CODE_WIDTHS.slice(0, i).reduce((t, n) => t + n, 0) / CODE_PX_PER_SEC}
	{@const CURRENT_DUR = width / CODE_PX_PER_SEC}
	{@const CYCLED_CODES = [...CODE_WIDTHS.slice(i), ...CODE_WIDTHS.slice(0, i)]}
	<rect x={X} y={Y} width="0" height={HEIGHT} rx="5" ry="5" fill="#e4e4e4">
		<animate
			attributeName="width"
			begin="{WAIT_DUR - CODE_DURATION}s"
			dur="{CODE_DURATION}s"
			values="0; {width}; {width}"
			keyTimes="0; {CURRENT_DUR / CODE_DURATION}; 1"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="y"
			begin="{WAIT_DUR - CODE_DURATION}s"
			dur="{CODE_DURATION}s"
			values={arrayTo(CYCLED_CODES.length)
				.flatMap((n) => [Y - n * (HEIGHT + GAP), Y - n * (HEIGHT + GAP)])
				.join('; ')}
			keyTimes={CYCLED_CODES.flatMap((w, i) => {
				const wait = CYCLED_CODES.slice(0, i).reduce((t, n) => t + n, 0) / CODE_PX_PER_SEC;
				const dur = w / CODE_PX_PER_SEC;
				return [(wait / CODE_DURATION).toFixed(5), ((wait + dur) / CODE_DURATION).toFixed(5)];
			}).join('; ')}
			repeatCount="indefinite"
		/>
	</rect>
{/each}
