import { Args, Command } from '@sapphire/framework';
import { Time } from '@sapphire/time-utilities';
import { Aboutme } from "../../structures/client/message/IPersonal"
import { Message, MessageEmbed} from 'discord.js';

export class AvatarCommand extends Command {
    public constructor(context: Command.Context, options: Command.Options) {
        super(context, {
            ...options,
            name: 'avatar',
            aliases: ['av'],
            description: 'Sends a user avatar image',
            cooldownDelay: Time.Second * 5
        })
    }

    public async messageRun(message: Message, args: Args) {
        const bot = this.container.client.user
        const user = message.mentions.users.first() || message.author
        // const authId = user.id
        // const authAv = user.avatar
        const name = user.username
        const panel = new MessageEmbed()
        .setTitle(`・ ✦ — ${name}'s Avatar`)
        .setImage(user.displayAvatarURL({dynamic : true, size: 4096}))
        //[Link](https://cdn.discordapp.com/avatars/${authId}/${authAv}'?size=4096)
        .setColor('#A5D5EB')
        panel.setFooter({text: `${user.username} - ${Aboutme.watermark}`, iconURL: user.displayAvatarURL({dynamic: true, size: 512})})
        return await message.reply({ embeds: [panel]})
    }
}