import { BANSHARE_MONGO_DB, MONGO_DB, MONGO_URI } from "$env/static/private";
import { type Collection, MongoClient, type Document } from "mongodb";

const client = new MongoClient(MONGO_URI as string);
await client.connect();

const banshare_db = client.db(BANSHARE_MONGO_DB);
const db = client.db(MONGO_DB);

export default new Proxy(
    {},
    { get: (_, property: string, __) => db.collection(property) },
) as Record<string, Collection<Document>>;

export const banshares = new Proxy(
    {},
    { get: (_, property: string, __) => banshare_db.collection(property) },
) as Record<string, Collection<Document>>;
