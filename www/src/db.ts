import {
    BANSHARE_MONGO_DB,
    MONGO_DB,
    MONGO_URI,
    MONITOR_REPEAT,
    REMINDER_CYCLE,
} from "$env/static/private";
import type {
    Character,
    Poll,
    PollVote,
    CalendarTrack,
    InternalData,
    ElectionRecord,
    Announcement,
    MembershipChange,
    ObservationRecord,
    Testimonial,
    Banshare,
    CalendarEvent,
    Doc,
    Form,
    FormSubmission,
    ObserverTerm,
    UserMapEntry,
    GuildMapEntry,
    CharacterAttribute,
    BanshareSettings,
    BansharePost,
} from "$lib/types.js";
import type { Message } from "discord.js";
import {
    type Collection,
    MongoClient,
    type Document,
    type ObjectId,
    type OptionalId,
} from "mongodb";

const client = new MongoClient(MONGO_URI as string);
await client.connect();

const banshare_db = client.db(BANSHARE_MONGO_DB);
const db_ = client.db(MONGO_DB);

const db = new Proxy({}, { get: (_, property: string, __) => db_.collection(property) }) as Record<
    string,
    Collection<Document>
>;

const banshares = new Proxy(
    {},
    { get: (_, property: string, __) => banshare_db.collection(property) },
) as Record<string, Collection<Document>>;

async function replace<T extends OptionalId<Document>>(key: string, entries: T[]): Promise<void> {
    await db[key].deleteMany();
    if (entries.length > 0) await db[key].insertMany(entries);
}

export namespace DB {
    export async function autoinc(seq: string): Promise<number> {
        const doc = await db.counters.findOneAndUpdate(
            { seq },
            { $inc: { val: 1 } },
            { upsert: true },
        );
        return (doc.value?.val ?? 0) + 1;
    }

    export namespace Alerts {
        export async function check(key: string, id: string): Promise<boolean> {
            const now = new Date().getTime();
            const threshold = now - +MONITOR_REPEAT;

            if ((await db.alerts.countDocuments({ key, id, time: { $gt: threshold } })) === 0) {
                await db.alerts.updateOne({ key, id }, { $set: { time: now } }, { upsert: true });
                return true;
            }

            return false;
        }
    }

    export namespace Banshares {
        export async function get_pending(): Promise<Banshare<true>[]> {
            return (await banshares.banshares
                .find({
                    published: { $ne: true },
                    rejected: { $ne: true },
                })
                .toArray()) as Banshare<true>[];
        }

        export async function get(message: string): Promise<Banshare<true> | null> {
            return (await banshares.banshares.findOne({ message })) as Banshare<true> | null;
        }

        export async function get_crossposts(banshare: string): Promise<BansharePost<true>[]> {
            return (await banshares.banshare_posts
                .find({ banshare })
                .toArray()) as BansharePost<true>[];
        }

        export async function get_crosspost(message: string): Promise<BansharePost<true> | null> {
            return (await banshares.banshare_posts.findOne({
                message,
            })) as BansharePost<true> | null;
        }

        export async function submit(banshare: Banshare): Promise<void> {
            await banshares.banshares.insertOne(banshare);
        }

        export async function set_severity(
            message: string,
            severity: string,
        ): Promise<Banshare<true> | null> {
            return (await banshares.banshares.findOneAndUpdate({ message }, { $set: { severity } }))
                .value as Banshare<true> | null;
        }

        export async function remind(message: string): Promise<void> {
            await banshares.banshares.updateOne(
                { message },
                { $set: { reminded: new Date().getTime() - +REMINDER_CYCLE / 2 } },
            );
        }

        export async function publish(message: string): Promise<Banshare<true> | null> {
            return (
                await banshares.banshares.findOneAndUpdate(
                    { message },
                    { $set: { published: true } },
                )
            ).value as Banshare<true> | null;
        }

        export async function reject(message: string): Promise<void> {
            await banshares.banshares.updateOne({ message }, { $set: { rejected: true } });
        }

        export async function rescind(message: string): Promise<Banshare<true> | null> {
            return (
                await banshares.banshares.findOneAndUpdate(
                    { message },
                    { $set: { rescinded: true } },
                )
            ).value as Banshare<true> | null;
        }

        export async function execute(post: string): Promise<boolean> {
            return !(
                await banshares.executed.findOneAndUpdate(
                    { post },
                    { $set: { executed: true } },
                    { upsert: true },
                )
            ).value?.executed;
        }

        export async function lock(post: string): Promise<boolean> {
            const lock = await banshares.executed.findOneAndUpdate(
                { post },
                { $set: { executed: true } },
                { upsert: true },
            );

            return !!lock.value?.executed;
        }

        export async function add_crosspost(
            banshare: Banshare,
            guild: string,
            post: Message,
        ): Promise<void> {
            await banshares.banshare_posts.insertOne({
                guild,
                banshare: banshare.message,
                channel: post.channel.id,
                message: post.id,
            });
        }
    }

    export namespace BanshareSettings {
        export async function get(guild: string): Promise<BanshareSettings<true> | null> {
            return (await banshares.settings.findOne({ guild })) as BanshareSettings<true> | null;
        }

        export async function get_log(guild: string): Promise<string | null> {
            return (await banshares.logging.findOne({ guild }))?.channel;
        }

        export async function get_outputs(): Promise<{ guild: string; channel: string }[]> {
            return (await banshares.channels.find().toArray()).map((entry) => ({
                guild: entry.guild,
                channel: entry.channel,
            }));
        }

        export async function set_output(guild: string, channel?: string): Promise<void> {
            if (channel)
                await banshares.channels.updateOne(
                    { guild },
                    { $set: { channel } },
                    { upsert: true },
                );
            else await banshares.channels.deleteOne({ guild });
        }

        export async function set_log(guild: string, channel?: string): Promise<void> {
            if (channel)
                await banshares.logging.updateOne(
                    { guild },
                    { $set: { channel } },
                    { upsert: true },
                );
            else await banshares.logging.deleteOne({ guild });
        }

        export async function set_button(guild: string, enable: boolean): Promise<void> {
            await banshares.settings.updateOne(
                { guild },
                { $set: { no_button: !enable } },
                { upsert: true },
            );
        }

        export async function set_daedalus(guild: string, enable: boolean): Promise<void> {
            await banshares.settings.updateOne(
                { guild },
                { $set: { daedalus: enable } },
                { upsert: true },
            );
        }

        export async function set_receive_dm_scams(guild: string, enable: boolean): Promise<void> {
            await banshares.settings.updateOne(
                { guild },
                { $set: { suppress_dm_scams: !enable } },
                { upsert: true },
            );
        }

        export async function set_autoban_thresholds(
            guild: string,
            autoban: string,
            autoban_member: string,
            autoban_dm_scams: boolean,
        ): Promise<void> {
            await banshares.settings.updateOne(
                { guild },
                { $set: { autoban, autoban_member, autoban_dm_scams } },
                { upsert: true },
            );
        }
    }

    export namespace Characters {
        export async function get(): Promise<Character[]> {
            const data: Record<string, Record<string, string>> = {};

            for (const key of ["elements", "weapons", "regions"]) {
                data[key] = {};
                for (const entry of await db[key].find().toArray())
                    data[key][entry.name] = entry.emoji;
            }

            const characters: Character[] = [];

            for (const character of await db.characters.find().toArray()) {
                const output: Partial<Character> = { id: character.id, name: character.name };

                for (const key of ["element", "weapon", "region"] as const)
                    output[key] = data[`${key}s`][character[key]] ?? "";

                characters.push(output as Character);
            }

            return characters;
        }

        export async function display_map(): Promise<Record<string, string>> {
            return (await get()).reduce(
                (o, char) => ({
                    ...o,
                    [char.id]: `${char.element} ${char.weapon} ${char.region} ${char.name}`,
                }),
                {},
            );
        }
    }

    export namespace Polls {
        export async function get(id: number): Promise<Poll<true> | null> {
            return (await db.polls.findOne({ id })) as Poll<true> | null;
        }

        export async function get_from_message(message: string): Promise<Poll<true> | null> {
            return (await db.polls.findOne({ message })) as Poll<true> | null;
        }

        export async function get_all(): Promise<Poll<true>[]> {
            return (await db.polls.find().toArray()) as Poll<true>[];
        }

        export async function get_polls_to_close(): Promise<Poll<true>[]> {
            return (await db.polls
                .find({ close: { $lt: new Date() }, closed: { $ne: true } })
                .toArray()) as Poll<true>[];
        }

        export async function close(_id: ObjectId, required: string[]): Promise<void> {
            await db.polls.updateOne({ _id }, { $set: { dm: false, closed: true, required } });
        }

        export async function edit(id: number, poll: Partial<Poll>): Promise<void> {
            await db.polls.updateOne({ id }, { $set: poll });
        }

        export async function get_polls_to_dm(): Promise<Poll<true>[]> {
            const threshold = new Date();
            threshold.setHours(threshold.getHours() + 24);

            const filter = { dm: true, closed: { $ne: true }, close: { $lt: threshold } };
            const polls = await db.polls.find(filter).toArray();
            await db.polls.updateMany(filter, { $set: { dm: false } });

            return polls as Poll<true>[];
        }

        export async function get_votes(
            poll: number,
            required: string[],
        ): Promise<PollVote<true>[]> {
            return (await db.poll_votes
                .find({ poll, user: { $in: required } })
                .toArray()) as PollVote<true>[];
        }

        export async function who_has_voted(poll: number): Promise<string[]> {
            return (await db.poll_votes.find({ poll }).toArray()).map((entry) => entry.user);
        }
    }

    export namespace Votes {
        export async function get(poll: number, user: string): Promise<PollVote<true> | null> {
            return (await db.poll_votes.findOne({ poll, user })) as PollVote<true> | null;
        }

        export async function get_all(): Promise<PollVote<true>[]> {
            return (await db.poll_votes.find().toArray()) as PollVote<true>[];
        }

        export async function set(
            poll: number,
            user: string,
            vote: Partial<PollVote>,
        ): Promise<void> {
            await db.poll_votes.updateOne({ poll, user }, { $set: vote }, { upsert: true });
        }

        export async function set_abstain(poll: number, user: string): Promise<void> {
            await set(poll, user, { abstain: true });
        }

        export async function set_proposal(
            poll: number,
            user: string,
            yes: boolean,
        ): Promise<void> {
            await set(poll, user, { abstain: false, yes });
        }

        export async function set_induction(
            poll: number,
            user: string,
            verdict: string,
        ): Promise<void> {
            await set(poll, user, { abstain: false, verdict });
        }

        export async function set_selection(
            poll: number,
            user: string,
            selected: string[],
        ): Promise<void> {
            await set(poll, user, { abstain: false, selected });
        }
    }

    export namespace Events {
        export async function get_tracks(): Promise<CalendarTrack<true>[]> {
            return (await db.events.find().toArray()).map((x) => ({ events: x.events }));
        }

        export async function get_event_matrix(): Promise<CalendarEvent<true>[][]> {
            return (await get_tracks()).map(({ events }) => events);
        }

        export async function set_tracks(tracks: CalendarTrack[]): Promise<void> {
            await replace("events", tracks);
        }
    }

    export namespace InternalData {
        const keys = [
            "guild_map",
            "user_map",
            "elements",
            "weapons",
            "regions",
            "characters",
        ] as const;

        export async function get(): Promise<InternalData<true>> {
            return {
                guild_map: await guild_map(),
                user_map: await user_map(),
                elements: await elements(),
                weapons: await weapons(),
                regions: await regions(),
                characters: await characters(),
            };
        }

        export async function set(data: InternalData): Promise<void> {
            for (const key of keys) await replace(key, data[key]);
        }

        async function get_set(key: keyof InternalData): Promise<InternalData<true>[typeof key]> {
            return await db[key].find().toArray();
        }

        export const user_map = () => get_set("user_map") as Promise<UserMapEntry<true>[]>;
        export const guild_map = () => get_set("guild_map") as Promise<GuildMapEntry<true>[]>;
        export const elements = () => get_set("elements") as Promise<CharacterAttribute<true>[]>;
        export const weapons = () => get_set("weapons") as Promise<CharacterAttribute<true>[]>;
        export const regions = () => get_set("regions") as Promise<CharacterAttribute<true>[]>;
        export const characters = () => get_set("characters");
    }

    export namespace HistoricalRecords {
        export async function get_election_history(): Promise<ElectionRecord<true>[]> {
            return (await db.election_history.find().toArray()) as ElectionRecord<true>[];
        }

        export async function set_election_history(entries: ElectionRecord[]): Promise<void> {
            await replace("election_history", entries);
        }

        export async function get_membership_changes(): Promise<MembershipChange<true>[]> {
            return (await db.membership_changes.find().toArray()) as MembershipChange<true>[];
        }

        export async function set_membership_changes(entries: MembershipChange[]): Promise<void> {
            await replace("membership_changes", entries);
        }

        export async function get_observation_schedule(): Promise<ObservationRecord<true>[]> {
            return (await db.observation_schedule.find().toArray()) as ObservationRecord<true>[];
        }

        export async function set_observation_schedule(
            entries: ObservationRecord[],
        ): Promise<void> {
            await replace("observation_schedule", entries);
        }

        export async function get_observer_terms(): Promise<ObserverTerm<true>[]> {
            return (await db.observer_terms.find().toArray()) as ObserverTerm<true>[];
        }

        export async function set_observer_terms(entries: ObserverTerm[]): Promise<void> {
            await replace("observer_terms", entries);
        }
    }

    export namespace Announcements {
        export async function get(): Promise<Announcement<true>[]> {
            return (await db.announcements.find().toArray()) as Announcement<true>[];
        }

        export async function set(entries: Announcement[]): Promise<void> {
            await replace("announcements", entries);
        }
    }

    export namespace Testimonials {
        export async function get(): Promise<Testimonial<true>[]> {
            return await db.testimonials.find().toArray();
        }

        export async function set(entries: Testimonial[]): Promise<void> {
            await replace("testimonials", entries);
        }
    }

    export namespace Docs {
        export async function get(id: string): Promise<Doc<true> | null> {
            return (await db.docs.findOne({ id })) as Doc<true> | null;
        }

        export async function list(author: string): Promise<Doc<true>[]> {
            return (await db.docs
                .find({ author, deleted: { $ne: true } })
                .toArray()) as Doc<true>[];
        }

        export async function del(id: string, deleter: string): Promise<void> {
            await db.docs.updateOne({ id }, { $set: { deleted: true, deleter } });
        }

        export async function demote(id: string): Promise<void> {
            await db.docs.updateOne({ id }, { $set: { official: false } });
        }

        export async function save(id: string, doc: Partial<Doc>): Promise<void> {
            await db.docs.updateOne({ id }, { $set: doc }, { upsert: true });
        }
    }

    export namespace Forms {
        export async function get(id: string): Promise<Form<true> | null> {
            return (await db.forms.findOne({ id })) as Form<true> | null;
        }

        export async function list(author: string): Promise<Form<true>[]> {
            return (await db.forms
                .find({ author, deleted: { $ne: true } })
                .toArray()) as Form<true>[];
        }

        export async function del(id: string, deleter: string): Promise<void> {
            await db.forms.updateOne({ id }, { $set: { deleted: true, deleter } });
        }

        export async function save(id: string, form: Partial<Form>): Promise<void> {
            await db.forms.updateOne({ id }, { $set: form }, { upsert: true });
        }

        export async function get_submissions(id: string): Promise<FormSubmission<true>[]> {
            return (await db.form_submissions.find({ id }).toArray()) as FormSubmission<true>[];
        }

        export async function submit(submission: Partial<FormSubmission>): Promise<void> {
            await db.form_submissions.insertOne(submission);
        }
    }
}
