<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	import Logos from "./Logos.svelte";

    const CODE_WIDTHS = [275, 175, 250, 150, 100, 275, 425, 350, 125, 250, 200, 100, 425];
    const CODE_PX_PER_SEC = 1000;
    const CODE_DURATION = CODE_WIDTHS.reduce((t, n) => t + n, 0) / CODE_PX_PER_SEC;

    const CYCLE_SECONDS = 2;
    const LOGOS = ["logos-svelte", "logos-react", "logos-c-plusplus", "logos-platformio", "logos-arduino", "logos-typescript", "logos-tailwindcss", "logos-java"];

    function arrayTo(n: number): number[] {
        return Array.apply(null, Array(n)).map((_, i) => i);
    }

    let { ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg width={500} height={500} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style="background: #555555;" {...restProps}>
    <defs>
        <symbol id="conveyerWheel" width="50" height="50" viewBox="0 0 50 50" transform-origin="25 25">
            <circle cx="25" cy="25" r="25" fill="#2e2e2e" />
            <line x1="10" y1="25" x2="40" y2="25" transform-origin="25 25" stroke="#282828" stroke-width="5">
                <animateTransform 
                    attributeName="transform"
                    type="rotate"
                    dur="1s"
                    from="0"
                    to="360"
                    repeatCount="indefinite" />
            </line>
        </symbol>
        
        <symbol viewBox="0 0 100 100" id="box">
            <rect x="0" y="0" width="100" height="100" rx="5" ry="5" fill="#c28f60" stroke="none"></rect>
        </symbol>
        
        <symbol viewBox="0 0 150 500" id="crusher">
            <rect x="0" y="450" width="150" height="50" rx="5" ry="5" fill="#222222" stroke="none" />
            <rect x="50" y="0" width="50" height="450" fill="#333333" stroke="none" />
            <rect x="55" y="0" width="5" rx="2.5" ry="2.5" height="425" fill="#3b3b3b" stroke="none" />
        </symbol>

        <Logos />
        
        <symbol id="logos" viewBox="0 0 100 100">
            {#each LOGOS as logo, i (logo)}
                <use xlink:href="#{logo}" width="100" height="100" visibility="hidden">
                    <animate 
                        attributeName="visibility"
                        values="hidden; visible; visible; hidden; hidden"
                        begin="{CYCLE_SECONDS * i}s"
                        dur="{CYCLE_SECONDS * LOGOS.length}s"
                        keyTimes="0; 0; {1/LOGOS.length}; {1/LOGOS.length}; 1"
                        repeatCount="indefinite" />
                </use>
            {/each}
        </symbol>

    </defs>

    {#each CODE_WIDTHS as width, i (i)}
        {@const WAIT_DUR = CODE_WIDTHS.slice(0, i).reduce((t, n) => t + n, 0) / CODE_PX_PER_SEC}
        {@const CURRENT_DUR = width / CODE_PX_PER_SEC}
        {@const CYCLED_CODES = [...CODE_WIDTHS.slice(i), ...CODE_WIDTHS.slice(0, i)]}
        <rect x="25" y="350" width="0" height="25" rx="5" ry="5" fill="#4b4b4b">
            <animate
                attributeName="width"
                begin="{WAIT_DUR - CODE_DURATION}s"
                dur="{CODE_DURATION}s"
                values="0; {width}; {width}"
                keyTimes="0; {CURRENT_DUR / CODE_DURATION}; 1"
                repeatCount="indefinite" />
            <animate
                attributeName="y"
                begin="{WAIT_DUR - CODE_DURATION}s"
                dur="{CODE_DURATION}s"
                values="{arrayTo(CYCLED_CODES.length).flatMap(n => [350 - n * 35, 350 - n * 35]).join("; ")}"
                keyTimes="{CYCLED_CODES.flatMap((w, i) => {
                        const wait = CYCLED_CODES.slice(0, i).reduce((t, n) => t + n, 0) / CODE_PX_PER_SEC;
                        const dur = w / CODE_PX_PER_SEC
                        return [(wait / CODE_DURATION).toFixed(5), ((wait + dur) / CODE_DURATION).toFixed(5)]
                    }).join("; ")}"
                repeatCount="indefinite" />
        </rect>
    {/each}
    
    {#each arrayTo(10) as i (i)}
        <use xlink:href="#conveyerWheel" x="{i * 53 - 25}" y="425" transform="rotate({i*120})" transform-origin="{i * 53} 450" />
    {/each}
    <line x1="0" y1="420" x2="500" y2="420" stroke="#242424" stroke-width="10" />
    <line x1="0" y1="480" x2="500" y2="480" stroke="#242424" stroke-width="10" />

    <use xlink:href="#logos" x="0" y="315" width="100" height="100" transform-origin="250 415">
        <animate
            attributeName="x"
            dur="{CYCLE_SECONDS}s"
            values="-100; 200; 200; 500"
            calcMode="spline"
            keyTimes="0; 0.4; 0.6; 1"
            keySplines="0 0.5 0.75 1; 0 0 1 1; 0.5 0 1 0.75"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            dur="{CYCLE_SECONDS}s"
            values="1 1; 1 1; 1.5 0; 1 1; 1 1"
            calcMode="spline"
            keyTimes="0; 0.475; 0.5; 0.56; 1"
            keySplines="0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1"
            repeatCount="indefinite" />
    </use>

    <use xlink:href="#box" y="315" width="100" height="100" transform-origin="250 415">
        <animate
            attributeName="x"
            dur="{CYCLE_SECONDS}s"
            values="-100; 200; 200; 500"
            calcMode="spline"
            keyTimes="0; 0.4; 0.6; 1"
            keySplines="0 0.5 0.75 1; 0 0 1 1; 0.5 0 1 0.75"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            dur="{CYCLE_SECONDS}s"
            values="1 1; 1 1; 1.5 0; 1.5 0; 1.5 0"
            calcMode="spline"
            keyTimes="0; 0.475; 0.5; 0.56; 1"
            keySplines="0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1"
            repeatCount="indefinite" />
    </use>

    <use xlink:href="#crusher" x="175" y="-135" width="150" height="500">
        <animate
            attributeName="y"
            dur="2s"
            values="-285; -285; -85; -285; -285"
            calcMode="spline"
            keyTimes="0; 0.4; 0.5; 0.6; 1"
            keySplines="0 0 1 1; 0.25 0 0.5 0; 0.25 0 1 1; 0 0 1 1"
            repeatCount="indefinite" />
    </use>
</svg>
