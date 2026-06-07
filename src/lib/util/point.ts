import { type Point } from 'bezier-js';

export function flipOverPoint(p: Point, origin: Point): Point {
	return {
		x: origin.x + (origin.x - p.x),
		y: origin.y + (origin.y - p.y),
		z: origin.z != undefined && p.z != undefined ? origin.z + (origin.z - p.z) : undefined
	};
}

export function linearGet(t: number, start: Point, end: Point) {
	return {
		x: start.x + (end.x - start.x) * t,
		y: start.y + (end.y - start.y) * t,
		z: start.z != undefined && end.z != undefined ? start.z + (end.z - start.z) * t : undefined
	};
}

export function toSVG(p: Point) {
	return p.x + ',' + p.y;
}
