/* eslint-disable no-useless-assignment */

// https://stackoverflow.com/a/47593316
export function splitmix32(a: number) {
	return function () {
		a |= 0;
		a = (a + 0x9e3779b9) | 0;
		let t = a ^ (a >>> 16);
		t = Math.imul(t, 0x21f0aaad);
		t = t ^ (t >>> 15);
		t = Math.imul(t, 0x735a2d97);
		return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
	};
}

export function nextSeed(prng: () => number) {
	return (prng() * 2 ** 32) >>> 0;
}

export function nextBounded(prng: () => number, avg: number, sd: number) {
	return prng() * 2 * sd - sd + avg;
}

export function nextBoundedBy(prng: () => number, min: number, max: number) {
	return prng() * (max - min) + min;
}

export function seedGen() {
	return nextSeed(Math.random);
}
