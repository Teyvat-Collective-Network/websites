// See https://kit.svelte.dev/docs/types#app

import type { LocalsData } from "$lib/types.js";

// for information about these interfaces
declare global {
    namespace App {
        type Locals = LocalsData;
        // interface Error {}
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
