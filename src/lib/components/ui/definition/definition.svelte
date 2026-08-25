<script lang="ts" module>
	import type { Tooltip as TooltipPrimitive } from 'bits-ui';
	import type { DefinitionPayload } from './definition-provider.svelte';

	export type DefinitionProps = DefinitionPayload &
		Omit<Omit<TooltipPrimitive.TriggerProps<DefinitionPayload>, 'tether'>, 'payload'>;
</script>

<script lang="ts">
	import * as Tooltip from '../tooltip';
	import { definitionTether } from './definition-provider.svelte';

	let { ref = $bindable(null), side, desc, onclick, ...restProps }: DefinitionProps = $props();
</script>

<Tooltip.Trigger
	bind:ref
	tether={definitionTether}
	payload={{
		side,
		desc
	}}
	onclick={(e) => {
		e.stopPropagation();
		e.preventDefault();
		e.currentTarget.focus();
		onclick?.(e);
	}}
	{...restProps}
/>
