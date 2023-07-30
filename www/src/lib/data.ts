import db from "../db.js";

export async function get_characters() {
    const data: Record<string, Record<string, string>> = {};

    for (const key of ["elements", "weapons", "regions"]) {
        data[key] = {};
        for (const entry of await db[key].find().toArray()) data[key][entry.name] = entry.emoji;
    }

    const characters = await db.characters.find().toArray();

    const cache: Record<string, { element: string; weapon: string; region: string; name: string }> =
        {};

    for (const character of characters) {
        cache[character.id] = {
            name: character.name,
            element: data.elements[character.element] ?? "",
            weapon: data.weapons[character.weapon] ?? "",
            region: data.regions[character.region] ?? "",
        };
    }

    return cache;
}
