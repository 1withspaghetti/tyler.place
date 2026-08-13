<script>
    import SvelteSeo from "svelte-seo";
	import HeroImage from "./HeroImage.svelte";
</script>

<SvelteSeo
    title="Home | Tyler Place"
/>

<main class="">
    <section class="max-w-[1920px] relative w-full mx-auto">
        <HeroImage
            class="w-full"
        />
        <div class="absolute top-1/3 lg:top-1/4 -translate-y-1/2 text-center w-full">
            <h1 class="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-white">Tyler Place</h1>
        </div>
    </section>
</main>