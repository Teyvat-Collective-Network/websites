declare const hljs: any;

export const email_regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
export const url_regex =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
export const webhook_regex = /^https:\/\/(.+?\.)?discord\.com\/api\/webhooks\/\d{17,20}\/.+$/;

export function debounce<T extends any[], U>(
    fn: (...args: T) => U,
    timeout: number = 500,
): (...args: T) => void {
    let timer: NodeJS.Timeout;

    return (...args: T) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), timeout);
    };
}

export function fix(x: any): any {
    if (Array.isArray(x)) return x.map((k) => fix(k));

    delete x._id;
    return x;
}

export function without(array: any[], index: number) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function swap(array: any[], x: number, y: number): any[] {
    if (x === y) return array;
    if (x > y) return swap(array, y, x);
    return [
        ...array.slice(0, x),
        array[y],
        ...array.slice(x + 1, y),
        array[x],
        ...array.slice(y + 1),
    ];
}

export function markdown_postprocess(text: string, reader: any) {
    let match: RegExpMatchArray | null, regex: RegExp;

    regex = /\[@(\d+)\]/;
    while ((match = text.match(regex)))
        text = text.replace(
            regex,
            `<span class="mention user" data-id=${match[1]}><i class="material-icons">pending</i> &nbsp; Loading User...</span>`,
        );

    regex = /\[(\d*)&amp;((\\]|[^\]])+)\]/;
    while ((match = text.match(regex)))
        text = text.replace(
            regex,
            `<span class="mention"${
                match[1] ? ` data-id="${match[1]}"` : ""
            }><i class="material-icons">group</i> &nbsp; ${match[2]}</span>`,
        );

    regex = /\[([tavfsc]?)#((\\]|[^\]])+)\]/;
    while ((match = text.match(regex)))
        text = text.replace(
            regex,
            `<span class="mention"><i class="material-icons">${
                {
                    t: "tag",
                    a: "campaign",
                    v: "volume_up",
                    f: "forum",
                    s: "podcasts",
                    c: "folder",
                }[match[1] || "t"]
            }</i>&nbsp;${match[2]}</span>`,
        );

    regex = /\[:(\d+)\]/;
    while ((match = text.match(regex)))
        text = text.replace(
            regex,
            `<span class="mention" data-id="${match[1]}"><i class="material-icons">schedule</i> &nbsp; <span class="time" data-timestamp="${match[1]}" /></span>`,
        );

    regex = /\[:(\d+\-\d+\-\d+)\]/;
    while ((match = text.match(regex)))
        text = text.replace(
            regex,
            `<span class="mention"><i class="material-icons">schedule</i> &nbsp;${match[1]}</span>`,
        );

    text = text.replace(
        /\[reader\]/g,
        `<span class="mention"${reader ? ` data-id="${reader.id}"` : ""}>${
            reader
                ? `<i class="material-icons">alternate_email</i> <b>${reader.username}</b>${
                      reader.discriminator === "0" ? "" : `#${reader.discriminator}`
                  }`
                : "<i class='material-icons'>account_circle</i> &nbsp; anonymous reader"
        }</span>`,
    );

    return text;
}

export function timestamp(
    time: Date | number | string,
    format: "D" | "d" | "F" | "f" | "R" | "T" | "t" = "f",
) {
    return `<t:${Math.floor(
        (typeof time === "number" ? time : new Date(time).getTime()) / 1000,
    )}:${format}>`;
}

export function timeinfo(time: Date | number | string) {
    return `${timestamp(time, "f")} (${timestamp(time, "R")})`;
}

export function highlight(depth: number = 0) {
    try {
        hljs.configure({ ignoreUnescapedHTML: true });
        hljs.highlightAll();
    } catch {
        if (depth > 10) return;
        setTimeout(() => highlight(depth + 1), 250);
    }
}
