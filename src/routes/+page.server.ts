import { seedGen } from '$lib/util/prng';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		seed: seedGen()
	};
}) satisfies PageServerLoad;
