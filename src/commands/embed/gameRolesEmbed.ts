import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions, container } from "@sapphire/framework"
import { Message } from "discord.js";
import { ISelectMenu } from "../../structures/client/message/ISelectMenu";

@ApplyOptions<CommandOptions>({
    name: "gameRolesEmbed",
    aliases: ['gameRole', 'gameRoles', 'gamerole', 'gameroles', 'gamerolesembed'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],

})
export default class PingRolesEmbedCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();
        const bot = this.container.client.user
        const SelectMenuManager = new ISelectMenu(this.container.client);

        const GenshinRole = SelectMenuManager.createRole({
            label: "Genshin Impact",
            role: "909622094814388254",
            emoji: "<:Genshin_Impact:910879454631452692>",
        });

        const HonkaiRole = SelectMenuManager.createRole({
            label: "Honkai Impact 3rd",
            role: "909600627280187402",
            emoji: "<:Honkai_Impact:910885561181552641>",
        });

        const MobileLegendsRole = SelectMenuManager.createRole({
            label: "Mobile Legends",
            role: "909600003197132821",
            emoji: "<:Mobile_Legends:910879482854916097>",
        });

        const ValorantRole = SelectMenuManager.createRole({
            label: "Valorant",
            role: "909600531431952434",
            emoji: "<:Valorant:910886919464943641>",
        });

        const MinecraftRole = SelectMenuManager.createRole({
            label: "Minecraft",
            role: "909600734956359750",
            emoji: "<:Minecraft:910887582378901555>",
        });

        return SelectMenuManager.createMenus({
            type: "SINGLE",
            role: [GenshinRole, HonkaiRole, MobileLegendsRole, ValorantRole, MinecraftRole],
            content: new IMessageEmbed()
            .setAuthor(`・ ✦ — GIID GAME ROLES`)
            .setThumbnail(bot.displayAvatarURL({dynamic: true, size: 512}))
            .setColor("#A5D5EB")
            .setDescription(`Silakan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ <:Genshin_Impact:910879454631452692> ・ <@&909622094814388254>\nPing untuk merekrut Party Genshin Impact\n\n➭⠀ <:Honkai_Impact:910885561181552641> ・ <@&909600627280187402>\nPing untuk pemain Honkai Impact 3rd\n\n➭⠀ <:Mobile_Legends:910879482854916097> ・ <@&909600003197132821>\nPing untuk pemain Mobile Legends : Bang Bang\n\n➭⠀ <:Valorant:910886919464943641> ・ <@&909600531431952434>\nPing untuk pemain Valorant\n\n➭⠀ <:Minecraft:910887582378901555> ・ <@&909600734956359750>\nPing untuk pemain Minecraft\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n`)
            .setFooter(`${bot.username} - Developed by Zarr#2072`, bot.displayAvatarURL({ dynamic: true, size: 512 })),
            channelId: message.channel.id,
        });
    }
}