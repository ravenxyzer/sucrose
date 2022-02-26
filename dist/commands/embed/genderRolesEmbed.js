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
const IButton_1 = require("../../structures/client/message/IButton");
let ButtonsTestCommand = class ButtonsTestCommand extends framework_1.Command {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const bot = this.container.client.user;
            const ButtonsManager = new IButton_1.IButton(this.container.client);
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
            return ButtonsManager.createButtons({
                role: [Male, Diam],
                content: new IMessageEmbed_1.IMessageEmbed()
                    .setAuthor(`・ ✦ — GIID GENDER ROLES`)
                    .setDescription(`Silakan mengambil role sesuai gender kalian untuk menentukan siapa diri kalian.\n\n➭⠀ ♂️・<@&910146592911282246>\nRole untuk laki-laki pencari cinta sejati.\n\n➭⠀ 🤫・<@&910153940778229760>\nRole jika kalian ingin merahasiakan gender kalian.\n\nUntuk mendapatkan role <@&910146913351925780> silakan verifikasi diri anda kepada moderator <@&909783019601158194> atau <@&909440113006751765> yang sedang _online_ untuk mendapatkannya.\n`)
                    .setColor('#A5D5EB')
                    .setFooter(`${bot.username} - Developed by Zarr#2072`, bot.displayAvatarURL({ dynamic: true, size: 512 })),
                channelId: message.channel.id,
            });
        });
    }
};
ButtonsTestCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "genderRolesEmbed",
        aliases: ['genderRole', 'genderRoles'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], ButtonsTestCommand);
exports.default = ButtonsTestCommand;
