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
const IButton_1 = require("../../structures/client/message/IButton");
const IMessageEmbed_1 = require("../../structures/client/message/IMessageEmbed");
let colorRolesEmbedCommand = class colorRolesEmbedCommand extends framework_1.Command {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const bot = this.container.client.user;
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
            const Abendsonne = ButtonManager.createRole({
                color: "SECONDARY",
                label: "",
                role: "909738728413626429",
                emoji: "🟠",
            });
            const Lavendel = ButtonManager.createRole({
                color: "SECONDARY",
                label: "",
                role: "909739425045553153",
                emoji: "🟣",
            });
            return ButtonManager.createButtons({
                role: [Meerblau, Witwenlippen, Pandanblätter, UnfruchtbaresLand, Abendsonne, Lavendel],
                content: new IMessageEmbed_1.IMessageEmbed()
                    .setTitle(`・ ✦ — GIID COLOR ROLES`)
                    .setColor("#A5D5EB")
                    .setDescription(`Silakan mengambil role yang anda inginkan untuk memberi warna pada _nickname_ kalian.\n\n➭⠀ 🔵 ・ <@&909737734346780693>\n\n➭⠀ 🔴 ・ <@&909739014007963679>\n\n➭⠀ 🟢 ・ <@&909737967176806400>\n\n➭⠀ 🟡 ・ <@&909738531407159326>\n\n➭⠀ 🟠 ・ <@&909738728413626429>\n\n➭⠀ 🟣 ・ <@&909739425045553153>\n\nDimohon untuk tidak spam agar tidak terjadi error yang tidak diinginkan.\n⠀`),
                channelId: message.channel.id,
            });
        });
    }
};
colorRolesEmbedCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "colorRolesEmbed",
        aliases: ['colorRole', 'colorRoles', 'colorrole', 'colorroles', 'colorrolesembed'],
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], colorRolesEmbedCommand);
exports.default = colorRolesEmbedCommand;
