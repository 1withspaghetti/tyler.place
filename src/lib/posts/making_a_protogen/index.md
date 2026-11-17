---
title: 'Making a Protogen Cosplay'
desc: 'The story of how I designed, programmed, manufactured, and iterated upon a custom electronic cosplay'
date: '11-16-2026'

coverAlt: 'tyler wearing a gray furry helmet with a blue LED face on the visor'
---

<!-- svelte-ignore script_context_deprecated -->
<script lang="ts" context="module">
    export { default as cover } from "./cover.jpg?post-cover&as=picture"
    export { default as lqip } from "./cover.jpg?lqip"

    import PostImage from "$lib/components/PostImage.svelte"

    import initial_shipment from "./initial_shipment.jpg?post-image&as=picture"
    import initial_shipment_lqip from "./initial_shipment.jpg?lqip"

    import spray_paint from "./spray_paint.jpg?post-image&as=picture"
    import spray_paint_lqip from "./spray_paint.jpg?lqip"
    import curious_dog from "./curious_dog.jpg?post-image&as=picture"
    import curious_dog_lqip from "./curious_dog.jpg?lqip"

    import first_panel_test from "./first_panel_test.jpg?post-image&as=picture"
    import first_panel_test_lqip from "./first_panel_test.jpg?lqip"
    import panel_inside_frame from "./panel_inside_frame.jpg?post-image&as=picture"
    import panel_inside_frame_lqip from "./panel_inside_frame.jpg?lqip"

    import electronics from "./electronics.jpg?post-image&as=picture"
    import electronics_lqip from "./electronics.jpg?lqip"

    import electronics_mounting from "./electronics_mounting.jpg?post-image&as=picture"
    import electronics_mounting_lqip from "./electronics_mounting.jpg?lqip"
    import electronics_inner_mounting from "./electronics_inner_mounting.jpg?post-image&as=picture"
    import electronics_inner_mounting_lqip from "./electronics_inner_mounting.jpg?lqip"

    import cutting_fur from "./cutting_fur.jpg?post-image&as=picture"
    import cutting_fur_lqip from "./cutting_fur.jpg?lqip"

    import inside_out_ears from "./inside_out_ears.jpg?post-image&as=picture"
    import inside_out_ears_lqip from "./inside_out_ears.jpg?lqip"
    import fur_base from "./fur_base.jpg?post-image&as=picture"
    import fur_base_lqip from "./fur_base.jpg?lqip"

    import version_1 from "./version_1.jpg?post-image&as=picture"
    import version_1_lqip from "./version_1.jpg?lqip"

</script>

Cover photo by [ErisAiko](https://www.instagram.com/ErisAikoFox).

Lets set the scene, its Summer of 2023, and I'm about to start my junior year of high school. I had taken an interest in the [furry community](https://en.wikipedia.org/wiki/Furry_fandom) and cosplay, specifically protogen characters. A protogen is a fictional cyborg species with traits such as a rounded visor with a digital face, armor-like body panels, and overall mammal-like furry body.

Given my passion for electronics and programming, I was determined to create my own wearable protogen head! In fact, this had been a plan since long before this summer, and one of my main motivations for working a summer job was to fund this project.

## Starting with a base

While I owned a 3d-printer and have done 3d-modeling, mine was way too small for the task at hand. Not only that, I didn't have the equipment necessary to vacuum-form or dye the visor itself. Luckily, I found [Kaiborg Studios](https://www.kaiborgstudios.com/diy) who sold DIY kits and other manufacturing services for stuff just like this. With protogens being a relatively common species, they already sold the exact parts I needed!

<PostImage src={initial_shipment} lqip={initial_shipment_lqip} />

However, this base was right off the printer and still needed a lot of post processing and assembly. Hours of sanding, drilling, glueing medal studs, and spray painting had to be done.

<div class="flex flex-row gap-4">
    <PostImage src={spray_paint} lqip={spray_paint_lqip} />
    <PostImage src={curious_dog} lqip={curious_dog_lqip} />
</div>

## Electronics

I had already owned a large flexible neopixel matrix from previous shenanigans, and decided to use those as the primary face screen. While others have used LED dot matrixes or various other higher-density screens, the advantage of a flexible neopixel matrix was that it was, well, flexible, I could bend it around the curved visor and match the shape exactly. The low pixel density was the tradeoff, but I personally think it adds character and forces me to think in creative ways we'll see later.

<div class="flex flex-row gap-4">
    <PostImage src={first_panel_test} lqip={first_panel_test_lqip} />
    <PostImage src={panel_inside_frame} lqip={panel_inside_frame_lqip} />
</div>

For a microcontroller, I used an [Arduino Nano Every](https://docs.arduino.cc/hardware/nano-every/), a small board that I already owned and had all the functionality I needed. I controlled the Neo Matrix panels, took input from a key job and receiver, read the temp using a sensor from a kit, and displayed the current status on a tiny OLED screen. The mouth was audio-reactive using a microphone, and different expressions could be selected using the remote.

<PostImage src={electronics} lqip={electronics_lqip} />

As for mounting, I glued everything to the bottom of the visor bar, with the LED panels directly attached to the screen. I didn't know how to solder at this point, so it was just the breadboard right on the inside. Not the best setup, but it will be vastly improved upon later.

<div class="flex flex-row gap-4">
    <PostImage src={electronics_mounting} lqip={electronics_mounting_lqip} />
    <PostImage src={electronics_inner_mounting} lqip={electronics_inner_mounting_lqip} />
</div>

## Adding Fur

I didn't have much experience with sewing before, much less with fur, but the cosplay required it. This stage was definitely one of the biggest learning moments, I even reached out for help from my mother's friends who were more experienced.

<PostImage src={cutting_fur} lqip={cutting_fur_lqip} />

The plan was to cover the head with artificial gray fur, sculpt ears out of foam, and bring it all together. This was definitely the most difficult part of the project, and I had to re-do it multiple times. Even using a duct tape base, it was vert difficult to get fur to fit onto such a round object.

<div class="flex flex-row gap-4">
    <PostImage src={inside_out_ears} lqip={inside_out_ears_lqip} />
    <PostImage src={fur_base} lqip={fur_base_lqip} />
</div>

## Version 1.0

At this point it was mid-December, nearly 4 months after I had started. The fur was hot-glued on, the electronics were mounted, the code was uploaded, and I had myself a working version of the protogen head, just in time for a cosplay convention to be held in my home city.

<PostImage src={version_1} lqip={version_1_lqip} />

While this process was incredibly fun, and wearing it to the convention even more fun, there was still a lot of room for improvements to make it stronger, more reliable, and better-looking.