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
                content: new IMessageEmbed_1.IMessageEmbed()
                    .setAuthor(`・ ✦ — GIID GAME ROLES`)
                    .setThumbnail(bot.displayAvatarURL({ dynamic: true, size: 512 }))
                    .setColor("#A5D5EB")
                    .setDescription(`Silakan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ <:Genshin_Impact:910879454631452692> ・ <@&909622094814388254>\nPing untuk merekrut Party Genshin Impact\n\n➭⠀ <:Honkai_Impact:910885561181552641> ・ <@&909600627280187402>\nPing untuk pemain Honkai Impact 3rd\n\n➭⠀ <:Mobile_Legends:910879482854916097> ・ <@&909600003197132821>\nPing untuk pemain Mobile Legends : Bang Bang\n\n➭⠀ <:Valorant:910886919464943641> ・ <@&909600531431952434>\nPing untuk pemain Valorant\n\n➭⠀ <:Minecraft:910887582378901555> ・ <@&909600734956359750>\nPing untuk pemain Minecraft\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n`)
                    .setFooter(`${bot.username} - Developed by Zarr#2072`, bot.displayAvatarURL({ dynamic: true, size: 512 })),
                channelId: message.channel.id,
            });
        });
    }
};
PingRolesEmbedCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "gameRolesEmbed",
        aliases: ['gameRole', 'gameRoles', 'gamerole', 'gameroles', 'gamerolesembed'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], PingRolesEmbedCommand);
exports.default = PingRolesEmbedCommand;
