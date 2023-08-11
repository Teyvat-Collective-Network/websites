import sanitize from "sanitize-html";

const options: sanitize.IOptions = { allowedTags: [...sanitize.defaults.allowedTags, "img"] };

export default function (source: string) {
    return sanitize(source, options);
}
