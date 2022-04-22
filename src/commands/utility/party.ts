import { ApplyOptions } from "@sapphire/decorators";
import { Args, Command, CommandOptions } from "@sapphire/framework";
import { Time } from "@sapphire/time-utilities"
import { Message, TextChannel } from "discord.js";

import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Content, Role } from "../../database/IDatabase"

@ApplyOptions<CommandOptions>({
    name: "party",
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    cooldownDelay: Time.Second * 5
})

export default class EmbedCommand extends Command {
    public async messageRun(message: Message, args: Args): Promise<Message> {
        // s.party wl uid keterangan
        const help_channel = this.container.client.channels.cache.get('961263080002715700') as TextChannel
        const user = message.author;
        const wl = await args.pick("integer").catch(() => "No_WL");
        const uid = await args.pick("integer").catch(() => "No_UID");
        const desc = await args.rest("string").catch(() => "No_Desc");
        const errMessage = Content.utiltity.party.error;
        
        if (await wl === "No_WL") { 
            return message.reply(`${errMessage}`) 
        } else if (await uid === "No_UID") { 
            return message.reply(`${errMessage}`)
        } else if (await desc === "No_Desc") {
            return message.reply(`${errMessage}`)
        }

        await message.delete()
        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — Genshin Party`)
        .setDescription(`**World Level**: ${await wl.toString().substring(0,1)}\n**UID**: ${await uid.toString().substring(0, 9)}\n**Description**: ${await desc}`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true, size: 512}))
        panel.setFooter({text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL({dynamic: true, size: 512})})
        const response = await message.channel.send({content: `${user} Butuh party nih. \\📢 ${Role.GIID.genshinParty.tag}`, embeds: [panel]})
        response.react("👍")

        const help = new IMessageEmbed()
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`**World Level**: ${await wl.toString().substring(0,1)}\n**UID**: ${await uid.toString().substring(0, 9)}\n**Description**: ${await desc}\n\n**Request by**: <@${message.author.id}>\n**in Channel**: <#${message.channelId}>`)
        help.setFooter({text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL({dynamic: true, size: 512})})
        const helpMsg = await help_channel.send({content: `Tolong dibantu party-nya, \\📢 ${Role.GIID.giidStaff.tag}`, embeds: [help]})
        helpMsg.react("👍")
        return;
    }
}