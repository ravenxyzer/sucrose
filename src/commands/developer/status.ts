import { Command, container } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { Time } from '@sapphire/time-utilities';

export class StatusCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'status',
      aliases: ['info'],
      description: 'sends client status',
      preconditions: ['OwnerOnly'],
      cooldownDelay: Time.Second * 5

    });
  }

  public async messageRun(message: Message) {
    await message.delete()
    let timestamp = container.client.readyTimestamp / 1000
    let uptime = timestamp.toFixed(0)
    const bot = this.container.client.user
    const panel = new MessageEmbed()
    .setTitle(`✿⠀Client Status`)
    .setDescription(`**Client**: \`🔹 Online\` - \`${container.client.ws.ping}ms\`\n**Uptime**: <t:${(uptime)}:R>\n**Database**: \`🔸 Disconnected\``)
    .setColor('#A5D5EB')
    panel.setFooter({text: `${bot.username} - Developed by Zarr#2072`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 })})
    return await message.channel.send({embeds: [panel]})
  }
}