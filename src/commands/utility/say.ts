import { Args, Command } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { Time } from '@sapphire/time-utilities';
import { Aboutme } from "../../structures/client/message/IPersonal";
import fs from 'fs';

export class SayCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'say',
      aliases: ['echo'],
      description: 'sends an message as the bot',
      requiredUserPermissions: ['MANAGE_MESSAGES'],
      cooldownDelay: Time.Second * 1

    });
  }

  public async messageRun(message: Message, args: Args) {
      const bot = this.container.client.user;
      const say = args.finished ? null : args.rest("string")
      if (!say) return;
      if (await say === "log") {
        fs.readFile('../src/structures/client/logs/logger.txt', async (err, data) => {
          if (err) {
            console.error(err) 
            return;
          }
          const dataByLine = data.toString('utf-8').split("\n").reverse().join("\n")
          const panel = new MessageEmbed()
          .setTitle(`・ ✦ — Say Logs`)
          .setDescription(`${dataByLine}`)
          .setColor("GREEN")
          panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
          await message.reply({embeds: [panel]})
        })
      } else if (await say) {
        fs.writeFile('../src/structures/client/logs/logger.txt', `${message.author.username}: "${await say}"\n`, { flag: 'a' }, err => {})
        message.delete()
        console.log(`${message.author.username}> ${await say}`)
        await message.channel.send({content: await say})
      }
  }
}