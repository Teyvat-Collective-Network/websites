import hq_commands from "../../core/hq_commands.js";
import { hq } from "../../core/resources.js";
import monitor from "./processes/monitor.js";
import sweep_invites from "./processes/sweep_invites.js";

import "./commands/index.js";
import "./events/index.js";

(async () => {
    await hq.commands.set(hq_commands);

    await sweep_invites();
    await monitor();
})();
