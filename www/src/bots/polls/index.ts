import { TCN } from "$lib/api.js";
import bot from "../../core/bot.js";

import "./interactions/index.js";
import "./processes/auto-close.js";

TCN.users().then((users) => users.forEach(({ id }) => id && bot.users.fetch(id)));
