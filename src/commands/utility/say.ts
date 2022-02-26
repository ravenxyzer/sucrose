import { Command, container } from '@sapphire/framework';
import { Message, MessageEmbed } from 'discord.js';
import { Time } from '@sapphire/time-utilities';

export class SayCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'say',
      aliases: ['echo'],
      description: 'sends an message as the bot',
      requiredUserPermissions: ['MANAGE_MESSAGES'],
      cooldownDelay: Time.Second * 2

    });
  }
  
  public async messageRun(message: Message) {
      message.delete()
      const say = message.content.slice(6).trim()
      if (!say) return;
      await message.channel.send(say)
      await console.log(`${message.author.username}> ${say}`)
  }
}