---
title: 'Solving Backgammon'
desc: 'Calculating quintillions of outcomes in milliseconds. Ever wondered your exact probability of winning while bearing off?'
date: '12-15-2025'

coverAlt: 'backgammon board with console text showing different win chances'

actionHref: 'https://backgammon.tyler.place/'
actionText: 'Open Simulator'
---

<!-- svelte-ignore script_context_deprecated -->
<script lang="ts" context="module">
    export { default as cover } from "./cover.jpg?post-cover&as=picture"
    export { default as lqip } from "./cover.jpg?lqip"

    import PostImage from "$lib/components/PostImage.svelte"

    import cache_realization from "./cache_realization.png?post-image&as=picture"
    import cache_realization_lqip from "./cache_realization.png?lqip"
</script>

During a fateful finals week, my roommates and I found ourselves playing on one of their old backgammon boards late into night. As we watched each play the game, our engineering minds were already searching for the most optimal strategies to win the game. It started with some napkin math, then the calculators got out, and I knew it was my time to shine.

_(Also, if you don't already know the rules of Backgammon, I highly recommend learning them now...)_

I've always had a passion for optimizing or solving games, I've written quick scripts all the time but this one really challenged me. Not because it was a difficult concept to turn into code, but because of _how many_ dice rolls happen, each one sending the game in a different direction.

While my roommates continued to play, I began focusing on the **win probability of each person**, specifically while **bearing off**. Thats the part of the game when all your pieces are in your home and you are rolling to get them off. This part is strategically important because you may want to double the point value of the game if you know your more likely to win.

There are two ways you could go about figuring out your win probability:

- **Simulating N games** from the current board state and estimating the probability of wins.
- **Calculating every single game**, every possible dice roll and all possibilities down that timeline.

And if you know me well, an estimate simply wasn't good enough. _I needed perfection_.

As I developed a simple solver in JavaScript, the biggest issue became apparent: There are a _lot_ of possible backgammon outcomes. Any bearing-off state with more than 6 or pieces was taking >1000ms or greater than 1 second. Given that I want to run this with up to 15 pieces, it might be a few hours before I got my answer.

At the same time, my fellow CS roommate had developed a quick python script which simulated ~10,000 games using random number generators. It could give you quick answers for any board size, and if I wanted my solution to be at all viable, it needed to match that performance.

I ported my program to C++, which already had major gains compared to the JavaScript. You can see a trimmed down version of the code here, which iterates over the two dice rolls for every board state before making the moves and calling itself recursively. You can see how this calculation time adds up fast...

```cpp
Results *simulate(Board *board, int turns) {
    // ...

    // Base case
    if (board->size == 0) {
        delete board;
        return new Results(1);
    }

    // Roll the dice!
    for (uint8_t i = 0; i < 6; i++) {
        for (uint8_t j = 0; j < 6; j++) {

            uint8_t roll[2] = {i, j};

            // Recursive Call
            Results *results = simulate(next_board_state(board, roll), turns + 1);

            // ...
        }
    }
    // ...
}
```

It was here where I made my biggest realization. Every board state is independent of the actions before it, meaning if multiple games get to the same board state, the probabilities from there only need to be calculated once!

<PostImage src={cache_realization} lqip={cache_realization_lqip} class="max-w-64" />

```cpp
// The cache
unordered_map<uint32_t, Results> cache;

// Hash function (in Board class)
uint32_t toInt() {
    uint32_t result = 0;
    for (uint8_t i = 0; i < 6; i++) {
        result |= (arr[i] & 0xF) << (i * 4);
    }
    return result;
}

// Looking up in cache before rolling any dice!
unordered_map<uint32_t, Results>::iterator result = cache.find(board->toInt());
if (result != cache.end()) {
    return new Results(result->second);
}
```

I implemented a cache using the hash of a board state, and checked that cache every time I iterated over the dice rolls. And at first I thought I messed something up, because the code reported:

```
> Computed 30262699920682354 outcomes in 41 ms
```

41ms?? For an average-sized board as well?? But I double-checked the probabilities with my friend's rng simulation as, low and behold, it was correct! The calculator only needed to iterate through very little games to make all the calculations that were strictly necessary, resulting in speeds that were **even faster** than the rng simulation approach, with **perfect accuracy**.

And, with this tool under my belt, nobody wanted to play backgammon with me anymore...

---

Try the calculator out yourself [here](https://backgammon.tyler.place/)!

Check out the simulation code on my [GitHub](https://github.com/1withspaghetti/Backgammon_Simulator/tree/main/simulation).

---

_Cover photo by [FIGIST CO](https://unsplash.com/@figist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/white-and-black-ceramic-mug-on-brown-and-white-rug-AnkK7cHbGxY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) and edited by Tyler Place_
