<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

    let { ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg
    width={256}
	height={1024}
	viewBox="0 0 500 500"
	xmlns="http://www.w3.org/2000/svg"
    style="background: #ffffff;"
	{...restProps}
>

</svg>