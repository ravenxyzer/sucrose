import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Aboutme } from "../../structures/client/message/IPersonal"
import { IButton } from "../../structures/client/message/IButton";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { Message } from "discord.js";


@ApplyOptions<CommandOptions>({
    name: "genderRolesEmbed",
    aliases: ['genderRole', 'genderRoles', 'genderrole', 'genderroles', 'genderrolesembed'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],
})
export default class GenderRolesCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();
        const bot = this.container.client.user
        const ButtonsManager = new IButton(this.container.client);

        const Male = ButtonsManager.createRole({
            color: "SECONDARY",
            label: "Male",
            role: "910146592911282246",
            emoji: "♂️",
        });

        const Diam = ButtonsManager.createRole({
            color: "SECONDARY",
            label: "Memilih Diam",
            role: "910153940778229760",
            emoji: "🤫",
        });

        const panel = new IMessageEmbed()
        .setTitle(`・ ✦ — GIID Gender Roles`)
        .setDescription(`Silakan mengambil role sesuai gender kalian untuk menentukan siapa diri kalian.\n\n➭⠀ ♂️・<@&910146592911282246>\nRole untuk laki-laki pencari cinta sejati.\n\n➭⠀ 🤫・<@&910153940778229760>\nRole jika kalian ingin merahasiakan gender kalian.\n\nUntuk mendapatkan role <@&910146913351925780> silakan verifikasi diri anda kepada moderator <@&909783019601158194> atau <@&909440113006751765> yang sedang _online_ untuk mendapatkannya.\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`)
        panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
        
        return ButtonsManager.createButtons({
            role: [Male, Diam],
            content: panel,
            channelId: message.channel.id,
        });
    }
}