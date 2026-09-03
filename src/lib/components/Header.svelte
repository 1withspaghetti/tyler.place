<script lang="ts">
	import { resolve } from '$app/paths';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@/utils';
	import { Button } from './ui/button';

	let { class: className, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<header class={cn('font-heading sticky top-0 z-20 w-full', className)} {...restProps}>
	<nav class="w-full bg-background border-b px-8 py-2">
		<Button variant="link" size="lg" href={resolve('/#projects')} class="font-heading"
			>Back to Home</Button
		>
	</nav>
</header>
