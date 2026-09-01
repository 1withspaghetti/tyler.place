<script lang="ts">
	import ShareBar from './ShareBar.svelte';
</script>

<footer class="w-full max-w-2xl mx-auto p-8 mt-24">
	<div class="flex items-center justify-between text-muted-foreground text-sm">
		<div>
			<p>©2026 Tyler Place</p>
		</div>
		<ShareBar />
	</div>
	<div class="text-muted-foreground text-sm">
		Hero photo by <a
			class="underline"
			href="https://unsplash.com/@calebriston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			target="_blank">Caleb Riston</a
		>
		on
		<a
			class="underline"
			href="https://unsplash.com/photos/mount-rainier-under-soft-sky-TXiBwX0kg-Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			target="_blank">Unsplash</a
		>
	</div>
</footer>
