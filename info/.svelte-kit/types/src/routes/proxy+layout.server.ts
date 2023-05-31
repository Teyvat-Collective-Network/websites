// @ts-nocheck
import type { ServerLoad } from "@sveltejs/kit";

export const load = ({ locals }: Parameters<ServerLoad>[0]) => locals;
