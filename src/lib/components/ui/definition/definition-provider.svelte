<script module lang="ts">
	import { Tooltip as _Tooltip } from 'bits-ui';

	export type DefinitionPayload = {
		side?: 'top' | 'left' | 'right' | 'bottom';
		desc: string | Snippet;
	};

	export const definitionTether = _Tooltip.createTether<DefinitionPayload>();
</script>

<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import type { Snippet } from 'svelte';
</script>

<Tooltip.Root tether={definitionTether}>
	{#snippet children({ payload })}
		<Tooltip.Portal>
			<Tooltip.Content side={payload?.side || 'top'}>
				{#if payload !== null && typeof payload.desc !== 'string'}
					{@render payload.desc()}
				{:else}
					<p>{payload?.desc}</p>
				{/if}
			</Tooltip.Content>
		</Tooltip.Portal>
	{/snippet}
</Tooltip.Root>
