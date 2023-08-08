import { REMINDER_CYCLE } from "$env/static/private";
import reminder_cycle from "./processes/reminder_cycle.js";
import sync_dashboard from "./processes/sync_dashboard.js";

import "./interactions/index.js";

(async () => {
    await sync_dashboard();

    setTimeout(
        () => setInterval(reminder_cycle, +REMINDER_CYCLE),
        +REMINDER_CYCLE - (new Date().getTime() % +REMINDER_CYCLE),
    );
})();
