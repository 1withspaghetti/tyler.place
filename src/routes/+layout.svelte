<script lang="ts">
	import './layout.css';
	import { Toaster } from '$lib/components/ui/sonner';

	let { children } = $props();
</script>

<Toaster position="top-center" />
{@render children()}
