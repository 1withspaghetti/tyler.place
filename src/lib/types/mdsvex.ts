import type { PictureExport } from "./imageTools";

export type MetadataExport = {
    title?: string,
    desc?: string,
    cover?: PictureExport
} & Record<string, unknown>;
