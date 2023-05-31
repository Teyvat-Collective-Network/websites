// @ts-nocheck
import type { Load } from "@sveltejs/kit";

export const load = ({ data }: Parameters<Load>[0]) => data as any;
