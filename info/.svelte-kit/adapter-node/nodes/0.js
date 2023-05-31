import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-abd7f57c.js';
export { universal };
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-abd7f57c.js","_app/immutable/chunks/index-c4baf36c.js","_app/immutable/chunks/stores-01f63ed3.js","_app/immutable/chunks/singletons-de3a7191.js","_app/immutable/chunks/public-962e99ca.js","_app/immutable/modules/pages/_layout.ts-47300054.js","_app/immutable/chunks/_layout-b19b6fbc.js"];
export const stylesheets = ["_app/immutable/assets/_layout-b51c3ce0.css"];
export const fonts = [];
