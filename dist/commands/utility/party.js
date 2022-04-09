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
let ColorRolesCommand = class ColorRolesCommand extends framework_1.Command {
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            // s.party wl uid keterangan
            const help_channel = this.container.client.channels.cache.get('961263080002715700');
            const user = message.author;
            const wl = yield args.pick("integer").catch(() => "No_WL");
            const uid = yield args.pick("integer").catch(() => "No_UID");
            const desc = yield args.rest("string").catch(() => "No_Desc");
            if ((yield wl) === "No_WL") {
                return message.reply(`・ ✦ — Wrong Syntax\nExpected Arguments: \` <WL: Number> \` \` <UID: Number> \` \` <Description: Text> \``);
            }
            else if ((yield uid) === "No_UID") {
                return message.reply(`・ ✦ — Wrong Syntax\nExpected Arguments: \` <UID: Number> \` \` <Description: Text> \``);
            }
            else if ((yield desc) === "No_Desc") {
                return message.reply(`・ ✦ — Wrong Syntax\nExpected Arguments: \` <Description: Text> \``);
            }
            yield message.delete();
            const panel = new IMessageEmbed_1.IMessageEmbed()
                .setTitle(`・ ✦ — Genshin Party`)
                .setDescription(`**World Level**: ${yield wl.toString().substring(0, 1)}\n**UID**: ${yield uid.toString().substring(0, 9)}\n**Description**: ${yield desc}`);
            panel.setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }));
            yield message.channel.send({ content: `Need Party!, Summon ${IDatabase_1.Role.GIID.genshinParty.tag}`, embeds: [panel] });
            const helper = new IMessageEmbed_1.IMessageEmbed()
                .setTitle(`・ ✦ — Genshin Party`)
                .setDescription(`**Request by**: ${message.author.username}\n**Channel**: <#${message.channelId}>\n\n**World Level**: ${yield wl.toString().substring(0, 1)}\n**UID**: ${yield uid.toString().substring(0, 9)}\n**Description**: ${yield desc}`);
            yield help_channel.send({ content: `Mohon dibantu\\🙏, ${IDatabase_1.Role.GIID.moderator.tag}`, embeds: [helper] });
            return;
        });
    }
};
ColorRolesCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "party",
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        requiredUserPermissions: ["ADMINISTRATOR"],
    })
], ColorRolesCommand);
exports.default = ColorRolesCommand;
