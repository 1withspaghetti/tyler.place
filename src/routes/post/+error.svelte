<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Button } from '@/components/ui/button';
	import { ChevronLeft } from '@lucide/svelte';
</script>

<SvelteSeo title="Error | Tyler Place" />

<div class="min-h-screen flex flex-col items-center pt-24">
	<h1 class="text-6xl font-heading font-semibold mb-2">{page.status}</h1>
	<p class="text-2xl italic mb-4">{page.error?.message || 'Unknown :<'}</p>
	<Button href={resolve('/')} variant="default" size="lg"><ChevronLeft /> Go Home</Button>
</div>
