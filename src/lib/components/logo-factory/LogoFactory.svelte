<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

    export const WIDTH = 500;
    export const HEIGHT = 500;

    let { ...restProps }: SVGAttributes<SVGElement> = $props();
</script>

<svg width={WIDTH} height={HEIGHT} viewBox="0 0 {WIDTH} {HEIGHT}" xmlns="http://www.w3.org/2000/svg" style="background: #444444;" {...restProps}>
    <defs>
        <circle id="conveyerDot" cx="0" cy="0" r="5" fill="#282828" />
        <animateMotion id="conveyerDotMotion" path="M 50 20 L 200 20 A 30 30 0 0 1 200 80 L 50 80 A 30 30 0 0 1 50 20"
            begin="0s"
            dur="5s"
            repeatCount="indefinite" />
        <g id="conveyer" width="250" height="100">
            <path d="M 50 20 L 200 20 A 30 30 0 0 1 200 80 L 50 80 A 30 30 0 0 1 50 20" stroke="#333" stroke-width="10" fill="#3b3b3b" />
            <circle cx="50" cy="50" r="25" fill="#282828" />
            <circle cx="200" cy="50" r="25" fill="#282828" />
            {#each Array.apply(null, Array(5)).map((_, i) => i) as i (i)}
                <line id="conveyerDot" x1="0" y1="-3" x2="0" y2="3" stroke="#2e2e2e" stroke-width="4" stroke-linecap="round">
                    <animateMotion id="conveyerDotMotion" path="M 50 20 L 200 20 A 30 30 0 0 1 200 80 L 50 80 A 30 30 0 0 1 50 20"
                        begin="-{i/2}s"
                        dur="2.5s"
                        rotate="auto"
                        repeatCount="indefinite" />
                </line>
            {/each}
        </g>
        
        <symbol viewBox="0 0 256 308" id="logos-svelte-icon"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt --><path fill="#ff3e00" d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.2 82.2 0 0 0-37.135 55.056a86.57 86.57 0 0 0 8.536 55.576a82.4 82.4 0 0 0-12.296 30.719a87.6 87.6 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.18 82.18 0 0 0 37.135-55.057a86.6 86.6 0 0 0-8.53-55.577a82.4 82.4 0 0 0 12.29-30.718a87.57 87.57 0 0 0-14.963-66.244"></path><path fill="#fff" d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.7 52.7 0 0 1-9.003-39.85a50 50 0 0 1 1.713-6.693l1.35-4.115l3.671 2.697a92.5 92.5 0 0 0 28.036 14.007l2.663.808l-.245 2.659a16.07 16.07 0 0 0 2.89 10.656a17.14 17.14 0 0 0 18.397 6.828a15.8 15.8 0 0 0 4.403-1.935l71.67-45.672a14.92 14.92 0 0 0 6.734-9.977a15.92 15.92 0 0 0-2.713-12.011a17.16 17.16 0 0 0-18.404-6.832a15.8 15.8 0 0 0-4.396 1.933l-27.35 17.434a52.3 52.3 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.68 52.68 0 0 1-9.004-39.849a49.43 49.43 0 0 1 22.34-33.114l71.664-45.677a52.2 52.2 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.7 52.7 0 0 1 9.004 39.85a51 51 0 0 1-1.713 6.692l-1.35 4.116l-3.67-2.693a92.4 92.4 0 0 0-28.037-14.013l-2.664-.809l.246-2.658a16.1 16.1 0 0 0-2.89-10.656a17.14 17.14 0 0 0-18.398-6.828a15.8 15.8 0 0 0-4.402 1.935l-71.67 45.674a14.9 14.9 0 0 0-6.73 9.975a15.9 15.9 0 0 0 2.709 12.012a17.16 17.16 0 0 0 18.404 6.832a15.8 15.8 0 0 0 4.402-1.935l27.345-17.427a52.2 52.2 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.68 52.68 0 0 1 9.003 39.848a49.45 49.45 0 0 1-22.34 33.12l-71.664 45.673a52.2 52.2 0 0 1-14.563 6.398"></path></symbol>
    </defs>

    <use x="-100" y="400" href="#conveyer" />
    <use x="125" y="400" href="#conveyer" />
    <use x="350" y="400" href="#conveyer" />

    <g>
        <use href="#logos-svelte-icon" x="0" y="315" width="100" height="100">
             <animate
                attributeName="x"
                begin="0s"
                dur="3s"
                from="-100"
                to="500"
                repeatCount="indefinite" />
        </use>
        <rect x="0" y="315" width="100" height="100" rx="5" ry="5" fill="#222222" stroke="none">
            <animate
                attributeName="x"
                begin="0s"
                dur="3s"
                from="-100"
                to="500"
                repeatCount="indefinite" />
        </rect>
    </g>
</svg>
