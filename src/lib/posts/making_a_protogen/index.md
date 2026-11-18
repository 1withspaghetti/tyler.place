---
title: 'Making a Protogen Cosplay'
desc: 'The story of how I designed, programmed, manufactured, and iterated upon a custom electronic cosplay'
date: '01-04-2025'
edited: '11-17-2026'

coverAlt: 'tyler wearing a gray furry helmet with a blue LED face on the visor'
---

<!-- svelte-ignore script_context_deprecated -->
<script lang="ts" context="module">
    import cover from "./cover.jpg?post-cover&as=picture"
    import lqip from "./cover.jpg?lqip"
    export { cover, lqip }

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

    import new_electronics from "./new_electronics.jpg?post-image&as=picture"
    import new_electronics_lqip from "./new_electronics.jpg?lqip"

    import render_test_mp4 from "./render_test.mp4"
    import render_test_webm from "./render_test.webm"

    import more_fur_base from "./more_fur_base.jpg?post-image&as=picture"
    import more_fur_base_lqip from "./more_fur_base.jpg?lqip"
    import more_fur from "./more_fur.jpg?post-image&as=picture"
    import more_fur_lqip from "./more_fur.jpg?lqip"

    import glove from "./glove.jpg?post-image&as=picture"
    import glove_lqip from "./glove.jpg?lqip"
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

## Improved Electronics

My immediate goal was to actually overhaul the electronics. I switched out the microcontroller for a much more powerful esp32-based board. As part of this, I now needed a logic level converter for the esp32 3.3v to work with the 5v LED panels. Additionally, I removed the not so useful temperature sensor as well to save on space. This led me to a much cleaner and more permanent setup.

<PostImage src={new_electronics} lqip={new_electronics_lqip} />

## Better Visuals

Alongside the electronics upgrade came a massive software one. Previously, all the faces had been static bitmap images for different expressions and mouth sizes when talking. With the greater computational power that came with the Nano esp32, I set out on a journey of crude graphics rendering.

The idea was to render a different polygons drown by various points to render different eye and mouth shapes. And with a low pixel-density display, individual LEDs could be dimmed when they were only partially within each polygon. Different faces and mouth movement could then smoothly morph into each other and appear a lot more natural.

<video width="1280" height="720" loading="lazy" controls class="w-full h-auto">
    <source src={render_test_webm} type="video/webm">
    <source src={render_test_mp4} type="video/mp4">
    Your browser does not support HTML video. <a href={render_test_mp4} target="_blank">Download Here</a>.
</video>

The code is located in this [GitHub Repository](https://github.com/1withspaghetti/SpagProtogenVisor).

## More fur!

Another step was to re-do the sewing with all my gained knowledge, with the fur also going down my neck to look better with the rest of the outfit.

<div class="flex flex-row gap-4">
    <PostImage src={more_fur_base} lqip={more_fur_base_lqip} />
    <PostImage src={more_fur} lqip={more_fur_lqip} />
</div>

## Replacing the remote

During all this, I was also working on a much more cooler way of controlling the expressions on the protogen with a friend. The idea sparked from VR controllers, where your finger movements could control various aspects of your character in some games. The only issue, is that it would be very difficult to hold a controller all the time.

Instead we could use a [flex sensor](https://www.adafruit.com/product/1070) along the fingers, where variable resistance could be detected by another microcontroller and relayed back up to the head.

<PostImage src={glove} lqip={glove_lqip} />

Using a tiny battery-powered Xiao ESP32, we could read the state of the fingers and send that data to the head using Bluetooth LE. The status screen inside the head displayed the connection status, battery percent, and what fingers were held down. It also showed a menu that could be navigated using the finger presses (or using the remote as a backup).

This process and code can be found in greater detail on the [GitHub repository](https://github.com/williamdelsea/Protogen-Flex-Glove).

## Version 2.0

Finished just at the end of 2024, this is where the project current stands, I'm so happy with how everything turned out, and continue to use it at various conventions and cosplay meetups. While not perfect, I learned so much on the journey from sewing to soldering to computer graphics.

<PostImage src={cover} lqip={lqip} />

## Version 3.0 ..?

I would love to improve this even more, focusing on weight and a better screen system. Unfortunately this would be very costly and require me to rebuild almost everything, including the frame, from scratch. This is definitely a huge project for when I have more time on my hands, but it will not be forgotten!
