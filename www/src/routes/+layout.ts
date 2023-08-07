import type { Load } from "@sveltejs/kit";

export const load: Load = ({ data }) => data!;
