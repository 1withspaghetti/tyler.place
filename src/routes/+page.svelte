<script>
    import SvelteSeo from "svelte-seo";
	import HeroImage from "./HeroImage.svelte";
</script>

<SvelteSeo
    title="Tyler Place"
/>

<main class="">
    <section class="max-w-[1920px] relative w-full mx-auto">
        <HeroImage
            class="w-full"
        />
        <div class="absolute top-1/3 sm:top-1/4 -translate-y-1/2 text-center w-full">
            <h1 class="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-white">Tyler Place</h1>
            <p class="mt-1 text-lg lg:text-2xl font-bold text-white">1st year Software Engineer @ CalPoly</p>
        </div>
    </section>
</main>