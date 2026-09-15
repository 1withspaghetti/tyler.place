<script lang="ts">
	import { resolve } from '$app/paths';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@/utils';
	import { Button } from '$lib/components/ui/button';

	let { class: className, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<header class={cn('font-heading sticky top-0 z-20 w-full', className)} {...restProps}>
	<nav class="w-full bg-background border-b px-8 py-2">
		<Button variant="link" href={resolve('/')} class="font-heading text-lg">Tyler.Place</Button>
	</nav>
</header>
