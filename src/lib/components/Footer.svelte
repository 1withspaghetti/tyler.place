<script lang="ts">
	import type { Snippet } from 'svelte';
	import ShareBar from './ShareBar.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<footer class="w-full max-w-4xl mx-auto p-8 mt-24">
	<div class="flex items-center justify-between text-muted-foreground text-sm">
		<div>
			<p>©2026 Tyler Place</p>
		</div>
		<ShareBar />
	</div>
	{@render children?.()}
</footer>
