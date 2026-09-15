<script lang="ts">
	import './layout.css';
	import { Toaster } from '$lib/components/ui/sonner';
	import * as Tooltip from '@/components/ui/tooltip';
	import SvelteSeo from 'svelte-seo';

	let { children } = $props();
</script>

<SvelteSeo title="Tyler Place" />

<Toaster position="top-center" />
<Tooltip.Provider>
	{@render children()}
</Tooltip.Provider>
