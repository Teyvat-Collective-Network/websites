import { Colors, Events, type APIEmbed, ComponentType, TextInputStyle } from "discord.js";
import bot from "../../../../core/bot.js";
import { DB } from "../../../../db.js";
import type { BaseVote, PollVote } from "$lib/types.js";
import { render, render_vote } from "../../utils/components.js";
import { TCN } from "$lib/api.js";
import get_required from "../../utils/get_required.js";
import { can_vote } from "../../utils/can_vote.js";

const error = (message: string) => ({ title: "Invalid Vote", description: message, color: Colors.Red });

bot.on(Events.InteractionCreate, async (interaction) => {
    if ((!interaction.isMessageComponent() && !interaction.isModalSubmit()) || !interaction.message) return;

    const poll = await DB.Polls.get_from_message(interaction.message.id);
    if (!poll) return;

    const reply = (embed: APIEmbed) => interaction.reply({ embeds: [embed], ephemeral: true });

    if (!(await can_vote(poll, interaction.user.id))) {
        await reply({
            title: "Ineligible to Vote",
            description: "You are ineligible to vote on this poll.",
            color: Colors.Red,
        });

        return;
    }

    const id = interaction.customId;
    let vote: BaseVote | null = null;

    if (interaction.isButton()) {
        if (id === "poll/abstain") vote = { abstain: true };
        else if (id === "poll/vote-up" || id === "poll/vote-down")
            vote = { abstain: false, yes: id === "poll/vote-up" };
        else if (id === "poll/elect-vote") {
            if (poll.mode !== "election") throw "Invalid poll type.";

            const vote: PollVote<true> | ({ blank: true } & Partial<PollVote>) = (await DB.Votes.get(
                poll.id,
                interaction.user.id,
            )) ?? {
                rankings: [],
                countered: [],
                blank: true,
                abstain: true,
            };

            if (vote.abstain) vote.rankings = vote.countered = [];

            await interaction.showModal({
                title: "Election Vote Modal",
                customId: "poll/elect-modal",
                components: [
                    {
                        type: ComponentType.ActionRow,
                        components: [
                            {
                                type: ComponentType.TextInput,
                                style: TextInputStyle.Paragraph,
                                customId: "input",
                                label:
                                    poll.candidates.length > poll.seats
                                        ? "Rank Candidates (1 = best)"
                                        : "Select Favored Candidates",
                                value: `${poll.candidates
                                    .map(
                                        (x) =>
                                            `${bot.users.cache.get(x)?.tag ?? x}: ${
                                                vote.rankings?.includes(x)
                                                    ? poll.candidates.length > poll.seats
                                                        ? vote.rankings.indexOf(x) + 1
                                                        : 1
                                                    : vote.countered?.includes(x)
                                                    ? -1
                                                    : "blank" in vote
                                                    ? ""
                                                    : 0
                                            }`,
                                    )
                                    .join("\n")}`,
                            },
                        ],
                    },
                ],
            });
        } else if (id === "poll/view") {
            const vote = await DB.Votes.get(poll.id, interaction.user.id);

            if (vote) await reply(render_vote(poll, vote));
            else
                await reply({
                    title: "No Vote",
                    description: "You have not yet voted on this poll.",
                    color: Colors.Red,
                });
        } else if (id === "poll/view-voters") {
            if (!(await TCN.is_observer(interaction.user))) {
                await reply({
                    title: "No Permission",
                    description: "Only observers may view who has voted and they cannot see who voted for what.",
                    color: Colors.Red,
                });

                return;
            }

            const required = await get_required(poll);
            const votes = await DB.Polls.get_votes(poll.id, required);

            const header = `Turnout: ${votes.length} / ${required.length} (${(
                (votes.length / required.length) *
                100
            ).toFixed(2)}%)\n\n`;

            await interaction.deferReply({ ephemeral: true });

            const users = [] as [string, string][];

            for (const id of required)
                try {
                    users.push([(await bot.users.fetch(id)).tag, id]);
                } catch {
                    users.push([`Unknown [${id}]`, id]);
                }

            users.sort((a, b) => a[0].localeCompare(b[0]));

            const found = new Set<string>(votes.map((vote) => vote.user));
            await interaction.editReply({
                files: [
                    {
                        attachment: Buffer.from(
                            `${header}${(
                                [
                                    [true, "✅"],
                                    [false, "❌"],
                                ] as const
                            )
                                .map(([check, emoji]) =>
                                    users
                                        .filter(([, id]) => found.has(id) === check)
                                        .map(([tag, id]) => `${emoji} ${tag} (${id})`)
                                        .join("\n"),
                                )
                                .join("\n")}`,
                            "utf-8",
                        ),
                        name: "votes.txt",
                    },
                ],
            });
        } else if (id === "poll/election-help")
            await reply({
                title: "Election Help",
                description:
                    "Elections are held as one of two types of votes. In the event that there are more candidates than available positions, it will be a ranked vote, and the input field title will say `Rank Candidates (1 = best)`. Otherwise, you will just vote for which candidates you want and don't want, and the input field will say `Select Favored Candidates`.\n\nIn both cases, the input field will be populated with the candidates' names followed by a colon. You should put your vote after each one of these colons.\n\nIf it is a ranked vote, rank the candidates you wish to vote in favor of starting from 1 being the best. Then, place a 0 next to candidates you wish to abstain on and -1 next to candidates you wish to vote against. For example, to rank A > B > C, abstain D, reject E, you would write the following:\n```\nA: 1\nB: 2\nC: 3\nD: 0\nE: -1\n```\n\nFor non-ranked votes, just put 1 next to candidates you wish to vote for, 0 to abstain, and -1 to vote against.\n\nIn both cases, the order of the lines themselves do not matter.",
                color: 0x2b2d31,
            });
    } else if (interaction.isStringSelectMenu()) {
        if (id === "poll/induct-vote") vote = { abstain: false, verdict: interaction.values[0] };
        else if (id === "poll/select-vote") vote = { abstain: false, selected: interaction.values };
    } else if (interaction.isModalSubmit()) {
        if (id === "poll/elect-modal") {
            if (poll.mode !== "election") throw "Invalid poll type.";

            const input = interaction.fields.getTextInputValue("input");

            const id_map: Record<string, string> = poll.candidates.reduce(
                (o, x: string) => ({ ...o, [x]: x, [bot.users.cache.get(x)?.tag ?? x]: x }),
                {},
            );

            const ranked = new Set<string>();
            const used_nums = new Set<number>();

            let count = 0;

            const new_vote: Pick<Required<BaseVote>, "abstain" | "rankings" | "countered"> = {
                abstain: false,
                rankings: [],
                countered: [],
            };

            for (const line of input.split(/\n+/)) {
                const match = line.match(/^(.+)\s*:\s*(-1|\d+)$/);

                if (!match) {
                    reply(error("One or more lines did not match the required format of `tag: vote`."));
                    return;
                }

                const id = id_map[match[1]];

                if (!id) {
                    reply(error(`Did not recognize ${match[1]} as a candidate.`));
                    return;
                }

                if (ranked.has(id)) {
                    reply(error("One or more candidates was ranked twice."));
                    return;
                }

                ranked.add(id);

                const num = parseInt(match[2]);

                if (used_nums.has(num)) {
                    reply(error("One or more ranking numbers was entered twice."));
                    return;
                }

                if (num > 0) {
                    used_nums.add(num);
                    new_vote.rankings[num - 1] = id;
                } else if (num === -1) new_vote.countered.push(id);

                count++;
            }

            if (new_vote.rankings.length + new_vote.countered.length === 0) {
                vote = { abstain: true };
            } else vote = new_vote;

            if (count < poll.candidates.length) {
                reply(error("You must rank, abstain on, or counter-vote all candidates."));
                return;
            }

            if (used_nums.size > 0 && Math.max(...used_nums) !== used_nums.size) {
                reply(error("Rankings contained gaps (must span from 1 to N)."));
                return;
            }
        }
    }

    if (vote) {
        await DB.Votes.set(poll.id, interaction.user.id, vote);
        await reply(render_vote(poll, vote));
        await interaction.message.edit(await render(poll));
    }
});
