import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (s) => s === "new" || !!s.match(/^[0-9a-z]+$/);
