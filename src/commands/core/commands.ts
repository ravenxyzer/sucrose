import { Command, container, CommandStore } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { Time } from '@sapphire/time-utilities';
import { inlineCode } from "@discordjs/builders";

export class CommandsCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'commands',
      aliases: ['cmds'],
      description: 'sends a command list',
      cooldownDelay: Time.Second * 5

    });
  }

  public async messageRun(message: Message) {
    const commands: CommandStore = this.container.stores.get("commands");
    const bot = this.container.client.user;
    const panel = new MessageEmbed()
    .setTitle(`・ ✦ — ${bot.username} Commands`)
    .setThumbnail(bot.displayAvatarURL({dynamic: true, size: 512}))
    .setDescription(`Berikut merupakan perintah-perintah yang tersedia`)
    .setColor('#A5D5EB')
    .addFields(
        {
            name: '✧ **Core**',
            value: commands
            .filter((cmd) => cmd.category === "core")
            .map((cmd) => inlineCode(cmd.name))
            .join(", ")
        },
        {
          name: '✧ **Embed**',
          value: commands
          .filter((cmd) => cmd.category === "embed")
          .map((cmd) => inlineCode(cmd.name))
          .join(", ")
        }, 
        {
          name: '✧ **Moderation**',
          value: commands
          .filter((cmd) => cmd.category === "moderation")
          .map((cmd) => inlineCode(cmd.name))
          .join(", ")
      },
        {
            name: '✧ **Utility**',
            value: commands
            .filter((cmd) => cmd.category === "utility")
            .map((cmd) => inlineCode(cmd.name))
            .join(", ")
        },
    )

    return await message.reply({embeds: [panel]})
  }
}