import type { Component } from 'svelte';

export type MetadataExport = {
	title?: string;
	desc?: string;
	date?: string;

	coverAlt?: string;

	actionHref?: string;
	actionText?: string;
} & Record<string, unknown>;

export type ComponentExport = Component;
