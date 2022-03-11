import {Message, MessageEmbed} from "discord.js";
import {Command} from '@sapphire/framework';
import {Time} from '@sapphire/time-utilities';

export default class HelpCommand extends Command {
    public constructor(context: Command.Context, options: Command.Options) {
        super(context, {
            ...options,
            name: 'help',
            aliases: ['info'],
            description: 'sends an help',
            cooldownDelay: Time.Second * 5

        })
    }
    public async messageRun(message: Message) {
        const bot = this.container.client.user
        const panel = new MessageEmbed()
        .setTitle('・ ✦ — Sucrose Profile')
        .setThumbnail(bot.displayAvatarURL({dynamic:true, size: 512}))
        .setDescription(`Sucrose merupakan bot official dari server **Genshin Impact ID**.\nGunakan perintah \`s.commands\` atau \`s.cmds\` untuk menampilkan perintah-perintah yang tersedia lainnya.`)
        .setColor('#A5D5EB')
        return await message.reply({embeds: [panel]})
    }
}