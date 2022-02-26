import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Message } from "discord.js";
import { ISelectMenu } from "../../structures/client/message/ISelectMenu";

@ApplyOptions<CommandOptions>({
    name: "colorRolesEmbed",
    aliases: ['colorRole', 'colorRoles', 'colorrole', 'colorroles', 'colorrolesembed'],
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

        const Meerblau = SelectMenuManager.createRole({
            label: "Meerblau",
            role: "909737734346780693",
            emoji: "🔵",
        });

        const Witwenlippen = SelectMenuManager.createRole({
            label: "Witwenlippen",
            role: "909739014007963679",
            emoji: "🔴",
        });

        const Pandanblätter = SelectMenuManager.createRole({
            label: "Pandanblätter",
            role: "909737967176806400",
            emoji: "🟢",
        });

        const UnfruchtbaresLand = SelectMenuManager.createRole({
            label: "Unfruchtbares Land",
            role: "909738531407159326",
            emoji: "🟡",
        });

        const Abendsonne = SelectMenuManager.createRole({
            label: "Abendsonne",
            role: "909738728413626429",
            emoji: "🟠",
        });

        const Lavendel = SelectMenuManager.createRole({
            label: "Lavendel",
            role: "909739425045553153",
            emoji: "🟣",
        });

        return SelectMenuManager.createMenus({
            type: "SINGLE",
            role: [Meerblau, Witwenlippen, Pandanblätter, UnfruchtbaresLand, Abendsonne, Lavendel],
            content: new IMessageEmbed()
            .setAuthor(`・ ✦ — GIID COLOR ROLES`)
            .setColor("#A5D5EB")
            .setDescription(`Silakan mengambil role yang anda inginkan untuk memberi warna pada _nickname_ kalian.\n\n➭⠀ 🔵 ・ <@&909737734346780693>\n\n➭⠀ 🔴 ・ <@&909739014007963679>\n\n➭⠀ 🟢 ・ <@&909737967176806400>\n\n➭⠀ 🟡 ・ <@&909738531407159326>\n\n➭⠀ 🟠 ・ <@&909738728413626429>\n\n➭⠀ 🟣 ・ <@&909739425045553153>\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n`)
            .setFooter(`${bot.username} - Developed by Zarr#2072`, bot.displayAvatarURL({ dynamic: true, size: 512 })),
            channelId: message.channel.id,

        });
    }
}