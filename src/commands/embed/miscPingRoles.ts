import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Aboutme } from "../../structures/client/message/IPersonal"
import { IButton } from "../../structures/client/message/IButton";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Message } from "discord.js";

@ApplyOptions<CommandOptions>({
    name: "miscpingRolesEmbed",
    aliases: ['miscpingRole', 'miscpingRoles', 'miscpingrole', 'miscpingroles', 'miscpingrolesembed'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],
})
export default class  MiscellaneousPingRolesCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();
        const bot = this.container.client.user
        const ButtonManager = new IButton(this.container.client);

        const AnimangaPing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "911193934053654538",
            emoji: "🍥",
        });

        const ContentPing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "910303931333238814",
            emoji: "🔥",
        });

        const SpiralAbyssPing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "909621805986230302",
            emoji: "🛐",
        });

        const VtuberPing = ButtonManager.createRole({
            color: "SECONDARY",
            label: "",
            role: "911837444708655194",
            emoji: "🐇",
        });

        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — GIID Miscellaneous Ping Roles`)
        .setDescription(`Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ 🍥 ・ <@&911193934053654538>\nPing untuk mendapatkan notifikasi terkait anime, manga, dan sejenisnya.\n\n➭⠀ 🔥 ・ <@&910303931333238814>\nPing untuk mendapat notifikasi konten terbaru dari Content Creator GIID\n\n➭⠀ 🛐 ・ <@&909621805986230302>\nPing untuk mendapatkan notifikasi terkait __spiral abyss__.\n\n➭⠀ 🐇 ・ <@&911837444708655194>\nPing untuk mendapatkan notifikasi terkait Virtual Youtubers\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`)
        panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})

        return ButtonManager.createButtons({
            role: [AnimangaPing, ContentPing, SpiralAbyssPing, VtuberPing],
            content: panel,
            channelId: message.channel.id,
        });
    }
}