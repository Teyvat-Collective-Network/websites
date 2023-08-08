import type { ActionRow } from "$lib/types.js";
import {
    ButtonStyle,
    ComponentType,
    type APIStringSelectComponent,
    type APIMessageActionRowComponent,
    type ModalComponentData,
    TextInputStyle,
    type InteractionReplyOptions,
} from "discord.js";

export const finished: ActionRow[] = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                custom_id: "/",
                label: "Banshare Executed",
                disabled: true,
            },
        ],
    },
];

export const rescinded: ActionRow[] = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                custom_id: "/",
                label: "Banshare Rescinded",
                disabled: true,
            },
        ],
    },
];

export const report: ActionRow[] = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.StringSelect,
                custom_id: "report-preset",
                min_values: 1,
                max_values: 3,
                options: [
                    "Appears unintended.",
                    "Targeted users are wrong.",
                    "Reason does not justify a banshare.",
                    "Evidence is insufficient.",
                    "Evidence is forged.",
                    "Severity should be increased.",
                ].map((text) => ({ label: text, value: text })),
                placeholder: "Report This Banshare",
            } satisfies APIStringSelectComponent,
        ],
    },
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Danger,
                custom_id: "report",
                label: "Report (Custom Reason)",
            },
        ],
    },
];

export const autoban_scheduled: ActionRow[] = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                custom_id: "-",
                label: "Auto-ban scheduled",
                disabled: true,
            },
        ],
    },
];

export const autobanning: ActionRow[] = [
    {
        type: ComponentType.ActionRow,
        components: [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                custom_id: "/",
                label: "Auto-banning...",
                disabled: true,
            },
        ],
    },
];

export function controls(published: boolean, severity?: string): ActionRow[] {
    if (published) {
        const components: APIMessageActionRowComponent[] = [
            {
                type: ComponentType.Button,
                style: ButtonStyle.Danger,
                custom_id: "rescind",
                label: "Rescind",
            },
        ];

        if (severity === "p2")
            components.push({
                type: ComponentType.Button,
                style: ButtonStyle.Primary,
                custom_id: "escalate:p1",
                label: "SEV: P1",
            });

        if (severity === "p2" || severity === "p1")
            components.push({
                type: ComponentType.Button,
                style: ButtonStyle.Danger,
                custom_id: "escalate:p0",
                label: "SEV: P0",
            });

        return [{ type: ComponentType.ActionRow, components }];
    }

    return [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Secondary,
                    custom_id: "sev:dm",
                    label: "TYPE: DM SCAM",
                    disabled: severity === "dm",
                },
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Secondary,
                    custom_id: "sev:p2",
                    label: "SEV: P2",
                    disabled: severity === "p2",
                },
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Primary,
                    custom_id: "sev:p1",
                    label: "SEV: P1",
                    disabled: severity === "p1",
                },
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Danger,
                    custom_id: "sev:p0",
                    label: "SEV: P0",
                    disabled: severity === "p0",
                },
            ],
        },
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Success,
                    custom_id: "publish",
                    label: "PUBLISH",
                },
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Danger,
                    custom_id: "reject",
                    label: "REJECT",
                },
            ],
        },
    ];
}

export function confirm(disabled: boolean = false, suffix: string = ""): ActionRow[] {
    return [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Success,
                    custom_id: `confirm${suffix}`,
                    label: "Confirm",
                    disabled,
                },
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Danger,
                    custom_id: `cancel${suffix}`,
                    label: "Cancel",
                    disabled,
                },
            ],
        },
    ];
}

export const report_banshare: ModalComponentData = {
    title: "Report Banshare",
    customId: "confirm-report",
    components: [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.TextInput,
                    style: TextInputStyle.Paragraph,
                    customId: "reason",
                    label: "Reason",
                    placeholder: "Explain why you believe this banshare is problematic and should be rescinded.",
                    maxLength: 1800,
                    required: true,
                },
            ],
        },
    ],
};

export const fetching_users: InteractionReplyOptions = {
    components: [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.Button,
                    style: ButtonStyle.Secondary,
                    customId: "/",
                    label: "Fetching users...",
                    disabled: true,
                },
            ],
        },
    ],
    ephemeral: true,
};

export const post_message: ModalComponentData = {
    title: "Post Message",
    customId: "banshare-publish",
    components: [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.TextInput,
                    style: TextInputStyle.Paragraph,
                    customId: "message",
                    label: "Message",
                    maxLength: 2000,
                    required: true,
                },
            ],
        },
    ],
};

export const rescind_banshare: ModalComponentData = {
    title: "Rescind Banshare",
    customId: "confirm-rescind",
    components: [
        {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.TextInput,
                    style: TextInputStyle.Paragraph,
                    customId: "explanation",
                    label: "Explanation",
                    maxLength: 1800,
                    required: true,
                    placeholder: "Why is this banshare being rescinded and why was it published initially?",
                },
            ],
        },
    ],
};
