import { PUBLIC_DOMAIN, PUBLIC_TCN_API } from "$env/static/public";
import {
    ComponentType,
    type MessageCreateOptions,
    type MessageEditOptions,
    ButtonStyle,
    Events,
    Colors,
    type APIEmbed,
    TextInputStyle,
} from "discord.js";
import db from "../db.js";
import { vote_bot } from "../bot.js";

export async function get_required(data: any): Promise<string[]> {
    const request = await fetch(`${PUBLIC_TCN_API}/users`);
    const response = await request.json();

    return response
        .filter((x: any) =>
            data.restricted
                ? x.roles.includes("voter")
                : x.roles.includes("owner") || x.roles.includes("advisor"),
        )
        .map((x: any) => x.id);
}

const default_row = (id: number, closed: boolean) => ({
    type: ComponentType.ActionRow,
    components: [
        {
            type: ComponentType.Button,
            customId: "poll/abstain",
            style: ButtonStyle.Secondary,
            label: "Abstain",
            disabled: closed,
        },
        {
            type: ComponentType.Button,
            customId: "poll/view",
            style: ButtonStyle.Secondary,
            label: "View Your Vote",
        },
        {
            type: ComponentType.Button,
            style: ButtonStyle.Link,
            url: `${PUBLIC_DOMAIN}/vote/edit/${id}`,
            label: "Edit Poll",
        },
    ],
});

export async function render(data: any): Promise<MessageCreateOptions & MessageEditOptions> {
    let results: string = "";

    const required = await get_required(data);

    const votes = await db.poll_votes.find({ poll: data.id, user: { $in: required } }).toArray();

    const turnout = ((votes.length ?? 0) * 100) / required.length;

    const valid = turnout * 100 >= data.quorum;
    const closed = new Date() > data.close;

    let abstain: number = -1;

    if (data.live || (new Date() > data.close && valid)) {
        abstain = votes.filter((x) => x.abstain).length;
        const ballots = votes.filter((x) => !x.abstain);
        const ballot_count = ballots.length;

        if (data.mode === "proposal") {
            let yes = 0,
                no = 0;

            for (const vote of ballots)
                if (vote.yes) yes++;
                else no++;

            results = `${yes} ⬆️ `;

            if (yes || no) {
                const green = (yes * 10) / (ballot_count || 1);
                results += "🟩".repeat(green) + "🟥".repeat(10 - green);
            } else results += "⬜".repeat(10);

            results += ` ⬇️ ${no}`;
        } else if (data.mode === "selection") {
            const totals = data.options.reduce((o: any, x: string) => ({ ...o, [x]: 0 }), {});
            for (const vote of ballots) for (const x of vote.selected) totals[x]++;

            results = data.options
                .map(
                    (x: string, i: number) =>
                        `\`${"ABCDEFGHIJ"[i]}\` ${"█"
                            .repeat((totals[x] * 20) / (ballot_count || 1))
                            .padEnd(20, "░")} (${((totals[x] * 100) / (ballot_count || 1)).toFixed(
                            2,
                        )}%)`,
                )
                .join("\n");
        } else if (data.mode === "election") {
            const points = data.candidates.reduce((o: any, x: string) => ({ ...o, [x]: 0 }), {});
            const disapproval = structuredClone(points);

            for (const vote of ballots) {
                vote.rankings.forEach(
                    (x: string, i: number) =>
                        (points[x] +=
                            data.seats < data.candidates.length ? data.candidates.length - i : 1),
                );

                for (const x of vote.countered) disapproval[x]++;
            }

            const eligible: string[] = data.candidates.filter(
                (x: string) => disapproval[x] * 2 <= ballot_count,
            );

            eligible.sort((x, y) => points[x] - points[y]);
            const elected = eligible.filter((x) => points[x] >= points[eligible[data.seats - 1]]);

            results = `Elected candidates in arbitrary order: ${elected
                .map((x) => `<@${x}>`)
                .join(" ")}${
                elected.length > data.seats
                    ? `\n\nThere is a tie, so it is not possible to select the top ${
                          data.seats
                      } candidate${data.seats === 1 ? "" : "s"}.`
                    : ""
            }`;
        }
    } else if (closed) {
        results =
            "Results are hidden because this poll failed to reach quorum. An observer needs to restart it to try to hit quorum for a second time.";
    } else {
        results = "Results are hidden until the poll concludes.";
    }

    return {
        embeds: [
            {
                title: `${turnout.toFixed(2)}% Turnout Reached`,
                description: data.question,
                color: 0x2b2d31,
                fields: [
                    ...(data.mode === "selection"
                        ? [
                              {
                                  name: "Options",
                                  value: data.options
                                      .map(
                                          (x: string, i: number) =>
                                              `- \`${"ABCDEFGHIJ"[i]}\`: ${x}`,
                                      )
                                      .join("\n"),
                              },
                          ]
                        : []),
                    { name: "Results", value: results },
                    { name: "Deadline", value: `<t:${Math.floor(data.close.getTime() / 1000)}:F>` },
                    {
                        name: "Details",
                        value: `- ${
                            data.anonymous
                                ? "This poll is anonymous. Observers can see who voted but not for what."
                                : "This poll is not anonymous. Your vote can be seen by everyone."
                        }\n- ${
                            data.restricted
                                ? "This poll is restricted. Only designated voters may vote."
                                : "This poll is open to everyone. All council members may vote."
                        }`,
                    },
                ],
                footer:
                    abstain === -1
                        ? undefined
                        : { text: `${abstain} ${abstain === 1 ? "person" : "people"} abstained.` },
            },
        ],
        components: [
            default_row(data.id, closed) as any,
            data.mode === "proposal"
                ? {
                      type: ComponentType.ActionRow,
                      components: [
                          {
                              type: ComponentType.Button,
                              customId: "poll/vote-up",
                              style: ButtonStyle.Success,
                              emoji: "⬆️",
                              disabled: closed,
                          },
                          {
                              type: ComponentType.Button,
                              customId: "poll/vote-down",
                              style: ButtonStyle.Danger,
                              emoji: "⬇️",
                              disabled: closed,
                          },
                      ],
                  }
                : data.mode === "selection"
                ? {
                      type: ComponentType.ActionRow,
                      components: [
                          {
                              type: ComponentType.StringSelect,
                              customId: "poll/select-vote",
                              disabled: closed,
                              options: data.options.map((x: string, i: number) => ({
                                  value: x,
                                  label: x,
                                  emoji: [
                                      "🇦",
                                      "🇧",
                                      "🇨",
                                      "🇩",
                                      "🇪",
                                      "🇫",
                                      "🇬",
                                      "🇭",
                                      "🇮",
                                      "🇯",
                                  ][i],
                              })),
                              minValues: data.min,
                              maxValues: data.max,
                          },
                      ],
                  }
                : data.mode === "election"
                ? {
                      type: ComponentType.ActionRow,
                      components: [
                          {
                              type: ComponentType.Button,
                              customId: "poll/elect-vote",
                              style: ButtonStyle.Success,
                              label: "Open Voting Modal",
                              disabled: closed,
                          },
                          {
                              type: ComponentType.Button,
                              customId: "poll/election-help",
                              style: ButtonStyle.Primary,
                              label: "Election Help",
                          },
                      ],
                  }
                : {
                      type: ComponentType.ActionRow,
                      components: [
                          {
                              type: ComponentType.Button,
                              customId: "..._do_nothing_...",
                              style: ButtonStyle.Secondary,
                              label: "...",
                          },
                      ],
                  },
        ],
    };
}

vote_bot.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isMessageComponent() && !interaction.isModalSubmit()) return;
    if (!interaction.message) return;

    let poll: any;

    try {
        poll = await db.polls.findOne({ message: interaction.message.id });
    } catch {
        return;
    }

    const update = async () => await interaction.message!.edit(await render(poll));
    const reply = (embed: APIEmbed) => interaction.reply({ embeds: [embed], ephemeral: true });

    if (!(await can_vote(poll, interaction.user.id))) {
        await reply({
            title: "Ineligible to Vote",
            description: "You are ineligible to vote on this poll.",
            color: Colors.Red,
        });

        return;
    }

    if (interaction.isButton()) {
        if (interaction.customId === "poll/abstain") {
            await db.poll_votes.updateOne(
                { poll: poll.id, user: interaction.user.id },
                { $set: { abstain: true } },
                { upsert: true },
            );

            await reply(render_vote(poll, { abstain: true }));
            await update();
        } else if (interaction.customId === "poll/view") {
            const vote = await db.poll_votes.findOne({ poll: poll.id, user: interaction.user.id });

            if (!vote)
                await reply({
                    title: "No Vote",
                    description: "You have not yet voted on this poll.",
                    color: Colors.Red,
                });
            else await reply(render_vote(poll, vote));
        } else if (
            interaction.customId === "poll/vote-up" ||
            interaction.customId === "poll/vote-down"
        ) {
            const yes = interaction.customId === "poll/vote-up";

            await db.poll_votes.updateOne(
                { poll: poll.id, user: interaction.user.id },
                { $set: { abstain: false, yes } },
                { upsert: true },
            );

            await reply(render_vote(poll, { abstain: false, yes }));
            await update();
        } else if (interaction.customId === "poll/elect-vote") {
            const vote = (await db.poll_votes.findOne({
                poll: poll.id,
                user: interaction.user.id,
            })) ?? { rankings: [], countered: [], blank: true, abstain: true };

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
                                        (x: string) =>
                                            `${vote_bot.users.cache.get(x)?.tag ?? x}: ${
                                                vote.rankings?.includes(x)
                                                    ? poll.candidates.length > poll.seats
                                                        ? vote.rankings.indexOf(x) + 1
                                                        : 1
                                                    : vote.countered?.includes(x)
                                                    ? -1
                                                    : vote.blank
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
        } else if (interaction.customId === "poll/election-help")
            await reply({
                title: "Election Help",
                description:
                    "Elections are held as one of two types of votes. In the event that there are more candidates than available positions, it will be a ranked vote, and the input field title will say `Rank Candidates (1 = best)`. Otherwise, you will just vote for which candidates you want and don't want, and the input field will say `Select Favored Candidates`.\n\nIn both cases, the input field will be populated with the candidates' names followed by a colon. You should put your vote after each one of these colons.\n\nIf it is a ranked vote, rank the candidates you wish to vote in favor of starting from 1 being the best. Then, place a 0 next to candidates you wish to abstain on and -1 next to candidates you wish to vote against. For example, to rank A > B > C, abstain D, reject E, you would write the following:\n```\nA: 1\nB: 2\nC: 3\nD: 0\nE: -1\n```\n\nFor non-ranked votes, just put 1 next to candidates you wish to vote for, 0 to abstain, and -1 to vote against.\n\nIn both cases, the order of the lines themselves do not matter.",
                color: 0x2b2d31,
            });
    } else if (interaction.isStringSelectMenu()) {
        if (interaction.customId === "poll/select-vote") {
            await db.poll_votes.updateOne(
                { poll: poll.id, user: interaction.user.id },
                { $set: { abstain: false, selected: interaction.values } },
                { upsert: true },
            );

            await reply(render_vote(poll, { abstain: false, selected: interaction.values }));
            await update();
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "poll/elect-modal") {
            const error = (message: string) => ({
                title: "Invalid Vote",
                description: message,
                color: Colors.Red,
            });

            const input = interaction.fields.getTextInputValue("input");

            const id_map = poll.candidates.reduce(
                (o: any, x: string) => ({
                    ...o,
                    [x]: x,
                    [vote_bot.users.cache.get(x)?.tag ?? x]: x,
                }),
                {},
            );

            const ranked = new Set<string>();
            const used_nums = new Set<number>();

            let count = 0;

            const new_vote: { abstain: false; rankings: string[]; countered: string[] } = {
                abstain: false,
                rankings: [],
                countered: [],
            };

            for (const line of input.split(/\n+/)) {
                const match = line.match(/^(.+)\s*:\s*(-1|\d+)$/);

                if (!match) {
                    reply(
                        error(
                            "One or more lines did not match the required format of `tag: vote`.",
                        ),
                    );

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
                await db.poll_votes.updateOne(
                    { poll: poll.id, user: interaction.user.id },
                    { $set: { abstain: true } },
                    { upsert: true },
                );

                await reply(render_vote(poll, { abstain: true }));
                await update();

                return;
            }

            if (count < poll.candidates.length) {
                reply(error("You must rank, abstain on, or counter-vote all candidates."));
                return;
            }

            if (used_nums.size > 0 && Math.max(...used_nums) !== used_nums.size) {
                reply(error("Rankings contained gaps (must span from 1 to N)."));
                return;
            }

            await db.poll_votes.updateOne(
                { poll: poll.id, user: interaction.user.id },
                { $set: new_vote },
                { upsert: true },
            );

            await reply(render_vote(poll, new_vote));
            await update();
        }
    }
});

function render_vote(poll: any, vote: any) {
    if (vote.abstain)
        return {
            title: "Abstained",
            description: "You have __abstained__ from this poll.",
            color: 0x2b2d31,
        };
    else if (poll.mode === "proposal")
        return {
            title: `Voted In ${vote.yes ? "Favor" : "Opposition"}`,
            description: `You have voted __${vote.yes ? "in support of" : "against"}__ the motion.`,
            color: 0x2b2d31,
        };
    else if (poll.mode === "selection")
        return {
            title: "Your Vote",
            description: `You voted for the following option(s):\n${poll.options
                .filter((x: string) => vote.selected.includes(x))
                .map((x: string) => `- ${x}`)
                .join("\n")}`,
            color: 0x2b2d31,
        };
    else if (poll.mode === "election")
        return {
            title: "Election Vote",
            description: `Here is your election vote:\n${vote.rankings
                .map((x: string, i: number) => `\`${i + 1}.\` <@${x}>`)
                .join("\n")}${
                vote.countered.length > 0
                    ? `\nCounter-votes: ${vote.countered.map((x: string) => `<@${x}>`).join(", ")}`
                    : ""
            }${
                vote.rankings.length + vote.countered.length < poll.candidates.length
                    ? `\nAbstained: ${poll.candidates
                          .filter(
                              (x: string) =>
                                  !vote.rankings.includes(x) && !vote.countered.includes(x),
                          )
                          .map((x: string) => `<@${x}>`)
                          .join(", ")}`
                    : ""
            }`,
            color: 0x2b2d31,
        };

    return { title: "?" };
}

async function can_vote(poll: any, user: string) {
    const data = await (await fetch(`${PUBLIC_TCN_API}/users/${user}`)).json();
    return (poll.restricted ? ["voter"] : ["owner", "advisor"]).some((x) => data.roles.includes(x));
}
