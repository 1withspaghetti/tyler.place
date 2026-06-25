<script lang="ts">
	import Header from '@/components/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<Header />
{@render children()}
