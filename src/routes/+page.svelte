<script>
    import SvelteSeo from "svelte-seo";
    import lqip from "$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?lqip";
</script>

<SvelteSeo
    title="Home | Tyler Place"
/>

<main class="">
    <section class="max-w-[1920px] relative w-full mx-auto">
        <enhanced:img
            class="w-full min-h-128 object-cover"
            src="$lib/assets/imgs/caleb-riston-TXiBwX0kg-Q-unsplash.jpg?w=3840;2400;1920;1080&quality=95"
            alt="snow covered rainier mountain during daytime"
            style:background-image="url('{lqip.lqip}')"
			style:background-size="cover"
			style:font-size="0"
        />
        <div class="absolute top-1/3 lg:top-1/4 -translate-y-1/2 text-center w-full">
            <h1 class="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-white">Tyler Place</h1>
        </div>
    </section>
</main>