import { Args, Command, container } from '@sapphire/framework';
import { GuildMember, Message, MessageEmbed, ReactionUserManager } from 'discord.js';
import { Time } from '@sapphire/time-utilities';

export class SayCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'kick',
      description: 'kicks a member',
      requiredUserPermissions: ["KICK_MEMBERS"],
      cooldownDelay: Time.Second * 2

    });
  }
  
  public async messageRun(message: Message, args: Args) {
    const member = args.finished ? null : args.pick("member")
    const reason = args.finished ? null : args.rest("string")
    
    if (!await member) {
      const panel = new MessageEmbed()
      .setDescription(`❌⠀Target tidak ditemukan!`)
      .setColor("RED")
      return await message.reply({embeds: [panel]})
    }

    if (!(await member).kickable) {
      const panel = new MessageEmbed()
      .setDescription(`⛔⠀Tidak dapat menendang target!`)
      .setColor("RED")
      return await message.reply({embeds: [panel]})
    }

    if (member) { 
      const panel = new MessageEmbed()
      .setDescription(`🛑⠀Menendang ${await member} ・ Alasan: ${(await reason).substring(23)}`)
      .setColor("GREEN")
      .setTimestamp()
      panel.setFooter({text: `Kicked by ${message.author.username}`, iconURL: message.author.displayAvatarURL({dynamic: true, size: 512})})

      await (await member).kick()
      return await message.reply({embeds: [panel]})
    }
  }
}