declare module '*?lqip' {
	const lqip: {
		lqip: string;
		width: number;
		height: number;
		src: string;
	};
	export default lqip;
}

// vite-imagetools

declare module '*&url' {
	const url: string|string[];
	export default url;
}

declare module '*&as=metadata' {
	interface OutputMetadata {
		src: string // URL of the generated image
		width: number // Width of the image
		height: number // Height of the image
		format: string // Format of the generated image

		// The following options are the same as sharps input options
		space: string // Name of colour space interpretation
		channels: number // Number of bands e.g. 3 for sRGB, 4 for CMYK
		density: number //  Number of pixels per inch
		depth: string // Name of pixel depth format
		hasAlpha: boolean // presence of an alpha transparency channel
		hasProfile: boolean // presence of an embedded ICC profile
		isProgressive: boolean // indicating whether the image is interlaced using a progressive scan
	};

	const meta: OutputMetadata|OutputMetadata[];
	export default meta;
}

declare module '*&as=picture' {
	const picture: {
		// format -> srcsrt
		sources: Record<string, string>;
		img: {
			src: string,
			w: number,
			h: number
		}
	};
	export default picture;
}

declare module '*&inline' {
	const url: string|string[];
	export default url;
}
