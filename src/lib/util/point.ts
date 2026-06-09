import { type Point } from 'bezier-js';

export function flipOverPoint(p: Point, origin: Point): Point {
	return {
		x: origin.x + (origin.x - p.x),
		y: origin.y + (origin.y - p.y),
	};
}

export function linearGet(t: number, start: Point, end: Point): Point {
	return {
		x: start.x + (end.x - start.x) * t,
		y: start.y + (end.y - start.y) * t,
	};
}

export function linearLength(start: Point, end: Point): number {
	return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))
}

export function toSVG(p: Point) {
	return p.x + ',' + p.y;
}
