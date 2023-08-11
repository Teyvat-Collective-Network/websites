import {
    ALERT,
    APPLICANTS_CHANNEL,
    BANSHARE_DASHBOARD,
    CHANNEL,
    ELECTION_FORUM,
    LANDING,
    LOG,
    NEW_APPLICANT_ALERT_ROLE,
    NON_URGENT,
    OFFICIAL_BUSINESS,
    URGENT,
    VOTE_CHANNEL,
} from "$env/static/private";
import type { Channel, Role, ForumChannel, TextBasedChannel, TextChannel } from "discord.js";
import bot from "./bot.js";
import { PUBLIC_HQ } from "$env/static/public";

async function channel<T extends Channel>(id: string): Promise<T> {
    const channel = await bot.channels.fetch(id);
    if (!channel) throw `Missing channel: ${id}`;

    return channel as T;
}

async function role(id: string): Promise<Role> {
    const role = await hq.roles.fetch(id);
    if (!role) throw `Missing role: ${id}`;

    return role;
}

export const channels = {
    applicants: await channel<ForumChannel>(APPLICANTS_CHANNEL),
    banshare_dashboard: await channel<TextChannel>(BANSHARE_DASHBOARD),
    banshare_main: await channel<TextChannel>(CHANNEL),
    bot_logs: await channel<TextChannel>(LOG),
    elections: await channel<ForumChannel>(ELECTION_FORUM),
    exec: await channel<TextChannel>(ALERT),
    landing: await channel<TextChannel>(LANDING),
    official_business: await channel<TextBasedChannel>(OFFICIAL_BUSINESS),
    vote_here: await channel<TextBasedChannel>(VOTE_CHANNEL),
};

export const hq = await bot.guilds.fetch(PUBLIC_HQ);

export const roles = {
    new_applicant: await role(NEW_APPLICANT_ALERT_ROLE),
    urgent: await role(URGENT),
    non_urgent: await role(NON_URGENT),
};
