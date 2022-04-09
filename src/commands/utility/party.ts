import { ApplyOptions } from "@sapphire/decorators";
import { Args, Command, CommandOptions } from "@sapphire/framework";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Message, MessageEmbed, TextChannel } from "discord.js";

import { Content, Role } from "../../database/IDatabase"

@ApplyOptions<CommandOptions>({
    name: "party",
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],

})
export default class ColorRolesCommand extends Command {
    public async messageRun(message: Message, args: Args): Promise<Message> {
        // s.party wl uid keterangan
        const help_channel = this.container.client.channels.cache.get('961263080002715700') as TextChannel
        const user = message.author;
        const wl = await args.pick("integer").catch(() => "No_WL");
        const uid = await args.pick("integer").catch(() => "No_UID");
        const desc = await args.rest("string").catch(() => "No_Desc");

        if (await wl === "No_WL") { 
            return message.reply(`・ ✦ — Wrong Syntax\nExpected Arguments: \` <WL: Number> \` \` <UID: Number> \` \` <Description: Text> \``) 
        } else if (await uid === "No_UID") { 
            return message.reply(`・ ✦ — Wrong Syntax\nExpected Arguments: \` <UID: Number> \` \` <Description: Text> \``)
        } else if (await desc === "No_Desc") {
            return message.reply(`・ ✦ — Wrong Syntax\nExpected Arguments: \` <Description: Text> \``)
        }
        await message.delete()
        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — Genshin Party`)
        .setDescription(`**World Level**: ${await wl.toString().substring(0,1)}\n**UID**: ${await uid.toString().substring(0, 9)}\n**Description**: ${await desc}`)
        panel.setThumbnail(user.displayAvatarURL({dynamic: true, size: 512}))
        await message.channel.send({content: `Need Party!, Summon ${Role.GIID.genshinParty.tag}`, embeds: [panel]})

        const helper = new IMessageEmbed()
        .setTitle(`・ ✦ — Genshin Party`)
        .setDescription(`**Request by**: ${message.author.username}\n**Channel**: <#${message.channelId}>\n\n**World Level**: ${await wl.toString().substring(0,1)}\n**UID**: ${await uid.toString().substring(0, 9)}\n**Description**: ${await desc}`)
        await help_channel.send({content: `Mohon dibantu\\🙏, ${Role.GIID.moderator.tag}`, embeds: [helper]})

        return;
    }
}