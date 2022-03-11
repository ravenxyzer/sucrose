import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Aboutme } from "../../structures/client/message/IPersonal"
import { IButton } from "../../structures/client/message/IButton";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Message } from "discord.js";

@ApplyOptions<CommandOptions>({
    name: "mainPingRolesEmbed",
    aliases: ['mainpingRole', 'mainpingRoles', 'mainpingrole', 'mainpingroles', 'mainpingrolesembed'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],
})
export default class MainPingRolesCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();
        const bot = this.container.client.user
        const ButtonManager = new IButton(this.container.client);
        
        const GiveawayPing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "Giveaway",
            role: "910854269064843316",
            emoji: "🎉",
        });

        const PartnerPing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "GIID Partner",
            role: "910169062510833704",
            emoji: "🤝",
        });

        const ServerUpdatePing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "Server Update",
            role: "944916013617655850",
            emoji: "📊"
        })

        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — GIID Main Ping Roles`)
        .setDescription(`Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ 🎉 ・ <@&910854269064843316>\nPing untuk mendapatkan notifikasi __giveaway__.\n\n➭⠀ 🤝 ・ <@&910169062510833704>\nPing untuk mendapat notifikasi terkait Partnership Server Genshin Impact ID.\n\n➭⠀ 📊 ・ <@&944916013617655850>\nPing untuk mendapatkan notifikasi terkait perkembangan server.\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`)
        panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})

        return ButtonManager.createButtons({
            role: [PartnerPing, GiveawayPing, ServerUpdatePing],
            content: panel,
            channelId: message.channel.id,
        });
    }
}