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
let MiscellaneousPingRolesCommand = class MiscellaneousPingRolesCommand extends framework_1.Command {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const bot = this.container.client.user;
            const ButtonManager = new IButton_1.IButton(this.container.client);
            const AnimangaPing = ButtonManager.createRole({
                color: "SECONDARY",
                label: "Animanga",
                role: "911193934053654538",
                emoji: "🍥",
            });
            const ContentPing = ButtonManager.createRole({
                color: "SECONDARY",
                label: "Content",
                role: "910303931333238814",
                emoji: "🔥",
            });
            const SpiralAbyssPing = ButtonManager.createRole({
                color: "SECONDARY",
                label: "Spiral Abyss",
                role: "909621805986230302",
                emoji: "🛐",
            });
            const VtuberPing = ButtonManager.createRole({
                color: "SECONDARY",
                label: "V-tuber",
                role: "911837444708655194",
                emoji: "🐇",
            });
            const panel = new IMessageEmbed_1.IMessageEmbed()
                .setTitle(`・ ✦ — GIID Miscellaneous Ping Roles`)
                .setDescription(`Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n➭⠀ 🍥 ・ <@&911193934053654538>\nPing untuk mendapatkan notifikasi terkait anime, manga, dan sejenisnya.\n\n➭⠀ 🔥 ・ <@&910303931333238814>\nPing untuk mendapat notifikasi konten terbaru dari Content Creator GIID\n\n➭⠀ 🛐 ・ <@&909621805986230302>\nPing untuk mendapatkan notifikasi terkait __spiral abyss__.\n\n➭⠀ 🐇 ・ <@&911837444708655194>\nPing untuk mendapatkan notifikasi terkait Virtual Youtubers\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`);
            panel.setFooter({ text: `${bot.username} - ${IPersonal_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
            return ButtonManager.createButtons({
                role: [AnimangaPing, ContentPing, SpiralAbyssPing, VtuberPing],
                content: panel,
                channelId: message.channel.id,
            });
        });
    }
};
MiscellaneousPingRolesCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "miscpingRolesEmbed",
        aliases: ['miscpingRole', 'miscpingRoles', 'miscpingrole', 'miscpingroles', 'miscpingrolesembed'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], MiscellaneousPingRolesCommand);
exports.default = MiscellaneousPingRolesCommand;
