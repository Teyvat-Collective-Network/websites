import { PUBLIC_ALLOWLIST, PUBLIC_TCN_API } from "$env/static/public";
import type { Guild, User } from "discord.js";
import { APIError } from "./errors.js";
import type {
    Announcement,
    CalendarEvent,
    ElectionRecord,
    GuildMapEntry,
    InternalData,
    InviteData,
    MembershipChange,
    ObservationRecord,
    ObserverTerm,
    TCNGuild,
    TCNUser,
    Testimonial,
    UserTagEntry,
} from "./types.js";

export namespace TCN {
    export async function get(route: string): Promise<unknown> {
        const request = await fetch(`${PUBLIC_TCN_API}${route}`);

        if (!request.ok) throw new APIError(request.status, `GET TCN ${route} failed.`, await request.text());

        return await request.json();
    }

    export async function guilds(): Promise<TCNGuild[]> {
        return (await get("/guilds")) as TCNGuild[];
    }

    export async function guild(id: string): Promise<TCNGuild> {
        return (await get(`/guilds/${id}`)) as TCNGuild;
    }

    export async function users(): Promise<TCNUser[]> {
        return (await get("/users")) as TCNUser[];
    }

    export async function user(id: string): Promise<TCNUser> {
        return (await get(`/users/${id}`)) as TCNUser;
    }

    export async function is_tcn(guild_id?: Guild | string | null): Promise<boolean> {
        if (guild_id == undefined) return false;

        const id = typeof guild_id === "string" ? guild_id : guild_id.id;
        if (PUBLIC_ALLOWLIST?.match(`\\b${id}\\b`)) return true;

        try {
            await guild(id);
            return true;
        } catch {
            return false;
        }
    }

    export async function is_observer(user_id?: User | string | null): Promise<boolean> {
        if (user_id == undefined) return false;

        const id = typeof user_id === "string" ? user_id : user_id.id;

        try {
            const api_user = await user(id);
            return api_user.roles.includes("observer");
        } catch {
            return false;
        }
    }
}

export namespace API {
    export async function get(route: string): Promise<unknown> {
        const request = await fetch(`/api${route}`);

        if (!request.ok) throw new APIError(request.status, `GET INTERNAL /api${route} failed.`, await request.text());

        return await request.json();
    }

    export async function post<T extends boolean = false>(
        route: string,
        data: unknown,
        get?: T,
    ): Promise<T extends true ? unknown : void> {
        const request = await fetch(`/api${route}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!request.ok) throw new APIError(request.status, `POST INTERNAL /api${route} failed.`, await request.text());

        if (get) return await request.json();
    }

    export async function guild_names(): Promise<GuildMapEntry[]> {
        return (await get("/guild-names")) as GuildMapEntry[];
    }

    export async function get_all_tags(): Promise<UserTagEntry[]> {
        return (await get("/get-all-tags")) as UserTagEntry[];
    }

    export async function get_tag(id: string): Promise<string> {
        return (await get(`/get-tag/${id}`)) as string;
    }

    export async function get_council(): Promise<UserTagEntry[]> {
        return (await get("/council")) as UserTagEntry[];
    }

    export async function get_fetch_invite(code: string): Promise<InviteData> {
        return (await get(`/fetch-invite?code=${encodeURIComponent(code)}`)) as InviteData;
    }

    export async function post_calendar(events: CalendarEvent[][]): Promise<void> {
        await post("/calendar", events);
    }

    export async function post_data_manager(data: InternalData): Promise<void> {
        await post("/data-manager", data);
    }

    export async function post_election_history(records: ElectionRecord[]): Promise<void> {
        await post("/election-history", records);
    }

    export async function post_featured(announcements: Announcement[]): Promise<void> {
        await post("/featured", announcements);
    }

    export async function post_membership_changes(changes: MembershipChange[]): Promise<void> {
        await post("/membership-changes", changes);
    }

    export async function post_observation_schedule(records: ObservationRecord[]): Promise<void> {
        await post("/observation-schedule", records);
    }

    export async function post_testimonials(testimonials: Testimonial[]): Promise<void> {
        await post("/testimonials", testimonials);
    }

    export async function post_observer_terms(terms: ObserverTerm[]): Promise<void> {
        await post("/observer-terms", terms);
    }

    export async function post_add_event(event: CalendarEvent): Promise<void> {
        await post("/add-event", event);
    }
}
