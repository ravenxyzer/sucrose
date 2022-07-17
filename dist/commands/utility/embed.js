"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
const discord_js_1 = require("discord.js");
const IDatabase_1 = require("../../database/IDatabase");
const IButton_1 = require("../../structures/client/message/IButton");
const IMessageEmbed_1 = require("../../structures/client/message/IMessageEmbed");
let ColorRolesCommand = class ColorRolesCommand extends framework_1.Command {
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const option = args.finished ? null : yield args.pick('string');
            const bot = this.container.client.user;
            if ((yield option) === null) {
                const reply = new discord_js_1.MessageEmbed()
                    .setTitle(`・ ✦ — Wrong Syntax!`)
                    .setDescription(`**Ekspektasi Argumen**: \` <opsi> \`\nGunakan perintah ***s.embed lists*** untuk detail lebih lanjut.`)
                    .setColor("RED");
                return yield message.reply({ embeds: [reply] });
            }
            else if (option) {
                const id = yield option.toLowerCase();
                if (id === "color") {
                    yield message.delete();
                    const ButtonManager = new IButton_1.IButton(this.container.client);
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
                    const panel = new IMessageEmbed_1.IMessageEmbed()
                        .setTitle(`${IDatabase_1.Content.utiltity.embed.colorRoles.title}`)
                        .setDescription(`${IDatabase_1.Content.utiltity.embed.colorRoles.description}`);
                    panel.setFooter({ text: `Created - ${IDatabase_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    return ButtonManager.createButtons({
                        role: [Meerblau, Witwenlippen, Pandanblätter, UnfruchtbaresLand, Lavendel],
                        content: panel,
                        channelId: message.channel.id,
                    });
                }
                else if (id === "game") {
                    yield message.delete();
                    const ButtonManager = new IButton_1.IButton(this.container.client);
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
                    const panel = new IMessageEmbed_1.IMessageEmbed()
                        .setTitle(`${IDatabase_1.Content.utiltity.embed.gameRoles.title}`)
                        .setDescription(`${IDatabase_1.Content.utiltity.embed.gameRoles.description}`);
                    panel.setFooter({ text: `${bot.username} - ${IDatabase_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    return ButtonManager.createButtons({
                        role: [ApexRole, GenshinRole, HonkaiRole, MobileLegendsRole, ValorantRole],
                        content: panel,
                        channelId: message.channel.id,
                    });
                }
                else if (id === "gender") {
                    yield message.delete();
                    const ButtonsManager = new IButton_1.IButton(this.container.client);
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
                    const panel = new IMessageEmbed_1.IMessageEmbed()
                        .setTitle(`${IDatabase_1.Content.utiltity.embed.genderRoles.title}`)
                        .setDescription(`${IDatabase_1.Content.utiltity.embed.genderRoles.description}`);
                    panel.setFooter({ text: ` - ${IDatabase_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    return ButtonsManager.createButtons({
                        role: [Male, Unknown],
                        content: panel,
                        channelId: message.channel.id,
                    });
                }
                else if (id === "special") {
                    yield message.delete();
                    const ButtonManager = new IButton_1.IButton(this.container.client);
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
                    });
                    const panel = new IMessageEmbed_1.IMessageEmbed()
                        .setTitle(`${IDatabase_1.Content.utiltity.embed.mainPingRoles.title}`)
                        .setDescription(`${IDatabase_1.Content.utiltity.embed.mainPingRoles.description}`);
                    panel.setFooter({ text: `${bot.username} - ${IDatabase_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    return ButtonManager.createButtons({
                        role: [ContentPing, GiveawayPing, PartnerPing, ServerUpdatePing],
                        content: panel,
                        channelId: message.channel.id,
                    });
                }
                else if (id === "other") {
                    yield message.delete();
                    const ButtonManager = new IButton_1.IButton(this.container.client);
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
                    const panel = new IMessageEmbed_1.IMessageEmbed()
                        .setTitle(`${IDatabase_1.Content.utiltity.embed.otherPingRoles.title}`)
                        .setDescription(`${IDatabase_1.Content.utiltity.embed.otherPingRoles.description}`);
                    panel.setFooter({ text: `${bot.username} - ${IDatabase_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    return ButtonManager.createButtons({
                        role: [AnimangaPing, FreeGamesPing, VtuberPing],
                        content: panel,
                        channelId: message.channel.id,
                    });
                }
                else if (id === "list") {
                    const panel = new IMessageEmbed_1.IMessageEmbed()
                        .setTitle(`${IDatabase_1.Content.utiltity.embed.list.title}`)
                        .setDescription(`${IDatabase_1.Content.utiltity.embed.list.description}`);
                    panel.setFooter({ text: `${bot.username} - ${IDatabase_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    yield message.reply({ embeds: [panel] });
                }
            }
            return;
        });
    }
};
ColorRolesCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "embed",
        aliases: ['embs'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
        cooldownDelay: 1000 /* Time.Second */ * 5
    })
], ColorRolesCommand);
exports.default = ColorRolesCommand;
