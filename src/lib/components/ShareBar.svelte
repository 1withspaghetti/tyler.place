<script lang="ts">
	import { Mail, Share2 } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';

	async function share() {
		try {
			if (!('share' in navigator)) throw new Error('Share API not supported');
			await navigator.share({
				title: 'Tyler Place',
				url: 'https://tyler.place'
			});
		} catch (e) {
			if (e instanceof DOMException && e.name == 'AbortError') return;

			await navigator.clipboard.writeText('https://tyler.place');
			toast('URL copied to clipboard!');
		}
	}
</script>

<div class="flex items-center gap-4 text-background dark:text-foreground">
	<a
		class="block p-2 hover:bg-background/20 rounded-lg"
		aria-label="Email"
		title="Email Me"
		href="mailto:tylerlplace@gmail.com"
		target="_blank"
		rel="noreferrer"
	>
		<Mail class="size-6" strokeWidth={2.5} />
	</a>
	<a
		class="block p-2 hover:bg-background/20 rounded-lg"
		aria-label="Github"
		title="My Github"
		href="https://github.com/1withspaghetti"
		target="_blank"
		rel="noreferrer"
	>
		<SiGithub class="size-6" title="My Github" strokeWidth={2.5} />
	</a>
	<button
		class="block p-2 hover:bg-background/20 rounded-lg cursor-pointer"
		aria-label="Share"
		title="Share URL"
		onclick={share}
	>
		<Share2 class="size-6" strokeWidth={2.5} />
	</button>
</div>
