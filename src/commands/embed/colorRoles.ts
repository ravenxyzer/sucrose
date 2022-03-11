import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Aboutme } from "../../structures/client/message/IPersonal"
import { IButton } from "../../structures/client/message/IButton";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Message } from "discord.js";

@ApplyOptions<CommandOptions>({
    name: "colorRolesEmbed",
    aliases: ['colorRole', 'colorRoles', 'colorrole', 'colorroles', 'colorrolesembed'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],

})
export default class ColorRolesCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();
        const bot = this.container.client.user
        const ButtonManager = new IButton(this.container.client);

        const Meerblau = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909737734346780693",
            emoji: "🔵",
        });

        const Witwenlippen = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909739014007963679",
            emoji: "🔴",
        });

        const Pandanblätter = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909737967176806400",
            emoji: "🟢",
        });

        const UnfruchtbaresLand = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909738531407159326",
            emoji: "🟡",
        });

        const Lavendel = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909739425045553153",
            emoji: "🟣",
        });

        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — GIID Color Roles`)
        .setDescription(`Silakan mengambil role yang anda inginkan untuk memberi warna pada _nickname_ kalian.\n\n➭⠀ 🔵 ・ <@&909737734346780693>\n\n➭⠀ 🔴 ・ <@&909739014007963679>\n\n➭⠀ 🟢 ・ <@&909737967176806400>\n\n➭⠀ 🟡 ・ <@&909738531407159326>\n\n➭⠀ 🟣 ・ <@&909739425045553153>\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`)
        panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})

        return ButtonManager.createButtons({
            role: [Meerblau, Witwenlippen, Pandanblätter, UnfruchtbaresLand, Lavendel],
            content: panel,
            channelId: message.channel.id,
        });
    }
}