import type { Component } from 'svelte';

export type MetadataExport = {
	title?: string;
	desc?: string;
	date?: string;
	author?: string;
	coverAlt?: string;
} & Record<string, unknown>;

export type ComponentExport = Component;
