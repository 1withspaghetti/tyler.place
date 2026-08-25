<script>
	import SvelteSeo from 'svelte-seo';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import mask_base64 from '$lib/assets/imgs/mountain_mask.png?aspect=9:16&height=1080&fit=cover&position=center&format=webp&quality=100&inline';
	import { scrollY } from 'svelte/reactivity/window';
	import ShareBar from '@/components/ShareBar.svelte';
	import DefinitionProvider from '@/components/ui/definition/definition-provider.svelte';
	import Definition from '@/components/ui/definition/definition.svelte';

	const titleTranslate = $derived(Math.min(scrollY.current || 0, 500) / 10);
</script>

<SvelteSeo title="Tyler Place" />

<main class="w-full min-h-screen">
	<section class="relative mx-auto mb-8">
		<HeroImage class="max-w-[1920px] w-full" />
		<div
			class="absolute top-0 left-0 w-full h-full mask-center mask-contain"
			style:mask-image="url('{mask_base64}')"
		>
			<div
				class="absolute bottom-[51%] sm:bottom-[50%] xl:bottom-[49%] text-center w-full font-heading text-background dark:text-foreground"
				style:transform="translateY({titleTranslate}px)"
			>
				<h1 class="text-6xl sm:text-7xl xl:text-8xl font-bold">Tyler Place</h1>
			</div>
		</div>
		<div class="absolute right-4 bottom-4">
			<ShareBar />
		</div>
	</section>
	<section class="flex flex-wrap-reverse justify-center p-8 gap-16">
		<div
			class="w-64 h-64 bg-blue-200 flex items-center justify-center text-white font-bold text-lg"
		>
			[Placeholder]
		</div>
		<div class="max-w-lg">
			<h2 class="text-3xl font-bold font-heading mb-4">Who am I?</h2>
			<p class="mb-4">
				I'm Tyler, a passionate and optimization-obsessed software engineer with experience in Web,
				IOT, and Server Management. I'm currently studying SE at California Polytechnic State
				University in SLO where I'm expected to graduate May 2029.
			</p>
			<p class="mb-4">
				I love building <Definition class="underline decoration-dotted"
					>{#snippet desc()}
						<p class="text-sm">
							Like this <a
								class="underline"
								href="https://github.com/cpsupermileage/Telemetry-PWA"
								target="_blank">offline-first telemetry system</a
							>
						</p>
					{/snippet}data-oriented systems,</Definition
				> calculating <Definition class="underline decoration-dotted"
					>{#snippet desc()}
						<p class="text-sm">
							Anybody play <a
								class="underline"
								href="https://github.com/1withspaghetti/Backgammon_Simulator"
								target="_blank">Backgammon</a
							>?
						</p>
					{/snippet}optimal strategies,</Definition
				> and engineering <Definition class="underline decoration-dotted"
					>{#snippet desc()}
						<p class="text-sm">
							Always taking advantage of serverless web infrastructure like Cloudflare Workers, D1,
							and Durable Objects!
						</p>
					{/snippet}scalable backend logic.</Definition
				>
			</p>
			<DefinitionProvider />
		</div>
	</section>
</main>
