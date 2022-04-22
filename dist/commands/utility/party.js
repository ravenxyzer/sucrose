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
const IMessageEmbed_1 = require("../../structures/client/message/IMessageEmbed");
const IDatabase_1 = require("../../database/IDatabase");
let EmbedCommand = class EmbedCommand extends framework_1.Command {
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            // s.party wl uid keterangan
            const help_channel = this.container.client.channels.cache.get('961263080002715700');
            const user = message.author;
            const wl = yield args.pick("integer").catch(() => "No_WL");
            const uid = yield args.pick("integer").catch(() => "No_UID");
            const desc = yield args.rest("string").catch(() => "No_Desc");
            const errMessage = IDatabase_1.Content.utiltity.party.error;
            if ((yield wl) === "No_WL") {
                return message.reply(`${errMessage}`);
            }
            else if ((yield uid) === "No_UID") {
                return message.reply(`${errMessage}`);
            }
            else if ((yield desc) === "No_Desc") {
                return message.reply(`${errMessage}`);
            }
            yield message.delete();
            const panel = new IMessageEmbed_1.IMessageEmbed()
                .setTitle(`・ ✦ — Genshin Party`)
                .setDescription(`**World Level**: ${yield wl.toString().substring(0, 1)}\n**UID**: ${yield uid.toString().substring(0, 9)}\n**Description**: ${yield desc}`)
                .setTimestamp()
                .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }));
            panel.setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL({ dynamic: true, size: 512 }) });
            const response = yield message.channel.send({ content: `${user} Butuh party nih. \\📢 ${IDatabase_1.Role.GIID.genshinParty.tag}`, embeds: [panel] });
            response.react("👍");
            const help = new IMessageEmbed_1.IMessageEmbed()
                .setTimestamp()
                .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setDescription(`**World Level**: ${yield wl.toString().substring(0, 1)}\n**UID**: ${yield uid.toString().substring(0, 9)}\n**Description**: ${yield desc}\n\n**Request by**: <@${message.author.id}>\n**in Channel**: <#${message.channelId}>`);
            help.setFooter({ text: `Requested by ${user.tag}`, iconURL: user.displayAvatarURL({ dynamic: true, size: 512 }) });
            const helpMsg = yield help_channel.send({ content: `Tolong dibantu party-nya, \\📢 ${IDatabase_1.Role.GIID.giidStaff.tag}`, embeds: [help] });
            helpMsg.react("👍");
            return;
        });
    }
};
EmbedCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "party",
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        cooldownDelay: 1000 /* Second */ * 5
    })
], EmbedCommand);
exports.default = EmbedCommand;
