import { PUBLIC_DOMAIN } from "$env/static/public";
import type { ActionRow, BaseVote, Poll } from "$lib/types.js";
import { ButtonStyle, ComponentType, type MessageCreateOptions, type MessageEditOptions } from "discord.js";
import get_required from "./get_required.js";
import { DB } from "../../../db.js";

export function default_row(id: number, closed: boolean): ActionRow {
    return {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                custom_id: "poll/abstain",
                style: ButtonStyle.Secondary,
                label: "Abstain",
                disabled: closed,
            },
            {
                type: ComponentType.Button,
                custom_id: "poll/view",
                style: ButtonStyle.Secondary,
                label: "View Your Vote",
            },
            {
                type: ComponentType.Button,
                custom_id: "poll/view-voters",
                style: ButtonStyle.Secondary,
                label: "View Voters",
            },
            {
                type: ComponentType.Button,
                style: ButtonStyle.Link,
                url: `${PUBLIC_DOMAIN}/vote/edit/${id}`,
                label: "Edit Poll",
            },
        ],
    };
}

export async function render(data: Poll, required?: string[]): Promise<MessageCreateOptions & MessageEditOptions> {
    let results: string = "";

    required ??= await get_required(data);

    const votes = await DB.Polls.get_votes(data.id, required);

    const turnout = ((votes.length ?? 0) * 100) / required.length;

    const valid = turnout >= data.quorum;
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

            const approval = yes + no > 0 ? (yes / (yes + no)) * 100 : 50;

            results += `\n\n(Approval: ${approval.toFixed(2)}%${approval > 40 && approval < 60 ? " - tie" : ""})`;
        } else if (data.mode === "induction") {
            let induct_now = 0,
                induct_later = 0,
                reject = 0,
                extend = 0;

            for (const vote of ballots)
                if (vote.verdict === "induct-now") induct_now++;
                else if (vote.verdict === "induct-later")
                    if (data.preinduct) induct_later++;
                    else induct_now++;
                else if (vote.verdict === "reject") reject++;
                else if (vote.verdict === "extend") extend++;

            results = `- Induct${data.preinduct ? " Now" : ""}: ${induct_now}${
                data.preinduct ? `\n- Induct Later: ${induct_later}` : ""
            }\n- Reject: ${reject}\n- Extend Observation: ${extend}\n\n`;

            const ratio =
                induct_now + induct_later + reject + extend > 0
                    ? (induct_now + induct_later) / (induct_now + induct_later + reject + extend || 1)
                    : 0.5;

            if (ratio > 0.4 && ratio < 0.6)
                results +=
                    "Approval and non-approval are too close and therefore count as a tie. A full re-vote is required.";
            else if (induct_now + induct_later > reject + extend) {
                const subratio = induct_now / (induct_now + induct_later || 1);

                if (subratio > 40 && subratio < 60)
                    results += `${data.server} was approved, but induction timing was a tie. A re-vote between inducting now and later is required.`;
                else if (induct_now > induct_later)
                    results += `${data.server} was approved for induction! Prepare for their arrival.`;
                else
                    results += `${data.server} was approved to be inducted upon official confirmation of their mascot character.`;
            } else {
                const subratio = reject / (reject + extend || 1);

                if (subratio > 40 && subratio < 60)
                    results += `${data.server} was not approved, but whether to reject or extend was a tie. A re-vote between rejection and extending observation is required.`;
                else if (reject > extend) results += `${data.server} was rejected. Better luck next time!`;
                else
                    results += `The verdict is to extend observation for ${data.server}. A new observer will carry out another 28 days of observation.`;
            }
        } else if (data.mode === "selection") {
            const totals: Record<string, number> = data.options.reduce((o, x: string) => ({ ...o, [x]: 0 }), {});

            for (const vote of ballots) for (const x of vote.selected ?? []) totals[x]++;

            results = data.options
                .map(
                    (x: string, i: number) =>
                        `\`${"ABCDEFGHIJ"[i]}\` ${"█"
                            .repeat((totals[x] * 20) / (ballot_count || 1))
                            .padEnd(20, "░")} (${((totals[x] * 100) / (ballot_count || 1)).toFixed(2)}%)`,
                )
                .join("\n");
        } else if (data.mode === "election") {
            data.question = `**Wave ${data.wave} Election**`;

            const points: Record<string, number> = data.candidates.reduce((o, x: string) => ({ ...o, [x]: 0 }), {});

            const disapproval = structuredClone(points);

            for (const vote of ballots) {
                vote.rankings?.forEach(
                    (x: string, i: number) =>
                        (points[x] += data.seats < data.candidates.length ? data.candidates.length - i : 1),
                );

                for (const x of vote.countered ?? []) disapproval[x]++;
            }

            const eligible: string[] = data.candidates.filter((x: string) => disapproval[x] * 2 <= ballot_count);

            eligible.sort((x, y) => points[y] - points[x]);
            const elected = eligible.filter((x) => points[x] >= points[eligible[data.seats - 1]]);

            results = `Elected candidates in arbitrary order: ${elected
                .sort()
                .map((x) => `<@${x}>`)
                .join(" ")}${
                elected.length > data.seats
                    ? `\n\nThere is a tie, so it is not possible to select the top ${data.seats} candidate${
                          data.seats === 1 ? "" : "s"
                      }.`
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
                description:
                    data.mode === "election"
                        ? `**Wave ${data.wave} Election**`
                        : data.mode === "induction"
                        ? `**Induct ${data.server}?**`
                        : data.question,
                color: 0x2b2d31,
                fields: [
                    ...(data.mode === "selection"
                        ? [
                              {
                                  name: "Options",
                                  value: data.options
                                      .map((x: string, i: number) => `- \`${"ABCDEFGHIJ"[i]}\`: ${x}`)
                                      .join("\n"),
                              },
                          ]
                        : []),
                    { name: "Results", value: results },
                    { name: "Deadline", value: `<t:${Math.floor(data.close.getTime() / 1000)}:F>` },
                    {
                        name: "Details",
                        value: `- ${
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
            default_row(data.id, closed),
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
                : data.mode === "induction"
                ? {
                      type: ComponentType.ActionRow,
                      components: [
                          {
                              type: ComponentType.StringSelect,
                              customId: "poll/induct-vote",
                              disabled: closed,
                              options: [
                                  {
                                      value: "induct-now",
                                      label: `Induct${data.preinduct ? " Now" : ""}`,
                                      emoji: "🟩",
                                  },
                                  ...(data.preinduct
                                      ? [
                                            {
                                                value: "induct-later",
                                                label: "Induct Later",
                                                emoji: "🟨",
                                            },
                                        ]
                                      : []),
                                  { value: "reject", label: "Reject", emoji: "🟥" },
                                  {
                                      value: "extend",
                                      label: "Extend Observation",
                                      emoji: "🟪",
                                  },
                              ],
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
                                  emoji: ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯"][i],
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

export function render_vote(poll: Poll, vote: BaseVote) {
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
    else if (poll.mode === "induction")
        return {
            title: `Voted to ${
                (
                    {
                        "induct-now": `Induct${poll.preinduct ? " Now" : ""}`,
                        "induct-later": "Induct Later",
                        reject: "Reject",
                        extend: "Extend Observation",
                    } as Record<string, string>
                )[vote.verdict!]
            }`,
            description: `You have voted to ${
                (
                    {
                        "induct-now": `induct ${poll.server} into the TCN${
                            poll.preinduct ? " immediately and not wait for official confirmation of playability" : ""
                        }`,
                        "induct-later": `approve ${poll.server} and induct them into the TCN once there is official confirmation of playability`,
                        reject: `reject ${poll.server} from the TCN`,
                        extend: `extend TCN observation of ${poll.server}`,
                    } as Record<string, string>
                )[vote.verdict!]
            }.`,
            color: 0x2b2d31,
        };
    else if (poll.mode === "selection")
        return {
            title: "Your Vote",
            description: `You voted for the following option(s):\n${poll.options
                .filter((x: string) => vote.selected!.includes(x))
                .map((x: string) => `- ${x}`)
                .join("\n")}`,
            color: 0x2b2d31,
        };
    else if (poll.mode === "election")
        return {
            title: "Election Vote",
            description: `Here is your election vote:\n${vote
                .rankings!.map((x: string, i: number) => `\`${i + 1}.\` <@${x}>`)
                .join("\n")}${
                vote.countered!.length > 0
                    ? `\nCounter-votes: ${vote.countered!.map((x: string) => `<@${x}>`).join(", ")}`
                    : ""
            }${
                vote.rankings!.length + vote.countered!.length < poll.candidates.length
                    ? `\nAbstained: ${poll.candidates
                          .filter((x: string) => !vote.rankings!.includes(x) && !vote.countered!.includes(x))
                          .map((x: string) => `<@${x}>`)
                          .join(", ")}`
                    : ""
            }`,
            color: 0x2b2d31,
        };

    return { title: "?" };
}
