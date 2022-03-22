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
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const IPersonal_1 = require("../../structures/client/message/IPersonal");
const IButton_1 = require("../../structures/client/message/IButton");
const IMessageEmbed_1 = require("../../structures/client/message/IMessageEmbed");
let PingRolesCommand = class PingRolesCommand extends framework_1.Command {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const bot = this.container.client.user;
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
                .setTitle(`・ ✦ — GIID Game Roles`)
                .setDescription(`Silakan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ <:Item_Apex_Legends:955112548909326386> ・ <@&909600734956359750>\nPing untuk pemain Apex Legends PC/Mobile.\n\n➭⠀ <:Genshin_Impact:910879454631452692> ・ <@&909622094814388254>\nPing untuk merekrut Party Genshin Impact.\n\n➭⠀ <:Honkai_Impact:910885561181552641> ・ <@&909600627280187402>\nPing untuk pemain Honkai Impact 3rd.\n\n➭⠀ <:Mobile_Legends:910879482854916097> ・ <@&909600003197132821>\nPing untuk pemain Mobile Legends: Bang Bang.\n\n➭⠀ <:Valorant:910886919464943641> ・ <@&909600531431952434>\nPing untuk pemain Valorant.\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`);
            panel.setFooter({ text: `${bot.username} - ${IPersonal_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
            return ButtonManager.createButtons({
                role: [ApexRole, GenshinRole, HonkaiRole, MobileLegendsRole, ValorantRole],
                content: panel,
                channelId: message.channel.id,
            });
        });
    }
};
PingRolesCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "gameRolesEmbed",
        aliases: ['gameRole', 'gameRoles', 'gamerole', 'gameroles', 'gamerolesembed'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], PingRolesCommand);
exports.default = PingRolesCommand;
