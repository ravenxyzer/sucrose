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
const IMessageEmbed_1 = require("../../structures/client/message/IMessageEmbed");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const ISelectMenu_1 = require("../../structures/client/message/ISelectMenu");
let PingRolesEmbedCommand = class PingRolesEmbedCommand extends framework_1.Command {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const bot = this.container.client.user;
            const SelectMenuManager = new ISelectMenu_1.ISelectMenu(this.container.client);
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
                content: new IMessageEmbed_1.IMessageEmbed()
                    .setAuthor(`・ ✦ — GIID PING ROLES`)
                    .setColor("#A5D5EB")
                    .setDescription(`Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ 🤝 ・ <@&910169062510833704>\nPing untuk mendapatkan notifikasi terkait Partnership Server Genshin Impact ID\n\n➭⠀ 🔥 ・ <@&910303931333238814>\nPing untuk mendapat notifikasi konten terbaru dari Content Creator GIID\n\n➭⠀ 🎉 ・ <@&910854269064843316>\nPing untuk mendapatkan notifikasi Giveaway\n\n➭⠀ 🛐 ・ <@&909621805986230302>\nPing untuk mendapatkan notifikasi terkait spiral abyss\n\n➭⠀ 🍥 ・ <@&911193934053654538>\nPing untuk mendapatkan notifikasi terkait anime, manga, dan sejenisnya.\n\n➭⠀ 🐰 ・ <@&911837444708655194>\nPing untuk mendapatkan notifikasi terkait Virtual Youtubers\n`)
                    .setFooter(`${bot.username} - Developed by Zarr#2072`, bot.displayAvatarURL({ dynamic: true, size: 512 })),
                channelId: message.channel.id,
            });
        });
    }
};
PingRolesEmbedCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "pingRolesEmbed",
        aliases: ['pingRole', 'pingRoles'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], PingRolesEmbedCommand);
exports.default = PingRolesEmbedCommand;
