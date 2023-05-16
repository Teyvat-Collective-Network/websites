import { BANSHARE_MONGO_DB, MONGO_DB, MONGO_URI } from "$env/static/private";
import { type Collection, MongoClient, type Document } from "mongodb";

const client = new MongoClient(MONGO_URI as string);
await client.connect();

const banshare_db = client.db(BANSHARE_MONGO_DB);
const db_ = client.db(MONGO_DB);

const db = new Proxy({}, { get: (_, property: string, __) => db_.collection(property) }) as Record<
    string,
    Collection<Document>
>;

export default db;

export const banshares = new Proxy(
    {},
    { get: (_, property: string, __) => banshare_db.collection(property) },
) as Record<string, Collection<Document>>;

export async function autoinc(seq: string): Promise<number> {
    const doc = await db.counters.findOneAndUpdate({ seq }, { $inc: { val: 1 } }, { upsert: true });
    return (doc.value?.val ?? 0) + 1;
}
