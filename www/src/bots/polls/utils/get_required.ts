import { TCN } from "$lib/api.js";
import type { Poll } from "$lib/types.js";

export default async function (data: Poll): Promise<string[]> {
    const ids = (await TCN.users())
        .filter((x) =>
            data.restricted ? x.roles.includes("voter") : x.roles.includes("owner") || x.roles.includes("advisor"),
        )
        .map((x) => x.id);

    if (data.mode === "election") return ids.filter((x: string) => !data.candidates.includes(x));
    return ids;
}
