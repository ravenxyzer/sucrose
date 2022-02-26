import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Message } from "discord.js";
import { ISelectMenu } from "../../structures/client/message/ISelectMenu";

@ApplyOptions<CommandOptions>({
    name: "pingRolesEmbed",
    aliases: ['pingRole', 'pingRoles'],
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

        const PartnerPing = SelectMenuManager.createRole({
            label: "Partner Ping",
            role: "910169062510833704",
            emoji: "🤝",
        });

        const ContentPing = SelectMenuManager.createRole({
            label: "Content Ping",
            role: "910303931333238814",
            emoji: "🔥",
        });

        const GiveawayPing = SelectMenuManager.createRole({
            label: "Giveaway Ping",
            role: "910854269064843316",
            emoji: "🎉",
        });

        const SpiralAbyssPing = SelectMenuManager.createRole({
            label: "Spiral Abyss Ping",
            role: "909621805986230302",
            emoji: "🛐",
        });

        const AnimangaPing = SelectMenuManager.createRole({
            label: "Animanga Ping",
            role: "911193934053654538",
            emoji: "🍥",
        });

        const VtuberPing = SelectMenuManager.createRole({
            label: "V-tuber Ping",
            role: "911837444708655194",
            emoji: "🐇",
        });

        return SelectMenuManager.createMenus({
            type: "SINGLE",
            role: [PartnerPing, ContentPing, GiveawayPing, SpiralAbyssPing, AnimangaPing, VtuberPing],
            content: new IMessageEmbed()
            .setAuthor(`・ ✦ — GIID PING ROLES`)
            .setColor("#A5D5EB")
            .setDescription(`Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ 🤝 ・ <@&910169062510833704>\nPing untuk mendapatkan notifikasi terkait Partnership Server Genshin Impact ID\n\n➭⠀ 🔥 ・ <@&910303931333238814>\nPing untuk mendapat notifikasi konten terbaru dari Content Creator GIID\n\n➭⠀ 🎉 ・ <@&910854269064843316>\nPing untuk mendapatkan notifikasi Giveaway\n\n➭⠀ 🛐 ・ <@&909621805986230302>\nPing untuk mendapatkan notifikasi terkait spiral abyss\n\n➭⠀ 🍥 ・ <@&911193934053654538>\nPing untuk mendapatkan notifikasi terkait anime, manga, dan sejenisnya.\n\n➭⠀ 🐰 ・ <@&911837444708655194>\nPing untuk mendapatkan notifikasi terkait Virtual Youtubers\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n`)
            .setFooter(`${bot.username} - Developed by Zarr#2072`, bot.displayAvatarURL({ dynamic: true, size: 512 })),
            channelId: message.channel.id,
        });
    }
}