<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import type { ResolvedPathname } from "$app/types";
    import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { fade } from "svelte/transition";

    type MenuItem = {
		name: string;
		href: ResolvedPathname;
	};

	let menuItems: MenuItem[] = [
		{ name: 'Home', href: resolve('/') },
		{ name: 'Projects', href: resolve('/projects') },
        { name: 'Contact', href: resolve('/contact') },
	];

    let open = $state(false);
</script>

<svelte:window onclick={() => open = false} />

<header class="font-heading sticky z-20 w-full">
    <nav class="w-full">
        <!-- Desktop Version -->
        <ul class="hidden sm:flex gap-4 justify-center px-4">
            {#each menuItems as item, i (i)}
                <li>
                    <a class="block p-4 text-lg hover:underline" class:font-semibold={page.url.pathname == item.href} href={item.href}>{item.name}</a>
                </li>
            {/each}
        </ul>
        <!-- Mobile Version -->
        <div
            class="flex sm:hidden items-center justify-between px-4"
        >
            <a href={resolve("/")} class="text-lg p-4">Tyler Place</a>
            <button
                onclick={(e) => {open = !open;e.stopPropagation()}}
			    aria-label={open == true ? 'Close Menu' : 'Open Menu'}
                class="block cursor-pointer relative"
            >
                <Menu
                    class={['m-4 size-6 duration-200', open && 'scale-0 rotate-180 opacity-0']}
                />
                <X
                    class={[
                        'absolute inset-0 m-4 size-6 scale-0 -rotate-180 opacity-0 duration-200',
                        open && 'scale-100 rotate-0 opacity-100'
                    ]}
                />
            </button>
            {#if open}
                <ul transition:fade={{duration: 100}} class="absolute top-full left-0 right-0 w-full flex flex-col items-center p-8 gap-6 bg-zinc-300/75">
                    {#each menuItems as item, i (i)}
                        <li>
                            <a class="text-xl hover:underline" class:font-semibold={page.url.pathname == item.href} href={item.href}>{item.name}</a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </nav>
</header>