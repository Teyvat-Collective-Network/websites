import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (s) => !!s.match(/^\d{17,20}$/);
