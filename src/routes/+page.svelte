<script lang="ts">
	import ForestContainer from '$lib/components/forest/ForestContainer.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<ForestContainer seed={data.seed} />
