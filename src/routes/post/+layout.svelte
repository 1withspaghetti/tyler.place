<script lang="ts">
	import type { LayoutProps } from './$types';
	import Header from '@/components/Header.svelte';
	import Footer from '@/components/Footer.svelte';

	let { children }: LayoutProps = $props();
</script>

<Header />
{@render children()}
<Footer />
