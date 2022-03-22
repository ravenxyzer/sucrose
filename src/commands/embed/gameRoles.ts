import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Aboutme } from "../../structures/client/message/IPersonal"
import { IButton } from "../../structures/client/message/IButton";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Message } from "discord.js";

@ApplyOptions<CommandOptions>({
    name: "gameRolesEmbed",
    aliases: ['gameRole', 'gameRoles', 'gamerole', 'gameroles', 'gamerolesembed'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],

})
export default class PingRolesCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();
        const bot = this.container.client.user
        const ButtonManager = new IButton(this.container.client);

        const ApexRole = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909600734956359750",
            emoji: "<:Item_Apex_Legends:955112548909326386>",
        });
        
        const GenshinRole = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909622094814388254",
            emoji: "<:Genshin_Impact:910879454631452692>",
        });

        const HonkaiRole = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909600627280187402",
            emoji: "<:Honkai_Impact:910885561181552641>",
        });

        const MobileLegendsRole = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909600003197132821",
            emoji: "<:Mobile_Legends:910879482854916097>",
        });

        const ValorantRole = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909600531431952434",
            emoji: "<:Valorant:910886919464943641>",
        });

        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — GIID Game Roles`)
        .setDescription(`Silakan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ <:Item_Apex_Legends:955112548909326386> ・ <@&909600734956359750>\nPing untuk pemain Apex Legends PC/Mobile.\n\n➭⠀ <:Genshin_Impact:910879454631452692> ・ <@&909622094814388254>\nPing untuk merekrut Party Genshin Impact.\n\n➭⠀ <:Honkai_Impact:910885561181552641> ・ <@&909600627280187402>\nPing untuk pemain Honkai Impact 3rd.\n\n➭⠀ <:Mobile_Legends:910879482854916097> ・ <@&909600003197132821>\nPing untuk pemain Mobile Legends: Bang Bang.\n\n➭⠀ <:Valorant:910886919464943641> ・ <@&909600531431952434>\nPing untuk pemain Valorant.\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`)
        panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
        
        return ButtonManager.createButtons({
            role: [ApexRole, GenshinRole, HonkaiRole, MobileLegendsRole, ValorantRole],
            content: panel,
            channelId: message.channel.id,
        });
    }
}