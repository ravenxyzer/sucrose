import { Args, Command, CommandOptions } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { Time } from "@sapphire/time-utilities"
import { Message, MessageEmbed } from "discord.js";

import { Content, Aboutme } from "../../database/IDatabase"
import { IButton } from "../../structures/client/message/IButton";
import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";


@ApplyOptions<CommandOptions>({
    name: "embed",
    aliases: ['embs'],
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    requiredUserPermissions: ["ADMINISTRATOR"],
    cooldownDelay: Time.Second * 5 
})
export default class ColorRolesCommand extends Command {
    public async messageRun(message: Message, args: Args): Promise<Message> {
        const option = args.finished ? null : await args.pick('string');
        const bot = this.container.client.user;

        if (await option === null) {
            const reply = new MessageEmbed()
            .setTitle(`・ ✦ — Wrong Syntax!`)
            .setDescription(`**Ekspektasi Argumen**: \` <opsi> \`\nGunakan perintah ***s.embed lists*** untuk detail lebih lanjut.`)
            .setColor("RED")
            return await message.reply({embeds: [reply]})
        } else if (option) {
            const id = await option.toLowerCase()
            if (id === "color") {
                await message.delete()
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
                .setTitle(`${Content.utiltity.embed.colorRoles.title}`)
                .setDescription(`${Content.utiltity.embed.colorRoles.description}`)
                panel.setFooter({text: `Created - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})

                return ButtonManager.createButtons({
                    role: [Meerblau, Witwenlippen, Pandanblätter, UnfruchtbaresLand, Lavendel],
                    content: panel,
                    channelId: message.channel.id,
                });
            } else if (id === "game") {
                await message.delete()
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
                .setTitle(`${Content.utiltity.embed.gameRoles.title}`)
                .setDescription(`${Content.utiltity.embed.gameRoles.description}`)
                panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
                
                return ButtonManager.createButtons({
                    role: [ApexRole, GenshinRole, HonkaiRole, MobileLegendsRole, ValorantRole],
                    content: panel,
                    channelId: message.channel.id,
                });
            } else if (id === "gender") {
                await message.delete();
                const ButtonsManager = new IButton(this.container.client);
                const Male = ButtonsManager.createRole({
                    color: "SECONDARY",
                    label: "Male",
                    role: "910146592911282246",
                    emoji: "♂️",
                });
        
                const Unknown = ButtonsManager.createRole({
                    color: "SECONDARY",
                    label: "Memilih Diam",
                    role: "910153940778229760",
                    emoji: "🤫",
                });
        
                const panel = new IMessageEmbed()
                .setTitle(`${Content.utiltity.embed.genderRoles.title}`)
                .setDescription(`${Content.utiltity.embed.genderRoles.description}`)
                panel.setFooter({text: ` - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
                
                return ButtonsManager.createButtons({
                    role: [Male, Unknown],
                    content: panel,
                    channelId: message.channel.id,
                });
            } else if (id === "special") {
                await message.delete();
                const ButtonManager = new IButton(this.container.client);

                const ContentPing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "910303931333238814",
                    emoji: "🔥",
                });

                const GiveawayPing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "910854269064843316",
                    emoji: "🎉",
                });
        
                const PartnerPing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "910169062510833704",
                    emoji: "🤝",
                });
        
                const ServerUpdatePing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "944916013617655850",
                    emoji: "📊"
                })
        
                const panel = new IMessageEmbed()
                .setTitle(`${Content.utiltity.embed.mainPingRoles.title}`)
                .setDescription(`${Content.utiltity.embed.mainPingRoles.description}`)
                panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
        
                return ButtonManager.createButtons({
                    role: [ContentPing, GiveawayPing, PartnerPing, ServerUpdatePing],
                    content: panel,
                    channelId: message.channel.id,
                });
            } else if (id === "other") {
                await message.delete();
                const ButtonManager = new IButton(this.container.client);
        
                const AnimangaPing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "911193934053654538",
                    emoji: "🍥",
                });

                const FreeGamesPing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "993026893685211136",
                    emoji: "🎮",
                });
        
                const VtuberPing = ButtonManager.createRole({
                    color: "SECONDARY",
                    label: "",
                    role: "911837444708655194",
                    emoji: "🐇",
                });
        
                const panel = new IMessageEmbed()
                .setTitle(`${Content.utiltity.embed.otherPingRoles.title}`)
                .setDescription(`${Content.utiltity.embed.otherPingRoles.description}`)
                panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
        
                return ButtonManager.createButtons({
                    role: [AnimangaPing, FreeGamesPing, VtuberPing],
                    content: panel,
                    channelId: message.channel.id,
                });
                
            } else if (id === "list") {
                const panel = new IMessageEmbed()
                .setTitle(`${Content.utiltity.embed.list.title}`)
                .setDescription(`${Content.utiltity.embed.list.description}`)
                panel.setFooter({text: `${bot.username} - ${Aboutme.watermark}`, iconURL: bot.displayAvatarURL({dynamic: true, size: 512})})
                await message.reply({embeds: [panel]})
            } 
        }
        return;
    }
}