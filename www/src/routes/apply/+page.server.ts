import {
    APPLICANTS_CHANNEL,
    NEW_APPLICANT_ALERT_ROLE,
    NEW_APPLICANT_TAG,
    OBSERVER_CHANNEL,
    OFFICIAL_BUSINESS,
} from "$env/static/private";
import { fail, type Actions } from "@sveltejs/kit";
import { ChannelType, type Invite } from "discord.js";
import bot from "../../bot.js";

export const actions: Actions = {
    default: async ({ request, locals, fetch }) => {
        const data = await request.formData();
        const user = (locals as any).user;

        if (!user) return fail(500, { error: "Not Authenticated" });

        const mascot = (data.get("mascot") as string | null)?.trim();
        const role = data.get("role") as string;
        const roleother = (data.get("roleother") as string | null)?.trim();
        const ownerid = role === "owner" ? "" : (data.get("ownerid") as string | null)?.trim();
        const invite = (data.get("invite") as string | null)?.trim();
        const nsfw = data.get("nsfw") as string;
        const experience = (data.get("experience") as string | null)?.trim()?.replace(/\r\n/, "\n");
        const shortgoals = (data.get("shortgoals") as string | null)?.trim()?.replace(/\r\n/, "\n");
        const longgoals = (data.get("longgoals") as string | null)?.trim()?.replace(/\r\n/, "\n");
        const additional = (data.get("additional") as string | null)?.trim()?.replace(/\r\n/, "\n");
        const observerchannelconsent = data.has("observerchannelconsent");
        const observerauditconsent = data.has("observerauditconsent");
        const partnerlistconsent = data.has("partnerlistconsent");
        const eventsconsent = data.has("eventsconsent");

        const values = {
            mascot,
            role,
            roleother,
            ownerid,
            invite,
            nsfw,
            experience,
            shortgoals,
            longgoals,
            additional,
            observerchannelconsent,
            observerauditconsent,
            partnerlistconsent,
            eventsconsent,
        };

        const abort = (code: number, message: string) =>
            fail(code, {
                error: message,
                ...values,
            });

        if (!mascot) return abort(400, "Missing mascot character.");
        if (!["owner", "admin", "mod", "other"].includes(role))
            return abort(400, "Invalid role selection.");
        if (role === "other" && !roleother)
            return abort(400, 'Role must be specified if you selected "other".');
        if (role !== "owner" && !ownerid)
            return abort(400, "Owner must be specified if you are not the owner.");
        if (role !== "owner" && user.id === ownerid)
            return abort(400, 'If you are the owner, please set your role to "owner".');
        if (
            !invite?.match(
                /^(https:\/\/)?discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/[\w-]{2,255}$/i,
            )
        )
            return abort(400, "Missing invite.");
        if (!["private", "public", "no"].includes(nsfw))
            return abort(400, "Invalid NSFW selection.");
        if (!shortgoals) return abort(400, "Missing short-term goals.");
        if (!longgoals) return abort(400, "Missing long-term goals.");
        if (
            !observerchannelconsent ||
            !observerauditconsent ||
            !partnerlistconsent ||
            !eventsconsent
        )
            return abort(400, "Missing consent.");
        if (
            (experience?.length ?? 0) > 1024 ||
            (shortgoals?.length ?? 0) > 1024 ||
            (longgoals?.length ?? 0) > 1024 ||
            (additional?.length ?? 0) > 1024
        )
            return abort(400, "Length limit exceeded.");

        let invite_data: Invite;

        try {
            invite_data = await bot.fetchInvite(invite);
            if (!invite_data) throw 0;
        } catch {
            return abort(400, "Invalid invite.");
        }

        let owner;

        if (ownerid) {
            try {
                owner = await bot.users.fetch(ownerid);
            } catch {
                return abort(400, `Owner ID (<code>${ownerid}</code>) was invalid.`);
            }
        }

        const observer_channel = bot.channels.cache.get(OBSERVER_CHANNEL);
        const applicants_channel = bot.channels.cache.get(APPLICANTS_CHANNEL);
        const official_business = bot.channels.cache.get(OFFICIAL_BUSINESS);

        if (
            !observer_channel?.isTextBased() ||
            applicants_channel?.type !== ChannelType.GuildForum ||
            !official_business?.isTextBased()
        )
            return abort(500, "Incomplete setup; please contact an observer.");

        try {
            const display_name = invite_data
                .guild!.name.toLowerCase()
                .includes(mascot.toLowerCase())
                ? invite_data.guild!.name
                : `${invite_data.guild!.name} (${mascot} Mains)`;

            const submitter =
                role === "owner" ? `<@${user.id}>` : `<@${user.id}> (on behalf of ${owner})`;

            const thread = await applicants_channel.threads.create({
                name: `${mascot} Mains`,
                message: {
                    embeds: [
                        {
                            title: "**New Application**",
                            description: `**${submitter}** applied for **${display_name}**. Their role in the server is: ${
                                role !== "other" ? role : roleother
                            }. The server has ${
                                invite_data.memberCount
                            } members and was created at <t:${Math.floor(
                                invite_data.guild!.createdTimestamp / 1000,
                            )}:f>.`,
                            color: 0x2b2d31,
                            fields: [
                                { name: "Invite", value: invite },
                                {
                                    name: "NSFW",
                                    value: {
                                        no: "None",
                                        private: "Yes, hidden from regular users.",
                                        public: "Yes, visible to regular users.",
                                    }[nsfw]!,
                                },
                            ],
                        },
                    ],
                },
                appliedTags: [NEW_APPLICANT_TAG],
            });

            await thread.send({
                embeds: [
                    {
                        color: 0x2b2d31,
                        fields: [
                            experience && { name: "Prior Experience", value: experience },
                            { name: "Short-Term Server Goals", value: shortgoals },
                            { name: "Long-Term Server Goals", value: longgoals },
                            additional && {
                                name: "Additional Questions/Comments",
                                value: additional,
                            },
                        ].filter((x): x is { name: string; value: string } => !!x),
                    },
                ],
            });

            await official_business.send(
                `<@&${NEW_APPLICANT_ALERT_ROLE}> **${submitter}** applied for **${display_name}**. Please check out the application in ${applicants_channel} here: <${thread.url}>.`,
            );
        } catch {
            return abort(500, "Posting your application failed; please contact an observer.");
        }

        return { success: true };
    },
};
