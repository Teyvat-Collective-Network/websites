import { P as PUBLIC_TCN_API, a as PUBLIC_ALLOWLIST, b as PUBLIC_DDL_API } from './public-a46e145d.js';
import { Client, IntentsBitField, ComponentType, ButtonStyle, PermissionFlagsBits, TextInputStyle } from 'discord.js';
import { MongoClient } from 'mongodb';

const TOKEN = "OTMxNjQ0NDU0MzIwODczNjEy.GcZDBU.wNRmFC5zVPapbRn_O9iJx6_nWRx3r0xpCgJB-U";
const GIST_TOKEN = "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";
const MONGO_URI = "mongodb://127.0.0.1";
const MONGO_DB = "tcn-banshares";
const CHANNEL = "1069368393209225277";
const ALERT = "1069368329669718057";
const LOG = "1069373308107227217";
const NON_URGENT = "[non-urgent ping]";
const URGENT = "[urgent ping]";
const DDL_TOKEN = "Y99SjBEWPbHojLBIBo9BxeFvR9IpdUadUCUgjLi8ooN2uZPqiR6e4BRtaVLksBU8";
const OBSERVER_CHANNEL = "1069368329669718057";
const APPLICANTS_CHANNEL = "1074597766354960404";
const OFFICIAL_BUSINESS = "1074597799963926538";
const NEW_APPLICANT_ALERT_ROLE = "1074804213214879835";
const NEW_APPLICANT_TAG = "1074804344710496326";
const client = new MongoClient(MONGO_URI);
await client.connect();
const db = client.db(MONGO_DB);
const db$1 = new Proxy(
  {},
  {
    get: (_, property, __) => db.collection(property)
  }
);
function components(published2, severity) {
  if (published2)
    return [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            type: ComponentType.Button,
            style: ButtonStyle.Danger,
            customId: "rescind",
            label: "Rescind"
          },
          ...severity === "p2" ? [
            {
              type: ComponentType.Button,
              style: ButtonStyle.Primary,
              customId: "escalate:p1",
              label: "SEV: P1"
            }
          ] : [],
          ...severity !== "p0" ? [
            {
              type: ComponentType.Button,
              style: ButtonStyle.Danger,
              customId: "escalate:p0",
              label: "SEV: P0"
            }
          ] : []
        ]
      }
    ];
  return [
    {
      type: ComponentType.ActionRow,
      components: [
        {
          type: ComponentType.Button,
          style: ButtonStyle.Secondary,
          customId: "sev:p2",
          label: "SEV: P2",
          disabled: severity === "p2"
        },
        {
          type: ComponentType.Button,
          style: ButtonStyle.Primary,
          customId: "sev:p1",
          label: "SEV: P1",
          disabled: severity === "p1"
        },
        {
          type: ComponentType.Button,
          style: ButtonStyle.Danger,
          customId: "sev:p0",
          label: "SEV: P0",
          disabled: severity === "p0"
        }
      ]
    },
    {
      type: ComponentType.ActionRow,
      components: [
        {
          type: ComponentType.Button,
          style: ButtonStyle.Success,
          customId: "publish",
          label: "PUBLISH"
        }
      ]
    }
  ];
}
process.on("uncaughtException", (error) => console.error(error));
const bot = new Client({
  intents: IntentsBitField.Flags.Guilds | IntentsBitField.Flags.MessageContent
});
const finished = [
  {
    type: ComponentType.ActionRow,
    components: [
      {
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        customId: "/",
        label: "Banshare Executed",
        disabled: true
      }
    ]
  }
];
const rescinded = [
  {
    type: ComponentType.ActionRow,
    components: [
      {
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        customId: "/",
        label: "Banshare Rescinded",
        disabled: true
      }
    ]
  }
];
const report = [
  {
    type: ComponentType.ActionRow,
    components: [
      {
        type: ComponentType.StringSelect,
        customId: "report-preset",
        minValues: 1,
        maxValues: 3,
        options: [
          "Appears unintended.",
          "Targeted users are wrong.",
          "Reason does not justify a banshare.",
          "Evidence is insufficient.",
          "Evidence is forged.",
          "Severity should be increased."
        ].map((text) => ({ label: text, value: text })),
        placeholder: "Report This Banshare"
      }
    ]
  },
  {
    type: ComponentType.ActionRow,
    components: [
      {
        type: ComponentType.Button,
        style: ButtonStyle.Danger,
        customId: "report",
        label: "Report (Custom Reason)"
      }
    ]
  }
];
const autoban_scheduled = [
  {
    type: ComponentType.ActionRow,
    components: [
      {
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        customId: "-",
        label: "Auto-ban scheduled",
        disabled: true
      }
    ]
  }
];
const autobanning = [
  {
    type: ComponentType.ActionRow,
    components: [
      {
        type: ComponentType.Button,
        style: ButtonStyle.Secondary,
        customId: "/",
        label: "Auto-banning...",
        disabled: true
      }
    ]
  }
];
const published = /* @__PURE__ */ new Set();
bot.once("ready", async () => {
  console.log("[BOT] ready!");
});
bot.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (!["banshare"].includes(interaction.commandName))
      return;
    await interaction.deferReply({ ephemeral: true });
    if (!interaction.inGuild())
      return;
    if (!await allowed(interaction.guild)) {
      await interaction.editReply("This is not a TCN server.");
      return;
    }
    if (interaction.commandName === "banshare") {
      const subgroup = interaction.options.getSubcommandGroup(false);
      const subcommand = interaction.options.getSubcommand(false);
      if (subgroup === "post" || subgroup === "log") {
        const collection = subgroup === "post" ? db$1.channels : db$1.logging;
        if (subcommand === "here") {
          if (!interaction.channel.permissionsFor(interaction.guild.members.me).has(
            PermissionFlagsBits.ViewChannel | PermissionFlagsBits.SendMessages | PermissionFlagsBits.EmbedLinks | PermissionFlagsBits.AttachFiles
          )) {
            await interaction.editReply(
              "Please grant the bot permission to view this channel and send messages, embed links, and attach files."
            );
            return;
          }
          await collection.findOneAndUpdate(
            { guild: interaction.guild.id },
            { $set: { channel: interaction.channel.id } },
            { upsert: true }
          );
          await interaction.editReply(
            `${subgroup === "post" ? "Banshares" : "Logs"} will now be posted here.`
          );
        } else if (subcommand === "none") {
          await collection.findOneAndDelete({
            guild: interaction.guild.id
          });
          await interaction.editReply(
            subgroup === "post" ? "You will no longer receive banshares." : "Logs will no longer be posted."
          );
        }
      } else if (!subgroup) {
        if (subcommand === "ban-button") {
          const enable = interaction.options.getBoolean("enable", true);
          await db$1.settings.findOneAndUpdate(
            { guild: interaction.guild.id },
            { $set: { no_button: !enable } },
            { upsert: true }
          );
          await interaction.editReply(
            `${enable ? "Enabled" : "Disabled"} the ban button.`
          );
        } else if (subcommand === "daedalus-integration") {
          const enable = interaction.options.getBoolean("enable", true);
          await db$1.settings.findOneAndUpdate(
            { guild: interaction.guild.id },
            { $set: { daedalus: enable } },
            { upsert: true }
          );
          await interaction.editReply(
            `${enable ? "Enabled" : "Disabled"} Daedalus integration.`
          );
        } else if (subcommand === "autoban") {
          const threshold = interaction.options.getString("threshold", true);
          await db$1.settings.findOneAndUpdate(
            { guild: interaction.guild.id },
            { $set: { autoban: threshold } },
            { upsert: true }
          );
          await interaction.editReply(
            `Set the autoban threshold to ${{
              none: "none",
              crit: "P0 only",
              med: "P0 and P1",
              all: "P0, P1, and P2"
            }[threshold]}.`
          );
        }
      }
    }
  } else if (interaction.isButton()) {
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers))
      return;
    else if (interaction.customId === "ban") {
      const banshare = await get_banshare(interaction, interaction.message.id);
      if (!banshare)
        return;
      await interaction.reply({
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.Button,
                style: ButtonStyle.Secondary,
                customId: "/",
                label: "Fetching users...",
                disabled: true
              }
            ]
          }
        ],
        ephemeral: true
      });
      const users = [];
      for (const id of banshare.id_list)
        try {
          users.push(await bot.users.fetch(id));
        } catch {
        }
      try {
        await interaction.editReply({
          content: users.join(", "),
          components: confirm(false, "-ban")
        });
      } catch {
        await interaction.editReply({
          files: [
            {
              attachment: Buffer.from(
                users.map((user) => `${user.tag} (${user.id})`).join(", "),
                "utf-8"
              ),
              name: "user-list.txt"
            }
          ],
          components: confirm(false, "-ban")
        });
      }
    } else if (interaction.customId === "report") {
      if (!bot.channels.cache.has(ALERT)) {
        await interaction.reply({
          content: "The output channel does not appear to be set up correctly, so your report would not be able to be sent."
        });
        return;
      }
      await interaction.showModal({
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
                required: true
              }
            ]
          }
        ]
      });
    } else if (interaction.customId === "cancel-ban")
      await interaction.update({
        content: null,
        files: [],
        components: confirm(true, "-ban")
      });
    else if (interaction.customId === "confirm-ban") {
      let message;
      try {
        message = await interaction.message.fetchReference();
      } catch {
        await interaction.update({
          content: "The banshare being referred to has been deleted, so it cannot be executed.",
          files: [],
          components: []
        });
        return;
      }
      const banshare = await get_banshare(
        interaction,
        interaction.message.reference?.messageId ?? ""
      );
      if (!banshare)
        return;
      const lock = await db$1.executed.findOneAndUpdate(
        { post: interaction.message.id },
        { $set: { executed: true } },
        { upsert: true }
      );
      if (lock.value?.executed) {
        await interaction.update({
          content: "This banshare is already being executed by someone else.",
          files: [],
          components: []
        });
        return;
      }
      await interaction.update({
        content: "Executing...",
        files: [],
        components: []
      });
      await execute(
        banshare,
        await db$1.settings.findOne({ guild: interaction.guild.id }),
        interaction.guild,
        message,
        interaction.member
      );
      await interaction.editReply("Banshare executed!");
      await message.edit({ components: finished.concat(report) });
    } else if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator))
      return;
    else if (interaction.customId.startsWith("sev:")) {
      const severity = interaction.customId.substring(4);
      await db$1.banshares.findOneAndUpdate(
        { message: interaction.message.id },
        { $set: { severity } }
      );
      await interaction.update({
        embeds: [
          {
            title: "**Banshare**",
            color: 2961718,
            fields: [
              ...interaction.message.embeds[0].fields.slice(0, -1),
              {
                name: "Severity",
                value: severity[0].toUpperCase() + severity.substring(1)
              }
            ]
          }
        ],
        components: components(false, severity)
      });
    } else if (interaction.customId.startsWith("escalate:")) {
      const severity = interaction.customId.substring(9);
      const banshare = await db$1.banshares.findOne({ message: interaction.message.id });
      if (!banshare) {
        await interaction.update({
          content: "This does not appear to be a banshare.",
          embeds: [],
          components: []
        });
        return;
      }
      await interaction.showModal({
        title: "Escalate Banshare",
        customId: `confirm-escalation:${severity}`,
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.TextInput,
                style: TextInputStyle.Paragraph,
                customId: "reason",
                label: "Reason",
                placeholder: `You are about to escalate this banshare to ${severity} severity. This is not reversible!`
              }
            ]
          }
        ]
      });
    } else if (interaction.customId === "publish") {
      if (published.has(interaction.message.id) || await db$1.banshares.findOne({
        message: interaction.message.id,
        published: true
      }))
        await interaction.reply({
          content: "This banshare has been published by someone else already.",
          ephemeral: true
        });
      else
        await interaction.reply({
          components: confirm(),
          ephemeral: true
        });
    } else if (interaction.customId === "confirm") {
      await interaction.deferUpdate();
      let guilds;
      try {
        const request = await fetch(`${PUBLIC_TCN_API}/guilds`);
        if (!request.ok)
          throw 0;
        guilds = (await request.json()).map((server) => server.id).concat(PUBLIC_ALLOWLIST.split(/\s+/));
      } catch {
        await interaction.editReply("An unexpected issue occurred with the TCN API.");
        return;
      }
      const id = interaction.message.reference?.messageId ?? "";
      const fail = published.has(id);
      published.add(id);
      setTimeout(() => published.delete(id), 1e4);
      const banshare = await db$1.banshares.findOneAndUpdate(
        { message: id },
        { $set: { published: true } }
      );
      if (!banshare.value)
        await interaction.editReply({
          content: "This does not appear to be a banshare.",
          embeds: [],
          components: []
        });
      else if (fail || banshare.value.executed)
        await interaction.editReply({
          content: "This banshare has been published by someone else already.",
          embeds: [],
          components: []
        });
      else {
        let embeds;
        try {
          const message = await interaction.message.fetchReference();
          await message.edit({ components: components(true, banshare.value.severity) });
          embeds = message.embeds.map((e) => e.toJSON());
          if (message.crosspostable)
            try {
              await message.crosspost();
            } catch {
            }
        } catch {
          await interaction.editReply({
            content: "The original banshare could not be found.",
            components: []
          });
          return;
        }
        await interaction.editReply({
          content: "Banshare is being published! You may dismiss this message.",
          components: []
        });
        const channel = interaction.client.channels.cache.get(LOG);
        const log = channel?.isTextBased() ? channel.send.bind(channel) : () => {
        };
        await log({
          content: `${interaction.user} published <${interaction.message.url}>.`,
          allowedMentions: { parse: [] }
        });
        const places = (await db$1.channels.find().toArray()).filter(
          (entry) => PUBLIC_ALLOWLIST.indexOf(entry.guild) !== -1 || guilds.includes(entry.guild)
        ).map((entry) => ({
          guild: entry.guild,
          channel: bot.channels.cache.get(entry.channel)
        })).filter(({ channel: channel2 }) => channel2?.isTextBased());
        await Promise.all(
          places.map(async ({ guild, channel: channel2 }) => {
            if (!channel2?.isTextBased())
              return;
            const settings = await db$1.settings.findOne({
              guild
            });
            const threshold = settings?.autoban ?? "none";
            let components2 = [];
            if (!banshare.value.id_list?.length)
              ;
            else if (autoban(threshold, banshare.value.severity)) {
              components2 = autoban_scheduled;
            } else if (!settings?.no_button) {
              components2 = [
                {
                  type: ComponentType.ActionRow,
                  components: [
                    {
                      type: ComponentType.Button,
                      style: ButtonStyle.Danger,
                      customId: "ban",
                      label: "Ban"
                    }
                  ]
                }
              ];
            }
            const post = await channel2.send({
              embeds,
              components: components2.concat(report)
            });
            await save(banshare, guild, post);
          })
        );
        places.forEach(async ({ guild, channel: channel2 }) => {
          if (!channel2?.isTextBased())
            return;
          const message = await get_post(banshare, guild);
          if (!message)
            return;
          if (message.components?.[0]?.components?.[0]?.customId !== "-")
            return;
          await message.edit({
            components: autobanning.concat(report)
          });
          await execute(
            banshare.value,
            await db$1.settings.findOne({ guild }),
            message.guild,
            message
          );
          await message.edit({
            components: finished.concat(report)
          });
        });
      }
    } else if (interaction.customId === "cancel") {
      await interaction.update({
        components: confirm(true).concat(report)
      });
    } else if (interaction.customId === "rescind") {
      await interaction.showModal({
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
                placeholder: "Why is this banshare being rescinded and why was it published initially?"
              }
            ]
          }
        ]
      });
    }
  } else if (interaction.isModalSubmit()) {
    if (interaction.customId === "confirm-rescind") {
      await interaction.deferReply({ ephemeral: true });
      const lock = await db$1.banshares.findOneAndUpdate(
        { message: interaction.message.id },
        { $set: { rescinded: true } }
      );
      if (lock.value?.rescinded) {
        await interaction.editReply(
          "This banshare is already being rescinded by someone else."
        );
        return;
      }
      try {
        await interaction.message.edit({
          components: rescinded
        });
      } catch (error) {
        console.error(error);
      }
      await interaction.editReply(
        "This banshare is being rescinded. You may dismiss this message."
      );
      const explanation = "This banshare has been rescinded by an observer. The explanation given is below:\n\n" + interaction.fields.getTextInputValue("explanation");
      await interaction.message.reply(explanation);
      for (const post of await db$1.banshare_posts.find({ banshare: interaction.message.id }).toArray()) {
        try {
          const channel = await bot.channels.fetch(post.channel);
          if (!channel?.isTextBased())
            throw 0;
          const message = await channel.messages.fetch(post.message);
          await message.edit({ components: rescinded }).catch(() => {
          });
          await message.reply(explanation);
        } catch {
        }
      }
    } else if (interaction.customId === "confirm-report") {
      await process_report(interaction, interaction.fields.getTextInputValue("reason"));
    } else if (interaction.customId.startsWith("confirm-escalation:")) {
      await interaction.deferUpdate();
      const severity = interaction.customId.substring(19);
      const reason = interaction.fields.getTextInputValue("reason");
      const value = severity[0].toUpperCase() + severity.slice(1);
      const banshare = await db$1.banshares.findOneAndUpdate(
        { message: interaction.message.id },
        { $set: { severity } }
      );
      if (!banshare.value) {
        await interaction.editReply({
          content: "This does not appear to be a banshare.",
          embeds: [],
          components: []
        });
        return;
      }
      const posts = await db$1.banshare_posts.find({ banshare: interaction.message.id }).toArray();
      await Promise.all(
        posts.map(async (post) => {
          const settings = await db$1.settings.findOne({ guild: post.guild });
          const threshold = settings?.autoban ?? "none";
          try {
            const channel2 = await bot.channels.fetch(post.channel);
            if (!channel2?.isTextBased())
              throw 0;
            const message = await channel2.messages.fetch(post.message);
            await message.reply(
              `This banshare was escalated to ${severity} severity. The explanation given is below:

${reason}`
            );
            const embed2 = message.embeds[0].toJSON();
            embed2.fields?.forEach(
              (field) => field.name === "Severity" && (field.value = value)
            );
            if (autoban(threshold, severity) && !autoban(threshold, banshare.value.severity)) {
              await message.edit({
                embeds: [embed2],
                components: autobanning.concat(report)
              });
              const lock = await db$1.executed.findOneAndUpdate(
                { post: message.id },
                { $set: { executed: true } },
                { upsert: true }
              );
              if (!lock.value?.executed) {
                await execute(banshare.value, settings, message.guild, message);
                await message.edit({ components: finished.concat(report) });
              }
            } else
              await message.edit({ embeds: [embed2] });
          } catch {
          }
        })
      );
      const embed = interaction.message.embeds[0].toJSON();
      embed.fields?.forEach((field) => field.name === "Severity" && (field.value = value));
      await interaction.editReply({
        embeds: [embed],
        components: components(true, severity)
      });
      const channel = interaction.client.channels.cache.get(LOG);
      const log = channel?.isTextBased() ? channel.send.bind(channel) : () => {
      };
      await log({
        content: `${interaction.user} escalated ${interaction.message.url} to ${severity} severity:

${reason}`,
        allowedMentions: { parse: [] }
      });
    }
  } else if (interaction.isStringSelectMenu()) {
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers))
      return;
    if (interaction.customId === "report-preset") {
      await process_report(interaction, interaction.values.join(" "));
    }
  }
});
async function process_report(interaction, reason) {
  await interaction.deferReply({ ephemeral: true });
  try {
    const entry = await db$1.banshare_posts.findOne({
      message: interaction.message.id
    });
    if (!entry)
      throw 0;
    const banshare = await db$1.banshares.findOne({
      message: entry.banshare
    });
    if (!banshare)
      throw 0;
    const channel = await bot.channels.fetch(ALERT);
    if (!channel?.isTextBased())
      throw 0;
    await channel.send({
      content: `${interaction.user} reported a banshare: <${banshare.url}>:

${reason}`,
      allowedMentions: { parse: [] }
    });
  } catch {
    await interaction.editReply("Posting your report failed.");
    return;
  }
  await interaction.editReply(
    "Your report has been submitted and will be reviewed by the observers."
  );
}
async function get_banshare(interaction, message) {
  if (!await allowed(interaction.guild)) {
    await interaction.reply({
      content: "This server is not in the TCN. You can ban these users manually at your own judgement.",
      ephemeral: true
    });
    return;
  }
  const post = await db$1.banshare_posts.findOne({ message });
  if (!post) {
    await interaction.reply({
      content: "This message is missing from the database.",
      ephemeral: true
    });
    return;
  }
  const banshare = await db$1.banshares.findOne({
    message: post.banshare
  });
  if (!banshare) {
    await interaction.reply({
      content: "This banshare is missing from the database.",
      ephemeral: true
    });
    return;
  }
  if (banshare.rescinded) {
    await interaction.reply({
      content: "This banshare has been rescinded. You may still ban these users manually at your own judgement.",
      ephemeral: true
    });
    return;
  }
  return banshare;
}
async function execute(banshare, settings, guild, message, executor) {
  const mod = executor ? { mod: executor.user.id } : {};
  const missed = [];
  const banned = [];
  const failed = [];
  for (const id of banshare.id_list) {
    let member = null;
    let user;
    try {
      if (executor)
        try {
          member = await guild.members.fetch(id);
        } catch {
        }
      if (member)
        user = member.user;
      else
        user = await bot.users.fetch(id);
    } catch {
      missed.push(id);
      continue;
    }
    try {
      if (executor && member && (Array.isArray(executor.roles) ? executor.roles : executor.roles.cache.toJSON()).some((role) => member.roles.highest.comparePositionTo(role) >= 0))
        throw 0;
      await guild.bans.create(id);
      banned.push(user);
      if (settings?.daedalus) {
        try {
          const response = await fetch(
            `${PUBLIC_DDL_API}/moderation/history/${guild.id}/user/${id}`,
            {
              method: "post",
              headers: {
                Authorization: `Bearer ${DDL_TOKEN}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                type: "ban",
                duration: 0,
                origin: message.url,
                reason: "TCN Banshare: " + (banshare.reason ?? "(missing reason)"),
                ...mod
              })
            }
          );
          if (!response.ok)
            console.error(response.status, await response.json());
        } catch (error) {
          console.error(error);
        }
      }
    } catch {
      failed.push(user);
    }
  }
  const entry = await db$1.logging.findOne({ guild: guild.id });
  if (entry) {
    try {
      const channel = await bot.channels.fetch(entry.channel);
      if (!channel?.isTextBased())
        throw 0;
      const prefix = `Banshare Executed; banned ${banned.length} user${banned.length === 1 ? "" : "s"}.
Origin: ${message.url}
Reasion: ${banshare.reason}`;
      try {
        await channel.send(
          `${prefix}
Success: ${banned.join(", ") || "(none)"}
Failed: ${failed.join(", ") || "(none)"}
Invalid IDs: ${missed.join(", ") || "(none)"}`
        );
      } catch {
        await channel.send({
          content: prefix,
          files: [
            {
              attachment: Buffer.from(
                `Success: ${banned.map((x) => `${x.tag} (${x.id})`).join(", ") || "(none)"}
Failed: ${failed.map((x) => `${x.tag} (${x.id})`).join(", ") || "(none)"}
Invalid IDs: ${missed.join(", ") || "(none)"}`,
                "utf-8"
              ),
              name: "banshare.txt"
            }
          ]
        });
      }
    } catch {
    }
  }
}
async function save(banshare, guild, post) {
  await db$1.banshare_posts.insertOne({
    guild,
    banshare: banshare.value.message,
    channel: post.channel.id,
    message: post.id
  });
}
async function get_post(banshare, guild) {
  const entry = await db$1.banshare_posts.findOne({
    guild,
    banshare: banshare.value.message
  });
  if (!entry)
    return;
  try {
    const channel = await bot.channels.fetch(entry.channel);
    if (!channel?.isTextBased())
      return;
    return await channel.messages.fetch(entry.message);
  } catch {
  }
}
const thresholds = { all: 0, med: 1, crit: 2, none: 3 };
const severities = { P0: 2, P1: 1, P2: 0 };
function autoban(threshold, severity) {
  return (thresholds[threshold] ?? Infinity) <= (severities[severity] ?? -Infinity);
}
function confirm(disabled = false, suffix = "") {
  return [
    {
      type: ComponentType.ActionRow,
      components: [
        {
          type: ComponentType.Button,
          style: ButtonStyle.Success,
          customId: `confirm${suffix}`,
          label: "Confirm",
          disabled
        },
        {
          type: ComponentType.Button,
          style: ButtonStyle.Danger,
          customId: `cancel${suffix}`,
          label: "Cancel",
          disabled
        }
      ]
    }
  ];
}
async function allowed(guild) {
  if (PUBLIC_ALLOWLIST.indexOf(guild.id) >= 0)
    return true;
  const request = await fetch(`${PUBLIC_TCN_API}/guilds/${guild.id}`);
  if (!request.ok)
    return false;
  return true;
}
await bot.login(TOKEN);

export { APPLICANTS_CHANNEL as A, CHANNEL as C, GIST_TOKEN as G, NEW_APPLICANT_TAG as N, OBSERVER_CHANNEL as O, URGENT as U, OFFICIAL_BUSINESS as a, bot as b, NEW_APPLICANT_ALERT_ROLE as c, components as d, db$1 as e, ALERT as f, NON_URGENT as g };
//# sourceMappingURL=bot-193fdc25.js.map
